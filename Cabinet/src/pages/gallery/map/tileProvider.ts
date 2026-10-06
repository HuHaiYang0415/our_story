const standard = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const template = import.meta.env.VITE_GALLERY_OSM_TILE_URL?.trim() || standard;
/** Unknown/self-hosted endpoints do not acquire prefetch permission by classification. */
export const TILE_PROVIDER = {
  template, tileSize: 256, templateVersion: 1, minZ: 3, maxZ: 16,
  policy: template === standard ? 'osm-standard' : 'unverified-no-prefetch',
  prefetch: false,
  cors: template === standard || /^(?:\/(?!\/)|\.\.?\/)/.test(template),
  source: 'https://www.openstreetmap.org/copyright',
  license: 'https://opendatacommons.org/licenses/odbl/',
  checked: '2026-10-05', review: '2027-04-05',
} as const;
