import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { groupAlbumPins, locateAlbums, normalizeState, parseGeography } from './geography';
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
  assert.equal(normalizeState({ city: '上海', zoom: 14, panX: 0, panY: 0 }).zoom, 14);
  assert.equal(normalizeState({ city: '上海', zoom: 9999, panX: NaN, panY: Infinity }).zoom, 40);
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
});
