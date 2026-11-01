import * as T from 'three';

/** Instance-only adaptation of the protected authored box and its static LOD.
 * Remove paper before bounds, animation binding, shadow and palette batching. */
export function adaptKeepsakeBox(id:string,root:T.Group,ownGeometry:Set<T.BufferGeometry>){
 const group=id==='GIFT-24'?root:id==='DISPLAY-COLLECTION'?root.getObjectByName('DISPLAY_GIFT_24'):undefined;
 if(!group)return;
 const names=id==='GIFT-24'?['PIVOT_letter_fold','Three_fold_letter','PART_GIFT_24_ROOT_MAT_fold_shadow','Letter_wax_seal','PART_PIVOT_lid_MAT_lettercase_embossed_paper']:['LOD_24_MAT_0'];
 const removed:string[]=[];
 for(const name of names){const node=group.getObjectByName(name);if(node){removed.push(name);node.removeFromParent();}}
 group.updateWorldMatrix(true,true);
 const brass=group.getObjectByName(id==='GIFT-24'?'PART_GIFT_24_ROOT_MAT_soft_brass':'LOD_24_MAT_5');
 if(brass instanceof T.Mesh){
  // The original merged brass part contains two hinges above y=.020 and the
  // letter's star below y=.019. Preserve the authored hinge triangles only.
  const source=brass.geometry as T.BufferGeometry,position=source.getAttribute('position'),matrix=new T.Matrix4().copy(group.matrixWorld).invert().multiply(brass.matrixWorld),count=source.index?.count??position.count,kept:number[]=[];
  for(let i=0;i<count;i+=3){const ids=[0,1,2].map(j=>source.index?source.index.getX(i+j):i+j),center=new T.Vector3();ids.forEach(index=>center.add(new T.Vector3().fromBufferAttribute(position,index).applyMatrix4(matrix)));if(center.y/3>=.019)kept.push(...ids);}
  const geometry=new T.BufferGeometry();
  for(const[name,attribute]of Object.entries(source.attributes)){const values=new Float32Array(kept.length*attribute.itemSize);for(let i=0;i<kept.length;i++)for(let j=0;j<attribute.itemSize;j++)values[i*attribute.itemSize+j]=attribute.getComponent(kept[i],j);geometry.setAttribute(name,new T.BufferAttribute(values,attribute.itemSize));}
  if(source.index)geometry.setIndex(Array.from({length:kept.length},(_,i)=>i));geometry.computeBoundingBox();geometry.computeBoundingSphere();brass.geometry=geometry;ownGeometry.add(geometry);removed.push(`letter-star:${(count-kept.length)/3} triangles`);
 }
 if(id==='GIFT-24')group.traverse(node=>{node.name=node.name.replace('Birthday_letter_case','Birthday_keepsake_box').replace('lettercase_soft_brass_foil','keepsake_brass_border');});
 root.userData.keepsakeAdaptation={version:1,removed,sourcePreserved:true};
}


