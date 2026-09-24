import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { groupAlbumPins, locateAlbums, normalizeState, parseGeography, parseNaturalDetailGeography, parseNaturalGeography } from './geography';
import type { Album } from '@/domain/content';

const china = parseGeography(JSON.parse(readFileSync(new URL('../../../../public/gallery/map/china-4.0.2.json', import.meta.url), 'utf8')));
const shanghai = parseGeography(JSON.parse(readFileSync(new URL('../../../../public/gallery/map/shanghai-4.0.2.json', import.meta.url), 'utf8')), 16, china.project);
test('Shanghai detail shares the national projection without removing surrounding provinces', () => {
  assert.equal(china.regions.length, 34);
  assert.ok(china.regions.some(region => region.name === '江苏'));
  assert.ok(china.regions.some(region => region.name === '浙江'));
  assert.equal(shanghai.regions.length, 16);
  assert.ok(shanghai.regions.some(region => region.name === '浦东新区'));
  const p = shanghai.project([121.472644, 31.231706]);
  assert.deepEqual(p, china.project([121.472644, 31.231706]));
  assert.ok(p.x > 0 && p.x < 1000 && p.y > 0 && p.y < 780);
});
test('all albums sharing Shanghai stay in the city collection; unconfirmed locations stay out', () => {
  const albums: Album[] = Array.from({ length: 13 }, (_, i) => ({ id: `test-${i}`, title: `邮册${i}`, mediaAssetIds: ['a', 'b'], mapPoint: { x: 70, y: 58, label: '上海', precision: 'city' } }));
  albums.push({ id: 'private', title: '日常', location: '家与路上', mediaAssetIds: [] });
  const located = locateAlbums(albums, china);
  assert.equal(located.groups.length, 1);
  assert.equal(located.groups[0].albums.length, 13);
  assert.equal(new Set(located.groups[0].albums.map(item => item.album.id)).size, 13);
  assert.deepEqual(located.unlocated.map(item => item.id), ['private']);
});
test('city-aware viewport clamps stop before any place-level zoom', () => {
  assert.equal(normalizeState({ zoom: 14, panX: 0, panY: 0 }).zoom, 14);
  assert.equal(normalizeState({ zoom: 9999, panX: NaN, panY: Infinity }).zoom, 40);
  assert.deepEqual(normalizeState({ zoom: 99, panX: 0, panY: 0 }), { zoom: 40, panX: 0, panY: 0 });
});
test('confirmed Zhejiang cities use licensed anchors, not private address guesses', () => {
  const zhejiang = parseGeography(JSON.parse(readFileSync(new URL('../../../../public/gallery/map/zhejiang-4.0.2.json', import.meta.url), 'utf8')), 11, china.project);
  const albums: Album[] = ['杭州', '丽水', '丽水', '丽水'].map((city, i) => ({ id: `zj-${i}`, title: `${i}`, mediaAssetIds: [], mapPoint: { x: 0, y: 0, label: '浙江', city, precision: 'city' } }));
  const groups = locateAlbums(albums, china, zhejiang).groups;
  assert.equal(groups.length, 2);
  assert.equal(groups.find(group => group.name === '丽水')?.albums.length, 3);
  assert.deepEqual(groups[0].center, zhejiang.regions.find(region => region.name === '杭州市')?.center);
});
test('national summaries count provinces once while preserving every city album', () => {
  const zhejiang = parseGeography(JSON.parse(readFileSync(new URL('../../../../public/gallery/map/zhejiang-4.0.2.json', import.meta.url), 'utf8')), 11, china.project);
  const albums: Album[] = [
    { id: 'sh', title: '上海', mediaAssetIds: [], mapPoint: { x: 0, y: 0, label: '上海', city: '上海', precision: 'city' } },
    ...['杭州', '丽水', '丽水', '丽水'].map((city, i) => ({ id: `zj-${i}`, title: `${i}`, mediaAssetIds: [], mapPoint: { x: 0, y: 0, label: '浙江', city, precision: 'city' } } as Album)),
  ];
  const located = locateAlbums(albums, china, zhejiang);
  assert.deepEqual(located.provinces.map(item => [item.name, item.albums.length]), [['上海', 1], ['浙江', 4]]);
  assert.deepEqual(located.provinces.find(item => item.name === '浙江')?.cities.map(item => [item.name, item.albums.length]), [['杭州', 1], ['丽水', 3]]);
  assert.equal(located.provinces.flatMap(item => item.albums).length, 5);
});
test('Natural Earth layers share the existing China projection', () => {
  const value = JSON.parse(readFileSync(new URL('../../../../public/gallery/map/natural-earth-110m.json', import.meta.url), 'utf8'));
  const natural = parseNaturalGeography(value, china.project);
  assert.ok(natural.landPaths.length > 20);
  assert.ok(natural.riverPaths.length > 3);
  assert.ok(natural.lakePaths.length > 0);
  assert.match(natural.riverPaths[0], /^M-?\d/);
});
test('progressive Natural Earth detail uses the same projection and rejects malformed places', () => {
  const value = JSON.parse(readFileSync(new URL('../../../../public/gallery/map/natural-earth-china-detail-1.json', import.meta.url), 'utf8'));
  const detail = parseNaturalDetailGeography(value, china.project);
  assert.equal(detail.level, 1);
  assert.ok(detail.roadPaths.major.startsWith('M'));
  assert.ok(detail.places.length > 0);
  assert.ok(detail.places.every(place => Number.isFinite(place.point.x) && Number.isFinite(place.point.y)));
  assert.throws(() => parseNaturalDetailGeography({ type: 'GalleryNaturalDetailMap', level: 1, roads: [], places: [{ name: 'broken' }] }, china.project));
});
test('shared exact coordinates aggregate every album without moving its geographic anchor', () => {
  const albums: Album[] = Array.from({ length: 13 }, (_, i) => ({ id: `park-${i}`, title: `邮册${i}`, location: '上海迪士尼', mediaAssetIds: ['a'], mapPoint: { x: 70, y: 58, label: '上海', precision: 'city' } }));
  const group = locateAlbums(albums, china).groups[0];
  const point = china.project([121.65616525, 31.14625925]);
  const pins = groupAlbumPins(group, () => point);
  assert.equal(pins.length, 1);
  assert.equal(pins[0].albums.length, 13);
  assert.deepEqual(pins[0].center, point);
  const separate = groupAlbumPins(group, item => item.album.id === 'park-0' ? china.project([121.5, 31.2]) : point);
  assert.equal(separate.length, 2);
  assert.equal(separate.flatMap(pin => pin.albums).length, 13);
  group.albums[0].album.location = '同城另一处';
  const distinctAddress = groupAlbumPins(group, () => point);
  assert.equal(distinctAddress.length, 2);
  assert.equal(distinctAddress.flatMap(pin => pin.albums).length, 13);
});
test('public regional coordinates override a city representative without becoming a private address guess', () => {
  const zhejiang = parseGeography(JSON.parse(readFileSync(new URL('../../../../public/gallery/map/zhejiang-4.0.2.json', import.meta.url), 'utf8')), 11, china.project);
  const album: Album = { id: 'wenxi', title: '温溪', location: '已确认地址', mediaAssetIds: [], mapPoint: {
    x: 0, y: 0, label: '浙江', city: '丽水', coordinate: [120.38761, 28.154159], precision: 'city',
  } };
  const located = locateAlbums([album], china, zhejiang).groups[0].albums[0];
  assert.deepEqual(located.point, china.project([120.38761, 28.154159]));
});
