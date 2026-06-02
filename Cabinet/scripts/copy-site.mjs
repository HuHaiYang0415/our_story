import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cabinetRoot = path.resolve(__dirname, '..');
const distDir = path.join(cabinetRoot, 'dist');
const siteRoot = path.resolve(cabinetRoot, '..');

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

function syncDir(src, dest) {
  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }
  copyDir(src, dest);
}

/** 移除旧版多入口构建遗留的站点根目录 */
function removeLegacySiteRoots() {
  for (const name of ['image', '20260520', '202660520', 'companion-520']) {
    const target = path.join(siteRoot, name);
    if (fs.existsSync(target)) {
      fs.rmSync(target, { recursive: true, force: true });
      console.log(`已移除旧站点目录: ${name}/`);
    }
  }
}

if (!fs.existsSync(distDir)) {
  console.error('请先执行 npm run build');
  process.exit(1);
}

function cleanViteOutputAtSiteRoot() {
  const assetsDir = path.join(siteRoot, 'assets');
  if (fs.existsSync(assetsDir)) {
    fs.rmSync(assetsDir, { recursive: true, force: true });
  }
  const pagesDir = path.join(siteRoot, 'pages');
  if (fs.existsSync(pagesDir)) {
    fs.rmSync(pagesDir, { recursive: true, force: true });
  }
}

removeLegacySiteRoots();
cleanViteOutputAtSiteRoot();
copyDir(distDir, siteRoot);

console.log(`已发布到: ${siteRoot}`);
console.log('统一入口: index.html（520 在 pages/letters/520/ 内嵌打开）');
