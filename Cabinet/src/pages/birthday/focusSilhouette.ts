import * as T from 'three';
import type {GiftProjection} from './types';

/** Keyboard-only outline from the union of the current projected mesh faces.
 * The bounded mask is auxiliary focus geometry; it never renders the scene.
 * Unlike a convex hull, its outer boundary retains valleys and gaps. */
export function focusSilhouette(root:T.Group,camera:T.Camera,bounds:GiftProjection,viewportWidth:number,viewportHeight:number):string {
  const scale=Math.min(1,320/Math.max(bounds.width,bounds.height)),width=Math.max(4,Math.ceil(bounds.width*scale)),height=Math.max(4,Math.ceil(bounds.height*scale));
  const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;
  const ctx=canvas.getContext('2d',{willReadFrequently:true});if(!ctx)return '';
  const matrix=new T.Matrix4(),v=new T.Vector3();ctx.beginPath();
  root.traverse(o=>{
    if(!(o instanceof T.Mesh)||!o.visible||o.userData.nonInteractive)return;
    matrix.multiplyMatrices(camera.matrixWorldInverse,o.matrixWorld);matrix.premultiply(camera.projectionMatrix);
    const position=o.geometry.getAttribute('position'),index=o.geometry.index,points=new Float32Array(position.count*3);
    for(let i=0;i<position.count;i++){
      v.fromBufferAttribute(position,i).applyMatrix4(matrix);
      points[i*3]=((v.x+1)*viewportWidth/2-bounds.x)/bounds.width*width;
      points[i*3+1]=((1-v.y)*viewportHeight/2-bounds.y)/bounds.height*height;points[i*3+2]=v.z;
    }
    const count=index?.count??position.count;
    for(let i=0;i<count;i+=3){
      const a=(index?index.getX(i):i)*3,b=(index?index.getX(i+1):i+1)*3,c=(index?index.getX(i+2):i+2)*3;
      if(points[a+2]<-1||points[b+2]<-1||points[c+2]<-1)continue;
      const positive=(points[b]-points[a])*(points[c+1]-points[a+1])-(points[b+1]-points[a+1])*(points[c]-points[a])>=0;
      ctx.moveTo(points[a],points[a+1]);ctx.lineTo(points[positive?b:c],points[(positive?b:c)+1]);ctx.lineTo(points[positive?c:b],points[(positive?c:b)+1]);ctx.closePath();
    }
  });
  ctx.fill();const pixels=ctx.getImageData(0,0,width,height).data;
  const filled=(x:number,y:number)=>x>=0&&y>=0&&x<width&&y<height&&pixels[(y*width+x)*4+3]>96;
  type Edge={x:number;y:number;nx:number;ny:number;direction:number};
  const edges=new Map<number,Edge[]>(),key=(x:number,y:number)=>y*(width+1)+x;
  const add=(x:number,y:number,nx:number,ny:number,direction:number)=>{const k=key(x,y),list=edges.get(k)??[];list.push({x,y,nx,ny,direction});edges.set(k,list);};
  for(let y=0;y<height;y++)for(let x=0;x<width;x++)if(filled(x,y)){
    if(!filled(x,y-1))add(x,y,x+1,y,0);if(!filled(x+1,y))add(x+1,y,x+1,y+1,1);
    if(!filled(x,y+1))add(x+1,y+1,x,y+1,2);if(!filled(x-1,y))add(x,y+1,x,y,3);
  }
  const paths:{area:number;path:string}[]=[];
  while(edges.size){
    const first=edges.values().next().value![0],loop:number[][]=[];let edge=first,guard=0;
    do{
      loop.push([edge.x,edge.y]);const list=edges.get(key(edge.x,edge.y))!,index=list.indexOf(edge);list.splice(index,1);if(!list.length)edges.delete(key(edge.x,edge.y));
      const next=edges.get(key(edge.nx,edge.ny));if(!next)break;
      // Keep the filled face on the right at diagonally touching pixels.
      const rank=(e:Edge)=>[1,0,3,2][(e.direction-edge.direction+4)%4];edge=[...next].sort((a,b)=>rank(a)-rank(b))[0];
    }while((edge.x!==first.x||edge.y!==first.y)&&++guard<width*height*4);
    const area=loop.reduce((sum,p,i)=>{const q=loop[(i+1)%loop.length];return sum+p[0]*q[1]-q[0]*p[1];},0);
    if(area<8)continue; // Inner holes and subpixel fragments are not outer contours.
    const reduced=loop.filter((p,i)=>{const a=loop[(i+loop.length-1)%loop.length],b=loop[(i+1)%loop.length];return (p[0]-a[0])*(b[1]-p[1])!==(p[1]-a[1])*(b[0]-p[0]);});
    paths.push({area,path:reduced.map((p,i)=>`${i?'L':'M'}${(p[0]/width*100).toFixed(2)} ${(p[1]/height*100).toFixed(2)}`).join('')+'Z'});
  }
  // Detached fruit and candle details are not the body of the keyboard target.
  return paths.sort((a,b)=>b.area-a.area)[0]?.path??'';
}
