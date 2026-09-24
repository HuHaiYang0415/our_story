// Build a compact, nationwide detail layer from Natural Earth's public-domain data.
// The browser only requests the generated JSON after the visitor zooms in.
import { mkdir, writeFile } from 'node:fs/promises';

const source = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/';
const directory = new URL('../../../../public/gallery/map/', import.meta.url);
const extent = { west: 72, south: 16, east: 136, north: 55 };
const files = {
  roads: 'ne_10m_roads.geojson',
  cities: 'ne_10m_populated_places_simple.geojson',
  airports: 'ne_10m_airports.geojson',
  ports: 'ne_10m_ports.geojson',
};
const round = value => Math.round(value * 1e5) / 1e5;
const point = value => [round(value[0]), round(value[1])];
const inside = value => Array.isArray(value) && value[0] >= extent.west && value[0] <= extent.east && value[1] >= extent.south && value[1] <= extent.north;
const rank = properties => Number(properties.scalerank ?? properties.SCALERANK ?? properties.rank ?? 9);
const name = properties => properties.name_zh || properties.NAME_ZH || properties.name || properties.NAME || properties.namepar || properties.NAMEPAR || '';
const lines = geometry => {
  if (geometry?.type === 'LineString') return [geometry.coordinates];
  if (geometry?.type === 'MultiLineString') return geometry.coordinates;
  return [];
};

async function download(file) {
  const response = await fetch(source + file);
  if (!response.ok) throw new Error(`Natural Earth download failed: ${file} (${response.status})`);
  const value = await response.json();
  if (value?.type !== 'FeatureCollection' || !Array.isArray(value.features)) throw new Error(`Unexpected GeoJSON: ${file}`);
  return value.features;
}

const roadFeatures = await download(files.roads);
const roads = roadFeatures.flatMap(feature => lines(feature.geometry).flatMap(coordinates => {
  if (!coordinates.some(inside)) return [];
  const points = coordinates.filter(inside).map(point);
  if (points.length < 2) return [];
  return [{ rank: rank(feature.properties), kind: feature.properties.type || feature.properties.TYPE || 'road', name: name(feature.properties) || undefined, points }];
}));

const places = [];
for (const [kind, file] of Object.entries({ city: files.cities, airport: files.airports, port: files.ports })) {
  for (const feature of await download(file)) {
    if (feature.geometry?.type !== 'Point' || !inside(feature.geometry.coordinates)) continue;
    const label = name(feature.properties);
    if (!label) continue;
    places.push({ kind, rank: rank(feature.properties), name: label, point: point(feature.geometry.coordinates) });
  }
}

await mkdir(directory, { recursive: true });
const levels = [
  { level: 1, roads: roads.filter(item => item.rank <= 5), places: places.filter(item => item.rank <= 4) },
  { level: 2, roads: roads.filter(item => item.rank >= 6 && item.rank <= 8), places: places.filter(item => item.rank >= 5 && item.rank <= 7) },
  { level: 3, roads: roads.filter(item => item.rank >= 9), places: places.filter(item => item.rank >= 8) },
];
for (const level of levels) {
  const detail = {
    type: 'GalleryNaturalDetailMap', level: level.level,
    extent: [extent.west, extent.south, extent.east, extent.north], roads: level.roads, places: level.places,
    source: 'Natural Earth', license: 'public-domain', retrieved: new Date().toISOString().slice(0, 10),
  };
  const serialized = JSON.stringify(detail);
  await writeFile(new URL(`natural-earth-china-detail-${level.level}.json`, directory), serialized);
  console.log(JSON.stringify({ level: level.level, roads: level.roads.length, places: level.places.length, bytes: Buffer.byteLength(serialized) }));
}
