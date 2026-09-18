import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve(import.meta.dirname, '..', 'dist');
const visibility = path.resolve(import.meta.dirname, '../src/pages/festivals/2026/qixi/visibility.ts');
const qixiIsDraft = /QIXI_2026_LIFECYCLE\s*:\s*PageLifecycle\s*=\s*['"]draft['"]/.test(
  fs.existsSync(visibility) ? fs.readFileSync(visibility, 'utf8') : 'QIXI_2026_LIFECYCLE: PageLifecycle = "draft"',
);
const forbiddenPathParts = qixiIsDraft ? ['qixi', 'moment.jpg', 'src/pages/festivals/2026/qixi'] : [];
const qixiV2TextMarkers = [
  'qixi-v2-page',
  'qixi-v2.css',
  'QixiV2Page',
  '菜单效果示意',
  'src/pages/festivals/2026/qixi-v2',
];
const textExtensions = new Set(['.css', '.html', '.js', '.map']);

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

if (!fs.existsSync(dist)) {
  console.error('草稿泄漏检查失败：Cabinet/dist 不存在，请先执行 npm run build。');
  process.exit(1);
}

const leaked = walk(dist).filter((file) => {
  const normalized = path.relative(dist, file).replaceAll('\\', '/').toLowerCase();
  const isQixiV2Asset = /(^|[\\/])qixi[-_]?v?2/i.test(normalized);
  if (forbiddenPathParts.some((part) => normalized.includes(part)) || isQixiV2Asset) return true;
  if (!textExtensions.has(path.extname(file).toLowerCase())) return false;
  const content = fs.readFileSync(file, 'utf8');
  return qixiV2TextMarkers.some((marker) => content.includes(marker));
});

if (leaked.length) {
  console.error('生产产物包含七夕草稿资源：');
  leaked.forEach((file) => console.error(`- ${path.relative(dist, file)}`));
  process.exit(1);
}

console.log(
  qixiIsDraft
    ? '草稿泄漏检查通过：v1 草稿资源与 v2 专题标记均未进入生产产物。'
    : '草稿泄漏检查通过：v1 已是 released，仍已扫描 v2 专题文件名与产物文本标记。',
);
