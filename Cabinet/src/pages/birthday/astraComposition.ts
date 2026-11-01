import * as T from 'three';
import {COLLECTION_GROUPS,boxPoints} from './cameraPlan';
import type {CameraRegion,CameraPose} from './cameraPlan';

export type AstraLayout='original'|'hero'|{groupIndex:number}|{focusAge:number};
export type MemoryPose={position:T.Vector3;angle:number;scale:number;opacity:number};
export const collectionFontScale=()=>Math.max(1,parseFloat(getComputedStyle(document.documentElement).fontSize)/16);
export const enlargedCollection=(font:number)=>font>1.25;

/** A fixed interior camera for large text. Each model is fitted into its own
 * screen region above a full-size label, using its real rotated local bounds. */
export function readingGroupPose(width:number,height:number):CameraPose{
  const distance=7,pitch=55*Math.PI/180,worldWidth=width/height>1.25?6.8:3.8;
  return {position:new T.Vector3(0,Math.sin(pitch)*distance,Math.cos(pitch)*distance),target:new T.Vector3(),zoom:2*Math.tan(21*Math.PI/180)*distance*(width/height)/worldWidth};
}
function fitReadingCells(poses:MemoryPose[],ages:readonly number[],bounds:T.Box3[],width:number,height:number,font:number){
  const wide=width/height>1.25,columns=wide?4:2,rows=wide?1:2,top=Math.max(80,height*.18),bottom=Math.min(height-88,height*.82),cellWidth=(width-32)/columns,rowHeight=(bottom-top)/rows,labelHeight=Math.max(44,Math.ceil(13*font*1.4*(wide?1:2))+6),pose=readingGroupPose(width,height),camera=new T.PerspectiveCamera(42,width/height,.05,180);
  camera.position.copy(pose.position);camera.zoom=pose.zoom;camera.lookAt(pose.target);camera.updateProjectionMatrix();camera.updateMatrixWorld();const ray=new T.Raycaster();
  ages.forEach((age,i)=>{
    const p=poses[age-1],maxWidth=cellWidth-24,maxHeight=Math.max(44,rowHeight-labelHeight-28),cx=16+(i%columns+.5)*cellWidth,cy=top+Math.floor(i/columns)*rowHeight+maxHeight/2+4;
    const quaternion=new T.Quaternion().setFromAxisAngle(new T.Vector3(0,1,0),p.angle);
    // The solve is bounded and runs only when dimensions/font/group change.
    for(let pass=0;pass<4;pass++){
      const matrix=new T.Matrix4().compose(p.position,quaternion,new T.Vector3().setScalar(p.scale)),points=boxPoints(bounds[age-1]).map(v=>v.applyMatrix4(matrix)),projected=points.map(v=>v.clone().project(camera)),left=(Math.min(...projected.map(v=>v.x))+1)*width/2,right=(Math.max(...projected.map(v=>v.x))+1)*width/2,up=(1-Math.max(...projected.map(v=>v.y)))*height/2,down=(1-Math.min(...projected.map(v=>v.y)))*height/2;
      p.scale*=Math.min(maxWidth/(right-left),maxHeight/(down-up))*.98;
      const centerY=(bounds[age-1].min.y+bounds[age-1].max.y)/2*p.scale-.024;
      ray.setFromCamera(new T.Vector2(cx/width*2-1,1-cy/height*2),camera);const center=ray.ray.intersectPlane(new T.Plane(new T.Vector3(0,1,0),-centerY),new T.Vector3())!;
      p.position.set(center.x,-.024,center.z);
    }
  });
}

/** View arrangements only. Archive slots and all source geometry stay intact. */
export function memoryArrangement(layout:AstraLayout,width:number,height:number,original:MemoryPose[],extents:number[],bounds:T.Box3[],font=1):MemoryPose[]{
  const poses=original.map(p=>({...p,position:p.position.clone()}));
  if(layout==='original')return poses;
  poses.forEach(p=>p.opacity=0);const wide=width/height>1.25;
  if(layout==='hero'){
    const memories=wide?[[6,-3.0,-.25],[1,-2.9,-1.1],[13,3.0,-.2],[2,2.9,-1.1]]:[[6,-1.55,-.30],[1,-1.48,-1.10],[13,1.5,-.35],[2,1.48,-1.10]];
    memories.forEach(([age,x,z])=>{const p=poses[age-1];p.position.set(x,-.024,z);p.scale=(wide?.38:.30)/extents[age-1];p.opacity=1;});
  }else if('focusAge' in layout){
    const p=poses[layout.focusAge-1];p.position.set(0,-.024,0);p.scale=.96/extents[layout.focusAge-1];p.opacity=1;
  }else{
    const ages=COLLECTION_GROUPS[layout.groupIndex],locations=wide?[[-2.25,-.22],[-.76,.18],[.76,.06],[2.25,-.28]]:[[-.72,-1.02],[.76,-.78],[-.78,1.0],[.72,.94]];
    ages.forEach((age,i)=>{const p=poses[age-1];p.position.set(locations[i][0],-.024,locations[i][1]);p.scale=(wide?.96:.92)/extents[age-1];p.opacity=1;});
    if(enlargedCollection(font))fitReadingCells(poses,ages,bounds,width,height,font);
  }
  return poses;
}

export function astraRecipe(kind:'hero'|'group'|'focus',width:number,height:number):{pitch:number;yaw:number;region:CameraRegion}{
  const wide=width/height>1.25,short=height<500;
  if(kind==='focus')return {pitch:55,yaw:0,region:{x:short?[.42,.87]:[.23,.77],y:short?[.22,.73]:[.16,.53]}};
  return {pitch:kind==='hero'?(wide?42:52):55,yaw:0,region:{x:wide?[.13,.87]:[.10,.90],y:short?[.22,.65]:kind==='hero'?[.24,.74]:[.22,.70]}};
}
