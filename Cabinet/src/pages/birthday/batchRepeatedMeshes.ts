import * as T from 'three';

/** Keep authored pivots/anchors and their geometry for interaction. Only repeated
 * identical opaque geometry/material is submitted as instances. Matrices follow
 * every source node, including lotus animation and inherited visibility. */
export function batchRepeatedMeshes(root:T.Group):T.InstancedMesh[]{
  const groups=new Map<string,T.Mesh[]>(),batches:T.InstancedMesh[]=[];
  const signature=(g:T.BufferGeometry)=>{
    let hash=2166136261,length=0;
    const attributes=[g.index,...Object.keys(g.attributes).sort().map(k=>g.attributes[k])];
    for(const a of attributes){if(!a)continue;if(a instanceof T.InterleavedBufferAttribute)return g.uuid;const bytes=new Uint8Array(a.array.buffer,a.array.byteOffset,a.array.byteLength);length+=bytes.length;for(const byte of bytes)hash=Math.imul(hash^byte,16777619);}
    return `${hash}:${length}:${Object.keys(g.attributes).sort().join(',')}:${JSON.stringify(g.groups)}`;
  };
  root.traverse(o=>{if(!(o instanceof T.Mesh)||!o.layers.isEnabled(0)||Array.isArray(o.material)||o.material.transparent||o.geometry.groups.length>1)return;const key=`${o.material.uuid}:${signature(o.geometry)}:${o.castShadow}:${o.receiveShadow}`;const group=groups.get(key)??[];group.push(o);groups.set(key,group);});
  for(const sources of groups.values()){
    if(sources.length<2)continue;
    const source=sources[0],batch=new T.InstancedMesh(source.geometry,source.material,sources.length);batch.name='Repeated_'+source.name;batch.castShadow=source.castShadow;batch.receiveShadow=source.receiveShadow;batch.frustumCulled=false;batch.userData.nonInteractive=true;
    // Source nodes still provide silhouette, rest poses and all animation binds.
    sources.forEach(o=>o.layers.set(1));root.add(batch);
    const inverse=new T.Matrix4(),matrix=new T.Matrix4(),hidden=new T.Matrix4().makeScale(0,0,0);
    const update=()=>{inverse.copy(root.matrixWorld).invert();sources.forEach((o,i)=>{let visible=true;for(let p:T.Object3D|null=o;p&&p!==root;p=p.parent)if(!p.visible)visible=false;batch.setMatrixAt(i,visible?matrix.multiplyMatrices(inverse,o.matrixWorld):hidden);});batch.instanceMatrix.needsUpdate=true;batch.computeBoundingBox();batch.computeBoundingSphere();};
    batch.userData.syncBirthdayBatch=update;root.updateMatrixWorld(true);update();batches.push(batch);
  }
  return batches;
}
