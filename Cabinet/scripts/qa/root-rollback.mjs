import fs from 'node:fs';import path from 'node:path';
import {readManifests,validateRelease,activateStoredRelease,digest} from '../prepare-retained-release.mjs';import {publishSite} from '../copy-site.mjs';import {checkRelease} from '../check-release.mjs';
const repo=path.resolve(import.meta.dirname,'../../..'),dest=path.join(repo,'.release-qa/default-root-rollback');
if(fs.existsSync(dest))throw Error('Use a fresh temporary output; existing evidence must not be overwritten');
const manifests=readManifests(repo),active=JSON.parse(fs.readFileSync(path.join(repo,'release-active.json'),'utf8')),baseline=manifests.find(m=>m.id.startsWith('baseline-'));
if(!baseline||!manifests.every(m=>validateRelease(repo,m)))throw Error('Complete baseline and current closure required');
const names=new Set([...manifests.flatMap(m=>m.files.map(f=>f.path)),'gallery-resource-manifest.json','release-active.json',...fs.readdirSync(path.join(repo,'release-manifests')).map(n=>'release-manifests/'+n)]);let linkedOriginals=0;
for(const name of names){const from=path.join(repo,name),to=path.join(dest,name);fs.mkdirSync(path.dirname(to),{recursive:true});if(/^gallery\/originals\/.+\.jpe?g$/i.test(name)){fs.linkSync(from,to);linkedOriginals++;}else fs.copyFileSync(from,to);}
const result={officialRequests:0,originalImagesTrackedAdded:0,temporaryOriginalHardlinks:linkedOriginals,checks:[]};
const verify=id=>{const m=readManifests(dest).find(m=>m.id===id);return readManifests(dest).every(m=>validateRelease(dest,m))&&digest(path.join(dest,'index.html'))===m.files.find(f=>f.path==='index.html').sha256;};
const restored=activateStoredRelease(dest,baseline.id);fs.writeFileSync(path.join(dest,'release-active.json'),JSON.stringify({id:restored.id,rollback:true}));
result.checks.push({name:'stored complete formal f5 entry rollback and retained B closure',passed:verify(baseline.id),id:baseline.id,entrySha256:digest(path.join(dest,'index.html'))});
result.rollbackResources=checkRelease(dest,repo);
const current=publishSite(path.join(repo,'Cabinet/dist'),dest,{sourceRepo:repo});result.checks.push({name:'real publisher restores current default OSM entry with both closures',passed:current.id===active.id&&verify(active.id),id:current.id,entrySha256:digest(path.join(dest,'index.html'))});
result.currentResources=checkRelease(dest,repo);result.passed=linkedOriginals===87&&result.checks.every(c=>c.passed);
fs.writeFileSync(path.join(repo,'.release-qa/root-rollback.json'),JSON.stringify(result,null,2));console.log(JSON.stringify(result));if(!result.passed)process.exitCode=1;
