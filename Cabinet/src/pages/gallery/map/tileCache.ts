import { tileUrl } from './xyz';
import type { XyzTile } from './xyz';
import { onGalleryDispose } from '../gallerySession';
export type TileStatus = 'queued' | 'loading' | 'decoding' | 'ready' | 'failed' | 'canceled';
interface Entry { tile: XyzTile; image: HTMLImageElement; status: TileStatus; token: number; readyAt: number; expires: number; used: number; tries: number; timer: number; retry: number; controller?: AbortController; objectUrl?: string; encodedBytes: number }
export const TILE_LIMITS = { concurrency: 4, decoded: 48, bytes: 16 * 1024 * 1024, memoryMs: 60_000, timeoutMs: 12_000, retryMs: 750, oldLayerMs: 480 } as const;
export class TileCache {
  private entries = new Map<string, Entry>();
  private wanted = new Set<string>();
  private queue: string[] = [];
  private active = 0;
  private paused = true;
  private callback: (() => void) | undefined;
  private failures = 0;
  private blocked = false;
  readonly stats = { started: 0, canceled: 0, stale: 0, hits: 0, peak: 0, decodedBytes: 0, totalBytes: 0 };
  constructor(readonly template: string, readonly cors = template === 'https://tile.openstreetmap.org/{z}/{x}/{y}.png' || /^(?:\/(?!\/)|\.\.?\/)/.test(template)) {}
  listen(callback: () => void) { this.callback = callback; }
  hasFailed() { return [...this.entries.values()].some(e => this.wanted.has(e.tile.key) && e.status === 'failed'); }
  get(tile: XyzTile) { const e = this.entries.get(tile.key); return e?.status === 'ready' ? e.image : undefined; }
  update(tiles: readonly XyzTile[]) {
    this.wanted = new Set(tiles.map(tile => tile.key));
    for (const [key, e] of this.entries) if (!this.wanted.has(key)) {
      if (e.status === 'loading' || e.status === 'decoding') this.cancel(e);
      if (e.status === 'queued') e.status = 'canceled';
      window.clearTimeout(e.retry); e.retry = 0;
    }
    const now = Date.now(); this.queue = [];
    for (const tile of tiles) {
      let e = this.entries.get(tile.key);
      if (e?.status === 'ready' && now >= e.expires) { this.disposeImage(e); this.entries.delete(tile.key); e = undefined; }
      if (!e) { const image = new Image(); image.alt = ''; image.draggable = false; image.decoding = 'async'; image.dataset.xyz = tile.key;
        e = { tile, image, status: 'queued', token: 0, readyAt: 0, expires: 0, used: now, tries: 0, timer: 0, retry: 0, encodedBytes: 0 }; this.entries.set(tile.key, e); }
      e.tile = tile; e.used = now;
      if (e.status === 'ready') { this.stats.hits++; continue; }
      if (e.status === 'canceled') e.status = 'queued';
      if (e.status === 'queued') this.queue.push(tile.key);
    }
    this.evict(); this.callback?.(); this.pump();
  }
  pause(value: boolean) {
    this.paused = value;
    if (value) for (const e of this.entries.values()) if (e.status === 'loading' || e.status === 'decoding') { this.cancel(e); if (this.wanted.has(e.tile.key)) { e.status = 'queued'; this.queue.push(e.tile.key); } }
    this.pump();
  }
  private pump() {
    if (this.paused || this.blocked || this.failures >= 6) return;
    while (this.active < TILE_LIMITS.concurrency && this.queue.length) {
      const key = this.queue.shift()!, e = this.entries.get(key);
      if (!e || e.status !== 'queued' || !this.wanted.has(key)) continue;
      this.load(e);
    }
  }
  private load(e: Entry) {
    e.status = 'loading'; const token = ++e.token; e.tries++; this.active++; this.stats.started++; this.stats.peak = Math.max(this.stats.peak, this.active);
    const startedAt = Date.now(); let deadline = startedAt + TILE_LIMITS.memoryMs;
    const settle = (success: boolean, httpStatus = 0) => {
      if (e.token !== token) { this.stats.stale++; return; }
      ++e.token;
      window.clearTimeout(e.timer); e.image.onload = null; e.image.onerror = null; this.active--;
      if (success && this.wanted.has(e.tile.key) && !this.paused) { e.status = 'ready'; e.readyAt = Date.now(); e.expires = Math.min(deadline, e.readyAt + TILE_LIMITS.memoryMs); this.failures = 0; }
      else { e.status = 'failed'; if ([403,429].includes(httpStatus)) this.blocked = true; this.failures = this.blocked ? 6 : this.failures + 1; this.disposeImage(e);
        if (httpStatus !== 404 && e.tries < 2 && this.wanted.has(e.tile.key) && !this.paused && this.failures < 6) e.retry = window.setTimeout(() => { e.retry = 0; if (!this.wanted.has(e.tile.key) || this.paused) return; e.status = 'queued'; this.queue.push(e.tile.key); this.pump(); }, TILE_LIMITS.retryMs); }
      this.evict(); this.callback?.(); this.pump();
    };
    e.image.onload = () => { if (e.token !== token) return; e.status = 'decoding';
      const decode = typeof e.image.decode === 'function' ? e.image.decode() : Promise.resolve();
      void decode.then(() => settle(e.image.complete && e.image.naturalWidth > 0), () => settle(false)); };
    e.image.onerror = () => settle(false);
    e.timer = window.setTimeout(() => { if (e.token !== token) return; e.controller?.abort(); e.image.removeAttribute('src'); settle(false); }, TILE_LIMITS.timeoutMs);
    const url = tileUrl(this.template, e.tile);
    if (!this.cors) { e.image.src = url; return; }
    e.controller = new AbortController();
    // CORS verified for standard OSM; relative URLs are same-origin. No cache override.
    void fetch(url, { signal: e.controller.signal, credentials: 'omit' }).then(async response => {
      if (e.token !== token) return;
      if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) { settle(false, response.status); return; }
      const control = response.headers.get('cache-control') ?? '';
      const maxAge = control.match(/(?:^|,)\s*max-age=(\d+)/i)?.[1];
      const age = Number(response.headers.get('age') ?? 0);
      const expires = Date.parse(response.headers.get('expires') ?? '');
      const date = Date.parse(response.headers.get('date') ?? '');
      if (maxAge !== undefined) deadline = Math.min(deadline, (Number.isFinite(date) ? date : startedAt) + Math.max(0, Number(maxAge) - age) * 1000);
      if (Number.isFinite(expires)) deadline = Math.min(deadline, expires);
      if (!Number.isFinite(date) && !Number.isFinite(expires) || /\bno-cache\b|\bno-store\b/i.test(control)) deadline = startedAt;
      const blob = await response.blob(); if (e.token !== token) return;
      e.objectUrl = URL.createObjectURL(blob); e.encodedBytes = blob.size; e.image.src = e.objectUrl;
    }).catch(() => { if (e.token === token) settle(false); });
  }
  private cancel(e: Entry) {
    ++e.token; window.clearTimeout(e.timer); e.controller?.abort(); e.image.onload = null; e.image.onerror = null; this.disposeImage(e); e.status = 'canceled'; this.active--; this.stats.canceled++;
  }
  private disposeImage(e: Entry) { e.image.remove(); e.image.removeAttribute('src'); if (e.objectUrl) { URL.revokeObjectURL(e.objectUrl); e.objectUrl = undefined; } e.encodedBytes = 0; }
  private evict() {
    const ready = [...this.entries.values()].filter(e => e.status === 'ready');
    let bytes = ready.reduce((sum, e) => sum + e.image.naturalWidth * e.image.naturalHeight * 4 + e.encodedBytes, 0), count = ready.length;
    for (const e of ready.sort((a,b) => a.used - b.used)) {
      if (count <= TILE_LIMITS.decoded && bytes <= TILE_LIMITS.bytes) break;
      if (this.wanted.has(e.tile.key)) continue;
      bytes -= e.image.naturalWidth * e.image.naturalHeight * 4 + e.encodedBytes; count--; this.disposeImage(e); this.entries.delete(e.tile.key);
    }
    for (const [key,e] of this.entries) if (!this.wanted.has(key) && e.status !== 'ready') this.entries.delete(key);
    this.stats.totalBytes = bytes;
    this.stats.decodedBytes = [...this.entries.values()].filter(e=>e.status==='ready').reduce((sum,e)=>sum+e.image.naturalWidth*e.image.naturalHeight*4,0);
  }
  release() { this.pause(true); this.wanted.clear(); this.queue = []; this.callback = undefined; for (const e of this.entries.values()) { window.clearTimeout(e.retry); e.image.remove(); } this.failures = 0; this.blocked = false; this.evict(); }
  clear() { this.release(); for (const e of this.entries.values()) this.disposeImage(e); this.entries.clear(); this.stats.decodedBytes = 0; this.stats.totalBytes = 0; }
}
const sessions = new Map<string, TileCache>();
export function tileSession(template: string) {
  const key = `${template}|256|v1`;
  if (!sessions.has(key)) { for (const cache of sessions.values()) cache.clear(); sessions.clear(); sessions.set(key, new TileCache(template)); }
  return sessions.get(key)!;
}
// Keep the emptied handle stable across React's StrictMode effect replay.
export function clearTileSessions() { for (const cache of sessions.values()) cache.clear(); }
onGalleryDispose(clearTileSessions);
