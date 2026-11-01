import * as T from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import type { GLTF } from 'three/addons/loaders/GLTFLoader.js';
import { ASSET_URLS, ASSET_META } from './assetUrls';
import { visibleObjects, FIRST_AGE, LAST_AGE, birthdayRepository } from './birthdayRepository';
import type { BirthdayObject, GiftState } from './types';
import type { BirthdayLandingPlan } from './birthdayLanding';
import { batchRepeatedMeshes } from './batchRepeatedMeshes';
import { batchShadowGeometry } from './batchShadowGeometry';
import {makeTwinStars} from './twinStars';
import type {TwinStars} from './twinStars';
import {adaptKeepsakeBox} from './keepsakeBox';
import {makeMiniCamera} from './miniCamera';
import type {MiniCamera} from './miniCamera';

function disposeAsset(asset: GLTF) {
  const geometry = new Set<T.BufferGeometry>(), materials = new Set<T.Material>(), textures = new Set<T.Texture>();
  asset.scene.traverse(object => {
    if (!(object instanceof T.Mesh)) return;
    geometry.add(object.geometry);
    for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
      materials.add(material);
      for (const value of Object.values(material)) if (value instanceof T.Texture) textures.add(value);
    }
  });
  geometry.forEach(value => value.dispose());
  materials.forEach(value => value.dispose());
  textures.forEach(value => { value.dispose(); if (typeof value.image?.close === 'function') value.image.close(); });
}

