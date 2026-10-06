import { useEffect, useMemo, useRef } from 'react';
import type { MapState } from './geography';
import { originalBusy, observeOriginal } from '../loadPriority';
import { visibleTiles } from './xyz';
import type { XyzTile } from './xyz';
import { tileSession, TILE_LIMITS } from './tileCache';
interface Props { template: string; state: MapState; fit: number; viewport: { width: number; height: number }; onFailure: (failed: boolean) => void }
export default function OsmTileLayer({ template, state, fit, viewport, onFailure }: Props) {
  const root = useRef<HTMLDivElement>(null), old = useRef<readonly XyzTile[]>([]), previous = useRef<readonly XyzTile[]>([]);
  const tiles = useMemo(() => visibleTiles(state, fit, viewport), [state.zoom, state.panX, state.panY, fit, viewport.width, viewport.height]);
  const desired = useRef(tiles); desired.current = tiles;
  const cache = useMemo(() => tileSession(template), [template]);
  const notify = useRef<() => void>(() => {});
  useEffect(() => {
    let frame = 0;
    const paint = () => {
      frame = 0; const node = root.current; if (!node) return;
      const current = desired.current, wanted = new Set(current.map(t => t.key));
      const ready = current.filter(tile => cache.get(tile));
      const visibleOld = old.current.filter(tile => !wanted.has(tile.key) && cache.get(tile));
      const order = [...(ready.length === current.length ? [] : visibleOld), ...ready];
      const images = new Set<HTMLImageElement>();
      for (const tile of order) {
        const image = cache.get(tile)!; images.add(image); image.dataset.old = String(!wanted.has(tile.key));
        Object.assign(image.style, { left: `${tile.left}px`, top: `${tile.top}px`, width: `${tile.width}px`, height: `${tile.height}px` });
        node.appendChild(image);
      }
      for (const child of [...node.children]) if (!images.has(child as HTMLImageElement)) child.remove();
      node.dataset.ready = String(ready.length); node.dataset.required = String(current.length); node.dataset.zoom = String(current[0]?.z ?? 3);
      node.dataset.active = String(cache.stats.peak); node.dataset.decodedBytes = String(cache.stats.decodedBytes);
      onFailure(cache.hasFailed());
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(paint); };
    notify.current = schedule; cache.listen(schedule);
    const activity = () => { const paused = document.hidden || originalBusy() || !navigator.onLine;
      if (!paused) cache.update(desired.current); cache.pause(paused); schedule(); };
    const stop = () => cache.pause(true);
    const unobserve = observeOriginal(activity);
    document.addEventListener('visibilitychange', activity); window.addEventListener('online', activity); window.addEventListener('offline', activity); window.addEventListener('pagehide', stop); window.addEventListener('pageshow', activity);
    activity(); schedule();
    return () => { window.cancelAnimationFrame(frame); unobserve(); document.removeEventListener('visibilitychange', activity); window.removeEventListener('online', activity); window.removeEventListener('offline', activity); window.removeEventListener('pagehide', stop); window.removeEventListener('pageshow', activity); cache.release(); };
  }, [cache, onFailure]);
  useEffect(() => {
    if (previous.current[0]?.z !== tiles[0]?.z) {
      const bounds = tiles.length ? { left: Math.min(...tiles.map(t=>t.left)), top: Math.min(...tiles.map(t=>t.top)), right: Math.max(...tiles.map(t=>t.left+t.width)), bottom: Math.max(...tiles.map(t=>t.top+t.height)) } : null;
      old.current = bounds ? previous.current.filter(t => cache.get(t) && t.left < bounds.right && t.left+t.width > bounds.left && t.top < bounds.bottom && t.top+t.height > bounds.top) : [];
    }
    previous.current = tiles; cache.update(tiles); notify.current();
    const timer = window.setTimeout(() => { old.current = []; notify.current(); }, TILE_LIMITS.oldLayerMs);
    return () => window.clearTimeout(timer);
  }, [cache, tiles]);
  return <div ref={root} className="gallery-map-osm-tiles" aria-hidden="true" />;
}
