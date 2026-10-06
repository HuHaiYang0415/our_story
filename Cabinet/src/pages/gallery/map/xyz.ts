import { MAP_HEIGHT, MAP_WIDTH, projectWebMercatorPoint, unprojectWebMercatorPoint } from './geography';
import type { MapState } from './geography';
export interface XyzTile { key: string; z: number; x: number; y: number; left: number; top: number; width: number; height: number; distance: number }
export const tileUrl = (template: string, tile: Pick<XyzTile, 'z' | 'x' | 'y'>) => template.replaceAll('{z}', String(tile.z)).replaceAll('{x}', String(tile.x)).replaceAll('{y}', String(tile.y));
/** Half-open screen bounds; tiles merely touching an edge are not downloaded. */
export function visibleTiles(state: MapState, fit: number, viewport: { width: number; height: number }): XyzTile[] {
  if (viewport.width <= 1 || viewport.height <= 1 || fit <= 0) return [];
  const z = Math.max(3, Math.min(16, Math.floor(3 + Math.log2(state.zoom))));
  const count = 2 ** z, scale = fit * state.zoom;
  const center = { x: MAP_WIDTH / 2 - state.panX / state.zoom, y: MAP_HEIGHT / 2 - state.panY / state.zoom };
  const start = unprojectWebMercatorPoint({ x: center.x - viewport.width / (2 * scale), y: center.y - viewport.height / (2 * scale) });
  const end = unprojectWebMercatorPoint({ x: center.x + viewport.width / (2 * scale), y: center.y + viewport.height / (2 * scale) });
  const minX = Math.max(0, Math.floor(start.x * count)), maxX = Math.min(count - 1, Math.ceil(end.x * count - 1e-10) - 1);
  const minY = Math.max(0, Math.floor(start.y * count)), maxY = Math.min(count - 1, Math.ceil(end.y * count - 1e-10) - 1);
  const tiles: XyzTile[] = [];
  for (let y = minY; y <= maxY; y++) for (let x = minX; x <= maxX; x++) {
    const nw = projectWebMercatorPoint({ x: x / count, y: y / count }), se = projectWebMercatorPoint({ x: (x + 1) / count, y: (y + 1) / count });
    tiles.push({ key: `${z}/${x}/${y}`, z, x, y, left: nw.x, top: nw.y, width: se.x - nw.x, height: se.y - nw.y,
      distance: Math.hypot((nw.x + se.x) / 2 - center.x, (nw.y + se.y) / 2 - center.y) * scale });
  }
  return tiles.sort((a, b) => a.distance - b.distance || a.y - b.y || a.x - b.x);
}
