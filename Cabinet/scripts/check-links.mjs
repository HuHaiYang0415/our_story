import fs from 'node:fs';
import path from 'node:path';

const repo = path.resolve(import.meta.dirname, '..', '..');
const roots = [
  'README.md',
  'AGENTS.md',
  'PRODUCT.md',
  'DESIGN.md',
  'SCOPE.md',
  'docs',
  'Cabinet/docs',
  'changes/platform-foundation',
];

function collect(entry) {
  const target = path.join(repo, entry);
  if (!fs.existsSync(target)) return [];
  if (fs.statSync(target).isFile()) return [target];
  return fs.readdirSync(target, { withFileTypes: true }).flatMap((child) => {
    const childPath = path.join(target, child.name);
    return child.isDirectory() ? collect(path.relative(repo, childPath)) : [childPath];
  });
}

const files = [...new Set(roots.flatMap(collect))].filter((file) => file.endsWith('.md'));
const broken = [];
const markdownLink = /\[[^\]]*\]\(([^)]+)\)/g;

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  for (const match of source.matchAll(markdownLink)) {
    const raw = match[1].trim().replace(/^<|>$/g, '');
    if (!raw || /^(?:https?:|mailto:|#|codex:)/i.test(raw)) continue;
    const linkPath = decodeURIComponent(raw.split('#')[0].split('?')[0]);
    if (!linkPath) continue;
    const resolved = path.resolve(path.dirname(file), linkPath);
    if (!fs.existsSync(resolved)) {
      broken.push(`${path.relative(repo, file)} -> ${raw}`);
    }
  }
}

if (broken.length) {
  console.error('文档链接检查失败：');
  broken.forEach((link) => console.error(`- ${link}`));
  process.exit(1);
}

console.log(`文档链接检查通过（${files.length} 个 Markdown 文件）。`);
