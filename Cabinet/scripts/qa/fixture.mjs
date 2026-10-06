import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import zlib from 'node:zlib';
const crc = bytes => { let n=0xffffffff; for(const b of bytes){n^=b;for(let j=0;j<8;j++) n=(n>>>1)^((n&1)?0xedb88320:0);}return (n^0xffffffff)>>>0; };
const chunk=(type,body)=>{const t=Buffer.from(type),size=Buffer.alloc(4),sum=Buffer.alloc(4);size.writeUInt32BE(body.length);sum.writeUInt32BE(crc(Buffer.concat([t,body])));return Buffer.concat([size,t,body,sum]);};
const raw=Buffer.alloc(256*(1+256*3)); let seed=42;
for(let y=0;y<256;y++)for(let x=0;x<256;x++){seed=(seed*1664525+1013904223)>>>0;for(let c=0;c<3;c++)raw[y*769+1+x*3+c]=190+(seed>>>(c*8)&31);}
const ihdr=Buffer.alloc(13);ihdr.writeUInt32BE(256);ihdr.writeUInt32BE(256,4);ihdr[8]=8;ihdr[9]=2;
export const png=Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),chunk('IHDR',ihdr),chunk('IDAT',zlib.deflateSync(raw)),chunk('IEND',Buffer.alloc(0))]);
export function fixture(root,port=3021) {
 const state={root,release:'A',ttl:600,tileTtl:2,delay:90,jsonDelayMs:0,originalChunkMs:0,fail:false,failCode:503,badJson:false,requests:[],active:0,peak:0,missing:new Set(),tileVersion:1};
 const mime={'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg','.woff':'font/woff','.woff2':'font/woff2','.svg':'image/svg+xml'};
 const server=http.createServer(async(req,res)=>{
  const url=new URL(req.url,'http://localhost');const pathname=decodeURIComponent(url.pathname);let file=pathname.replace(/^\/our_story\//,'/');
  if(file==='/away'){res.setHeader('Content-Type','text/html');res.end('<title>Away</title><a href="/our_story/#photos">Return</a>');return;}
  const tile=/\/xyz\/\d+\/\d+\/\d+\.png$/.test(file);
  if(file==='/'||file==='/index.html')file='/index.html';
  const record={method:req.method,url:req.url,at:Date.now(),release:state.release,conditional:req.headers['if-none-match'],referer:req.headers.referer,tile};state.requests.push(record);
  let body;
  try { const resolved=path.resolve(state.root,'.'+file);if(!resolved.startsWith(path.resolve(state.root)+path.sep))throw Error();body=tile?Buffer.concat([png.subarray(0,png.length-12),chunk('tEXt',Buffer.from(`fixture\0version${state.tileVersion}`)),png.subarray(png.length-12)]):fs.readFileSync(resolved);if(state.missing.has(file))throw Error();}
  catch {record.status=404;res.statusCode=404;res.end('missing');return;}
  if(state.badJson&&file.endsWith('china-4.0.2.json'))body=Buffer.from('<html>fixture invalid map response</html>');
  if(tile&&state.fail){body=Buffer.from('unavailable');res.setHeader('Cache-Control','max-age=0');}
  const etag='"'+crypto.createHash('sha256').update(body).update(tile?String(state.tileVersion):'').digest('hex')+'"';
  res.setHeader('Cache-Control',tile&&state.fail?'max-age=0':`public, max-age=${tile?state.tileTtl:file==='/index.html'?state.ttl:31536000}`);res.setHeader('ETag',etag);res.setHeader('Date',new Date().toUTCString());res.setHeader('Access-Control-Allow-Origin','*');res.setHeader('Content-Type',tile?'image/png':mime[path.extname(file)]||'application/octet-stream');
  if(req.headers['if-none-match']===etag){record.status=304;res.statusCode=304;res.end();return;}
  if(tile){state.active++;state.peak=Math.max(state.peak,state.active);let closed=false;res.on('close',()=>{state.active--;record.canceled=!res.writableFinished;closed=true;});await new Promise(r=>setTimeout(r,state.delay));if(closed)return;if(state.fail){record.status=state.failCode;res.statusCode=state.failCode;res.end('unavailable');return;}}
  if(state.jsonDelayMs&&file.endsWith('.json')){let closed=false;res.on('close',()=>{closed=true;record.canceled=!res.writableFinished;});await new Promise(r=>setTimeout(r,state.jsonDelayMs));if(closed)return;}
  record.status=200;res.setHeader('Content-Length',body.length);
  if(state.originalChunkMs&&body.length>1000000&&file.endsWith('/1000013716.jpg')){record.bytes=0;let closed=false;res.on('close',()=>{closed=true;record.canceled=!res.writableFinished;});for(let at=0;at<body.length&&!closed;at+=65536){const part=body.subarray(at,at+65536);res.write(part);record.bytes+=part.length;await new Promise(r=>setTimeout(r,state.originalChunkMs));}if(!closed)res.end();return;}
  record.bytes=body.length;res.end(body);
 });
 return new Promise(resolve=>server.listen(port,'127.0.0.1',()=>resolve({state,server,close:()=>new Promise(r=>server.close(r))})));
}
