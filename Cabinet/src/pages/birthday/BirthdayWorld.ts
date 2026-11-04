import {INTERACTION_MOTION,navigationEase} from './interactionMotion';
import * as T from 'three';
import {BOX,BIRTHDAY_ROOM,BOX_VIEW_WIDTH,CLOSED_POSITION,CLOSED_TARGET} from './boxGeometry';
import {makeSurface} from './sceneModels';
import {BirthdayAssets,BirthdayModel} from './BirthdayAssets';
import {birthdayRepository,visibleObjects} from './birthdayRepository';
import {focusSilhouette} from './focusSilhouette';
import {BIRTHDAY_SHADOW_LAYER} from './batchShadowGeometry';
import {AGE06_COMPOSITION} from './age06Composition';
import {makeFoodStudio} from './foodStudio';
import {BirthdayCollection,SURROUND_SLOTS} from './BirthdayCollection';
import type {CollectionSide} from './BirthdayCollection';
import {birthdayArchives} from './birthdayArchives';
import type {BirthdayArchives,FutureBirthdayRecord} from './birthdayArchives';
import type {BirthdayObject,GiftState,GiftStates,GiftProjection,SceneFrame} from './types';
import {COLLECTION_GROUPS,SIDE_GROUP,wrapGroup,groupForAge,boxPoints,fitCamera} from './cameraPlan';
import {astraRecipe,collectionFontScale,enlargedCollection,readingGroupPose} from './astraComposition';
import type {AstraLayout} from './astraComposition';
import type {CameraPose as Pose,CollectionState} from './cameraPlan';
import type {StarId} from './twinStars';
type Tween={start:number;duration:number;tick:(ratio:number)=>void;done?:()=>void};
type Display={age:number;models:Map<BirthdayObject,BirthdayModel>;homes:Map<BirthdayObject,T.Vector3>};
const smooth=(t:number)=>t*t*(3-2*t),clamp=(n:number)=>T.MathUtils.clamp(n,0,1);
/** THESIS: One soft paper gift unfolds into its own warm birthday world.
 * OWN-WORLD: cream paper, apricot satin, honey wood and quiet year colors.
 * STORY: lift, genuine slip knot, hinged lid, continuous entry, explore.
 * FIRST VIEWPORT: same-source closed gift at its original cabinet position.
 * FORM: established Experience extension; FOUNDATION 2026-10-15, code-led.
 * One independent page and real perspective camera. Age is an integer; a
 * transition has its own progress and model instances. Each original gift
 * retains its visit state; wall miniatures have no response state.
 * FINISH: unreviewed and undocumented is unfinished; the shipped artifact,
 * finish verdict and topic DESIGN describe the same implementation. */