export class BirthdayModel {
  readonly root: T.Group;
  readonly twinStars?:TwinStars;
  readonly miniCamera?:MiniCamera;
  readonly mixer: T.AnimationMixer;
  readonly clip: T.AnimationClip | undefined;
  private materials = new Set<T.Material>();
  private ownGeometry = new Set<T.BufferGeometry>();
  private ownTextures = new Set<T.Texture>();
  private rest = new Map<T.Object3D, { position: T.Vector3; rotation: T.Euler }>();
  private action: T.AnimationAction | undefined;
  private flames:Array<{anchor:T.Object3D;flame:T.Mesh}>=[];
  private batches:T.InstancedMesh[]=[];
  constructor(readonly id: string, asset: GLTF) {
    this.root = asset.scene.clone(true);
    this.root.name = id;
    adaptKeepsakeBox(id,this.root,this.ownGeometry);
    if(id==='GIFT-20')this.miniCamera=makeMiniCamera(this.root,this.ownGeometry);
    if(id==='DISPLAY-COLLECTION')makeMiniCamera(this.root.getObjectByName('DISPLAY_GIFT_20')!,this.ownGeometry,true);
    if(id==='GIFT-24')this.twinStars=makeTwinStars(this.root,this.ownGeometry);
    if(id==='DISPLAY-COLLECTION'){const group=this.root.getObjectByName('DISPLAY_GIFT_24')!;makeTwinStars(group,this.ownGeometry,true).disposeUnused();}
    const materialCopies=new Map<T.Material,T.Material>();
    this.root.traverse(object => {
      if(object!==this.root)this.rest.set(object, { position: object.position.clone(), rotation: object.rotation.clone() });
      if (!(object instanceof T.Mesh)) return;
      object.castShadow = !object.userData.nonInteractive; object.receiveShadow = id==='CAKE-06'||id==='CAKE-24';
      const clone = (material: T.Material) => { const existing=materialCopies.get(material);if(existing)return existing;const value = material.clone();value.forceSinglePass=true;value.userData.baseOpacity=value.opacity;value.userData.baseTransparent=value.transparent;value.userData.baseDepthWrite=value.depthWrite;this.materials.add(value);materialCopies.set(material,value);if(material.name.startsWith('Twin_star_')||material.name.startsWith('Mini_camera_'))material.dispose();return value; };
      object.material = Array.isArray(object.material) ? object.material.map(clone) : clone(object.material);
    });
    if(id==='CAKE-24')for(const material of this.materials){
      if(material instanceof T.MeshStandardMaterial&&material.name==='MAT24_snow_cream'){
        for(const texture of new Set([material.map,material.normalMap,material.roughnessMap,material.metalnessMap]))if(texture){texture.anisotropy=4;texture.needsUpdate=true;}
      }
    }
    if(id==='ENTRY-GIFTBOX'||id==='BOX-INTERIOR'){
      const canvas=document.createElement('canvas');canvas.width=canvas.height=128;
      const context=canvas.getContext('2d')!,pixels=context.createImageData(128,128);
      for(let y=0;y<128;y++)for(let x=0;x<128;x++){
        const i=(y*128+x)*4,v=128+1.3*Math.sin(x*.13+Math.sin(y*.08))+.6*Math.sin(y*.11+x*.025);
        pixels.data[i]=pixels.data[i+1]=pixels.data[i+2]=v;pixels.data[i+3]=255;
      }
      context.putImageData(pixels,0,0);const fiber=new T.CanvasTexture(canvas);this.ownTextures.add(fiber);
      this.root.traverse(object=>{if(object instanceof T.Mesh)for(const m of Array.isArray(object.material)?object.material:[object.material]){
        if(m instanceof T.MeshStandardMaterial&&/paper|lining/.test(m.name)&&object.geometry.getAttribute('uv')){m.bumpMap=fiber;m.bumpScale=.0004;}
        if(m instanceof T.MeshPhysicalMaterial&&m.anisotropy>0&&!object.geometry.getAttribute('tangent'))m.anisotropy=0;
      }});
    }
    if(id.startsWith('CAKE-')){
      const source=this.root.getObjectByName('CAKE_'+id.slice(5)+'_ROOT')!;
      // Authored plate and food share one contact plane. Immutable source
      // geometry owns the three porcelain profiles; runtime never adds a layer.
      this.root.updateMatrixWorld(true);
      const anchors:T.Object3D[]=[];this.root.traverse(o=>{if(o.name.startsWith('ANCHOR_flame_')||o.name.startsWith('ANCHOR_lotus_flame_'))anchors.push(o);});
      const shape=new T.SphereGeometry(1,12,8),glow=new T.MeshBasicMaterial({color:'#ffd18d'});
      this.ownGeometry.add(shape);this.materials.add(glow);
      for(const anchor of anchors){
        const flame=new T.Mesh(shape,glow);flame.scale.set(.0017,.004,.0017);
        const position=anchor.getWorldPosition(new T.Vector3());this.root.worldToLocal(position);flame.position.copy(position);flame.position.y+=.0035;this.root.add(flame);this.flames.push({anchor,flame});
      }
    }
    this.mixer = new T.AnimationMixer(this.root);
    const clip=asset.animations.find(clip => clip.name === 'response' || clip.name === 'entry-open');
    this.clip=id==='GIFT-20'?undefined:id==='GIFT-24'&&clip?new T.AnimationClip(clip.name,clip.duration,clip.tracks.filter(track=>!track.name.startsWith('PIVOT_letter_fold.'))):clip;
    const shadow=batchShadowGeometry(this.root);if(shadow){this.ownGeometry.add(shadow.geometry);this.materials.add(shadow.material);}
    this.batches=batchRepeatedMeshes(this.root);
  }
  private syncFlames(){this.root.updateMatrixWorld(true);for(const {anchor,flame} of this.flames){flame.position.copy(this.root.worldToLocal(anchor.getWorldPosition(new T.Vector3())));flame.position.y+=.0035;}this.root.updateMatrixWorld(true);this.root.traverse(o=>o.userData.syncBirthdayBatch?.());}
  node(name: string) { return this.root.getObjectByName(name); }
  reset(state: GiftState = {}) {
    this.mixer.stopAllAction();
    this.rest.forEach((pose, object) => { object.position.copy(pose.position); object.rotation.copy(pose.rotation); });
    this.twinStars?.pose(state.opened?1:0,0);
    if (this.clip && (state.opened || state.unfolded || state.relaxed)) this.sampleClip(1);
    if (this.id === 'GIFT-10') { const node = this.node('PIVOT_pattern'); if (node) node.rotation.z = (state.patternIndex ?? 0) * Math.PI / 6;this.pattern(state.patternIndex??0); }
    if (this.id === 'GIFT-17') { const node = this.node('PIVOT_globe'); if (node) node.rotation.y = (state.settledAngle ?? 0) * Math.PI / 180; }
    // Legacy settledTilt describes the retired frame; every camera restores at rest.
    this.miniCamera?.feedback(0);
    if (this.id === 'GIFT-21') { const node = this.node('PIVOT_cup'); if (node) node.rotation.y = (state.settledAngle ?? 0) * Math.PI / 180; }
    if (this.id === 'GIFT-01') {
      this.light(state.lit ? 1 : 0);
      // Instance-only presentation: keep the authored wooden foot level while
      // the star face looks toward the visitor. Source and collection LOD stay intact.
      const angle=-Math.PI/6,pivot=.065;
      for(const name of ['Star_shell','Back_shell_seam']){const shell=this.node(name);if(shell){shell.rotation.x=angle;shell.position.set(0,pivot*(1-Math.cos(angle)),-pivot*Math.sin(angle));}}
    }if(this.id==='CAKE-24')this.setCakeLamp(0);this.syncFlames();
  }
  /** Camera fitting may sample clips, but cannot change the live interaction. */
  measure<R>(read:()=>R):R {
    const nodes:Array<{node:T.Object3D;position:T.Vector3;quaternion:T.Quaternion;scale:T.Vector3;visible:boolean}>=[];
    this.root.traverse(node=>nodes.push({node,position:node.position.clone(),quaternion:node.quaternion.clone(),scale:node.scale.clone(),visible:node.visible}));
    const colors=[...this.materials].filter((m):m is T.MeshStandardMaterial=>m instanceof T.MeshStandardMaterial).map(m=>({m,color:m.color.clone(),emissive:m.emissive.clone(),intensity:m.emissiveIntensity}));
    const rig=this.twinStars,progress=rig?.progress??0,phase=rig?.phase??0;
    const action=this.action,actionState=action?{time:action.time,enabled:action.enabled,paused:action.paused}:null;
    try{return read();}finally{
      if(this.action&&this.action!==action)this.action.stop();
      if(action&&actionState)Object.assign(action,actionState);
      nodes.forEach(({node,position,quaternion,scale,visible})=>{node.position.copy(position);node.quaternion.copy(quaternion);node.scale.copy(scale);node.visible=visible;});
      colors.forEach(({m,color,emissive,intensity})=>{m.color.copy(color);m.emissive.copy(emissive);m.emissiveIntensity=intensity;});rig?.restorePhase(progress,phase);this.syncFlames();
    }
  }
  sampleClip(ratio: number) {
    if (!this.clip) return;
    this.action ??= this.mixer.clipAction(this.clip);
    this.action.reset().setLoop(T.LoopOnce, 1); this.action.clampWhenFinished = true;
    this.action.enabled=true;this.action.paused=false;this.action.play(); this.action.time = T.MathUtils.clamp(this.id==='GIFT-24'?ratio*2200/1400:ratio, 0, 1) * this.clip.duration;
    this.mixer.update(0); this.action.paused = true;this.twinStars?.pose(T.MathUtils.clamp((ratio*2200-1300)/900,0,1),0);this.syncFlames();
  }
  pattern(index:number){for(const i of [0,1]){const group=this.node('PATTERN_'+i);if(group)group.visible=i===index;}}
  pivots(){const result:Record<string,{position:number[];rotation:number[]}>= {};this.root.traverse(o=>{if(o.name.startsWith('PIVOT_'))result[o.name]={position:o.position.toArray(),rotation:o.rotation.toArray().slice(0,3) as number[]};});return result;}
  light(value: number) {
    this.materials.forEach(material => {
      if (material instanceof T.MeshStandardMaterial && material.name === 'MAT_lamp_shell') {
        material.color.set(value?'#ffe6bb':'#fff9ee');
        material.emissive.set('#ffbc61'); material.emissiveIntensity = value * 1.15;
      }
    });
  }
  setOpacity(value: number) {
    this.root.visible = value > .002;
    this.materials.forEach(material => { material.transparent = value < .999||material.userData.baseTransparent; material.opacity = value*(material.userData.baseOpacity??1); material.depthWrite = value > .9&&material.userData.baseDepthWrite; });
  }
  setCakeLamp(value:number){
    if(this.id!=='CAKE-24')return;
    for(const material of this.materials)if(material instanceof T.MeshStandardMaterial){
      if(material.name==='MAT24_snow_top_warm')material.emissiveIntensity=0;
      if(material.name==='MAT24_warm_lamp_core'){
        const level=T.MathUtils.clamp(value,0,1);material.emissive.set('#ffd174');material.emissiveIntensity=1.65*level;
        material.color.set('#b9b6ac').lerp(new T.Color('#ffe5a6'),level);
      }
    }
  }
  setFoodEnvironment(texture:T.Texture){
    if(this.id!=='CAKE-06'&&this.id!=='CAKE-24')return;
    for(const material of this.materials)if(material instanceof T.MeshStandardMaterial){
      material.envMap=texture;material.envMapIntensity=/cherry/.test(material.name)?.70:/silver/.test(material.name)?.58:/porcelain|plate|tray/.test(material.name)?.34:/cocoa/.test(material.name)?.28:.18;
      material.needsUpdate=true;
    }
  }
  setEntryShellOpacity(value:number){
    if(this.id!=='ENTRY-GIFTBOX')return;
    this.root.visible=true;
    this.root.traverse(o=>{if(o instanceof T.Mesh){
      const materials=Array.isArray(o.material)?o.material:[o.material];
      if(materials.every(m=>m.name!=='MAT_apricot_satin')){
        o.visible=value>.002;for(const m of materials){m.transparent=value<.999;m.opacity=value;m.depthWrite=value>.9;}
      }
    }});
  }
  dispose() {
    this.batches.forEach(batch=>batch.dispose());this.batches=[];
    this.mixer.stopAllAction(); this.mixer.uncacheRoot(this.root);
    this.materials.forEach(material => material.dispose()); this.materials.clear(); this.ownGeometry.forEach(g=>g.dispose());this.ownGeometry.clear();this.ownTextures.forEach(t=>t.dispose());this.ownTextures.clear(); this.root.removeFromParent();
  }
}

