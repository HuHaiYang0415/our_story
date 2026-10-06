import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { digest, walk } from './prepare-retained-release.mjs';
const repo = path.resolve(import.meta.dirname, '../..');
const COUNTS = { disney:72, confession:1, festivals:2, lingyin:1, daily:11 };
export function checkRelease(dist = path.join(repo,'Cabinet/dist'), sourceRepo = repo) {
 const scope=fs.readFileSync(path.join(sourceRepo,'SCOPE.md'),'utf8');
 if(!/^release_profile: approved-without-qixi-and-local-tests$/m.test(scope))throw Error('SCOPE 未授权当前无七夕／无测试发布配置。');
 const files=fs.existsSync(path.join(dist,'Cabinet'))
  ? ['index.html','assets','pages','gallery','gallery-resource-manifest.json'].flatMap(name=>{const file=path.join(dist,name);return fs.statSync(file).isDirectory()?walk(file):[file];})
  : walk(dist);
 const texts=files.filter(f=>/\.(?:js|css|html|json|map)$/.test(f));
 const leaked=files.filter(file=>{
  const rel=path.relative(dist,file).replaceAll('\\','/');
  if(/(?:^|\/)Qixi[^/]*\.(?:js|css)$/i.test(rel)||/(?:^|\/)qixi(?:-v2)?\//i.test(rel))return true;
  return texts.includes(file)&&/festival-preview-tools|our-story-festival-date-override|开发模式：点击切换季节|本地素材\s*·\s*未发布|__gallery-original|[A-Z]:[\\/](?:Users|study|文档)/.test(fs.readFileSync(file,'utf8'));
 });
 if(leaked.length)throw Error('拒绝发布：七夕、测试或本机资源：'+leaked.map(f=>path.relative(dist,f)).join(','));
 const manifest=JSON.parse(fs.readFileSync(path.join(dist,'gallery-resource-manifest.json'),'utf8'));
 if(manifest.schema!==1||manifest.files.length!==177)throw Error('资源清单必须是87原图+87缩略图+3地图数据');
 const source=fs.readFileSync(path.join(sourceRepo,'Cabinet/src/pages/gallery/data/galleryContent.ts'),'utf8');
 const assets=JSON.parse(source.match(/const LOCAL_ASSETS = (\[[\s\S]*?\]);/)[1]);
 const albums=JSON.parse(source.match(/Object.freeze\((\[[\s\S]*?\]) as Album\[\]\)/)[1]);
 if(assets.length!==87||albums.length!==5)throw Error('五册87张内容契约失败');
 const names=new Set(),urls=new Set(), originalHashes=new Set();
 const js=texts.filter(f=>f.endsWith('.js')).map(f=>fs.readFileSync(f,'utf8')).join('\n');
 for(const file of manifest.files){
  if(names.has(file.name)||urls.has(file.url)||!/^[a-f0-9]{64}$/.test(file.hash))throw Error('清单重复或无效hash');names.add(file.name);urls.add(file.url);
  const original=file.name.startsWith('gallery/originals/');
  const from=path.join(sourceRepo,original?file.name:'Cabinet/public/'+file.name),to=path.join(dist,file.url);
  if(original&&file.url!==file.name)throw Error('原图必须使用既有唯一URL');
  if(!original&&file.url!=='gallery/versioned/'+file.hash+'/'+path.basename(file.name))throw Error('缩略图/地图数据必须内容版本化');
  if(!fs.existsSync(to)||digest(from)!==file.hash||digest(to)!==file.hash||fs.statSync(to).size!==file.bytes)throw Error('字节hash或URL输出不一致: '+file.name);
  if(!js.includes(JSON.stringify(file.url)))throw Error('运行时URL没有进入构建调用链: '+file.url);
  if(original){
   originalHashes.add(file.hash);
   const approval=JSON.parse(fs.readFileSync(from+'.json','utf8'));
   if(approval.sha256!==file.hash||approval.bytes!==file.bytes||approval.publicationAuthority!=='SCOPE.md')throw Error('原图授权与字节证据失败: '+file.name);
  }
 }
 if(!/galleryResourceUrl\(\x60gallery\/originals\/\$\{item.slug\}\/\$\{item.fileName\}\x60\)/.test(source)||!source.includes('galleryResourceUrl(\x60gallery/collections/'))throw Error('运行时必须从已验证清单解析照片URL');
 for(const [slug,count] of Object.entries(COUNTS)){
  const group=assets.filter(a=>a.slug===slug),album=albums.find(a=>a.id==='album-'+slug);
  if(group.length!==count||!album||album.mediaAssetIds.length!==count||new Set(album.mediaAssetIds).size!==count||!album.mediaAssetIds.includes(album.coverMediaAssetId))throw Error('册内容/封面计数失败: '+slug);
  for(const asset of group){
   if(!album.mediaAssetIds.includes(asset.id))throw Error('册/照片关联失败');
   for(const prefix of ['gallery/originals','gallery/collections'])if(!names.has(prefix+'/'+slug+'/'+decodeURIComponent(asset.fileName)))throw Error('照片缺运行时资源');
  }
  const canonical=walk(path.join(dist,'gallery/originals',slug)).filter(f=>/\.jpe?g$/i.test(f));
  if(canonical.length!==count)throw Error('原图计数失败: '+slug);
 }
 const duplicates=files.filter(f=>f.includes(path.sep+'versioned'+path.sep)&&/\.jpe?g$/i.test(f)&&originalHashes.has(digest(f)));
 if(duplicates.length)throw Error('拒绝重复原图版本副本');
 const originalBytes=manifest.files.filter(f=>f.name.startsWith('gallery/originals/')).reduce((n,f)=>n+f.bytes,0);
 return {passed:true,albums:5,originals:87,thumbs:87,mapJson:3,runtimeUrls:177,originalBytes,versionedOriginalCopies:0,files:files.length};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 console.log(JSON.stringify(checkRelease(process.argv[2]),null,2));
}