export class BirthdayWorld {
  readonly renderer:T.WebGLRenderer;readonly scene=new T.Scene();readonly camera=new T.PerspectiveCamera(42,1,.05,180);
  private closedShadow=new T.Mesh(new T.PlaneGeometry(15,12),new T.MeshBasicMaterial({transparent:true,opacity:.14}));
  private target=new T.Vector3(...CLOSED_TARGET);private table=makeSurface();private entry:BirthdayModel;
  private display:Display;private next:Display|null=null;private states:GiftStates={};private age=1;private progress=0;
  private direction=new T.Vector3(0,Math.sin(46*Math.PI/180),Math.cos(46*Math.PI/180));private overview!:Pose;private baseOverview!:Pose;
  private pendingCollectionCursor:number|null=null;private tweens=new Map<string,Tween>();private frame=0;private disposed=false;private width=1;private height=1;private reduced=false;
  private clippingActive:boolean|null=null;private phase:'closed'|'opening'|'table'='closed';private focused:BirthdayObject|'POSTER'|'COLLECTION'|null=null;
  private collection:BirthdayCollection;private collectionState:CollectionState={view:'group',groupIndex:2,focusAge:null};private collectionCursor=2;private heroCache=new Map<string,Pose>();private collectionFutureRecord:string|null=null;private collectionFutureCursor=0;private collectionSide:CollectionSide='left';private mode:'table'|'collection'|'future'='table';private parentPose:Pose|null=null;private parentFocus:BirthdayObject|'POSTER'|null=null;private pan=new T.Vector2();private futureExhibit:{model:BirthdayModel;record:FutureBirthdayRecord;giftId:string}|null=null;private futureToken=0;private spark:T.Points|null=null;
  private compositionKey='';private compositionDragging=false;private panoramaTarget:boolean|null=null;private panoramaCoverage=0;
  private ray=new T.Raycaster();private resizeObserver:ResizeObserver;private fontObserver:MutationObserver;private lampLight=new T.PointLight('#ffe3ab',0,3,2);
  private key=new T.DirectionalLight('#fffaf1',2.0);private ambient=new T.HemisphereLight('#fffdf9','#e5ddd0',1.8);private fill=new T.DirectionalLight('#f8fcff',.55);private lastFrameTime=0;private interval=0;
  private starPhase=0;private starTime=0;private starResponse:{id:StarId;start:number}|null=null;private starPaused=false;
  private cakeLamp:T.PointLight|null=null;private cakeLampOn=true;private cakeLampLevel=1;
  private foodStudio:ReturnType<typeof makeFoodStudio>|null=null;
  private clips=[new T.Plane(new T.Vector3(1,0,0),BOX.width/2-.15),new T.Plane(new T.Vector3(-1,0,0),BOX.width/2-.15),new T.Plane(new T.Vector3(0,0,1),BOX.depth/2-.15),new T.Plane(new T.Vector3(0,0,-1),BOX.depth/2-.15)];
  constructor(private host:HTMLElement,private assets:BirthdayAssets,private onFrame:(frame:SceneFrame)=>void,private onLost:()=>void,private readonly archives:BirthdayArchives=birthdayArchives){
    // Authored meshes on layer 1 remain the physical pick targets after batching.
    this.ray.layers.enable(1);
    const shadowCanvas=document.createElement('canvas');shadowCanvas.width=shadowCanvas.height=64;const shadowContext=shadowCanvas.getContext('2d')!,contact=shadowContext.createRadialGradient(32,32,2,32,32,30);contact.addColorStop(0,'rgba(85,58,39,.38)');contact.addColorStop(.58,'rgba(85,58,39,.12)');contact.addColorStop(1,'rgba(85,58,39,0)');shadowContext.fillStyle=contact;shadowContext.fillRect(0,0,64,64);
    this.closedShadow.material.dispose();this.closedShadow.material=new T.MeshBasicMaterial({map:new T.CanvasTexture(shadowCanvas),transparent:true,opacity:.22,depthWrite:false});this.closedShadow.geometry.dispose();this.closedShadow.geometry=new T.PlaneGeometry(22,16.5);
    this.renderer=new T.WebGLRenderer({antialias:true,alpha:true,powerPreference:'low-power'});
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));this.renderer.setClearColor('#f4ebdd',0);
    this.renderer.outputColorSpace=T.SRGBColorSpace;this.renderer.toneMapping=T.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.20;
    this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=T.PCFShadowMap;this.renderer.localClippingEnabled=true;
    // Three 0.180 collects the color list before calling shadowMap.render.
    // Enable the depth-only layer for that bounded pass and restore the camera.
    const renderShadows=this.renderer.shadowMap.render.bind(this.renderer.shadowMap);
    this.renderer.shadowMap.render=(lights,scene,camera)=>{const mask=camera.layers.mask;camera.layers.enable(BIRTHDAY_SHADOW_LAYER);try{renderShadows(lights,scene,camera);}finally{camera.layers.mask=mask;}};
    this.renderer.domElement.setAttribute('aria-hidden','true');this.renderer.domElement.addEventListener('webglcontextlost',this.contextLost);host.append(this.renderer.domElement);
    this.scene.add(this.ambient);
    this.key.position.set(-8,8,5);this.key.castShadow=true;this.key.shadow.mapSize.set(1024,1024);
    Object.assign(this.key.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:45});this.key.shadow.normalBias=.015;this.key.shadow.bias=.00005;this.key.shadow.radius=8;this.key.shadow.intensity=.34;this.scene.add(this.key);
    this.fill.position.set(5,8,-5);this.scene.add(this.fill,this.table.root,this.lampLight);
    this.entry=assets.instance('ENTRY-GIFTBOX');this.entry.root.scale.setScalar(BIRTHDAY_ROOM.scale);this.entry.root.position.set(0,BOX.bottom,BIRTHDAY_ROOM.centerZ);this.scene.add(this.entry.root);this.closedShadow.rotation.x=-Math.PI/2;this.closedShadow.position.set(0,BOX.bottom-.014,BIRTHDAY_ROOM.centerZ);this.closedShadow.receiveShadow=true;this.scene.add(this.closedShadow);
    this.entry.root.traverse(o=>{if(o instanceof T.Mesh){const m=o.material as T.MeshStandardMaterial;if(m instanceof T.MeshStandardMaterial){m.bumpMap=null;m.bumpScale=0;}if(m.name==='MAT_giftbox_lining'&&o.name.includes('Continuous_paper_shell'))o.visible=false;}});
    this.mode=assets.landing.mode;this.age=assets.effectiveAge;if(assets.landing.reason==='future'){this.collectionState.view='all';this.collectionFutureRecord=archives.latest?.id??null;}this.collection=new BirthdayCollection(assets,archives);this.scene.add(this.collection.root);
    this.collection.root.visible=false;
    // A restored context may retain a later age after age1 was evicted. bind()
    // immediately restores that complete current display; do not request age1.
    const initialReady=visibleObjects(this.age).every(id=>assets.stats().cachedIds.includes(id));
    this.display=initialReady?this.makeDisplay(this.age,{}):{age:this.age,models:new Map(),homes:new Map()};this.table.root.visible=false;this.display.models.forEach(m=>m.root.visible=false);
    this.resizeObserver=new ResizeObserver(()=>this.resize());this.resizeObserver.observe(host);this.fontObserver=new MutationObserver(()=>this.resize());this.fontObserver.observe(document.documentElement,{attributes:true,attributeFilter:['style','class']});this.resize();this.warmOpening();
  }
  /** Compile every opening material state while the same closed box is still
   * covering preparation. A shader transition cannot seize a bow frame. */
  private warmOpening(){
    this.table.root.visible=true;this.collection.root.visible=true;
    this.display.models.forEach(m=>m.root.visible=true);
    this.applyPose(this.overview);
    this.clipSurface(true);this.renderScene();
    this.clipSurface(false);this.renderScene();
    this.table.root.visible=false;this.collection.root.visible=false;
    this.display.models.forEach(m=>m.root.visible=false);
    this.applyPose(this.closed());this.draw();
  }
  private contextLost=(e:Event)=>{e.preventDefault();if(!this.disposed)this.onLost();};
  private makeDisplay(age:number,states:GiftStates):Display{
    const d:Display={age,models:new Map(),homes:new Map()};
    if(age===6||age===24)this.foodStudio??=makeFoodStudio(this.renderer);
    for(const id of visibleObjects(age)){const m=this.assets.instance(id);m.reset(states[id]);if(this.foodStudio)m.setFoodEnvironment(this.foodStudio.texture);this.scene.add(m.root);d.models.set(id,m);}
    return d;
  }
  private release(d:Display){d.models.forEach(m=>m.dispose());d.models.clear();}
  private currentPose():Pose{return {position:this.camera.position.clone(),target:this.target.clone(),zoom:this.camera.zoom};}
  private closed():Pose{const reference=Math.min(this.width*.82,580),ratio=BIRTHDAY_ROOM.scale/(BOX.width/.2),transform=(p:readonly number[])=>new T.Vector3(p[0]*ratio,(p[1]-BOX.bottom)*ratio+BOX.bottom,p[2]*ratio+BIRTHDAY_ROOM.centerZ);return {position:transform(CLOSED_POSITION),target:transform(CLOSED_TARGET),zoom:2*Math.tan(21*Math.PI/180)*820*reference/(BOX_VIEW_WIDTH*this.height)};}
  private layout(){const aspect=this.width/this.height,sceneWidth=aspect>1.25?Math.max(7.5,aspect*4.1):4.9,distance=sceneWidth/(2*Math.tan(21*Math.PI/180)*aspect),target=new T.Vector3(0,.3,0),angle=(aspect>1.25?38:66)*Math.PI/180;this.direction.set(0,Math.sin(angle),Math.cos(angle));this.baseOverview={position:target.clone().addScaledVector(this.direction,distance),target,zoom:1};this.overview=this.placementPoseFor(this.display.age);}
  private placementPoseFor(age:number):Pose{if(age!==6&&age!==1)return this.baseOverview;const aspect=this.width/this.height,sceneWidth=aspect>1.25?Math.max(7.5,aspect*4.1):age===6?AGE06_COMPOSITION.phone.sceneWidth:4.9,distance=sceneWidth/(2*Math.tan(21*Math.PI/180)*aspect),angle=(aspect>1.25?38:66)*Math.PI/180,target=this.baseOverview.target.clone();return{position:target.clone().addScaledVector(new T.Vector3(0,Math.sin(angle),Math.cos(angle)),distance),target,zoom:1};}
  private applyPose(p:Pose){this.camera.position.copy(p.position);this.target.copy(p.target);this.camera.zoom=p.zoom;this.camera.lookAt(this.target);this.camera.updateProjectionMatrix();this.camera.updateMatrixWorld();}
  private at(x:number,y:number,height:number,pose:Pose){const c=new T.PerspectiveCamera(42,this.width/this.height,.05,180);c.position.copy(pose.position);c.lookAt(pose.target);c.updateMatrixWorld();const ray=new T.Raycaster();ray.setFromCamera(new T.Vector2(x*2-1,1-y*2),c);return ray.ray.intersectPlane(new T.Plane(new T.Vector3(0,1,0),-height),new T.Vector3())??new T.Vector3();}
  private modelBounds(model:BirthdayModel){if(model.id!=='GIFT-24')return new T.Box3().setFromObject(model.root);const box=new T.Box3();model.root.updateMatrixWorld(true);model.root.traverse(o=>{if(o instanceof T.Mesh&&!o.userData.nonInteractive){o.geometry.computeBoundingBox();box.union(o.geometry.boundingBox!.clone().applyMatrix4(o.matrixWorld));}});return box;}
  private poseDisplay(d:Display,hero=this.mode==='table'){
    const s=birthdayRepository.getScene(d.age),wide=this.width/this.height>1.25,B=s.layout==='B',C=s.layout==='C';
    const positions=[[wide?.34:C?.47:B?.61:.38,wide?.49:C?.48:.49,wide?.29:.44],[wide?.70:C?.66:B?.34:.67,wide?.62:.62,wide?.20:.27],[wide?.16:C?.18:B?.81:.19,wide?.23:C?.59:.22,wide?.115:.16]];
    if(d.age===6){const recipe=wide?AGE06_COMPOSITION.desktop:AGE06_COMPOSITION.phone;recipe.objects.forEach((p,i)=>positions[i]=[...p]);}
    if(d.age===1&&!wide){positions[0]=[.38,.47,.62];positions[1]=[.78,.68,.29];}
    if(d.age===24){if(wide){positions[0]=[.40,.49,.29];positions[1]=[.73,.64,.23];}else{positions[0]=[.39,.46,.47];positions[1]=[.75,.61,.27];}}
    const screenWidth=wide?Math.max(7.5,this.width/this.height*4.1):d.age===6?AGE06_COMPOSITION.phone.sceneWidth:4.9;
    visibleObjects(d.age).forEach((id,i)=>{
      const m=d.models.get(id);if(!m)return;m.root.scale.setScalar(1);m.root.position.set(0,0,0);if(d.age===24)m.reset();m.root.updateMatrixWorld(true);
      const b=this.modelBounds(m),size=b.getSize(new T.Vector3()),scale=screenWidth*positions[i][2]/Math.max(size.x,.01);
      if(d.age===24)m.reset(this.states[id]);
      m.root.scale.setScalar(scale);
      const height=size.y*scale*.46,pos=this.at(positions[i][0],positions[i][1],height,this.placementPoseFor(d.age));pos.y=-b.min.y*scale-.024;
      if(d.age===24&&hero){
        const targetWidth=i===0?(wide?2.6:2.40):(wide?2.05:1.65);m.root.scale.setScalar(targetWidth/size.x);
        pos.set(i===0?(wide?-1.30:-.23):(wide?1.45:.32),-b.min.y*m.root.scale.x-.024,i===0?(wide?-.15:-.65):(wide?.45:1.15));
      }
      m.root.position.copy(pos);d.homes.set(id,pos.clone());
    });
  }
  private heroPoseFor(d:Display):Pose{
    const key=`${this.width}/${this.height}/${d.age}/4`,cached=this.heroCache.get(key);if(cached)return cached;
    if(!d.models.size)return this.placementPoseFor(d.age);
    const restorePlacement=d.age===24&&this.mode!=='table';if(restorePlacement)this.poseDisplay(d,true);
    const points:T.Vector3[]=[];
    for(const [id,m]of d.models)m.measure(()=>{if(id==='GIFT-24')m.sampleClip(0);const collect=()=>{m.root.updateMatrixWorld(true);points.push(...boxPoints(this.modelBounds(m)));};collect();if(m.clip){for(const t of (d.age===24?[0,.2,.4,.6,.8,1]:[.2,.4,.6,.8,1])){m.sampleClip(t);collect();}m.reset(this.states[id]);}});
    if(restorePlacement)this.poseDisplay(d,false);
    const recipe=d.age===24?astraRecipe('hero',this.width,this.height):null;const pose=recipe?fitCamera(points,this.width,this.height,recipe.pitch,recipe.yaw,'hero',recipe.region):fitCamera(points,this.width,this.height,this.width/this.height>1.25&&this.height>=500?38:50);this.heroCache.set(key,pose);return pose;
  }
  private cloth(){
    const a=birthdayRepository.getScene(this.display.age),b=this.next?birthdayRepository.getScene(this.next.age):a;
    const clothColor=(age:number,value:string)=>new T.Color(value).lerp(new T.Color('#fff8ec'),age===1?.52:age===24?.62:.32);
    const color=clothColor(a.age,a.cloth).lerp(clothColor(b.age,b.cloth),smooth(this.progress));
    (this.table.surface.material as T.MeshStandardMaterial).color.copy(color);
    
    const recipes=[[1.72,1.19,.43],[1.79,1.24,.45],[1.70,1.13,.47],[1.75,1.18,.44]],groups=[1,1,3,2,1,3,2,2,4,3,2,1,4,4,4,3,3,3,4,2,4,4,4,2];
    const l=recipes[groups[a.age-1]-1],n=recipes[groups[b.age-1]-1],t=smooth(this.progress);
    this.key.intensity=T.MathUtils.lerp(l[0],n[0],t)*1.18;this.ambient.intensity=T.MathUtils.lerp(l[1],n[1],t)*1.32;this.fill.intensity=T.MathUtils.lerp(l[2],n[2],t)*1.18;
    const supports=SURROUND_SLOTS.map(([x,z,,extent])=>({x:x*3.05,z:z*2.6,radius:extent*.72}));
    const contacts:Array<{x:number;z:number;width:number;depth:number;opacity:number}>=[];
    for(const display of [this.display,this.next])if(display)for(const model of display.models.values()){model.root.updateMatrixWorld(true);const size=new T.Box3().setFromObject(model.root).getSize(new T.Vector3());const home=display.homes.get(model.id as BirthdayObject)??model.root.position;supports.push({x:home.x,z:home.z,radius:Math.max(size.x,size.z)*.54+.40});contacts.push({x:model.root.position.x,z:model.root.position.z,width:size.x*1.10,depth:size.z*1.10,opacity:this.mode==='table'?(this.next?(display===this.display?1-t:t):1):0});}
    this.table.setSupports(supports);this.table.setContacts(contacts);this.table.setYear(a.age,b.age,smooth(this.progress));if(!this.next)this.collection.setScene(a.age);this.collection.fadeYear(a.age,b.age,smooth(this.progress));
    this.updateLamp();
  }
  private updateLamp(){
    const lamp=this.display.models.get('GIFT-01')??this.next?.models.get('GIFT-01');
    if(lamp){lamp.root.updateMatrixWorld(true);this.lampLight.position.copy(lamp.root.localToWorld(new T.Vector3(0,.028,.006)));this.lampLight.distance=1.25;this.lampLight.color.set('#ffd392');this.lampLight.intensity=this.states['GIFT-01']?.lit?.9:0;}
    else this.lampLight.intensity=0;
  }
  private near(id:BirthdayObject):Pose{
    const model=(this.mode==='future'?this.futureExhibit?.model:this.display.models.get(id))!,g=model.root,wide=this.width/this.height>1.25,cake=id.startsWith('CAKE-');this.scene.updateMatrixWorld(true);
    const worldPoints:T.Vector3[]=[];
    const collect=()=>{g.updateMatrixWorld(true);g.traverse(o=>{if(!(o instanceof T.Mesh)||o.userData.nonInteractive)return;const p=o.geometry.getAttribute('position');for(let i=0;i<p.count;i+=6)worldPoints.push(new T.Vector3().fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld));});};
    model.measure(()=>{collect();if(model.clip){for(const ratio of (this.display.age===24?[0,.2,.4,.6,.8,1]:[.2,.4,.6,.8,1])){model.sampleClip(ratio);collect();}}
      // Analytic envelope includes drift, tilt, touch lift and transient message arc.
      if(model.twinStars)worldPoints.push(...boxPoints(model.twinStars.envelope).map(p=>p.applyMatrix4(model.twinStars!.root.matrixWorld)));
    });g.updateMatrixWorld(true);
    if(id==='GIFT-20')return fitCamera(worldPoints,this.width,this.height,50,0,'focus',{x:[.20,.80],y:[.22,.62]});
    // These tall props can push the unconstrained close camera behind the box wall.
    // Fit their animated silhouette inside the room and leave space for the note.
    if(id==='GIFT-05'||id==='GIFT-10'||id==='GIFT-22'){
      const pitch=id==='GIFT-05'?46:id==='GIFT-10'?40:43;
      return fitCamera(worldPoints,this.width,this.height,pitch,0,'focus',{x:wide?[.40,.88]:[.20,.80],y:[.18,.62]});
    }
    if(id==='GIFT-24')return fitCamera(worldPoints,this.width,this.height,50,0,'focus',{x:[.12,.88],y:[.24,.76]});
    const box=new T.Box3().setFromPoints(worldPoints),size=box.getSize(new T.Vector3()),subject=box.getCenter(new T.Vector3());
    const special=this.mode==='table'&&this.display.age===6&&(id==='CAKE-06'||id==='GIFT-06')?(wide?AGE06_COMPOSITION.near.desktop:AGE06_COMPOSITION.near.phone):this.mode==='table'&&id==='CAKE-24'?{cakeWidth:wide?.44:.78,giftWidth:.48,cakeX:wide?(this.height<500?.32:.64):.50,giftX:.5,cakeAngle:wide?52:60,giftAngle:50}:null;
    let sceneWidth=size.x/(special?(cake?special.cakeWidth:special.giftWidth):wide?(cake?.40:.32):(cake?.62:.48)),distance=sceneWidth/(2*Math.tan(21*Math.PI/180)*(this.width/this.height));
    const desiredX=special?(cake?special.cakeX:special.giftX):wide?.65:.5,desiredY=special&&wide?.40:id==='GIFT-08'?.52:wide?.34:id==='CAKE-24'?.35:id==='CAKE-06'?.32:.40,angle=(special?(cake?special.cakeAngle:special.giftAngle):id==='GIFT-01'||id==='CAKE-01'?68:id==='GIFT-08'?50:id==='GIFT-02'?65:cake?60:50)*Math.PI/180,direction=new T.Vector3(0,Math.sin(angle),Math.cos(angle)),up=new T.Vector3(0,Math.cos(angle),-Math.sin(angle));
    const target=subject.add(new T.Vector3((.5-desiredX)*sceneWidth,0,0)).addScaledVector(up,(desiredY-.5)*sceneWidth/(this.width/this.height));
    for(let attempt=0;attempt<3;attempt++){
      const c=new T.PerspectiveCamera(42,this.width/this.height,.05,180);c.position.copy(target).addScaledVector(direction,distance);c.lookAt(target);c.updateMatrixWorld();
      const points=worldPoints.map(p=>p.clone().project(c));
      const left=Math.min(...points.map(p=>p.x)),right=Math.max(...points.map(p=>p.x)),top=Math.max(...points.map(p=>p.y)),bottom=Math.min(...points.map(p=>p.y));
      const factor=Math.max(1,(right-left)/2/(special?(wide?.54:cake?(id==='CAKE-24'?.80:.74):.52):wide?.48:cake?.66:.52),(top-bottom)/2/(special?(wide?.65:.55):wide?.52:.55));
      target.x+=((left+right)/4+.5-desiredX)*sceneWidth;target.addScaledVector(up,((top+bottom)/4-(.5-desiredY))*sceneWidth/(this.width/this.height));distance*=factor;sceneWidth*=factor;
    }
    if(!wide&&(id==='CAKE-01'||id==='GIFT-01')){
      // Keep the close camera inside the same finite box aperture. The former
      // lower-screen band was the real front wall, not a short canvas or note.
      const frontClearance=BIRTHDAY_ROOM.front-.95,position=target.clone().addScaledVector(direction,distance);
      if(position.z>frontClearance)target.addScaledVector(up,(position.z-frontClearance)/Math.sin(angle));
    }
    // Tall book / upright mirror need a longer optical view than the room's
    // front aperture. Shorten the physical dolly and compensate with zoom,
    // keeping the original viewing direction and the full animated bounds.
    let zoom=1;
    if(!wide&&(id==='GIFT-07'||id==='GIFT-08'||id==='CAKE-24'||id==='GIFT-24')){
      const maximum=(BIRTHDAY_ROOM.front-.95-target.z)/direction.z;
      if(maximum>0&&distance>maximum){zoom=maximum/distance;distance=maximum;}
    }
    return {position:target.clone().addScaledVector(direction,distance),target,zoom};
  }
  private resize(){if(this.disposed)return;const r=this.host.getBoundingClientRect();this.width=Math.max(1,r.width);this.height=Math.max(1,r.height);this.renderer.setSize(this.width,this.height);this.camera.aspect=this.width/this.height;this.heroCache.clear();this.layout();this.collection.layout(this.width/this.height,this.at(.5,.28,0,this.placementPoseFor(this.display.age)).z,this.mode==='table'?'table':'collection',this.width);this.poseDisplay(this.display);if(this.next)this.poseDisplay(this.next);this.overview=this.heroPoseFor(this.display);this.cloth();if(!this.tweens.has('camera'))this.applyPose(this.phase==='closed'?this.closed():this.focused==='COLLECTION'?this.collectionPose():this.focused==='POSTER'?this.posterPose():this.focused?this.near(this.focused):this.mode==='collection'?this.collectionPose():this.overview);if(this.compositionDragging&&this.mode==='collection'&&this.collectionState.view==='group')this.applyCollectionProgress(this.collectionCursor);this.draw();}
  setReduced(v:boolean){this.reduced=v;if(v){this.tweens.delete('cake-lamp');this.cakeLampLevel=Number(this.cakeLampOn);for(const key of this.phase==='table'?['camera','composition']:[]){const a=this.tweens.get(key);if(a){this.tweens.delete(key);a.tick(1);a.done?.();}}this.renderer.domElement.style.opacity='1';}}
  setCakeLamp(on:boolean,animate=true){
    this.cakeLampOn=on;const target=Number(on),from=this.cakeLampLevel;
    this.tweens.delete('cake-lamp');
    if(!animate||this.reduced||document.hidden){this.cakeLampLevel=target;this.draw();return;}
    this.tween('cake-lamp',280,t=>{this.cakeLampLevel=T.MathUtils.lerp(from,target,smooth(t));});
  }
  private updateCakeLamp(){
    const model=this.display.models.get('CAKE-24')??this.next?.models.get('CAKE-24');
    if(!model||this.phase!=='table'||this.mode!=='table'){
      if(this.cakeLamp){this.scene.remove(this.cakeLamp);this.cakeLamp.dispose();this.cakeLamp=null;}return;
    }
    model.setCakeLamp(this.cakeLampLevel);
    this.cakeLamp??=new T.PointLight('#ffbf68',0,1,1);if(!this.cakeLamp.parent)this.scene.add(this.cakeLamp);
    model.root.updateMatrixWorld(true);
    const anchor=model.node('ANCHOR_lamp_bulb');
    if(anchor)anchor.getWorldPosition(this.cakeLamp.position);else this.cakeLamp.position.copy(model.root.localToWorld(new T.Vector3(-.013,.112,-.017)));
    const scale=model.root.scale.x,mesh=model.root.getObjectByProperty('isMesh',true) as T.Mesh|undefined;
    const material=mesh?.material,opacity=Array.isArray(material)?material[0]?.opacity:material?.opacity??1;
    this.cakeLamp.distance=scale*.105;this.cakeLamp.intensity=2.2*this.cakeLampLevel*(model.root.visible?opacity:0);this.cakeLamp.castShadow=false;
  }
  private lampProjection():GiftProjection|undefined{
    if(this.phase!=='table'||this.mode!=='table'||this.display.age!==24||this.next||this.focused!=='CAKE-24'||this.tweens.has('camera'))return;
    const model=this.display.models.get('CAKE-24'),anchor=model?.node('ANCHOR_lamp_hit');if(!model||!anchor)return;
    const point=anchor.getWorldPosition(new T.Vector3()),[x,y]=this.project(point),size=44*Math.max(1,parseFloat(getComputedStyle(document.documentElement).fontSize)/16);
    return{x:Math.max(8,Math.min(this.width-size-8,x-size/2)),y:Math.max(72,Math.min(this.height-size-8,y-size/2)),width:size,height:size,polygon:'inset(0)'};
  }
  private tween(key:string,duration:number,tick:Tween['tick'],done?:()=>void,delay=0){this.tweens.set(key,{start:performance.now()+delay,duration,tick,done});this.schedule();}
  private schedule(){if(!this.frame&&!this.disposed)this.frame=window.requestAnimationFrame(this.animate);}
  private animate=(time:number)=>{this.frame=0;if(this.disposed||document.hidden)return;this.interval=this.lastFrameTime?time-this.lastFrameTime:0;this.lastFrameTime=time;if(this.pendingCollectionCursor!==null){const cursor=this.pendingCollectionCursor;this.pendingCollectionCursor=null;this.applyCollectionProgress(cursor);}for(const[key,a]of [...this.tweens]){if(time<a.start)continue;const t=clamp((time-a.start)/a.duration);a.tick(t);if(t===1&&this.tweens.get(key)===a){this.tweens.delete(key);a.done?.();}}this.updateStars(time);this.draw();if(this.tweens.size||this.starsActive()&&!this.reduced&&!this.starPaused||this.starResponse)this.schedule();};
  private cameraTo(id:BirthdayObject|'POSTER'|'COLLECTION'|null,duration:number,done?:()=>void,delay=0,navigation=false){
    const to=id==='COLLECTION'?this.collectionPose():id==='POSTER'?this.posterPose():id?this.near(id):this.overview;this.focused=id;this.cameraToPose(to,duration,done,delay,navigation);
  }
  private cameraToPose(to:Pose,duration:number,done?:()=>void,delay=0,navigation=false){
    const from=this.currentPose();
    if(this.reduced){this.tween('camera',navigation?INTERACTION_MOTION.reduced:140,t=>{this.renderer.domElement.style.opacity=String(Math.abs(2*t-1));if(t>=.5)this.applyPose(to);},()=>{this.renderer.domElement.style.opacity='1';done?.();},delay);return;}
    this.tween('camera',this.reduced?140:duration,t=>{const r=navigation?navigationEase(t):smooth(t);this.applyPose({position:from.position.clone().lerp(to.position,r),target:from.target.clone().lerp(to.target,r),zoom:T.MathUtils.lerp(from.zoom,to.zoom,r)});},done,delay);
  }
  private clipSurface(active:boolean){
    if(this.clippingActive===active)return;
    this.clippingActive=active;
    this.collection.setEntryClipping(active?this.clips:[]);
    const nodes=[this.table.root,...this.display.models.values()].map(v=>'root' in v?v.root:v);
    for(const root of nodes)root.traverse(o=>{if(o instanceof T.Mesh)for(const m of Array.isArray(o.material)?o.material:[o.material]){m.clippingPlanes=active?this.clips:[];m.needsUpdate=true;}});
  }
  private openingRoom(progress:number){
    // One immutable, uniform container transform from closed state to landing.
    // Only the camera and authored knot/lid move; contents keep their scale.
    this.entry.root.scale.setScalar(BIRTHDAY_ROOM.scale);this.entry.root.position.z=BIRTHDAY_ROOM.centerZ;this.collection.setRoomProgress(progress);
    const w=BIRTHDAY_ROOM.width,d=BIRTHDAY_ROOM.depth,z=BIRTHDAY_ROOM.centerZ;
    this.clips[0].constant=this.clips[1].constant=w/2-.15;this.clips[2].constant=d/2-z-.15;this.clips[3].constant=d/2+z-.15;
  }
  open(done:()=>void){
    this.phase='opening';this.table.root.visible=true;this.collection.root.visible=true;this.collection.setMode(this.mode==='table'?'table':'collection');this.collection.setAge(this.age,false);this.collection.hideInitial();this.display.models.forEach(m=>m.root.visible=true);this.openingRoom(this.reduced?1:0);this.clipSurface(!this.reduced);
    if(this.reduced){this.entry.sampleClip(1);this.clipSurface(false);this.closedShadow.visible=false;this.tween('entry-short',140,t=>this.entry.setOpacity(1-t));this.cameraTo(this.mode==='collection'?'COLLECTION':null,140,()=>{this.phase='table';this.collection.setAge(this.age,true);this.collection.reveal(1);done();});return;}
    const initial=this.currentPose(),final=this.mode==='collection'?this.collectionPose():this.overview;
    // One interruptible clock: deformation, lid and camera overlap; no resource
    // staging after the first bow frame and no five independent stopping eases.
    this.tween('opening',1900,t=>{
      this.entry.sampleClip(t);this.closedShadow.material.opacity=.14*(1-smooth(clamp(t/.45)));this.closedShadow.visible=t<.45;
      const approach=smooth(clamp(t/.65)),enter=smooth(clamp((t-.40)/.60));
      const space=smooth(clamp((t-.53)/.31));this.openingRoom(space);this.entry.root.traverse(o=>{if(o instanceof T.Mesh)o.castShadow=t<.53&&o.name!=='Continuous_paper_shell_1';});
      const middle:Pose={position:initial.position.clone().lerp(new T.Vector3(8,18,14),approach),target:initial.target.clone().lerp(new T.Vector3(0,.5,-.8),approach),zoom:initial.zoom};
      this.applyPose({position:middle.position.lerp(final.position,enter),target:middle.target.lerp(final.target,enter),zoom:T.MathUtils.lerp(middle.zoom,final.zoom,enter)});
      if(space>.98&&this.clippingActive)this.clipSurface(false);
      this.collection.reveal(smooth(clamp((t-.85)/.15)));
    },()=>{this.phase='table';this.openingRoom(1);this.clipSurface(false);this.collection.setAge(this.age,true);this.collection.reveal(1);done();});

  }
  approach(id:BirthdayObject|'POSTER',done:()=>void){this.cameraTo(id,INTERACTION_MOTION.enter,done,0,true);}
  pullBack(done:()=>void,duration:number=INTERACTION_MOTION.return){this.cameraTo(null,duration,done,0,duration===INTERACTION_MOTION.return);}
  pressObject(id:BirthdayObject|'POSTER'){
    if(this.reduced||id==='POSTER'||this.next||this.tweens.has('press'))return;const model=this.display.models.get(id);if(!model)return;const scale=model.root.scale.clone();
    this.tween('press',220,t=>{const amount=t<.35?smooth(t/.35):1-smooth((t-.35)/.65);model.root.scale.copy(scale).multiplyScalar(1-.015*amount);},()=>model.root.scale.copy(scale));
  }
  previewDrag(amount:number){if(this.focused||this.next)return;const p=this.overview;this.applyPose({position:p.position.clone().add(new T.Vector3(-amount*.18,0,0)),target:p.target.clone().add(new T.Vector3(-amount*.18,0,0)),zoom:p.zoom});this.draw();}
  resist(){this.tween('resistance',180,t=>this.previewDrag(Math.sin(t*Math.PI)*.10));}
  changeAge(target:number,states:GiftStates,done:()=>void){
    this.tweens.delete('camera');this.pendingCollectionCursor=null;this.states=states;this.next=this.makeDisplay(target,states);this.poseDisplay(this.next);this.next.models.forEach(m=>m.setOpacity(0));const from=this.display,to=this.next,sign=Math.sign(target-this.age)||1,cameraFrom=this.currentPose(),cameraTo=this.heroPoseFor(to),adjustCamera=true;
    this.tween('age',this.reduced?140:660,t=>{
      this.progress=t;
      if(adjustCamera){const r=smooth(t);this.applyPose({position:cameraFrom.position.clone().lerp(cameraTo.position,r),target:cameraFrom.target.clone().lerp(cameraTo.target,r),zoom:T.MathUtils.lerp(cameraFrom.zoom,cameraTo.zoom,r)});}
      const stage=(d:Display,incoming:boolean)=>visibleObjects(d.age).forEach((id,i)=>{
        const m=d.models.get(id);if(!m)return;const a=i===0?.04:i===1?.30:.02,b=i===0?.53:i===1?.98:.82;
        const k=this.reduced?t:clamp((t-a)/(b-a)),v=incoming?smooth(k):1-smooth(k);
        m.setOpacity(v);m.root.position.copy(d.homes.get(id)!);m.root.position.x+=(incoming?1-v:v-1)*sign*(i===1?.36:.20);
      });
      stage(from,false);stage(to,true);this.cloth();
    },()=>{this.release(from);this.display=to;this.next=null;this.age=target;this.overview=this.heroPoseFor(to);if(adjustCamera)this.applyPose(this.overview);this.progress=0;this.display.models.forEach(m=>m.setOpacity(1));this.poseDisplay(this.display);this.cloth();this.collection.setAge(target,true);this.tween('display-reveal',300,t=>this.collection.reveal(smooth(t)));done();});
  }
  respond(id:BirthdayObject,prior:GiftState,commit:(state:GiftState)=>void,done:()=>void){
    const m=this.display.models.get(id);if(!m)return done();const config=birthdayRepository.getObject(id).scene,age=Number(id.slice(5));
    if(id==='CAKE-24'||id==='GIFT-24'&&prior.opened){done();return;}
    const candle=id.startsWith('CAKE-')?config.candleType:null,lotus=candle==='lotus',sparks=candle==='sparkler'||candle==='star-sparkler';
    const state:GiftState={...prior,responded:true},ms=lotus&&!prior.opened?1600:sparks?1450:id.startsWith('CAKE-')?380:id==='GIFT-24'?2200:config.responseMs;
    if(lotus)state.opened=true;if(sparks&&!this.reduced)this.startSparks(m);
    if(id==='GIFT-01')state.lit=true;
    else if(id==='GIFT-10')state.patternIndex=prior.patternIndex?0:1;
    else if(id==='GIFT-17')state.settledAngle=prior.settledAngle?0:35;
    else if(id==='GIFT-20')delete state.settledTilt;
    else if(id==='GIFT-21')state.settledAngle=prior.settledAngle?0:5;
    else if(!id.startsWith('CAKE-')&&config.stateKey==='opened')state.opened=true;
    else if(!id.startsWith('CAKE-')&&config.stateKey==='unfolded')state.unfolded=true;
    else if(!id.startsWith('CAKE-')&&config.stateKey==='relaxed')state.relaxed=true;
    const home=this.display.homes.get(id)!.clone(),baseline=new Map<T.Object3D,{position:T.Vector3;rotation:T.Euler}>();
    m.root.traverse(o=>baseline.set(o,{position:o.position.clone(),rotation:o.rotation.clone()}));
    let lightStarted=false;
    const repeat=!!(prior.opened||prior.unfolded||prior.relaxed);
    const secondary:Record<number,string>={4:'PIVOT_pencil',6:'PIVOT_leaf',7:'PIVOT_bookmark',12:'PIVOT_paper_flower',16:'PIVOT_needle',19:'PIVOT_cord_bead'};
    const rigid:Record<number,[string,'x'|'y'|'z',number,number]>={10:['PIVOT_pattern','z',(prior.patternIndex??0)*Math.PI/6,(state.patternIndex??0)*Math.PI/6],17:['PIVOT_globe','y',(prior.settledAngle??0)*Math.PI/180,(state.settledAngle??0)*Math.PI/180],21:['PIVOT_cup','y',(prior.settledAngle??0)*Math.PI/180,(state.settledAngle??0)*Math.PI/180]};
    this.tween('response',id==='GIFT-20'?760:this.reduced?140:ms,t=>{
      if(id==='GIFT-01'){
        if(!lightStarted){lightStarted=true;this.states={...this.states,[id]:state};commit(state);}
        const level=this.reduced?1:prior.lit?1+.06*Math.sin(t*Math.PI):smooth(t);
        m.light(level);this.updateLamp();this.lampLight.intensity=.9*level;return;
      }
      if(id==='GIFT-20'){m.miniCamera?.feedback(t,this.reduced);return;}
      if(this.reduced)return;
      else if(id==='GIFT-02'){
        const scale=m.root.scale.x,d=.044*scale*Math.sin(Math.PI*t);m.root.position.copy(home).add(new T.Vector3(-d,0,.013*scale*Math.sin(Math.PI*t*2)));m.root.rotation.y=.12*Math.sin(Math.PI*t*2);
        for(const name of ['PIVOT_wheel_FL','PIVOT_wheel_FR','PIVOT_wheel_RL','PIVOT_wheel_RR']){const w=m.node(name);if(w)w.rotation.z=-d/(.012*scale);}
      }else if(lotus&&!prior.opened)m.sampleClip(smooth(t));
      else if(sparks)this.updateSparks(m,t);
      else if(id.startsWith('CAKE-'))this.key.intensity=2.1+.12*Math.sin(t*Math.PI);
      else if(rigid[age]){const [name,axis,a,b]=rigid[age],node=m.node(name);if(node)node.rotation[axis]=T.MathUtils.lerp(a,b,smooth(t));if(age===10&&t>.5)m.pattern(state.patternIndex??0);}
      else if(repeat&&secondary[age]){const node=m.node(secondary[age]);if(node){const rest=baseline.get(node)!;if(age===4||age===7||age===19)node.position.y=rest.position.y+.003*Math.sin(t*Math.PI);else node.rotation.x=rest.rotation.x+.06*Math.sin(t*Math.PI);}}
      else m.sampleClip(id==='GIFT-24'?t:smooth(t));
    },()=>{this.clearSparks();m.root.position.copy(home);m.root.rotation.y=0;m.reset(state);this.states={...this.states,[id]:state};this.cloth();this.updateLamp();commit(state);done();});
  }
  stopResponse(states:GiftStates){
    this.starResponse=null;this.starPhase=0;this.starTime=0;
    this.clearSparks();this.tweens.delete('response');this.tweens.delete('response-rest');this.states=states;this.cloth();
    const poses=new Map<T.Object3D,{position:T.Vector3;quaternion:T.Quaternion;targetPosition:T.Vector3;targetQuaternion:T.Quaternion}>();
    this.display.models.forEach((m,id)=>{
      m.root.traverse(o=>poses.set(o,{position:o.position.clone(),quaternion:o.quaternion.clone(),targetPosition:new T.Vector3(),targetQuaternion:new T.Quaternion()}));
      m.reset(states[id]);m.root.position.copy(this.display.homes.get(id)!);m.root.rotation.y=0;
      m.root.traverse(o=>{const p=poses.get(o)!;p.targetPosition.copy(o.position);p.targetQuaternion.copy(o.quaternion);if(!document.hidden&&!this.reduced){o.position.copy(p.position);o.quaternion.copy(p.quaternion);}});
    });
    this.updateLamp();
    if(document.hidden||this.reduced){this.draw();return;}
    this.tween('response-rest',150,t=>{const r=smooth(t);poses.forEach((p,o)=>{o.position.copy(p.position).lerp(p.targetPosition,r);o.quaternion.copy(p.quaternion).slerp(p.targetQuaternion,r);});},()=>this.updateLamp());this.draw();
  }
  stabilize(age:number,states:GiftStates,opened:boolean){
    this.heroCache.clear();
    this.compositionDragging=false;this.compositionKey='';this.panoramaTarget=null;
    this.cakeLampLevel=Number(this.cakeLampOn);
    this.clearSparks();this.tweens.clear();this.pendingCollectionCursor=null;window.cancelAnimationFrame(this.frame);this.frame=0;if(this.next){this.release(this.next);this.next=null;}
    if(this.display.age!==age){this.release(this.display);this.display=this.makeDisplay(age,states);}this.age=age;this.layout();this.progress=0;this.states=states;this.phase=opened?'table':'closed';this.focused=this.mode==='future'&&this.futureExhibit?this.futureExhibit.model.id as BirthdayObject:null;this.renderer.domElement.style.opacity='1';this.entry.reset();this.entry.setOpacity(1);this.openingRoom(opened?1:0);this.entry.sampleClip(opened?1:0);this.entry.root.traverse(o=>{if(o instanceof T.Mesh)o.castShadow=!opened;});this.closedShadow.visible=!opened;this.closedShadow.material.opacity=.14;this.table.root.visible=opened;this.collection.root.visible=opened;this.collection.setMode(this.mode==='table'?'table':'collection');
    this.display.models.forEach((m,id)=>{m.reset(states[id]);m.setOpacity(opened&&this.mode!=='future'&&(this.mode!=='collection'||id.startsWith('CAKE-'))?1:0);});this.clipSurface(false);this.poseDisplay(this.display);this.overview=this.heroPoseFor(this.display);this.cloth();this.collection.setAge(age,false);this.collection.reveal(opened?1:0);this.applyPose(opened?(this.mode==='collection'?this.collectionPose():this.mode==='future'&&this.futureExhibit?this.near(this.futureExhibit.model.id as BirthdayObject):this.overview):this.closed());this.draw();
  }
  private compositionLayout(state=this.collectionState):AstraLayout{if(this.mode==='table')return this.display.age===24?'hero':'original';if(this.mode!=='collection'||state.view==='all')return 'original';return state.view==='focus'&&state.focusAge?{focusAge:state.focusAge}:{groupIndex:state.groupIndex};}
  private syncComposition(){
    if(this.compositionDragging)return;
    const layout=this.compositionLayout(),key=JSON.stringify([layout,this.width,this.height,collectionFontScale()]);
    if(key===this.compositionKey)return;
    const first=!this.compositionKey,from=this.collection.snapshot(),to=this.collection.arrangement(layout,this.width,this.height);this.compositionKey=key;this.tweens.delete('composition');
    if(first||this.reduced||this.phase!=='table')this.collection.present(to,to,1);
    else this.tween('composition',320,t=>this.collection.present(from,to,smooth(t)));
  }
  private collectionPose():Pose{
    if(this.collectionFutureRecord){const target=this.collection.futureCells.get(this.collectionFutureRecord)?.position.clone();if(target)return this.archivesPose(target);}
    if(this.collectionState.view==='all'){const points:T.Vector3[]=[];for(const cell of [...this.collection.cells.values(),this.collection.replay,...this.collection.futureCells.values()]){cell.updateMatrixWorld(true);points.push(...boxPoints((this.collection.cells.has(String(cell.userData.archiveAge))?this.collection.boundsFor(cell.userData.archiveAge,this.collection.arrangement('original',this.width,this.height)):new T.Box3().setFromObject(cell))));}for(const [id,m]of this.display.models)if(id.startsWith('CAKE-'))points.push(...boxPoints(new T.Box3().setFromObject(m.root)));return this.width/this.height>1.25?fitCamera(points,this.width,this.height,38,0,'all'):fitCamera(points,this.width,this.height,66,0,'all',{x:[.04,.96],y:[.15,.81]});}
    const ages=this.collectionState.view==='focus'&&this.collectionState.focusAge?[this.collectionState.focusAge]:COLLECTION_GROUPS[this.collectionState.groupIndex];
    const points:T.Vector3[]=[];
    for(const age of ages){const cell=this.collection.cells.get(String(age))!;cell.updateMatrixWorld(true);const bounds=this.collection.boundsFor(age,this.collection.arrangement(this.compositionLayout(),this.width,this.height));points.push(...boxPoints(bounds));}
    {
      if(this.collectionState.view==='group'&&enlargedCollection(collectionFontScale()))return readingGroupPose(this.width,this.height);
      const recipe=astraRecipe(this.collectionState.view==='focus'?'focus':'group',this.width,this.height);return fitCamera(points,this.width,this.height,recipe.pitch,recipe.yaw,this.collectionState.view==='focus'?'focus':'group',recipe.region);
    }
  }
  private archivesPose(target:T.Vector3):Pose{
    const distance=Math.max(6.4,this.width/this.height>1.25?this.width/this.height*4.1:6.4)/(2*Math.tan(21*Math.PI/180)*(this.width/this.height));
    const angle=(this.width/this.height>1.25?38:66)*Math.PI/180;
    return {target,position:target.clone().addScaledVector(new T.Vector3(0,Math.sin(angle),Math.cos(angle)),distance),zoom:1};
  }
  private collectionTo(duration:number,done?:()=>void){this.cameraToPose(this.collectionPose(),duration,done,0,true);}
  getCollectionCursor(){return this.pendingCollectionCursor??this.collectionCursor;}
  setCollectionView(state:CollectionState,duration:number=INTERACTION_MOTION.group,done?:()=>void){
    const group=this.mode==='collection'&&this.collectionState.view==='group'&&state.view==='group';
    if(this.pendingCollectionCursor!==null)this.applyCollectionProgress(this.pendingCollectionCursor);
    this.pendingCollectionCursor=null;this.tweens.delete('camera');this.tweens.delete('composition');
    const cursor=this.collectionCursor;
    this.collectionState={...state,groupIndex:wrapGroup(state.groupIndex)};this.collectionFutureRecord=null;this.focused='COLLECTION';
    if(this.mode!=='collection')return;
    if(group){
      const delta=((state.groupIndex-cursor+12)%8+8)%8-4,target=cursor+delta;
      this.compositionDragging=true;
      if(this.reduced){this.applyCollectionProgress(target);this.draw();done?.();return;}
      this.tween('camera',duration,t=>this.applyCollectionProgress(T.MathUtils.lerp(cursor,target,navigationEase(t))),()=>{this.applyCollectionProgress(target);done?.();});
    }else{this.compositionDragging=false;this.collectionCursor=this.collectionState.groupIndex;this.collectionTo(duration,done);}
  }
  previewCollectionProgress(cursor:number){this.pendingCollectionCursor=cursor;this.tweens.delete('camera');this.schedule();}
  private applyCollectionProgress(cursor:number){
    if(this.mode!=='collection'||this.collectionState.view!=='group')return;
    const low=Math.floor(cursor),u=cursor-low,prior=this.collectionState;
    this.collectionState={view:'group',groupIndex:wrapGroup(low),focusAge:null};const from=this.collectionPose();
    this.collectionState={...this.collectionState,groupIndex:wrapGroup(low+1)};const to=this.collectionPose();
    this.compositionDragging=true;this.tweens.delete('composition');
    const a=this.collection.arrangement(this.compositionLayout({...prior,groupIndex:wrapGroup(low)}),this.width,this.height),b=this.collection.arrangement(this.compositionLayout({...prior,groupIndex:wrapGroup(low+1)}),this.width,this.height);
    this.collection.presentGroup(a,b,u);this.compositionKey='drag';this.collectionState=prior;this.collectionCursor=cursor;
    this.applyPose({position:from.position.clone().lerp(to.position,u),target:from.target.clone().lerp(to.target,u),zoom:T.MathUtils.lerp(from.zoom,to.zoom,u)});
  }
  focusCollectionAge(age:number){if(this.mode!=='collection')return;this.setCollectionView({view:'focus',groupIndex:groupForAge(age,this.collectionState.groupIndex),focusAge:age},INTERACTION_MOTION.enter);}
  focusFutureRecord(id:string){if(this.mode!=='collection'||!this.collection.futureCells.has(id))return;this.collectionFutureRecord=id;this.focused='COLLECTION';this.collectionTo(360);}
  private posterPose():Pose{const target=this.collection.posterTarget(),distance=1.35/(2*Math.tan(21*Math.PI/180)*(this.width/this.height));return {target,position:target.clone().add(new T.Vector3(.25,.25,distance)),zoom:1};}
  enterCollection(done:()=>void,side:CollectionSide=this.collectionSide,state?:CollectionState){
    if(this.mode==='table'){this.parentPose=this.focused==='POSTER'?this.posterPose():this.focused&&this.focused!=='COLLECTION'?this.near(this.focused):this.overview;this.parentFocus=this.focused==='COLLECTION'?null:this.focused;}
    this.mode='collection';this.compositionDragging=false;this.poseDisplay(this.display);this.collectionFutureRecord=null;this.collectionSide=side;this.collectionState=state??{view:'group',groupIndex:SIDE_GROUP[side],focusAge:null};this.collectionCursor=this.collectionState.groupIndex;this.focused='COLLECTION';this.cloth();
    this.display.models.forEach((m,id)=>m.setOpacity(id.startsWith('CAKE-')?1:0));this.collection.setMode('collection');this.collectionTo(INTERACTION_MOTION.enter,done);
  }
  leaveCollection(done:()=>void){
    this.collectionFutureRecord=null;
    const to=this.parentPose??this.overview;this.parentPose=null;this.mode='table';this.compositionDragging=false;this.poseDisplay(this.display);this.cloth();this.display.models.forEach(m=>m.setOpacity(1));this.focused=this.parentFocus;this.parentFocus=null;this.collection.setMode('table');this.collection.setAge(this.age,false);this.cameraToPose(to,INTERACTION_MOTION.return,done,0,true);return true;
  }
  restoreMode(mode:'table'|'collection'){this.mode=mode;this.collection.setMode(mode);}
  restorePresentation(mode:'table'|'collection',state:CollectionState,selected:BirthdayObject|'POSTER'|null,parentSelected?:BirthdayObject|'POSTER'|null){
    this.compositionDragging=false;this.compositionKey='';this.mode=mode;if(mode==='collection'){this.mode='table';this.poseDisplay(this.display);this.parentFocus=parentSelected??null;this.parentPose=parentSelected==='POSTER'?this.posterPose():parentSelected?this.near(parentSelected):this.overview;this.mode=mode;}this.collectionState={...state};this.collectionCursor=state.groupIndex;this.collection.setMode(mode);this.focused=mode==='collection'?'COLLECTION':selected;
    this.poseDisplay(this.display);this.display.models.forEach((m,id)=>m.setOpacity(mode==='table'||id.startsWith('CAKE-')?1:0));this.applyPose(mode==='collection'?this.collectionPose():selected==='POSTER'?this.posterPose():selected?this.near(selected):this.overview);this.draw();
  }
  prepareTable(){this.compositionDragging=false;this.mode='table';this.poseDisplay(this.display);this.parentPose=null;this.parentFocus=null;this.pan.set(0,0);this.collection.setMode('table');this.focused=null;}
  panCollection(dx:number,dy:number){if(this.mode!=='collection'||this.collectionState.view!=='group')return;this.setCollectionView({view:'group',groupIndex:wrapGroup(this.collectionState.groupIndex+((dx||dy)>0?1:-1)),focusAge:null});}
  async showFuture(record:FutureBirthdayRecord,giftId=record.gifts[0].id){const gift=record.gifts.find(g=>g.id===giftId);if(!gift)throw new Error('Missing birthday gift');const request=++this.futureToken;await this.assets.loadIds([gift.assetId]);if(this.disposed||request!==this.futureToken){if(!this.disposed)this.assets.keepOnly([...this.display.models.keys(),...(this.futureExhibit?[this.futureExhibit.model.id]:[])]);return false;}const model=this.assets.instance(gift.assetId);model.reset();this.futureExhibit?.model.dispose();this.futureExhibit={model,record,giftId};this.mode='future';this.scene.add(model.root);this.display.models.forEach(m=>m.setOpacity(0));model.root.updateMatrixWorld(true);const b=new T.Box3().setFromObject(model.root),size=b.getSize(new T.Vector3());model.root.scale.setScalar(2.4/Math.max(size.x,size.y,.01));const point=this.at(.5,.43,size.y*model.root.scale.x*.45,this.placementPoseFor(this.age));point.y=-b.min.y*model.root.scale.x-.024;model.root.position.copy(point);this.cameraTo(gift.assetId as BirthdayObject,550);this.assets.keepOnly([...this.display.models.keys(),gift.assetId]);this.draw();return true;}
  returnFuture(done:()=>void){this.futureToken++;this.futureExhibit?.model.dispose();this.futureExhibit=null;this.mode='collection';this.collection.setMode('collection');this.display.models.forEach((m,id)=>m.setOpacity(id.startsWith('CAKE-')?1:0));this.assets.keepOnly([...this.display.models.keys()]);this.cameraTo('COLLECTION',500,done);}
  cancelFuture(){this.futureToken++;}
  private startSparks(model:BirthdayModel){this.clearSparks();const p=new Float32Array(40*3),g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(p,3));const m=new T.PointsMaterial({color:'#f1cc91',size:.016,transparent:true,opacity:.85,depthWrite:false});this.spark=new T.Points(g,m);this.spark.userData.nonInteractive=true;model.root.add(this.spark);}
  private updateSparks(model:BirthdayModel,t:number){if(!this.spark)return;const markers:T.Object3D[]=[];model.root.traverse(o=>{if(o.name.startsWith('EMITTER_spark_'))markers.push(o);});const pos=this.spark.geometry.getAttribute('position') as T.BufferAttribute;for(let i=0;i<40;i++){const marker=markers[i%markers.length];if(!marker)continue;const p=model.root.worldToLocal(marker.getWorldPosition(new T.Vector3())),r=(t*3+i*.173)%1,angle=i*2.399;pos.setXYZ(i,p.x+Math.cos(angle)*.012*r,p.y+.015*r*(1-r),p.z+Math.sin(angle)*.010*r);}pos.needsUpdate=true;(this.spark.material as T.PointsMaterial).opacity=.8*Math.sin(Math.PI*t);}
  private clearSparks(){if(this.spark){this.spark.geometry.dispose();(this.spark.material as T.Material).dispose();this.spark.removeFromParent();this.spark=null;}}
  refresh(){this.resize();if(this.tweens.size)this.schedule();}
  refreshFocus(){this.draw();}
  pick(x:number,y:number):BirthdayObject|'POSTER'|'COLLECTION'|'background'{
    this.ray.setFromCamera(new T.Vector2(x/this.width*2-1,1-y/this.height*2),this.camera);let nearest=Infinity,result:BirthdayObject|'POSTER'|'COLLECTION'|'background'='background';
    for(const [id,m]of this.display.models){if(!m.root.visible)continue;const hits=this.ray.intersectObject(m.root,true).filter(h=>{if(h.object.userData.nonInteractive)return false;for(let n:T.Object3D|null=h.object;n;n=n.parent)if(!n.visible)return false;return true;});if(hits[0]&&hits[0].distance<nearest){nearest=hits[0].distance;result=id;}}
    for(const [id,g]of [['POSTER',this.collection.poster],['COLLECTION',this.collection.board]] as const){if(!g.visible)continue;const h=this.ray.intersectObject(g,true);const hits=h.filter(hit=>{let o:T.Object3D|null=hit.object;while(o){if(!o.visible)return false;o=o.parent;}return !hit.object.userData.nonInteractive;});if(hits[0]&&hits[0].distance<nearest){nearest=hits[0].distance;result=id;if(id==='COLLECTION')this.collectionSide=hits[0].object.userData.collectionSide??'left';}}return result;
  }
  pickCollectionAge(x:number,y:number):number|undefined{
    this.ray.setFromCamera(new T.Vector2(x/this.width*2-1,1-y/this.height*2),this.camera);const hits=[...this.collection.cells].filter(([,c])=>c.visible).flatMap(([age,c])=>this.ray.intersectObject(c,true).map(h=>({age:Number(age),distance:h.distance}))).sort((a,b)=>a.distance-b.distance);return hits[0]?.age;
  }
  private project(p:T.Vector3){const v=p.clone().project(this.camera);return [(v.x+1)/2*this.width,(1-v.y)/2*this.height];}
  private projection(object:T.Object3D,precise=false,clip=true):GiftProjection|undefined{
    if(!object.visible)return;
    const frustum=new T.Frustum().setFromProjectionMatrix(new T.Matrix4().multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse)),pts:number[][]=[];
    object.traverse(o=>{if(!(o instanceof T.Mesh)||o.userData.nonInteractive||!frustum.intersectsObject(o))return;for(let n:T.Object3D|null=o;n;n=n.parent)if(!n.visible)return;const p=o.geometry.getAttribute('position');for(let i=0;i<p.count;i+=(precise||p.count<64)?1:6){const v=new T.Vector3().fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld);if(v.clone().applyMatrix4(this.camera.matrixWorldInverse).z>=-this.camera.near)continue;pts.push(this.project(v));}});
    if(!pts.length)return;
    pts.sort((a,b)=>a[0]-b[0]||a[1]-b[1]);const cross=(a:number[],b:number[],c:number[])=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);
    const half=(list:number[][])=>{const out:number[][]=[];for(const p of list){while(out.length>=2&&cross(out[out.length-2],out[out.length-1],p)<=0)out.pop();out.push(p);}return out.slice(0,-1);};let hull=[...half(pts),...half([...pts].reverse())];
    for(const[axis,bound,sign]of (clip?[[0,0,1],[0,this.width,-1],[1,0,1],[1,this.height,-1]]:[])){
      const clipped:number[][]=[];for(let i=0;i<hull.length;i++){const a=hull[i],b=hull[(i+1)%hull.length],insideA=(a[axis]-bound)*sign>=0,insideB=(b[axis]-bound)*sign>=0;if(insideA)clipped.push(a);if(insideA!==insideB){const t=(bound-a[axis])/(b[axis]-a[axis]);clipped.push([T.MathUtils.lerp(a[0],b[0],t),T.MathUtils.lerp(a[1],b[1],t)]);}}hull=clipped;if(hull.length<3)return;
    }
    const xs=hull.map(p=>p[0]),ys=hull.map(p=>p[1]),x=Math.min(...xs),y=Math.min(...ys),width=Math.max(44,Math.max(...xs)-x),height=Math.max(44,Math.max(...ys)-y);
    if(Math.max(...xs)-x<44||Math.max(...ys)-y<44)return {x:x-(width-(Math.max(...xs)-x))/2,y:y-(height-(Math.max(...ys)-y))/2,width,height,polygon:'inset(0)',padded:true};
    return {x,y,width,height,polygon:`polygon(${hull.map(p=>`${(p[0]-x)/width*100}% ${(p[1]-y)/height*100}%`).join(',')})`};
  }
  private syncPanorama(){
    const enabled=this.mode==='collection'&&this.collectionState.view==='all';if(enabled===this.panoramaTarget)return;
    const initial=this.panoramaTarget===null,from=this.panoramaCoverage,to=Number(enabled);this.panoramaTarget=enabled;this.tweens.delete('panorama');
    const apply=(amount:number)=>{this.panoramaCoverage=amount;this.table.setPanoramaCoverage(amount);this.collection.environmentSurface.scale.set(BIRTHDAY_ROOM.scale*(1+.6*amount),BIRTHDAY_ROOM.scale,BIRTHDAY_ROOM.scale*(1+.6*amount));};
    if(initial||this.reduced||this.phase!=='table')apply(to);else this.tween('panorama',320,t=>apply(T.MathUtils.lerp(from,to,smooth(t))));
  }
  private starsActive(){return this.phase==='table'&&this.mode==='table'&&this.focused==='GIFT-24'&&!!this.states['GIFT-24']?.opened&&!this.tweens.has('camera');}
  pauseStars(value:boolean){this.starPaused=value;this.starTime=0;if(!value)this.schedule();}
  touchStar(id:StarId){if(!this.starsActive()||this.starResponse)return false;this.starResponse={id,start:performance.now()};this.schedule();return true;}
  private updateStars(time:number){
    const rig=this.display.models.get('GIFT-24')?.twinStars;if(!rig)return;
    if(!this.starsActive()){this.starResponse=null;this.starTime=0;
      // The opening tween owns rise progress. All other inactive states are endpoints.
      if(!(this.focused==='GIFT-24'&&this.tweens.has('response')))rig.pose(this.states['GIFT-24']?.opened?1:0,0);
      return;
    }
    if(!this.reduced&&!this.starPaused&&this.starTime)this.starPhase+=(time-this.starTime)/1000;
    this.starTime=time;rig.pose(1,this.reduced?0:this.starPhase);if(!this.reduced)rig.breathe(time/1000);
    if(this.starResponse){const t=(time-this.starResponse.start)/1500;if(t>=1)this.starResponse=null;else rig.feedback(this.starResponse.id,t,this.reduced);}
  }
  private renderScene(){this.syncComposition();this.syncPanorama();{const local=this.mode==='collection'&&this.collectionState.view!=='all';for(const d of [this.display,this.next])if(d)for(const [id,m]of d.models){if(this.mode==='collection')m.root.visible=!local&&id.startsWith('CAKE-');}this.collection.replay.visible=this.mode==='collection'&&this.collectionState.view==='all';}
    this.collection.board.visible=!(this.mode==='table'&&this.focused==='GIFT-24');this.updateCakeLamp();this.scene.updateMatrixWorld(true);this.scene.traverse(o=>o.userData.syncBirthdayBatch?.());this.renderer.render(this.scene,this.camera);}
  private draw(){
    if(this.disposed)return;this.scene.updateMatrixWorld(true);this.camera.updateMatrixWorld();this.renderScene();
    const objects:SceneFrame['objects']={},anchors:SceneFrame['anchors']={};
    const active=document.querySelector<HTMLElement>('[data-object-id][data-pressed]')??document.activeElement,outline=active instanceof HTMLElement&&(active.matches(':focus-visible')||active.dataset.pressed)?active.dataset.objectId:undefined;
    for(const d of [this.display,this.next])if(d)for(const [id,m]of d.models){if(this.phase==='table'&&this.mode==='table'){const p=this.projection(m.root,id===outline);if(p&&id===outline)p.silhouette=focusSilhouette(m.root,this.camera,p,this.width,this.height);objects[id]=p;}anchors[id]=this.project(m.root.position.clone());}
    anchors.clothLeft=this.project(new T.Vector3(-1,0,1));anchors.clothRight=this.project(new T.Vector3(1,0,1));
    const cornerMaterials=[[-.999,-.999],[-.999,.999],[.999,-.999],[.999,.999]].map(([x,y])=>{this.ray.setFromCamera(new T.Vector2(x,y),this.camera);const hits=this.ray.intersectObjects([this.table.root,this.collection.root],true).filter(h=>{let o:T.Object3D|null=h.object;while(o){if(!o.visible)return false;o=o.parent;}return !(h.object instanceof T.Mesh)||!h.object.userData.nonInteractive;});const hit=hits[0];return !hit?'outside':hit.object.parent===this.table.root?'table':'wall';});const surfaceCorners=cornerMaterials.map(v=>v!=='outside');
    this.collection.visibleFuture(this.camera);
    const cells:Record<string,GiftProjection>={};
    if(this.phase==='table'&&this.mode==='collection'){
      const ages=this.collectionState.view==='all'?Array.from({length:24},(_,i)=>i+1):this.collectionState.view==='focus'?[this.collectionState.focusAge!]:COLLECTION_GROUPS[this.collectionState.groupIndex];
      for(const age of ages){const p=this.projection(this.collection.cells.get(String(age))!);if(p)cells[String(age)]={...p,polygon:'inset(0)'};}
      if(this.collectionState.view==='all')for(const [id,cell]of this.collection.futureCells){const p=this.projection(cell,false,false);if(p)cells['future:'+id]=p;}
    }
    const futureObjects:Record<string,GiftProjection>={};if(this.mode==='future'&&this.futureExhibit){const p=this.projection(this.futureExhibit.model.root);if(p)futureObjects[this.futureExhibit.giftId]=p;}
    const collectionEdges:Partial<Record<CollectionSide,GiftProjection>>={};for(const side of (this.mode==='table'&&this.collection.board.visible?['left','back','right','front']:[]) as CollectionSide[]){const pts=[...this.collection.cells.values()].filter(g=>g.visible&&g.userData.collectionSide===side).map(g=>this.projection(g)).filter((p):p is GiftProjection=>!!p);if(pts.length){const x=Math.min(...pts.map(p=>p.x)),y=Math.min(...pts.map(p=>p.y));collectionEdges[side]={x,y,width:Math.max(...pts.map(p=>p.x+p.width))-x,height:Math.max(...pts.map(p=>p.y+p.height))-y,polygon:'inset(0)'};}}
    const frame:SceneFrame={collectionEdges,collectionDetail:this.collectionState.view!=='all',collectionView:this.collectionState.view,groupIndex:this.collectionState.groupIndex,focusAge:this.collectionState.focusAge,futureObjects,futureRecordId:this.futureExhibit?.record.id,mode:this.mode,cells,collection:this.phase==='table'?this.projection(this.collection.board):undefined,replay:this.phase==='table'&&this.mode==='collection'&&this.collectionState.view==='all'?this.projection(this.collection.replay):undefined,poster:this.phase==='table'&&this.mode==='table'?this.projection(this.collection.poster):undefined,objects,camera:this.camera.position.toArray(),target:this.target.toArray(),anchors,surfaceCorners};
    if(this.starsActive()){frame.stars={};const rig=this.display.models.get('GIFT-24')!.twinStars!;for(const id of ['milk','cocoa'] as const){const p=this.projection(rig.stars[id]);if(p){const width=Math.max(44,p.width),height=Math.max(44,p.height);frame.stars[id]={...p,x:p.x+(p.width-width)/2,y:p.y+(p.height-height)/2,width,height,polygon:'inset(0)'};}}if(!this.reduced&&!this.starPaused||this.starResponse)this.schedule();}this.renderer.domElement.dataset.stars=JSON.stringify(frame.stars??{});this.renderer.domElement.dataset.starResponse=JSON.stringify(this.starResponse);frame.cakeLamp=this.lampProjection();this.renderer.domElement.dataset.cakeLamp=JSON.stringify({on:this.cakeLampOn,level:this.cakeLampLevel,intensity:this.cakeLamp?.intensity??0,projection:frame.cakeLamp});
    if(this.phase==='table'&&this.mode==='table'&&this.collection.board.visible&&(this.display.age===6||this.display.age===24))frame.readingObstacles=[...this.collection.cells.values()].filter(c=>c.visible).map(c=>this.projection(c)).filter((p):p is GiftProjection=>!!p);
    Object.assign(this.renderer.domElement.dataset,{compositionVersion:'astra-rollout-1',fontScale:String(collectionFontScale()),composition:JSON.stringify(this.compositionLayout()),placementMatrices:JSON.stringify(Object.fromEntries([...this.display.models].map(([id,m])=>[id,m.root.matrixWorld.toArray()]))),camera:JSON.stringify(frame.camera),target:JSON.stringify(frame.target),anchors:JSON.stringify(anchors),cornerMaterials:JSON.stringify(cornerMaterials),corners:JSON.stringify(surfaceCorners),objects:JSON.stringify(objects),mode:this.mode,cells:JSON.stringify(cells),collectionProjection:JSON.stringify(frame.collection),collectionEdges:JSON.stringify(collectionEdges),collectionDetail:String(this.collectionState.view!=='all'),collectionView:this.collectionState.view,groupIndex:String(this.collectionState.groupIndex),focusAge:String(this.collectionState.focusAge),collectionCursor:String(this.collectionCursor),replayProjection:JSON.stringify(frame.replay),posterProjection:JSON.stringify(frame.poster),collection:JSON.stringify(this.collection.stats()),age:String(this.age),transition:JSON.stringify(this.next?{from:this.age,to:this.next.age,progress:this.progress}:null),focus:this.focused??'overview',assets:JSON.stringify(this.assets.stats()),render:JSON.stringify({calls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,interval:this.interval,sparks:this.spark?this.spark.geometry.getAttribute('position').count:0,geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures}),states:JSON.stringify(this.states),pivots:JSON.stringify(Object.fromEntries([...this.display.models].map(([id,m])=>[id,m.pivots()])))});
    this.onFrame(frame);
  }
  dispose(){
    this.foodStudio?.dispose();this.foodStudio=null;this.closedShadow.material.map?.dispose();
    this.cakeLamp?.removeFromParent();this.cakeLamp?.dispose();this.cakeLamp=null;
    if(this.disposed)return;this.disposed=true;window.cancelAnimationFrame(this.frame);this.tweens.clear();this.resizeObserver.disconnect();this.fontObserver.disconnect();this.release(this.display);if(this.next)this.release(this.next);this.entry.dispose();this.closedShadow.geometry.dispose();this.closedShadow.material.dispose();this.collection.dispose();this.futureToken++;this.futureExhibit?.model.dispose();this.futureExhibit=null;
    const materials=new Set<T.Material>(),geometries=new Set<T.BufferGeometry>(),textures=new Set<T.Texture>();this.table.root.traverse(o=>{if(o instanceof T.Mesh){geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material]){materials.add(m);for(const v of Object.values(m))if(v instanceof T.Texture)textures.add(v);}}});textures.forEach(t=>t.dispose());geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());this.key.shadow.map?.dispose();this.table.disposeYear();
    this.renderer.domElement.removeEventListener('webglcontextlost',this.contextLost);this.renderer.dispose();this.renderer.forceContextLoss();this.renderer.domElement.remove();
  }
}


