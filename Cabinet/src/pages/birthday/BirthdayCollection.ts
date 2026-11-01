import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import type {BirthdayAssets,BirthdayModel} from './BirthdayAssets';
import {birthdayRepository} from './birthdayRepository';
import {birthdayTextile,wallColors} from './yearMaterials';
import {birthdayArchives,birthdayRecordIsAvailable} from './birthdayArchives';
import {memoryArrangement,collectionFontScale} from './astraComposition';
import type {AstraLayout,MemoryPose} from './astraComposition';
import {BOX,BIRTHDAY_ROOM} from './boxGeometry';
import type {BirthdayArchives} from './birthdayArchives';
export type CollectionSide='left'|'back'|'right'|'front';
export const SURROUND_SLOTS:Array<[number,number,CollectionSide,number,number]>=[
 [-.84,-.34,'left',.50,-.08],[.83,-.10,'right',.47,.14],[-.35,-.82,'back',.62,-.12],[-.58,.82,'front',.53,.10],
 [-.76,-.66,'back',.58,.08],[-.77,.10,'left',.44,-.09],[-.79,.49,'left',.55,.10],[-.16,-.89,'back',.61,-.04],
 [.80,.28,'right',.52,-.08],[.73,-.58,'right',.55,.12],[.27,-.89,'back',.64,-.10],[-.57,-.50,'left',.56,.09],
 [.84,.48,'right',.51,-.10],[.50,-.80,'back',.46,.12],[-.67,.32,'left',.43,-.05],[.67,-.31,'right',.48,.12],
 [-.54,-.75,'back',.62,-.12],[.67,-.63,'back',.56,.10],[.62,.62,'right',.52,-.10],[.53,.86,'front',.48,.09],
 [-.55,.66,'left',.48,.08],[.32,-.65,'back',.55,-.09],[-.34,.90,'front',.50,-.06],[.35,.80,'front',.55,.08]];
/** The same 24 complete 3D LOD gifts stand on four fixed table edges.
 * A merged palette draws them; original mesh proxies supply precise hit tests.
 * No display board, grid, flattened proportions or hero response state. */
