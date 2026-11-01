import * as T from 'three';

/** A small neutral studio reflection, owned by this birthday renderer. It is
 * applied only to the two food studies; the room and other years keep their light. */
export function makeFoodStudio(renderer:T.WebGLRenderer){
  const started=performance.now(),faces=Array.from({length:6},(_,face)=>{
    const canvas=document.createElement('canvas');canvas.width=canvas.height=64;const ctx=canvas.getContext('2d')!;
    const ground=ctx.createLinearGradient(0,0,0,64);ground.addColorStop(0,'#aaa9a5');ground.addColorStop(.55,'#777874');ground.addColorStop(1,'#45433e');ctx.fillStyle=ground;ctx.fillRect(0,0,64,64);
    if(face===0||face===4){const panel=ctx.createRadialGradient(26,22,5,26,22,32);panel.addColorStop(0,'#fffef8');panel.addColorStop(.5,'#e3e2dc');panel.addColorStop(1,'#777874');ctx.fillStyle=panel;ctx.fillRect(8,5,34,40);}
    if(face===2){ctx.fillStyle='#c7c6bf';ctx.fillRect(0,0,64,64);}return canvas;
  });
  const cube=new T.CubeTexture(faces);cube.colorSpace=T.SRGBColorSpace;cube.needsUpdate=true;
  const generator=new T.PMREMGenerator(renderer),target=generator.fromCubemap(cube);generator.dispose();cube.dispose();
  return{texture:target.texture,preparationMs:performance.now()-started,dispose:()=>target.dispose()};
}
