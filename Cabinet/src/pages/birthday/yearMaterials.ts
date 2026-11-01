import * as T from 'three';
import {birthdayRepository} from './birthdayRepository';
/** Original small cloth/wood/paper material maps, generated only for current years. */
export function birthdayTextile(age:number,paper=false){
 const s=birthdayRepository.getScene(age),canvas=document.createElement('canvas');canvas.width=canvas.height=256;const c=canvas.getContext('2d')!;c.fillStyle=paper?'#fff5e8':'#fffdf8';c.fillRect(0,0,256,256);c.globalAlpha=paper?.035:.075;c.strokeStyle='#a38c73';c.lineWidth=1;
 const type=paper?wallPatterns[age-1]:s.clothPattern;
 if(type==='woven-border'){c.fillStyle='#7e9cae';c.fillRect(0,0,256,10);c.fillRect(0,246,256,10);c.fillRect(0,0,10,256);c.fillRect(246,0,10,256);}
 else if(type.includes('check')||type==='net'||type==='stripe'||type==='diagonal'){
  const n=type==='wide-check'?128:type==='net'?48:64;c.save();if(type==='diagonal'){c.translate(128,128);c.rotate(Math.PI/4);c.translate(-128,-128);}for(let x=-256;x<512;x+=n){c.fillStyle='#a6aa92';c.fillRect(x,0,type==='stripe'?14:5,256);if(type!=='stripe')c.fillRect(0,x,256,5);}c.restore();
 }else if(type==='dot'){for(let y=16;y<256;y+=32)for(let x=16;x<256;x+=32){c.beginPath();c.arc(x+(y%64?0:16),y,2.1,0,Math.PI*2);c.fillStyle='#92745c';c.fill();}}
 else if(type==='diamond'){for(let y=0;y<256;y+=64)for(let x=0;x<256;x+=64){c.beginPath();c.moveTo(x+32,y);c.lineTo(x+64,y+32);c.lineTo(x+32,y+64);c.lineTo(x,y+32);c.closePath();c.stroke();}}
 else if(type==='floral'||type==='lace'){
  if(!paper&&type==='floral')c.globalAlpha=.24;
  for(let y=24;y<256;y+=64)for(let x=24;x<256;x+=64){for(let i=0;i<5;i++){const a=i*Math.PI*2/5;c.beginPath();c.ellipse(x+Math.cos(a)*5,y+Math.sin(a)*5,5,2.7,a,0,Math.PI*2);c.fillStyle=type==='lace'?'#ffffff':'#cfaa89';c.fill();}c.strokeStyle='#9baf8c';c.beginPath();c.moveTo(x,y+7);c.lineTo(x+3,y+18);c.stroke();}
 }else if(type==='paper-lines'){for(let y=0;y<256;y+=20){c.beginPath();c.moveTo(0,y);c.lineTo(256,y+2);c.stroke();}}
 c.globalAlpha=type==='woven'?.045:type==='fine-linen'?.018:.025;for(let i=0;i<256;i+=type==='woven'?12:type==='fine-linen'?6:8){c.fillStyle='#aa9d8c';c.fillRect(i,0,.5,256);c.fillRect(0,i,256,.5);}c.globalAlpha=1;
 const t=new T.CanvasTexture(canvas);t.wrapS=t.wrapT=T.RepeatWrapping;t.repeat.set(paper?2:3,paper?2:3);t.colorSpace=T.SRGBColorSpace;t.anisotropy=4;return t;
}
export function platformGeometry(age:number){const s=birthdayRepository.getScene(age),shape=new T.Shape(),oval=/椭圆|圆台面|圆台/.test(s.materials),rectangle=/长方|方台|覆面/.test(s.materials);for(let i=0;i<=64;i++){const a=i*Math.PI/32,xx=rectangle?Math.sign(Math.cos(a))*Math.pow(Math.abs(Math.cos(a)),.35):Math.cos(a),yy=rectangle?Math.sign(Math.sin(a))*Math.pow(Math.abs(Math.sin(a)),.35):Math.sin(a);const x=xx*(oval?1.79:1.75),y=yy*(oval?1.44:1.5);if(!i)shape.moveTo(x,y);else shape.lineTo(x,y);}shape.closePath();const g=new T.ExtrudeGeometry(shape,{depth:.038,bevelEnabled:true,bevelSegments:2,steps:1,bevelSize:.015,bevelThickness:.012,curveSegments:24});g.rotateX(-Math.PI/2);return g;}
export const platformColors=['#cda477','#d1bd91','#c3aa89','#dbbd88','#c29a69','#c49c7e','#efe4d2','#f3e5d5','#d0b994','#ede9dc','#c9af88','#b58e74','#dedbd2','#beab8f','#ddd0b8','#d4bd94','#987858','#cda38c','#c4a779','#d4cabb','#c4ab91','#c6b3a2','#c5a681','#d1ae7b'];
/** Per-year table semantics from the frozen catalog, not four visual groups.
 * width/depth are shared-world support dimensions; existing heroes stay fixed. */
