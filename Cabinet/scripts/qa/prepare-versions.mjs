import fs from 'node:fs';import path from 'node:path';import {spawnSync} from 'node:child_process';
const repo=path.resolve(import.meta.dirname,'../../..'),cabinet=path.join(repo,'Cabinet'),out=path.resolve(process.argv[2]||path.join(repo,'.release-qa'));
fs.mkdirSync(out,{recursive:true});
const run=(cwd,args,env={})=>{const r=spawnSync(process.execPath,[path.join(cabinet,'node_modules/vite/bin/vite.js'),...args],{cwd,env:{...process.env,VITE_GALLERY_OSM_TILE_URL:'/xyz/{z}/{x}/{y}.png',...env},encoding:'utf8'});fs.writeFileSync(path.join(out,path.basename(path.dirname(cwd))+'-build.log'),r.stdout+r.stderr);if(r.status)throw Error('Build failed '+cwd);};
run(cabinet,['build','--outDir',path.join(out,'B-dist')]);
if(process.argv.includes('--baseline')){
 const root=path.join(out,'A-source');fs.mkdirSync(root,{recursive:true});
 const archive=path.join(out,'baseline.tar');
 const git=spawnSync('git',['-c','core.autocrlf=false','-c','core.eol=lf','archive','f5ce547','Cabinet','--format=tar','--output',archive],{cwd:repo,encoding:'utf8'});if(git.status)throw Error('Baseline archive failed');
 const tar=spawnSync('tar',['-xf',archive,'-C',root],{encoding:'utf8'});if(tar.status)throw Error('Baseline extraction failed');
 const modules=path.join(root,'Cabinet/node_modules');if(!fs.existsSync(modules))fs.symlinkSync(path.join(cabinet,'node_modules'),modules,process.platform==='win32'?'junction':'dir');
 // f5's 520 copier uses Cabinet/dist, so archive builds must keep its real default output.
 run(path.join(root,'Cabinet'),['build']);
 fs.cpSync(path.join(root,'Cabinet/dist'),path.join(out,'baseline-dist'),{recursive:true});
 fs.cpSync(path.join(repo,'gallery/originals'),path.join(out,'baseline-dist/gallery/originals'),{recursive:true});
}
for(const version of ['C','D']){
 const root=path.join(out,version+'-source'),dest=path.join(root,'Cabinet');fs.mkdirSync(dest,{recursive:true});
 for(const name of ['src','public','scripts','index.html','vite.config.ts','tsconfig.json','tsconfig.node.json','package.json','package-lock.json','postcss.config.js']){
  const source=path.join(cabinet,name);if(fs.existsSync(source))fs.cpSync(source,path.join(dest,name),{recursive:true});
 }
 fs.copyFileSync(path.join(repo,'SCOPE.md'),path.join(root,'SCOPE.md'));
 const modules=path.join(dest,'node_modules');if(!fs.existsSync(modules))fs.symlinkSync(path.join(cabinet,'node_modules'),modules,process.platform==='win32'?'junction':'dir');
 const gallery=path.join(root,'gallery');if(!fs.existsSync(gallery))fs.symlinkSync(path.join(repo,'gallery'),gallery,process.platform==='win32'?'junction':'dir');
 if(version==='C'){
  const file=path.join(dest,'public/gallery/map/china-4.0.2.json'),data=JSON.parse(fs.readFileSync(file,'utf8'));data.type='FixtureGallerySchema2';data.fixtureRelease='C-'+Date.now();fs.writeFileSync(file,JSON.stringify(data));
  const parser=path.join(dest,'src/pages/gallery/map/mapResources.ts');fs.writeFileSync(parser,fs.readFileSync(parser,'utf8').replace('parseGeography(china, 34, projectOsmCoordinate)',"parseGeography(china.type === 'FixtureGallerySchema2' ? { ...china, type: 'FeatureCollection' } : china, 34, projectOsmCoordinate)"));
 }else{
  const file=path.join(dest,'src/pages/gallery/GalleryMap.tsx');fs.writeFileSync(file,fs.readFileSync(file,'utf8').replace('className="gallery-map-stage"','data-fixture-release="D-'+Date.now()+'" className="gallery-map-stage"'));
 }
 run(dest,['build']);
}
console.log('Synthetic B/C/D prepared; final dist and production sources untouched.');
