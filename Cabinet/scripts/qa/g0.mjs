import { fixture,png } from './fixture.mjs';
import fs from 'node:fs';import crypto from 'node:crypto';import path from 'node:path';
import {chromium} from './browser.mjs';
const work=path.resolve(import.meta.dirname,'../../..'),dir=path.join(work,'.release-qa'),cabinet=path.join(work,'Cabinet');
const serving=await fixture(path.join(cabinet,'dist'));
const browser=await chromium.launch({channel:'chrome',headless:true});const evidence={viewports:[],outside:[]};
try{
 for(const size of [{width:1440,height:900},{width:390,height:844},{width:360,height:640},{width:844,height:390}]){
  const results=[];
  for(const url of [process.env.RELEASE_QA_DEV_URL||'http://localhost:3020/#photos','http://127.0.0.1:3021/our_story/#photos']){
   const context=await browser.newContext({viewport:size});await context.route('**/*',async route=>{const u=new URL(route.request().url());if(u.hostname==='tile.openstreetmap.org')return route.fulfill({body:png,contentType:'image/png',headers:{'access-control-allow-origin':'*','cache-control':'public, max-age=600'}});if(u.hostname!=='localhost'&&u.hostname!=='127.0.0.1'){evidence.outside.push(u.href);return route.abort();}if(u.port==='3020'&&u.pathname.startsWith('/xyz/'))return route.fulfill({body:png,contentType:'image/png'});return route.continue();});
   const page=await context.newPage();await page.goto(url);await page.getByRole('button',{name:'地图查看',exact:true}).waitFor();
   const coverTiles=await page.locator('.gallery-map-osm-tiles img').count();await page.getByRole('button',{name:'地图查看',exact:true}).click();await page.locator('.gallery-map-province').first().waitFor();await page.waitForTimeout(1500);
   const result=await page.evaluate(()=>{const layer=document.querySelector('.gallery-map-osm-tiles'),style=getComputedStyle(layer),world=document.querySelector('.gallery-map-world');return {source:document.querySelector('[data-map-source]').dataset.mapSource,xyz:[...layer.querySelectorAll('img')].map(i=>i.dataset.xyz?'/xyz/'+i.dataset.xyz+'.png':new URL(i.src).pathname.replace('/our_story','')).sort(),regions:[...document.querySelectorAll('.gallery-map-province')].map(i=>({name:i.dataset.region,d:i.getAttribute('d')})),pins:[...document.querySelectorAll('.gallery-map-marker')].map(i=>({albums:i.dataset.albumIds,transform:i.style.transform})),style:{filter:style.filter,opacity:style.opacity,blend:style.mixBlendMode},world:world.style.transform,zoom:document.querySelector('[data-map-zoom]').dataset.mapZoom,attribution:document.querySelector('.gallery-map-attribution')?.textContent||null};});result.coverTiles=coverTiles;
   await page.getByRole('button',{name:'放大地图',exact:true}).click();await page.waitForTimeout(600);result.zoomAfter=await page.locator('[data-map-zoom]').getAttribute('data-map-zoom');results.push(result);await page.screenshot({path:path.join(dir,`g0-default-${size.width}-${results.length===1?'dev':'production'}.png`)});await context.close();
  }
  const equal=JSON.stringify(results[0])===JSON.stringify(results[1]);evidence.viewports.push({size,equal,results});if(!equal)throw Error('G0 DEV/production differs '+size.width);
 }
 const hash=file=>crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');evidence.lock=hash(path.join(cabinet,'package-lock.json'));evidence.source=hash(path.join(cabinet,'src/pages/gallery/map/OsmTileLayer.tsx'));evidence.passed=true;
}finally{fs.writeFileSync(path.join(dir,'g0-default.json'),JSON.stringify(evidence,null,2));await browser.close();await serving.close();}