export class BirthdayCollection {
 readonly root=new T.Group();readonly board=new T.Group();readonly replay=new T.Group();readonly poster=new T.Group();
 readonly cells=new Map<string,T.Group>();readonly futureCells=new Map<string,T.Group>();
 private originals:MemoryPose[]=[];private current:MemoryPose[]=[];private inverseHomes:T.Matrix4[]=[];private localBounds:T.Box3[]=[];private originalBounds:T.Box3[]=[];private arrangements=new Map<string,MemoryPose[]>();
 private composition={matrices:{value:Array.from({length:24},()=>new T.Matrix4())},opacity:{value:new Float32Array(24).fill(1)}};
 private source:BirthdayModel;private interior:BirthdayModel;private models=new T.Group();
 private geometry=new Set<T.BufferGeometry>();private materials=new Set<T.Material>();private textures=new Set<T.Texture>();
 private uniforms={count:{value:0},previous:{value:0},reveal:{value:1}};
 private mode:'table'|'collection'='table';private age=1;private wallZ=BIRTHDAY_ROOM.back+.25;private posterAge=-1;private wallMap:T.Texture|null=null;private decoration=new T.Group();private laidOut=false;
 constructor(assets:BirthdayAssets,readonly archives:BirthdayArchives=birthdayArchives){
  this.root.name='birthday-box-interior';this.source=assets.instance('DISPLAY-COLLECTION');this.interior=assets.instance('BOX-INTERIOR');this.root.add(this.interior.root,this.board,this.poster,this.decoration,this.replay);this.board.add(this.models);
  this.interior.root.traverse(o=>{if(o instanceof T.Mesh){o.castShadow=false;o.receiveShadow=true;const m=o.material as T.MeshStandardMaterial;if(m.name.startsWith('MAT_warm_book_paper')||o.name==='Opaque_shadow_surface')o.visible=false;if(m instanceof T.MeshStandardMaterial){m.bumpMap=null;m.bumpScale=0;m.emissiveIntensity=0;}}});
  this.setRoomProgress(1);
  for(let age=1;age<=24;age++){const cell=new T.Group();cell.name=`DISPLAY-GIFT-${age}`;cell.userData.archiveAge=age;cell.userData.collectionSide=SURROUND_SLOTS[age-1][2];this.cells.set(String(age),cell);this.board.add(cell);}
  for(const record of archives.future){const cell=new T.Group();cell.name='future-cell-'+record.id;this.futureCells.set(record.id,cell);this.root.add(cell);}
 }
 private ownMesh(g:T.BufferGeometry,m:T.Material,p:T.Object3D,pos:T.Vector3){this.geometry.add(g);this.materials.add(m);const o=new T.Mesh(g,m);o.position.copy(pos);p.add(o);return o;}
 private paper(color:string){const m=new T.MeshStandardMaterial({color,roughness:.93});this.materials.add(m);return m;}
 private text(text:string,width=768,height=112){
  const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;const c=canvas.getContext('2d')!;
  c.fillStyle='#f5ecde';c.fillRect(0,0,width,height);c.fillStyle='#4b392c';
  const multiline=text.includes('\n'),size=multiline?Math.min(height*.20,width*.15):height*.43;
  const family=getComputedStyle(document.documentElement).getPropertyValue('--font-sans').trim()||'system-ui,sans-serif';c.font=`${size}px ${family}`;c.textAlign='center';c.textBaseline='middle';
  const lines:string[]=[];for(const paragraph of text.split('\n')){const chars=Array.from(paragraph),count=Math.max(1,Math.ceil(c.measureText(paragraph).width/(width*.84))),length=Math.ceil(chars.length/count);for(let i=0;i<Math.max(1,chars.length);i+=Math.max(1,length))lines.push(chars.slice(i,i+length).join(''));}
  const lineHeight=size*1.4;for(let i=0;i<lines.length;i++)c.fillText(lines[i],width/2,height/2+(i-(lines.length-1)/2)*lineHeight);
  const t=new T.CanvasTexture(canvas);t.colorSpace=T.SRGBColorSpace;this.textures.add(t);const m=new T.MeshStandardMaterial({map:t,roughness:.94});this.materials.add(m);return m;
 }
 private disposeChildren(group:T.Group){group.traverse(o=>{if(o instanceof T.Mesh){this.geometry.delete(o.geometry);o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){this.materials.delete(m);for(const v of Object.values(m))if(v instanceof T.Texture){this.textures.delete(v);v.dispose();}m.dispose();}}});group.clear();}
 layout(_aspect:number,_z:number,mode:'table'|'collection'=this.mode,_width=390){
  this.mode=mode;if(this.laidOut){this.setAge(this.age,false);return;}this.laidOut=true;
  const sourceRoot=this.source.root;sourceRoot.updateMatrixWorld(true);
  const byMaterial=new Map<string,{parts:T.BufferGeometry[];original:T.MeshStandardMaterial}>();
  const invisible=new T.MeshBasicMaterial({visible:false});this.materials.add(invisible);
  for(let age=1;age<=24;age++){
   const group=sourceRoot.getObjectByName(`DISPLAY_GIFT_${String(age).padStart(2,'0')}`)!;
   group.position.set(0,0,0);group.rotation.set(0,0,0);group.scale.set(1,1,1);sourceRoot.updateMatrixWorld(true);
   const box=new T.Box3().setFromObject(group),size=box.getSize(new T.Vector3()),center=box.getCenter(new T.Vector3()),[x,z,side,extent,angle]=SURROUND_SLOTS[age-1],ratio=extent/Math.max(size.x,size.y,size.z);
   const cell=this.cells.get(String(age))!;cell.position.set(x*3.05,-.024,z*2.60);cell.rotation.y=angle;
   const normalize=new T.Matrix4().makeScale(ratio,ratio,ratio);normalize.setPosition(-center.x*ratio,-box.min.y*ratio,-center.z*ratio);
   cell.updateMatrixWorld(true);
   this.originals.push({position:cell.position.clone(),angle,scale:1,opacity:1});this.inverseHomes.push(cell.matrixWorld.clone().invert());
   group.traverse(o=>{
    if(!(o instanceof T.Mesh))return;
    const material=(Array.isArray(o.material)?o.material[0]:o.material) as T.MeshStandardMaterial,key=material.name;
    const local=new T.Matrix4().multiplyMatrices(normalize,o.matrixWorld),world=new T.Matrix4().multiplyMatrices(cell.matrixWorld,local);
    const proxy=new T.Mesh(o.geometry,invisible);proxy.matrixAutoUpdate=false;proxy.matrix.copy(local);proxy.userData.collectionSide=side;proxy.userData.archiveAge=age;cell.add(proxy);
    const g=o.geometry.clone();g.applyMatrix4(world);g.deleteAttribute('uv');if(!g.getAttribute('normal'))g.computeVertexNormals();const a=new Float32Array(g.getAttribute('position').count);a.fill(age);g.setAttribute('archiveAge',new T.BufferAttribute(a,1));
    if(!byMaterial.has(key))byMaterial.set(key,{parts:[],original:material});byMaterial.get(key)!.parts.push(g);
   });
  }
  for(const {parts,original}of byMaterial.values()){
   const geometry=mergeGeometries(parts);parts.forEach(p=>p.dispose());if(!geometry)throw new Error('Incompatible 3D birthday LOD');
   const material=new T.MeshStandardMaterial({color:original.color,roughness:original.roughness,metalness:original.metalness});
   material.transparent=true;material.onBeforeCompile=shader=>{shader.uniforms.archiveCount=this.uniforms.count;shader.uniforms.archivePrevious=this.uniforms.previous;shader.uniforms.archiveReveal=this.uniforms.reveal;shader.vertexShader='attribute float archiveAge; varying float vArchiveAge;\n'+shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvArchiveAge=archiveAge;');shader.fragmentShader='uniform float archiveCount; uniform float archivePrevious; uniform float archiveReveal; varying float vArchiveAge;\n'+shader.fragmentShader.replace('#include <alphatest_fragment>','if(vArchiveAge>archiveCount+.1)discard; if(vArchiveAge>archivePrevious+.1)diffuseColor.a*=archiveReveal;\n#include <alphatest_fragment>');};material.customProgramCacheKey=()=> 'birthday-surround-static-v7';
   const mesh=this.ownMesh(geometry,material,this.models,new T.Vector3());mesh.castShadow=false;mesh.receiveShadow=true;mesh.userData.nonInteractive=true;
   const depth=new T.MeshDepthMaterial({depthPacking:T.RGBADepthPacking});this.materials.add(depth);
   depth.onBeforeCompile=shader=>{shader.uniforms.archiveCount=this.uniforms.count;shader.vertexShader='attribute float archiveAge; varying float vArchiveAge;\n'+shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvArchiveAge=archiveAge;');shader.fragmentShader='uniform float archiveCount; varying float vArchiveAge;\n'+shader.fragmentShader.replace('#include <alphatest_fragment>','if(vArchiveAge>archiveCount+.1)discard;\n#include <alphatest_fragment>');};depth.customProgramCacheKey=()=> 'birthday-surround-depth-v7';mesh.customDepthMaterial=depth;
  }
  this.current=this.originals.map(p=>({...p,position:p.position.clone()}));
  this.originalBounds=[...this.cells.values()].map(cell=>new T.Box3().setFromObject(cell));
  this.localBounds=[...this.cells.values()].map(cell=>new T.Box3().setFromObject(cell).applyMatrix4(cell.matrixWorld.clone().invert()));
  // One shared contact atlas replaces six full miniature depth submissions.
  // Source LOD geometry, palette, fixed slots and picking proxies stay intact.
  const canvas=document.createElement('canvas');canvas.width=canvas.height=64;const c=canvas.getContext('2d')!,gradient=c.createRadialGradient(32,32,2,32,32,30);
  gradient.addColorStop(0,'rgba(78,54,36,.36)');gradient.addColorStop(.5,'rgba(78,54,36,.12)');gradient.addColorStop(1,'rgba(78,54,36,0)');c.fillStyle=gradient;c.fillRect(0,0,64,64);
  const map=new T.CanvasTexture(canvas);this.textures.add(map);const contact=new T.MeshBasicMaterial({map,transparent:true,depthWrite:false,opacity:.65,side:T.DoubleSide});contact.forceSinglePass=true;
  contact.onBeforeCompile=shader=>{shader.uniforms.archiveCount=this.uniforms.count;shader.uniforms.archivePrevious=this.uniforms.previous;shader.uniforms.archiveReveal=this.uniforms.reveal;shader.vertexShader='attribute float archiveAge;varying float vArchiveAge;\n'+shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvArchiveAge=archiveAge;');shader.fragmentShader='uniform float archiveCount;uniform float archivePrevious;uniform float archiveReveal;varying float vArchiveAge;\n'+shader.fragmentShader.replace('#include <alphatest_fragment>','if(vArchiveAge>archiveCount+.1)discard;if(vArchiveAge>archivePrevious+.1)diffuseColor.a*=archiveReveal;\n#include <alphatest_fragment>');};contact.customProgramCacheKey=()=> 'birthday-surround-contact-v1';
  const parts=SURROUND_SLOTS.map(([x,z,,extent],i)=>{const g=new T.PlaneGeometry(extent*1.18,extent*.92);g.rotateX(-Math.PI/2);g.translate(x*3.05,-.0235,z*2.60);g.setAttribute('archiveAge',new T.Float32BufferAttribute(new Float32Array(4).fill(i+1),1));return g;});
  const contacts=mergeGeometries(parts)!;parts.forEach(g=>g.dispose());const shadow=this.ownMesh(contacts,contact,this.models,new T.Vector3());shadow.name='Shared_memory_contacts';shadow.userData.nonInteractive=true;
  const card=this.ownMesh(new T.BoxGeometry(.80,.28,.014),this.text('2026 · 第一次陪你过生日'),this.replay,new T.Vector3());card.rotation.x=-Math.PI/2;this.replay.position.set(2.6,-.012,1.98);this.replay.rotation.y=-.12;
  let i=0;for(const record of this.archives.future){const cell=this.futureCells.get(record.id)!;cell.position.set(3.6+(i%2)*.9,.10,-1.8+Math.floor(i/2)*.8);this.ownMesh(new T.BoxGeometry(.72,.65,.025),this.text(`${record.givenYear}\n${record.title}`,384,256),cell,new T.Vector3());cell.userData.available=birthdayRecordIsAvailable(record);i++;}
  this.models.traverse(o=>{if(!(o instanceof T.Mesh))return;o.frustumCulled=false;for(const material of [o.material,o.customDepthMaterial].flat()){if(!material)continue;const compile=material.onBeforeCompile.bind(material),key=material.customProgramCacheKey();material.onBeforeCompile=(shader,renderer)=>{compile(shader,renderer);shader.uniforms.astraTransforms=this.composition.matrices;shader.uniforms.astraOpacity=this.composition.opacity;shader.vertexShader='uniform mat4 astraTransforms[24];uniform float astraOpacity[24];varying float vAstraOpacity;\n'+shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\ntransformed=(astraTransforms[int(archiveAge)-1]*vec4(transformed,1.0)).xyz;vAstraOpacity=astraOpacity[int(archiveAge)-1];').replace('#include <beginnormal_vertex>','#include <beginnormal_vertex>\nobjectNormal=mat3(astraTransforms[int(archiveAge)-1])*objectNormal;');shader.fragmentShader='varying float vAstraOpacity;\n'+shader.fragmentShader.replace('#include <alphatest_fragment>','if(vAstraOpacity<.001)discard;diffuseColor.a*=vAstraOpacity;\n#include <alphatest_fragment>');};material.customProgramCacheKey=()=>key+'-astra-v1';}});
  this.setAge(this.age,false);this.setScene(this.age);
 }

 arrangement(layout:AstraLayout,width:number,height:number){const font=collectionFontScale(),key=JSON.stringify([layout,width,height,font]),cached=this.arrangements.get(key);if(cached)return cached;const poses=memoryArrangement(layout,width,height,this.originals,SURROUND_SLOTS.map(s=>s[3]),this.localBounds,font);this.arrangements.set(key,poses);if(this.arrangements.size>40)this.arrangements.delete(this.arrangements.keys().next().value!);return poses;}
 snapshot(){return this.current.map(p=>({...p,position:p.position.clone()}));}
 boundsFor(age:number,poses:MemoryPose[]){const p=poses[age-1],home=this.originals[age-1];if(p.scale===1&&p.angle===home.angle&&p.position.equals(home.position))return this.originalBounds[age-1].clone();const matrix=new T.Matrix4().compose(p.position,new T.Quaternion().setFromAxisAngle(new T.Vector3(0,1,0),p.angle),new T.Vector3().setScalar(p.scale));return this.localBounds[age-1].clone().applyMatrix4(matrix);}
 present(from:MemoryPose[],to:MemoryPose[],t:number){
  for(let i=0;i<24;i++){const a=from[i],b=to[i],p=this.current[i],cell=this.cells.get(String(i+1))!;p.position.lerpVectors(a.position,b.position,t);p.angle=t===1?b.angle:a.angle+Math.atan2(Math.sin(b.angle-a.angle),Math.cos(b.angle-a.angle))*t;p.scale=T.MathUtils.lerp(a.scale,b.scale,t);p.opacity=T.MathUtils.lerp(a.opacity,b.opacity,t);cell.position.copy(p.position);cell.rotation.y=p.angle;cell.scale.setScalar(p.scale);cell.updateMatrixWorld(true);this.composition.matrices.value[i].multiplyMatrices(cell.matrixWorld,this.inverseHomes[i]);this.composition.opacity.value[i]=p.opacity;cell.visible=p.opacity>.001&&(this.mode==='collection'||i<this.age);}
 }
 /** Only entering/exiting members shift briefly; shared ages keep their own poses. */
 presentGroup(from:MemoryPose[],to:MemoryPose[],t:number){
  if(t===0){this.present(from,from,1);return;}if(t===1){this.present(to,to,1);return;}
  const a=from.map(p=>({...p,position:p.position.clone()})),b=to.map(p=>({...p,position:p.position.clone()}));
  for(let i=0;i<24;i++){
   if(a[i].opacity===0&&b[i].opacity>0)a[i]={...b[i],position:b[i].position.clone().add(new T.Vector3(.18,0,0)),opacity:0};
   else if(a[i].opacity>0&&b[i].opacity===0)b[i]={...a[i],position:a[i].position.clone().add(new T.Vector3(-.18,0,0)),opacity:0};
  }
  this.present(a,b,t);
 }
 setAge(age:number,animate=true){this.age=age;const count=this.mode==='collection'?24:age;this.uniforms.previous.value=animate?this.uniforms.count.value:count;this.uniforms.count.value=count;this.uniforms.reveal.value=animate?0:1;for(const [id,g]of this.cells)g.visible=Number(id)<=count&&(this.composition.opacity.value[Number(id)-1]>.001);}
 hideInitial(){if(this.mode==='table'){this.uniforms.count.value=0;this.uniforms.previous.value=0;for(const g of this.cells.values())g.visible=false;}}
 reveal(ratio:number){this.uniforms.reveal.value=ratio;}
 setMode(mode:'table'|'collection'){this.mode=mode;this.setAge(this.age,false);this.poster.visible=mode==='table'&&!!birthdayRepository.getScene(this.age).posterId;}
 setScene(age:number){
  this.age=age;const s=birthdayRepository.getScene(age);this.fadeYear(age,age,0);
  if(this.posterAge===age)return;this.posterAge=age;if(this.wallMap){this.wallMap.dispose();this.textures.delete(this.wallMap);}this.wallMap=birthdayTextile(age,true);this.textures.add(this.wallMap);this.interior.root.traverse(o=>{if(o instanceof T.Mesh)(o.material as T.MeshStandardMaterial).map=o.geometry.getAttribute('uv')?this.wallMap:null;});this.disposeChildren(this.poster);this.disposeChildren(this.decoration);this.poster.visible=this.mode==='table'&&!!s.posterId;
  if(s.posterId){const width=.92,height=1.25;this.ownMesh(new T.BoxGeometry(width,height,.016),this.paper('#d7c4a9'),this.poster,new T.Vector3());const face=this.ownMesh(new T.PlaneGeometry(width-.08,height-.08),this.text(`${s.posterYear}\n${s.posterTitle}`,512,680),this.poster,new T.Vector3(0,0,.013));face.name=s.posterId+'-original-paper-tag';this.poster.position.set(-3.1,1.1,this.wallZ+.02);this.poster.rotation.y=.18;}
  this.decorate(age);
 }
 private decorate(age:number){
  const base=new T.Vector3(3.2,.65,this.wallZ+.058),cream=this.paper('#f0e4cf'),sage=this.paper('#b8c5ac'),rose=this.paper('#d8b8b4'),blue=this.paper('#bfd2d7'),gold=this.paper('#d3bd91');
  const sheet=(w:number,h:number,x:number,y:number,mat:T.Material,z=0,angle=0)=>{const o=this.ownMesh(new T.BoxGeometry(w,h,.010),mat,this.decoration,base.clone().add(new T.Vector3(x,y,z)));o.rotation.z=angle;return o;};
  const shape=(points:number[][],mat:T.Material,x=0,y=0,z=0,angle=0)=>{const s=new T.Shape();points.forEach((p,i)=>i?s.lineTo(p[0],p[1]):s.moveTo(p[0],p[1]));s.closePath();const o=this.ownMesh(new T.ExtrudeGeometry(s,{depth:.010,bevelEnabled:true,bevelSize:.002,bevelThickness:.002,bevelSegments:1}),mat,this.decoration,base.clone().add(new T.Vector3(x,y,z)));o.rotation.z=angle;return o;};
  const ellipse=(rx:number,ry:number,mat:T.Material,x=0,y=0,z=0,angle=0)=>shape(Array.from({length:24},(_,i)=>[Math.cos(i*Math.PI/12)*rx,Math.sin(i*Math.PI/12)*ry]),mat,x,y,z,angle);
  const leaf=(mat:T.Material,x=0,y=0,angle=0)=>shape(Array.from({length:25},(_,i)=>{const a=i*Math.PI/12;return[Math.sin(a)*.057,Math.cos(a)*.12];}),mat,x,y,0,angle);
  const flower=(mat:T.Material,x=0,y=0,r=.06)=>{for(let i=0;i<5;i++){const a=i*Math.PI*2/5;ellipse(r,r*.44,mat,x+Math.cos(a)*r*.7,y+Math.sin(a)*r*.7,.004,a);}ellipse(.024,.024,gold,x,y,.018);};
  const bow=()=>{shape([[-.01,0],[-.16,.09],[-.19,.02],[-.16,-.08]],cream);shape([[.01,0],[.16,.09],[.19,.02],[.16,-.08]],cream);sheet(.032,.15,-.02,-.10,cream,0,.3);sheet(.032,.13,.035,-.10,cream,0,-.2);ellipse(.027,.034,cream,0,0,.02);};
  const tag=(text:string)=>sheet(.34,.18,0,.01,this.text(text,256,128),.016,-.06);
  if(age===1)tag('2003');
  else if(age===2){for(let i=0;i<3;i++)flower(cream,(i-1)*.18,(i%2)*.18,.050);}
  else if(age===3)bow();
  else if(age===4){sheet(.30,.23,-.05,0,gold,0,.09);sheet(.27,.21,.06,.06,blue,.017,-.12);}
  else if(age===5){shape([[-.21,0],[-.22,.04],[-.18,.10],[-.12,.10],[-.11,.16],[-.03,.18],[.04,.14],[.10,.14],[.16,.10],[.21,.10],[.23,.03],[.19,0]],blue);}
  else if(age===6){leaf(sage,-.09,.06,-.4);leaf(sage,.11,.13,.4);}
  else if(age===7){shape([[-.045,.19],[.045,.19],[.045,-.16],[0,-.10],[-.045,-.16]],cream);}
  else if(age===8){for(let i=0;i<3;i++)ellipse(.07,.13,rose,(i-1)*.12,(i%2)*.12,0,(i-1)*.5);}
  else if(age===9)leaf(sage,0,.10,-.45);
  else if(age===10){for(let i=0;i<3;i++)shape([[0,.10],[.065,0],[0,-.10],[-.065,0]],i%2?blue:rose,(i-1)*.16,(i%2)*.18);}
  else if(age===11){sheet(.29,.50,0,.12,this.paper('#c5ae89'));sheet(.17,.10,0,.22,cream,.018,-.08);}
  else if(age===12){flower(rose,-.11,.10,.07);flower(rose,.09,.22,.05);leaf(sage,.10,.04,-.6);}
  else if(age===13)sheet(.42,.006,0,.17,this.paper('#bdb1c3'));
  else if(age===14){sheet(.20,.025,0,.20,cream);for(let i=0;i<7;i++)sheet(.009,.17+(i%2)*.03,(i-3)*.026,.10,cream);}
  else if(age===15){for(let i=0;i<3;i++)ellipse(.053,.053,gold,(i-1)*.15,(i%2)*.16);}
  else if(age===16||age===17||age===20||age===22){sheet(.32,.015,0,.20,cream);}
  else if(age===18)flower(rose,0,.12,.085);
  else if(age===19){tag('');bow();}
  else if(age===21){sheet(.036,.45,0,.12,cream);for(let i=0;i<4;i++)sheet(.006,.10,(i-1.5)*.015,-.15,cream);}
  else if(age===23)leaf(sage,0,.12,-.25);
  const used=new Set<T.Material>();this.decoration.traverse(o=>{if(o instanceof T.Mesh)for(const m of Array.isArray(o.material)?o.material:[o.material])used.add(m);});for(const m of [cream,sage,rose,blue,gold])if(!used.has(m)){this.materials.delete(m);m.dispose();}
  this.decoration.name='year-'+age+'-authored-paper-details';
 }

 fadeYear(from:number,to:number,t:number){const color=new T.Color(wallColors[from-1]).lerp(new T.Color(wallColors[to-1]),t).lerp(new T.Color('#fff8ec'),.80);this.interior.root.traverse(o=>{if(o instanceof T.Mesh&&o.material instanceof T.MeshStandardMaterial){o.material.color.copy(color);o.material.emissiveIntensity=0;}});}
 setEntryClipping(planes:T.Plane[]){for(const root of [this.board,this.poster,this.decoration,this.replay])root.traverse(o=>{if(o instanceof T.Mesh)for(const m of Array.isArray(o.material)?o.material:[o.material]){m.clippingPlanes=planes;m.needsUpdate=true;}});}
 setRoomProgress(_progress:number){this.interior.root.scale.setScalar(BIRTHDAY_ROOM.scale);this.interior.root.position.set(0,BOX.bottom,BIRTHDAY_ROOM.centerZ);}
 get environmentSurface(){return this.interior.root;}
 collectionTarget(latest=true){if(latest&&this.archives.latest)return this.futureCells.get(this.archives.latest.id)!.position.clone();return new T.Vector3(0,.2,-1.25);}
 posterTarget(){return this.poster.position.clone();}
 cameraWidth(){return 5.5;}
 limits(){return {minX:-5,maxX:5,minY:-4,maxY:4};}
 visibleFuture(camera:T.Camera){const f=new T.Frustum().setFromProjectionMatrix(new T.Matrix4().multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse));for(const g of this.futureCells.values())g.visible=f.intersectsBox(new T.Box3().setFromObject(g));}
 stats(){return {source:'DISPLAY-COLLECTION',mergedDraws:this.models.children.length,triangles:this.models.children.reduce((sum,o)=>sum+(o instanceof T.Mesh?(o.geometry.index?.count??o.geometry.getAttribute('position').count)/3:0),0),mask:this.uniforms.count.value,layout:'surround',runtime:this.current.map((p,i)=>({age:i+1,position:p.position.toArray(),scale:p.scale,opacity:p.opacity,matrix:this.composition.matrices.value[i].toArray()})),sides:{left:6,right:6,back:8,front:4},displayEmission:false,positions:SURROUND_SLOTS.map(([x,z,side])=>({x:x*3.05,z:z*2.6,side}))};}
 dispose(){this.source.dispose();this.interior.dispose();this.geometry.forEach(g=>g.dispose());this.materials.forEach(m=>m.dispose());this.textures.forEach(t=>t.dispose());this.root.removeFromParent();}
}
