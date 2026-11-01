import {useEffect,useRef} from 'react';
import type {RefObject} from 'react';

/** Acknowledges intent only; existing click/gesture handlers still own selection. */
export function usePressFeedback(root:RefObject<HTMLDivElement|null>,enabled:boolean,onStart:()=>void){
 const latest=useRef({enabled,onStart});latest.current={enabled,onStart};
 useEffect(()=>{
  const host=root.current;if(!host)return;
  let press:{button:HTMLButtonElement;id:number|null;x:number;y:number;start:number}|null=null,releaseTimer=0;
  const clear=()=>{window.clearTimeout(releaseTimer);if(press)delete press.button.dataset.pressed;press=null;};
  const release=()=>{if(press)releaseTimer=window.setTimeout(clear,Math.max(0,80-(performance.now()-press.start)));};
  const blur=(e:FocusEvent)=>{if(e.target===press?.button)clear();};
  const button=(target:EventTarget|null)=>target instanceof Element?target.closest<HTMLButtonElement>('button[data-object-id],button[data-archive-age]'):null;
  const valid=(b:HTMLButtonElement|null)=>!!b&&host.contains(b)&&latest.current.enabled&&!b.disabled&&b.getAttribute('aria-disabled')!=='true'&&!b.hidden&&!b.classList.contains('is-offscreen');
  const down=(e:PointerEvent)=>{clear();const b=button(e.target);if(!e.isPrimary||e.button!==0||!valid(b))return;press={button:b!,id:e.pointerId,x:e.clientX,y:e.clientY,start:performance.now()};b!.dataset.pressed='true';latest.current.onStart();};
  const move=(e:PointerEvent)=>{if(!press||press.id!==e.pointerId)return;const hit=document.elementFromPoint(e.clientX,e.clientY);if(Math.hypot(e.clientX-press.x,e.clientY-press.y)>12||!hit||!press.button.contains(hit))clear();};
  const keydown=(e:KeyboardEvent)=>{if(e.repeat||e.key!=='Enter'&&e.key!==' ')return;const b=button(e.target);if(!valid(b))return;clear();press={button:b!,id:null,x:0,y:0,start:performance.now()};b!.dataset.pressed='true';latest.current.onStart();};
  const keyup=(e:KeyboardEvent)=>{if(e.key==='Enter'||e.key===' ')release();};
  const hidden=()=>{if(document.hidden)clear();};
  host.addEventListener('pointerdown',down);host.addEventListener('pointermove',move);
  host.addEventListener('pointercancel',clear);host.addEventListener('lostpointercapture',clear);host.addEventListener('focusout',blur);
  host.addEventListener('keydown',keydown);host.addEventListener('keyup',keyup);window.addEventListener('pointerup',release);window.addEventListener('blur',clear);document.addEventListener('visibilitychange',hidden);
  return()=>{clear();host.removeEventListener('pointerdown',down);host.removeEventListener('pointermove',move);host.removeEventListener('pointercancel',clear);host.removeEventListener('lostpointercapture',clear);host.removeEventListener('focusout',blur);host.removeEventListener('keydown',keydown);host.removeEventListener('keyup',keyup);window.removeEventListener('pointerup',release);window.removeEventListener('blur',clear);document.removeEventListener('visibilitychange',hidden);};
 },[root]);
 useEffect(()=>{if(!enabled)root.current?.querySelectorAll<HTMLElement>('[data-pressed]').forEach(el=>delete el.dataset.pressed);},[enabled,root]);
}
