import fs from 'node:fs';
import path from 'node:path';

const repo = path.resolve(import.meta.dirname, '../..');
const dist = path.join(repo, 'Cabinet/dist');
const scope = fs.readFileSync(path.join(repo, 'SCOPE.md'), 'utf8');
if (!/^release_profile: approved-without-qixi-and-local-tests$/m.test(scope)) {
  throw Error('SCOPE 未授权当前无七夕／无测试发布配置。');
}
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}
if (!fs.existsSync(dist)) throw Error('请先构建并执行 verify。');
const files = walk(dist);
const leaked = files.filter(file => {
  const rel = path.relative(dist, file).replaceAll('\\', '/');
  if (/(?:^|\/)Qixi[^/]*\.(?:js|css)$/i.test(rel) || /(?:^|\/)qixi(?:-v2)?\//i.test(rel)) return true;
  if (!/\.(?:js|css|html|json|map)$/.test(file)) return false;
  return /festival-preview-tools|our-story-festival-date-override|开发模式：点击切换季节|本地素材\s*·\s*未发布|__gallery-original|[CD]:[\\/](?:Users|文档)/.test(fs.readFileSync(file, 'utf8'));
});
if (leaked.length) throw Error('拒绝发布：发现七夕、测试或本机资源：\n' + leaked.map(file => path.relative(dist, file)).join('\n'));
for (const subdir of ['gallery/originals', 'gallery/collections']) {
  const images = files.filter(file => path.relative(dist, file).replaceAll('\\', '/').startsWith(subdir + '/') && /\.jpe?g$/i.test(file));
  if (images.length !== 87) throw Error(`${subdir} 应为 87 张，实际 ${images.length}`);
}
console.log('发布门禁通过：五组 87 张，七夕专题、本地测试与机器路径均未进入产物。');
