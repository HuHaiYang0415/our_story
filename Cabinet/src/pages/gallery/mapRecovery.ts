import type { MapState } from './map/geography';
const KEY = 'our-story:gallery-recovery:v1';
export interface GalleryRecovery { filter: { albumId: string; year: string }; position: number; mapState: MapState }
export function readGalleryRecovery(): GalleryRecovery | null {
  try {
    const raw = sessionStorage.getItem(KEY); if (!raw) return null;
    const value = JSON.parse(raw);
    if (value.schema !== 1 || Date.now() - value.at > 600_000 || value.at > Date.now() || !value.filter || typeof value.filter.albumId !== 'string' || typeof value.filter.year !== 'string' || !Number.isFinite(value.position)) return null;
    const state = value.mapState;
    if (!state || ![state.zoom,state.panX,state.panY].every(Number.isFinite) || state.zoom < 1 || state.zoom > 4096 || Math.abs(state.panX) > 5e6 || Math.abs(state.panY) > 5e6) return null;
    return { filter: value.filter, position: value.position, mapState: state };
  } catch { return null; }
}
export function saveGalleryRecovery(value: GalleryRecovery) { try { sessionStorage.setItem(KEY, JSON.stringify({ ...value, schema: 1, at: Date.now() })); } catch { /* unavailable storage does not block the existing back action */ } }
export function clearGalleryRecovery() { try { sessionStorage.removeItem(KEY); } catch { /* storage is optional */ } }
