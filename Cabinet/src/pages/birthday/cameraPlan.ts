import * as T from 'three';
import {BIRTHDAY_ROOM} from './boxGeometry';
export type CameraPose={position:T.Vector3;target:T.Vector3;zoom:number;fit?:CameraFit};
export type CollectionView='group'|'focus'|'all';
export type CollectionState={view:CollectionView;groupIndex:number;focusAge:number|null};
export const COLLECTION_GROUPS:readonly (readonly number[])[]=[[8,3,17,12],[12,5,1,6],[6,15,7,21],[21,4,23,24],[24,20,19,13],[13,9,2,16],[16,10,18,14],[14,22,11,8]];
export const SIDE_GROUP={left:2,back:7,right:5,front:3} as const;
export const wrapGroup=(value:number)=>((value%8)+8)%8;
export function groupForAge(age:number,current:number){return COLLECTION_GROUPS.map((ages,index)=>({ages,index})).filter(g=>g.ages.includes(age)).sort((a,b)=>Math.min(wrapGroup(a.index-current),wrapGroup(current-a.index))-Math.min(wrapGroup(b.index-current),wrapGroup(current-b.index)))[0]?.index??0;}
export function boxPoints(box:T.Box3){const out:T.Vector3[]=[];for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z])out.push(new T.Vector3(x,y,z));return out;}
export type CameraRegion={x:readonly[number,number];y:readonly[number,number]};
export type CameraFit={region:CameraRegion;pitch:number;yaw:number;valid:boolean;minDepth:number;projected:{left:number;right:number;top:number;bottom:number};iterations:number};
function fitInRegion(points:T.Vector3[],width:number,height:number,pitch:number,yaw:number,requested:CameraRegion):CameraPose{
  const region:CameraRegion={x:[Math.max(16/width,requested.x[0]),Math.min(1-16/width,requested.x[1])],y:[Math.max(80/height,requested.y[0]),Math.min(1-88/height,requested.y[1])]},angle=pitch*Math.PI/180,direction=new T.Vector3(Math.sin(yaw)*Math.cos(angle),Math.sin(angle),Math.cos(yaw)*Math.cos(angle)),right=new T.Vector3(Math.cos(yaw),0,-Math.sin(yaw)),up=new T.Vector3().crossVectors(direction,right),center=new T.Box3().setFromPoints(points).getCenter(new T.Vector3()),target=center.clone(),aspect=width/height,tan=Math.tan(21*Math.PI/180),halfX=(region.x[1]-region.x[0])/2/1.08,halfY=(region.y[1]-region.y[0])/2/1.08,cx=(region.x[0]+region.x[1])/2,cy=(region.y[0]+region.y[1])/2;
  let distance=1;
  for(const point of points){const p=point.clone().sub(center);distance=Math.max(distance,p.dot(direction)+Math.abs(p.dot(right))/(2*halfX*tan*aspect),p.dot(direction)+Math.abs(p.dot(up))/(2*halfY*tan));}
  target.addScaledVector(right,-(cx-.5)*2*distance*tan*aspect).addScaledVector(up,(cy-.5)*2*distance*tan);
  const pose=():CameraPose=>{let maximum=distance;for(const[axis,min,max]of [['x',-BIRTHDAY_ROOM.width/2+.95,BIRTHDAY_ROOM.width/2-.95],['z',BIRTHDAY_ROOM.back+.95,BIRTHDAY_ROOM.front-.95]] as const){const d=direction[axis];if(Math.abs(d)>.0001)maximum=Math.min(maximum,((d>0?max:min)-target[axis])/d);}const physical=Math.max(.10,Math.min(distance,maximum));return{position:target.clone().addScaledVector(direction,physical),target:target.clone(),zoom:physical/distance};};
  const inspect=(p:CameraPose)=>{const c=new T.PerspectiveCamera(42,aspect,.05,180);c.position.copy(p.position);c.zoom=p.zoom;c.lookAt(p.target);c.updateProjectionMatrix();c.updateMatrixWorld();const q=points.map(p=>p.clone().project(c)),projected={left:(Math.min(...q.map(p=>p.x))+1)/2,right:(Math.max(...q.map(p=>p.x))+1)/2,top:(1-Math.max(...q.map(p=>p.y)))/2,bottom:(1-Math.min(...q.map(p=>p.y)))/2},minDepth=Math.min(...points.map(p=>-p.clone().applyMatrix4(c.matrixWorldInverse).z));return{projected,minDepth};};
  let result=pose(),measurement=inspect(result),iterations=0;
  for(;iterations<3;iterations++){
    result=pose();measurement=inspect(result);const b=measurement.projected,dx=(b.left+b.right)/2-cx,dy=(b.top+b.bottom)/2-cy,factor=Math.max(1,(b.right-b.left)/(2*halfX),(b.bottom-b.top)/(2*halfY));
    if(measurement.minDepth>.05&&Math.abs(dx)<.001&&Math.abs(dy)<.001&&factor<1.002)break;
    if(iterations===2)break;
    target.addScaledVector(right,dx*2*distance*tan*aspect).addScaledVector(up,-dy*2*distance*tan);distance*=factor*1.01;
  }
  const b=measurement.projected;result.fit={region,pitch,yaw,iterations:iterations+1,projected:b,minDepth:measurement.minDepth,valid:measurement.minDepth>.05&&b.left>=region.x[0]-.002&&b.right<=region.x[1]+.002&&b.top>=region.y[0]-.002&&b.bottom<=region.y[1]+.002};return result;
}
/** Fixed-angle fit using cached world-space animated bounds, never a vertex loop per frame. */
export function fitCamera(points:T.Vector3[],width:number,height:number,pitch:number,yaw=0,kind:'hero'|'group'|'focus'|'all'='hero',region?:CameraRegion):CameraPose{
  if(region)return fitInRegion(points,width,height,pitch,yaw,region);
  const angle=pitch*Math.PI/180,direction=new T.Vector3(Math.sin(yaw)*Math.cos(angle),Math.sin(angle),Math.cos(yaw)*Math.cos(angle)),right=new T.Vector3(Math.cos(yaw),0,-Math.sin(yaw)),up=new T.Vector3().crossVectors(direction,right),bounds=new T.Box3().setFromPoints(points),target=bounds.getCenter(new T.Vector3()),aspect=width/height,tan=Math.tan(21*Math.PI/180);
  const short=height<500,halfX=kind==='focus'?.225:kind==='hero'?.42:.43;
  const top=kind==='hero'&&!short&&aspect<=1.25?.28:Math.max(80/height,.16),bottom=kind==='focus'?Math.min(1-88/height,.56):kind==='hero'&&!short&&aspect<=1.25?.72:Math.min(1-88/height,.80),halfY=Math.max(.13,(bottom-top)/2),centerY=(top+bottom)/2;
  let distance=1;
  for(const point of points){const p=point.clone().sub(target),depth=p.dot(direction);distance=Math.max(distance,depth+Math.abs(p.dot(right))/(2*halfX*tan*aspect),depth+Math.abs(p.dot(up))/(2*halfY*tan));}
  distance*=1.08;target.addScaledVector(up,(centerY-.5)*2*distance*tan);
  let zoom=1;
  for(let iteration=0;iteration<3;iteration++){
    let maximum=distance;
    for(const [axis,min,max]of [['x',-BIRTHDAY_ROOM.width/2+.95,BIRTHDAY_ROOM.width/2-.95],['z',BIRTHDAY_ROOM.back+.95,BIRTHDAY_ROOM.front-.95]] as const){const d=direction[axis];if(Math.abs(d)>.001)maximum=Math.min(maximum,((d>0?max:min)-target[axis])/d);}
    const physical=Math.max(1.1,Math.min(distance,maximum));zoom=physical/distance;
    const position=target.clone().addScaledVector(direction,physical),c=new T.PerspectiveCamera(42,aspect,.05,180);c.position.copy(position);c.zoom=zoom;c.lookAt(target);c.updateProjectionMatrix();c.updateMatrixWorld();
    const projected=points.map(p=>p.clone().project(c)),xs=projected.map(p=>p.x),ys=projected.map(p=>p.y),left=Math.min(...xs),r=Math.max(...xs),t=Math.max(...ys),b=Math.min(...ys);
    const factor=Math.max(1,(r-left)/(4*halfX),(t-b)/(4*halfY));
    if(factor<1.002)return {position,target,zoom};distance*=factor*1.01;
  }
  return {position:target.clone().addScaledVector(direction,distance*zoom),target,zoom};
}
