import type { Album, AlbumPhoto, ContentDatePrecision, MediaAsset } from '@/domain/content';

export type GalleryPhoto = AlbumPhoto & { album: Album; asset?: MediaAsset; albumPhotoIndex: number };
export const wrapIndex = (index: number, length: number) => length ? ((index % length) + length) % length : 0;

/** Return the equivalent target index closest to an unbounded continuous phase. */
export function nearestPhaseTarget(phase: number, targetIndex: number, length: number): number {
  if (!length) return phase;
  const normalizedTarget = wrapIndex(targetIndex, length);
  const turns = Math.round((phase - normalizedTarget) / length);
  return normalizedTarget + turns * length;
}

export function orbitApproachDuration(distance: number): number {
  const steps = Math.abs(distance);
  if (steps < .02) return 0;
  return Math.round(Math.min(760, Math.max(220, 420 + steps * 120)));
}

export function formatGalleryDate(value?: string, precision?: ContentDatePrecision): string {
  if (!value || precision === 'unknown') return '';
  const match = value.match(/^\d{4}(?:-\d{2})?(?:-\d{2})?$/);
  if (!match) return '';
  return value.split('-').slice(0, precision === 'year' ? 1 : precision === 'month' ? 2 : 3).join('.');
}

export function albumDate(album: Album): string {
  const start = formatGalleryDate(album.startDate, album.datePrecision);
  const end = formatGalleryDate(album.endDate, album.datePrecision);
  return start && end && end !== start ? `${start}—${end}` : start;
}

export function resolvePhotos(album: Album, assets: ReadonlyMap<string, MediaAsset>): GalleryPhoto[] {
  return (album.photos ?? album.mediaAssetIds.map(mediaAssetId => ({ mediaAssetId }))).map((photo, albumPhotoIndex) => ({
    ...photo, album, albumPhotoIndex, asset: assets.get(photo.mediaAssetId),
  }));
}

export const photoTitle = (photo: GalleryPhoto) => photo.caption || photo.album.title;
export const photoFacts = (photo: GalleryPhoto) => [formatGalleryDate(photo.capturedAt) || albumDate(photo.album), photo.location || photo.album.location].filter(Boolean).join(' · ');

/** Bounded, distinct, content-ordered nodes, including even-length collections. */
export function orbitNodes(length: number, position: number, capacity: number) {
  const count = Math.min(length, capacity);
  const center = Math.round(position);
  const start = center - Math.floor(count / 2);
  return Array.from({ length: count }, (_, i) => ({ index: wrapIndex(start + i, length), offset: start + i - position }));
}

export function orbitGeometry(offset: number, count: number, width: number, height: number) {
  const small = count <= 3;
  const angle = offset * (small ? .78 : Math.PI * 2 / Math.max(5, count));
  const depth = small ? Math.max(0, 1 - Math.abs(offset) * .42) : (Math.cos(angle) + 1) / 2;
  const mobile = width < 600;
  const radius = width * (mobile ? .28 : .34);
  return {
    // The front cover stays at the measured stage center. Side and rear covers
    // climb along one shared ellipse instead of receiving per-card offsets.
    x: Math.sin(angle) * radius,
    y: -(1 - depth) * height * (mobile ? .19 : .21),
    scale: .46 + Math.pow(depth, 1.45) * .54,
    z: depth * 100,
    rotation: Math.sin(angle) * -24,
    tilt: Math.sin(angle) * 1.8,
    opacity: .62 + depth * .38,
  };
}
