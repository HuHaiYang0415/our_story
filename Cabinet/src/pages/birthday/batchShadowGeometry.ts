import * as T from 'three';
export const BIRTHDAY_SHADOW_LAYER=2;

/** Opaque food/props cast the same depth silhouette regardless of their color
 * materials. Submit one depth surface, retaining every vertex and animated node.
 * Local matrices are cached so age motion does not re-transform static vertices. */
export function batchShadowGeometry(root:T.Group):{geometry:T.BufferGeometry;material:T.Material}|null{
  const sources:T.Mesh[]=[];
  root.traverse(o=>{if(o instanceof T.Mesh&&!(o instanceof T.SkinnedMesh)&&o.castShadow&&!Array.isArray(o.material)&&!o.material.transparent&&!o.material.alphaTest&&!(o.material as T.MeshStandardMaterial).alphaMap&&!Object.keys(o.geometry.morphAttributes).length)sources.push(o);});
  if(sources.length<2)return null;
  const length=sources.reduce((n,o)=>n+o.geometry.getAttribute('position').count,0),positions=new Float32Array(length*3),indices:number[]=[];
  let offset=0;
  const entries=sources.map(o=>{const a=o.geometry.getAttribute('position'),index=o.geometry.index,start=offset;for(let i=0;i<(index?.count??a.count);i++)indices.push(start+(index?index.getX(i):i));offset+=a.count;o.castShadow=false;return{o,a,start,matrix:new T.Matrix4(),valid:false,visible:true};});
  const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(positions,3));geometry.setIndex(indices);
  const material=new T.MeshBasicMaterial({colorWrite:false,depthWrite:false,side:T.DoubleSide});material.name='Batched_opaque_shadow';material.forceSinglePass=true;
  const proxy=new T.Mesh(geometry,material);proxy.name='Opaque_shadow_surface';proxy.userData.nonInteractive=true;proxy.castShadow=true;proxy.frustumCulled=false;proxy.layers.set(BIRTHDAY_SHADOW_LAYER);root.add(proxy);
  const inverse=new T.Matrix4(),matrix=new T.Matrix4(),point=new T.Vector3();
  const update=()=>{
    inverse.copy(root.matrixWorld).invert();let dirty=false;
    for(const e of entries){let visible=true;for(let p:T.Object3D|null=e.o;p&&p!==root;p=p.parent)if(!p.visible)visible=false;matrix.multiplyMatrices(inverse,e.o.matrixWorld);
      if(e.valid&&visible===e.visible&&matrix.elements.every((v,i)=>Math.abs(v-e.matrix.elements[i])<1e-7))continue;
      e.matrix.copy(matrix);e.visible=visible;e.valid=true;dirty=true;
      for(let i=0;i<e.a.count;i++){if(visible)point.fromBufferAttribute(e.a,i).applyMatrix4(matrix);else point.set(0,0,0);point.toArray(positions,(e.start+i)*3);}
    }
    if(dirty){geometry.getAttribute('position').needsUpdate=true;geometry.computeBoundingBox();geometry.computeBoundingSphere();}
  };
  proxy.userData.syncBirthdayBatch=update;root.updateMatrixWorld(true);update();
  return{geometry,material};
}

