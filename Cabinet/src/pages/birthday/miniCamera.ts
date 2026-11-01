import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

/** Instance-only camera; the authored frame and collection GLBs stay immutable. */
export function makeMiniCamera(parent:T.Object3D,owned:Set<T.BufferGeometry>,lod=false){
 parent.clear();
 const root=new T.Group();root.name='Mini_camera';parent.add(root);
 const material=(name:string,color:string,roughness=.72,metalness=0)=>{
  const m=new T.MeshStandardMaterial({color,roughness,metalness});m.name='Mini_camera_'+name;return m;
 };
 const cream=material('cream','#f1e1c8'),cocoa=material('cocoa','#a18068'),gold=material('gold','#b89a68',.45,.3),glass=material('glass','#607d80',.24,.22),gleam=material('reflection','#c1d9d5',.3);
 const mesh=(name:string,g:T.BufferGeometry,m:T.MeshStandardMaterial,x:number,y:number,z:number,p:T.Object3D=root)=>{if(!g.index)g.setIndex(Array.from({length:g.attributes.position.count},(_,i)=>i));owned.add(g);const o=new T.Mesh(g,m);o.name=name;o.position.set(x,y,z);p.add(o);return o;};
 const box=(name:string,w:number,h:number,d:number,r:number,m:T.MeshStandardMaterial,x:number,y:number,z:number)=>mesh(name,new RoundedBoxGeometry(w,h,d,lod?1:2,r),m,x,y,z);
 box('Camera_body',.120,.072,.042,.009,cream,0,.036,0);
 box('Camera_grip',.023,.058,.047,.008,cocoa,-.047,.034,.002);
 box('Camera_top',.042,.013,.029,.004,cream,.015,.077,-.003);
 box('Camera_viewfinder_rim',.022,.013,.006,.003,gold,.018,.078,.014);
 box('Camera_viewfinder_glass',.016,.008,.007,.002,glass,.018,.078,.016);
 const lens=new T.Group();lens.name='PIVOT_camera_lens';lens.position.set(.009,.036,.021);root.add(lens);
 const cylinder=(name:string,r:number,d:number,m:T.MeshStandardMaterial,z:number)=>{const o=mesh(name,new T.CylinderGeometry(r,r,d,lod?24:40,1),m,0,0,z,lens);o.rotation.x=Math.PI/2;return o;};
 cylinder('Camera_lens_barrel',.027,.016,cocoa,.005);
 cylinder('Camera_lens_rim',.024,.008,gold,.016);
 cylinder('Camera_lens_inner',.021,.004,cocoa,.021);
 const eye=cylinder('Camera_lens_glass',.0185,.003,glass,.023);
 // Two soft reflected shapes read as glass even in the tiny archive version.
 const reflection=mesh('Camera_lens_reflection',new T.SphereGeometry(1,lod?10:16,8),gleam,-.006,.006,.025,lens);reflection.scale.set(.0045,.008,.0008);reflection.rotation.z=-.55;
 const pin=mesh('Camera_lens_glint',new T.SphereGeometry(.0018,8,6),gleam,.008,-.007,.025,lens);
 pin.scale.z=.4;
 const shutter=mesh('PIVOT_camera_shutter',new T.CylinderGeometry(.008,.008,.006,20),gold,-.034,.076,0);
 const restY=shutter.position.y,restZ=lens.position.z;
 const feedback=(t:number,reduced=false)=>{
  const pulse=Math.sin(Math.PI*T.MathUtils.clamp(t,0,1))**2;
  shutter.position.y=restY-(reduced?0:.0025*pulse);
  lens.position.z=restZ-(reduced?0:.0015*pulse);
  // Material has been instance-cloned by BirthdayModel before this is called.
  eye.material.color.set('#607d80').lerp(new T.Color('#d4e8d5'),pulse*.65);
  eye.material.emissive.set('#dae8b5');eye.material.emissiveIntensity=.65*pulse;
 };
 return {root,lens,shutter,eye,feedback};
}
export type MiniCamera=ReturnType<typeof makeMiniCamera>;
