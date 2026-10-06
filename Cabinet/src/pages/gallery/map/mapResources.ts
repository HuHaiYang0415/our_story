import { galleryResourceUrl } from '../resourceUrls';
import { parseGeography, parseNaturalGeography, projectOsmCoordinate } from './geography';
import type { Geography, NaturalGeography } from './geography';
let base: Promise<{ world: Geography; cities: Geography }> | undefined;
let natural: Promise<NaturalGeography> | undefined;
let pending: AbortController | undefined;
let baseReady = false, naturalReady = false;
export const MAP_WARM_RAW_BYTES = 61_008 + 50_853 + 68_372;
async function json(file: string, signal?: AbortSignal, revalidate = false) {
  const controller = new AbortController();
  const abort = () => controller.abort(); signal?.addEventListener('abort', abort, { once: true });
  if (signal?.aborted) controller.abort();
  const timer = window.setTimeout(abort, 15_000);
  try { const url = galleryResourceUrl(`gallery/map/${file}`);
    const response = await fetch(url, { signal: controller.signal, cache: revalidate ? 'no-cache' : 'default' });
    if (!response.ok || !response.headers.get('content-type')?.includes('json')) throw Error('Map unavailable');
    const bytes = await response.arrayBuffer();
    if (controller.signal.aborted) throw new DOMException('Map canceled', 'AbortError');
    const expected = url.match(/\/versioned\/([a-f0-9]{64})\//)?.[1];
    if (expected && globalThis.crypto?.subtle) {
      const digest = await crypto.subtle.digest('SHA-256', bytes);
      const actual = [...new Uint8Array(digest)].map(value => value.toString(16).padStart(2, '0')).join('');
      if (actual !== expected) throw Error('Map version unavailable');
    }
    if (controller.signal.aborted) throw new DOMException('Map canceled', 'AbortError');
    return JSON.parse(new TextDecoder().decode(bytes));
  } finally { window.clearTimeout(timer); signal?.removeEventListener('abort', abort); }
}
export function cancelMapWarmup() {
  pending?.abort(); pending = undefined;
  if (!baseReady) base = undefined;
  if (!naturalReady) natural = undefined;
}
export function loadBaseMaps(revalidate = false, signal?: AbortSignal) {
  if (!base) { const requestSignal = signal ?? pending?.signal;
    const promise = (async () => { const china = await json('china-4.0.2.json', requestSignal, revalidate), zhejiang = await json('zhejiang-4.0.2.json', requestSignal, revalidate);
      const world = parseGeography(china, 34, projectOsmCoordinate), cities = parseGeography(zhejiang, 11, world.project); baseReady = true; return { world, cities }; })()
      .catch(error => { if (base === promise) base = undefined; throw error; }); base = promise; }
  const promise = base;
  const forget = () => { if (!baseReady && base === promise) base = undefined; };
  signal?.addEventListener('abort', forget, { once: true });
  const clean = () => signal?.removeEventListener('abort', forget);
  void promise.then(clean, clean);
  if (signal?.aborted) forget();
  return promise;
}
export function loadNaturalMap(project: Geography['project'], revalidate = false, signal?: AbortSignal) {
  if (!natural) { const promise = json('natural-earth-110m.json', signal ?? pending?.signal, revalidate).then(value => { const parsed = parseNaturalGeography(value, project); naturalReady = true; return parsed; }).catch(error => { if (natural === promise) natural = undefined; throw error; }); natural = promise; }
  const promise = natural;
  const forget = () => { if (!naturalReady && natural === promise) natural = undefined; };
  signal?.addEventListener('abort', forget, { once: true });
  const clean = () => signal?.removeEventListener('abort', forget);
  void promise.then(clean, clean);
  if (signal?.aborted) forget();
  return promise;
}
export async function warmMapResources(signal: AbortSignal) {
  if (signal.aborted) return;
  pending = new AbortController(); const own = pending; const abort = () => { own.abort(); if (pending === own) { pending = undefined; if (!baseReady) base = undefined; if (!naturalReady) natural = undefined; } }; signal.addEventListener('abort', abort, { once: true });
  try { const { world } = await loadBaseMaps(); if (!signal.aborted) await loadNaturalMap(world.project); }
  finally { signal.removeEventListener('abort', abort); if (pending === own) pending = undefined; }
}
