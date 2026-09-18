import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve(import.meta.dirname, '..', 'dist');
const visibility = path.resolve(import.meta.dirname, '../src/pages/festivals/2026/qixi/visibility.ts');
const qixiIsReleased = /QIXI_2026_LIFECYCLE\s*:\s*PageLifecycle\s*=\s*['"]released['"]/.test(
  fs.existsSync(visibility) ? fs.readFileSync(visibility, 'utf8') : '',
);
const required = [
  'index.html',
  'pages/letters/520/index.html',
];

const missing = required.filter((relative) => !fs.existsSync(path.join(dist, relative)));
const indexHtml = fs.existsSync(path.join(dist, 'index.html'))
  ? fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
  : '';

const builtFiles = fs.existsSync(path.join(dist, 'assets'))
  ? fs.readdirSync(path.join(dist, 'assets'))
  : [];
const qixiAssets = builtFiles.filter((file) => /qixi|moment\.jpg/i.test(file));

if (missing.length || !indexHtml.includes('id="root"') || (qixiIsReleased && qixiAssets.length < 2)) {
  console.error('关键路由 smoke test 失败：');
  missing.forEach((file) => console.error(`- 缺少 ${file}`));
  if (!indexHtml.includes('id="root"')) console.error('- index.html 缺少应用挂载点');
  if (qixiIsReleased && qixiAssets.length < 2) {
    console.error('- 七夕 released 但构建产物未同时包含 Qixi chunk/CSS 与 moment.jpg');
  }
  process.exit(1);
}

console.log(
  qixiIsReleased
    ? '关键路由 smoke test 通过：展柜壳层、520 静态子页与七夕发布资源均存在。'
    : '关键路由 smoke test 通过：展柜壳层与 520 静态子页均存在。',
);
