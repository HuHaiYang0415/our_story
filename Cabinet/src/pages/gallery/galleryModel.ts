import type { Album, AlbumPhoto, ContentDatePrecision, MediaAsset } from '@/domain/content';

export type GalleryPhoto = AlbumPhoto & { album: Album; asset?: MediaAsset; albumPhotoIndex: number };
export const wrapIndex = (index: number, length: number) => length ? ((index % length) + length) % length : 0;

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
  const angle = offset * (small ? .68 : Math.PI * 2 / (count + 1));
  const depth = small ? Math.max(0, 1 - Math.abs(offset) * .4) : (Math.cos(angle) + 1) / 2;
  return {
    // Near-side paper remains separately suspended; rear nodes may overlap.
    x: Math.sin(angle) * width * (small ? .32 : .35 + .24 * Math.pow(depth, 4)),
    y: (small ? (depth - .65) : (depth - .5)) * height * .38,
    scale: .45 + Math.pow(depth, 2.5) * .55,
    z: depth * 100,
    rotation: Math.sin(angle) * -30,
    tilt: Math.sin(angle) * 3,
    opacity: .67 + depth * .33,
  };
}
