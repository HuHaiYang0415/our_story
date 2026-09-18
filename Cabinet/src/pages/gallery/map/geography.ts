import type { Album } from '@/domain/content';

export const MAP_WIDTH = 1000;
export const MAP_HEIGHT = 780;
// One continuous world. Two levels only; city detail never rebases coordinates.
export const MAX_ZOOM = 40;
export const CITY_MAX_ZOOM = MAX_ZOOM;
export interface MapState { zoom: number; panX: number; panY: number; city?: string }
export const maxMapZoom = (_state: MapState) => MAX_ZOOM;
export interface Point { x: number; y: number }
export interface Region {
  name: string;
  path: string;
  center: Point;
  centroid: Point;
}
export interface Geography { regions: readonly Region[]; project: (coordinate: [number, number]) => Point }
export interface LocatedAlbum { album: Album; region: Region; precision: 'city' | 'province' }
export interface AlbumGroup { name: string; center: Point; albums: LocatedAlbum[] }
export interface AlbumPinGroup { id: string; city: string; center: Point; albums: LocatedAlbum[] }

/** Shared coordinates produce one pin, not overlapping unreachable covers. */
export function groupAlbumPins(group: AlbumGroup, anchor: (item: LocatedAlbum) => Point): AlbumPinGroup[] {
  const pins = new Map<string, AlbumPinGroup>();
  for (const item of group.albums) {
    const point = anchor(item);
    const id = `${group.name}:${point.x.toFixed(5)},${point.y.toFixed(5)}`;
    const pin = pins.get(id);
    if (pin) pin.albums.push(item);
    else pins.set(id, { id, city: group.name, center: point, albums: [item] });
  }
  return Array.from(pins.values());
}

type Position = [number, number];
type Ring = Position[];

function pair(value: unknown): Position {
  if (!Array.isArray(value) || value.length !== 2 || !value.every(Number.isFinite)) {
    throw new Error('Invalid map coordinate');
  }
  return value as Position;
}

// ECharts' lossless delta / zigzag representation of GeoJSON, scale 1024.
function decodeRing(value: unknown, offset: unknown, encoded: boolean): Ring {
  if (!encoded) {
    if (!Array.isArray(value) || value.length < 3) throw new Error('Invalid map ring');
    return value.map(pair);
  }
  if (typeof value !== 'string' || value.length < 6 || value.length % 2) throw new Error('Invalid encoded map ring');
  let [x, y] = pair(offset);
  const ring: Ring = [];
  for (let index = 0; index < value.length; index += 2) {
    const dx = value.charCodeAt(index) - 64;
    const dy = value.charCodeAt(index + 1) - 64;
    x += (dx >> 1) ^ -(dx & 1);
    y += (dy >> 1) ^ -(dy & 1);
    ring.push([x / 1024, y / 1024]);
  }
  return ring;
}

