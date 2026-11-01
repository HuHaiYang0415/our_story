import * as T from 'three';
import {material,mesh,starShape} from './models';
import {birthdayTextile,platformGeometry,platformColors,foundationRecipes} from './yearMaterials';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

/** Authored material maps, created locally; no photographs or downloaded textures. */
function weaveMap(albedo=false) {
  const canvas=document.createElement('canvas');canvas.width=canvas.height=256;
  const context=canvas.getContext('2d')!,image=context.createImageData(256,256);
  for(let y=0;y<256;y++)for(let x=0;x<256;x++){
    const warp=Math.cos(x*Math.PI/2),weft=Math.cos(y*Math.PI/2),over=((Math.floor(x/4)+Math.floor(y/4))%2)?warp:weft;
    const v=albedo?244+over*8+Math.sin(x*1.71+y*3.31):140+over*25+Math.sin(x*1.71+y*3.31)*4;
    const i=(y*256+x)*4;image.data[i]=image.data[i+1]=image.data[i+2]=v;image.data[i+3]=255;
  }
  context.putImageData(image,0,0);const texture=new T.CanvasTexture(canvas);
  texture.wrapS=texture.wrapT=T.RepeatWrapping;texture.repeat.set(24,24);texture.anisotropy=4;if(albedo)texture.colorSpace=T.SRGBColorSpace;return texture;
}
export function woodMaterial(color:string) {
  const canvas=document.createElement('canvas');canvas.width=256;canvas.height=128;
  const context=canvas.getContext('2d')!,image=context.createImageData(256,128),base=new T.Color(color).convertLinearToSRGB();
  for(let y=0;y<128;y++)for(let x=0;x<256;x++){
    const grain=Math.sin(y*.46+Math.sin(x*.04)*1.4)*.010+Math.sin(y*1.9+x*.02)*.003;
    const i=(y*256+x)*4;image.data[i]=Math.min(255,(base.r+grain)*255);image.data[i+1]=Math.min(255,(base.g+grain)*255);image.data[i+2]=Math.min(255,(base.b+grain)*255);image.data[i+3]=255;
  }
  context.putImageData(image,0,0);const map=new T.CanvasTexture(canvas);map.colorSpace=T.SRGBColorSpace;
  const surface=material('#ffffff',.82);surface.map=map;return surface;
}
function cloth(color:string,repeat=1) {
  const surface=material(color,.94);surface.emissiveIntensity=0;return surface;
}
export function contactShadow(parent:T.Group,width:number,depth:number,opacity=.13) {
  const canvas=document.createElement('canvas');canvas.width=canvas.height=64;const context=canvas.getContext('2d')!;
  const gradient=context.createRadialGradient(32,32,3,32,32,31);gradient.addColorStop(0,'rgba(78,59,41,.55)');gradient.addColorStop(.5,'rgba(78,59,41,.20)');gradient.addColorStop(1,'rgba(78,59,41,0)');context.fillStyle=gradient;context.fillRect(0,0,64,64);
  const shadow=mesh(new T.PlaneGeometry(width,depth),new T.MeshBasicMaterial({map:new T.CanvasTexture(canvas),transparent:true,opacity,depthWrite:false}),parent,[0,.007,0]);
  shadow.rotation.x=-Math.PI/2;shadow.castShadow=false;shadow.receiveShadow=false;shadow.userData.nonInteractive=true;shadow.userData.baseOpacity=opacity;return shadow;
}
function strip(points:T.Vector3[],width:number,surface:T.Material,parent:T.Object3D) {
  const curve=new T.CatmullRomCurve3(points),vertices:number[]=[],uv:number[]=[],indices:number[]=[];
  for(let i=0;i<=64;i++){const t=i/64,p=curve.getPoint(t),normal=new T.Vector3().crossVectors(curve.getTangent(t),new T.Vector3(0,1,0)).normalize();
    for(const sign of [-1,1]){const v=p.clone().addScaledVector(normal,sign*width/2);vertices.push(v.x,v.y,v.z);uv.push(t,(sign+1)/2);}
    if(i<64){const a=i*2;indices.push(a,a+1,a+2,a+1,a+3,a+2);}}
  const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(vertices,3));geometry.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geometry.setIndex(indices);geometry.computeVertexNormals();surface.side=T.DoubleSide;
  return mesh(geometry,surface,parent);
}
function ribbon(parent:T.Group) {
  const root=new T.Group();parent.add(root);const satin=material('#dfb89f',.72);
  for(const side of [-1,1])strip([new T.Vector3(0,.02,0),new T.Vector3(side*.32,.09,-.15),new T.Vector3(side*.45,.02,.08),new T.Vector3(side*.1,.045,.05),new T.Vector3(0,.02,0)],.09,satin,root);
  strip([new T.Vector3(0,.02,0),new T.Vector3(-.1,.025,.28),new T.Vector3(-.3,.018,.48)],.10,satin,root);
  strip([new T.Vector3(0,.02,0),new T.Vector3(.13,.03,.26),new T.Vector3(.31,.018,.34)],.10,satin,root);
  const knot=mesh(new T.SphereGeometry(.09,20,12),satin,root,[0,.05,0]);knot.scale.set(.8,.35,.6);return root;
}
function flower(parent:T.Object3D,color:string,size:number,y:number,paper=false) {
  const root=new T.Group();parent.add(root);const petals=material(color,paper?.97:.8);
  for(let i=0;i<5;i++){
    const a=i/5*Math.PI*2,p=mesh(new T.SphereGeometry(size,18,12),petals,root,[Math.cos(a)*size*.8,y,Math.sin(a)*size*.8]);
    p.scale.set(1,.22,.60);p.rotation.y=-a;p.rotation.z=.08;
  }
  const center=mesh(new T.SphereGeometry(size*.4,16,10),material('#e0bd78'),root,[0,y+.022,0]);center.scale.y=.4;return root;
}
function foldedGeometry(geometry:T.BufferGeometry) {
  const positions=geometry.getAttribute('position');
  for(let i=0;i<positions.count;i++){
    const x=positions.getX(i),y=positions.getY(i),fold=.20*Math.exp(-Math.pow((x+1.48+y*.08)/.19,2))+.16*Math.exp(-Math.pow((x-1.30-y*.11)/.19,2));
    positions.setZ(i,fold+.014*Math.sin(x*3.2+y*1.6));
  }
  geometry.computeVertexNormals();return geometry;
}
function napkinGeometry(shape:string){
  const geometry=new T.PlaneGeometry(3.2,2.7,40,32),p=geometry.getAttribute('position');
  for(let i=0;i<p.count;i++){
    const u=p.getX(i)/1.6,v=p.getY(i)/1.35;
    if(shape==='oval'){p.setX(i,u*Math.sqrt(1-v*v/2)*1.55);p.setY(i,v*Math.sqrt(1-u*u/2)*1.3);}
    else if(shape==='irregular'){p.setX(i,p.getX(i)*(1+.023*Math.sin(v*5.4))-.15);p.setY(i,p.getY(i)*(1+.025*Math.cos(u*4.1)));}
    else if(shape==='long'){p.setX(i,p.getX(i)*1.15);p.setY(i,p.getY(i)*.76);}
    else if(shape==='diamond'){const x=p.getX(i),y=p.getY(i);p.setX(i,(x-y)*.7071);p.setY(i,(x+y)*.7071);}
    const x=p.getX(i),y=p.getY(i);
    p.setZ(i,.008+.10*Math.exp(-Math.pow((u+.79+v*.1)/.13,2))+.07*Math.exp(-Math.pow((u-.83-v*.08)/.10,2))+.008*Math.sin(x*3.1+y*2));
  }
  geometry.computeVertexNormals();return geometry;
}
export function makeSurface() {
  const root=new T.Group();root.name='birthday-tablecloth';root.rotation.y=-.07;
  const columns=64,rows=48,stride=columns+1;
  const grid=new T.PlaneGeometry(2,2,columns,rows),source=grid.getAttribute('position'),sourceUV=grid.getAttribute('uv'),original=Array.from(source.array),uv=Array.from(sourceUV.array),indices=Array.from(grid.index!.array),edge:number[]=[];
  for(let x=0;x<=columns;x++)edge.push(x);for(let y=1;y<=rows;y++)edge.push(y*stride+columns);for(let x=columns-1;x>=0;x--)edge.push(rows*stride+x);for(let y=rows-1;y>0;y--)edge.push(y*stride);
  const topCount=source.count;
  for(let i=0;i<edge.length;i++){const id=edge[i];original.push(original[id*3],original[id*3+1],original[id*3+2]);uv.push(uv[id*2],uv[id*2+1]);const n=(i+1)%edge.length;indices.push(edge[i],topCount+i,edge[n],edge[n],topCount+i,topCount+n);}
  const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(original,3));geometry.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geometry.setIndex(indices);grid.dispose();const positions=geometry.getAttribute('position');
  const surface=mesh(geometry,cloth('#fff0d6'),root,[0,-.024,-.8]);
  surface.rotation.x=-Math.PI/2;surface.castShadow=false;surface.receiveShadow=true;
  const wood=mesh(new RoundedBoxGeometry(2,.24,2,2,.08),woodMaterial('#ffffff'),root,[0,-.144,-.8]);
  wood.castShadow=true;wood.receiveShadow=true;
  const woodPositions=wood.geometry.getAttribute('position'),woodOriginal=Array.from(woodPositions.array);
  let panorama=0,clothBase:Float32Array|undefined,woodBase:Float32Array|undefined;
  const setPanoramaCoverage=(amount:number)=>{const prior=panorama;panorama=amount;if(!clothBase||!woodBase||amount===0&&prior===0)return;const extend=(v:number)=>v+Math.sign(v)*Math.max(0,Math.abs(v)-3.6)*2*amount;
    for(let i=0;i<positions.count;i++)positions.setXYZ(i,extend(clothBase[i*3]),extend(clothBase[i*3+1]),clothBase[i*3+2]);
    for(let i=0;i<woodPositions.count;i++)woodPositions.setXYZ(i,extend(woodBase[i*3]),woodBase[i*3+1],extend(woodBase[i*3+2]));
    positions.needsUpdate=true;woodPositions.needsUpdate=true;geometry.computeVertexNormals();geometry.computeBoundingSphere();wood.geometry.computeVertexNormals();wood.geometry.computeBoundingSphere();
  };
  const maps=new Map<number,T.Texture>();
  const uniforms={nextMap:{value:null as T.Texture|null},mix:{value:0}};
  const m=surface.material as T.MeshStandardMaterial;
  m.bumpMap=weaveMap();m.bumpScale=.003;
  const contactCanvas=document.createElement('canvas');contactCanvas.width=contactCanvas.height=64;
  const context=contactCanvas.getContext('2d')!,contactGradient=context.createRadialGradient(32,32,4,32,32,31);
  contactGradient.addColorStop(0,'rgba(77,68,55,.65)');contactGradient.addColorStop(.65,'rgba(77,68,55,.30)');contactGradient.addColorStop(1,'rgba(77,68,55,0)');
  context.fillStyle=contactGradient;context.fillRect(0,0,64,64);const contactMap=new T.CanvasTexture(contactCanvas),contactGeometry=new T.PlaneGeometry(1,1);contactGeometry.rotateX(-Math.PI/2);
  const contacts=Array.from({length:4},()=>{const o=mesh(contactGeometry,new T.MeshBasicMaterial({map:contactMap,transparent:true,opacity:0,depthWrite:false}),root);o.name='Soft_hero_contact';o.castShadow=o.receiveShadow=false;o.userData.nonInteractive=true;o.rotation.y=.07;return o;});
  const setContacts=(points:Array<{x:number;z:number;width:number;depth:number;opacity:number}>)=>{
    contacts.forEach((o,i)=>{const p=points[i];o.visible=!!p&&p.opacity>.002;if(!p)return;o.position.set(Math.cos(.07)*p.x+Math.sin(.07)*p.z,-.020,-Math.sin(.07)*p.x+Math.cos(.07)*p.z);o.scale.set(p.width,1,p.depth);(o.material as T.MeshBasicMaterial).opacity=.34*p.opacity;});
  };
  let supports:Array<{x:number;z:number;radius:number}>=[];
  let supportKey='';
  const shapes=new Map<string,{positions:Float32Array;normals:Float32Array}>();
  const setSupports=(points:typeof supports)=>{supports=points;supportKey=points.map(p=>[p.x,p.z,p.radius].map(v=>v.toFixed(3)).join(',')).join(';');};
  const smooth=(n:number)=>{const t=T.MathUtils.clamp(n,0,1);return t*t*(3-2*t);};
  m.onBeforeCompile=shader=>{shader.uniforms.birthdayNextMap=uniforms.nextMap;shader.uniforms.birthdayTextileMix=uniforms.mix;shader.fragmentShader='uniform sampler2D birthdayNextMap;uniform float birthdayTextileMix;\n'+shader.fragmentShader.replace('#include <map_fragment>','#ifdef USE_MAP\n diffuseColor *= mix(texture2D(map,vMapUv),texture2D(birthdayNextMap,vMapUv),birthdayTextileMix);\n#endif');};
  m.customProgramCacheKey=()=> 'birthday-foundation-textile-crossfade-v1';
  const setYear=(from:number,to:number,progress:number)=>{
    for(const age of [from,to])if(!maps.has(age))maps.set(age,birthdayTextile(age));
    if(!m.map){m.map=maps.get(from)!;m.needsUpdate=true;}else m.map=maps.get(from)!;
    uniforms.nextMap.value=maps.get(to)!;uniforms.mix.value=progress;
    const a=foundationRecipes[from-1],b=foundationRecipes[to-1],lerp=(x:number,y:number)=>T.MathUtils.lerp(x,y,progress),k=lerp(a.round,b.round),power=lerp(a.round===.50?2:8,b.round===.50?2:8),width=lerp(a.width,b.width),depth=lerp(a.depth,b.depth),thickness=lerp(a.thickness,b.thickness);
    // Build each bounded endpoint once, using the union of both ages' support
    // islands. Animation only interpolates positions/normals, never intersects
    // meshes or recomputes a support field per frame. Six cached endpoints max.
    const shapeFor=(age:number)=>{
      const key=age+':'+supportKey,existing=shapes.get(key);if(existing)return existing;
      const recipe=foundationRecipes[age-1],power=recipe.round===.50?2:8;
      for(let i=0;i<positions.count;i++){
        const u=original[i*3],v=original[i*3+1],boundary=Math.max(Math.abs(u),Math.abs(v));
        const x=u*(recipe.width+.26)/2*Math.sqrt(1-recipe.round*Math.pow(Math.abs(v),power));
        const y=v*(recipe.depth+.26)/2*Math.sqrt(1-recipe.round*Math.pow(Math.abs(u),power));
        const wx=Math.cos(-.07)*x+Math.sin(-.07)*(-y-.8),wz=-Math.sin(-.07)*x+Math.cos(-.07)*(-y-.8);
        let free=1;for(const p of supports)free*=smooth((Math.hypot(wx-p.x,wz-p.z)-p.radius)/.50);
        const front=.32*Math.exp(-Math.pow((wz-3.05+.16*wx)/.86,2));
        const back=.48*Math.exp(-Math.pow((wz+3.35-.10*wx)/.94,2));
        const drop=-(recipe.thickness*.65+.035)*Math.pow(Math.max(0,(boundary-.87)/.13),2);
        const hem=.045*Math.exp(-Math.pow((u+.84-v*.07)/.20,2))+.035*Math.exp(-Math.pow((u-.86-v*.09)/.21,2));
        positions.setXYZ(i,x,y,drop+hem*Math.pow(boundary,5)+(front+back)*free*smooth((1-boundary)/.10)-(i>=topCount?.034:0));
      }
      geometry.computeVertexNormals();
      const result={positions:new Float32Array(positions.array),normals:new Float32Array(geometry.getAttribute('normal').array)};
      shapes.set(key,result);if(shapes.size>6)shapes.delete(shapes.keys().next().value!);return result;
    };
    const start=shapeFor(from),end=shapeFor(to),normals=geometry.getAttribute('normal');
    for(let i=0;i<positions.array.length;i++){positions.array[i]=lerp(start.positions[i],end.positions[i]);normals.array[i]=lerp(start.normals[i],end.normals[i]);}
    positions.needsUpdate=true;normals.needsUpdate=true;geometry.computeBoundingSphere();
    for(let i=0;i<woodPositions.count;i++){const u=woodOriginal[i*3],y=woodOriginal[i*3+1],v=woodOriginal[i*3+2];woodPositions.setXYZ(i,u*width/2*Math.sqrt(1-k*Math.pow(Math.abs(v),power)),y*thickness/.24,v*depth/2*Math.sqrt(1-k*Math.pow(Math.abs(u),power)));}wood.position.y=-.065-thickness/2;woodPositions.needsUpdate=true;wood.geometry.computeVertexNormals();wood.geometry.computeBoundingSphere();
    (wood.material as T.MeshStandardMaterial).color.copy(new T.Color(platformColors[from-1]).lerp(new T.Color(platformColors[to-1]),progress)).lerp(new T.Color('#f3e6d7'),.38);
    (wood.material as T.MeshStandardMaterial).roughness=lerp(a.finish==='matte-ceramic'?.96:.82,b.finish==='matte-ceramic'?.96:.82);
    clothBase=new Float32Array(positions.array);woodBase=new Float32Array(woodPositions.array);setPanoramaCoverage(panorama);
    root.userData.foundationRecipe={from:a,to:b,progress,clothThickness:.034};
    for(const [id,t]of maps)if(id!==from&&id!==to){t.dispose();maps.delete(id);}
  };
  const disposeYear=()=>{maps.forEach(t=>t.dispose());shapes.clear();};
  return {root,surface,setYear,setSupports,setContacts,setPanoramaCoverage,disposeYear};
}
