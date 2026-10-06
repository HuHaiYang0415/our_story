import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
export const digest = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
export function walk(dir) {
 return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>{
  const file=path.join(dir,e.name);if(e.isSymbolicLink())throw Error('Release input cannot contain symlinks');
  return e.isDirectory()?walk(file):[file];
 });
}
function target(root,name) {
 if(fs.existsSync(root)&&fs.lstatSync(root).isSymbolicLink())throw Error('Unsafe symlink destination');
 if(!name||name.includes('\\')||name.startsWith('/')||name.split('/').some(p=>p==='..'||p==='.'||!p)||/[:\0]/.test(name))throw Error('Unsafe manifest path');
 const file=path.resolve(root,name);if(!file.startsWith(path.resolve(root)+path.sep))throw Error('Unsafe manifest path');
 let parent=path.dirname(file);
 while(parent!==path.resolve(root)){if(fs.existsSync(parent)&&fs.lstatSync(parent).isSymbolicLink())throw Error('Unsafe symlink destination');parent=path.dirname(parent);}
 if(fs.existsSync(file)&&fs.lstatSync(file).isSymbolicLink())throw Error('Unsafe symlink destination');return file;
}
export function releaseFiles(source,published=false) {
 const candidates=published?['index.html','assets','pages','gallery','manifest.webmanifest','icon.png'].filter(name=>fs.existsSync(path.join(source,name))).flatMap(name=>{const file=target(source,name);return fs.statSync(file).isDirectory()?walk(file):[file];}):walk(source);
 const versioned=fs.existsSync(path.join(source,'gallery-resource-manifest.json'));
 return candidates.map(file=>({path:path.relative(source,file).replaceAll('\\','/'),sha256:digest(file),bytes:fs.statSync(file).size}))
 .filter(f=>f.path!=='gallery-resource-manifest.json'&&(published||!versioned||!/^gallery\/(?:map\/.*\.json$|collections\/)/.test(f.path)));
}
function assertManifest(root,m) {
 if(m.schema!==1||!/^[A-Za-z0-9_-]+$/.test(m.id)||!Number.isFinite(m.at)||!Array.isArray(m.files))throw Error('Invalid release manifest');
 const names=new Set();
 for(const f of m.files){target(root,f.path);if(names.has(f.path)||!/^[a-f0-9]{64}$/.test(f.sha256)||!Number.isSafeInteger(f.bytes)||f.bytes<0)throw Error('Invalid release file');
 names.add(f.path);if(/(?:qixi|dev-only|festivalPreview|\.env|private\.config)/i.test(f.path))throw Error('Excluded content cannot be retained');}
 if(!names.has('index.html'))throw Error('Entry missing');
}
function atomicCopy(from,to){fs.mkdirSync(path.dirname(to),{recursive:true});fs.copyFileSync(from,to+'.next');fs.renameSync(to+'.next',to);}
export function readManifests(destination) {
 const dir=path.join(destination,'release-manifests');if(!fs.existsSync(dir))return [];
 return fs.readdirSync(dir).filter(n=>/^[A-Za-z0-9_-]+\.json$/.test(n)).map(n=>{const m=JSON.parse(fs.readFileSync(path.join(dir,n),'utf8'));assertManifest(destination,m);return m;});
}
export function capturePublishedRelease(destination,id,now=Date.now()){
 const m={schema:1,id,at:now,files:releaseFiles(destination,true)};assertManifest(destination,m);
 const dir=path.join(destination,'release-manifests');fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(path.join(dir,id+'.json'),JSON.stringify(m,null,2));
 fs.copyFileSync(path.join(destination,'index.html'),path.join(dir,id+'.entry.html'));return m;
}
/** Same publishing implementation for temporary acceptance and the real site root. */
export function prepareRelease(source,destination,id,now=Date.now()) {
 source=path.resolve(source);destination=path.resolve(destination);
 if(source===destination||destination.startsWith(source+path.sep))throw Error('Invalid release workspace');
 const m={schema:1,id,at:now,files:releaseFiles(source)};assertManifest(destination,m);
 // Check ALL collisions before any output write, including unchanged stable originals.
 for(const f of m.files.filter(f=>f.path!=='index.html')){const to=target(destination,f.path);if(fs.existsSync(to)&&digest(to)!==f.sha256)throw Error('Dependency collision: version the changing URL before retaining it: '+f.path);}
 const dir=path.join(destination,'release-manifests');fs.mkdirSync(dir,{recursive:true});
 const previous=readManifests(destination).find(p=>p.id===id);
 if(previous&&JSON.stringify(previous.files)!==JSON.stringify(m.files))throw Error('Release ID collision');
 if(previous)m.at=previous.at;
 for(const f of m.files.filter(f=>f.path!=='index.html')){const to=target(destination,f.path);if(fs.existsSync(to)&&digest(to)===f.sha256)continue;atomicCopy(target(source,f.path),to);}
 if(!validateRelease(destination,m))throw Error('Release dependency closure missing');
 fs.writeFileSync(path.join(dir,id+'.json'),JSON.stringify(m,null,2));fs.copyFileSync(path.join(source,'index.html'),path.join(dir,id+'.entry.html'));
 const resources=path.join(source,'gallery-resource-manifest.json');if(fs.existsSync(resources)){fs.copyFileSync(resources,path.join(dir,id+'.resources.json'));atomicCopy(resources,path.join(destination,'gallery-resource-manifest.json'));}
 atomicCopy(path.join(source,'index.html'),path.join(destination,'index.html'));return m;
}
export function retainedReleaseIds(manifests,now=Date.now()){
 return [...manifests].sort((a,b)=>b.at-a.at||b.id.localeCompare(a.id)).filter((m,i)=>i<2||now-m.at<7*86400000).map(m=>m.id);
}
export function validateRelease(destination,m){
 assertManifest(destination,m);return m.files.filter(f=>f.path!=='index.html').every(f=>{const file=target(destination,f.path);return fs.existsSync(file)&&fs.statSync(file).size===f.bytes&&digest(file)===f.sha256;});
}
export function rollbackRelease(source,destination,m){
 if(!validateRelease(destination,m))throw Error('Rollback dependency closure missing');
 const entry=m.files.find(f=>f.path==='index.html');if(!entry||digest(path.join(source,'index.html'))!==entry.sha256)throw Error('Rollback entry version mismatch');
 atomicCopy(path.join(source,'index.html'),path.join(destination,'index.html'));
}
export function activateStoredRelease(destination,id){
 const m=readManifests(destination).find(m=>m.id===id);if(!m)throw Error('Unknown rollback release');
 const dir=path.join(destination,'release-manifests'),entry=path.join(dir,id+'.entry.html');
 if(!validateRelease(destination,m)||digest(entry)!==m.files.find(f=>f.path==='index.html').sha256)throw Error('Rollback dependency closure missing');
 const resources=path.join(dir,id+'.resources.json');if(fs.existsSync(resources))atomicCopy(resources,path.join(destination,'gallery-resource-manifest.json'));
 atomicCopy(entry,path.join(destination,'index.html'));return m;
}
export function pruneReleaseOutput(destination,manifests,activeId,now=Date.now()){
 manifests.forEach(m=>assertManifest(destination,m));const retained=new Set([...retainedReleaseIds(manifests,now),activeId]);
 const keep=new Set(manifests.filter(m=>retained.has(m.id)).flatMap(m=>m.files.map(f=>f.path))),removed=[];
 for(const m of manifests.filter(m=>!retained.has(m.id)))for(const f of m.files){
  // Manifest-scoped file deletion only. Stable originals/pages and unknown files survive.
  if(keep.has(f.path)||!/^(?:assets\/|gallery\/versioned\/)/.test(f.path))continue;
  const file=target(destination,f.path);if(fs.existsSync(file)&&digest(file)===f.sha256){fs.unlinkSync(file);removed.push(f.path);}
 }
 for(const m of manifests.filter(m=>!retained.has(m.id)))for(const suffix of ['json','entry.html','resources.json']){const file=target(destination,'release-manifests/'+m.id+'.'+suffix);if(fs.existsSync(file))fs.unlinkSync(file);}
 return {retained:[...retained],removed:[...new Set(removed)]};
}
