import { test } from 'node:test';
import assert from 'node:assert/strict';
import { albumDate, formatGalleryDate, orbitGeometry, orbitNodes, photoFacts, resolvePhotos, wrapIndex } from './galleryModel';
import type { Album } from '@/domain/content';

test('orbit stays bounded, unique and valid across wrap and fractional positions', () => {
  for (const length of [0, 1, 2, 3, 4, 5, 6, 9, 87]) {
    for (const capacity of [5, 9]) {
      for (const position of [-1.4, 0, .4, 1, length - .3, length + .6]) {
        const nodes = orbitNodes(length, position, capacity);
        assert.equal(nodes.length, Math.min(length, capacity));
        assert.equal(new Set(nodes.map(node => node.index)).size, nodes.length);
        assert.ok(nodes.every(node => node.index >= 0 && node.index < length));
      }
    }
  }
  assert.equal(wrapIndex(-1, 87), 86);
});

test('orbit exchanges size, height, side tilt and depth continuously', () => {
  const front = orbitGeometry(0, 9, 1440, 800);
  const side = orbitGeometry(2, 9, 1440, 800);
  const back = orbitGeometry(4, 9, 1440, 800);
  assert.ok(front.scale > side.scale && side.scale > back.scale);
  assert.ok(front.y > side.y && side.y > back.y);
  assert.ok(side.x > 0 && side.rotation < 0);
  assert.ok(Math.abs(orbitGeometry(.01, 9, 1440, 800).scale - front.scale) < .01);
});

test('date precision and ranges remain calendar facts, never timezone conversions', () => {
  assert.equal(formatGalleryDate('2026-09-13'), '2026.09.13');
  assert.equal(formatGalleryDate('2026-09', 'month'), '2026.09');
  assert.equal(formatGalleryDate('2026', 'year'), '2026');
  assert.equal(formatGalleryDate(undefined), '');
  assert.equal(formatGalleryDate('2026-09-13', 'unknown'), '');
  assert.equal(albumDate({ id: 'a', title: 'a', mediaAssetIds: [], startDate: '2026-09-13', endDate: '2026-09-14', datePrecision: 'day' }), '2026.09.13—2026.09.14');
});

test('repository photos retain stable IDs, album membership and original order', () => {
  const album: Album = { id: 'album', title: '册', mediaAssetIds: ['first', 'second'] };
  const photos = resolvePhotos(album, new Map());
  assert.deepEqual(photos.map(photo => photo.mediaAssetId), ['first', 'second']);
  assert.deepEqual(photos.map(photo => photo.albumPhotoIndex), [0, 1]);
  assert.ok(photos.every(photo => photo.album === album));
});

test('missing dates and locations produce no invented facts or separators', () => {
  const album: Album = { id: 'a', title: '节日', mediaAssetIds: ['p'] };
  assert.equal(photoFacts(resolvePhotos(album, new Map())[0]), '');
  assert.equal(photoFacts(resolvePhotos({ ...album, location: '用户提供的地点' }, new Map())[0]), '用户提供的地点');
});