/** One visit owns this bounded pool. Geometry/bitmap/texture are immutable
 * cache resources; each visible model owns cloned materials and its mixer. */
type AssetRequest = { id:string; promise:Promise<GLTF>|null; controller:AbortController; valid:boolean; stage:'queued'|'fetching'|'decoding' };
export class BirthdayAssets {
  private cache = new Map<string, GLTF>();
  private requests = new Map<string, AssetRequest>();
  private outstanding = new Set<AssetRequest>();
  private controller = new AbortController();
  private loader = new GLTFLoader();
  private active = 0;
  private queue: Array<() => void> = [];
  private disposed = false;
  private retained=new Set<string>(['ENTRY-GIFTBOX','BOX-INTERIOR','DISPLAY-COLLECTION']);
  private currentAge=FIRST_AGE;
  private pendingAge:number|null=null;
  private ageWindow=true;
  private windowVersion=0;
  private discardedDecodedResults=0;
  landing:BirthdayLandingPlan={mode:'table',initialAge:1,reason:'first'};
  get effectiveAge(){return this.currentAge;}
  private removeAbort: () => void;
  readonly fetched = new Set<string>();
  constructor(signal: AbortSignal) {
    const abort = () => this.dispose();
    signal.addEventListener('abort', abort, { once: true });
    this.removeAbort = () => signal.removeEventListener('abort', abort);
    if (signal.aborted) this.dispose();
  }
  private async reserve() {
    if(this.disposed)throw new DOMException('Birthday visit ended','AbortError');
    if(this.active>=2){await new Promise<void>(resolve=>this.queue.push(resolve));if(this.disposed)throw new DOMException('Birthday visit ended','AbortError');return;}
    this.active++;
  }
  private get(id: string): Promise<GLTF> {
    if (this.cache.has(id)) return Promise.resolve(this.cache.get(id)!);
    const existing=this.requests.get(id);if(existing)return existing.promise!;
    const task:AssetRequest={id,promise:null,controller:new AbortController(),valid:true,stage:'queued'};
    const request = (async () => {
      await this.reserve();
      try {
        if(this.disposed||!task.valid||!this.retained.has(id))throw new DOMException('Birthday request superseded','AbortError');
        const url = ASSET_URLS[id];
        if (!url) throw new Error(`生日模型 ${id} 尚未导出`);
        const requestController=task.controller,abort=()=>requestController.abort();
        this.controller.signal.addEventListener('abort',abort,{once:true});
        const timeout=window.setTimeout(abort,15000);
        let response:Response;let buffer:ArrayBuffer;
        task.stage='fetching';
        try{response=await fetch(url,{signal:requestController.signal,cache:'force-cache'});buffer=await response.arrayBuffer();}
        finally{window.clearTimeout(timeout);this.controller.signal.removeEventListener('abort',abort);}
        if(this.disposed||!task.valid||!this.retained.has(id))throw new DOMException('Birthday request superseded','AbortError');
        if (!response.ok) throw new Error(`生日模型加载失败 (${response.status})`);
        task.stage='decoding';
        const asset = await this.loader.parseAsync(buffer, new URL('.', url).href);
        // A retired decode can finish after the same id is requested again.
        // Membership alone is insufficient: only this live request may commit.
        if (this.disposed||!task.valid||!this.retained.has(id)||this.requests.get(id)!==task) { disposeAsset(asset);this.discardedDecodedResults++;throw new DOMException('Birthday request superseded', 'AbortError'); }
        this.cache.set(id, asset); this.fetched.add(id); return asset;
      } finally { const next=this.queue.shift();if(next)next();else this.active--; }
    })().finally(() => {if(this.requests.get(id)===task)this.requests.delete(id);this.outstanding.delete(task);});
    task.promise=request;this.requests.set(id,task);this.outstanding.add(task);return request;
  }
  async prepareInitial(landing:BirthdayLandingPlan={mode:'table',initialAge:1,reason:'first'}) { this.landing=landing;this.currentAge=landing.initialAge;await Promise.all([this.get('ENTRY-GIFTBOX'),this.get('BOX-INTERIOR'),this.get('DISPLAY-COLLECTION'),...(landing.mode==='table'?[this.loadAge(landing.initialAge)]:[])]);if(landing.mode==='table')this.trim(landing.initialAge); }
  private retain(ids:Iterable<string>){
    const keep=new Set(['ENTRY-GIFTBOX','BOX-INTERIOR','DISPLAY-COLLECTION',...ids]);
    this.retained=keep;this.windowVersion++;
    for(const [id,task]of this.requests)if(!keep.has(id)){task.valid=false;task.controller.abort();this.requests.delete(id);}
    for(const [id,asset]of this.cache)if(!keep.has(id)){disposeAsset(asset);this.cache.delete(id);}
  }
  async loadAge(age: number,fromAge=this.currentAge) {
    // Reserve before loading. Both visible endpoints keep their immutable
    // resources until the World releases the outgoing display at finishAge.
    this.ageWindow=true;this.currentAge=fromAge;this.pendingAge=age;
    this.retain([...visibleObjects(fromAge),...visibleObjects(age)]);
    await Promise.all(visibleObjects(age).map(id => this.get(id)));
  }
  async loadIds(ids:readonly string[]){ids.forEach(id=>this.retained.add(id));await Promise.all(ids.map(id=>this.get(id)));}
  keepOnly(ids:readonly string[]){this.ageWindow=false;this.pendingAge=null;this.retain(ids);}
  instance(id: string) {
    const asset = this.cache.get(id);
    if (!asset) throw new Error(`Birthday model not prepared: ${id}`);
    return new BirthdayModel(id, asset);
  }
  trim(age: number) {
    const keep = new Set<string>();
    for (const candidate of [age - 1, age, age + 1]) if (candidate >= FIRST_AGE && candidate <= LAST_AGE) visibleObjects(candidate).forEach(id => keep.add(id));
    this.currentAge=age;this.pendingAge=null;this.ageWindow=true;this.retain(keep);
  }
  warmOne(age: number, direction: number) {
    const network = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const candidate = age + direction;
    if (this.disposed || document.hidden || network?.saveData || /^(slow-)?2g$/.test(network?.effectiveType ?? '') || candidate < FIRST_AGE || candidate > LAST_AGE || !this.ageWindow || this.pendingAge!==null || this.currentAge!==age) return;
    const ids=visibleObjects(candidate);if(!ids.every(id=>this.retained.has(id)))return;
    // Prefetch fills the existing window; its completion never changes it.
    void Promise.all(ids.map(id=>this.get(id))).catch(() => {});
  }
  stats() {
    const meta = ASSET_META as Record<string, { bytes: number; triangles: number }>;
    let bytes = 0, triangles = 0;
    this.cache.forEach((_, id) => { bytes += meta[id]?.bytes ?? 0; triangles += meta[id]?.triangles ?? 0; });
    return { cachedIds: [...this.cache.keys()], activeRequests: this.active, bytes, triangles, fetchedIds: [...this.fetched],retainedIds:[...this.retained],windowVersion:this.windowVersion,pendingAge:this.pendingAge,requests:[...this.outstanding].map(({id,valid,stage})=>({id,valid,stage})),discardedDecodedResults:this.discardedDecodedResults };
  }
  dispose() {
    if (this.disposed) return;
    this.disposed = true;this.pendingAge=null;this.retained.clear();for(const task of this.outstanding){task.valid=false;task.controller.abort();}this.requests.clear();this.controller.abort();this.removeAbort();
    this.cache.forEach(disposeAsset); this.cache.clear(); this.queue.splice(0).forEach(resolve => resolve());
  }
}