export const foundationRecipes=[
 {age:1,form:'rounded-square',width:11.2,depth:11.6,round:.20,thickness:.28,finish:'honey-wood'},
 {age:2,form:'oval',width:11.8,depth:11.0,round:.50,thickness:.21,finish:'oak'},
 {age:3,form:'round',width:11.5,depth:11.5,round:.50,thickness:.24,finish:'light-walnut'},
 {age:4,form:'rounded-square',width:11.4,depth:11.4,round:.19,thickness:.22,finish:'maple'},
 {age:5,form:'rounded-square',width:11.5,depth:11.5,round:.21,thickness:.27,finish:'golden-wood'},
 {age:6,form:'round',width:11.6,depth:11.6,round:.50,thickness:.22,finish:'cherry'},
 {age:7,form:'small-square',width:11.1,depth:11.4,round:.19,thickness:.09,finish:'warm-white-lacquer'},
 {age:8,form:'round',width:11.5,depth:11.5,round:.50,thickness:.20,finish:'warm-white-lacquer'},
 {age:9,form:'rounded-long',width:12.1,depth:11.3,round:.20,thickness:.14,finish:'natural-wood'},
 {age:10,form:'small-square',width:11.2,depth:11.4,round:.18,thickness:.19,finish:'white-plank'},
 {age:11,form:'rounded-plank',width:11.6,depth:11.6,round:.22,thickness:.22,finish:'light-plank'},
 {age:12,form:'oval',width:11.9,depth:11.2,round:.50,thickness:.21,finish:'cherry'},
 {age:13,form:'rounded-square',width:11.6,depth:11.6,round:.22,thickness:.25,finish:'gray-white-wood'},
 {age:14,form:'rounded-long',width:12.0,depth:11.3,round:.18,thickness:.23,finish:'light-walnut'},
 {age:15,form:'round',width:11.6,depth:11.6,round:.50,thickness:.21,finish:'bleached-maple'},
 {age:16,form:'rounded-square',width:11.5,depth:11.5,round:.20,thickness:.22,finish:'birch'},
 {age:17,form:'low-rounded',width:11.7,depth:11.5,round:.23,thickness:.12,finish:'dark-walnut'},
 {age:18,form:'round',width:11.6,depth:11.6,round:.50,thickness:.22,finish:'warm-cherry'},
 {age:19,form:'oval',width:12.0,depth:11.1,round:.50,thickness:.17,finish:'oak'},
 {age:20,form:'small-square',width:11.2,depth:11.4,round:.20,thickness:.20,finish:'ash'},
 {age:21,form:'round',width:11.5,depth:11.5,round:.50,thickness:.23,finish:'light-walnut'},
 {age:22,form:'ceramic-rounded',width:11.5,depth:11.5,round:.22,thickness:.22,finish:'matte-ceramic'},
 {age:23,form:'rounded-long',width:12.1,depth:11.3,round:.19,thickness:.17,finish:'honey-walnut'},
 {age:24,form:'rounded',width:11.6,depth:11.6,round:.24,thickness:.24,finish:'honey-wood'}
] as const;

export const wallColors=['#efe0bc','#f1eadb','#e6d9c5','#eadfb8','#d9e5e8','#eee8db','#e6dcc7','#ead5d3','#ede5d4','#ddd5e0','#d2e1e4','#f0e8dd','#d8d1db','#cdd9d5','#dedee2','#d2dce4','#ddd8cf','#efe7d9','#d0d8c9','#e5d9c7','#dfcfbb','#d9d5ce','#cbd2c5','#f0e7d9'];
const wallPatterns=['stripe','dot','fiber','fiber','paper-lines','fiber','paper-lines','fiber','fiber','diamond','fiber','fiber','linen','fiber','fiber','linen','fiber','fiber','linen','fiber','linen','fiber','linen','fiber'];