// A single equirectangular projection with longitude correction at 35°N.
// All rings, islands, province labels and album anchors use this projection.
export function parseGeography(value: unknown, minimumFeatures = 34, worldProject?: Geography['project']): Geography {
  const data = value as {
    type?: string; UTF8Encoding?: boolean;
    features?: { properties: { name: string; cp?: Position }; geometry: {
      type: string; coordinates: unknown[][]; encodeOffsets?: unknown[][];
    } }[];
  };
  if (data?.type !== 'FeatureCollection' || !Array.isArray(data.features) || data.features.length < minimumFeatures) {
    throw new Error('Invalid China map');
  }
  const decoded = data.features.map(feature => {
    if (typeof feature.properties?.name !== 'string') throw new Error('Invalid map label');
    const geometry = feature.geometry;
    if (!geometry || !['Polygon', 'MultiPolygon'].includes(geometry.type) || !Array.isArray(geometry.coordinates)) {
      throw new Error('Invalid map geometry');
    }
    const polygons = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates;
    const offsets = geometry.type === 'Polygon' ? [geometry.encodeOffsets] : geometry.encodeOffsets;
    const decodedPolygons = polygons.map((polygon, p) => {
      if (!Array.isArray(polygon)) throw new Error('Invalid map polygon');
      return polygon.map((ring, r) => decodeRing(ring, offsets?.[p]?.[r], data.UTF8Encoding === true));
    });
    return { name: feature.properties.name, cp: pair(feature.properties.cp ?? decodedPolygons[0]?.[0]?.[0]), polygons: decodedPolygons, rings: decodedPolygons.flat() };
  });
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  const longitudeScale = Math.cos(35 * Math.PI / 180);
  for (const region of decoded) for (const ring of region.rings) for (const [lng, lat] of ring) {
    if (lng < 60 || lng > 140 || lat < 0 || lat > 60) throw new Error('Map coordinate outside expected extent');
    minX = Math.min(minX, lng * longitudeScale); maxX = Math.max(maxX, lng * longitudeScale);
    minY = Math.min(minY, -lat); maxY = Math.max(maxY, -lat);
  }
  const scale = Math.min((MAP_WIDTH - 100) / (maxX - minX), (MAP_HEIGHT - 100) / (maxY - minY));
  if (!Number.isFinite(scale) || scale <= 0) throw new Error('Empty map geometry');
  const left = (MAP_WIDTH - (maxX - minX) * scale) / 2;
  const top = (MAP_HEIGHT - (maxY - minY) * scale) / 2;
  const project = worldProject ?? (([lng, lat]: Position): Point => ({
    x: left + (lng * longitudeScale - minX) * scale,
    y: top + (-lat - minY) * scale,
  }));
  const centroid = (polygons: Ring[][], fallback: Position): Point => {
    let weight = 0, weightedX = 0, weightedY = 0;
    for (const polygon of polygons) for (let ringIndex = 0; ringIndex < polygon.length; ringIndex++) {
      const ring = polygon[ringIndex];
      let area = 0, sumX = 0, sumY = 0;
      for (let index = 0; index < ring.length; index++) {
        const [x1, y1] = ring[index], [x2, y2] = ring[(index + 1) % ring.length];
        const cross = x1 * y2 - x2 * y1;
        area += cross; sumX += (x1 + x2) * cross; sumY += (y1 + y2) * cross;
      }
      if (Math.abs(area) < 1e-10) continue;
      const mass = Math.abs(area) * (ringIndex === 0 ? 1 : -1);
      weight += mass; weightedX += sumX / (3 * area) * mass; weightedY += sumY / (3 * area) * mass;
    }
    return project(weight > 0 ? [weightedX / weight, weightedY / weight] : fallback);
  };
  return { project, regions: decoded.map(region => ({
    name: region.name,
    center: project(region.cp),
    centroid: centroid(region.polygons, region.cp),
    path: region.rings.map(ring => ring.map((coordinate, index) => {
      const point = project(coordinate);
      return `${index ? 'L' : 'M'}${point.x.toFixed(worldProject ? 5 : 2)},${point.y.toFixed(worldProject ? 5 : 2)}`;
    }).join('') + 'Z').join(''),
  })) };
}

const MUNICIPALITIES = new Set(['上海', '北京', '天津', '重庆']);
const suffixes = /(?:特别行政区|壮族自治区|回族自治区|维吾尔自治区|自治区|省|市)$/;
const canonicalName = (name: string) => name.trim().replace(suffixes, '');

export function locateAlbums(albums: readonly Album[], geography: Geography, cities?: Geography): {
  groups: AlbumGroup[]; unlocated: readonly Album[];
} {
  const regions = new Map(geography.regions.map(region => [canonicalName(region.name), region]));
  const cityRegions = new Map(cities?.regions.map(region => [canonicalName(region.name), region]));
  const groups = new Map<string, AlbumGroup>();
  const unlocated: Album[] = [];
  for (const album of albums) {
    // Never use legacy illustrated x/y, infer a city from prose, or infer a home.
    const province = album.mapPoint ? regions.get(canonicalName(album.mapPoint.label)) : undefined;
    const city = album.mapPoint?.city ? canonicalName(album.mapPoint.city) : undefined;
    const region = province && city ? cityRegions.get(city) ?? (MUNICIPALITIES.has(city) ? province : undefined) : province;
    if (!region) { unlocated.push(album); continue; }
    const located: LocatedAlbum = {
      album, region, precision: city || MUNICIPALITIES.has(canonicalName(region.name)) ? 'city' : 'province',
    };
    const name = city ?? region.name;
    const group = groups.get(name);
    if (group) group.albums.push(located);
    else groups.set(name, { name,
      center: region.name === '上海' ? region.centroid : region.center, albums: [located] });
  }
  return { groups: Array.from(groups.values()), unlocated };
}

export function normalizeState(state: MapState): MapState {
  const zoom = Number.isFinite(state.zoom) ? Math.max(1, Math.min(maxMapZoom(state), state.zoom)) : 1;
  const maxX = MAP_WIDTH * ((zoom - 1) / 2 + .42);
  const maxY = MAP_HEIGHT * ((zoom - 1) / 2 + .42);
  return {
    ...(state.city ? { city: state.city } : {}),
    zoom,
    panX: Number.isFinite(state.panX) ? Math.max(-maxX, Math.min(maxX, state.panX)) : 0,
    panY: Number.isFinite(state.panY) ? Math.max(-maxY, Math.min(maxY, state.panY)) : 0,
  };
}
