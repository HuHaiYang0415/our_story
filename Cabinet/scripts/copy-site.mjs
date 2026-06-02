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

const stampSourceDir = path.join(
  cabinetRoot,
  'src/pages/letters/assets/stamps',
);
if (fs.existsSync(stampSourceDir)) {
  syncDir(stampSourceDir, path.join(siteRoot, 'image'));
  console.log('已复制信件邮票 -> 站点根目录 image/');
}

const interactive520Dir = path.join(
  cabinetRoot,
  'src/pages/letters/interactive/520',
);
if (fs.existsSync(interactive520Dir)) {
  syncDir(interactive520Dir, path.join(siteRoot, '20260520'));
  console.log('已复制 520 互动页 -> 站点根目录 20260520/');
} else {
  console.warn('未找到 520 源码: src/pages/letters/interactive/520/');
}

/** 旧错误路径 202660520 → 20260520（仅构建时生成，不纳入 Git） */
const legacyRedirectDir = path.join(siteRoot, '202660520');
const legacyRedirectHtml = path.join(legacyRedirectDir, 'index.html');
const legacyRedirectBody = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=../20260520/">
  <link rel="canonical" href="../20260520/">
  <title>正在跳转…</title>
  <script>
    location.replace('../20260520/' + (location.search || '') + (location.hash || ''));
  </script>
</head>
<body>
  <p>路径已更正为 20260520，<a href="../20260520/">点此进入</a></p>
</body>
</html>
`;
fs.mkdirSync(legacyRedirectDir, { recursive: true });
fs.writeFileSync(legacyRedirectHtml, legacyRedirectBody, 'utf8');
console.log('已生成旧路径跳转 -> 202660520/index.html');

console.log(`已发布到: ${siteRoot}`);
console.log('请双击打开: index.html');
