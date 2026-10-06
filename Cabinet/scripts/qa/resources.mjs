import {fixture} from './fixture.mjs';import {chromium} from './browser.mjs';import fs from 'node:fs';import path from 'node:path';
const repo=path.resolve(import.meta.dirname,'../../..'),dir=path.join(repo,'.release-qa'),root=path.join(dir,'B-dist'),server=await fixture(root,3027),result={checks:[],errors:[],officialRequests:[]};let context;
const check=(name,passed,detail)=>result.checks.push({name,passed,detail});
try{
 context=await chromium.launchPersistentContext(path.join(dir,'resources-profile'),{channel:'chrome',headless:true,viewport:{width:1440,height:900},args:['--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE 127.0.0.1']});
 const page=context.pages()[0]||await context.newPage();page.on('pageerror',e=>result.errors.push(e.message));page.on('request',r=>{if(r.url().includes('tile.openstreetmap.org'))result.officialRequests.push(r.url());});
 await page.goto('http://127.0.0.1:3027/our_story/#photos');await page.getByRole('button',{name:'地图查看',exact:true}).waitFor();
 await page.waitForFunction(()=>[...document.querySelectorAll('.gallery-stamp img')].length===5&&[...document.querySelectorAll('.gallery-stamp img')].every(i=>i.complete&&i.naturalWidth));
 await page.evaluate(()=>Promise.all([...document.querySelectorAll('.gallery-stamp img')].map(i=>i.decode())));
 check('five album covers decoded before interaction',true,{count:5,tiles:server.state.requests.filter(r=>r.tile).length});
 const manifest=JSON.parse(fs.readFileSync(path.join(root,'gallery-resource-manifest.json'),'utf8'));
 const urls=await page.evaluate(async files=>{const results=[];for(const f of files){const r=await fetch('/our_story/'+f.url,{method:'HEAD'});results.push({name:f.name,url:r.url,status:r.status,mime:r.headers.get('content-type'),etag:r.headers.get('etag'),bytes:r.headers.get('content-length')});}return results;},manifest.files);
 check('all 177 compiled resource URLs are HTTP-resolvable with byte hashes',urls.length===177&&urls.every((r,i)=>r.status===200&&r.etag==='"'+manifest.files[i].hash+'"'&&Number(r.bytes)===manifest.files[i].bytes&&r.mime.includes(r.name.endsWith('.json')?'json':'image/jpeg')),urls);
 await page.locator('.gallery-stamp--front .gallery-stamp-activate').click({force:true});await page.waitForTimeout(750);
 const at=server.state.requests.length;await page.locator('.gallery-stamp--front .gallery-stamp-activate').click({force:true});await page.locator('.gallery-photo-original.is-loaded').waitFor({timeout:100000});await page.locator('.gallery-photo-original').evaluate(i=>i.decode());
 const photos=server.state.requests.slice(at).filter(r=>r.method==='GET'&&r.url.includes('/gallery/originals/'));
 check('current original decodes with at most one network body request; no tiles compete',photos.length<=1&&!server.state.requests.slice(at).some(r=>r.tile),{networkBodies:photos.length,requests:photos});
 check('original keeps canonical approved URL',new URL(await page.locator('.gallery-photo-original').getAttribute('src'),'http://localhost').pathname.includes('/gallery/originals/'),{});
 check('no page errors or official automated tile requests',result.errors.length===0&&result.officialRequests.length===0,{errors:result.errors,official:result.officialRequests});
 result.passed=result.checks.every(c=>c.passed);
}catch(e){result.fatal=e.stack;}finally{fs.writeFileSync(path.join(dir,'resource-browser.json'),JSON.stringify(result,null,2));await context?.close();await server.close();}
console.log(JSON.stringify(result.checks.map(c=>({name:c.name,passed:c.passed}))));if(!result.passed||result.fatal)process.exitCode=1;
