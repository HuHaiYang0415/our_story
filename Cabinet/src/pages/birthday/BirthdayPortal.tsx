import {useCallback,useEffect,useLayoutEffect,useRef,useState} from 'react';
import type {CSSProperties} from 'react';
import {useFestivePageLoader} from '@/shared/load/useFestivePageLoader';
import {importWithRetry} from '@/shared/load/mediaPreload';
import {StoryBackButton,StoryInlineButton,StoryMuteButton} from '@/shared/ui/StoryControls';
import {GiftBox} from './GiftBox';
import {birthdayLanding} from './birthdayLanding';
import {birthdayArchives} from './birthdayArchives';
import {loadBirthdayModule} from './resources';
import {useBirthdayAudio} from './useBirthdayAudio';
import type {BirthdayProps} from './types';
import type {BirthdaySceneProps} from './BirthdayPage';
import type {BirthdayAssets} from './BirthdayAssets';
import './birthday.css';

export default function BirthdayEntry({onEnter}:{onEnter:()=>void}){
  return <button type="button" className="birthday-entry" id="birthday-entry" aria-label="打开生日礼物盒" onClick={onEnter}><GiftBox/></button>;
}
export function BirthdayPageLoader(props:BirthdayProps){
  const [landing]=useState(()=>birthdayLanding(!!birthdayArchives.latest));
  const [origin]=useState(()=>props.origin??null),[entryStyle,setEntryStyle]=useState<CSSProperties>({});
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [arrived,setArrived]=useState(!origin||reduced);
  const [sceneReady,setSceneReady]=useState(false),[delayed,setDelayed]=useState(false);
  const projection=useRef<HTMLDivElement>(null),audio=useBirthdayAudio();
  const visit=useRef<{controller:AbortController;assets:BirthdayAssets|null}>({controller:new AbortController(),assets:null});
  const loadBirthday=useCallback(async()=>{
    if(visit.current.controller.signal.aborted)visit.current={controller:new AbortController(),assets:null};
    const current=visit.current;
    const module=await importWithRetry(loadBirthdayModule);
    if(current.controller.signal.aborted)throw new DOMException('Birthday visit ended','AbortError');
    current.assets??=module.createBirthdayAssets(current.controller.signal);
    await current.assets.prepareInitial(landing);
    const assets=current.assets;
    return function PreparedBirthday(sceneProps:BirthdaySceneProps){return <module.default {...sceneProps} assets={assets}/>;};
  },[landing]);
  const {Page,failed,retry}=useFestivePageLoader<BirthdaySceneProps>(loadBirthday,{initialLabel:'正在准备生日桌'});
  useEffect(()=>()=>{visit.current.controller.abort();},[]);
  useLayoutEffect(()=>{
    if(!origin)return;const r=projection.current?.parentElement?.getBoundingClientRect(),reference=Math.min(window.innerWidth*.82,580);
    // Measure the stationary stage, not a projection whose lift animation has
    // already begun while React is committing its origin variables.
    if(r)setEntryStyle({'--entry-x':`${origin.x+origin.width/2-(r.x+r.width/2)}px`,'--entry-y':`${origin.y+origin.height/2-(r.y+r.height/2)}px`,'--entry-scale':origin.width/reference} as CSSProperties);
    window.history.replaceState({...window.history.state,birthdayOrigin:null},'');
  },[origin]);
  useEffect(()=>{const delay=window.setTimeout(()=>setDelayed(true),1500),flight=window.setTimeout(()=>setArrived(true),reduced?0:250);return()=>{window.clearTimeout(delay);window.clearTimeout(flight);};},[reduced]);
  const prepared=sceneReady&&arrived;
  return <section className={`birthday-page ${origin&&!arrived?'is-lifting':''}  ${prepared?'is-prepared':''}`}
    aria-label="每一岁的你" style={entryStyle} data-entry={origin?'cabinet':'direct'}>
    <header className="birthday-controls"><StoryBackButton onClick={props.onBack}/>
      <StoryMuteButton muted={!audio.on} onToggle={()=>void audio.toggle()} label={audio.unavailable?'生日声音（当前不可用，可重试）':'生日声音'}/></header>
    {Page&&<Page audio={audio} active={arrived} onReady={()=>setSceneReady(true)} onOpenExperience={props.onOpenExperience}/>}
    <div className="birthday-preparation" aria-hidden={prepared}><div className="birthday-box-projection" ref={projection}><GiftBox/></div>
      {!prepared&&(failed||delayed)&&<div className="birthday-resource-status" role="status"><p>{failed?'生日暂时没准备好':'正在准备生日桌'}</p>
        {failed&&<><StoryInlineButton onClick={()=>{setDelayed(false);setSceneReady(false);retry();}}>重试</StoryInlineButton><StoryInlineButton onClick={props.onBack}>返回展柜</StoryInlineButton></>}
      </div>}
    </div>
  </section>;
}
