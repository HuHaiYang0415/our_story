import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const config = JSON.parse(fs.readFileSync(path.join(root, 'performance-budget.json'), 'utf8'));

if (!fs.existsSync(dist)) {
  console.error('性能预算检查失败：Cabinet/dist 不存在，请先执行 npm run build。');
  process.exit(1);
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

const files = walk(path.join(dist, 'assets'));
const byExt = (ext) => files.filter((file) => file.endsWith(ext));
const sizeOf = (file) => fs.statSync(file).size;
const largest = (list) => list.toSorted((a, b) => sizeOf(b) - sizeOf(a))[0];
const relative = (file) => path.relative(dist, file).replaceAll('\\', '/');
const failures = [];

function check(label, file, maxBytes) {
  if (!file) {
    failures.push(`${label}: 未找到构建产物`);
    return;
  }
  const actual = sizeOf(file);
  console.log(`${label}: ${(actual / 1024).toFixed(1)} KiB / ${(maxBytes / 1024).toFixed(1)} KiB — ${relative(file)}`);
  if (actual > maxBytes) failures.push(`${label}: ${actual} > ${maxBytes} bytes (${relative(file)})`);
}

const js = byExt('.js');
const mainEntry = largest(js.filter((file) => path.basename(file).startsWith('index-')));
const dragonBoat = largest(js.filter((file) => path.basename(file).startsWith('DragonBoatScroll-')));
const mainCss = largest(byExt('.css').filter((file) => path.basename(file).startsWith('index-')));

check('主入口 JS', mainEntry, config.budgets.mainEntryJsBytes);
check('端午专题 JS', dragonBoat, config.budgets.routeJsBytes);
check('主 CSS', mainCss, config.budgets.mainCssBytes);

for (const file of js.filter((candidate) => candidate !== mainEntry && candidate !== dragonBoat)) {
  if (sizeOf(file) > config.budgets.otherJsBytes) {
    failures.push(`其它 JS 超预算: ${sizeOf(file)} bytes (${relative(file)})`);
  }
}

check('单个 SVG', largest(byExt('.svg')), config.budgets.singleSvgBytes);
check('单个音频', largest(byExt('.mp3')), config.budgets.singleAudioBytes);

for (const file of files.filter((candidate) => /(?:room_background|card_box|mole_doll)/.test(path.basename(candidate)))) {
  check('首屏/首交互图片', file, config.budgets.firstScreenImageBytes);
}

if (failures.length) {
  console.error('\n性能预算超限：');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('性能预算检查通过。');
