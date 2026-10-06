import fs from 'node:fs';import path from 'node:path';import {chromium} from './browser.mjs';
const repo=path.resolve(import.meta.dirname,'../../..'),dir=path.join(repo,'.release-qa'),base='https://huhaiyang0415.github.io/our_story/',report=path.join(dir,'online-own-resources.json');
const result={scope:'actual hosted own code/data, no official tile bodies; actual OSM visual is separate manual evidence',cacheCleared:false,routeInterception:false,disableCache:false,checks:[],responses:[],phase:'prepare'};
const save=()=>fs.writeFileSync(report,JSON.stringify(result,null,2));let context;
try{
 context=await chromium.launchPersistentContext(path.join(dir,'online-profile'),{channel:'chrome',headless:true,args:['--host-resolver-rules=MAP tile.openstreetmap.org ~NOTFOUND']});
 const old=context.pages()[0]||await context.newPage(),cdp=await context.newCDPSession(old);await cdp.send('Network.enable');
 cdp.on('Network.responseReceived',e=>result.responses.push({url:e.response.url,status:e.response.status,cache:e.response.fromDiskCache,headers:e.response.headers}));
 await old.goto(base+'#photos',{timeout:20000});await old.getByRole('button',{name:'地图查看',exact:true}).waitFor();
 result.preparedAt=new Date().toISOString();result.oldMain=await old.locator('script[src]').first().getAttribute('src');result.phase='ready';save();console.log('Old actual hosted page ready: '+result.oldMain);
 const trigger=path.join(dir,'online-continue.json');
 while(!fs.existsSync(trigger))await new Promise(r=>setTimeout(r,1000));
 const expected=JSON.parse(fs.readFileSync(trigger,'utf8'));result.expected=expected;result.phase='after-push';save();
 const main=html=>html.match(/src="([^"]+\.js)"/)?.[1];const start=Date.now();
 for(;;){
  const html=await old.evaluate(()=>fetch('/our_story/').then(r=>r.text()));result.freshMain=main(html);save();
  if(result.freshMain===expected.main)break;
  if(Date.now()-start>800000)throw Error('Entry did not converge under normal cache within 800s');
  await new Promise(r=>setTimeout(r,30000));
 }
 result.entryConvergenceMs=Date.now()-start;
 const current=await context.newPage();await current.goto(base+'#photos',{timeout:20000});await current.getByRole('button',{name:'地图查看',exact:true}).waitFor();const newMain=await current.locator('script[src]').first().getAttribute('src');
 result.checks.push({name:'new normal navigation reaches published entry without clearing cache',passed:newMain===expected.main,main:newMain});
 await old.bringToFront();await old.getByRole('button',{name:'地图查看',exact:true}).click();await old.locator('.gallery-map-province').first().waitFor({timeout:20000});
 result.checks.push({name:'long-open old actual page first lazy map retains own dependency closure',passed:await old.locator('.gallery-map-province').count()===34,oldMain:result.oldMain,attribution:await old.locator('.gallery-map-attribution').innerText()});
 await current.bringToFront();await current.getByRole('button',{name:'地图查看',exact:true}).click();await current.locator('.gallery-map-province').first().waitFor();
 result.checks.push({name:'actual new own map data and attribution available',passed:await current.locator('.gallery-map-province').count()===34&&await current.locator('.gallery-map-attribution a').count()===2,source:await current.locator('[data-map-source]').getAttribute('data-map-source')});
 result.checks.push({name:'no own resource HTTP failure',passed:!result.responses.some(r=>r.url.startsWith(base)&&r.status>=400)});
 result.passed=result.checks.every(c=>c.passed);result.phase='finished';save();
}catch(e){result.fatal=e.stack;result.phase='failed';save();console.error(e.message);}finally{await context?.close();}if(!result.passed)process.exitCode=1;
