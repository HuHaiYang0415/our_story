import type {SceneFrame} from './types';
const layouts=new WeakMap<HTMLElement,string>();

/** Keep the reading field on real, unoccupied cloth. The camera reserves the
 * lower band in wide views; portrait views can use a gap between visible props. */
export function placeBlessing(note:HTMLElement,frame:SceneFrame,width:number,height:number){
  const wide=width/height>1.25,maxHeight=height*(wide?.28:.25);
  const textStyle=getComputedStyle(note.querySelector('p')!),line=parseFloat(textStyle.lineHeight)||30;
  const blocked=[...Object.values(frame.objects),...(frame.readingObstacles??[])].filter(Boolean).map(p=>({x:p!.x-12,y:p!.y-12,w:p!.width+24,h:p!.height+24}));
  const controls=note.closest('.birthday-page')?.querySelector('.birthday-controls')?.getBoundingClientRect();
  const age=note.parentElement?.querySelector('.birthday-age')?.getBoundingClientRect();
  if(age)blocked.push({x:age.x-8,y:age.y-8,w:age.width+16,h:age.height+16});
  const margin=Math.max(16,controls?.left??16),top=Math.max(74,(controls?.bottom??56)+18);
  // A short landscape viewport has no clear cloth rectangle tall enough for
  // four lines. Keep the complete note readable beside the box.
  if(wide&&height<500){
    note.style.width='';
    const w=note.offsetWidth;
    note.style.maxHeight=`${height*.52}px`;
    const h=Math.min(note.scrollHeight,height*.52);
    Object.assign(note.style,{left:`${width-w-margin}px`,top:`${height-h-10}px`,bottom:'auto',transform:'none'});
    note.dataset.clearCloth='true';
    return;
  }
  const intersects=(x:number,y:number,w:number,h:number)=>blocked.some(p=>x<p.x+p.w&&x+w>p.x&&y<p.y+p.h&&y+h>p.y);
  const key=`${width}|${height}|${textStyle.fontSize}|${note.textContent}|${blocked.map(p=>[p.x,p.y,p.w,p.h].map(Math.round).join(",")).join(";")}`;
  if(layouts.get(note)===key&&note.clientHeight>=Math.min(note.scrollHeight,maxHeight)-1&&!intersects(note.offsetLeft,note.offsetTop,note.offsetWidth,note.offsetHeight))return;
  note.style.maxHeight=`${maxHeight}px`;
  note.style.width='';const preferred=note.offsetWidth;
  let best:{x:number;y:number;w:number;h:number;score:number}|null=null;
  for(const w of [preferred,preferred*.85,Math.max(180,preferred*.70)]){
   note.style.width=`${w}px`;const natural=Math.min(note.scrollHeight,maxHeight);const minimum=Math.min(natural,Math.max(48,line));
   for(const h of [natural,Math.max(minimum,natural*.75),minimum]){
    const defaultX=(width-w)/2,defaultY=height-84-h;
    const xs=[defaultX,...Array.from({length:Math.max(1,Math.floor((width-w-margin*2)/16)+1)},(_,i)=>margin+i*16)];
    for(const x of xs)for(let y=Math.max(top,defaultY);y>=top;y-=12){
      if(y+h>height-74||intersects(x,y,w,h))continue;
      const score=Math.abs(x-defaultX)*.5+Math.abs(y-defaultY)+(natural-h)*3+(preferred-w)*2;
      if(!best||score<best.score)best={x,y,w,h,score};
    }
   }
  }
  if(best){Object.assign(note.style,{left:`${best.x}px`,top:`${best.y}px`,width:`${best.w}px`,bottom:'auto',transform:'none',maxHeight:`${best.h}px`});note.dataset.clearCloth='true';layouts.set(note,key);}
  else note.dataset.clearCloth='false';
}
