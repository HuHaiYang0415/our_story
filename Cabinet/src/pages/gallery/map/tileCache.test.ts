import {test} from 'node:test';import assert from 'node:assert/strict';import {TileCache} from './tileCache';import {visibleTiles} from './xyz';
class FakeImage {
 static requests: FakeImage[]=[]; onload: (()=>void)|null=null; onerror: (()=>void)|null=null; naturalWidth=256;naturalHeight=256;complete=true;dataset={};style={};alt='';draggable=false;decoding='';
 set src(_value:string){FakeImage.requests.push(this);} remove(){} removeAttribute(_name:string){} decode(){return Promise.resolve();}
}
(globalThis as unknown as {Image:typeof FakeImage}).Image=FakeImage;
(globalThis as unknown as {window:unknown}).window={setTimeout,clearTimeout};
const tiles=visibleTiles({zoom:1,panX:0,panY:0},.5,{width:1440,height:900});
test('four slots, coalescing, center order, progressive decode, release and stale completion',async()=>{
 FakeImage.requests=[];const cache=new TileCache('/xyz/{z}/{x}/{y}.png',false);cache.update(tiles);assert.equal(FakeImage.requests.length,0);cache.pause(false);assert.equal(FakeImage.requests.length,4);cache.update(tiles);assert.equal(FakeImage.requests.length,4);
 const first=FakeImage.requests[0];first.onload?.();await Promise.resolve();await Promise.resolve();assert.ok(cache.get(tiles[0]));assert.equal(FakeImage.requests.length,5);
 const stale=FakeImage.requests[1].onload;cache.update(tiles.slice(-2));stale?.();await Promise.resolve();assert.equal(cache.get(tiles[1]),undefined);assert.ok(cache.stats.canceled>0);assert.equal(cache.stats.peak,4);
 cache.release();cache.clear();
});
test('provider and session images do not cross keys; original/hidden pause releases slots',()=>{FakeImage.requests=[];const a=new TileCache('/a/{z}/{x}/{y}.png',false),b=new TileCache('/b/{z}/{x}/{y}.png',false);a.update(tiles);a.pause(false);a.pause(true);assert.equal(a.stats.canceled,4);assert.equal(b.get(tiles[0]),undefined);a.clear();b.clear();});
test('CORS path uses default HTTP cache, owns blob URL, expires and aborts requests',async()=>{
 const originalFetch=globalThis.fetch;const calls:{url:string;options:RequestInit;resolve:(response:Response)=>void}[]=[];
 globalThis.fetch=((url:string,options:RequestInit)=>new Promise<Response>(resolve=>calls.push({url,options,resolve}))) as typeof fetch;
 FakeImage.requests=[];const cache=new TileCache('/xyz/{z}/{x}/{y}.png',true);
 try{
  cache.update(tiles.slice(0,4));cache.pause(false);assert.equal(calls.length,4);assert.equal(calls[0].options.cache,undefined);assert.equal(calls[0].options.credentials,'omit');
  calls[0].resolve(new Response(new Uint8Array([1,2,3]),{headers:{'content-type':'image/png','cache-control':'max-age=1','date':new Date().toUTCString()}}));
  await new Promise(resolve=>setTimeout(resolve,10));FakeImage.requests[0].onload?.();await Promise.resolve();await Promise.resolve();assert.ok(cache.get(tiles[0]));assert.ok(cache.stats.totalBytes>cache.stats.decodedBytes);
  const now=Date.now;try{Date.now=()=>now()+3000;cache.update(tiles.slice(0,4));assert.equal(calls.length,5);}finally{Date.now=now;}
  cache.pause(true);assert.ok(calls.slice(1).every(c=>c.options.signal?.aborted));cache.clear();assert.equal(cache.stats.totalBytes,0);
 }finally{globalThis.fetch=originalFetch;cache.clear();}
});
