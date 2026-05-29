import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cabinetRoot = path.resolve(__dirname, '..');
const distDir = path.join(cabinetRoot, 'dist');
const siteRoot = path.resolve(cabinetRoot, '..');

const SKIP = new Set(['node_modules', 'src', 'dist', '.git', 'scripts']);

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(from, to);
    } else {
      fs.copyFileSync(from, to);
    }
  }
}

function cleanSiteAssets() {
  const assetsDir = path.join(siteRoot, 'assets');
  if (fs.existsSync(assetsDir)) {
    fs.rmSync(assetsDir, { recursive: true, force: true });
  }
}

if (!fs.existsSync(distDir)) {
  console.error('请先执行 npm run build');
  process.exit(1);
}

cleanSiteAssets();
copyDir(distDir, siteRoot);

const cabinetImageDir = path.join(cabinetRoot, 'image');
if (fs.existsSync(cabinetImageDir)) {
  copyDir(cabinetImageDir, path.join(siteRoot, 'image'));
  console.log('已复制 Cabinet/image/ -> 站点根目录 image/');
}

const festivalImageDir = path.join(
  cabinetRoot,
  'src/components/2026/Festival_2026_ChildrenDay/image',
);
if (fs.existsSync(festivalImageDir)) {
  const dest = path.join(
    siteRoot,
    'src/components/2026/Festival_2026_ChildrenDay/image',
  );
  copyDir(festivalImageDir, dest);
  console.log('已复制节日页图片 -> src/components/2026/Festival_2026_ChildrenDay/image/');
}

console.log(`已发布到: ${siteRoot}`);
console.log('请双击打开: index.html');
