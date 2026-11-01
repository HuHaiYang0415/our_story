import * as T from 'three';
export type StarId='milk'|'cocoa';
export const STAR_IDS:StarId[]=['milk','cocoa'];
/** Soft, thick five-point keepsakes; split top tips echo the incumbent cats' ears. */
function starGeometry(cocoa:boolean){
 const points:T.Vector2[]=[];for(let i=0;i<10;i++){const a=Math.PI/2+i*Math.PI/5,r=i%2?.010:.020;points.push(new T.Vector2(Math.cos(a)*r,Math.sin(a)*r));}
 points.splice(0,1,new T.Vector2(.005,.018),new T.Vector2(0,.0145),new T.Vector2(-.005,cocoa?.020:.0185));
 const shape=new T.Shape();for(let i=0;i<points.length;i++){const p=points[i],next=points[(i+1)%points.length],prev=points[(i+points.length-1)%points.length],a=prev.clone().lerp(p,.73),b=p.clone().lerp(next,.27);if(i===0)shape.moveTo(a.x,a.y);else shape.lineTo(a.x,a.y);shape.quadraticCurveTo(p.x,p.y,b.x,b.y);}shape.closePath();
 const g=new T.ExtrudeGeometry(shape,{depth:.006,bevelEnabled:true,bevelThickness:.003,bevelSize:.002,bevelSegments:3,curveSegments:3,steps:1});g.translate(0,0,-.003);g.setIndex(Array.from({length:g.attributes.position.count},(_,i)=>i));return g;
}
export function makeTwinStars(parent:T.Object3D,ownGeometry:Set<T.BufferGeometry>,lod=false){
 const root=new T.Group();root.name='Twin_stars_universe';parent.add(root);
 const stars={} as Record<StarId,T.Mesh<T.BufferGeometry,T.MeshStandardMaterial>>;
 for(const id of STAR_IDS){const geometry=starGeometry(id==='cocoa');ownGeometry.add(geometry);const material=new T.MeshStandardMaterial({color:id==='milk'?'#f7e6cb':'#85604a',roughness:.78,emissive:'#ffcb83',emissiveIntensity:0});material.name='Twin_star_'+id;const star=new T.Mesh(geometry,material);star.name='Twin_star_'+id;star.castShadow=true;star.rotation.x=-.36;stars[id]=star;root.add(star);}
 // Transient message beads only. There is deliberately no permanent orbit mesh.
 const pulseGeometry=new T.SphereGeometry(.0032,10,7);ownGeometry.add(pulseGeometry);
 const pulses:T.Mesh<T.SphereGeometry,T.MeshBasicMaterial>[]=[];
 if(!lod)for(let i=0;i<4;i++){const material=new T.MeshBasicMaterial({color:i?'#f0c277':'#fff2bb',transparent:true,opacity:1-i*.22,depthWrite:false});material.name='Twin_star_message_'+i;const pulse=new T.Mesh(pulseGeometry,material);pulse.name='Twin_star_message_'+i;pulse.userData.nonInteractive=true;pulse.castShadow=false;pulse.scale.setScalar(1-i*.17);root.add(pulse);pulses.push(pulse);}
 const colors={milk:new T.Color('#f7e6cb'),cocoa:new T.Color('#85604a')},lit=new T.Color('#ffe5b6');
 const orbitU=new T.Vector3(.037,-.0035,.0035),vMilk=new T.Vector3(.0035*1.4/.037,.58,-.82).normalize(),vCocoa=new T.Vector3(.0035*1.4/.037,.55,-.85).normalize();
 let opened=lod?1:0,phase=0;
 const pose=(progress=opened,time=phase)=>{opened=progress;phase=time;root.visible=progress>0;const lift=progress*progress*(3-2*progress);
  // Both stars travel about C=(0,.0705,.0215). Shared phase keeps them half
  // a turn apart; slightly different perpendicular minor axes give depth.
  // Writing this as deltas keeps every t=0/rising/static pose exactly unchanged.
  // Shared speed breathes by 12% without stopping or changing the path.
  const q=time*Math.PI*2/20,theta=q+.06*Math.sin(2*q),c=Math.cos(theta),s=Math.sin(theta),w=Math.sin(2*theta);
  // The major-axis tangent leads this small bank by .08 rad (~.25s).
  // Subtract its phase-zero value and normalize to retain the static pose/range.
  const bank=(Math.sin(theta-.08)+Math.sin(.08))/(1+Math.sin(.08));
  const radial=1+.025*w,minor=.0252;
  const u=orbitU;
  const milk=stars.milk,cocoa=stars.cocoa;
  milk.position.set(.037*c*radial+minor*vMilk.x*s,.024+lift*(.043+u.y*(c-1)+minor*vMilk.y*s+.0008*w-.0006*s*s),.025+lift*(u.z*(c-1)+minor*vMilk.z*s));
  cocoa.position.set(-.037*c*radial-minor*vCocoa.x*s,.024+lift*(.050-u.y*(c-1)-minor*vCocoa.y*s-.0008*w-.0006*s*s),.018+lift*(-u.z*(c-1)-minor*vCocoa.z*s));
  for(const[i,id]of STAR_IDS.entries()){const star=stars[id],sign=i?-1:1;star.scale.setScalar(.68+.32*lift);star.rotation.set(-.36-sign*.12*bank,sign*.08*bank,sign*(.12+.08*bank));star.material.color.copy(colors[id]);star.material.emissiveIntensity=0;}
  pulses.forEach(p=>p.visible=false);
 };
 const breathe=(time:number)=>{for(const[i,id]of STAR_IDS.entries())stars[id].material.emissiveIntensity=.06+.22*Math.pow(.5+.5*Math.sin(time*Math.PI*2/(i?3.7:2.9)+(i?1.9:0)),2);};
 const feedback=(id:StarId,t:number,reduced=false)=>{const a=stars[id],b=stars[id==='milk'?'cocoa':'milk'];
  const bump=(x:number)=>Math.sin(Math.PI*T.MathUtils.clamp(x,0,1))**2,send=bump(t/.34),receive=bump((t-.35)/.40),returned=.65*bump((t-.73)/.27);
  for(const[star,intensity]of [[a,Math.max(send,returned)],[b,receive]] as const){star.material.color.copy(colors[star===a?id:id==='milk'?'cocoa':'milk']).lerp(lit,intensity*.48);star.material.emissiveIntensity=.12+1.35*intensity;if(!reduced){star.position.y+=.006*intensity;star.rotation.z+=(star===a?-.22:.18)*intensity;star.scale.multiplyScalar(1+.09*intensity);}}
  const point=(u:number)=>a.position.clone().lerp(b.position,u).add(new T.Vector3(0,.015*Math.sin(Math.PI*u),.010*Math.sin(Math.PI*u)));
  pulses.forEach((pulse,i)=>{const q=t-i*.026,forward=q>=.18&&q<.53,back=q>=.61&&q<.93;pulse.visible=!reduced&&(forward||back);if(pulse.visible)pulse.position.copy(point(forward?(q-.18)/.35:1-(q-.61)/.32));});
 };
 const envelope=new T.Box3(new T.Vector3(-.072,.024,-.018),new T.Vector3(.072,.115,.054));
 pose();return{root,stars,envelope,pose,breathe,feedback,get progress(){return opened;},get phase(){return phase;},restorePhase(progress:number,time:number){opened=progress;phase=time;},disposeUnused(){if(lod){ownGeometry.delete(pulseGeometry);pulseGeometry.dispose();}}};
}
export type TwinStars=ReturnType<typeof makeTwinStars>;




