import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';
const repo=path.resolve(import.meta.dirname,'../../..'),out=path.join(repo,'.release-qa/online-version.json'),base='https://huhaiyang0415.github.io/our_story/';
const active=JSON.parse(fs.readFileSync(path.join(repo,'release-active.json'),'utf8')),manifest=JSON.parse(fs.readFileSync(path.join(repo,'release-manifests',active.id+'.json'),'utf8')),resources=JSON.parse(fs.readFileSync(path.join(repo,'gallery-resource-manifest.json'),'utf8'));
const result={base,active:active.id,queryCacheBusting:false,officialRequests:0,checks:[],scope:'own entry, application/map JS, 3 JSON, 5 representative thumbs, one stable-original HEAD; not all 475 hosted bodies'};
const main=fs.readFileSync(path.join(repo,'index.html'),'utf8').match(/src="\.\/([^" ]+\.js)"/)[1];
const selected=manifest.files.filter(f=>f.path==='index.html'||f.path===main||/^assets\/(?:PolaroidGallery|GalleryMap|mapResources)-[^/]+\.js$/.test(f.path)||resources.files.some(r=>r.name.endsWith('.json')&&r.url===f.path));
for(const slug of ['disney','confession','festivals','lingyin','daily']){const r=resources.files.find(r=>r.name.startsWith('gallery/collections/'+slug+'/'));selected.push(manifest.files.find(f=>f.path===r.url));}
try{
 for(const file of selected){const response=await fetch(base+file.path,{signal:AbortSignal.timeout(30000)}),body=Buffer.from(await response.arrayBuffer()),sha=crypto.createHash('sha256').update(body).digest('hex');result.checks.push({path:file.path,status:response.status,bytes:body.length,sha256:sha,expected:file.sha256,cacheControl:response.headers.get('cache-control'),etag:response.headers.get('etag'),passed:response.status===200&&sha===file.sha256});}
 const original=resources.files.find(r=>r.name==='gallery/originals/disney/1000013716.jpg'),r=await fetch(base+original.url,{method:'HEAD',signal:AbortSignal.timeout(30000)});result.checks.push({path:original.url,method:'HEAD',status:r.status,bytes:r.headers.get('content-length'),mime:r.headers.get('content-type'),passed:r.status===200&&Number(r.headers.get('content-length'))===original.bytes&&r.headers.get('content-type')?.includes('image/jpeg')});
 result.passed=result.checks.every(c=>c.passed);
}catch(e){result.fatal=e.message;result.passed=false;}
fs.writeFileSync(out,JSON.stringify(result,null,2));console.log(JSON.stringify({passed:result.passed,checks:result.checks.length,fatal:result.fatal}));if(!result.passed)process.exitCode=1;
