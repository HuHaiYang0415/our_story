import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {checkRelease} from './check-release.mjs';
import {publishedGitSnapshot} from './canonical-published-bytes.mjs';
import {spawnSync} from 'node:child_process';
import crypto from 'node:crypto';
import {digest,capturePublishedRelease,prepareRelease,readManifests,pruneReleaseOutput,validateRelease,activateStoredRelease} from './prepare-retained-release.mjs';
const repo=path.resolve(import.meta.dirname,'../..');
export function publishSite(source,destination,{sourceRepo=repo,now=Date.now()}={}){
 checkRelease(source,sourceRepo);
 const scope=fs.readFileSync(path.join(sourceRepo,'SCOPE.md'),'utf8');
 if(!scope.includes('release_authorization: osm-loading-2026-10-06'))throw Error('SCOPE缺本次发布授权');
 source=path.resolve(source);destination=path.resolve(destination);
 if(!fs.existsSync(path.join(destination,'index.html')))throw Error('先提供完整已发布基线，不接受未知根目录');
 let canonicalized=[];
 const publishedHistory=destination===sourceRepo&&spawnSync('git',['cat-file','-e','HEAD:release-active.json'],{cwd:destination,stdio:'ignore'}).status===0;
 if(destination===sourceRepo&&!publishedHistory){
  const existing=readManifests(destination);
  if(existing.some(m=>!m.id.startsWith('baseline-')&&!m.id.startsWith('release-')))throw Error('Unpublished release history requires review');
  const snapshot=publishedGitSnapshot(destination,[...existing.map(m=>m.files.find(f=>f.path==='index.html').sha256),digest(path.join(source,'index.html'))]);canonicalized=snapshot.restored;
  // Only unpublished generated metadata may be replaced; actual HEAD history is immutable.
  for(const m of existing)for(const suffix of ['json','entry.html','resources.json']){const file=path.join(destination,'release-manifests',m.id+'.'+suffix);if(fs.existsSync(file))fs.unlinkSync(file);}
  const id='baseline-'+crypto.createHash('sha256').update(snapshot.entry).digest('hex').slice(0,16),directory=path.join(destination,'release-manifests');fs.mkdirSync(directory,{recursive:true});
  fs.writeFileSync(path.join(directory,id+'.json'),JSON.stringify({schema:1,id,at:now,files:snapshot.files},null,2));fs.writeFileSync(path.join(directory,id+'.entry.html'),snapshot.entry);
 }
 if(!readManifests(destination).length)capturePublishedRelease(destination,'baseline-'+digest(path.join(destination,'index.html')).slice(0,16),now);
 if(!readManifests(destination).every(m=>validateRelease(destination,m)))throw Error('旧发布闭包校验失败，入口保持不变');
 const id='release-'+digest(path.join(source,'index.html')).slice(0,16);
 const manifest=prepareRelease(source,destination,id,now);
 const manifests=readManifests(destination);
 if(!manifests.every(m=>validateRelease(destination,m)))throw Error('旧发布闭包校验失败');
 const prune=pruneReleaseOutput(destination,manifests,id,now);
 fs.writeFileSync(path.join(destination,'release-manifests','active.json.tmp'),JSON.stringify({id,at:now,retained:prune.retained},null,2));
 fs.renameSync(path.join(destination,'release-manifests','active.json.tmp'),path.join(destination,'release-active.json'));
 return {id,files:manifest.files.length,canonicalized,...prune};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const args=process.argv.slice(2);
 const destination=args.includes('--output')?path.resolve(args[args.indexOf('--output')+1]):repo;
 if(args.includes('--rollback')){
  const id=args[args.indexOf('--rollback')+1];
  const manifest=activateStoredRelease(destination,id);
  fs.writeFileSync(path.join(destination,'release-active.json'),JSON.stringify({id:manifest.id,at:Date.now(),rollback:true},null,2));
  console.log('Rollback activated '+manifest.id);
 }else console.log(JSON.stringify(publishSite(path.join(repo,'Cabinet/dist'),destination),null,2));
}
