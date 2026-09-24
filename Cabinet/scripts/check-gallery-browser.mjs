/** Local regression only: collection membership, two-click entry, original loading,
 * two-level continuous geography, day/night identity and viewport containment. */
import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

if (!process.env.GALLERY_PLAYWRIGHT_PATH) throw Error('Set GALLERY_PLAYWRIGHT_PATH');
const { chromium } = await import(pathToFileURL(process.env.GALLERY_PLAYWRIGHT_PATH).href);
const base = process.env.GALLERY_QA_URL || 'http://127.0.0.1:3001/';
const output = path.resolve('../.impeccable/review/gallery');
await mkdir(output, { recursive: true });
const expected = [
  ['迪士尼', 72, 'photo-disney-1000013716', '2026.09.13 · 上海迪士尼'],
  ['告白', 1, 'photo-confession-2026-06-26', '2026.06.26 · 青田温溪镇温中路81号'],
  ['节日', 2, 'photo-festivals-七夕', '丽水市莲都区南明山街道丽沙小区'],
  ['灵隐寺', 1, 'photo-lingyin-2026-03-14', '2026.03.14 · 杭州灵隐寺'],
  ['日常', 11, 'photo-daily-1000013424', '丽水市莲都区南明山街道丽沙小区'],
];
const browser = await chromium.launch({ headless: true, executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
const results = [];
async function noScroll(page, label) {
  const defects = await page.locator('#polaroid-gallery-page').evaluate(root => {
    const nodes = [root, ...root.querySelectorAll('.gallery-root, .gallery-screen, .viewport-main, .viewport-main-inner, .gallery-stage, .gallery-photo-scene, .gallery-filter-panel, .gallery-map-stage, .gallery-map-album-chooser, .gallery-filmstrip-track, .gallery-photo-note')];
    return nodes.flatMap(node => {
      const r = node.getBoundingClientRect(), s = getComputedStyle(node);
      const excess = node.scrollHeight - node.clientHeight;
      return node.scrollTop !== 0 || (['auto', 'scroll'].includes(s.overflowY) && excess > 2) ||
        (node.matches('.gallery-filter-panel, .gallery-map-album-chooser, .gallery-photo-note') && excess > 2) || r.bottom > innerHeight + 2 || r.top < -2
        ? [{ node: node.className, excess, top: r.top, bottom: r.bottom }] : [];
    });
  });
  assert.deepEqual(defects, [], label + ': ' + JSON.stringify(defects));
  assert.deepEqual(await page.evaluate(() => ({ x: scrollX, y: scrollY })), { x: 0, y: 0 });
}
async function imageReady(page) {
  await page.waitForFunction(() => {
    const img = document.querySelector('.gallery-view-photo .gallery-photo-original.is-loaded');
    return img?.complete && img.naturalWidth > 0;
  });
  await page.locator('.gallery-view-photo .gallery-photo-original').evaluate(img => Promise.race([
    img.decode().catch(() => {}), new Promise(resolve => window.setTimeout(resolve, 2000)),
  ]));
}
async function capture(page, name) {
  await page.evaluate(() => document.fonts.ready);
  await page.locator('#polaroid-gallery-page').evaluate(async root => {
    const urls = new Set();
    for (const node of [root, ...root.querySelectorAll('*')]) for (const pseudo of [null, '::before', '::after']) {
      for (const match of getComputedStyle(node, pseudo).backgroundImage.matchAll(/url\(["']?([^"')]+)["']?\)/g)) urls.add(match[1]);
    }
    const boundedDecode = img => Promise.race([img.decode().catch(() => {}), new Promise(resolve => window.setTimeout(resolve, 2000))]);
    await Promise.all([...urls].map(async src => { const img = new Image(); img.src = src; await boundedDecode(img); }));
    await Promise.all([...root.querySelectorAll('img')].filter(img => {
      const r = img.getBoundingClientRect();
      return img.loading !== 'lazy' || (r.right > 0 && r.left < innerWidth && r.bottom > 0 && r.top < innerHeight);
    }).map(boundedDecode));
  });
  await page.screenshot({ path: path.join(output, name + '.png'), animations: 'disabled' });
}
const originalRequests = requests => requests.filter(url => /\/(?:__gallery-original|gallery\/originals)\//.test(url));
async function enter(page, title) {
  const stage = page.locator('.gallery-stage');
  for (let i = 0; i < 5; i++) {
    if (await page.locator('.gallery-stamp--front .gallery-stamp-caption').innerText().then(text => text.startsWith(title))) break;
    await stage.focus(); await page.keyboard.press('ArrowRight');
    await page.waitForFunction(() => document.querySelector('[data-orbit-moving]')?.getAttribute('data-orbit-moving') === 'false');
  }
  const button = page.locator('.gallery-stamp--front .gallery-stamp-activate');
  const top = await button.evaluate(node => node.getBoundingClientRect().top);
  // Exercise the real pointer path: pointerdown must not clear the selected
  // cover before the independent second click can open it.
  await button.click();
  assert.equal(await page.locator('[data-gallery-mode]').getAttribute('data-gallery-mode'), 'orbit');
  await page.waitForFunction(() => document.querySelector('[data-orbit-status]')?.getAttribute('data-orbit-status') === 'selected');
  assert.equal(await button.getAttribute('aria-pressed'), 'true');
  assert.ok((await button.evaluate(node => node.getBoundingClientRect().top)) < top - 10, 'Only a slight lift on first click');
  await button.click();
  await imageReady(page);
}
try {
  const matrix = [[1440, 900], [360, 640], [390, 844], [768, 1024], [844, 390]]
    .filter(([width]) => !(process.env.GALLERY_QA_SKIP_DESKTOP === '1' && width === 1440))
    .filter(([width, height]) => !process.env.GALLERY_QA_VIEWPORT || process.env.GALLERY_QA_VIEWPORT === `${width}x${height}`);
  for (const [width, height] of matrix) {
    const context = await browser.newContext({ viewport: { width, height }, hasTouch: width < 600, reducedMotion: 'no-preference' });
    const page = await context.newPage(), requests = [], errors = [];
    page.on('request', req => requests.push(req.url())); page.on('pageerror', error => errors.push(error.message));
    await page.goto(base + '#photos'); await page.locator('.gallery-stamp--front img').waitFor(); await page.waitForTimeout(650);
    const prefix = `${width}x${height}`;
    assert.equal(await page.locator('.gallery-stamp').count(), 5);
    const covers = await page.locator('.gallery-stamp').evaluateAll(nodes => nodes.map(node => node.dataset.photoId));
    assert.deepEqual([...covers].sort(), expected.map(item => item[2]).sort());
    assert.equal(originalRequests(requests).length, 0, 'No originals before entering a collection');
    assert.ok(!requests.some(url => /gallery\/map\//.test(url)), 'Map is intent-loaded');
    assert.equal(await page.getByText(/小记|进入相册|没有标地点的日子|本地素材|未发布/).count(), 0);
    // Select an off-center cover: selection must bring it to the front, not just lift it in place.
    const side = page.locator('.gallery-stamp:not(.gallery-stamp--front)').last();
    const sideId = await side.getAttribute('data-photo-id');
    const startPhase = Number(await page.locator('[data-orbit-phase]').getAttribute('data-orbit-phase'));
    await side.locator('.gallery-stamp-activate').dispatchEvent('click');
    await page.waitForTimeout(70);
    const middlePhase = Number(await page.locator('[data-orbit-phase]').getAttribute('data-orbit-phase'));
    assert.notEqual(middlePhase, startPhase, 'Click approach advances the continuous phase');
    assert.equal(await page.locator('[data-orbit-status]').getAttribute('data-orbit-status'), 'approaching', 'Approach exposes a real intermediate state');
    await page.locator(`.gallery-stamp[data-photo-id="${sideId}"] .gallery-stamp-activate`).dispatchEvent('click');
    assert.equal(await page.locator('[data-gallery-mode]').getAttribute('data-gallery-mode'), 'orbit', 'Fast second click cannot enter');
    await page.waitForFunction(() => document.querySelector('[data-orbit-status]')?.getAttribute('data-orbit-status') === 'selected');
    const centered = page.locator('.gallery-stamp--front.gallery-stamp--selected');
    assert.equal(await centered.getAttribute('data-photo-id'), sideId);
    const delta = await centered.evaluate(node => {
      const cover = node.getBoundingClientRect(), stage = document.querySelector('.gallery-stage').getBoundingClientRect();
      return Math.abs(cover.x + cover.width / 2 - stage.x - stage.width / 2);
    });
    assert.ok(delta < 2, 'First selection centers the chosen cover');
    assert.equal(await page.locator('[data-gallery-mode]').getAttribute('data-gallery-mode'), 'orbit');
    assert.equal(originalRequests(requests).length, 0);
    await noScroll(page, prefix + ' landing'); await capture(page, prefix + '-landing');
    const palette = () => page.locator('.gallery-screen').evaluate(node => {
      const s = getComputedStyle(node);
      return [s.backgroundImage, s.backgroundColor, s.color, getComputedStyle(node, '::before').backgroundImage,
        getComputedStyle(node, '::before').opacity, getComputedStyle(document.querySelector('.gallery-stamp-caption')).color];
    });
    const before = await palette();
    await page.getByRole('button', { name: /切换为白天|切换为夜间/ }).click();
    assert.deepEqual(await palette(), before, 'Gallery palette and leaf background identical by day/night');
    if (width === 1440 || width === 390) await capture(page, prefix + '-other-time');
    await enter(page, '迪士尼');
    assert.equal(originalRequests(requests).length, 1, 'Only the current original is requested');
    assert.equal(await page.locator('.gallery-filmstrip-item').count(), 72);
    assert.equal(await page.locator('.gallery-view-photo').getAttribute('data-photo-id'), expected[0][2]);
    assert.equal(await page.locator('.gallery-photo-note p').innerText(), expected[0][3]);
    assert.ok(/\/(?:__gallery-original|gallery\/originals)\//.test(await page.locator('.gallery-view-photo .gallery-photo-original').getAttribute('src')));
    assert.ok(await page.locator('.gallery-filmstrip-item img').evaluateAll(images => images.every(img => img.src.includes('/gallery/collections/')) && images.slice(6).every(img => img.loading === 'lazy')));
    assert.deepEqual(await page.locator('.gallery-view-photo').evaluate(node => { const s = getComputedStyle(node); return [s.backgroundColor, s.backgroundImage, s.boxShadow, s.padding]; }), ['rgba(0, 0, 0, 0)', 'none', 'none', '0px']);
    await noScroll(page, prefix + ' viewer'); await capture(page, prefix + '-viewer');
    const selectedIndex = await page.locator('.gallery-filmstrip-item[aria-pressed="true"]').getAttribute('data-photo-id');
    await page.locator('.gallery-filmstrip-item[aria-pressed="true"]').press('ArrowRight'); await imageReady(page);
    assert.notEqual(await page.locator('.gallery-filmstrip-item[aria-pressed="true"]').getAttribute('data-photo-id'), selectedIndex);
    const strip = page.locator('.gallery-filmstrip-track'), start = await strip.evaluate(node => node.scrollLeft);
    await strip.hover(); await page.mouse.wheel(0, 150); await page.waitForTimeout(180);
    assert.notEqual(await strip.evaluate(node => node.scrollLeft), start);
    const photoBefore = await page.locator('.gallery-view-photo').getAttribute('data-photo-id');
    await page.waitForTimeout(150); assert.equal(await page.locator('.gallery-view-photo').getAttribute('data-photo-id'), photoBefore);
    await noScroll(page, prefix + ' strip scroll');
    await page.keyboard.press('Escape'); assert.equal(await page.locator('[data-gallery-mode]').getAttribute('data-gallery-mode'), 'orbit');
    await page.locator('.gallery-stage').focus(); await page.keyboard.press('ArrowRight');
    await page.getByRole('button', { name: '地图查看', exact: true }).click();
    const primaryLocation = page.locator('.gallery-map-marker[data-album-ids~="album-lingyin"] .gallery-map-cover');
    await primaryLocation.waitFor();
    assert.equal(await page.locator('.gallery-map-marker').count(), 4, 'Only exact shared addresses collapse to one pin');
    assert.equal(await page.locator('.gallery-map-marker').evaluateAll(nodes => nodes.reduce((sum, node) => sum + Number(node.dataset.albumCount), 0)), 5, 'All albums remain represented');
    assert.equal(await page.locator('.gallery-map-province-chooser, .gallery-map-city-choice').count(), 0, 'No province or city chooser');
    assert.equal(await page.getByText('上海 · 浙江', { exact: true }).count(), 0, 'No merged province label');
    assert.equal(await page.locator('.gallery-map-place, .gallery-map-name-tag, .gallery-map-album-chooser').count(), 0, 'Map starts without text labels');
    assert.equal(await page.locator('.gallery-map-relief').count(), 0, 'Natural Earth is geometry-only; gray relief is not rendered');
    assert.ok(!requests.some(url => url.includes('natural-earth-gray-relief')), 'Gray relief is not requested');
    assert.ok(!requests.some(url => url.includes('natural-earth-china-detail-')), 'Nationwide detail waits for intentional zoom');
    assert.deepEqual(await page.locator('.gallery-map-stage').evaluate(node => ({
      stage: getComputedStyle(node).backgroundColor,
      leafVisible: getComputedStyle(document.querySelector('.gallery-screen'), '::before').backgroundImage.includes('leaf-shadow'),
    })), { stage: 'rgba(0, 0, 0, 0)', leafVisible: true });
    await noScroll(page, prefix + ' national'); await capture(page, prefix + '-national');
    await primaryLocation.click();
    assert.equal(await page.locator('[data-map-level]').getAttribute('data-map-level'), 'province', 'First national pin click enters province scale');
    assert.equal(await page.locator('[data-map-zoom]').getAttribute('data-map-zoom'), '4', 'First national pin click stops at province zoom');
    await page.waitForFunction(() => document.querySelector('.gallery-map-stage')?.getAttribute('data-map-detail') === 'ready');
    assert.equal(await page.locator('[data-map-detail-level]').getAttribute('data-map-detail-level'), '1');
    assert.ok(requests.some(url => url.includes('natural-earth-china-detail-1.json')), 'Province zoom loads nationwide level 1 detail');
    assert.ok(!requests.some(url => /natural-earth-china-detail-[23]\.json/.test(url)), 'Deeper detail remains deferred');
    assert.ok(await page.locator('.gallery-map-road').count() > 0, 'Detailed roads render');
    assert.ok(await page.locator('.gallery-map-detail-place').count() > 0, 'Detailed place markers render without labels');
    assert.equal(await page.locator('.gallery-map-name-tag').innerText(), '灵隐寺');
    await noScroll(page, prefix + ' selected name');
    if (width === 1440 || width === 390) await capture(page, prefix + '-selected-name');
    await page.locator('.gallery-map-stage').dispatchEvent('click');
    assert.equal(await page.locator('.gallery-map-name-tag').count(), 0, 'Bare-map click hides the album name');
    const provinceZoom = Number(await page.locator('[data-map-zoom]').getAttribute('data-map-zoom'));
    await page.locator('.gallery-map-stage').hover({ position: { x: Math.max(30, width * .18), y: Math.max(40, (height - 68) / 2) } });
    await page.mouse.wheel(0, -180); await page.waitForTimeout(120);
    let cityZoom = Number(await page.locator('[data-map-zoom]').getAttribute('data-map-zoom'));
    assert.ok(cityZoom > provinceZoom, 'Wheel manually zooms beyond province scale');
    if (width === 390) {
      const touchStage = page.locator('.gallery-map-stage');
      const box = await touchStage.boundingBox();
      const client = await context.newCDPSession(page);
      const cx = box.x + box.width / 2, cy = box.y + (box.height - 68) / 2;
      const touch = (x, id) => ({ x, y: cy, id, radiusX: 6, radiusY: 6, force: .5 });
      await client.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [touch(cx - 90, 1), touch(cx + 90, 2)] });
      for (const distance of [100, 110, 120]) {
        await client.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [touch(cx - distance, 1), touch(cx + distance, 2)] });
        await page.waitForTimeout(20);
      }
      await client.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
      await page.waitForTimeout(120);
      const pinchedZoom = Number(await page.locator('[data-map-zoom]').getAttribute('data-map-zoom'));
      assert.ok(pinchedZoom > cityZoom, 'Two-finger pinch zooms the map on touch viewports');
      cityZoom = pinchedZoom;
    }
    if (cityZoom >= 8) {
      await page.waitForFunction(() => document.querySelector('.gallery-map-stage')?.getAttribute('data-map-detail') === 'ready');
      assert.ok(requests.some(url => url.includes('natural-earth-china-detail-2.json')), 'City-scale zoom loads level 2 nationwide detail');
    }
    assert.equal(await page.locator('.gallery-map-place, .gallery-map-name-tag').count(), 0, 'Manual city zoom does not add labels');
    await noScroll(page, prefix + ' manual city zoom');
    if (width === 1440 || width === 390 || width === 844) await capture(page, prefix + '-manual-city-zoom');
    await primaryLocation.click();
    await primaryLocation.click(); await imageReady(page); await page.keyboard.press('Escape');
    assert.equal(Number(await page.locator('[data-map-zoom]').getAttribute('data-map-zoom')), cityZoom, 'Viewer return keeps the manually zoomed viewport');
    await page.locator('.gallery-map-stage').dispatchEvent('click');
    assert.equal(await page.locator('.gallery-map-province').count(), 34);
    assert.ok(!requests.some(url => /disney-osm|openstreetmap/.test(url)));
    assert.equal(await page.getByText(/© OpenStreetMap|没有标地点的日子|读小记|打开邮册|进入相册/).count(), 0);
    await page.getByRole('button', { name: '回到全国地图' }).click(); await page.waitForTimeout(550);
    const lingyin = page.locator('.gallery-map-marker[data-album-ids~="album-lingyin"] .gallery-map-cover');
    await lingyin.click();
    assert.equal(await page.locator('[data-map-zoom]').getAttribute('data-map-zoom'), '4', 'National pin click consistently enters province scale');
    const sharedPin = page.locator('.gallery-map-marker[data-album-count="2"] .gallery-map-cover');
    await sharedPin.click();
    const chooser = page.locator('.gallery-map-album-chooser');
    assert.deepEqual((await chooser.getByRole('button').allTextContents()).sort(), ['日常', '节日'].sort(), 'Same-address chooser excludes a different address in the same city');
    if (width === 1440 || width === 390) await capture(page, prefix + '-same-address-chooser');
    await chooser.getByRole('button', { name: '日常', exact: true }).click();
    assert.equal(await page.locator('.gallery-map-name-tag').innerText(), '日常');
    assert.equal(await chooser.count(), 0);
    await noScroll(page, prefix + ' same address selected');
    if (width === 1440 || width === 390 || width === 844) await capture(page, prefix + '-same-address-selected');
    await page.locator('.gallery-map-stage').dispatchEvent('click');
    assert.equal(await page.locator('.gallery-map-name-tag').count(), 0);
    await lingyin.click();
    assert.equal(await page.locator('.gallery-map-name-tag').innerText(), '灵隐寺');
    assert.equal(await page.locator('[data-map-zoom]').getAttribute('data-map-zoom'), '4', 'Switching nearby albums keeps the province viewport');
    if (width === 1440) {
      const zoomIn = page.getByRole('button', { name: '放大地图' });
      while (Number(await page.locator('[data-map-zoom]').getAttribute('data-map-zoom')) < 16) await zoomIn.click();
      await page.waitForFunction(() => document.querySelector('.gallery-map-stage')?.getAttribute('data-map-detail') === 'ready');
      assert.equal(await page.locator('[data-map-detail-level]').getAttribute('data-map-detail-level'), '3');
      assert.ok(requests.some(url => url.includes('natural-earth-china-detail-3.json')), 'Deep zoom loads the final nationwide detail');
      assert.equal(await page.locator('.gallery-map-name-tag').count(), 1, 'Deep detail does not add visible map labels');
      await capture(page, prefix + '-deep-detail');
      await page.getByRole('button', { name: '回到全国地图' }).click();
    }
    if (width === 1440) {
      for (const [title, count, cover, facts] of expected.slice(1)) {
        await page.getByRole('button', { name: '回到邮册', exact: true }).click();
        await page.locator('.gallery-stage').focus(); await page.keyboard.press('ArrowRight');
        await enter(page, title);
        assert.equal(await page.locator('.gallery-filmstrip-item').count(), count === 1 ? 0 : count);
        assert.equal(await page.locator('.gallery-view-photo').getAttribute('data-photo-id'), cover);
        assert.equal(await page.locator('.gallery-photo-note p').innerText(), facts);
        await noScroll(page, title);
        await page.keyboard.press('Escape');
        await page.getByRole('button', { name: '地图查看', exact: true }).click();
      }
    }
    assert.deepEqual(errors, []); results.push({ viewport: prefix, passed: true }); await context.close();
  }
  const asset = JSON.parse(await readFile('../gallery/originals/disney/1000013716.jpg.json', 'utf8'));
  const url = base + 'gallery/originals/disney/1000013716.jpg';
  const head = await fetch(url, { method: 'HEAD' }); assert.equal(head.status, 200);
  assert.equal(Number(head.headers.get('content-length')), asset.bytes);
  const bytes = await fetch(url).then(response => response.arrayBuffer());
  assert.equal(createHash('sha256').update(Buffer.from(bytes)).digest('hex'), asset.sha256, 'Original is byte-for-byte unchanged');
  results.push({ originalDelivery: 'public-static-file', originalBytesMatch: true });
  await writeFile(path.join(output, 'latest-results.json'), JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results));
} finally { await browser.close(); }
