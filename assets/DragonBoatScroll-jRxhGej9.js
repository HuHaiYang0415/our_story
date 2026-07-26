import{f as D1,j as a,u as S,m,k as s,r as T1,A as W,s as z1,e as P1,i as $1,V as W1,a as V1,c as X1,d as Y1}from"./index-CASi4Odx.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],G1=D1("book-open",U1),U={skyTop:"#FCFBEB",skyMid:"#E2FBF0",waterDeep:"#022C1D",paper:"#FFFDF7"},H={shallow:"#D6E6DE",mid:"#98B5A8",deep:"#4A6458",horizon:"#2A4238"};function G(n,t){return t?{dawn:"linear-gradient(180deg, #1a3d32 0%, #0f2a22 55%, #062018 100%)",river:"linear-gradient(180deg, #0f2a22 0%, #0a2018 45%, #022C1D 100%)",race:"linear-gradient(180deg, #0a2018 0%, #064e3b 40%, #022C1D 100%)",festive:"linear-gradient(180deg, #1a1208 0%, #241104 50%, #0a2018 100%)",paper:"linear-gradient(180deg, #1a1814 0%, #2a241c 100%)",finale:"linear-gradient(180deg, #0a2018 0%, #03150e 60%, #010604 100%)"}[n]:{dawn:`linear-gradient(180deg, ${U.skyTop} 0%, ${U.skyMid} 70%, ${H.shallow} 100%)`,river:`linear-gradient(180deg, ${U.skyMid} 0%, ${H.shallow} 40%, ${H.mid} 70%, ${H.deep} 100%)`,race:`linear-gradient(180deg, ${H.shallow} 0%, ${H.mid} 35%, ${H.deep} 75%, ${H.horizon} 100%)`,festive:"linear-gradient(180deg, #3a2510 0%, #241104 45%, #1a3328 100%)",paper:`linear-gradient(180deg, ${U.paper} 0%, #F5F0E6 100%)`,finale:`linear-gradient(180deg, ${H.horizon} 0%, ${U.waterDeep} 55%, #03150e 100%)`}[n]}function J1(n){return{isNight:n,sunAura:n?"radial-gradient(circle at 50% 0%, rgba(252,211,77,0.15) 0%, transparent 55%)":"radial-gradient(circle at 50% 0%, rgba(252,211,77,0.28) 0%, rgba(130,160,148,0.06) 45%, transparent 70%)",headerBtn:n?"border-emerald-500/40 bg-emerald-950/80 text-stone-100 hover:bg-emerald-900":"border-emerald-600/50 bg-emerald-950/75 text-stone-100 hover:bg-emerald-900",titleOnDark:"text-stone-100",titleOnLight:"text-stone-900",subtitleOnDark:"text-stone-300",subtitleOnLight:"text-stone-600",egg:n?"text-emerald-400/70":"text-stone-500/80",eggHover:n?"hover:text-amber-200":"hover:text-emerald-800",progressActive:n?"bg-amber-300":"bg-emerald-700",progressIdle:n?"bg-stone-600/50":"bg-stone-400/40"}}function R1(n,t){return!(n==="paper"||n==="dawn"&&!t)}const p1={title:"笔墨寄情",content:`致亲爱的平平：

看着这一页，会不会觉得又是写信，so boring?

不过这次没有那么冗长的篇幅，就是节日的祝福，实在是最近事情太多又太突然，还没学会什么新花样和新技术来制作出更有趣的东西~篇幅虽短，情意不减

愿你平安顺遂，消尽烦忧。

希望往后低落与心事、欢喜或快乐，与我共分担~

岁岁重五，相思不离。

想你的小胡
二零二六 五月初五`},b1=p1.content.split(/\n\n+/).map(n=>n.trim()).filter(Boolean),Q=[{id:"prologue",material:"dawn",chapter:"壹",sceneLabel:"引 · 展卷",layout:"center",displayMode:"vertical-pair",display:"蒲节记胜",subtitle:"二零二六 · 端午长卷",body:["岁序走到重五，江风先热起来了"],forwardTransition:"morph-ink",eggs:[{id:"egg-prologue-hint",anchor:"top-right",text:"岁时记",reveal:"想和你一起过端午"}]},{id:"river",material:"river",chapter:"贰",sceneLabel:"江 · 远眺",layout:"river-glyph",displayMode:"horizontal",display:"江",subtitle:"天",body:["风从江面来，带着菖蒲与糯米的香气","南风知我意，流水寄相思"],bodyVariant:"asymmetric",forwardTransition:"morph-jiang",eggs:[{id:"egg-river-mist",anchor:"mid-left",text:"夹注 · 瓯江",hint:!0,reveal:"五叩粼粼江浪，自来一纸瓶笺"}]},{id:"race",material:"race",chapter:"叁",sceneLabel:"渡 · 鼓震",layout:"race-diagonal",displayMode:"horizontal",display:"渡",subtitle:"鼓声逐浪，心意同频",body:["三舟并渡，各怀节奏"],bodyVariant:"asymmetric",forwardTransition:"morph-boat",eggs:[{id:"egg-race-drum",anchor:"bottom-right",text:"鼓点三下",hint:!0,reveal:"三声鼓鸣，致我满心歉意"}]},{id:"festive",material:"festive",chapter:"肆",sceneLabel:"物 · 案上",layout:"festive-split",displayMode:"horizontal",display:"节物",subtitle:"案上岁时，掌上温良",body:["糯米裹成三角，咸甜各安其味","门悬艾蒲，兰汤祓禊，皆为长夏祈福","江上的热闹归于案头，想把满心温柔尽数写进书卷"],bodyVariant:"asymmetric",forwardTransition:"morph-zongzi-seal",eggs:[{id:"egg-festive-ai",anchor:"top-left",text:"艾",reveal:"艾香一缕，祝君温良无疾"},{id:"egg-festive-zong",anchor:"bottom-left",text:"粽",reveal:"一口糯香...算了不好消化，我们吃冰淇淋吧"}]},{id:"letter",material:"paper",chapter:"伍",sceneLabel:"寄情 · 展信",layout:"center",displayMode:"horizontal",display:p1.title,body:b1.length>0?b1:[p1.content],bodyVariant:"letter",eggs:[{id:"egg-letter-seal",anchor:"top-right",text:"印",reveal:"平生不会相思，才会相思，便害相思"}]},{id:"finale",material:"finale",chapter:"陆",sceneLabel:"收 · 记胜",layout:"center",displayMode:"finale",display:"永远「粽」意你",subtitle:"第一个端午节",body:["糯米成粽 艾菖辟邪 心心相扣 不负岁时韶华"],eggs:[{id:"egg-finale-story",anchor:"bottom-right",text:"Our Story",reveal:"日日念你 · 岁岁有你"}]}],Q1=Q.length;function K1(n,t){var i;if(t!==n+1)return null;const e=(i=Q[n])==null?void 0:i.forwardTransition;return e==="morph-ink"||e==="morph-jiang"||e==="morph-boat"||e==="morph-zongzi-seal"?e:null}const F1=[.22,1,.36,1];function N1({char:n,index:t,reduceMotion:e,className:i}){return n===" "||n===`
`?a.jsx("span",{className:"inline-block w-[0.35em]","aria-hidden":!0}):e?a.jsx("span",{className:i,children:n}):a.jsx(m.span,{className:`db-ink-char inline-block ${i??""}`,style:{transformOrigin:"50% 100%",transformPerspective:600},initial:{opacity:0,y:36,rotateX:-52,filter:"blur(10px)"},animate:{opacity:1,y:0,rotateX:0,filter:"blur(0px)"},transition:{delay:.08+t*.07,duration:.62,ease:F1},children:n})}function n2({text:n,onDark:t,className:e}){const i=S(),l=[...n];return a.jsx("h2",{className:["db-ink-display db-ink-display--hero",t?"db-ink-display--on-dark":"db-ink-display--on-light",e].filter(Boolean).join(" "),"aria-label":n,children:l.map((c,d)=>a.jsx(N1,{char:c,index:d,reduceMotion:!!i},`${c}-${d}`))})}function a2({text:n,onDark:t}){const e=S(),i=Math.ceil(n.length/2),l=n.slice(0,i),c=n.slice(i);return a.jsx("div",{className:"db-ink-vertical-pair","aria-label":n,children:[l,c].map((d,h)=>a.jsx("div",{className:"db-ink-vertical-row",children:[...d].map((r,o)=>a.jsx(N1,{char:r,index:h*4+o,reduceMotion:!!e,className:t?"db-ink-display--on-dark":"db-ink-display--on-light"},`${h}-${r}-${o}`))},h))})}function t2({onDark:n}){const t=S(),e=["永","远","「","粽","」","意","你"];let i=0;return a.jsx("h2",{className:["db-ink-display db-ink-display--finale",n?"db-ink-display--on-dark":"db-ink-display--on-light"].join(" "),"aria-label":"永远粽意你",children:e.map(l=>{const c=i++,d=l==="粽";return t?a.jsx("span",{className:d?"db-zong-accent":void 0,children:l},l+c):a.jsx(m.span,{className:`db-ink-char inline-block ${d?"db-zong-accent":""}`,style:{transformOrigin:"50% 100%"},initial:{opacity:0,y:28,scale:d?.5:.85,filter:"blur(8px)"},animate:{opacity:1,y:0,scale:1,filter:"blur(0px)"},transition:{delay:.1+c*.09,duration:d?.75:.55,ease:F1},children:l},l+c)})})}function l2({text:n,mode:t="horizontal",onDark:e,className:i}){return t==="finale"?a.jsx(t2,{onDark:e}):t==="vertical-pair"?a.jsx(a2,{text:n,onDark:e}):a.jsx(n2,{text:n,onDark:e,className:i})}const r1=[.22,1,.36,1];function e2({text:n,onDark:t,delay:e=.42}){const i=S();return a.jsxs("div",{className:"db-ink-subtitle-wrap",children:[a.jsx(m.p,{className:["db-ink-subtitle",t?"text-stone-300":"text-stone-600"].join(" "),initial:i?{}:{opacity:0,y:14,letterSpacing:"0.2em"},animate:{opacity:1,y:0,letterSpacing:"0.08em"},transition:{delay:i?0:e,duration:.55,ease:r1},children:n}),a.jsx(m.div,{className:t?"db-ink-rule db-ink-rule--light":"db-ink-rule db-ink-rule--dark",initial:i?{scaleX:1}:{scaleX:0},animate:{scaleX:1},transition:{delay:i?0:e+.12,duration:.65,ease:r1},"aria-hidden":!0})]})}function f1({lines:n,onDark:t,variant:e="center",baseDelay:i=.52,exiting:l=!1,exitBaseDelay:c=0}){const d=S(),h=e==="letter",r=e==="asymmetric";return a.jsx("div",{className:["db-stagger-lines",h?"db-stagger-lines--letter":"",r?"db-stagger-lines--asymmetric":""].filter(Boolean).join(" "),children:n.map((o,y)=>{const u=h&&y===0,p=h&&y===n.length-1&&n.length>1;return a.jsx(m.p,{className:["db-stagger-line",t?"text-stone-200/95":"text-stone-700",h?"db-stagger-line--letter":"",u?"db-stagger-line--letter-salute":"",p?"db-stagger-line--letter-sign":""].join(" "),initial:d||l?!1:{opacity:0,x:h?24:r?-16:0,y:h?0:18,filter:"blur(5px)"},animate:l?{opacity:0,x:r?12:0,y:20,filter:"blur(6px)"}:{opacity:1,x:0,y:0,filter:"blur(0px)"},transition:l?{delay:d?0:c+y*.08,duration:.52,ease:[.4,0,.2,1]}:{delay:d?0:i+y*.14,duration:.58,ease:r1},children:o},`${o}-${y}`)})})}function i2({chapter:n,sceneLabel:t,onDark:e}){const i=S();return a.jsxs(a.Fragment,{children:[a.jsxs(m.div,{className:["db-scroll-frame",e?"db-scroll-frame--dark":"db-scroll-frame--light"].join(" "),initial:i?{}:{opacity:0},animate:{opacity:1},transition:{delay:.05,duration:.4},"aria-hidden":!0,children:[a.jsx("span",{className:"db-scroll-frame-corner db-scroll-frame-corner--tl"}),a.jsx("span",{className:"db-scroll-frame-corner db-scroll-frame-corner--tr"}),a.jsx("span",{className:"db-scroll-frame-corner db-scroll-frame-corner--bl"}),a.jsx("span",{className:"db-scroll-frame-corner db-scroll-frame-corner--br"})]}),a.jsx(m.div,{className:"db-scroll-chapter-mark",initial:i?{}:{opacity:0,x:-8},animate:{opacity:.22,x:0},transition:{delay:.2,duration:.5},"aria-hidden":!0,children:n}),a.jsx(m.p,{className:["db-scroll-scene-label",e?"text-stone-400/60":"text-stone-500/55"].join(" "),initial:i?{}:{opacity:0},animate:{opacity:1},transition:{delay:.55,duration:.45},children:t})]})}function g1(n){return n?"linear-gradient(180deg, transparent 0%, rgba(15,42,34,0.08) 18%, rgba(6,78,59,0.22) 48%, rgba(2,44,29,0.38) 78%, rgba(2,44,29,0.48) 100%)":"linear-gradient(180deg, transparent 0%, rgba(214,230,222,0.22) 22%, rgba(152,181,168,0.32) 52%, rgba(74,100,88,0.28) 82%, rgba(74,100,88,0.36) 100%)"}function c2(n){return n?"radial-gradient(ellipse 70% 65% at 50% 55%, rgba(180,120,70,0.42) 0%, rgba(90,55,30,0.18) 42%, transparent 72%)":"radial-gradient(ellipse 70% 65% at 50% 55%, rgba(210,165,105,0.38) 0%, rgba(160,110,65,0.16) 40%, transparent 72%)"}const t1=820,s2=Math.round(t1*.68),A1=t1/1e3,x1=[.38,.02,.18,1],K=880,d2=Math.round(K*.72),a1=1050,o1=680,h2=Math.round(o1*.7),p2=[t1,K,a1,o1],r2=14,C1=18;function f2({className:n,isNight:t=!1,onWaterTap:e,interactive:i=!0}){const[l,c]=s.useState([]),d=s.useRef(0),h=s.useRef(null),r=s.useRef(null),o=s.useCallback((f,b,k)=>{const j=h.current;if(!j)return;const Z=j.getBoundingClientRect(),A=(f-Z.left)/Z.width*100,x=(b-Z.top)/Z.height*100,v=++d.current;c(R=>[...R.slice(-9),{id:v,x:A,y:x}]),k&&(e==null||e({x:A,y:x})),window.setTimeout(()=>{c(R=>R.filter(I=>I.id!==v))},1400)},[e]),y=f=>{i&&(r.current={startX:f.clientX,startY:f.clientY,maxMove:0,lastRippleX:f.clientX,lastRippleY:f.clientY},f.currentTarget.setPointerCapture(f.pointerId))},u=f=>{if(!i)return;const b=r.current;if(!b||f.buttons===0&&f.pressure===0)return;const k=f.clientX-b.startX,j=f.clientY-b.startY;b.maxMove=Math.max(b.maxMove,Math.hypot(k,j));const Z=f.clientX-b.lastRippleX,A=f.clientY-b.lastRippleY;Z*Z+A*A<C1*C1||(b.lastRippleX=f.clientX,b.lastRippleY=f.clientY,o(f.clientX,f.clientY,!1))},p=f=>{if(!i)return;const b=r.current;r.current=null,f.currentTarget.hasPointerCapture(f.pointerId)&&f.currentTarget.releasePointerCapture(f.pointerId),b&&b.maxMove<=r2&&o(f.clientX,f.clientY,!0)},g=f=>p(f),M=f=>p(f);return a.jsx("div",{ref:h,className:["db-river-ripple-surface",t?"db-river-ripple-surface--night":"db-river-ripple-surface--day",n].filter(Boolean).join(" "),onPointerDown:y,onPointerMove:u,onPointerUp:g,onPointerCancel:M,"aria-hidden":i?void 0:!0,children:l.map(f=>a.jsx("span",{className:"db-river-ripple",style:{left:`${f.x}%`,top:`${f.y}%`}},f.id))})}const o2=`我猜这个彩蛋你发现不了，所以偷偷记录一点放肆的话。
超级超级喜欢你！
每天都很想见你！
真的很希望我能让你喜欢
总之我会努力做的更好的
希望正式和你在一起的那一天不太遥远`,y2=5,E=-28,u2="dragon-boat-scroll-root";function M2(){return document.getElementById(u2)??document.body}function v1({isNight:n,submerged:t=!1}){const e=t?n?"rgba(6, 78, 59, 0.35)":"rgba(16, 120, 90, 0.32)":n?"rgba(134, 239, 172, 0.28)":"rgba(167, 243, 208, 0.48)",i=t?n?"rgba(2, 44, 34, 0.72)":"rgba(4, 72, 55, 0.58)":n?"rgba(6, 78, 59, 0.58)":"rgba(52, 211, 153, 0.32)",l=t?n?"rgba(94, 234, 212, 0.28)":"rgba(167, 243, 208, 0.35)":n?"rgba(167, 243, 208, 0.62)":"rgba(255, 255, 255, 0.78)";return a.jsxs("svg",{className:"db-drift-bottle-svg",viewBox:"0 0 64 104",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[a.jsx("path",{d:"M32 37 C17.5 37 13.5 54 13.5 72.5 C13.5 89 19.5 97 32 97 C44.5 97 50.5 89 50.5 72.5 C50.5 54 46.5 37 32 37Z",fill:i,stroke:l,strokeWidth:"1.2"}),a.jsx("path",{d:"M32 37 C22 37 18 50 18 68 C18 82 22 90 32 90 C42 90 46 82 46 68 C46 50 42 37 32 37Z",fill:e}),a.jsx("path",{d:"M26.5 37 L26.5 17.5 C26.5 13.5 28.5 11.5 32 11.5 C35.5 11.5 37.5 13.5 37.5 17.5 L37.5 37",fill:i,stroke:l,strokeWidth:"1"}),!t&&a.jsxs(a.Fragment,{children:[a.jsx("rect",{x:"24.5",y:"3.5",width:"15",height:"9.5",rx:"2.5",fill:"#c9a66b",stroke:"#8b6914",strokeWidth:"0.8"}),a.jsx("rect",{x:"23",y:"2",width:"18",height:"3",rx:"1.2",fill:"#a8844a"})]}),t&&a.jsx("rect",{x:"24.5",y:"3.5",width:"15",height:"9.5",rx:"2.5",fill:"#7a6344",stroke:"#4a3818",strokeWidth:"0.8",opacity:"0.55"}),a.jsx("rect",{x:"22",y:"54",width:"20",height:"26",rx:"1.5",fill:t?"#d4c4a0":"#fef3c7",stroke:"#d6c4a0",strokeWidth:"0.6",transform:"rotate(-10 32 67)",opacity:t?.55:.92}),!t&&a.jsx("path",{d:"M24 58 L28 56 L30 78 L26 80Z",fill:"#fde68a",opacity:"0.5",transform:"rotate(-10 32 67)"}),!t&&a.jsx("path",{d:"M21 48 Q19 70 23 88",stroke:"rgba(255,255,255,0.42)",strokeWidth:"1.8",strokeLinecap:"round"}),!t&&a.jsx("path",{d:"M28 14 C30 15 34 15 36 14",stroke:"#8b6914",strokeWidth:"0.8",strokeLinecap:"round",opacity:"0.6"})]})}function Z2({isNight:n}){return a.jsxs("span",{className:"db-drift-bottle-figure","aria-hidden":!0,children:[a.jsx("span",{className:"db-drift-bottle-half db-drift-bottle-half--below",children:a.jsx(v1,{isNight:n,submerged:!0})}),a.jsx("span",{className:"db-drift-bottle-surface-line"}),a.jsx("span",{className:"db-drift-bottle-half db-drift-bottle-half--above",children:a.jsx(v1,{isNight:n})})]})}function m2({spot:n,phase:t,isNight:e=!1,onBottleClick:i,onClosePaper:l,onRiseComplete:c,onSinkComplete:d}){const h=S();if(s.useEffect(()=>{if(t!=="rising")return;if(h){c();return}const p=window.setTimeout(c,780);return()=>window.clearTimeout(p)},[t,h,c]),s.useEffect(()=>{t!=="sinking"||!h||d()},[t,h,d]),!n||t==="hidden")return null;const r={left:`${n.x}%`,top:`${n.y}%`},o=t==="rising"||t==="floating"||t==="sinking",y=t==="paper",u=typeof document<"u"?T1.createPortal(a.jsx(W,{children:y&&a.jsxs(a.Fragment,{children:[a.jsx(m.button,{type:"button",className:"db-drift-bottle-backdrop",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:l,"aria-label":"收起纸团"},"drift-bottle-backdrop"),a.jsxs(m.div,{className:"db-drift-bottle-paper",role:"dialog","aria-modal":"true","aria-labelledby":"drift-bottle-paper-text",initial:h?{opacity:1,scale:1,x:"-50%",y:"-50%"}:{opacity:0,scale:.88,x:"-50%",y:"calc(-50% + 12px)"},animate:{opacity:1,scale:1,x:"-50%",y:"-50%"},exit:{opacity:0,scale:.92,x:"-50%",y:"calc(-50% + 8px)"},transition:{duration:.42,ease:[.22,1,.36,1]},children:[a.jsx("div",{className:"db-drift-bottle-paper-body",children:a.jsx("p",{id:"drift-bottle-paper-text",className:"db-drift-bottle-paper-text",children:o2})}),a.jsx("button",{type:"button",className:"db-drift-bottle-paper-close",onClick:l,children:"收起"})]},"drift-bottle-paper")]})}),M2()):null;return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"db-drift-bottle-layer",style:r,children:a.jsx(W,{mode:"wait",children:o&&a.jsxs(m.button,{type:"button",className:"db-drift-bottle",initial:h?{opacity:1,y:0,scale:1,rotate:E}:{opacity:0,y:28,scale:.82,rotate:E-6},animate:t==="sinking"?{opacity:0,y:36,scale:.65,rotate:E+10}:t==="rising"?{opacity:1,y:0,scale:1,rotate:E}:{opacity:1,y:[0,-3,0],scale:1,rotate:[E+2,E-2,E+2]},exit:{opacity:0,y:32,scale:.6,rotate:E+8},style:{transformOrigin:"50% 50%"},transition:t==="sinking"?{duration:.85,ease:[.45,.05,.55,.95]}:t==="rising"?{duration:.75,ease:[.22,1,.36,1]}:{y:{duration:2.8,repeat:1/0,ease:"easeInOut"},rotate:{duration:3.2,repeat:1/0,ease:"easeInOut"}},onAnimationComplete:()=>{t==="sinking"&&!h&&d()},onClick:p=>{t==="floating"&&(p.stopPropagation(),i())},disabled:t!=="floating","aria-label":"拾取漂流瓶",children:[a.jsx("span",{className:"db-drift-bottle-ring","aria-hidden":!0}),a.jsx(Z2,{isNight:e})]},"bottle")})}),u]})}const b2=""+new URL("drums-BnD5tEc6.mp3",import.meta.url).href,g2=5e3;class A2{constructor(){this.ctx=null,this.isMuted=!1,this.bgmAudio=null,this.drumAudio=null,this.bgmIntervalId=null,this.bgmRestartTimer=null,this.bgmEndedHandler=null,this.bgmCanPlayHandler=null,this.ambientSrc=null}initContext(){var t;if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}((t=this.ctx)==null?void 0:t.state)==="suspended"&&this.ctx.resume()}setMuted(t){this.isMuted=t,t?this.stopAmbient():this.startAmbient()}getMuted(){return this.isMuted}setAmbientSrc(t){this.ambientSrc!==t&&(this.clearBgmAudio(),this.ambientSrc=t,t&&this.prefetchAmbient(t))}prefetchAmbient(t){const e=new Audio;e.preload="auto",e.volume=.22,e.loop=!1,this.bgmEndedHandler=()=>{this.isMuted||!this.ambientSrc||(this.clearBgmRestartTimer(),this.bgmRestartTimer=setTimeout(()=>{this.bgmRestartTimer=null,!(this.isMuted||!this.bgmAudio)&&(this.bgmAudio.currentTime=0,this.bgmAudio.play().catch(()=>{}))},g2))},e.addEventListener("ended",this.bgmEndedHandler),e.src=t,this.bgmAudio=e}tryPlayAmbient(){const t=this.bgmAudio;if(!t||this.isMuted)return;this.bgmCanPlayHandler&&(t.removeEventListener("canplay",this.bgmCanPlayHandler),this.bgmCanPlayHandler=null);const e=()=>{this.isMuted||!this.bgmAudio||this.bgmAudio.play().catch(()=>{})};t.readyState>=HTMLMediaElement.HAVE_FUTURE_DATA?e():(this.bgmCanPlayHandler=e,t.addEventListener("canplay",e,{once:!0}))}clearBgmRestartTimer(){this.bgmRestartTimer&&(clearTimeout(this.bgmRestartTimer),this.bgmRestartTimer=null)}clearBgmAudio(){this.clearBgmRestartTimer(),this.bgmAudio&&(this.bgmEndedHandler&&this.bgmAudio.removeEventListener("ended",this.bgmEndedHandler),this.bgmCanPlayHandler&&this.bgmAudio.removeEventListener("canplay",this.bgmCanPlayHandler),z1(this.bgmAudio)),this.bgmEndedHandler=null,this.bgmCanPlayHandler=null,this.bgmAudio=null}ensureBgmAudio(){return this.ambientSrc?this.bgmAudio?this.bgmAudio:(this.prefetchAmbient(this.ambientSrc),this.bgmAudio):null}tone(t,e,i="sine",l=.08,c=0){if(this.isMuted||!this.ctx)return;const d=this.ctx.currentTime+c,h=this.ctx.createOscillator(),r=this.ctx.createGain();h.type=i,h.frequency.setValueAtTime(t,d),r.gain.setValueAtTime(0,d),r.gain.linearRampToValueAtTime(l,d+.02),r.gain.exponentialRampToValueAtTime(.001,d+e),h.connect(r),r.connect(this.ctx.destination),h.start(d),h.stop(d+e+.05)}noiseBurst(t,e=.04,i=800,l=0){if(this.isMuted||!this.ctx)return;const c=this.ctx.currentTime+l,d=Math.floor(this.ctx.sampleRate*t),h=this.ctx.createBuffer(1,d,this.ctx.sampleRate),r=h.getChannelData(0);for(let p=0;p<d;p++)r[p]=(Math.random()*2-1)*(1-p/d);const o=this.ctx.createBufferSource();o.buffer=h;const y=this.ctx.createBiquadFilter();y.type="lowpass",y.frequency.setValueAtTime(i,c);const u=this.ctx.createGain();u.gain.setValueAtTime(e,c),u.gain.exponentialRampToValueAtTime(.001,c+t),o.connect(y),y.connect(u),u.connect(this.ctx.destination),o.start(c),o.stop(c+t)}ensureReady(){this.isMuted||(this.initContext(),this.startAmbient())}playUnroll(){this.isMuted||(this.initContext(),this.noiseBurst(.35,.035,1200),this.tone(180,.25,"triangle",.05),this.tone(120,.4,"sine",.03,.08))}playMorphWater(){this.isMuted||(this.initContext(),this.noiseBurst(.55,.05,600),this.tone(220,.3,"sine",.04),this.tone(165,.45,"triangle",.03,.12))}playMorphDrum(){this.isMuted||(this.initContext(),[0,.18,.36].forEach(t=>{this.tone(90,.12,"sine",.1,t),this.noiseBurst(.08,.025,400,t)}))}playMorphInk(){this.isMuted||(this.initContext(),this.noiseBurst(.5,.03,300),this.tone(80,.6,"triangle",.06))}playMorphSeal(){this.isMuted||(this.initContext(),this.tone(440,.08,"sine",.06),this.tone(330,.15,"triangle",.05,.06),this.noiseBurst(.12,.02,2e3,.1))}playRaceDrum(){if(this.isMuted)return;this.initContext(),this.drumAudio||(this.drumAudio=new Audio(b2),this.drumAudio.volume=.62);const t=this.drumAudio.cloneNode(!0);t.volume=this.drumAudio.volume,t.play().catch(()=>{})}playEggTap(){this.isMuted||(this.initContext(),this.tone(520,.06,"sine",.07),this.tone(780,.1,"triangle",.04,.04))}playLetterOpen(){this.isMuted||(this.initContext(),this.noiseBurst(.2,.03,1500),this.tone(260,.2,"sine",.05),this.tone(196,.35,"triangle",.03,.1))}playSynthAmbientNote(t,e,i){if(this.isMuted||!this.ctx)return;const l=this.ctx.currentTime+i,c=this.ctx.createOscillator(),d=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(t,l),d.gain.setValueAtTime(0,l),d.gain.linearRampToValueAtTime(.018,l+.15),d.gain.exponentialRampToValueAtTime(.001,l+e),c.connect(d),d.connect(this.ctx.destination),c.start(l),c.stop(l+e)}startAmbient(){if(this.isMuted)return;if(this.initContext(),this.ambientSrc){this.ensureBgmAudio(),this.tryPlayAmbient();return}if(this.bgmIntervalId||!this.ctx)return;const t=[261.63,293.66,329.63,392,440];let e=0;const i=()=>{if(!(!this.ctx||this.isMuted)){for(let l=0;l<3;l++){const c=t[(e+l)%t.length];this.playSynthAmbientNote(c,2.8,l*1.4)}e=(e+3)%t.length}};i(),this.bgmIntervalId=setInterval(i,4200)}stopAmbient(){this.bgmIntervalId&&(clearInterval(this.bgmIntervalId),this.bgmIntervalId=null),this.clearBgmRestartTimer(),this.bgmAudio&&(this.bgmAudio.pause(),this.bgmAudio.currentTime=0)}dispose(){var t;this.stopAmbient(),this.clearBgmAudio(),this.ambientSrc=null,(t=this.ctx)==null||t.close(),this.ctx=null}}const T=new A2;function l1({children:n,className:t,variant:e="stack"}){return a.jsx("div",{className:["db-scene-layout",`db-scene-layout--${e}`,t].filter(Boolean).join(" "),children:n})}function x2({beat:n,onDark:t,isNight:e,isExitingMorph:i=!1,onMorphComplete:l}){const c=S(),d=s.useRef(!1),[,h]=s.useState(0),[r,o]=s.useState(null),[y,u]=s.useState("hidden"),[p,g]=s.useState(!1),M=s.useCallback(()=>{!i||d.current||(d.current=!0,l==null||l())},[i,l]);s.useEffect(()=>{if(!i){d.current=!1;return}if(c){M();return}const x=window.setTimeout(M,s2),v=window.setTimeout(M,t1+80);return()=>{window.clearTimeout(x),window.clearTimeout(v)}},[i,c,M]);const f=!i&&!p&&y==="hidden",b=s.useCallback(x=>{f&&h(v=>{const R=v+1;return R>=y2&&(o(x),u("rising")),R})},[f]),k=s.useCallback(()=>{u(x=>x==="rising"?"floating":x)},[]),j=s.useCallback(()=>{u("paper"),T.playEggTap()},[]),Z=s.useCallback(()=>{u("sinking")},[]),A=s.useCallback(()=>{u("hidden"),o(null),g(!0)},[]);return a.jsxs(l1,{className:"db-layout-river-glyph",variant:"stack",children:[a.jsxs("div",{className:"db-layout-river-glyph-water",children:[a.jsx(f2,{className:"db-layout-river-glyph-ripples",isNight:e,onWaterTap:b,interactive:f}),a.jsx(m2,{spot:r,phase:y,isNight:e,onBottleClick:j,onClosePaper:Z,onRiseComplete:k,onSinkComplete:A})]}),a.jsxs("div",{className:"db-layout-river-glyph-hero",children:[a.jsx("h2",{className:["db-river-glyph-main",t?"db-ink-display--on-dark":""].join(" "),"aria-label":"江天",children:a.jsx(m.span,{className:"db-river-glyph-char",style:{transformOrigin:"50% 0%"},initial:c?!1:{opacity:0,y:"40%",scaleY:1.6,scaleX:.85,filter:"blur(8px)"},animate:i?{opacity:0,y:"120%",scaleY:2.3,scaleX:.7,filter:"blur(0px)"}:{opacity:1,y:0,scaleY:1,scaleX:1,filter:"blur(0px)"},transition:i?{duration:A1,ease:x1,delay:0}:{duration:.75,ease:[.22,1,.36,1]},children:"江"})}),n.subtitle&&a.jsx(m.span,{className:"db-river-glyph-corner",initial:c?!1:{opacity:0,y:-8},animate:i?{opacity:0,y:-14,scaleY:1.35,scaleX:.88}:{opacity:.75,y:0,scaleY:1,scaleX:1},transition:i?{duration:.42,delay:.04,ease:x1}:{delay:.42,duration:.45,ease:[.22,1,.36,1]},style:{transformOrigin:"50% 0%"},children:n.subtitle})]}),n.body&&n.body.length>0&&a.jsx("div",{className:"db-layout-river-glyph-body",children:a.jsx(f1,{lines:n.body,onDark:t,variant:"asymmetric",exiting:i,exitBaseDelay:0})}),a.jsx(m.div,{className:"db-layout-river-glyph-wave",style:{background:g1(e)},"aria-hidden":!0,initial:!1,animate:i?{opacity:0,x:"0%"}:{opacity:1,x:["-2%","2%","-2%"]},transition:i?{duration:.38,ease:[.4,0,.2,1]}:{duration:10,repeat:1/0,ease:"easeInOut"}}),i&&a.jsx(m.div,{className:"db-layout-river-glyph-wash",style:{background:g1(e)},initial:{opacity:0,scaleY:.35},animate:{opacity:.82,scaleY:1},transition:{duration:A1*.85,delay:.08,ease:[.32,.72,0,1]},"aria-hidden":!0})]})}const C2=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 750 500"
   version="1.1"
   id="svg289"
   sodipodi:docname="Dragon Boat Festival-cuate-green.svg"
   inkscape:version="1.4.4 (dcaf3e7, 2026-05-05)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs289" />
  <sodipodi:namedview
     id="namedview289"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="2.434"
     inkscape:cx="375.10271"
     inkscape:cy="217.13229"
     inkscape:window-width="2560"
     inkscape:window-height="1494"
     inkscape:window-x="-11"
     inkscape:window-y="-11"
     inkscape:window-maximized="1"
     inkscape:current-layer="freepik--character-2--inject-5" />
  <g
     id="freepik--dragon-boat--inject-5">
    <path
       d="M98.34,268.57s14.13-21.5,13.81-33.3-7.44-19.42-8.52-28.26.61-17-.76-17.27c-3.07-.6-11.25,11.79-11.57,20.78a55.5,55.5,0,0,1-5.64-18.19c-1.91-14.06,2.71-26.09-.53-29.06-2.66-2.44-22.61,21.92-22.32,46.55,0,0-1.84-13.62-4.6-14.45s-8.45,31.94,4.48,55.27C70.28,264.33,98.34,268.57,98.34,268.57Z"
       style="fill:#37474f"
       id="path8" />
    <path
       d="M94.8,266.37s9.77-14.87,9.54-23-5.14-13.42-5.89-19.53.43-11.76-.52-11.94c-2.12-.42-5.93,8-6.15,14.18a42.44,42.44,0,0,1-8.43-12.6c-3.69-9.27-3.68-20.48-5.92-22.54-1.84-1.68-7.4,17.81-7.2,34.84,0,0-1.27-9.42-3.18-10s-5.84,22.08,3.1,38.21C75.39,263.43,94.8,266.37,94.8,266.37Z"
       style="fill:#455a64"
       id="path9" />
    <path
       d="M526.71,195.44s-1.22,13.25-3.92,19.68-7.45,12.24-4.2,12.82,8.12-4.52,8.12-4.52a114.12,114.12,0,0,1-3.25,16.82c-2.78,10.17-7.35,16.24-4.05,16.82s10.42-5.95,12.05-9.89a144.26,144.26,0,0,1-.88,20.41c-1.39,10.68-6.42,21.39-3.06,21.85s9.4-8.58,11.72-15.2c0,0,.84,14.32-1.7,23.21-3.09,10.83-9.44,17.05-8.86,19.61s8.4,0,14.62-6.31c0,0-1.43,13.62-19.6,17.1-12.44,2.38-21.24,1.51-22.86,3s34,14.62,48.15-2.55S526.71,195.44,526.71,195.44Z"
       style="fill:#455a64"
       id="path10" />
    <path
       d="M105.12,336.12c16.1,47.64,52,81.68,73,81.68H472.72c44,0,96.72,1.41,127.19,1.37,14.56,0,24-.37,25-1.37,42.7-42.7,5.81-111.77-9.38-136.14-19.67-31.56-22.16-86.22-22.16-86.22H526.71a540.69,540.69,0,0,0,19,90.4c8.59,27.84,3.71,45-20,45H205.06c-24.13,0-42.69,0-63.58-13S88.58,238,85.33,240.73,89,288.46,105.12,336.12Z"
       style="fill:#FFC727"
       id="path11" />
    <path
       d="M105.12,336.12c16.1,47.64,52,81.68,73,81.68H472.72c44,0,96.72,1.41,127.19,1.37,14.56,0,24-.37,25-1.37,42.7-42.7,5.81-111.77-9.38-136.14-19.67-31.56-22.16-86.22-22.16-86.22H526.71a540.69,540.69,0,0,0,19,90.4c8.59,27.84,3.71,45-20,45H205.06c-24.13,0-42.69,0-63.58-13S88.58,238,85.33,240.73,89,288.46,105.12,336.12Z"
       style="fill:#FFC727"
       id="path12" />
    <path
       d="M635.76,403.74c-.57,1-1.19,2-1.84,3a67.66,67.66,0,0,1-9,11.05c-1,1-10.47,1.35-25,1.37-9.74,0-21.76-.12-35-.32l-4-.05c-17.5-.26-36.94-.6-56.13-.81l-3.55,0c-9.69-.1-19.27-.16-28.47-.16H178.14c-6.18,0-13.64-2.94-21.5-8.3l-1.31-.9-1.34-1a105.24,105.24,0,0,1-12.49-11,155.79,155.79,0,0,1-26.73-37.68c-.49-.95-1-1.91-1.45-2.88a167.83,167.83,0,0,1-8.2-19.92c-.46-1.35-.91-2.71-1.35-4.05q-.78-2.42-1.55-4.8c-2.48-7.84-4.7-15.53-6.67-22.9-.27-1-.52-2-.78-2.94-1.63-6.27-3.08-12.28-4.33-17.92l-.73-3.35c-4.53-21.25-6.12-36.56-4.59-39.16h0a.71.71,0,0,1,.21-.26c.19-.15.47-.08.84.2,1.82,1.38,5.75,7.75,10.89,16.33.49.8,1,1.63,1.48,2.47,2.3,3.83,4.8,8,7.43,12.34l1.53,2.49h0c2.59,4.2,5.29,8.5,8,12.68l1.39,2.12c6.18,9.26,12.55,17.82,18.43,23.53,1,1,2,1.91,3,2.72.21.17.41.34.61.48a25.42,25.42,0,0,0,2.48,1.76l.18.11a79.33,79.33,0,0,0,18.68,8.57c1,.32,2.06.61,3.09.88,10.08,2.67,20.28,3.26,31.6,3.39,1.16,0,2.33,0,3.51,0H525.78c16.15,0,23.55-8,23.89-21.89h0a44.73,44.73,0,0,0-.13-4.86c-.12-1.42-.29-2.9-.52-4.42-.16-1-.34-2.1-.56-3.18h0a101.72,101.72,0,0,0-2.72-10.64c-1.46-4.74-2.92-9.82-4.35-15.15-.22-.81-.44-1.62-.65-2.43-2.3-8.69-4.51-18-6.51-27.5-.47-2.25-.94-4.5-1.39-6.77h0q-.6-3-1.18-6.11c-.14-.79-.29-1.58-.43-2.36-1.52-8.36-2.85-16.71-3.88-24.82h0c-.17-1.27-.32-2.53-.47-3.78h0c-.06-.49-.11-1-.17-1.45H593.4s.32,7.16,1.67,17.8c.12.91.24,1.84.37,2.8,1,7.54,2.55,16.51,4.77,25.78l.6,2.45a171.82,171.82,0,0,0,6.52,20.66c.67,1.73,1.39,3.44,2.13,5.11a94.45,94.45,0,0,0,6.1,11.62c1.46,2.34,3.12,5.1,4.9,8.21.6,1.06,1.22,2.17,1.85,3.32a206.68,206.68,0,0,1,17.26,40.49c.3,1,.59,2.06.87,3.1,0,.12.07.25.1.38v.08c.79,2.9,1.49,5.78,2.09,8.75h0C646.52,365.41,646,385.92,635.76,403.74Z"
       style="fill:#217821"
       id="path13" />
    <g
       style="opacity:0.1"
       id="g41">
      <path
         d="M550.9,195.44h2.6c-1.57,4.38-4.35,8.51-9.24,10a12.3,12.3,0,0,1-2.19.45l-.4,0c-5.78.54-10.64-2-14.32-5.19h0c-.17-1.27-.32-2.53-.47-3.78,3.56,3.68,8.73,7.29,14.92,6.57C546.52,202.92,549.28,199.42,550.9,195.44Z"
         style="fill:#fff"
         id="path14" />
      <path
         d="M585.6,195.44a13.87,13.87,0,0,1-5.23,3.29,14.7,14.7,0,0,1-1.55.46c-.47.11-.94.2-1.4.26-4.95.69-9.46-1.25-13.21-4h4.56a13.63,13.63,0,0,0,9.42,1.44l.17,0a11.21,11.21,0,0,0,3.33-1.4Z"
         style="fill:#fff"
         id="path15" />
      <path
         d="M595.07,213.24c.12.91.24,1.84.37,2.8-7.17-2.92-12.68-9.54-15.6-13.74-.14,4.57-1.1,11.71-5.26,16.56a14.08,14.08,0,0,1-7,4.48,16.39,16.39,0,0,1-2.6.52c-.39,0-.78.08-1.18.1-11.13.57-17.19-7.71-20-13.48-.75,6-3.36,15-12.11,17.39-.14-.79-.29-1.58-.43-2.36,9.8-3,10.46-16,10.44-19.63,0-.6,0-.94,0-1a1.2,1.2,0,0,1,2.35-.38s.09.33.26.87a31.9,31.9,0,0,0,4,8.09c4,5.7,9.18,8.42,15.4,8.08a12.39,12.39,0,0,0,9.1-4.26c4.64-5.41,4.79-14.5,4.66-17.86,0-.81-.07-1.28-.07-1.31a1.21,1.21,0,0,1,.84-1.26l.17,0a1.2,1.2,0,0,1,1.23.61s.28.5.78,1.28C582.3,201.8,587.74,209.62,595.07,213.24Z"
         style="fill:#fff"
         id="path16" />
      <path
         d="M600.21,241.82l.6,2.45a18.41,18.41,0,0,1-3.76,1.72c-.62.21-1.25.39-1.91.55l-.46.11c-9.28,2.08-17.36-1.32-23.36-9.87a42.91,42.91,0,0,1-4.44-8.21c-1,6.74-4.27,17.29-14.21,19.62a17.24,17.24,0,0,1-2.37.39h-.14c-7.26.63-12.42-3.24-15.93-7.83-.47-2.25-.94-4.5-1.39-6.77,2.89,5.84,8.3,13,17.24,12.21,13.09-1.24,14.69-18,14.89-22.34,0-.63,0-1,0-1a1.2,1.2,0,0,1,2.36-.3l.22.81a43.49,43.49,0,0,0,5.75,12.11c5.56,7.89,12.71,10.84,21.26,8.77A17.58,17.58,0,0,0,600.21,241.82Z"
         style="fill:#fff"
         id="path17" />
      <path
         d="M609.46,270a35,35,0,0,1-8.8-9.93,55.09,55.09,0,0,1-4.4-9,54.45,54.45,0,0,1-3.23,9.91c-3.75,8.4-9.15,13.18-15.72,14a16.73,16.73,0,0,1-2,.12c-.32,0-.63,0-.95,0h-.12c-7.88-.47-14.53-5.32-19.25-14a48.36,48.36,0,0,1-3.24-7.48c-1.21,5.37-4,13.23-10.34,17-.22-.81-.44-1.62-.65-2.43,7.48-5,9.12-16.81,9.42-19.67,0-.39.05-.61.05-.63a1.2,1.2,0,0,1,1.12-1.12,1.21,1.21,0,0,1,1.26,1s0,.15.08.38c.67,3.06,5.84,23.61,21.69,24.57s19.81-22.69,20.32-26.11c0-.25.06-.39.06-.41a1.19,1.19,0,0,1,1.1-1.05,1.16,1.16,0,0,1,1.21.8l0,.09c0,.17,3,11.16,10.25,18.85C608,266.66,608.72,268.37,609.46,270Z"
         style="fill:#fff"
         id="path18" />
      <path
         d="M139.6,320.26a1.17,1.17,0,0,1-.42.73.86.86,0,0,1-.2.13,1.2,1.2,0,0,1-1.19,0s-.74-.45-1.93-1c-5-2.5-18.73-7.95-27.65,1.43a17.05,17.05,0,0,0-4.44,10.59q-.78-2.42-1.55-4.8a18.18,18.18,0,0,1,4.26-7.43,19.6,19.6,0,0,1,3.87-3.16,18,18,0,0,1,2.2-1.17c8.88-3.94,19.13-.11,23.86,2.15a46.72,46.72,0,0,1-1-4.76c1,1,2,1.91,3,2.72.07.31.14.61.22.89.48,1.91.91,3.09.93,3.14A1.16,1.16,0,0,1,139.6,320.26Z"
         style="fill:#fff"
         id="path19" />
      <path
         d="M142.29,357.79a1.59,1.59,0,0,1-2.12,2.29c-.09-.06-.45-.27-1-.56-3.54-1.85-15.32-7.11-24.38-.6-.49-.95-1-1.91-1.45-2.88,8.1-5.49,17.9-3.17,23.65-1-3.45-6.55-8.32-19.16-3.11-31.23a26.58,26.58,0,0,1,2-3.8,21.75,21.75,0,0,1,2.75-3.54c.12-.14.26-.28.39-.41a25.42,25.42,0,0,0,2.48,1.76l.18.11a19.11,19.11,0,0,0-2.06,2.29c-.21.27-.42.56-.62.86a23.23,23.23,0,0,0-2.19,4c-5.51,12.75,1.86,26.76,4.57,31.22C141.91,357.25,142.27,357.76,142.29,357.79Z"
         style="fill:#fff"
         id="path20" />
      <path
         d="M622.31,293.19a24.12,24.12,0,0,1-4.83,7.63,18.71,18.71,0,0,1-10.5,5.53,22.62,22.62,0,0,1-3.35.34c-.3,0-.6,0-.9,0h-.62C586,306.34,578.84,291,576,281.81c-1.19,4.37-3.51,9.92-8,13.82a19.4,19.4,0,0,1-11.88,4.7,25.85,25.85,0,0,1-3.72-.06l-.24,0a17.88,17.88,0,0,1-3.15-.57c-.16-1-.34-2.1-.56-3.18a16,16,0,0,0,4.2.92c5.39.44,9.92-.87,13.46-3.93,6.65-5.77,8-16.08,8.22-18.33,0-.27,0-.43,0-.44a1.43,1.43,0,0,1,2.85-.12s0,.18.08.47a53.79,53.79,0,0,0,4.7,14.2c4.82,9.48,11.6,14.38,20.16,14.57,5.56.1,9.93-1.56,13.24-5a23,23,0,0,0,5.05-9C621.06,290.93,621.68,292,622.31,293.19Z"
         style="fill:#fff"
         id="path21" />
      <path
         d="M639.57,333.68c.3,1,.59,2.06.87,3.1-.49.08-1,.14-1.49.18-.84.07-1.67.1-2.5.1-9.87,0-18.52-5-25.14-14.47a56,56,0,0,1-5.82-10.87c-2.85,8.47-10.5,24.74-27.21,24.74h-.58c-.83,0-1.65-.07-2.44-.15a26.91,26.91,0,0,1-3.21-.49,21.53,21.53,0,0,1-12.14-7.11c-6-7-7.15-17.14-7.18-23.59-.86,1.19-1.88,2.5-3.06,3.83a44.73,44.73,0,0,0-.13-4.86c1.12-1.5,2-2.84,2.63-3.85s1-1.8,1.06-1.84a1.58,1.58,0,0,1,1.89-.8,1.6,1.6,0,0,1,1.11,1.73s-.05.38-.1,1c-.33,3.85-1,17.9,6.21,26.31,3.64,4.25,8.83,6.48,15.43,6.63h.49c18.23,0,24.44-22.63,25.37-26.58.09-.36.14-.56.14-.58a1.6,1.6,0,0,1,3.11-.1s0,.13.1.34c1,3.29,9.46,29.28,31.71,27.43C639,333.76,639.28,333.72,639.57,333.68Z"
         style="fill:#fff"
         id="path22" />
      <path
         d="M172.43,349.1a1.59,1.59,0,0,1,.06,1.75,1.61,1.61,0,0,1-1.36.76,1.53,1.53,0,0,1-.47-.07c-.11,0-11.31-3.36-20.62,1.65-5.26,2.83-9,7.8-11.06,14.79-6.08,20.47,13.23,36.38,15.69,38.31l.25.19a1.59,1.59,0,0,1,.44,2.08l0,0-1.34-1a105.24,105.24,0,0,1-12.49-11c-5-7.46-9.07-17.77-5.58-29.53a33.41,33.41,0,0,1,3.23-7.55,25.27,25.27,0,0,1,2.21-3.18,23.09,23.09,0,0,1,7.19-6c6.7-3.6,14-3.43,18.6-2.8-3.08-4.34-7.48-12.21-6.81-21,1,.32,2.06.61,3.09.88-.6,11.45,8.35,21,8.85,21.49A.9.9,0,0,1,172.43,349.1Z"
         style="fill:#fff"
         id="path23" />
      <path
         d="M202.74,338a1.59,1.59,0,0,1-1.46,2.58l-.78-.09c-4.09-.39-22.33-1.19-27.37,14.89C166.8,375.56,185,389.2,187.8,391.18a3.52,3.52,0,0,0,.37.26,1.6,1.6,0,0,1-1,2.93s-.45,0-1.21-.06a43.16,43.16,0,0,0-13.28,1.76c-7.79,2.39-13.17,6.9-16,13.43l-1.31-.9-1.34-1c.21-.45.44-.9.68-1.34,3.44-6.36,9.26-10.9,17.16-13.3a45,45,0,0,1,10.8-1.83c-6.42-5.6-18.18-18.79-12.55-36.76a25.3,25.3,0,0,1,1-2.79,25.65,25.65,0,0,1,1.3-2.51c6.52-10.85,19.66-12,25.88-11.92a41.1,41.1,0,0,1-3.28-6.37c1.16,0,2.33,0,3.51,0a38.29,38.29,0,0,0,3.33,5.93C202.38,337.52,202.72,337.94,202.74,338Z"
         style="fill:#fff"
         id="path24" />
      <path
         d="M640.54,337.24c.79,2.9,1.49,5.78,2.09,8.75h0c-1.33,6.3-4.21,14.45-10.45,20.58-5.84,5.74-13.55,8.65-22.95,8.65h-1c-1.35,0-2.64-.12-3.89-.26a36.59,36.59,0,0,1-4.42-.78c-20-4.78-25.75-24.78-27.31-33.61-5.34,7.14-19.12,22.32-36.93,17.45-.65-.17-1.3-.38-2-.61s-1.49-.56-2.19-.89c-11.38-5.1-14.79-16.28-15.48-25.67h3.13c0,.63.1,1.26.18,1.9,1.34,11.24,6.53,18.53,15.42,21.65,20.08,7.07,35.22-15.37,37.26-18.58l.24-.38a1.59,1.59,0,0,1,3,.72,1,1,0,0,0,0,.15c.19,2.83,3.07,35.08,33,35.72,9,.19,16.23-2.4,21.63-7.71C639.06,355.36,640.36,341.08,640.54,337.24Z"
         style="fill:#fff"
         id="path25" />
      <path
         d="M635.76,403.74c-.57,1-1.19,2-1.84,3-18.87-2.28-28.82-21.71-32.09-29.53a59.68,59.68,0,0,1-10.1,12.35c-10,9.19-21.4,12.3-33.13,9l-1-.29a40.23,40.23,0,0,1-4-1.47c-9.87-4.27-16.58-12.27-19.53-23.34a50.83,50.83,0,0,1-1.65-13.4,39.05,39.05,0,0,1-22.87,9.35,33.46,33.46,0,0,1-16.05-2.77,30.12,30.12,0,0,1-8.17-5.38c-6.42-5.92-9.16-15-7.91-26.18.17-1.49.4-2.92.65-4.27h3.28c-1.69,8.4-2.15,20.45,6.14,28.1a27.81,27.81,0,0,0,5,3.69c.42.24.85.47,1.27.68h0a30.05,30.05,0,0,0,15.54,2.93c8.51-.57,16.82-4.24,22.21-9.74.53-.53,1-1.07,1.49-1.63a1.6,1.6,0,0,1,2.81,1.23s-.09.72-.15,1.9a48.38,48.38,0,0,0,1.49,14.76c2.91,10.84,9.47,18.18,19.5,21.85.43.16.88.32,1.33.46l.53.17c23.23,7.18,38-15.18,41.39-21.08.48-.85.74-1.35.76-1.39a1.6,1.6,0,0,1,2.95.23s.24.74.71,1.94a63.13,63.13,0,0,0,8.58,15.3C619.49,398.67,627.14,403.19,635.76,403.74Z"
         style="fill:#fff"
         id="path26" />
      <path
         d="M564.87,418.85l-4-.05a46.76,46.76,0,0,1-5.65-18.74,68,68,0,0,1-14.41,8.8c-12.7,5.65-24.85,5.62-35.33-.05-.74-.4-1.48-.83-2.21-1.29s-1.56-1-2.28-1.57c-15.54-11.6-13.21-30.39-11.33-38.39-7.75,3.21-26.54,9-40.38-2.57-.7-.59-1.39-1.23-2.07-1.91a27.24,27.24,0,0,1-1.86-2.06c-8-9.64-7.55-21.52-5.61-30.17h3.54c-.32,1.31-.6,2.72-.82,4.18-1.57,10.54.86,19.15,7.24,25.58,12.88,13,32.14,6.52,39.16,3.49,1.66-.71,2.63-1.23,2.68-1.26a1.76,1.76,0,0,1,1-.2,1.7,1.7,0,0,1,1,.41,1.6,1.6,0,0,1,.25.27h0A1.76,1.76,0,0,1,494,365s-.23.63-.53,1.69A46.45,46.45,0,0,0,491.76,380c.27,10.83,4.78,19.08,13.39,24.52l.06,0c20.22,12.71,41.82-2.43,48.39-7.76,1.26-1,2-1.69,2-1.73a1.7,1.7,0,0,1,1.07-.48,1.89,1.89,0,0,1,.87.15,1.62,1.62,0,0,1,.46.31,1.74,1.74,0,0,1,.57,1.36c0,.18,0,.95,0,2.15A41.17,41.17,0,0,0,564.87,418.85Z"
         style="fill:#fff"
         id="path27" />
      <path
         d="M505.92,406.45c0,.05-.21.91-.44,2.36a61.12,61.12,0,0,0-.74,9.18l-3.55,0a63.12,63.12,0,0,1,.62-8.49,53.76,53.76,0,0,1-21.24,5.27c-8.15.33-19.69-1.18-28.32-10.08-12.57-13-8.75-32.34-6.53-40.09a38.29,38.29,0,0,1-26.5-1.89A29.87,29.87,0,0,1,408.33,354a29,29,0,0,1-2.88-4.48,31.52,31.52,0,0,1-1.84-4.28,31.9,31.9,0,0,1-1.48-14.41h3.58a28.54,28.54,0,0,0,1.22,13.26,26.16,26.16,0,0,0,13.8,15.4A34.85,34.85,0,0,0,445.35,361c.84-.24,1.67-.52,2.5-.82a1.76,1.76,0,0,1,2.24,2.28s-.36,1-.81,2.51c-2,6.73-6,25.41,5.49,37.23C467.55,415.4,489.91,412,501,406c.81-.44,1.56-.9,2.24-1.36a1.74,1.74,0,0,1,1.92,0l.06,0A1.75,1.75,0,0,1,505.92,406.45Z"
         style="fill:#fff"
         id="path28" />
      <path
         d="M453.78,408.38a53.86,53.86,0,0,0-2.18,9.42h-3.55a62.36,62.36,0,0,1,1.37-7.07,43.21,43.21,0,0,1-29.6-1.74,33,33,0,0,1-16.14-15,35.46,35.46,0,0,1-2.31-5.54c-.13-.37-.24-.74-.35-1.12-5-17.29.72-29.47,3.8-34.36-6.06-1.39-20.1-6.16-24.89-21.13-.11-.33-.21-.66-.31-1-.25-.88-.47-1.78-.65-2.72.6-.46,1-.7,1-.72a1.76,1.76,0,0,1,1.92,2.94l-.7.5h2.12c4.31,13.2,16.73,17.45,22.15,18.69A21.74,21.74,0,0,0,408,350a1.78,1.78,0,0,1,1.45,1.09,1.74,1.74,0,0,1-.3,1.79,12.11,12.11,0,0,0-.84,1.13c-2.45,3.55-8.94,15.12-3.94,32.35.3,1,.64,2,1,3,.06.16.13.32.2.47a0,0,0,0,1,0,0,29.62,29.62,0,0,0,15.64,15.94c11.05,4.93,23.36,3.67,30.12.42a1.75,1.75,0,0,1,2.41,2.18Z"
         style="fill:#fff"
         id="path29" />
      <path
         d="M405.35,391.24s-.7,1-1.67,2.76a64.92,64.92,0,0,0-6,14.62A49.88,49.88,0,0,0,396,417.8h-3.44c.84-11.39,5.66-21.28,8.25-25.85a52.47,52.47,0,0,1-13.68-2.55c-7.37-2.46-13-6.49-16.82-11.88-.18-.26-.36-.53-.53-.8a29.54,29.54,0,0,1-4.11-10c-4-18.42,4.72-30.42,10.23-35.9a37,37,0,0,1,3.06-2.72c.6-.46,1-.7,1-.72a1.76,1.76,0,0,1,1.92,2.94l-.7.5c-.33.24-.75.58-1.25,1-4.53,3.84-15,15.07-10.82,34.16,2.12,9.74,8.53,16.48,19.05,20a49.62,49.62,0,0,0,13.21,2.42c1.52.08,2.43,0,2.46,0a1.87,1.87,0,0,1,1.57.84l0,.06a2.05,2.05,0,0,1,.16.41,0,0,0,0,1,0,0A1.79,1.79,0,0,1,405.35,391.24Z"
         style="fill:#fff"
         id="path30" />
      <path
         d="M369.44,379.93a46.44,46.44,0,0,0-11.06,9.65c-6.78,8.16-9.26,17.1-7.37,26.57.11.56.24,1.11.38,1.65.07.26.14.51.22.76a2,2,0,0,0-.47-.76h-3.85c-.07-.29-.13-.59-.19-.88s-.08-.41-.11-.61c-1.89-10.38,1-20.52,8.41-29.38a51.08,51.08,0,0,1,6.74-6.67,30.38,30.38,0,0,1-17.61-7c-5.39-4.69-8.41-11.27-8.74-19a.41.41,0,0,1,0-.11,24.48,24.48,0,0,1,.68-6.93,26.48,26.48,0,0,1,9.43-14.32c.91-.74,1.82-1.41,2.71-2H357a35,35,0,0,0-8.7,5.16c-6,4.9-8.83,10.93-8.56,17.93.27,6.7,2.82,12.33,7.38,16.3,5.31,4.61,13,6.79,21.11,6a2,2,0,0,1,2.07,1.31l0,.07A2,2,0,0,1,369.44,379.93Z"
         style="fill:#fff"
         id="path31" />
      <path
         d="M351.14,417.8H340a54.65,54.65,0,0,1-5.89-3.15c-10.32-6.36-16.73-15.29-18.55-25.85,0-.08,0-.16,0-.24a30.84,30.84,0,0,1-.37-6.79c.88-15.86,13.84-27.37,19-31.35-3.24-3.09-9.6-10.12-11.94-19.57h4.07a31.83,31.83,0,0,0,3,7,42.05,42.05,0,0,0,7.24,9.29c1.22,1.18,2,1.82,2.06,1.84a2,2,0,0,1,.76,1.65,2,2,0,0,1-.89,1.58c-.05,0-1.06.72-2.6,2-5.8,4.71-19.06,17.46-16.37,33.7,1.58,9.59,7.18,17.42,16.64,23.29A52.63,52.63,0,0,0,347,416.31c1.93.66,3.14.93,3.17.94A2,2,0,0,1,351.14,417.8Z"
         style="fill:#fff"
         id="path32" />
      <path
         d="M319,385.47a2,2,0,0,1-1,1.71c-.18.11-1.11.65-2.48,1.62-5.09,3.62-16.34,13.25-18.86,29h-4c2.63-17.46,15.18-28.31,20.72-32.32-13.35-9.12-18.7-21.15-18.55-30.71a22,22,0,0,1,.84-5.76c.14-.49.3-1,.46-1.45a34.39,34.39,0,0,1,12.72-16.71h7.73c-6.07,3.13-14.12,9.06-17.08,19.27a19.84,19.84,0,0,0-.46,2c-2.14,11.87,7.42,23.4,16.07,29.69,1,.73,2,1.39,2.94,2A2,2,0,0,1,319,385.47Z"
         style="fill:#fff"
         id="path33" />
      <path
         d="M299,352.08a2,2,0,0,1-1.28,1.43,29.38,29.38,0,0,0-2.93,1.26c-5.77,2.77-18.5,10.32-23.68,24.85a35.62,35.62,0,0,0,2.56,29.15,39.14,39.14,0,0,0,6.69,9H275a43.73,43.73,0,0,1-4.81-7.14,39.57,39.57,0,0,1-2.79-32.38c.08-.23.17-.46.26-.69.37-1,.78-2,1.22-2.93,6.54-14.13,19.22-21.23,24.82-23.79-5.56-6.39-8.52-13.11-8.81-20h4c.28,5.69,2.7,11.29,7.23,16.71.73.89,1.54,1.78,2.4,2.67A2,2,0,0,1,299,352.08Z"
         style="fill:#fff"
         id="path34" />
      <path
         d="M269.12,376a2,2,0,0,1-1.28,1.53l-.18.07c-2.32.91-26.81,11.16-26.92,35.1v0a36.69,36.69,0,0,0,.33,5.09h-4q-.13-1.14-.21-2.28c-.07-.94-.09-1.88-.09-2.83,0-1.17.06-2.31.17-3.42,1.89-20.41,19.75-30.91,26.75-34.28-3.68-4-10.71-13.34-10.75-26.08,0-1,0-2.07.14-3.14a36.69,36.69,0,0,1,1.31-7,31.69,31.69,0,0,1,3.44-7.88h4.79a27.48,27.48,0,0,0-4.4,9c-5.87,20.42,10.07,34.15,10.23,34.29a2,2,0,0,1,.44.54A2,2,0,0,1,269.12,376Z"
         style="fill:#fff"
         id="path35" />
      <path
         d="M253.67,347.9a2,2,0,0,1-.74,1,2,2,0,0,1-1.19.36c-.22,0-24-.21-31.05,17.15-9.47,23.17,8.95,38.06,16.24,42.85,1.51,1,2.54,1.56,2.75,1.67a2,2,0,0,1,1.06,1.75v0a1.09,1.09,0,0,1,0,.18,2,2,0,0,1-1.4,1.72c-.05,0-1,.31-2.48.91-1.3.52-3,1.28-5,2.28h-7.77a61,61,0,0,1,10.2-5.54c-6.95-4.79-21.7-17.28-20.12-36a34.83,34.83,0,0,1,.67-4.49,40.27,40.27,0,0,1,2.13-6.82c3.39-8.29,10.52-14.31,20.62-17.43a50.53,50.53,0,0,1,9.16-1.89,26.37,26.37,0,0,1-7.09-14.75h4a22.11,22.11,0,0,0,9.24,14.81l.14.11A2,2,0,0,1,253.67,347.9Z"
         style="fill:#fff"
         id="path36" />
      <path
         d="M216.7,374.4a1.74,1.74,0,0,1-1.22,1.38s-.5.16-1.29.45c-5.18,1.9-24.31,10-27.58,26.73a31.78,31.78,0,0,0,.51,14.84h-3.56a34.73,34.73,0,0,1-.39-15.52,29.48,29.48,0,0,1,2.78-8,31.39,31.39,0,0,1,1.85-3.13c6.76-10.12,18.34-15.6,23.75-17.72-5-4.7-15.78-17.11-11.05-33a33.37,33.37,0,0,1,1.37-3.69c.41-.94.88-1.88,1.41-2.84a24.35,24.35,0,0,1,2-3.08H210a20.61,20.61,0,0,0-3.63,4.78c-4.85,8.77-4.72,17.65.38,26.38a39.89,39.89,0,0,0,8.13,9.73c.7.61,1.14.94,1.16.95A1.77,1.77,0,0,1,216.7,374.4Z"
         style="fill:#fff"
         id="path37" />
      <path
         d="M112.62,316a1.19,1.19,0,0,1-2.16.89,1.09,1.09,0,0,1-.11-.16c-.86-1.16-6.42-8.46-14.8-12.31-.27-1-.52-2-.78-2.94a34.8,34.8,0,0,1,8.64,4.88,47,47,0,0,1,6.37,5.9c-.46-6.13-.34-17.62,5.76-25l1.39,2.12c-6.51,8.64-4.77,23.4-4.38,26.14C112.59,315.78,112.62,315.93,112.62,316Z"
         style="fill:#fff"
         id="path38" />
      <path
         d="M106,272.07l1.53,2.49a16.24,16.24,0,0,0-9.15,1.52,17.72,17.72,0,0,0-7.91,7.43l-.73-3.35a20,20,0,0,1,7.61-6.24A18.54,18.54,0,0,1,106,272.07Z"
         style="fill:#fff"
         id="path39" />
      <path
         d="M98.54,259.73a26.2,26.2,0,0,0-1.65,12.66,1.2,1.2,0,0,1-1,1.36l-.18,0a1.2,1.2,0,0,1-1.18-1c-.07-.47-1.24-8.7,2.53-15.49C97.55,258.06,98,258.89,98.54,259.73Z"
         style="fill:#fff"
         id="path40" />
      <path
         d="M86.17,240.93l-1,.06a.71.71,0,0,1,.21-.26C85.52,240.58,85.8,240.65,86.17,240.93Z"
         style="fill:#fff"
         id="path41" />
    </g>
    <path
       d="M594.37,207.14l-64.44,10.92c-1.29-7.67-2.38-15.27-3.22-22.62H593.4S593.6,200,594.37,207.14Z"
       style="opacity:0.1"
       id="path42" />
    <path
       d="M584.42,195.44c.38,3.49,1.36,12.53,3.35,24.68,0,.31.1.61.15.91q.66,4.07,1.49,8.52c.06.3.11.61.17.91.64,3.42,1.34,7,2.13,10.67.07.31.12.6.2.91.81,3.82,1.71,7.77,2.71,11.79.07.29.15.6.22.9.8,3.21,1.65,6.48,2.57,9.76.4,1.44.82,2.86,1.26,4.25.09.3.19.6.28.89,1.46,4.57,3.1,8.92,4.84,13.17.12.3.24.59.37.89,1.88,4.57,3.88,9,5.86,13.51q.19.45.39.87c2.26,5.1,4.5,10.22,6.58,15.6.11.28.22.58.33.88a152.32,152.32,0,0,1,5.25,16.32c.09.3.16.6.24.9A134.13,134.13,0,0,1,626,349.22c0,.3.07.61.1.91a150,150,0,0,1,.86,16.92c0,1.53-.06,3-.16,4.48,0,.31,0,.62-.09.93a60.73,60.73,0,0,1-4.41,18c-.12.31-.25.6-.38.9a63.85,63.85,0,0,1-6.32,11.27,10.17,10.17,0,0,1-.6.86,73.19,73.19,0,0,1-7.8,9.18c-.27.28-.55.56-.83.82a80.09,80.09,0,0,1-6.45,5.64c14.56,0,24-.37,25-1.37,1.29-1.29,2.51-2.6,3.64-3.93.31-.33.58-.67.85-1a64.5,64.5,0,0,0,6.47-9.23c.2-.32.38-.65.56-1a65.1,65.1,0,0,0,5.17-11.86c.11-.33.21-.65.31-1a75.7,75.7,0,0,0,3.2-20.17c0-.32,0-.65,0-1a106.6,106.6,0,0,0-1.82-20.91c-.06-.3-.11-.61-.17-.9a153.33,153.33,0,0,0-4.24-16.76c-.1-.3-.19-.61-.29-.92-1.81-5.69-3.87-11.21-6-16.43-.12-.31-.25-.62-.38-.91-2.34-5.62-4.78-10.88-7.11-15.67-.15-.31-.3-.6-.45-.9-2.49-5.1-4.84-9.64-6.8-13.45l-.25-.49-.21-.41c-2.16-4.25-4.13-8.62-5.94-13l-.36-.89c-1.82-4.51-3.47-9.06-5-13.55-.1-.31-.2-.61-.29-.91-1.26-3.83-2.39-7.62-3.42-11.32-.08-.3-.18-.61-.25-.92-1-3.63-1.89-7.16-2.69-10.55-.08-.32-.15-.62-.21-.93q-1.06-4.52-1.89-8.61c-.06-.31-.13-.62-.18-.92-2.85-14.15-3.83-23.86-3.83-23.86Z"
       style="fill:#455a64"
       id="path43" />
    <path
       d="M610.41,298.07a123.37,123.37,0,0,1,14.72-1.89c-.15-.31-.3-.6-.45-.9A124.33,124.33,0,0,0,610,297.2Q610.21,297.65,610.41,298.07Z"
       style="fill:#263238"
       id="path44" />
    <path
       d="M617.32,314.55a124.8,124.8,0,0,1,15.3-1.79c-.12-.31-.25-.62-.38-.91A123.43,123.43,0,0,0,617,313.67C617.1,314,617.21,314.25,617.32,314.55Z"
       style="fill:#263238"
       id="path45" />
    <path
       d="M622.81,331.77a123.22,123.22,0,0,1,16.13-1.66c-.1-.3-.19-.61-.29-.92a124.19,124.19,0,0,0-16.08,1.68C622.66,331.17,622.73,331.47,622.81,331.77Z"
       style="fill:#263238"
       id="path46" />
    <path
       d="M626.09,350.13a127,127,0,0,0,17.26-2.36c-.06-.3-.11-.61-.17-.9A130.43,130.43,0,0,1,626,349.22C626,349.52,626.06,349.83,626.09,350.13Z"
       style="fill:#263238"
       id="path47" />
    <path
       d="M626.7,372.46a114,114,0,0,0,18.44-2.82c0-.32,0-.65,0-1a112.2,112.2,0,0,1-18.38,2.85C626.76,371.84,626.74,372.15,626.7,372.46Z"
       style="fill:#263238"
       id="path48" />
    <path
       d="M628.51,391.64a103.44,103.44,0,0,0,13.12-.85c.11-.33.21-.65.31-1a99.35,99.35,0,0,1-19.65.69c-.12.31-.25.6-.38.9C624.14,391.57,626.35,391.64,628.51,391.64Z"
       style="fill:#263238"
       id="path49" />
    <path
       d="M625.67,404.16a98.1,98.1,0,0,0,10.23-.53c.2-.32.38-.65.56-1a95,95,0,0,1-20.87,0,10.17,10.17,0,0,1-.6.86A87,87,0,0,0,625.67,404.16Z"
       style="fill:#263238"
       id="path50" />
    <path
       d="M606.36,413.53a88.69,88.69,0,0,0,12.32.84,97.87,97.87,0,0,0,9.9-.5c.31-.33.58-.67.85-1a94.28,94.28,0,0,1-22.24-.15C606.92,413,606.64,413.27,606.36,413.53Z"
       style="fill:#263238"
       id="path51" />
    <path
       d="M604.16,283.69a125.36,125.36,0,0,1,13.72-1.86l-.25-.49-.21-.41a131.47,131.47,0,0,0-13.63,1.87C603.91,283.1,604,283.39,604.16,283.69Z"
       style="fill:#263238"
       id="path52" />
    <path
       d="M598.67,268.74c.09.3.19.6.28.89,3.8-.71,8-1.34,12.53-1.73l-.36-.89C606.64,267.41,602.45,268,598.67,268.74Z"
       style="fill:#263238"
       id="path53" />
    <path
       d="M594.62,253.83c.07.29.15.6.22.9,3.52-.56,7.32-1,11.32-1.27-.1-.31-.2-.61-.29-.91C601.89,252.82,598.12,253.27,594.62,253.83Z"
       style="fill:#263238"
       id="path54" />
    <path
       d="M591.71,241.13c.07.31.12.6.2.91,3.31-.4,6.86-.7,10.54-.81-.08-.3-.18-.61-.25-.92C598.53,240.43,595,240.73,591.71,241.13Z"
       style="fill:#263238"
       id="path55" />
    <path
       d="M589.41,229.55c.06.3.11.61.17.91,3.14-.36,6.47-.61,9.93-.7-.08-.32-.15-.62-.21-.93C595.85,228.93,592.54,229.19,589.41,229.55Z"
       style="fill:#263238"
       id="path56" />
    <path
       d="M587.77,220.12c0,.31.1.61.15.91,3-.38,6.18-.66,9.49-.81-.06-.31-.13-.62-.18-.92C593.92,219.46,590.75,219.74,587.77,220.12Z"
       style="fill:#263238"
       id="path57" />
    <path
       d="M569.6,57a26.94,26.94,0,0,0-1.15,11.53,13.93,13.93,0,0,0,1.9,5.36,8.85,8.85,0,0,0,4.08,3.64,19.64,19.64,0,0,0,5.56,1c1.92.15,3.87.19,5.83.24a94.85,94.85,0,0,1,11.85.74,33.15,33.15,0,0,1,11.59,3.62,23.49,23.49,0,0,1,7.1,6A13.63,13.63,0,0,1,618,92a33.17,33.17,0,0,1,1.85,5.84c.47,2,.84,3.89,1.21,5.82.73,3.87,1.41,7.7,2.36,11.43a34.27,34.27,0,0,0,4.14,10.41,12.88,12.88,0,0,0,3.66,3.76,10.54,10.54,0,0,0,2.34,1.13,19.93,19.93,0,0,0,2.64.76,39.86,39.86,0,0,0,11.32.41,91.48,91.48,0,0,1,11.89-.48,23.38,23.38,0,0,1,6.05,1.07,17.69,17.69,0,0,1,5.45,2.91,19.68,19.68,0,0,1,4.16,4.52,17,17,0,0,1,2.17,5.7,37.37,37.37,0,0,1,.13,11.89,64.19,64.19,0,0,1-2.61,11.49,72.35,72.35,0,0,0,1.91-11.57,36.11,36.11,0,0,0-.68-11.52,16.4,16.4,0,0,0-2.21-5.14,17.12,17.12,0,0,0-14.47-7.1,100.24,100.24,0,0,0-11.58.81,42.79,42.79,0,0,1-12.1-.23,22.82,22.82,0,0,1-3-.81,13.16,13.16,0,0,1-3-1.41,15.83,15.83,0,0,1-4.52-4.56,36.91,36.91,0,0,1-4.61-11.31c-1-3.88-1.64-7.78-2.34-11.62a59,59,0,0,0-2.79-11.07,11,11,0,0,0-1.25-2.27,21.86,21.86,0,0,0-1.8-2.07A20.81,20.81,0,0,0,608,85.47a32.27,32.27,0,0,0-10.64-3.65,109.93,109.93,0,0,0-11.58-1.18c-2-.13-3.93-.27-5.91-.52a19.83,19.83,0,0,1-5.87-1.5,8.25,8.25,0,0,1-2.53-1.83,12.81,12.81,0,0,1-1.84-2.44,14.65,14.65,0,0,1-1.76-5.73A26.19,26.19,0,0,1,569.6,57Z"
       style="fill:#263238"
       id="path58" />
    <polygon
       points="682.24 174.66 662.35 185.58 657.9 164.8 682.24 174.66"
       style="fill:#fff"
       id="polygon58" />
    <path
       d="M682.24,174.66l-9.7,5.6c-3.29,1.89-6.61,3.84-10,5.7l-.51.28-.13-.57-2.28-10.38c-.76-3.46-1.45-6.93-2.19-10.39l-.18-.85.8.33,6.16,2.55,6.1,2.62Zm0,0-12.43-4.75-6.08-2.31-6-2.38.61-.51c.75,3.46,1.54,6.91,2.26,10.38l2.17,10.4-.63-.3c3.25-1.78,6.57-3.46,9.9-5.21Z"
       style="fill:#dbdbdb"
       id="path59" />
    <path
       d="M654.48,187.56,640,195.16s-28.48-8-49.67-7.87l2.48,6.91s56.54,14.24,58.39,13.05S654.48,187.56,654.48,187.56Z"
       style="fill:#fff"
       id="path60" />
    <path
       d="M654.48,187.56,640,195.34l-.06,0-.09,0c-8.12-2.09-16.34-3.85-24.62-5.22-4.14-.66-8.29-1.26-12.46-1.7s-8.35-.67-12.53-.67l.45-.64,2.5,6.9-.35-.31,19.41,4.82c6.47,1.59,13,3.13,19.44,4.67,3.24.76,6.49,1.51,9.74,2.22,1.63.35,3.26.7,4.89,1,.82.15,1.63.3,2.45.42.41.06.82.13,1.23.16a4,4,0,0,0,.6,0h.27c.11,0,.08,0,.15-.06a3,3,0,0,0,.53-1c.14-.38.25-.77.36-1.17.22-.8.39-1.61.55-2.43.32-1.63.58-3.27.81-4.92C653.78,194.19,654.16,190.88,654.48,187.56Zm0,0c-.24,3.33-.53,6.65-.92,10-.19,1.66-.41,3.31-.69,5-.14.83-.29,1.65-.49,2.47-.1.41-.21.81-.34,1.22a3.16,3.16,0,0,1-.65,1.2.65.65,0,0,1-.41.19l-.34,0-.65,0c-.42,0-.84-.09-1.26-.14-.83-.12-1.65-.25-2.47-.4-1.65-.29-3.29-.61-4.92-.94-3.27-.66-6.53-1.36-9.79-2.08-6.51-1.44-13-3-19.48-4.54s-13-3.13-19.43-4.76l-.25-.07-.09-.24-2.47-6.92-.23-.64h.68c4.22,0,8.43.3,12.63.73s8.35,1.06,12.5,1.79,8.26,1.59,12.36,2.53S636,193.79,640,195l-.15,0Z"
       style="fill:#dbdbdb"
       id="path61" />
    <path
       d="M589.26,107.88c-8.46-2.71-11.64-.24-28-13.4C541.82,78.92,519.69,62.67,513,70.23s34.2,23.58,34.2,23.58-19.33-6.63-20.79-1.31,18.51,6.12,26.25,9.58c14.67,6.55,20.75,12.8,21.43,12.8C586.1,114.75,589.26,107.88,589.26,107.88Z"
       style="fill:#217821"
       id="path62" />
    <g
       style="opacity:0.1"
       id="g63">
      <path
         d="M589.26,107.88c-8.46-2.71-11.64-.24-28-13.4C541.82,78.92,519.69,62.67,513,70.23s34.2,23.58,34.2,23.58-19.33-6.63-20.79-1.31,18.51,6.12,26.25,9.58c14.67,6.55,20.75,12.8,21.43,12.8C586.1,114.75,589.26,107.88,589.26,107.88Z"
         id="path63"
         style="fill:#217821" />
    </g>
    <path
       d="M656.79,203.42s5.67,8.21,2.57,17.78-10.6,11.65-8.92,19.88c0,0-15.76-9.48-13.77-33.55Z"
       style="fill:#455a64"
       id="path64" />
    <path
       d="M649.57,207.07c4.62,3.46,6.16,15.33-1.18,23.08-10.28,10.85-10,18.54-10,18.54s-14.58-11-13.77-24.12,6.65-19.31,6.65-19.31Z"
       style="fill:#37474f"
       id="path65" />
    <path
       d="M646.59,205.6a21.06,21.06,0,0,1-5,16.07c-6.5,7.79-19,9-21.73,20,0,0-11.41-13.52-2.54-33.87Z"
       style="fill:#455a64"
       id="path66" />
    <path
       d="M592.2,106.49c12.51,5.73,14.88,25.76,21.92,29.39s34.45,13.63,38.92,12.64,6.94-10.16,18.09-11.15,23.53,7.18,24.27,13.13-9.41,9.91-9.41,9.91,5.77,3.19,6.19,6.77c.33,2.81-1.81,9.58-7.26,8.92S661.45,164.13,653,163s-18.17,7.76-30.88,5.78-18.83-10.57-28.41-7.93-8.42,31.22,0,31.71,19.32-3.47,25.6-1.65,13.71,11.23,20.48,11.4,16.68-1.32,18.33,0-8.75,9.41-14,10.9-37.65-6.44-47.07-8.09-38.15-5.29-58-2.56-32.21-19.08-35.67-32.71,4-49.79,15.85-58.46c5.62-4.1,19.83-1.84,33.94-3.72C569,105.55,583.27,102.39,592.2,106.49Z"
       style="fill:#217821"
       id="path67" />
    <path
       d="M584.16,192l2.18-34.27L464.93,94.63S454.87,120,474.65,134c0,0-8.13,21,9.46,30.46,0,0-1.8,18,17,22.75,0,0-1.72,11.72,12.71,16.12S584.16,192,584.16,192Z"
       style="fill:#455a64"
       id="path68" />
    <path
       d="M586.34,157.73,584.17,192l-.23.07-.18,0-.1,0-.28.08-.45.12-.69.19-2.69.72c-12,3.16-44.11,11-54.74,7.79-13.17-4-11.6-14.71-11.6-14.71-17.16-4.31-15.52-20.78-15.52-20.78-16.06-8.67-8.63-27.83-8.63-27.83-16.26-11.5-10.46-31.42-9.13-35.31Z"
       style="fill:#37474f"
       id="path69" />
    <path
       d="M588.45,159.28S549,122.92,533.73,135.87c-4.66,4,4.78,16.94,14,21.41,0,0-27.6,3.62-27.24,17,.45,17,33.88,10.35,33.88,10.35s-15.1,11.29-9.48,18c8.73,10.41,45.61-13.54,45.61-13.54s-13.68-2.82-11.91-13.25S585.85,160.06,588.45,159.28Z"
       style="fill:#455a64"
       id="path70" />
    <path
       d="M591.32,161s-30.49-19.24-39.81-8.83c-2.84,3.19,4.93,11.28,11.73,13.49,0,0-18.77,5.14-17.24,14.38,1.93,11.73,24.44,3.94,24.44,3.94s-9.54,9.44-4.84,13.36c6.43,5.37,26-8.68,26-8.68s-5.47-5.69-5.24-13.08S589.6,161.78,591.32,161Z"
       style="fill:#37474f"
       id="path71" />
    <path
       d="M693.53,169.91c1.67,2-.27,5.36-2.75,6.36s-14.25.59-19.08-.56-15.56-9.85-20.76-10.22-16.23,7.8-25.77,7.18-23-10.24-29.6-9.78c-9.05.62-6.07,25.14-2.23,26.38s19.2-2.1,24.52-1.24,16.35,11.15,20.69,11.89,18.08-1.36,20.93.62.25,6.32-2.85,7.56-18.33.62-22.91-1-12.39-10.65-18-11.52-20.07,3.71-26.88-.13-11.74-35.74,5.82-40.13c4-1,24.52,10,29.48,10.65s19.06-9.62,28.86-8.09c4.56.71,14.16,8.11,21.64,10.7C679.22,170.15,691.84,167.89,693.53,169.91Z"
       style="fill:#FFC727"
       id="path72" />
    <path
       d="M693.53,169.91c1.67,2-.27,5.36-2.75,6.36s-14.25.59-19.08-.56-15.56-9.85-20.76-10.22-16.23,7.8-25.77,7.18-23-10.24-29.6-9.78c-9.05.62-6.07,25.14-2.23,26.38s19.2-2.1,24.52-1.24,16.35,11.15,20.69,11.89,18.08-1.36,20.93.62.25,6.32-2.85,7.56-18.33.62-22.91-1-12.39-10.65-18-11.52-20.07,3.71-26.88-.13-11.74-35.74,5.82-40.13c4-1,24.52,10,29.48,10.65s19.06-9.62,28.86-8.09c4.56.71,14.16,8.11,21.64,10.7C679.22,170.15,691.84,167.89,693.53,169.91Z"
       style="fill:#5fd35f;opacity:0.6"
       id="path73" />
    <path
       d="M597.53,145.22c2.74-5.58,1-25.69-14.2-27.3-7.17-.76-1.29,8.17-1.29,8.17a24,24,0,0,0-14.23-5.16c-8.74-.27-14.39,1.94-14.57,5s13,6.19,13,6.19-13.07,4.4-13.8,10c-.39,3,4.34,4.73,13.25.55S597.53,145.22,597.53,145.22Z"
       style="fill:#FFC727"
       id="path74" />
    <g
       style="opacity:0.6000000000000001"
       id="g75">
      <path
         d="M597.53,145.22c2.74-5.58,1-25.69-14.2-27.3-7.17-.76-1.29,8.17-1.29,8.17a24,24,0,0,0-14.23-5.16c-8.74-.27-14.39,1.94-14.57,5s13,6.19,13,6.19-13.07,4.4-13.8,10c-.39,3,4.34,4.73,13.25.55S597.53,145.22,597.53,145.22Z"
         style="fill:#217821"
         id="path75" />
    </g>
    <path
       d="M589.8,134.71a10.73,10.73,0,0,0-9.28,11.35c.26,4.46,4,10.25,11,9.7,7.34-.58,10.4-6.22,9.8-11.75C600.82,139.55,596.27,133.9,589.8,134.71Z"
       style="fill:#fff"
       id="path76" />
    <path
       d="M590.19,138.38a7,7,0,0,0-6,7.38,6.8,6.8,0,1,0,13.52-1.33C597.37,141.53,594.41,137.84,590.19,138.38Z"
       style="fill:#263238"
       id="path77" />
    <path
       d="M565.07,111.7c-10.47-2-13.91,1.36-35.31-12-25.31-15.82-54-32.08-60.9-22.13s44.08,23.3,44.08,23.3-24-5.18-25,1.36,22.93,4.7,32.63,7.73c18.41,5.74,26.54,12.34,27.35,12.24C562.27,120.34,565.07,111.7,565.07,111.7Z"
       style="fill:#217821"
       id="path78" />
    <path
       d="M675.71,156.8a14.54,14.54,0,0,0,6.81-.6c3.1-1.3,5.21-4.54,2.73-7.41C680.42,143.19,672.61,152,675.71,156.8Z"
       style="fill:#263238;mix-blend-mode:multiply"
       id="path79" />
    <path
       d="M674.68,168.59a23.26,23.26,0,0,0-10.48-12.35,23.88,23.88,0,0,0-7.72-2.64,20.79,20.79,0,0,0-8.09.19,132.65,132.65,0,0,0-15.84,4.81c-5.25,1.82-10.55,3.62-16,5-10.83,2.84-22.47,3.84-33.67.8a37.88,37.88,0,0,1-7.82-3.68c-2.45-1.45-4.77-3-7.06-4.63-4.57-3.21-9-6.5-13.66-9.44a64.28,64.28,0,0,0-14.56-7.2,34.7,34.7,0,0,0-7.82-1.59,32.41,32.41,0,0,0-8,.39,68.43,68.43,0,0,0-15.64,4.64c-5.08,2.09-10.11,4.51-15.39,6.47a53.65,53.65,0,0,1-16.52,3.7,45.43,45.43,0,0,1-8.49-.42l-2.09-.35-2.07-.45c-.69-.14-1.38-.37-2.07-.55s-1.36-.44-2-.72a34.91,34.91,0,0,1-13.37-10.17A51.35,51.35,0,0,1,437.91,126a51.51,51.51,0,0,0,4,7.28,52.76,52.76,0,0,0,5,6.58,33.63,33.63,0,0,0,13.3,9.3c.63.24,1.28.43,1.92.63s1.3.36,2,.47l2,.39,2,.29a42.69,42.69,0,0,0,8.15.2,51.84,51.84,0,0,0,15.79-4c5.09-2.06,10.05-4.56,15.22-6.74a70.85,70.85,0,0,1,16.2-5,33.64,33.64,0,0,1,8.64-.47,36.92,36.92,0,0,1,8.49,1.68A66,66,0,0,1,556,144.12c4.75,3,9.23,6.37,13.74,9.56s9.1,6.32,14,8c1.21.39,2.57.65,3.89.94s2.66.48,4,.61a56.73,56.73,0,0,0,8.14.34,80.15,80.15,0,0,0,8.16-.68c2.71-.38,5.41-.89,8.09-1.5,5.37-1.21,10.66-2.85,16-4.53,2.64-.84,5.3-1.69,8-2.47a63,63,0,0,1,8.2-1.91,22.6,22.6,0,0,1,8.48.14,24.67,24.67,0,0,1,7.89,3A23.1,23.1,0,0,1,674.68,168.59Z"
       style="fill:#263238"
       id="path80" />
  </g>
  <g
     id="freepik--character-1--inject-5">
    <path
       d="M273.25,330.85H205.06c-3.72,0-7.31,0-10.79-.05h-.74l-2.4-.05-.86,0-1.7-.05-1.42-.05c-15.92-.65-30-3.11-45.22-12.48l-.45-.28-.65-.42h0c-.06-.26-.12-.52-.17-.78-.09-.42-.17-.83-.24-1.26s-.11-.64-.16-1-.09-.59-.13-.89a2.17,2.17,0,0,1,0-.25c-.08-.61-.15-1.22-.2-1.84,0-.37-.06-.74-.08-1.11v-.09c0-.51-.06-1-.08-1.54v-.11c0-.28,0-.57,0-.86,0-.59,0-1.17,0-1.77,0-.29,0-.59,0-.89,0-.62.05-1.24.09-1.87.05-.84.12-1.69.2-2.55,0-.21.05-.41.07-.62s0-.41.07-.62.07-.62.11-.93l2.77.31,7.12.8,4.26.48h0l8.39.94h0l.56.06,6.16.7,9.19,1s0,0,0,0l1.26.14.2,0,.33,0,1.91.21,1,.07,1,.06h0l.89.06,1.58.09.61,0c1.83.11,3.64.2,5.41.29l1.91.08,1.07.05h0l1.3.05h.37l1.81.07,3.35.12h0l.91,0s0,0,0,0c7.3.24,14,.4,20.23.79h0l.76.05c1.37.09,2.72.19,4,.3l1.9.18h.17c1.18.12,2.34.26,3.48.41l.62.08h0a74,74,0,0,1,12,2.55,49.55,49.55,0,0,1,6.58,2.55h0c.7.33,1.37.68,2.05,1.05l.26.14a42.27,42.27,0,0,1,5.17,3.36C265.17,318.91,269.33,324.34,273.25,330.85Z"
       style="fill:#37474f"
       id="path81" />
    <path
       d="M224.05,330.85h-19c-3.72,0-7.31,0-10.79-.05h-.74l-2.4-.05-.86,0-1.7-.05-1.42-.05c-15.92-.65-30-3.11-45.22-12.48l-.45-.28-.65-.42-.18-.79c-.09-.42-.17-.83-.24-1.26s-.11-.64-.16-1-.09-.59-.13-.89l0-.25c-.08-.61-.15-1.22-.2-1.84l-.09-1.11v-.09c0-.51-.06-1-.08-1.54v-.11c0-.28,0-.57,0-.86,0-.59,0-1.17,0-1.77,0-.29,0-.59,0-.89,0-.62.05-1.24.09-1.87.05-.84.12-1.69.2-2.55,0-.21.05-.41.07-.62s0-.41.08-.62.07-.61.11-.92l2.72.31h0l7.15.8,4.26.47h0l8.39.94h0l.56.07,6.16.69,9.19,1,1.26.14.2,0,.33,0,1.91.21,1,.07,1,.06h0l.89.06,1.58.09c.21,0,.41,0,.62,0,1.79.11,3.59.19,5.4.27l1.92.08.85,0h0l1.48.06,0,0,.29.24h0l0,0c.41.35.82.71,1.24,1.09,3.82,3.36,7.86,7.26,12.06,11.51,1,1,2,2,3,3.08l.21.21q1.5,1.56,3,3.16C219.36,325.76,221.7,328.28,224.05,330.85Z"
       style="fill:#263238"
       id="path82" />
    <path
       d="M261.2,330.85H205.06c-3.72,0-7.31,0-10.79-.05h-.74l-2.4-.05-.86,0-1.7-.05-1.42-.05c-15.92-.65-30-3.11-45.22-12.48l-.45-.28-.65-.42h0a35.43,35.43,0,0,1-4.15-3.29c-.57-.52-1.14-1.07-1.72-1.64l-.51-.51q-1.73-1.75-3.49-3.78.39-1.69.87-3.3c.39-1.4.82-2.73,1.27-4,.55-1.58,1.13-3.05,1.68-4.37.35-.83.69-1.6,1-2.3.9-1.95,1.66-3.4,2.1-4.18l.36-.66,1.77.2h0l10.44,1.21.89.1h0l7.12.83h0l11.32,1.3h0l1.59.19,3.35.39h0l2.12.24,3.53.41.69.08h.09l.91,1.34.62.9c.6.89,1.33,1.95,2,3l.1.15c.29.4.56.8.82,1.17.12.16.23.32.33.47.56.79,1,1.43,1.29,1.78.07.09.48.08,1.18,0h0l.74-.08h0l.65-.1h0l1.48-.22h0l3.59-.54c11.37-1.73,32.58-4.57,44.25.73a16.67,16.67,0,0,1,1.79.91l.31.19a27.54,27.54,0,0,1,5.53,4.55,48.77,48.77,0,0,1,3.57,4.17c.6.77,1.19,1.58,1.78,2.42.49.69,1,1.41,1.45,2.14.36.56.72,1.12,1.08,1.7,1.67,2.68,3.29,5.58,4.87,8.64l0,.07C260.17,328.76,260.69,329.79,261.2,330.85Z"
       style="fill:#37474f"
       id="path83" />
    <path
       d="M163.71,299.36c0-.16-.23-.18-.27,0a18,18,0,0,1-7.43,9.87c-4,2.53-9,3.11-13.59,3.91-.44.08-.33.76.1.77a36.53,36.53,0,0,0,7.94-.89,17.69,17.69,0,0,0,6.62-2.77A15.8,15.8,0,0,0,163.71,299.36Z"
       style="fill:#263238"
       id="path84" />
    <path
       d="M186.44,305.84c-.49-1.14-1.05-2.26-1.58-3.39-1.26-2.67-2.52-5.35-3.88-8-.13-.24-.56-.06-.45.21.85,2,1.78,4,2.69,6,.46,1,.93,2.06,1.41,3.08a16.41,16.41,0,0,1,1.28,3c.26,1.07-.62,1.69-1.62,1.54a3.51,3.51,0,0,1-2.11-1.49,31.35,31.35,0,0,1-2.84-5.3c-.54-1.07-1.08-2.15-1.64-3.21s-1.25-2.24-1.83-3.37c0-.07-.17,0-.14.06.46,1.19.86,2.41,1.32,3.6s.94,2.38,1.43,3.56,1,2.22,1.47,3.31a9.4,9.4,0,0,0,1.71,2.59c1.17,1.19,3.54,2,4.76.41A2.61,2.61,0,0,0,186.44,305.84Z"
       style="fill:#263238"
       id="path85" />
    <path
       d="M261.3,330.85h-1.18q-1.49-2.89-3.06-5.73c-.86-1.56-1.76-3.12-2.68-4.66-.51-.87-1-1.73-1.56-2.59-.11-.2-.23-.39-.35-.58l-1.08-1.71c-.44-.7-.88-1.4-1.33-2.09-.1-.15-.2-.3-.29-.46-.74-1.13-1.44-2.29-2.22-3.38-.07-.1.09-.2.17-.1.48.65,1,1.27,1.51,1.9.37.45.72.9,1.07,1.37.6.8,1.18,1.62,1.74,2.45s1,1.44,1.44,2.17l.9,1.38.3.47c1.56,2.4,3,4.88,4.39,7.39l.54,1,0,.07C260.21,328.76,260.76,329.8,261.3,330.85Z"
       style="fill:#263238"
       id="path86" />
    <path
       d="M141.85,292.3c-.12.24-.23.49-.35.73q-.57,1.2-1.11,2.4c-.15.32-.3.65-.44,1-.49,1.1-1,2.22-1.42,3.35-.53,1.33-1,2.68-1.49,4a47.49,47.49,0,0,0-2.08,8.6.41.41,0,0,0,0,.11l-.51-.51a46.66,46.66,0,0,1,2.11-8.1c.48-1.37,1-2.72,1.58-4.05s1.3-2.94,2-4.36c.4-.82.8-1.62,1.21-2.41l.42-.82C141.79,292.18,141.89,292.24,141.85,292.3Z"
       style="fill:#263238"
       id="path87" />
    <path
       d="M174.27,247.82c15.43,13.15,43,26.07,52.75,21.78,9.17-4,17.34-21.48,25.28-39.89,1.5-3.46-26.32-8.12-28-4.43-3.53,7.84-8.78,19.43-10.44,19.87-4,1-20.32-2.9-34.39-6.83C162.41,233.55,168.12,242.58,174.27,247.82Z"
       style="fill:#d3766a"
       id="path88" />
    <path
       d="M255.83,215c-.41,9.38-4.69,20.11-6.89,22.61s-23-4.38-24.16-7.61S222.29,205,226,200.29,256.1,208.9,255.83,215Z"
       style="fill:#d3766a"
       id="path89" />
    <path
       d="M213.53,193.61c-.62,1,.05,2.5,1.5,3.42a3.3,3.3,0,0,0,3.15.43l43.28,28.78,1.89-3L219,196.19a3.3,3.3,0,0,0-1.72-2.66C215.81,192.61,214.14,192.64,213.53,193.61Z"
       style="fill:#2ca02c"
       id="path90" />
    <path
       d="M225.22,207c1.51,2.72,3.85-.61,3.85-.61s-2.21,5.61.42,7.81,5.24-2,5.43-2.3c-.11.29-2,5.5.87,7.44s5-2.59,5.1-2.89c0,.32-.21,4.49,2.31,5.47,4.33,1.67,5.12-9,8.07-11.31,0,0,4.53,4.55,4.69,4.65,0,0,1-10.11-2.41-13.92a3.25,3.25,0,0,0-4-.74s.67-3.23-1.55-4.83c-1.14-.82-3.46.28-3.46.28a4.07,4.07,0,0,0-1.63-3.91c-1.65-1-3.72.22-3.72.22s-.75-2.69-2.77-3.21C232.34,188.08,222,201.17,225.22,207Z"
       style="fill:#d3766a"
       id="path91" />
    <path
       d="M238.83,192.5s0-.1-.06-.06a28.85,28.85,0,0,0-9.84,14.1c-.06.18.21.34.31.16A59.32,59.32,0,0,1,238.83,192.5Z"
       style="fill:#263238"
       id="path92" />
    <path
       d="M244.56,196c.05,0,0-.12-.09-.07a27.05,27.05,0,0,0-9.78,16.05c0,.23.15.46.21.21C236,207.87,240.87,199.88,244.56,196Z"
       style="fill:#263238"
       id="path93" />
    <path
       d="M241,216.92c1.27-6.19,4.4-11.35,8.38-16.2.05-.06,0-.13-.1-.08-2.59,1.83-4.8,5.18-6.3,7.94a16.59,16.59,0,0,0-2.19,8.3C240.76,217,241,217.06,241,216.92Z"
       style="fill:#263238"
       id="path94" />
    <path
       d="M229.07,206.38a19,19,0,0,0-.66,3.41,6.4,6.4,0,0,0,.4,3.3,2.07,2.07,0,0,0,1.09,1,3,3,0,0,0,1.53.2,3.73,3.73,0,0,0,2.44-1.78l1.37-2.16-.53,2.5a10.07,10.07,0,0,0-.19,3.37A3.73,3.73,0,0,0,235.9,219a2.12,2.12,0,0,0,2.68,0,6.43,6.43,0,0,0,1.84-2.66l1.13-2.79-.15,3a9.48,9.48,0,0,0,.18,2.49,4.05,4.05,0,0,0,1,2.09,1.94,1.94,0,0,0,2,.45,4.27,4.27,0,0,0,1.71-1.65,32,32,0,0,0,2.32-4.69c.36-.8.72-1.62,1.12-2.41a6.25,6.25,0,0,1,1.53-2.16,6.73,6.73,0,0,0-1.31,2.26c-.33.81-.63,1.65-.92,2.48a28.22,28.22,0,0,1-2.12,4.91,5,5,0,0,1-2,2,2.72,2.72,0,0,1-2.93-.55,4.92,4.92,0,0,1-1.35-2.56,10.71,10.71,0,0,1-.25-2.77l1,.2a7.42,7.42,0,0,1-2.14,3.17,3.07,3.07,0,0,1-2,.7,3.53,3.53,0,0,1-2-.67,4.74,4.74,0,0,1-1.75-3.44,11.27,11.27,0,0,1,.26-3.71l.83.34a4.42,4.42,0,0,1-3.14,2.05,3.8,3.8,0,0,1-1.88-.34,2.71,2.71,0,0,1-1.32-1.39,6.51,6.51,0,0,1-.21-3.57A15.67,15.67,0,0,1,229.07,206.38Z"
       style="fill:#263238"
       id="path95" />
    <path
       d="M224.38,226.58s-10.27-22.71.57-22.37c3.22.1,16.33,4.35,15.53,7-1,3.42-6.85,2.67-10.41,1.62,0,0,4.58,7.23.49,11.92A6.17,6.17,0,0,1,224.38,226.58Z"
       style="fill:#d3766a"
       id="path96" />
    <path
       d="M224.05,204.24a12.72,12.72,0,0,1,3.79.22,29.3,29.3,0,0,1,3.69.93,43.31,43.31,0,0,1,7.09,2.87,7.45,7.45,0,0,1,1.65,1.17,2.78,2.78,0,0,1,.64,1,1.84,1.84,0,0,1,.13.62,2.08,2.08,0,0,1-.09.63,3.19,3.19,0,0,1-1.37,1.75,6.25,6.25,0,0,1-2,.73,11.52,11.52,0,0,1-3.93,0,26.32,26.32,0,0,1-3.76-.87l.49-.67a14.83,14.83,0,0,1,1.23,2.66,14.29,14.29,0,0,1,.71,2.81,10,10,0,0,1,0,2.89,7.51,7.51,0,0,1-1,2.69,8.17,8.17,0,0,0,.67-2.72,9.91,9.91,0,0,0-.2-2.77,14.2,14.2,0,0,0-.83-2.64,14.43,14.43,0,0,0-1.29-2.43l-.63-.94,1.12.27a27.27,27.27,0,0,0,3.64.73,11.36,11.36,0,0,0,3.59,0,3.12,3.12,0,0,0,2.52-1.75c.31-.8-.8-1.63-1.82-2.22a37.07,37.07,0,0,0-3.34-1.66c-1.14-.51-2.29-1-3.46-1.45A23.84,23.84,0,0,0,224.05,204.24Z"
       style="fill:#263238"
       id="path97" />
    <path
       d="M178.18,237.47c-13.37-3.34-14.25,2.92-5.08,11.14A196.4,196.4,0,0,0,193.58,264l8.88-20.45Z"
       style="fill:#263238"
       id="path98" />
    <path
       d="M191.63,261.24c1.09-3,6-15.18,7.22-17.74.09-.18.22-.17.16,0a178,178,0,0,1-7.26,17.75A.06.06,0,0,1,191.63,261.24Z"
       style="fill:#37474f"
       id="path99" />
    <path
       d="M197.58,254.79l-4,9.2a195.64,195.64,0,0,1-20.47-15.38c-3.6-3.23-5.65-6.15-6-8.31C171.2,242.38,187.65,250.13,197.58,254.79Z"
       style="fill:#37474f"
       id="path100" />
    <path
       d="M188.76,302.82h0c0,.11,0,.17,0,.2l-.23.12h0c-.2.09-.53.21-1,.37h0c-.48.17-1.1.39-1.83.63l-.75.26-1.93.65-1.64.54c-.37.12-.76.24-1.15.38-9.91,3.24-26.42,8.46-38.27,12.15l-.45-.28-.65-.42h0a35.43,35.43,0,0,1-4.15-3.29c-.57-.52-1.14-1.07-1.72-1.64l-.51-.51q-1.73-1.75-3.49-3.78c-.32-.37-.65-.75-1-1.14.11-.6.23-1.21.35-1.84h0c.25-1.25.51-2.54.79-3.88s.59-2.79.92-4.24c.15-.71.31-1.43.48-2.15q.45-1.93.93-3.93h0q.35-1.41.72-2.85c.07-.3.15-.6.23-.9.18-.71.37-1.42.55-2.14.36-1.31.72-2.63,1.1-4,1.13-4,2.38-8,3.75-11.94.29-.84.58-1.67.88-2.5.06-.15.11-.3.16-.45a118.74,118.74,0,0,1,8.35-18.36A62.78,62.78,0,0,1,153,242l.47-.61a1.3,1.3,0,0,1,.15-.2c.67-.87,1.35-1.7,2.05-2.48a9.5,9.5,0,0,1,3-2.25,14,14,0,0,1,7.52-1.07,15,15,0,0,1,4.53,1.18,5.53,5.53,0,0,1,.73.38,3.29,3.29,0,0,1,.89.71,12.06,12.06,0,0,1,.94,1.42c.25.43.5.92.75,1.44h0c.54,1.12,1.09,2.44,1.65,3.92.69,1.84,1.39,3.93,2.09,6.2h0c.24.82.49,1.64.74,2.5q.74,2.53,1.45,5.27c.69,2.61,1.36,5.32,2,8.07a.75.75,0,0,1,0,.16h0a2.22,2.22,0,0,1,.09.37c.32,1.33.63,2.67.92,4,.09.39.18.79.26,1.18h0c.18.8.36,1.58.53,2.38.22,1,.43,2,.64,3L185,280q.38,1.81.72,3.57c.13.71.27,1.4.4,2.09.25,1.3.48,2.55.71,3.75h0l.63,3.59q.1.63.21,1.23c0,.25.08.48.11.72a1,1,0,0,1,0,.17c.14.83.26,1.61.37,2.33.14.93.26,1.75.35,2.46h0c0,.23.06.44.08.64s.08.62.1.88l0,.28A6.41,6.41,0,0,1,188.76,302.82Z"
       style="fill:#263238"
       id="path101" />
    <path
       d="M190.45,294.21a3,3,0,0,0,0-.42c0-.3-.07-.6-.11-.9s-.05-.32-.08-.48-.06-.33-.1-.49,0-.21-.07-.32a22.17,22.17,0,0,0-.8-2.71,21.39,21.39,0,0,0-1.15-2.65,13.4,13.4,0,0,0,.27-3.24c0-.31,0-.62-.07-.91s-.06-.45-.1-.67-.07-.4-.12-.6l-.09-.39c-.09-.36-.19-.7-.3-1a10.39,10.39,0,0,0-1.27-2.58c.07-.48.12-.94.16-1.38,0-.08,0-.16,0-.24,0-.4,0-.79,0-1.16s0-.57,0-.84,0-.39,0-.57a2.43,2.43,0,0,0,0-.3c0-.1,0-.2,0-.29s-.08-.44-.13-.65a2.82,2.82,0,0,0-.07-.31c-.06-.23-.12-.45-.19-.66a8.29,8.29,0,0,0-1.29-2.59,2.75,2.75,0,0,0-.21-.25l-.39-1.76a1.83,1.83,0,0,0-.06-.25q-.25-1.2-.54-2.37c-.44-1.85-.9-3.67-1.38-5.43-.2-.77-.41-1.52-.63-2.26h0q-.39-1.36-.81-2.67c-.82-2.61-1.69-5-2.61-7.22h0a32.54,32.54,0,0,0-4.19-7.48c-.18-.24-.37-.47-.56-.68a4.17,4.17,0,0,0-.48-.45h0a4.3,4.3,0,0,0-.64-.45h0a13.49,13.49,0,0,0-6.3-1.47,18.91,18.91,0,0,0-7.19,1.2,11.88,11.88,0,0,0-5.38,3.89c-.52.69-1,1.38-1.51,2.1v0c-.33.45-.64.91-1,1.38a120,120,0,0,0-11.35,22h0c-.06.13-.11.27-.16.4-.33.81-.66,1.64-1,2.46-1.07,2.78-2.08,5.62-3,8.5a21.37,21.37,0,0,0-2.44,4.8c-.09.25-.18.51-.26.78s-.09.28-.13.42-.15.52-.21.79a.53.53,0,0,0,0,.12c-.07.25-.12.52-.17.78s-.1.52-.13.78a.31.31,0,0,0,0,.1,1,1,0,0,0,0,.17,14,14,0,0,0-.08,2.83h0a10.72,10.72,0,0,0-2.44,3.28c-.1.21-.2.44-.3.67a2.67,2.67,0,0,0-.14.36l-.13.37a9.72,9.72,0,0,0-.44,1.91l0,.21c0,.15,0,.3,0,.45a11.83,11.83,0,0,0,.11,2.88,31.93,31.93,0,0,0-1.51,3.51c-.09.25-.19.52-.28.79q1,1.32,2,2.55c.41.51.83,1,1.25,1.5s.65.77,1,1.14q1.77,2,3.49,3.78l.51.51c.58.57,1.15,1.12,1.72,1.64l3.41-.86h0l9.67-2.45,6.08-1.54,3.33-.85c7.16-1.84,14.28-3.68,19.78-5.15L180,303l.17-.05.33-.09,3.26-.89.07,0,.68-.19,1.47-.41,1.29-.38c.56-.16,1-.3,1.29-.41a1.25,1.25,0,0,0,.45-.2l.1-.12a6.14,6.14,0,0,0,1.14-2.79c.05-.29.1-.59.14-.93A12,12,0,0,0,190.45,294.21Zm-37.89-51.87a10,10,0,0,1,.92-.92,3.74,3.74,0,0,1,.4-.32l0,0a4,4,0,0,1,.46-.3,3.91,3.91,0,0,1,2.94-.4l.16,0a4.26,4.26,0,0,1,.82.36h0c3.7,2.07,6,9.56,4.92,13.54s-5,7.67-8.27,9.46l-.59.31h0l-.15.07a6.68,6.68,0,0,1-2.45.7h-.21c-3.18,0-5.05-2.26-5.16-6.73-.06-2.42,1.11-6.57,2.79-10.24A24,24,0,0,1,152.56,242.34Z"
       style="fill:#217821"
       id="path102" />
    <path
       d="M190.23,292.41l-2.79.6-1.63.35-4.69,1-.21.05-.35.07-.1,0-3.13.67-1.21.26-.22.05-1.74.37-1,.21-18.73,4h0l-4.3.92-10.3,2.21-2.77.59-.49.1-4.73,1-1.49.31h0l-1.6.34q-1-1.23-2-2.55c.09-.27.19-.54.28-.79l4.15-.89,2-.42,5-1.08.4-.09,1.62-.34h0l2.83-.61h0l7.21-1.54,19.57-4.2h0l1.3-.28h0l4.92-1,3.87-.83,6.88-1.47h0l2.45-.52a22.17,22.17,0,0,1,.8,2.71c0,.11.05.21.07.32S190.2,292.24,190.23,292.41Z"
       style="fill:#fff"
       id="path103" />
    <path
       d="M188.38,283l-60,12.84a11.07,11.07,0,0,1,1.08-4l58.25-12.45A12.32,12.32,0,0,1,188.38,283Z"
       style="fill:#fff"
       id="path104" />
    <path
       d="M186.64,274.06,132,285.76a18.32,18.32,0,0,1,1-3.94l53.13-11.38A12.23,12.23,0,0,1,186.64,274.06Z"
       style="fill:#fff"
       id="path105" />
    <path
       d="M151.3,266.53c0,3.76,0,7.51-.1,11.27s-.21,7.5-.3,11.25l-.48,11.26c-.19,3.74-.4,7.49-.68,11.24,0-3.76,0-7.51.1-11.26l.31-11.26c.16-3.75.28-7.5.48-11.25S151,270.28,151.3,266.53Z"
       style="fill:#263238"
       id="path106" />
    <path
       d="M171.88,246.4c1.08,4.73,2.06,9.47,3,14.23s1.83,9.52,2.72,14.28,1.67,9.55,2.36,14.36c.16,1.2.34,2.4.49,3.6a26,26,0,0,1,.31,3.64c0,2.43-.11,4.86-.27,7.27,0-2.42,0-4.84-.08-7.26,0-.6-.06-1.2-.15-1.79l-.27-1.79c-.18-1.2-.4-2.39-.59-3.59-.82-4.77-1.65-9.54-2.54-14.31l-2.54-14.31C173.49,256,172.65,251.19,171.88,246.4Z"
       style="fill:#263238"
       id="path107" />
    <path
       d="M128.94,297.71c4.86-1.12,9.73-2.16,14.6-3.21l14.62-3.08,14.63-3,7.32-1.52c2.44-.49,4.86-1,7.3-1.59-4.79,1.41-9.64,2.54-14.49,3.67s-9.74,2.14-14.61,3.18-9.76,2-14.66,2.9S133.86,296.9,128.94,297.71Z"
       style="fill:#263238"
       id="path108" />
    <path
       d="M131.9,288.59c4.44-1,8.9-1.95,13.35-2.89l13.36-2.76L172,280.23l6.68-1.37c2.23-.45,4.45-.94,6.68-1.44-4.37,1.31-8.8,2.35-13.24,3.38s-8.89,1.93-13.35,2.87-8.92,1.77-13.4,2.59S136.4,287.88,131.9,288.59Z"
       style="fill:#263238"
       id="path109" />
    <rect
       x="168.23"
       y="266.22"
       width="11.9"
       height="3.88"
       transform="translate(-62.09 52.7) rotate(-14.63)"
       style="fill:#263238"
       id="rect109" />
    <rect
       x="170.11"
       y="273.41"
       width="11.9"
       height="3.88"
       transform="translate(-63.85 53.41) rotate(-14.63)"
       style="fill:#263238"
       id="rect110" />
    <rect
       x="173.95"
       y="292.35"
       width="11.9"
       height="3.88"
       transform="translate(-68.51 55) rotate(-14.63)"
       style="fill:#263238"
       id="rect111" />
    <path
       d="M171.88,246.4c-3.32.42-11.52-3.91-13.34-8.79-.12-.34.83-3.53,1.8-7.47.58-2.39,1.16-5.07,1.52-7.55.08-.51,15,6,15,6a39.83,39.83,0,0,0-2.89,9.31,6,6,0,0,0,0,1,1,1,0,0,1,0,.17C174,241.12,175.43,246,171.88,246.4Z"
       style="fill:#d3766a"
       id="path111" />
    <path
       d="M174,239c0,.05,0,.11,0,.17a9.46,9.46,0,0,1-1.61-.15c-9.13-1.53-9.88-13.34-9.93-16.31,2.71.79,14.47,5.95,14.47,5.95a39.83,39.83,0,0,0-2.89,9.31A5.13,5.13,0,0,0,174,239Z"
       style="fill:#263238"
       id="path112" />
    <path
       d="M180.69,198.88s5.22,2.06,6.27,7.31-.05,10.79-.51,11.06S180.69,198.88,180.69,198.88Z"
       style="fill:#263238"
       id="path113" />
    <path
       d="M160.33,206.44c-1.68,5.58,1.35,21.68,5.34,25.25,5.77,5.17,15.19,5.62,19.57-1.31,4.26-6.72-.06-27.62-4.5-30.86C174.19,194.74,162.8,198.19,160.33,206.44Z"
       style="fill:#d3766a"
       id="path114" />
    <path
       d="M176.41,216.17s-.07.06-.06.11c.23,1.08.31,2.35-.6,2.89,0,0,0,.07,0,.06C176.94,218.84,176.81,217.15,176.41,216.17Z"
       style="fill:#263238"
       id="path115" />
    <path
       d="M175.24,215.21c-1.77.19-1.27,3.71.37,3.54S176.72,215.06,175.24,215.21Z"
       style="fill:#263238"
       id="path116" />
    <path
       d="M182.44,215.28c0-.05.09,0,.09.08.13,1.1.45,2.33,1.49,2.55,0,0,0,.07,0,.07C182.79,218,182.38,216.34,182.44,215.28Z"
       style="fill:#263238"
       id="path117" />
    <path
       d="M183.25,214c1.73-.39,2.38,3.12.77,3.47S181.79,214.32,183.25,214Z"
       style="fill:#263238"
       id="path118" />
    <path
       d="M173.62,213.8a13.24,13.24,0,0,0,1.29-.68,2.28,2.28,0,0,0,1.19-.94.74.74,0,0,0-.25-.88,1.86,1.86,0,0,0-1.89.07,2.75,2.75,0,0,0-1.39,1.4A.81.81,0,0,0,173.62,213.8Z"
       style="fill:#263238"
       id="path119" />
    <path
       d="M184.36,212a12.09,12.09,0,0,1-1.46-.17,2.35,2.35,0,0,1-1.45-.44.77.77,0,0,1-.08-.92,1.85,1.85,0,0,1,1.79-.61,2.7,2.7,0,0,1,1.8.8A.8.8,0,0,1,184.36,212Z"
       style="fill:#263238"
       id="path120" />
    <path
       d="M176.53,226.28c.3.22.61.53,1,.51a3,3,0,0,0,1.13-.44s.08,0,.06.05a1.49,1.49,0,0,1-1.3.79,1.19,1.19,0,0,1-1-.85C176.41,226.28,176.49,226.25,176.53,226.28Z"
       style="fill:#263238"
       id="path121" />
    <path
       d="M177.21,222.85a3.77,3.77,0,0,0,2.72,1.3,5.08,5.08,0,0,0,1.34-.13,1.49,1.49,0,0,0,.25-.07l.24-.07a.27.27,0,0,0,.18-.28h0a.35.35,0,0,0,0-.11h0v-.1c-.1-.84-.36-2.11-.36-2.11.33.11,2,.59,1.9.16a55.58,55.58,0,0,0-3.05-11.05.1.1,0,0,0-.19.06c.57,3.49,1.75,6.86,2.38,10.36a6.23,6.23,0,0,0-1.83-.28c-.11,0,.55,2.43.57,2.82v0a5.18,5.18,0,0,1-4-.65C177.21,222.68,177.13,222.77,177.21,222.85Z"
       style="fill:#263238"
       id="path122" />
    <path
       d="M180.72,223.66a4.55,4.55,0,0,1-1.57,1.62,2,2,0,0,1-1.2.25c-.9-.11-1-.9-1-1.61a4.83,4.83,0,0,1,.24-1.1A5.78,5.78,0,0,0,180.72,223.66Z"
       style="fill:#263238"
       id="path123" />
    <path
       d="M179.15,225.28a2,2,0,0,1-1.2.25c-.9-.11-1-.9-1-1.61A2.07,2.07,0,0,1,179.15,225.28Z"
       style="fill:#ff9bbc"
       id="path124" />
    <path
       d="M162.15,220c3-.51,1.91-7.88,1.91-7.88s4.53-1.33,6.1-7.91c0,0,6.34,3.08,11.23,1.63,7.66-2.28,6.34-12.4,3.19-14.15-4.46-2.48-11.38,2.6-11.38,2.6s-11.51-1.89-14,6a5.77,5.77,0,0,0-4.7,6.3C154.75,212.12,159.91,220.35,162.15,220Z"
       style="fill:#263238"
       id="path125" />
    <path
       d="M163.07,213.08a10.36,10.36,0,0,0,5.49-3.82,7.72,7.72,0,0,0,1-7,.11.11,0,0,1,.2-.07,9,9,0,0,1-.43,7.55,7.21,7.21,0,0,1-6.25,3.59A.11.11,0,0,1,163.07,213.08Z"
       style="fill:#263238"
       id="path126" />
    <path
       d="M153.74,203.4c1.33-2.11,3.64-2.67,6-2.85a.11.11,0,0,1,0,.21,6.5,6.5,0,0,0-5.43,3.76c-1,2-.45,4.24.24,6.22a16.31,16.31,0,0,0,7.54,8.95c.06,0,0,.13,0,.1A16.34,16.34,0,0,1,153.6,210C153,207.91,152.52,205.36,153.74,203.4Z"
       style="fill:#263238"
       id="path127" />
    <path
       d="M172.94,194.66a7.66,7.66,0,0,1,3.93-3.76,9.18,9.18,0,0,1,6.55-.05,5.17,5.17,0,0,1,3.18,4.1,9.16,9.16,0,0,1-1.41,6s-.11,0-.08,0a9.15,9.15,0,0,0,1-5.41,4.77,4.77,0,0,0-3.25-3.89c-3.36-1.08-8-.33-9.76,3.16A.1.1,0,1,1,172.94,194.66Z"
       style="fill:#263238"
       id="path128" />
    <path
       d="M164.47,219.73s-3.77-5.12-6.1-3.76.6,8.84,3.4,9.8a2.82,2.82,0,0,0,3.74-1.61Z"
       style="fill:#d3766a"
       id="path129" />
    <path
       d="M159.26,218.09s0,.06,0,.08c2,.74,3,2.52,3.8,4.37a1.57,1.57,0,0,0-2.35-.37s0,.12.06.1a1.76,1.76,0,0,1,1.93.56,8.81,8.81,0,0,1,.95,1.52c.09.17.41.07.33-.13v0C163.94,221.7,161.93,218.28,159.26,218.09Z"
       style="fill:#263238"
       id="path130" />
    <path
       d="M252.65,327.83a2,2,0,0,1-.08.55,4.81,4.81,0,0,1-2.44,2.47H205.06c-3.72,0-7.31,0-10.79-.05h-.74l-2.4-.05-.86,0-1.7-.05-1.42-.05a5.08,5.08,0,0,1-1.86-1.78h0a2.13,2.13,0,0,1-.26-1,2.1,2.1,0,0,1,0-.43h0a2.54,2.54,0,0,1,.56-1.06c1.48-1.83,5.62-3.44,11.45-4.59a102,102,0,0,1,14.1-1.67h0l2.6-.11c1.63-.06,3.3-.09,5-.09,2.63,0,5.18.07,7.63.2h.08a101,101,0,0,1,14.17,1.69h0c5.76,1.16,9.86,2.75,11.32,4.57a3.06,3.06,0,0,1,.42.64h0A2.14,2.14,0,0,1,252.65,327.83Z"
       style="fill:#37474f"
       id="path131" />
    <path
       d="M255.5,312.19c0,.17,0,.35,0,.53h0a30.5,30.5,0,0,1-.19,3.11,29.13,29.13,0,0,1-.56,3.18,1.31,1.31,0,0,1-.06.27q-.13.58-.3,1.17a30.66,30.66,0,0,1-2.34,5.87c0,.09-.09.18-.14.27h0s0,.09,0,.14a2.74,2.74,0,0,1-.87,1.54,8.14,8.14,0,0,1-1.82,1.3,16.66,16.66,0,0,1-1.78.82c-.38.16-.77.31-1.19.45H205.06c-3.72,0-7.31,0-10.79-.05h-.74l-2.4-.05-.74-.29a15,15,0,0,1-1.78-.8h0a8.26,8.26,0,0,1-1.85-1.26,3,3,0,0,1-.91-1.35,1.63,1.63,0,0,1-.08-.43c-.05-.09-.1-.18-.14-.27a29.74,29.74,0,0,1-3.27-10.54h0a30.77,30.77,0,0,1-.2-3.12v-.36a28.38,28.38,0,0,1,.15-3q0-.33.06-.66c0-.47.12-.93.19-1.38.12-.78.27-1.52.43-2.22s.3-1.23.46-1.79.25-.83.38-1.22a.38.38,0,0,1,0-.1l.32-.94c.2-.54.4-1,.58-1.45s.25-.6.37-.84c.38-.82.64-1.27.64-1.27H251.9s.26.45.64,1.28a33.17,33.17,0,0,1,2.82,10.61s0,0,0,0C255.45,310.27,255.5,311.21,255.5,312.19Z"
       style="fill:#217821"
       id="path132" />
    <path
       d="M255.5,312.19c0,.17,0,.35,0,.53h0a30.5,30.5,0,0,1-.19,3.11,29.13,29.13,0,0,1-.56,3.18,1.31,1.31,0,0,1-.06.27q-.13.58-.3,1.17a30.66,30.66,0,0,1-2.34,5.87c0,.09-.09.18-.14.27h0s0,.09,0,.14a2.74,2.74,0,0,1-.87,1.54,8.14,8.14,0,0,1-1.82,1.3,16.66,16.66,0,0,1-1.78.82c-.38.16-.77.31-1.19.45H205.06c-3.72,0-7.31,0-10.79-.05h-.74l-2.4-.05-.74-.29a15,15,0,0,1-1.78-.8h0a8.26,8.26,0,0,1-1.85-1.26,3,3,0,0,1-.91-1.35,1.63,1.63,0,0,1-.08-.43c-.05-.09-.1-.18-.14-.27a29.74,29.74,0,0,1-3.27-10.54h0a30.77,30.77,0,0,1-.2-3.12v-.36a28.38,28.38,0,0,1,.15-3q0-.33.06-.66c0-.47.12-.93.19-1.38.12-.78.27-1.52.43-2.22s.3-1.23.46-1.79.25-.83.38-1.22a.38.38,0,0,1,0-.1l.32-.94c.2-.54.4-1,.58-1.45s.25-.6.37-.84c.38-.82.64-1.27.64-1.27H251.9s.26.45.64,1.28a33.17,33.17,0,0,1,2.82,10.61s0,0,0,0C255.45,310.27,255.5,311.21,255.5,312.19Z"
       style="opacity:0.2;fill:#217821"
       id="path133" />
    <ellipse
       cx="218.83"
       cy="298.1"
       rx="33.82"
       ry="7.96"
       style="fill:#37474f"
       id="ellipse133" />
    <ellipse
       cx="218.83"
       cy="296.82"
       rx="33.07"
       ry="7.78"
       style="fill:#ebebeb"
       id="ellipse134" />
    <path
       d="M186.83,299.92a1,1,0,1,1-1-1A1,1,0,0,1,186.83,299.92Z"
       style="fill:#fff"
       id="path134" />
    <path
       d="M190.43,302.1a1,1,0,1,1-1-1A1,1,0,0,1,190.43,302.1Z"
       style="fill:#fff"
       id="path135" />
    <path
       d="M199.46,304.44a1,1,0,1,1-1-1A1,1,0,0,1,199.46,304.44Z"
       style="fill:#fff"
       id="path136" />
    <path
       d="M194.87,303.62a1,1,0,1,1-1-1A1,1,0,0,1,194.87,303.62Z"
       style="fill:#fff"
       id="path137" />
    <path
       d="M204.18,305.07a1,1,0,1,1-1-1A1,1,0,0,1,204.18,305.07Z"
       style="fill:#fff"
       id="path138" />
    <path
       d="M208.86,305.71a1,1,0,1,1-1-1A1,1,0,0,1,208.86,305.71Z"
       style="fill:#fff"
       id="path139" />
    <path
       d="M213.86,306.06a1,1,0,1,1-1-1A1,1,0,0,1,213.86,306.06Z"
       style="fill:#fff"
       id="path140" />
    <path
       d="M225.22,305.93a1,1,0,1,1-1-1A1,1,0,0,1,225.22,305.93Z"
       style="fill:#fff"
       id="path141" />
    <path
       d="M219.3,306.06a1,1,0,1,1-1-1A1,1,0,0,1,219.3,306.06Z"
       style="fill:#fff"
       id="path142" />
    <path
       d="M230.63,305.71a1,1,0,1,1-1-1A1,1,0,0,1,230.63,305.71Z"
       style="fill:#fff"
       id="path143" />
    <ellipse
       cx="234.69"
       cy="305.07"
       rx="0.99"
       ry="0.99"
       style="fill:#fff"
       id="ellipse143" />
    <path
       d="M240.28,304.4a1,1,0,1,1-1-1A1,1,0,0,1,240.28,304.4Z"
       style="fill:#fff"
       id="path144" />
    <path
       d="M244.9,303.41a1,1,0,1,1-1-1A1,1,0,0,1,244.9,303.41Z"
       style="fill:#fff"
       id="path145" />
    <ellipse
       cx="248.35"
       cy="301.99"
       rx="0.99"
       ry="0.99"
       style="fill:#fff"
       id="ellipse145" />
    <path
       d="M252.82,299.64a1,1,0,1,1-1-1A1,1,0,0,1,252.82,299.64Z"
       style="fill:#fff"
       id="path146" />
    <path
       d="M186.83,328a1,1,0,1,1-1-1A1,1,0,0,1,186.83,328Z"
       style="fill:#fff"
       id="path147" />
    <path
       d="M190.43,330.19a.75.75,0,0,1,0,.26.66.66,0,0,1-.12.27l-1.7-.05a1,1,0,0,1-.13-.48.94.94,0,0,1,.17-.54h0a1,1,0,0,1,.83-.44A1,1,0,0,1,190.43,330.19Z"
       style="fill:#fff"
       id="path148" />
    <path
       d="M194.27,330.8h-.74a.84.84,0,0,1,.35-.07A1,1,0,0,1,194.27,330.8Z"
       style="fill:#fff"
       id="path149" />
    <path
       d="M244.64,330.85h-1.46a1,1,0,0,1,1.46,0Z"
       style="fill:#fff"
       id="path150" />
    <path
       d="M249.34,330.08a1,1,0,0,1-.38.77h-1.23a.91.91,0,0,1-.32-.45.87.87,0,0,1-.06-.32,1,1,0,0,1,1-1,1,1,0,0,1,.84.48A.89.89,0,0,1,249.34,330.08Z"
       style="fill:#fff"
       id="path151" />
    <path
       d="M252.82,327.73a1,1,0,1,1-1-1A1,1,0,0,1,252.82,327.73Z"
       style="fill:#fff"
       id="path152" />
    <path
       d="M182.16,309.11a6.72,6.72,0,0,0,1.75,1.61A15,15,0,0,0,186,311.9c.7.38,1.46.63,2.19.94s1.51.5,2.27.75a63.11,63.11,0,0,0,9.34,1.9,148.39,148.39,0,0,0,19.09,1.07A152.06,152.06,0,0,0,238,315.51a61.64,61.64,0,0,0,9.35-1.86c.77-.23,1.51-.5,2.27-.74s1.49-.56,2.19-.94a14.46,14.46,0,0,0,2.05-1.2,6.24,6.24,0,0,0,1.7-1.66,9.16,9.16,0,0,1-3.63,3.09c-.69.42-1.45.7-2.17,1.06s-1.5.59-2.26.85a60.55,60.55,0,0,1-9.39,2.16,138.65,138.65,0,0,1-19.2,1.29,135.64,135.64,0,0,1-19.2-1.31,64.46,64.46,0,0,1-9.38-2.19c-.75-.29-1.51-.56-2.26-.87s-1.47-.64-2.17-1.05A10.17,10.17,0,0,1,182.16,309.11Z"
       style="fill:#37c837"
       id="path153" />
    <path
       d="M181.84,312.2a6.51,6.51,0,0,0,1.76,1.63,14.78,14.78,0,0,0,2.08,1.2c.71.38,1.47.63,2.21.94s1.52.51,2.28.76a64.6,64.6,0,0,0,9.43,1.92,151,151,0,0,0,19.26,1.08,152.88,152.88,0,0,0,19.26-1.06,62.83,62.83,0,0,0,9.44-1.88c.77-.23,1.52-.5,2.29-.75s1.5-.57,2.2-1a13.92,13.92,0,0,0,2.08-1.21,6.18,6.18,0,0,0,1.7-1.68,9.13,9.13,0,0,1-3.66,3.13c-.69.42-1.46.71-2.19,1.07s-1.51.59-2.28.85a60.44,60.44,0,0,1-9.47,2.18,142.7,142.7,0,0,1-19.37,1.3,138,138,0,0,1-19.37-1.32A64,64,0,0,1,190,317.2c-.76-.3-1.53-.57-2.28-.88s-1.49-.64-2.19-1.06A10.07,10.07,0,0,1,181.84,312.2Z"
       style="fill:#5fd35f"
       id="path154" />
    <path
       d="M182.06,315.37a6.55,6.55,0,0,0,1.75,1.61,15.19,15.19,0,0,0,2.07,1.19c.7.38,1.46.63,2.19.94s1.52.51,2.27.76a65,65,0,0,0,9.38,1.9,147.38,147.38,0,0,0,19.14,1.07,153.12,153.12,0,0,0,19.15-1,61.31,61.31,0,0,0,9.38-1.87c.76-.22,1.51-.49,2.27-.74s1.49-.56,2.19-.94a15.32,15.32,0,0,0,2.07-1.21,6.07,6.07,0,0,0,1.69-1.66,9.1,9.1,0,0,1-3.63,3.1c-.7.42-1.45.71-2.18,1.06s-1.5.59-2.27.86a61.82,61.82,0,0,1-9.42,2.16,139.26,139.26,0,0,1-19.25,1.29,136.24,136.24,0,0,1-19.25-1.31,63,63,0,0,1-9.41-2.2c-.76-.29-1.52-.56-2.26-.87s-1.49-.64-2.18-1A10.06,10.06,0,0,1,182.06,315.37Z"
       style="fill:#37c837"
       id="path155" />
    <path
       d="M196.36,230.9c-1.06-.38-2.38.61-2.94,2.2a3.23,3.23,0,0,0,.29,3.12l-18,47.93L179,285.3l16.08-48.59a3.24,3.24,0,0,0,2.17-2.25C197.84,232.87,197.43,231.28,196.36,230.9Z"
       style="fill:#2ca02c"
       id="path156" />
    <path
       d="M177.6,298a.29.29,0,0,1,0,.1.71.71,0,0,1-.36.38l-.19.08c-2.27,1-4.79,2.13-7.47,3.22-2.41,1-5,2-7.56,2.94l-1.71.62h0c-3.44,1.24-7,2.42-10.43,3.47s-6.77,1.93-10,2.64h0c-1.7.38-3.34.7-4.92.95a.18.18,0,0,1-.1,0l-.42-.42q-1.73-1.75-3.49-3.78c-.32-.37-.65-.75-1-1.14s-.84-1-1.25-1.5q-1-1.23-2-2.55c-2.26-2.9-4.54-6-6.81-9.32,2.78-8.3,7.85-18.28,13.71-27.65l1.47-2.3.09-.15a159.79,159.79,0,0,1,9.69-13.43,52.9,52.9,0,0,1,6.08-6.5c.57-.5,1.12-.94,1.64-1.33L153,242c4.77-3.26,7-.92,3.13,10-1.59,4.49-3.17,8.9-4.58,12.85-.71,2-1.38,3.91-2,5.63,0,.1-.07.2-.1.3-.36,1-.68,2-1,2.84-.78,2.32-1.34,4.12-1.59,5.18-.17.7-.2,1.09-.06,1.09h0c.17-.06,1.78-.58,4-1.41.92-.34,2-.74,3-1.17h0a65.87,65.87,0,0,0,8.72-4.12h0c.65-.36,1.72.3,3,1.62a30,30,0,0,1,2.6,3.18c.65.9,1.32,1.88,2,2.91.41.64.83,1.31,1.23,2,.66,1.09,1.29,2.21,1.9,3.32.38.71.75,1.43,1.1,2.13.59,1.17,1.13,2.31,1.58,3.38.21.49.4,1,.58,1.42.09.25.18.49.26.73.17.46.31.9.43,1.3a10.83,10.83,0,0,1,.35,1.71A2.68,2.68,0,0,1,177.6,298Z"
       style="fill:#d3766a"
       id="path157" />
    <path
       d="M193.59,257.64a4.24,4.24,0,0,1,1.14,4.72,6.3,6.3,0,0,1,3.81,2c1.67,2-.72,5.49-.72,5.49a7.79,7.79,0,0,1,3.68,2.73c1.41,2.07-.5,5.95-.5,5.95a6.86,6.86,0,0,1,1.73,4.44c-.11,4.39-5.89,7.8-9.53,10s-16.06,5-18.37,5.81l-14.34-23.28S174,261,178.69,259C182.61,257.3,191,255.52,193.59,257.64Z"
       style="fill:#d3766a"
       id="path158" />
    <path
       d="M194.34,262.09c-4.6.77-8.72,2.86-12.94,4.72-.1,0,0,.19.06.14,4.18-1.89,8.69-2.93,12.94-4.65A.11.11,0,0,0,194.34,262.09Z"
       style="fill:#263238"
       id="path159" />
    <path
       d="M197.55,269.58a12.28,12.28,0,0,0-2.93,1.22c-1,.5-2,1-3,1.56-2,1.07-3.94,2.19-5.86,3.37-.09,0,0,.19.06.14,2-1.06,4-2.1,6-3.08l3-1.45a14,14,0,0,0,2.82-1.48A.16.16,0,0,0,197.55,269.58Z"
       style="fill:#263238"
       id="path160" />
    <path
       d="M200.91,278.56a8.41,8.41,0,0,0-2.58,1.24c-.89.51-1.79,1-2.69,1.51-1.8,1-3.59,2-5.42,2.92-.1,0,0,.19.06.14,1.87-.93,3.74-1.85,5.6-2.8l2.73-1.42a8.17,8.17,0,0,0,2.36-1.5A.06.06,0,0,0,200.91,278.56Z"
       style="fill:#263238"
       id="path161" />
    <path
       d="M146.88,279.91a71.74,71.74,0,0,1-6.25,4.06c-2.14,1.24-4.28,2.47-6.57,3.51a36.48,36.48,0,0,1,6.07-4.37A36.92,36.92,0,0,1,146.88,279.91Z"
       style="fill:#263238"
       id="path162" />
    <path
       d="M158.39,251.41c4.1-12.93-2-14.18-10.63-5.67a192,192,0,0,0-16.37,19.19l19.56,10Z"
       style="fill:#263238"
       id="path163" />
    <path
       d="M157.32,255.52c-.52,1.71-1,3.44-1.47,5.16.41-.65.84-1.28,1.31-1.9a0,0,0,1,1,0,0c-.32.52-.62,1.05-.95,1.57-.16.24-.31.49-.47.74l-.09.16c-.38,1.34-.76,2.69-1.17,4-.49,1.59-1,3.16-1.54,4.74s-1.31,3.37-1.79,5a11.28,11.28,0,0,1-1.92-.95c-.19-.08-.13-.28,0-.17s1.74.73,1.77.73c.53-1.58.89-3.22,1.37-4.83s1-3.18,1.48-4.77c1-3.21,2.27-6.37,3.34-9.57C157.27,255.45,157.33,255.48,157.32,255.52Z"
       style="fill:#37474f"
       id="path164" />
    <path
       d="M134.21,263.18c2.89,1.26,14.55,6.82,17,8.19.17.09.16.22,0,.14a172.27,172.27,0,0,1-17-8.21C134.1,263.27,134.14,263.15,134.21,263.18Z"
       style="fill:#37474f"
       id="path165" />
  </g>
  <g
     id="freepik--character-2--inject-5">
    <path
       d="M304.81,277.36C317,287.83,332,297.47,340.94,300.17c6,1.81,23-12.48,35.2-27.82,2.44-3.05-12.68-24.45-15.11-21.06-6.36,8.86-18.17,23.1-20.61,23.35-2,.21-16.66-4-27.63-7.48C295.33,261.61,296.27,270,304.81,277.36Z"
       style="fill:#ad6359"
       id="path166" />
    <path
       d="M329.16,271.9l-7,22.54s-16.15-11.84-21.79-20-3.16-12.54,5.8-10.27S329.16,271.9,329.16,271.9Z"
       style="fill:#a6a6a6"
       id="path167" />
    <path
       d="M317.86,289.92c0-1.6,2.61-12.19,5.44-19.4a.09.09,0,0,1,.17.06c-.21.83-4.65,18-5.38,19.41C318,290.11,317.85,290,317.86,289.92Z"
       style="fill:#263238"
       id="path168" />
    <path
       d="M325.58,283.38l-3.45,11.06s-16.14-11.84-21.78-20c-3.89-5.64-3.92-9.47-.61-10.54Z"
       style="opacity:0.1"
       id="path169" />
    <path
       d="M325.07,330.85H269.7c0-.61.08-1.26.14-2,0-.5.07-1,.11-1.54.1-1.17.21-2.43.33-3.76.1-1,.21-2.13.33-3.26s.25-2.33.4-3.55c2-17,6.48-40,16-48.86a21,21,0,0,1,5-3.51,13.07,13.07,0,0,1,14.95,1.7,16.39,16.39,0,0,1,1.65,1.68c1.28,1.52,12.57,14.51,13.66,23a20.14,20.14,0,0,1-3,13.11l1.64,7.54.72,3.31.68,3.14.75,3.47.37,1.66.68,3.14.74,3.41Z"
       style="fill:#a6a6a6"
       id="path170" />
    <path
       d="M310.88,302a53.19,53.19,0,0,0-8,2.46c-1.29.53-2.54,1.12-3.79,1.75-.62.31-1.25.59-1.89.88a8.37,8.37,0,0,1-2.05.68c-.06,0,0,.12,0,.11a15.6,15.6,0,0,0,2-.29,13.88,13.88,0,0,0,1.88-.64c1.31-.52,2.6-1.11,3.9-1.65,2.64-1.09,5.27-2.18,8-3.06C311.06,302.18,311,302,310.88,302Z"
       style="fill:#263238"
       id="path171" />
    <path
       d="M318,303.73a56.57,56.57,0,0,0-6.88.51c-1.14.15-2.26.38-3.38.64-.54.12-1.07.26-1.6.4s-1.15.4-1.74.54c-.06,0-.05.12,0,.11.55-.12,1.13-.15,1.7-.23l1.7-.26c1.13-.18,2.26-.33,3.4-.52,2.26-.37,4.53-.71,6.8-1C318.16,303.91,318.12,303.73,318,303.73Z"
       style="fill:#263238"
       id="path172" />
    <path
       d="M326.2,314.27c0-.44,0-.78,0-1-.31-3-4.55-9.58-4.55-9.58s3.64-9.13,1.48-14.52c-4-10.07-11.38-19.71-16.15-23l-.24-.17c2.89,2.24,2.51,11.13.84,11.74s-8-1.86-10.49-4.08c-1.6-1.44-5-6.66-5.06-9.19a1.76,1.76,0,0,1,.16-.87c-2.27.76-7,4.22-8.11,6.21-5.79,10.58-11.84,24.89-14.21,38.1a26.61,26.61,0,0,0-2.3,6.23,14.59,14.59,0,0,0,.37,6.54l0,.08a24.47,24.47,0,0,0-1,3.26,23.69,23.69,0,0,0-.69,5.32c0,.39,0,.78,0,1.18a2.71,2.71,0,0,0,.06.38h59.12c0-.05.26-2.9.36-4.85.06-1,.11-2.07.17-3.23.08-1.76.15-3.64.19-5.27C326.2,316.22,326.22,315.09,326.2,314.27Zm-33.91-34.83c4.47,10.62-.85,19.46-8.88,21.71s-8-12.45-1.22-25.43C285.39,269.55,287.82,268.81,292.29,279.44Z"
       style="fill:#FFC727"
       id="path173" />
    <path
       d="M326.2,314.27c0-.44,0-.78,0-1-.31-3-4.55-9.58-4.55-9.58s3.64-9.13,1.48-14.52c-4-10.07-11.38-19.71-16.15-23l-.24-.17c2.89,2.24,2.51,11.13.84,11.74s-8-1.86-10.49-4.08c-1.6-1.44-5-6.66-5.06-9.19a1.76,1.76,0,0,1,.16-.87c-2.27.76-7,4.22-8.11,6.21-5.79,10.58-11.84,24.89-14.21,38.1a26.61,26.61,0,0,0-2.3,6.23,14.59,14.59,0,0,0,.37,6.54l0,.08a24.47,24.47,0,0,0-1,3.26,23.69,23.69,0,0,0-.69,5.32c0,.39,0,.78,0,1.18a2.71,2.71,0,0,0,.06.38h59.12c0-.06.26-2.9.36-4.85.06-1,.11-2.07.17-3.23.08-1.76.15-3.64.19-5.27C326.2,316.22,326.22,315.09,326.2,314.27Zm-44-38.55c3.2-6.17,5.63-6.91,10.1,3.72s-.85,19.46-8.88,21.71S275.46,288.7,282.19,275.72Z"
       style="fill:#217821"
       id="path174" />
    <path
       d="M326,322.77c-.06,1.16-.11,2.26-.17,3.23l-1.74.19-42.59,4.66H266.32a2.71,2.71,0,0,1-.06-.38c0-.4,0-.79,0-1.18l3.62-.39,16.53-1.81,37-4Z"
       style="fill:#fff"
       id="path175" />
    <path
       d="M326.16,317.5,266.91,324a24.47,24.47,0,0,1,1-3.26l0-.08,58.3-6.36C326.22,315.09,326.2,316.22,326.16,317.5Z"
       style="fill:#fff"
       id="path176" />
    <path
       d="M285.36,300.49c.25,2.46.41,4.92.57,7.38s.24,4.93.36,7.39.17,4.93.2,7.4.05,4.93,0,7.4c-.25-2.46-.41-4.92-.57-7.38s-.24-4.93-.36-7.39-.16-4.93-.2-7.39S285.3,303,285.36,300.49Z"
       style="fill:#263238"
       id="path177" />
    <path
       d="M307.54,277.69c1.46,2.34,2.8,4.74,4.06,7.19s2.43,4.94,3.53,7.47c.26.65.54,1.26.78,1.93a10.44,10.44,0,0,1,.51,2.07,12.66,12.66,0,0,1-.08,4.21,17.27,17.27,0,0,1-3.53,7.53l.05-.17a28.66,28.66,0,0,1,.13,3.45l-.06,3.42c-.06,2.29-.14,4.57-.26,6.84l0-6.84-.05-3.42a31,31,0,0,0-.2-3.37v-.1l.06-.07a18.4,18.4,0,0,0,3.18-7.38,12.15,12.15,0,0,0,0-4,17.64,17.64,0,0,0-1.24-3.83c-1-2.54-2.2-5-3.34-7.52S308.77,280.15,307.54,277.69Z"
       style="fill:#263238"
       id="path178" />
    <path
       d="M267.25,327.66c4.75-.69,9.5-1.3,14.26-1.89l14.28-1.7,14.29-1.52c4.77-.47,9.54-.94,14.32-1.32-4.74.69-9.5,1.3-14.25,1.89l-14.28,1.7-14.3,1.52C276.8,326.81,272,327.28,267.25,327.66Z"
       style="fill:#263238"
       id="path179" />
    <path
       d="M268.59,317.05c4.56-.64,9.13-1.2,13.69-1.74L296,313.76l13.73-1.38c4.58-.43,9.16-.84,13.75-1.2-4.55.67-9.12,1.22-13.69,1.77l-13.71,1.55-13.74,1.38C277.76,316.3,273.18,316.72,268.59,317.05Z"
       style="fill:#263238"
       id="path180" />
    <rect
       x="307.5"
       y="287.94"
       width="10.04"
       height="3.27"
       transform="translate(-76.35 115.5) rotate(-18.7)"
       style="fill:#263238"
       id="rect180" />
    <rect
       x="310.1"
       y="293.68"
       width="10.04"
       height="3.27"
       transform="translate(-78.05 116.63) rotate(-18.7)"
       style="fill:#263238"
       id="rect181" />
    <path
       d="M279.54,247.53a2.91,2.91,0,0,0,2.14,5.25,3,3,0,0,0,0,1.23,3.2,3.2,0,0,0,3.56,2.46,2.61,2.61,0,0,0,0,1,2.92,2.92,0,0,0,5.14,1.15,2.91,2.91,0,0,0,3.44,1.94,2.72,2.72,0,0,0,1.11-.53,2,2,0,0,0,.05.26,2.92,2.92,0,0,0,5.54.46,2.91,2.91,0,0,0,5.44-.42,3.26,3.26,0,0,0,2.12.23,3.12,3.12,0,0,0,2-1.47,3.21,3.21,0,0,0,4.91-2.55,2.91,2.91,0,0,0,3.39-3.15,3.21,3.21,0,0,0,3.83-3.86,3.12,3.12,0,0,0-.41-1,1.86,1.86,0,0,0,.51-.06,2.93,2.93,0,0,0,2.19-3.5,2.89,2.89,0,0,0-.77-1.39,3.2,3.2,0,0,0,2.12-3.77,3.16,3.16,0,0,0-.85-1.54,3.23,3.23,0,0,0,1.36-3.41,3.16,3.16,0,0,0-1.79-2.19,2.9,2.9,0,0,0-1-4.21,3.17,3.17,0,0,0,.66-2.77,3.2,3.2,0,0,0-2.88-2.48,2.88,2.88,0,0,0,0-1.4,2.93,2.93,0,0,0-3.12-2.25,2.93,2.93,0,0,0,0-1.38,3.21,3.21,0,0,0-3.85-2.4,2.35,2.35,0,0,0-.7.26,3.12,3.12,0,0,0-.08-.52,3.22,3.22,0,0,0-3.85-2.4,2.7,2.7,0,0,0-.75.28,2.82,2.82,0,0,0-.07-.91,3.22,3.22,0,0,0-5.91-.91,3.19,3.19,0,0,0-3-.91,3.25,3.25,0,0,0-2,1.37,2.92,2.92,0,0,0-5.33.45,3,3,0,0,0-2.43-.51,2.92,2.92,0,0,0-2.24,2.55,3.15,3.15,0,0,0-2.55-.5,3.22,3.22,0,0,0-2.5,3.21,2.9,2.9,0,0,0-3.24,3.55,2.85,2.85,0,0,0,.41,1l-.19,0a3.23,3.23,0,0,0-2.41,3.87,3,3,0,0,0,.34.86,2.88,2.88,0,0,0-.77.08,2.91,2.91,0,0,0-.87,5.32,2.91,2.91,0,0,0,.37,4.63,3.21,3.21,0,0,0,1.24,6,2.87,2.87,0,0,0-.79,2.72A2.94,2.94,0,0,0,279.54,247.53Z"
       style="fill:#263238"
       id="path181" />
    <path
       d="M294.7,265.73c.14,1.1,4.56,8.63,9.51,8.91,1.62.09,2.49-8.69,2.49-8.69l.21-.64,3-8.86-10-7.95-1.45-1.07s-.65,2.48-1.43,5.58c0,.14-.08.29-.11.44s-.1.34-.14.5q-.18.69-.36,1.41c-.09.36-.17.7-.25,1.08s-.17.75-.25,1.13A61.25,61.25,0,0,0,294.7,265.73Z"
       style="fill:#ad6359"
       id="path182" />
    <path
       d="M297.05,253a18.75,18.75,0,0,0,9.86,12.3l3-8.86-10-7.95-1.45-1.07S297.83,249.91,297.05,253Z"
       style="fill:#263238"
       id="path183" />
    <path
       d="M293.48,243.22a19.18,19.18,0,0,1-2.54-12.89c1.32-7,10-11.79,17.82-10.39a14.39,14.39,0,0,1,9,5.06,14.33,14.33,0,0,0-15.92-1.4C292.76,228.35,292.1,239.61,293.48,243.22Z"
       style="fill:#2ca02c"
       id="path184" />
    <path
       d="M323,241.34c1.16,16.37-8.52,18.92-12.05,19.16-3.2.22-14.14.58-17-15.59s4.41-21.88,11.71-22.78S321.84,225,323,241.34Z"
       style="fill:#ad6359"
       id="path185" />
    <path
       d="M295,245.49c2.67.15,3.14-5.46,3.14-5.46s5.42-.11,7-7.95a11.92,11.92,0,0,1-2.24,6.5s9.53-1.24,13.35-9.33c0,0-1.5,4.11-3,5.59a11.2,11.2,0,0,0,5.85-4.52s1.79,4.58,3.11,5.82c0,0-.81-16.7-16.24-14.54,0,0-9.68.88-13,8.63S295,245.49,295,245.49Z"
       style="fill:#263238"
       id="path186" />
    <path
       d="M319.2,235.76c-.35.15-.71.24-1.08.36a1.9,1.9,0,0,1-1.17.16.6.6,0,0,1-.37-.62,1.47,1.47,0,0,1,1.07-1,2.1,2.1,0,0,1,1.54,0A.63.63,0,0,1,319.2,235.76Z"
       style="fill:#263238"
       id="path187" />
    <path
       d="M308.13,239.75a8.64,8.64,0,0,0,1.14,0,1.8,1.8,0,0,0,1.16-.25.59.59,0,0,0,.13-.71,1.45,1.45,0,0,0-1.35-.59,2.13,2.13,0,0,0-1.46.5A.63.63,0,0,0,308.13,239.75Z"
       style="fill:#263238"
       id="path188" />
    <path
       d="M310.83,241.58s-.08.06-.07.11c.19,1.11.23,2.41-.73,2.92,0,0,0,.07,0,.06C311.26,244.32,311.19,242.6,310.83,241.58Z"
       style="fill:#263238"
       id="path189" />
    <path
       d="M309.67,240.56c-1.81.12-1.44,3.73.24,3.62S311.18,240.45,309.67,240.56Z"
       style="fill:#263238"
       id="path190" />
    <path
       d="M309,240.82c-.3.24-.57.63-1,.71s-.8-.26-1.13-.59c0,0-.06,0-.06.05.07.69.41,1.37,1.16,1.4s1.11-.64,1.21-1.35C309.23,240.9,309.1,240.73,309,240.82Z"
       style="fill:#263238"
       id="path191" />
    <path
       d="M317.31,240.25s.09,0,.1.09c.07,1.12.34,2.4,1.39,2.67,0,0,0,.07,0,.07C317.54,243,317.2,241.32,317.31,240.25Z"
       style="fill:#263238"
       id="path192" />
    <path
       d="M318.2,239c1.79-.31,2.27,3.29.62,3.58S316.7,239.24,318.2,239Z"
       style="fill:#263238"
       id="path193" />
    <path
       d="M319,239.12c.31.15.64.46,1,.44s.64-.46.84-.87c0,0,.05,0,.06,0,.11.69,0,1.44-.66,1.66s-1.11-.33-1.37-1C318.79,239.26,318.86,239.06,319,239.12Z"
       style="fill:#263238"
       id="path194" />
    <path
       d="M311.61,251.52c.28.25.57.59,1,.6a3,3,0,0,0,1.19-.35,0,0,0,0,1,.05,0,1.51,1.51,0,0,1-1.39.7,1.21,1.21,0,0,1-.94-.94C311.48,251.51,311.57,251.48,311.61,251.52Z"
       style="fill:#263238"
       id="path195" />
    <path
       d="M316.43,246.47s.46,1.68.56,2.48c0,.08-.18.14-.45.19h0a3.88,3.88,0,0,1-3.91-.94.09.09,0,0,1,.11-.13,5.76,5.76,0,0,0,3.62.54c0-.23-.88-2.84-.75-2.87a7.46,7.46,0,0,1,1.88.17c-.86-3.51-2.27-6.87-3.07-10.38a.11.11,0,0,1,.2-.08,58.8,58.8,0,0,1,3.79,11C318.5,247,316.77,246.57,316.43,246.47Z"
       style="fill:#263238"
       id="path196" />
    <path
       d="M316.45,248.6a4.71,4.71,0,0,1-1.48,1.86,2.16,2.16,0,0,1-1.23.38c-1,0-1.19-.84-1.19-1.59a4.84,4.84,0,0,1,.14-1.18A6.11,6.11,0,0,0,316.45,248.6Z"
       style="fill:#263238"
       id="path197" />
    <path
       d="M315,250.46a2.16,2.16,0,0,1-1.23.38c-1,0-1.19-.84-1.19-1.59A2.18,2.18,0,0,1,315,250.46Z"
       style="fill:#ff9bbc"
       id="path198" />
    <path
       d="M296.87,245.29s-3.51-5.21-5.87-4,.21,8.76,2.94,9.83a2.79,2.79,0,0,0,3.77-1.44Z"
       style="fill:#ad6359"
       id="path199" />
    <path
       d="M291.79,243.46s-.05,0,0,.07c1.91.81,2.9,2.61,3.57,4.48a1.54,1.54,0,0,0-2.3-.47c-.05,0,0,.12.06.11a1.7,1.7,0,0,1,1.87.63,7.86,7.86,0,0,1,.88,1.55c.09.17.4.08.34-.12l0,0C296.27,247.22,294.42,243.75,291.79,243.46Z"
       style="fill:#263238"
       id="path200" />
    <path
       d="M392.34,262.91c-3.94,4.38-15.5,10.19-18.82,10.52s-13.87-19-12.49-22.14,15.78-16.87,21.71-17.85S396.42,258.36,392.34,262.91Z"
       style="fill:#ad6359"
       id="path201" />
    <rect
       x="250.6"
       y="288.57"
       width="209.8"
       height="4.47"
       transform="translate(783.61 124.45) rotate(119.48)"
       style="fill:#263238"
       id="rect201" />
    <path
       d="M311,398.29l-14,24.82H262.72L285,383.77a8.2,8.2,0,0,1,4.08-3.56l16.94-6.8.2.12,3.7,2.09L312,393.28A8.09,8.09,0,0,1,311,398.29Z"
       style="fill:#FFC727"
       id="path202" />
    <path
       d="M311,398.29l-14,24.82H262.72L285,383.77a8.2,8.2,0,0,1,4.08-3.56l16.94-6.8.2.12,3.7,2.09L312,393.28A8.09,8.09,0,0,1,311,398.29Z"
       style="opacity:0.2"
       id="path203" />
    <path
       d="M300.25,382.83c-1.72,3.46-3.53,6.86-5.36,10.26s-3.73,6.75-5.59,10.13-3.83,6.69-5.8,10l-3,5c-1,1.63-2,3.29-3.06,4.91.85-1.73,1.75-3.43,2.63-5.15l2.72-5.11c1.83-3.39,3.73-6.75,5.6-10.13s3.82-6.69,5.79-10S298.17,386.08,300.25,382.83Z"
       style="opacity:0.1"
       id="path204" />
    <path
       d="M304.45,385.2c-1.61,3.26-3.31,6.47-5,9.67s-3.48,6.37-5.25,9.53-3.6,6.31-5.46,9.42l-2.8,4.67c-1,1.54-1.9,3.1-2.89,4.62.79-1.63,1.64-3.24,2.46-4.86l2.56-4.8c1.71-3.21,3.48-6.37,5.26-9.54s3.59-6.31,5.46-9.42S302.48,388.26,304.45,385.2Z"
       style="opacity:0.1"
       id="path205" />
    <path
       d="M373.92,236.78c-.59,3.06,3.36,2,3.36,2s-5.31,2.9-4.69,6.3,5.33,1.81,5.67,1.71c-.28.16-5.09,3-4.12,6.3s5.51,1.2,5.8,1.06c-.22.23-3,3.32-1.72,5.7,2.26,4.07,9.72-3.64,13.49-3.55,0,0,.58,6.42.63,6.61,0,0,7.24-7.2,7.08-12.3a3.26,3.26,0,0,0-2.6-3.15s2.59-2.06,1.9-4.72c-.35-1.36-2.85-2-2.85-2a4.1,4.1,0,0,0,1.25-4.06c-.6-1.86-3-2.22-3-2.22s1.15-2.56-.08-4.26C391.56,226.75,375.17,230.21,373.92,236.78Z"
       style="fill:#ad6359"
       id="path206" />
    <path
       d="M393.73,234.33c.06,0,.06-.08,0-.09a29.12,29.12,0,0,0-16.67,4.57c-.15.11-.05.4.14.32A59.63,59.63,0,0,1,393.73,234.33Z"
       style="fill:#263238"
       id="path207" />
    <path
       d="M395.94,240.68c.07,0,.06-.11,0-.12a27.21,27.21,0,0,0-17.87,6.12c-.17.15-.18.45,0,.29C381.63,244.35,390.57,241.34,395.94,240.68Z"
       style="fill:#263238"
       id="path208" />
    <path
       d="M379.7,254.57c5-4,10.69-5.94,16.87-7.13.09,0,.05-.13,0-.13-3.18-.25-7,.92-10,2.08a16.77,16.77,0,0,0-7,5C379.48,254.48,379.59,254.65,379.7,254.57Z"
       style="fill:#263238"
       id="path209" />
    <path
       d="M377.28,238.78a19.79,19.79,0,0,0-2.7,2.2,6.54,6.54,0,0,0-1.81,2.81,2.15,2.15,0,0,0,.17,1.5,3.11,3.11,0,0,0,1.06,1.13,3.72,3.72,0,0,0,3,.2l2.44-.79-2,1.59a10.67,10.67,0,0,0-2.31,2.48,3.77,3.77,0,0,0-.67,3,2.11,2.11,0,0,0,2.09,1.69,6.45,6.45,0,0,0,3.12-.87l2.68-1.44-2.05,2.22a10.6,10.6,0,0,0-1.46,2.05,4.07,4.07,0,0,0-.55,2.28,2,2,0,0,0,1.24,1.61,4.28,4.28,0,0,0,2.38-.17,34.07,34.07,0,0,0,4.81-2.13c.79-.39,1.59-.79,2.41-1.15a6.3,6.3,0,0,1,2.57-.68,7,7,0,0,0-2.46.9c-.78.42-1.54.87-2.31,1.33a29.09,29.09,0,0,1-4.79,2.43,5,5,0,0,1-2.85.29,2.74,2.74,0,0,1-1.92-2.31,5,5,0,0,1,.61-2.84,10.61,10.61,0,0,1,1.59-2.3l.62.78a7.35,7.35,0,0,1-3.68,1.07,3.11,3.11,0,0,1-2-.72,3.49,3.49,0,0,1-1.07-1.77,4.72,4.72,0,0,1,.85-3.79,11.4,11.4,0,0,1,2.59-2.69l.42.8a4.44,4.44,0,0,1-3.74-.44,3.65,3.65,0,0,1-1.23-1.47,2.67,2.67,0,0,1-.14-1.92,6.56,6.56,0,0,1,2.14-2.89A15.41,15.41,0,0,1,377.28,238.78Z"
       style="fill:#263238"
       id="path210" />
    <path
       d="M363.07,248.52s8-23.67,15.75-16c2.29,2.28,9,14.38,6.58,15.77-3.11,1.8-6.84-2.73-8.74-6,0,0-1.6,8.44-7.8,9.07A6.19,6.19,0,0,1,363.07,248.52Z"
       style="fill:#ad6359"
       id="path211" />
    <path
       d="M378.14,231.93a12.72,12.72,0,0,1,2.62,2.76,28,28,0,0,1,2.08,3.22,43.6,43.6,0,0,1,3.22,7,7.32,7.32,0,0,1,.41,2,2.6,2.6,0,0,1-.2,1.14,1.71,1.71,0,0,1-.33.55,2,2,0,0,1-.49.4,3.27,3.27,0,0,1-2.21.34,6.25,6.25,0,0,1-1.93-.8,11.6,11.6,0,0,1-2.87-2.71,26.5,26.5,0,0,1-2.16-3.21l.82-.15a15.21,15.21,0,0,1-.92,2.79,13.7,13.7,0,0,1-1.41,2.54,10.27,10.27,0,0,1-2,2.1,7.63,7.63,0,0,1-2.56,1.29,8.63,8.63,0,0,0,2.36-1.53,10.12,10.12,0,0,0,1.74-2.17,13.72,13.72,0,0,0,1.21-2.5,14.27,14.27,0,0,0,.72-2.67l.18-1.12.63,1a29.09,29.09,0,0,0,2.17,3,11.57,11.57,0,0,0,2.66,2.44,3.13,3.13,0,0,0,3,.45c.77-.38.53-1.74.19-2.88a36.18,36.18,0,0,0-1.31-3.5c-.49-1.16-1-2.32-1.54-3.44A24.29,24.29,0,0,0,378.14,231.93Z"
       style="fill:#263238"
       id="path212" />
    <path
       d="M280.34,275.36c-9.6,21.38-15.41,46.9-12.2,52.37,3.53,6,36.57,17,56.89,17.38,3.78.07,4.37-31.16.33-31.28-7.29-.22-31.28-3.37-33.5-5.1-1.86-1.45.25-11.1.11-27.5C291.87,268.66,285.22,264.5,280.34,275.36Z"
       style="fill:#ad6359"
       id="path213" />
    <path
       d="M360.16,316.54a4.49,4.49,0,0,1-1.48,4.92,6.69,6.69,0,0,1,2.43,3.84c.46,2.71-3.58,4.62-3.58,4.62a8.26,8.26,0,0,1,1.91,4.46c.18,2.63-3.62,5.15-3.62,5.15a7.18,7.18,0,0,1-.79,5c-2.43,3.95-9.51,4-14,4.06s-17.32-3.94-19.84-4.46l-.71-28.87s20.08-6.06,25.39-5.39C350.32,310.4,358.94,313.25,360.16,316.54Z"
       style="fill:#ad6359"
       id="path214" />
    <path
       d="M358.47,321c-4.6-1.74-9.47-2-14.31-2.57a.08.08,0,1,0,0,.16c4.82.5,9.49,2,14.28,2.64A.12.12,0,0,0,358.47,321Z"
       style="fill:#263238"
       id="path215" />
    <path
       d="M357.43,329.55a12.91,12.91,0,0,0-3.33-.45c-1.19-.08-2.37-.13-3.56-.17-2.38-.07-4.76-.1-7.14-.05-.11,0-.13.17,0,.17q3.56.12,7.11.37l3.55.3a15.06,15.06,0,0,0,3.35.15A.17.17,0,0,0,357.43,329.55Z"
       style="fill:#263238"
       id="path216" />
    <path
       d="M355.72,339.52a9,9,0,0,0-3-.24l-3.25,0c-2.17-.05-4.34-.1-6.5-.22a.09.09,0,0,0,0,.17c2.2.13,4.4.3,6.6.42l3.24.15a8.35,8.35,0,0,0,3-.12A.06.06,0,0,0,355.72,339.52Z"
       style="fill:#263238"
       id="path217" />
    <path
       d="M293,298.93l-23.6.5s6.1-19.07,12.07-27,10.89-7,11.58,2.23S293,298.93,293,298.93Z"
       style="fill:#a6a6a6"
       id="path218" />
    <path
       d="M272.31,293.94c1.52-.49,12.39-1.39,20.12-1a.09.09,0,1,1,0,.18c-.85.07-18.5,1.3-20.12,1.06C272.18,294.17,272.2,294,272.31,293.94Z"
       style="fill:#263238"
       id="path219" />
    <path
       d="M294.25,284.6c0-.07-.11-.08-.13,0-.22.8-.33,1.63-.47,2.45,0,.19-.06.38-.08.57-.1-2-.23-4-.37-5.95a.08.08,0,0,0-.15,0c.18,6.85-.25,10.24-.26,17.08l-2,.2a.13.13,0,0,0,0,.25l2.3.05a.26.26,0,0,0,.25-.2c.67-4.44.5-5.51.32-10,.14-.65.28-1.3.37-2A17.09,17.09,0,0,0,294.25,284.6Z"
       style="fill:#263238"
       id="path220" />
  </g>
  <g
     id="freepik--character-3--inject-5">
    <path
       d="M429.69,277.36c12.14,10.47,27.22,20.11,36.12,22.81,6,1.81,22.71-11.12,35-26.46,2.43-3-11-26.44-13.48-23-6.35,8.86-19.55,23.73-22,24-2,.21-16.65-4-27.62-7.48C420.21,261.61,421.14,270,429.69,277.36Z"
       style="fill:#f7a9a0"
       id="path221" />
    <path
       d="M454,271.9l-7,22.54s-16.15-11.84-21.78-20-3.17-12.54,5.79-10.27S454,271.9,454,271.9Z"
       style="fill:#455a64"
       id="path222" />
    <path
       d="M450.46,283.38,447,294.44s-16.15-11.84-21.78-20c-3.89-5.64-3.93-9.47-.61-10.54Z"
       style="fill:#37474f"
       id="path223" />
    <path
       d="M442.73,289.92c0-1.6,2.62-12.19,5.45-19.4a.09.09,0,0,1,.17.06c-.21.83-4.65,18-5.39,19.41C442.9,290.11,442.73,290,442.73,289.92Z"
       style="fill:#263238"
       id="path224" />
    <path
       d="M444.14,330.85H386.06c.11-.52.21-1.05.32-1.59.27-1.37.56-2.78.87-4.24.16-.7.31-1.41.47-2.14.28-1.28.58-2.59.89-3.92.23-.95.45-1.9.69-2.86s.5-2,.76-3c.33-1.31.68-2.62,1-3.95,4.58-16.86,11.19-34.67,20-44.49a8.82,8.82,0,0,1,4.38-2.64l.36-.09a9.76,9.76,0,0,1,1.53-.25l.3,0c4.51-.33,9.12,1.67,10.13,3,3.47,4.43,7.57,19.63,10.8,34.37.26,1.19.52,2.39.77,3.57.21,1,.42,2,.62,3q.24,1.2.48,2.37c.24,1.21.47,2.41.7,3.57.13.7.26,1.4.39,2.08.25,1.3.48,2.57.7,3.77s.43,2.46.62,3.59c.53,3.19.92,5.81,1.13,7.57A11.09,11.09,0,0,1,444.14,330.85Z"
       style="fill:#455a64"
       id="path225" />
    <path
       d="M445.43,319.36a2.86,2.86,0,0,1-.07-.28c-.07-.29-.15-.58-.23-.86a2.17,2.17,0,0,1-.07-.24,22.58,22.58,0,0,0-1.56-3.85,13.4,13.4,0,0,0,.27-3.24,1.28,1.28,0,0,1,0-.19c0-.25,0-.48-.06-.72a12.7,12.7,0,0,0-.61-2.67,10.39,10.39,0,0,0-1.27-2.58A16.6,16.6,0,0,0,442,302c0-.18,0-.36,0-.54s0-.2,0-.3,0-.39-.05-.57-.05-.4-.08-.59a11.42,11.42,0,0,0-.38-1.62h0a7.38,7.38,0,0,0-1.5-2.84c-2.79-13-6.5-25.91-11.17-31.14-1.71-1.92-6.48-3.23-11.15-2.73l-.3,0c-.51.06-1,.14-1.53.25l-.36.09a11.35,11.35,0,0,0-6.67,4.07c-7.65,10.23-13.44,25.11-18,38.85a20.89,20.89,0,0,0-2.44,4.8h0s0,.07,0,.11c-.07.22-.15.44-.22.67a.65.65,0,0,0,0,.13c-.08.26-.16.52-.23.79,0,.09-.05.19-.07.29s-.11.44-.15.67a3.4,3.4,0,0,0-.07.34c0,.22-.08.44-.11.66a.37.37,0,0,0,0,.11,1,1,0,0,0,0,.17,14,14,0,0,0-.08,2.83,10.49,10.49,0,0,0-2.45,3.28,10.68,10.68,0,0,0-.54,1.32l-.15.46c-.05.18-.1.35-.14.53s-.08.35-.11.53l-.09.54-.06.59a12.41,12.41,0,0,0,.12,2.88,31.93,31.93,0,0,0-1.51,3.51c-.09.24-.17.48-.26.73h53.48l.33-.09c4.05-1.09,7-1.92,8.07-2.3a1.36,1.36,0,0,0,.44-.2c.12-.18,1.07-1.06,1.38-3.84A15.13,15.13,0,0,0,445.43,319.36Zm-27.27-35.48c-1.45,5.27-8.16,10.42-11.46,10.54s-5.26-2.15-5.38-6.72,4.18-15.31,8-17.36C415.09,267.21,419.6,278.62,418.16,283.88Z"
       style="fill:#217821"
       id="path226" />
    <path
       d="M382.1,330.85h0c-.06.2-.13.4-.2.61C382,331.25,382,331.05,382.1,330.85Z"
       style="fill:#fff"
       id="path227" />
    <path
       d="M445.62,320.3l-2.76.59-1.65.35-5.36,1.15-6.3,1.35-24.05,5.14-9.19,2h-14.2c.08-.25.16-.49.25-.73h0l4-.86,19.25-4.12,29.7-6.36,6.91-1.48,2.41-.52c.14.37.28.77.41,1.2a2.17,2.17,0,0,0,.07.24A18.71,18.71,0,0,1,445.62,320.3Z"
       style="fill:#fff"
       id="path228" />
    <path
       d="M443.78,310.89l-60,12.84a11.07,11.07,0,0,1,1.09-4l58.25-12.45A13,13,0,0,1,443.78,310.89Z"
       style="fill:#fff"
       id="path229" />
    <path
       d="M442,302l-54.66,11.7a18.93,18.93,0,0,1,1-3.94l53.14-11.38A12.6,12.6,0,0,1,442,302Z"
       style="fill:#fff"
       id="path230" />
    <path
       d="M405.43,330.85c-.05-3,0-6.08,0-9.12s.15-6.07.23-9.11.24-6.07.4-9.1.35-6.07.61-9.1c.05,3,0,6.08,0,9.12s-.15,6.07-.23,9.11-.24,6.07-.41,9.1S405.69,327.82,405.43,330.85Z"
       style="fill:#263238"
       id="path231" />
    <path
       d="M427.27,274.29c1.08,4.73,2.06,9.47,3,14.23S432.12,298,433,302.8s1.67,9.55,2.36,14.36c.17,1.2.35,2.4.49,3.6a26,26,0,0,1,.32,3.64c0,2.43-.11,4.86-.28,7.27,0-2.42,0-4.84-.08-7.26,0-.6-.06-1.2-.14-1.79l-.28-1.79c-.18-1.2-.39-2.39-.59-3.59-.82-4.77-1.65-9.54-2.53-14.31l-2.55-14.31C428.88,283.85,428.05,279.08,427.27,274.29Z"
       style="fill:#263238"
       id="path232" />
    <path
       d="M384.34,325.6c4.86-1.12,9.72-2.16,14.59-3.21l14.62-3.08,14.64-3,7.31-1.52c2.44-.49,4.87-1,7.3-1.59-4.78,1.41-9.64,2.54-14.49,3.67s-9.73,2.14-14.6,3.18-9.77,2-14.66,2.9S389.26,324.79,384.34,325.6Z"
       style="fill:#263238"
       id="path233" />
    <path
       d="M387.3,316.48c4.44-1,8.89-2,13.34-2.89L414,310.83l13.38-2.71,6.68-1.37c2.23-.45,4.45-.94,6.67-1.44-4.36,1.31-8.8,2.35-13.23,3.38s-8.9,1.93-13.35,2.87-8.93,1.77-13.41,2.59S391.8,315.77,387.3,316.48Z"
       style="fill:#263238"
       id="path234" />
    <rect
       x="423.62"
       y="294.11"
       width="11.9"
       height="3.88"
       transform="translate(-60.85 118.12) rotate(-14.63)"
       style="fill:#263238"
       id="rect234" />
    <rect
       x="425.5"
       y="301.3"
       width="11.9"
       height="3.88"
       transform="translate(-62.61 118.83) rotate(-14.63)"
       style="fill:#263238"
       id="rect235" />
    <rect
       x="429.35"
       y="320.24"
       width="11.9"
       height="3.88"
       transform="translate(-67.27 120.42) rotate(-14.63)"
       style="fill:#263238"
       id="rect236" />
    <path
       d="M382.11,330.85c-.06.2-.13.4-.2.61.06-.21.12-.41.19-.61Z"
       style="fill:#FFC727"
       id="path236" />
    <path
       d="M405.22,275.36c-9.61,21.38-15.41,46.9-12.2,52.37,3.52,6,36.56,17,56.89,17.38,3.77.07,4.36-31.16.33-31.28-7.3-.22-31.29-3.37-33.5-5.1-1.87-1.45.25-11.1.11-27.5C416.74,268.66,410.1,264.5,405.22,275.36Z"
       style="fill:#f7a9a0"
       id="path237" />
    <path
       d="M485,316.54a4.5,4.5,0,0,1-1.48,4.92A6.69,6.69,0,0,1,486,325.3c.46,2.71-3.59,4.62-3.59,4.62a8.24,8.24,0,0,1,1.92,4.46c.18,2.63-3.63,5.15-3.63,5.15a7.21,7.21,0,0,1-.78,5c-2.44,3.95-9.51,4-14,4.06s-17.33-3.94-19.85-4.46l-.7-28.87s20.08-6.06,25.38-5.39C475.2,310.4,483.82,313.25,485,316.54Z"
       style="fill:#f7a9a0"
       id="path238" />
    <path
       d="M483.35,321c-4.6-1.74-9.47-2-14.31-2.57a.08.08,0,1,0,0,.16c4.82.5,9.48,2,14.27,2.64A.12.12,0,0,0,483.35,321Z"
       style="fill:#263238"
       id="path239" />
    <path
       d="M482.3,329.55a12.78,12.78,0,0,0-3.32-.45c-1.19-.08-2.38-.13-3.57-.17-2.37-.07-4.76-.1-7.14-.05-.1,0-.12.17,0,.17q3.56.12,7.1.37c1.19.09,2.37.19,3.55.3a15.12,15.12,0,0,0,3.36.15A.17.17,0,0,0,482.3,329.55Z"
       style="fill:#263238"
       id="path240" />
    <path
       d="M480.59,339.52a8.93,8.93,0,0,0-3-.24l-3.26,0c-2.16-.05-4.33-.1-6.5-.22a.09.09,0,0,0,0,.17c2.2.13,4.4.3,6.6.42l3.25.15a8.35,8.35,0,0,0,3-.12A.06.06,0,0,0,480.59,339.52Z"
       style="fill:#263238"
       id="path241" />
    <path
       d="M417.86,298.93l-23.6.5s6.1-19.07,12.07-27,10.88-7,11.58,2.23S417.86,298.93,417.86,298.93Z"
       style="fill:#455a64"
       id="path242" />
    <path
       d="M397.19,293.94c1.51-.49,12.39-1.39,20.12-1,.11,0,.11.18,0,.18-.86.07-18.51,1.3-20.12,1.06C397.05,294.17,397.08,294,397.19,293.94Z"
       style="fill:#263238"
       id="path243" />
    <path
       d="M419.12,284.6a.06.06,0,0,0-.12,0,20.36,20.36,0,0,0-.47,2.45c0,.19-.06.38-.09.57-.1-2-.23-4-.36-5.95a.08.08,0,0,0-.15,0c.17,6.85-.25,10.24-.26,17.08l-2.05.2a.13.13,0,0,0,0,.25l2.31.05a.24.24,0,0,0,.24-.2c.67-4.44.51-5.51.33-10,.13-.65.27-1.3.37-2A15.77,15.77,0,0,0,419.12,284.6Z"
       style="fill:#263238"
       id="path244" />
    <path
       d="M426.9,272.32c-3.32.42-11.52-3.92-13.34-8.79-.12-.34.83-3.53,1.8-7.47.58-2.39,1.16-5.07,1.52-7.55.07-.51,15,6,15,6a39.83,39.83,0,0,0-2.89,9.31,6,6,0,0,0,0,1,1,1,0,0,1,0,.17C429,267,430.45,271.87,426.9,272.32Z"
       style="fill:#f7a9a0"
       id="path245" />
    <path
       d="M429,264.89c0,.05,0,.11,0,.17a9.46,9.46,0,0,1-1.61-.15c-9.13-1.53-9.88-13.34-9.93-16.32,2.71.8,14.47,6,14.47,6a39.83,39.83,0,0,0-2.89,9.31A5.13,5.13,0,0,0,429,264.89Z"
       style="fill:#263238"
       id="path246" />
    <path
       d="M436.09,226.19s5.26,2.25,6.18,7.63-.37,11-.83,11.27S436.09,226.19,436.09,226.19Z"
       style="fill:#263238"
       id="path247" />
    <path
       d="M415.35,232.36c-1.68,5.58,1.35,21.67,5.33,25.25,5.78,5.17,15.2,5.62,19.58-1.31,4.26-6.72-.06-27.62-4.5-30.86C429.21,220.66,417.82,224.11,415.35,232.36Z"
       style="fill:#f7a9a0"
       id="path248" />
    <path
       d="M431.43,242.09s-.07.06-.06.11c.23,1.08.31,2.35-.6,2.89,0,0,0,.07,0,.06C432,244.76,431.83,243.07,431.43,242.09Z"
       style="fill:#263238"
       id="path249" />
    <path
       d="M430.26,241.13c-1.77.19-1.27,3.71.37,3.54S431.74,241,430.26,241.13Z"
       style="fill:#263238"
       id="path250" />
    <path
       d="M437.46,241.19s.09,0,.09.09c.12,1.1.45,2.33,1.49,2.55,0,0,0,.07,0,.07C437.81,243.9,437.39,242.25,437.46,241.19Z"
       style="fill:#263238"
       id="path251" />
    <path
       d="M438.27,239.92c1.73-.39,2.38,3.11.77,3.47S436.81,240.24,438.27,239.92Z"
       style="fill:#263238"
       id="path252" />
    <path
       d="M428.64,239.72a13.24,13.24,0,0,0,1.29-.68,2.28,2.28,0,0,0,1.19-.94.73.73,0,0,0-.25-.88,1.86,1.86,0,0,0-1.89.07,2.75,2.75,0,0,0-1.39,1.4A.8.8,0,0,0,428.64,239.72Z"
       style="fill:#263238"
       id="path253" />
    <path
       d="M439.38,238a14.51,14.51,0,0,1-1.46-.17,2.35,2.35,0,0,1-1.45-.45.75.75,0,0,1-.08-.91,1.85,1.85,0,0,1,1.79-.61,2.7,2.7,0,0,1,1.8.8A.8.8,0,0,1,439.38,238Z"
       style="fill:#263238"
       id="path254" />
    <path
       d="M431.55,252.2c.3.22.61.53,1,.51a3,3,0,0,0,1.13-.45s.08,0,.06.05a1.48,1.48,0,0,1-1.3.79,1.16,1.16,0,0,1-1-.84C431.43,252.2,431.51,252.17,431.55,252.2Z"
       style="fill:#263238"
       id="path255" />
    <path
       d="M432.23,248.76a3.73,3.73,0,0,0,2.72,1.3,4.36,4.36,0,0,0,1.34-.13.92.92,0,0,0,.25-.06l.24-.07a.27.27,0,0,0,.18-.28h0a.45.45,0,0,0,0-.11h0v-.1c-.1-.84-.36-2.11-.36-2.11.33.11,2,.59,1.9.15a55.68,55.68,0,0,0-3-11,.1.1,0,0,0-.19.06c.57,3.49,1.75,6.86,2.38,10.36a6.61,6.61,0,0,0-1.83-.29c-.11.06.55,2.44.57,2.83v0a5.23,5.23,0,0,1-4-.65C432.23,248.6,432.15,248.69,432.23,248.76Z"
       style="fill:#263238"
       id="path256" />
    <path
       d="M435.74,249.58a4.55,4.55,0,0,1-1.57,1.62,2,2,0,0,1-1.2.25c-.9-.11-1-.9-1-1.61a5,5,0,0,1,.24-1.11A5.83,5.83,0,0,0,435.74,249.58Z"
       style="fill:#263238"
       id="path257" />
    <path
       d="M434.17,251.2a2,2,0,0,1-1.2.25c-.9-.11-1-.9-1-1.61A2.07,2.07,0,0,1,434.17,251.2Z"
       style="fill:#ff9bbc"
       id="path258" />
    <path
       d="M417,247c1.92.32,3.29-5.52,3.6-7.73.27-1.95.07-8,.11-8.41S429.5,235,434,233s7-6.58,6.8-8.54-6.64-6.11-11.67-5.69-10.92,7.68-10.92,7.68a23.42,23.42,0,0,0,1.81-3.26c-.11-.22-3.16,1.51-3.44,3.89,0,0,.25-3,0-3s-2.43,2.79-1.61,4.58c0,0-2.56,2.91-2.45,5.7S414.78,246.61,417,247Z"
       style="fill:#263238"
       id="path259" />
    <path
       d="M437.14,231.62a15.66,15.66,0,0,1-4.18,2.16,10.57,10.57,0,0,1-5.12-.12,15.92,15.92,0,0,1-4.75-2c-1.29-.8-2.48-1.81-3.83-2.5-.34-.17-.64.33-.41.59a16.85,16.85,0,0,0,9.27,5.06,9.66,9.66,0,0,0,9-3.15S437.16,231.6,437.14,231.62Z"
       style="fill:#263238"
       id="path260" />
    <path
       d="M419.49,245.65s-3.77-5.12-6.1-3.76.6,8.84,3.4,9.8a2.82,2.82,0,0,0,3.74-1.61Z"
       style="fill:#f7a9a0"
       id="path261" />
    <path
       d="M414.28,244s0,.06,0,.08c2,.74,3,2.51,3.8,4.37a1.57,1.57,0,0,0-2.35-.37s0,.11.06.1a1.72,1.72,0,0,1,1.92.56,8.29,8.29,0,0,1,1,1.52c.09.17.41.07.33-.13v0C419,247.62,417,244.19,414.28,244Z"
       style="fill:#263238"
       id="path262" />
    <path
       d="M518.25,262.91c-3.94,4.38-15.5,10.19-18.83,10.52s-13.86-19-12.48-22.14,15.78-16.87,21.71-17.85S522.33,258.36,518.25,262.91Z"
       style="fill:#f7a9a0"
       id="path263" />
    <rect
       x="376.51"
       y="288.57"
       width="209.8"
       height="4.47"
       transform="translate(971.48 14.84) rotate(119.48)"
       style="fill:#263238"
       id="rect263" />
    <path
       d="M436.92,398.29l-14,24.82H388.63l22.23-39.34a8.2,8.2,0,0,1,4.08-3.56l16.93-6.8.21.12,3.7,2.09,2.14,17.66A8.16,8.16,0,0,1,436.92,398.29Z"
       style="fill:#FFC727"
       id="path264" />
    <path
       d="M436.92,398.29l-14,24.82H388.63l22.23-39.34a8.2,8.2,0,0,1,4.08-3.56l16.93-6.8.21.12,3.7,2.09,2.14,17.66A8.16,8.16,0,0,1,436.92,398.29Z"
       style="opacity:0.2"
       id="path265" />
    <path
       d="M426.16,382.83c-1.72,3.46-3.53,6.86-5.36,10.26s-3.73,6.75-5.59,10.13-3.83,6.69-5.8,10l-3,5c-1,1.63-2,3.29-3.06,4.91.85-1.73,1.76-3.43,2.64-5.15l2.72-5.11c1.83-3.39,3.73-6.75,5.6-10.13s3.82-6.69,5.79-10S424.08,386.08,426.16,382.83Z"
       style="opacity:0.1"
       id="path266" />
    <path
       d="M430.36,385.2c-1.61,3.26-3.31,6.47-5,9.67s-3.48,6.37-5.26,9.53-3.59,6.31-5.45,9.42l-2.8,4.67c-1,1.54-1.9,3.1-2.9,4.62.8-1.63,1.65-3.24,2.47-4.86l2.56-4.8c1.7-3.21,3.48-6.37,5.25-9.54s3.6-6.31,5.46-9.42S428.39,388.26,430.36,385.2Z"
       style="opacity:0.1"
       id="path267" />
    <path
       d="M499.83,236.78c-.59,3.06,3.36,2,3.36,2s-5.31,2.9-4.69,6.3,5.33,1.81,5.67,1.71c-.28.16-5.09,3-4.12,6.3s5.51,1.2,5.8,1.06c-.22.23-3.05,3.32-1.73,5.7,2.27,4.07,9.72-3.64,13.5-3.55,0,0,.58,6.42.63,6.61,0,0,7.24-7.2,7.08-12.3a3.27,3.27,0,0,0-2.61-3.15s2.6-2.06,1.91-4.72c-.35-1.36-2.85-2-2.85-2a4.1,4.1,0,0,0,1.25-4.06c-.6-1.86-3-2.22-3-2.22s1.15-2.56-.08-4.26C517.47,226.75,501.08,230.21,499.83,236.78Z"
       style="fill:#f7a9a0"
       id="path268" />
    <path
       d="M519.64,234.33c.06,0,.06-.08,0-.09A29.1,29.1,0,0,0,503,238.81c-.15.11-.05.4.14.32A59.63,59.63,0,0,1,519.64,234.33Z"
       style="fill:#263238"
       id="path269" />
    <path
       d="M521.85,240.68c.07,0,0-.11,0-.12A27.21,27.21,0,0,0,504,246.68c-.17.15-.18.45,0,.29C507.54,244.35,516.48,241.34,521.85,240.68Z"
       style="fill:#263238"
       id="path270" />
    <path
       d="M505.61,254.57c5-4,10.69-5.94,16.87-7.13.08,0,0-.13,0-.13-3.18-.25-7,.92-10,2.08a16.77,16.77,0,0,0-7,5C505.39,254.48,505.5,254.65,505.61,254.57Z"
       style="fill:#263238"
       id="path271" />
    <path
       d="M503.19,238.78a19.2,19.2,0,0,0-2.7,2.2,6.36,6.36,0,0,0-1.81,2.81,2.15,2.15,0,0,0,.17,1.5,3.11,3.11,0,0,0,1.06,1.13,3.72,3.72,0,0,0,3,.2l2.44-.79-2,1.59a10.46,10.46,0,0,0-2.31,2.48,3.73,3.73,0,0,0-.67,3,2.11,2.11,0,0,0,2.09,1.69,6.45,6.45,0,0,0,3.12-.87l2.68-1.44-2,2.22a10.19,10.19,0,0,0-1.46,2.05,4.07,4.07,0,0,0-.55,2.28,2,2,0,0,0,1.24,1.61,4.28,4.28,0,0,0,2.38-.17,34.58,34.58,0,0,0,4.81-2.13c.79-.39,1.59-.79,2.41-1.15a6.26,6.26,0,0,1,2.57-.68,7,7,0,0,0-2.46.9c-.78.42-1.54.87-2.31,1.33a28.8,28.8,0,0,1-4.8,2.43,5,5,0,0,1-2.84.29,2.74,2.74,0,0,1-1.92-2.31,5,5,0,0,1,.61-2.84,10.93,10.93,0,0,1,1.58-2.3l.63.78a7.41,7.41,0,0,1-3.68,1.07,3.11,3.11,0,0,1-2-.72,3.49,3.49,0,0,1-1.07-1.77,4.72,4.72,0,0,1,.85-3.79,11.56,11.56,0,0,1,2.58-2.69l.43.8a4.44,4.44,0,0,1-3.74-.44,3.65,3.65,0,0,1-1.23-1.47,2.67,2.67,0,0,1-.14-1.92,6.49,6.49,0,0,1,2.14-2.89A15.41,15.41,0,0,1,503.19,238.78Z"
       style="fill:#263238"
       id="path272" />
    <path
       d="M489,248.52s8-23.67,15.75-16c2.29,2.28,9,14.38,6.58,15.77-3.11,1.8-6.84-2.73-8.74-6,0,0-1.6,8.44-7.8,9.07A6.19,6.19,0,0,1,489,248.52Z"
       style="fill:#f7a9a0"
       id="path273" />
    <path
       d="M504.05,231.93a12.72,12.72,0,0,1,2.62,2.76,28,28,0,0,1,2.08,3.22,43.6,43.6,0,0,1,3.22,7,7,7,0,0,1,.4,2,2.45,2.45,0,0,1-.19,1.14,1.71,1.71,0,0,1-.33.55,2.21,2.21,0,0,1-.49.4,3.27,3.27,0,0,1-2.21.34,6.25,6.25,0,0,1-1.93-.8,11.6,11.6,0,0,1-2.87-2.71,26.5,26.5,0,0,1-2.16-3.21l.82-.15a15.21,15.21,0,0,1-.92,2.79,13.7,13.7,0,0,1-1.41,2.54,10.27,10.27,0,0,1-2,2.1,7.63,7.63,0,0,1-2.56,1.29,8.63,8.63,0,0,0,2.36-1.53,10.12,10.12,0,0,0,1.74-2.17,13.72,13.72,0,0,0,1.21-2.5,15.08,15.08,0,0,0,.72-2.67l.18-1.12.63,1a29.09,29.09,0,0,0,2.17,3,11.37,11.37,0,0,0,2.66,2.44,3.13,3.13,0,0,0,3,.45c.77-.38.53-1.74.19-2.88a36.18,36.18,0,0,0-1.31-3.5c-.49-1.16-1-2.32-1.54-3.44A24.29,24.29,0,0,0,504.05,231.93Z"
       style="fill:#263238"
       id="path274" />
  </g>
  <g
     id="freepik--Water--inject-5">
    <path
       d="M77.09,389.81s25,45.87,83,58.23h0c.94.21,1.89.39,2.85.58,50.2,9.54,130.33-16.73,165.69-14.07a38.32,38.32,0,0,1,8.36,1.45C396,454.43,448.3,469.65,509,460.07a240.11,240.11,0,0,0,42-10.39h0c32.59-11.38,50.43-26.24,62-30.91,28.52-11.54,45.85,1.42,58.92,4h0a15.36,15.36,0,0,0,9-.5c8.4-3.42.88-22-13.16-28.38-20.56-9.38-45.08-1.57-45.26-3.94-.79-10,42.37-11.56,39.47-22.87s-31.36-15.75-60,.79c-20.08,11.59-32.56,32.33-50.79,41.79-5.56,2.89-22.1,7.62-23.15,6.83S541.12,411,544.54,407s-2.11-7.36-10-7.09-23.17,13.4-31.59,17.34-39.21-.52-37.36-6.09,30-9.41,46.05-14.94a18.21,18.21,0,0,0,4.87-2.48.85.85,0,0,0,.14-.1,1,1,0,0,1,.1-.07l.06,0h0c9.35-7.24,3.12-21.11-18.61-19.62-29.07,2-53.67,33.89-77.12,33.12-2.41-.09,22.53-11.24,21.62-19.6-.53-5-10.25-7.8-21.57-3.34s-24.25,19.26-42.67,25.57-82.64-8.93-82.64-8.93c16.85-5.53,27.64-17.88,17.9-24.18S284,387,248.47,396.77C160.17,421.12,100.34,407.41,77.09,389.81Z"
       style="fill:#fff"
       id="path275" />
    <path
       d="M671.88,422.76h0a17,17,0,0,0,7.16.06,7.94,7.94,0,0,0,3.26-1.45,5.79,5.79,0,0,0,1.8-3,13.38,13.38,0,0,0-.66-7.08,28,28,0,0,0-3.22-6.42,31.61,31.61,0,0,0-10.42-9.77,46,46,0,0,0-13.57-4.65,71.83,71.83,0,0,0-14.35-1.15c-4.8.05-9.59.53-14.38,1.05-1.2.12-2.39.26-3.61.27a5.84,5.84,0,0,1-.93-.08,1.11,1.11,0,0,1-.49-.19.58.58,0,0,1-.21-.53,3.6,3.6,0,0,1,.43-1.82,7.53,7.53,0,0,1,2.57-2.6,23.55,23.55,0,0,1,3.2-1.73,118.58,118.58,0,0,1,13.7-4.62,100.17,100.17,0,0,0,13.59-4.73,20.89,20.89,0,0,0,3.09-1.76,8,8,0,0,0,2.43-2.48,3.85,3.85,0,0,0,.26-3.28,7.94,7.94,0,0,0-1.73-3,15.59,15.59,0,0,0-5.81-4,31,31,0,0,0-6.88-1.92,53.22,53.22,0,0,0-14.32-.23,78.67,78.67,0,0,0-27.29,8.6c-8.56,4.38-16,10.54-23,17.19S569,397.15,561.47,403.18a59.58,59.58,0,0,1-12.26,7.72,119.57,119.57,0,0,1-13.74,4.57c-1.16.31-2.33.61-3.51.88a18.65,18.65,0,0,1-3.66.56l-.29,0c-.13-.07-.27,0-.43-.33a.57.57,0,0,1,.14-.56,1.74,1.74,0,0,1,.22-.19,6,6,0,0,1,.81-.51c.54-.3,1.09-.56,1.63-.82l3.29-1.51c2.18-1,4.36-2,6.44-3.18a23.78,23.78,0,0,0,3-1.92,5.2,5.2,0,0,0,2-2.62,2.28,2.28,0,0,0-.13-1.52,3.73,3.73,0,0,0-1.05-1.23,9.18,9.18,0,0,0-3.1-1.49,19.25,19.25,0,0,0-7-.6,21.75,21.75,0,0,0-6.64,2.37c-2.13,1.07-4.17,2.34-6.21,3.61-4.05,2.57-8,5.33-12.06,7.93a49.18,49.18,0,0,1-6.36,3.56,24.92,24.92,0,0,1-7.21,1.24,77.06,77.06,0,0,1-14.48-.83,66.87,66.87,0,0,1-7.12-1.41,25,25,0,0,1-6.83-2.66,5,5,0,0,1-1.43-1.33,2,2,0,0,1-.17-2.11,4.33,4.33,0,0,1,1.28-1.51,12.85,12.85,0,0,1,1.58-1,39.66,39.66,0,0,1,6.78-2.68c4.62-1.43,9.31-2.56,14-3.7s9.37-2.24,14-3.48c2.31-.62,4.62-1.28,6.9-2a20.85,20.85,0,0,0,6.39-3l0,0,.12-.09,0,0,.16-.12-.15.33h0v-.24l.46-.22h0l-.28.09a11.42,11.42,0,0,0,3-3.5,8.16,8.16,0,0,0,1-4.43c-.21-3.1-2.34-5.79-5-7.47a22.09,22.09,0,0,0-8.9-3.12,39.28,39.28,0,0,0-9.57-.14,56.28,56.28,0,0,0-18.41,5.38,151.2,151.2,0,0,0-16.87,9.48c-5.48,3.44-10.88,7-16.53,10.26s-11.57,6.15-18.06,7.36c-.81.12-1.61.3-2.44.35a20.06,20.06,0,0,1-2.46.14h-1.24a.32.32,0,0,1-.13,0,.68.68,0,0,1-.24-.08.56.56,0,0,1-.26-.48.83.83,0,0,1,.09-.29,1.7,1.7,0,0,1,.31-.33,5.31,5.31,0,0,1,.53-.38c.7-.47,1.39-.88,2.09-1.3,2.79-1.65,5.56-3.3,8.24-5.1a47.37,47.37,0,0,0,7.49-6,12.87,12.87,0,0,0,2.68-3.81,4.87,4.87,0,0,0,.38-2.17,4,4,0,0,0-.83-2,7.79,7.79,0,0,0-3.82-2.43,17.7,17.7,0,0,0-4.65-.8,28.53,28.53,0,0,0-9.42,1.37,34.6,34.6,0,0,0-8.62,4.15c-2.72,1.73-5.33,3.64-7.95,5.54a175.31,175.31,0,0,1-16.1,10.95,80.8,80.8,0,0,1-8.74,4.35l-2.29.87-1.14.43c-.39.13-.79.23-1.19.34a28.5,28.5,0,0,1-4.83.89,74,74,0,0,1-9.76.31c-3.25-.07-6.49-.29-9.72-.58-6.47-.57-12.9-1.44-19.3-2.43-12.81-2-25.53-4.54-38.17-7.46l-1.19-.27,1.16-.39a46.72,46.72,0,0,0,15.38-8.22,19.16,19.16,0,0,0,5.36-6.73,7.31,7.31,0,0,0,.51-4.14,6.43,6.43,0,0,0-2.16-3.53,8.73,8.73,0,0,0-3.71-2,12.48,12.48,0,0,0-4.27-.19,37.87,37.87,0,0,0-8.44,2.25c-5.5,2.07-10.85,4.56-16.25,6.91A244.64,244.64,0,0,1,249,396.92c-5.71,1.47-11.43,2.93-17.15,4.34l-8.65,1.83-4.33.91-2.16.45-2.18.37-8.72,1.45c-1.46.23-2.91.51-4.37.71l-4.39.53-8.78,1.07c-2.93.27-5.87.47-8.81.7l-4.41.34c-1.47.12-2.94.11-4.42.17l-8.83.28-8.85-.14c-2.95,0-5.89-.22-8.83-.41a184.44,184.44,0,0,1-34.89-5.37c-11.37-3-22.53-7.42-32.1-14.34,9.6,6.88,20.77,11.22,32.13,14.21a183.58,183.58,0,0,0,34.88,5.24c2.94.18,5.88.4,8.82.38l8.83.1,8.83-.31c1.47-.06,2.94-.07,4.41-.18l4.4-.36c2.93-.25,5.87-.45,8.8-.73l8.76-1.1,4.38-.55c1.46-.21,2.91-.49,4.36-.72l8.71-1.47,2.17-.37,2.16-.46,4.32-.91,8.64-1.83c5.71-1.42,11.42-2.89,17.12-4.36a244.56,244.56,0,0,0,33.1-12.2c5.4-2.35,10.74-4.85,16.27-6.94a38.91,38.91,0,0,1,8.59-2.3,13.12,13.12,0,0,1,4.5.2,9.32,9.32,0,0,1,4,2.15,8.3,8.3,0,0,1,1.5,1.73,6.6,6.6,0,0,1,.86,2.15,7.78,7.78,0,0,1-.54,4.5,19.71,19.71,0,0,1-5.53,7A47.43,47.43,0,0,1,296,401l0-.66c12.61,2.9,25.33,5.4,38.12,7.4,6.4,1,12.81,1.84,19.26,2.4,3.22.28,6.44.5,9.67.57a73.93,73.93,0,0,0,9.65-.32,28.74,28.74,0,0,0,4.71-.87c.38-.11.76-.21,1.14-.34l1.13-.42,2.25-.86a79.11,79.11,0,0,0,8.64-4.32,173.88,173.88,0,0,0,16-10.91c2.61-1.91,5.23-3.83,8-5.59a35.93,35.93,0,0,1,8.82-4.26,29.36,29.36,0,0,1,9.72-1.41,18.16,18.16,0,0,1,4.89.83,8.69,8.69,0,0,1,4.24,2.73,4.78,4.78,0,0,1,1,2.44,5.63,5.63,0,0,1-.43,2.58,13.8,13.8,0,0,1-2.86,4.1,48.19,48.19,0,0,1-7.63,6.14c-2.7,1.82-5.5,3.48-8.28,5.14-.69.41-1.39.83-2,1.26l-.45.33-.11.11s.05-.1,0-.16a.42.42,0,0,0-.17-.35c-.1-.05-.11,0-.1-.05h1.21a19,19,0,0,0,2.38-.14c.79,0,1.58-.22,2.36-.34,6.31-1.18,12.17-4.1,17.76-7.27s11-6.81,16.47-10.26a147.28,147.28,0,0,1,17-9.55,71.35,71.35,0,0,1,9.12-3.53,49.62,49.62,0,0,1,9.6-1.91,39.77,39.77,0,0,1,9.81.16,23,23,0,0,1,9.28,3.28,13.1,13.1,0,0,1,3.63,3.45,9.35,9.35,0,0,1,1.73,4.73,9,9,0,0,1-1.08,4.93,12.1,12.1,0,0,1-3.28,3.79l-.28.1h0l.46-.46h0v.23l-.15.11L517,394l-.05,0-.16.11,0,0a21.65,21.65,0,0,1-6.65,3.09c-2.3.74-4.62,1.4-6.95,2-4.66,1.24-9.35,2.34-14,3.46s-9.36,2.26-13.93,3.67a39.35,39.35,0,0,0-6.63,2.6,5.84,5.84,0,0,0-2.5,2.14c-.52.86.36,1.78,1.3,2.39a24.06,24.06,0,0,0,6.57,2.55,67.26,67.26,0,0,0,7,1.41,76.36,76.36,0,0,0,14.32.84,24.12,24.12,0,0,0,7-1.18,49,49,0,0,0,6.23-3.48c4-2.58,8-5.34,12.07-7.92,2-1.27,4.11-2.55,6.28-3.64a22.27,22.27,0,0,1,6.89-2.43,20,20,0,0,1,7.3.62,10,10,0,0,1,3.35,1.64,4.46,4.46,0,0,1,1.26,1.49,3.09,3.09,0,0,1,.17,2,5.88,5.88,0,0,1-2.28,3,23.35,23.35,0,0,1-3.08,2c-2.12,1.18-4.31,2.2-6.5,3.2l-3.28,1.5c-.54.26-1.08.52-1.59.8a4.91,4.91,0,0,0-.72.44l-.12.11s0,0,0-.16,0-.09-.06-.1l.16,0a18.78,18.78,0,0,0,3.46-.54c1.17-.26,2.33-.56,3.49-.87a117.29,117.29,0,0,0,13.65-4.52,59,59,0,0,0,12.12-7.61c7.52-6,14.06-13.08,21.06-19.7s14.49-12.86,23.12-17.26a79.31,79.31,0,0,1,27.5-8.62,53.46,53.46,0,0,1,14.46.25,31.53,31.53,0,0,1,7,2,19.46,19.46,0,0,1,3.22,1.71,12.7,12.7,0,0,1,2.78,2.39,8.4,8.4,0,0,1,1.82,3.21,4.31,4.31,0,0,1-.31,3.67,8.31,8.31,0,0,1-2.57,2.64,21.27,21.27,0,0,1-3.18,1.8,100.72,100.72,0,0,1-13.67,4.7A117.75,117.75,0,0,0,628.62,384a22.66,22.66,0,0,0-3.15,1.69,7.36,7.36,0,0,0-2.47,2.46,3.29,3.29,0,0,0-.39,1.65c0,.18,0,.21.08.27a.81.81,0,0,0,.34.13,4.15,4.15,0,0,0,.87.07c1.19,0,2.39-.13,3.58-.24,4.78-.51,9.59-1,14.41-1a71.59,71.59,0,0,1,14.39,1.2,46.23,46.23,0,0,1,13.61,4.72,31.7,31.7,0,0,1,10.43,9.85,28.22,28.22,0,0,1,3.21,6.46,13.47,13.47,0,0,1,.63,7.11,5.79,5.79,0,0,1-1.83,3.06,8,8,0,0,1-3.28,1.45,17,17,0,0,1-7.16-.09h0Z"
       style="fill:#dbdbdb"
       id="path276" />
    <path
       d="M662.15,410.41a70,70,0,0,0-15.09-7.53,53.38,53.38,0,0,0-16.44-3.35,37.65,37.65,0,0,0-16.35,2.93A79.5,79.5,0,0,0,599.82,411c-4.57,3.28-8.9,6.89-13.22,10.52s-8.65,7.27-13.18,10.68a131.58,131.58,0,0,1-14.17,9.32,100.41,100.41,0,0,1-15.49,6.86A106.55,106.55,0,0,0,559,441.1a133.47,133.47,0,0,0,14-9.5c4.43-3.49,8.75-7.1,13-10.76s8.63-7.31,13.22-10.64a81.06,81.06,0,0,1,14.69-8.58,37.52,37.52,0,0,1,16.74-2.86,54.1,54.1,0,0,1,16.57,3.66,69.68,69.68,0,0,1,7.71,3.53A59.25,59.25,0,0,1,662.15,410.41Z"
       style="fill:#dbdbdb"
       id="path277" />
    <path
       d="M351.29,437.06c-12.53-5.06-25.19-9.95-38.38-12.83a105.46,105.46,0,0,0-20-2.6,83.22,83.22,0,0,0-20,2.24c-6.59,1.4-13.1,3.21-19.56,5.19s-12.87,4.09-19.31,6.16-12.86,4.18-19.36,6.06-13.09,3.56-19.84,4.13c6.73-.73,13.25-2.64,19.7-4.6s12.85-4.16,19.26-6.32,12.82-4.3,19.29-6.3,13-3.86,19.61-5.3a83.8,83.8,0,0,1,20.22-2.16,100.46,100.46,0,0,1,20.14,2.75,169.91,169.91,0,0,1,19.43,5.89c3.18,1.17,6.32,2.43,9.44,3.73S348.16,435.79,351.29,437.06Z"
       style="fill:#dbdbdb"
       id="path278" />
    <path
       d="M417.38,450.73a312.13,312.13,0,0,1-38.15-9,315.72,315.72,0,0,1-36.8-13.57c-6-2.68-11.74-5.79-17.84-8a79.86,79.86,0,0,0-18.91-4.52,75.92,75.92,0,0,0-19.46.35,82.84,82.84,0,0,0-9.57,2,84.83,84.83,0,0,0-9.26,3.15,76,76,0,0,1,57.51-1.8c3.13,1,6.07,2.5,9.08,3.81s5.88,2.82,8.86,4.13A332.43,332.43,0,0,0,379.46,441c6.22,2,12.5,3.73,18.82,5.36S411,449.52,417.38,450.73Z"
       style="fill:#dbdbdb"
       id="path279" />
    <path
       d="M654.46,371.78a12,12,0,0,1-2.56.79c-.87.18-1.75.36-2.62.52-1.76.31-3.5.64-5.24,1a65.82,65.82,0,0,0-10.17,2.95,49.11,49.11,0,0,0-9.36,4.84l-2.13,1.57c-.73.51-1.34,1.16-2,1.73A46.12,46.12,0,0,0,616.6,389a35.28,35.28,0,0,1,7.46-7.68,41.07,41.07,0,0,1,9.45-5.15,53,53,0,0,1,10.39-2.77c1.76-.29,3.53-.53,5.3-.74A29.87,29.87,0,0,0,654.46,371.78Z"
       style="fill:#dbdbdb"
       id="path280" />
    <path
       d="M208,410.73a171,171,0,0,1-28.44,4.88,201.89,201.89,0,0,1-28.89.57c-4.82-.16-9.61-.79-14.4-1.26l-7.15-1.11c-1.19-.2-2.38-.35-3.56-.58l-3.53-.79A163.81,163.81,0,0,1,94.41,404l6.85,2.27,3.42,1.15c1.14.36,2.32.62,3.48.94l7,1.86c2.34.55,4.7,1,7,1.47l3.53.71c1.18.22,2.37.37,3.55.56l7.12,1.06c4.78.44,9.54,1,14.34,1.16a212.5,212.5,0,0,0,28.77-.33c2.4-.18,4.78-.44,7.18-.65s4.76-.58,7.14-.91C198.55,412.63,203.29,411.8,208,410.73Z"
       style="fill:#dbdbdb"
       id="path281" />
    <path
       d="M513.57,379.82a43.5,43.5,0,0,0-10.83-1.25A46.66,46.66,0,0,0,492,379.83a47.35,47.35,0,0,0-10.17,3.73c-3.25,1.6-6.35,3.52-9.45,5.44-6.2,3.83-12.28,7.93-18.7,11.47a86.66,86.66,0,0,1-9.95,4.67A41.8,41.8,0,0,1,433,407.67c7.28-1,13.93-4.29,20.24-7.87s12.37-7.73,18.55-11.64c3.13-1.91,6.26-3.82,9.58-5.42a44.57,44.57,0,0,1,10.41-3.66A44,44,0,0,1,513.57,379.82Z"
       style="fill:#dbdbdb"
       id="path282" />
    <path
       d="M576,394.44a53.52,53.52,0,0,1-9.39,10.16,63.54,63.54,0,0,1-11.5,7.79,60.82,60.82,0,0,1-12.92,5.09l-1.68.45-.84.22-.85.16-3.42.62a32.89,32.89,0,0,1-3.44.38q-1.73.15-3.45.27A81.64,81.64,0,0,0,542,416.74l1.64-.51.82-.24.8-.3,3.21-1.22c1.08-.41,2.09-1,3.13-1.41l1.56-.73c.51-.26,1-.55,1.5-.82,1-.55,2-1,3-1.65l2.92-1.8,2.81-2c.93-.67,1.82-1.4,2.74-2.08s1.76-1.47,2.64-2.2,1.7-1.55,2.54-2.33A57.44,57.44,0,0,0,576,394.44Z"
       style="fill:#dbdbdb"
       id="path283" />
    <path
       d="M412.05,393a86.26,86.26,0,0,1-16.88,14.3,65.11,65.11,0,0,1-9.85,5.18,46.09,46.09,0,0,1-10.78,2.91,96,96,0,0,1-11.11.49c-3.7-.1-7.4-.3-11.08-.72a154.21,154.21,0,0,1-21.78-4c3.61.73,7.24,1.38,10.89,1.9s7.3,1,11,1.31,7.34.51,11,.57a93.59,93.59,0,0,0,11-.58A44.67,44.67,0,0,0,385,411.62a72.45,72.45,0,0,0,9.78-5,92.49,92.49,0,0,0,9-6.35A95.72,95.72,0,0,0,412.05,393Z"
       style="fill:#dbdbdb"
       id="path284" />
    <path
       d="M371.64,432c.68-2,15.22-3.93,17.81.58s-4.77,7.27-8.91,6.43S370.55,435.17,371.64,432Z"
       style="fill:#217821"
       id="path285" />
    <path
       d="M369.64,423.59c2.9.3,2.76,5.59-2.5,5.1S365,423.1,369.64,423.59Z"
       style="fill:#217821"
       id="path286" />
    <path
       d="M232,413.24c1.52.89.14,3.77-2.64,2.2S229.52,411.83,232,413.24Z"
       style="fill:#217821"
       id="path287" />
    <path
       d="M429.86,385.93c1.52.88.14,3.76-2.64,2.19S427.42,384.51,429.86,385.93Z"
       style="fill:#FFC727"
       id="path288" />
    <path
       d="M218.93,409.27c2.22-1,4.47-.63,4.83.78s-.78,3.16-3.45,4.67-6.75,1.69-7.41.89S216.79,410.19,218.93,409.27Z"
       style="fill:#217821"
       id="path289" />
  </g>
</svg>
`,v2=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 750 500"
   version="1.1"
   id="svg289"
   sodipodi:docname="Dragon Boat Festival-cuate.svg"
   inkscape:version="1.4.4 (dcaf3e7, 2026-05-05)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs289" />
  <sodipodi:namedview
     id="namedview289"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="2.434"
     inkscape:cx="375.10271"
     inkscape:cy="250"
     inkscape:window-width="2560"
     inkscape:window-height="1494"
     inkscape:window-x="-11"
     inkscape:window-y="-11"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg289" />
  <g
     id="freepik--background-complete--inject-5">
    <path
       d="M489.65,107.62H361.78S374.46,73,394,73s25.63,23.9,25.63,23.9,13.16-13,24-13,20.21,17.17,20.21,17.17S479.07,91.84,489.65,107.62Z"
       style="fill:#ebebeb"
       id="path1" />
    <path
       d="M679.29,77.43H619.53s13.36-19.34,23.88-19.34S657,71,657,71s7.42-6,14.3-4.95S679.29,77.43,679.29,77.43Z"
       style="fill:#ebebeb"
       id="path2" />
    <path
       d="M187.1,153.83H70.71s15.94-35.59,33-37.81,25.21,26.44,25.21,26.44,11-10.13,19.64-10.13,15.32,13.34,15.32,13.34S181.17,136.53,187.1,153.83Z"
       style="fill:#ebebeb"
       id="path3" />
    <path
       d="M271.86,80.84H193.23s13.51-25.78,28.16-26.16S243.74,74.2,243.74,74.2,266.53,55.91,271.86,80.84Z"
       style="fill:#ebebeb"
       id="path4" />
    <path
       d="M358.09,133.47H305s9.12-17.41,19-17.66S339.11,129,339.11,129,354.49,116.64,358.09,133.47Z"
       style="fill:#ebebeb"
       id="path5" />
    <path
       d="M281,228.53c42.64,0,49.29-115.68,94.14-115.68s47.45,96.06,78,96.06,36.29-49,64.81-49,27.44,54.7,54.85,54.7,25.22-26.38,43.76-26.38c24.42,0,27.45,40.28,79.27,40.28Z"
       style="fill:#dbdbdb"
       id="path6" />
    <path
       d="M54.2,228.71c58.84,0,72.07-87.93,107.87-87.93s47,73.85,74.12,73.85,30.3-46.54,56.5-46.54,21.57,60.75,65.84,60.75Z"
       style="fill:#ebebeb"
       id="path7" />
  </g>
  <g
     id="freepik--Floor--inject-5">
    <polygon
       points="49.53 228.47 130.9 228.23 212.27 228.14 375 227.97 537.73 228.14 619.1 228.22 700.47 228.47 619.1 228.72 537.73 228.8 375 228.97 212.27 228.8 130.9 228.71 49.53 228.47"
       style="fill:#263238"
       id="polygon7" />
  </g>
  <g
     id="freepik--dragon-boat--inject-5">
    <path
       d="M98.34,268.57s14.13-21.5,13.81-33.3-7.44-19.42-8.52-28.26.61-17-.76-17.27c-3.07-.6-11.25,11.79-11.57,20.78a55.5,55.5,0,0,1-5.64-18.19c-1.91-14.06,2.71-26.09-.53-29.06-2.66-2.44-22.61,21.92-22.32,46.55,0,0-1.84-13.62-4.6-14.45s-8.45,31.94,4.48,55.27C70.28,264.33,98.34,268.57,98.34,268.57Z"
       style="fill:#37474f"
       id="path8" />
    <path
       d="M94.8,266.37s9.77-14.87,9.54-23-5.14-13.42-5.89-19.53.43-11.76-.52-11.94c-2.12-.42-5.93,8-6.15,14.18a42.44,42.44,0,0,1-8.43-12.6c-3.69-9.27-3.68-20.48-5.92-22.54-1.84-1.68-7.4,17.81-7.2,34.84,0,0-1.27-9.42-3.18-10s-5.84,22.08,3.1,38.21C75.39,263.43,94.8,266.37,94.8,266.37Z"
       style="fill:#455a64"
       id="path9" />
    <path
       d="M526.71,195.44s-1.22,13.25-3.92,19.68-7.45,12.24-4.2,12.82,8.12-4.52,8.12-4.52a114.12,114.12,0,0,1-3.25,16.82c-2.78,10.17-7.35,16.24-4.05,16.82s10.42-5.95,12.05-9.89a144.26,144.26,0,0,1-.88,20.41c-1.39,10.68-6.42,21.39-3.06,21.85s9.4-8.58,11.72-15.2c0,0,.84,14.32-1.7,23.21-3.09,10.83-9.44,17.05-8.86,19.61s8.4,0,14.62-6.31c0,0-1.43,13.62-19.6,17.1-12.44,2.38-21.24,1.51-22.86,3s34,14.62,48.15-2.55S526.71,195.44,526.71,195.44Z"
       style="fill:#455a64"
       id="path10" />
    <path
       d="M105.12,336.12c16.1,47.64,52,81.68,73,81.68H472.72c44,0,96.72,1.41,127.19,1.37,14.56,0,24-.37,25-1.37,42.7-42.7,5.81-111.77-9.38-136.14-19.67-31.56-22.16-86.22-22.16-86.22H526.71a540.69,540.69,0,0,0,19,90.4c8.59,27.84,3.71,45-20,45H205.06c-24.13,0-42.69,0-63.58-13S88.58,238,85.33,240.73,89,288.46,105.12,336.12Z"
       style="fill:#FFC727"
       id="path11" />
    <path
       d="M105.12,336.12c16.1,47.64,52,81.68,73,81.68H472.72c44,0,96.72,1.41,127.19,1.37,14.56,0,24-.37,25-1.37,42.7-42.7,5.81-111.77-9.38-136.14-19.67-31.56-22.16-86.22-22.16-86.22H526.71a540.69,540.69,0,0,0,19,90.4c8.59,27.84,3.71,45-20,45H205.06c-24.13,0-42.69,0-63.58-13S88.58,238,85.33,240.73,89,288.46,105.12,336.12Z"
       style="fill:#FFC727"
       id="path12" />
    <path
       d="M635.76,403.74c-.57,1-1.19,2-1.84,3a67.66,67.66,0,0,1-9,11.05c-1,1-10.47,1.35-25,1.37-9.74,0-21.76-.12-35-.32l-4-.05c-17.5-.26-36.94-.6-56.13-.81l-3.55,0c-9.69-.1-19.27-.16-28.47-.16H178.14c-6.18,0-13.64-2.94-21.5-8.3l-1.31-.9-1.34-1a105.24,105.24,0,0,1-12.49-11,155.79,155.79,0,0,1-26.73-37.68c-.49-.95-1-1.91-1.45-2.88a167.83,167.83,0,0,1-8.2-19.92c-.46-1.35-.91-2.71-1.35-4.05q-.78-2.42-1.55-4.8c-2.48-7.84-4.7-15.53-6.67-22.9-.27-1-.52-2-.78-2.94-1.63-6.27-3.08-12.28-4.33-17.92l-.73-3.35c-4.53-21.25-6.12-36.56-4.59-39.16h0a.71.71,0,0,1,.21-.26c.19-.15.47-.08.84.2,1.82,1.38,5.75,7.75,10.89,16.33.49.8,1,1.63,1.48,2.47,2.3,3.83,4.8,8,7.43,12.34l1.53,2.49h0c2.59,4.2,5.29,8.5,8,12.68l1.39,2.12c6.18,9.26,12.55,17.82,18.43,23.53,1,1,2,1.91,3,2.72.21.17.41.34.61.48a25.42,25.42,0,0,0,2.48,1.76l.18.11a79.33,79.33,0,0,0,18.68,8.57c1,.32,2.06.61,3.09.88,10.08,2.67,20.28,3.26,31.6,3.39,1.16,0,2.33,0,3.51,0H525.78c16.15,0,23.55-8,23.89-21.89h0a44.73,44.73,0,0,0-.13-4.86c-.12-1.42-.29-2.9-.52-4.42-.16-1-.34-2.1-.56-3.18h0a101.72,101.72,0,0,0-2.72-10.64c-1.46-4.74-2.92-9.82-4.35-15.15-.22-.81-.44-1.62-.65-2.43-2.3-8.69-4.51-18-6.51-27.5-.47-2.25-.94-4.5-1.39-6.77h0q-.6-3-1.18-6.11c-.14-.79-.29-1.58-.43-2.36-1.52-8.36-2.85-16.71-3.88-24.82h0c-.17-1.27-.32-2.53-.47-3.78h0c-.06-.49-.11-1-.17-1.45H593.4s.32,7.16,1.67,17.8c.12.91.24,1.84.37,2.8,1,7.54,2.55,16.51,4.77,25.78l.6,2.45a171.82,171.82,0,0,0,6.52,20.66c.67,1.73,1.39,3.44,2.13,5.11a94.45,94.45,0,0,0,6.1,11.62c1.46,2.34,3.12,5.1,4.9,8.21.6,1.06,1.22,2.17,1.85,3.32a206.68,206.68,0,0,1,17.26,40.49c.3,1,.59,2.06.87,3.1,0,.12.07.25.1.38v.08c.79,2.9,1.49,5.78,2.09,8.75h0C646.52,365.41,646,385.92,635.76,403.74Z"
       style="fill:#FFC727"
       id="path13" />
    <g
       style="opacity:0.1"
       id="g41">
      <path
         d="M550.9,195.44h2.6c-1.57,4.38-4.35,8.51-9.24,10a12.3,12.3,0,0,1-2.19.45l-.4,0c-5.78.54-10.64-2-14.32-5.19h0c-.17-1.27-.32-2.53-.47-3.78,3.56,3.68,8.73,7.29,14.92,6.57C546.52,202.92,549.28,199.42,550.9,195.44Z"
         style="fill:#fff"
         id="path14" />
      <path
         d="M585.6,195.44a13.87,13.87,0,0,1-5.23,3.29,14.7,14.7,0,0,1-1.55.46c-.47.11-.94.2-1.4.26-4.95.69-9.46-1.25-13.21-4h4.56a13.63,13.63,0,0,0,9.42,1.44l.17,0a11.21,11.21,0,0,0,3.33-1.4Z"
         style="fill:#fff"
         id="path15" />
      <path
         d="M595.07,213.24c.12.91.24,1.84.37,2.8-7.17-2.92-12.68-9.54-15.6-13.74-.14,4.57-1.1,11.71-5.26,16.56a14.08,14.08,0,0,1-7,4.48,16.39,16.39,0,0,1-2.6.52c-.39,0-.78.08-1.18.1-11.13.57-17.19-7.71-20-13.48-.75,6-3.36,15-12.11,17.39-.14-.79-.29-1.58-.43-2.36,9.8-3,10.46-16,10.44-19.63,0-.6,0-.94,0-1a1.2,1.2,0,0,1,2.35-.38s.09.33.26.87a31.9,31.9,0,0,0,4,8.09c4,5.7,9.18,8.42,15.4,8.08a12.39,12.39,0,0,0,9.1-4.26c4.64-5.41,4.79-14.5,4.66-17.86,0-.81-.07-1.28-.07-1.31a1.21,1.21,0,0,1,.84-1.26l.17,0a1.2,1.2,0,0,1,1.23.61s.28.5.78,1.28C582.3,201.8,587.74,209.62,595.07,213.24Z"
         style="fill:#fff"
         id="path16" />
      <path
         d="M600.21,241.82l.6,2.45a18.41,18.41,0,0,1-3.76,1.72c-.62.21-1.25.39-1.91.55l-.46.11c-9.28,2.08-17.36-1.32-23.36-9.87a42.91,42.91,0,0,1-4.44-8.21c-1,6.74-4.27,17.29-14.21,19.62a17.24,17.24,0,0,1-2.37.39h-.14c-7.26.63-12.42-3.24-15.93-7.83-.47-2.25-.94-4.5-1.39-6.77,2.89,5.84,8.3,13,17.24,12.21,13.09-1.24,14.69-18,14.89-22.34,0-.63,0-1,0-1a1.2,1.2,0,0,1,2.36-.3l.22.81a43.49,43.49,0,0,0,5.75,12.11c5.56,7.89,12.71,10.84,21.26,8.77A17.58,17.58,0,0,0,600.21,241.82Z"
         style="fill:#fff"
         id="path17" />
      <path
         d="M609.46,270a35,35,0,0,1-8.8-9.93,55.09,55.09,0,0,1-4.4-9,54.45,54.45,0,0,1-3.23,9.91c-3.75,8.4-9.15,13.18-15.72,14a16.73,16.73,0,0,1-2,.12c-.32,0-.63,0-.95,0h-.12c-7.88-.47-14.53-5.32-19.25-14a48.36,48.36,0,0,1-3.24-7.48c-1.21,5.37-4,13.23-10.34,17-.22-.81-.44-1.62-.65-2.43,7.48-5,9.12-16.81,9.42-19.67,0-.39.05-.61.05-.63a1.2,1.2,0,0,1,1.12-1.12,1.21,1.21,0,0,1,1.26,1s0,.15.08.38c.67,3.06,5.84,23.61,21.69,24.57s19.81-22.69,20.32-26.11c0-.25.06-.39.06-.41a1.19,1.19,0,0,1,1.1-1.05,1.16,1.16,0,0,1,1.21.8l0,.09c0,.17,3,11.16,10.25,18.85C608,266.66,608.72,268.37,609.46,270Z"
         style="fill:#fff"
         id="path18" />
      <path
         d="M139.6,320.26a1.17,1.17,0,0,1-.42.73.86.86,0,0,1-.2.13,1.2,1.2,0,0,1-1.19,0s-.74-.45-1.93-1c-5-2.5-18.73-7.95-27.65,1.43a17.05,17.05,0,0,0-4.44,10.59q-.78-2.42-1.55-4.8a18.18,18.18,0,0,1,4.26-7.43,19.6,19.6,0,0,1,3.87-3.16,18,18,0,0,1,2.2-1.17c8.88-3.94,19.13-.11,23.86,2.15a46.72,46.72,0,0,1-1-4.76c1,1,2,1.91,3,2.72.07.31.14.61.22.89.48,1.91.91,3.09.93,3.14A1.16,1.16,0,0,1,139.6,320.26Z"
         style="fill:#fff"
         id="path19" />
      <path
         d="M142.29,357.79a1.59,1.59,0,0,1-2.12,2.29c-.09-.06-.45-.27-1-.56-3.54-1.85-15.32-7.11-24.38-.6-.49-.95-1-1.91-1.45-2.88,8.1-5.49,17.9-3.17,23.65-1-3.45-6.55-8.32-19.16-3.11-31.23a26.58,26.58,0,0,1,2-3.8,21.75,21.75,0,0,1,2.75-3.54c.12-.14.26-.28.39-.41a25.42,25.42,0,0,0,2.48,1.76l.18.11a19.11,19.11,0,0,0-2.06,2.29c-.21.27-.42.56-.62.86a23.23,23.23,0,0,0-2.19,4c-5.51,12.75,1.86,26.76,4.57,31.22C141.91,357.25,142.27,357.76,142.29,357.79Z"
         style="fill:#fff"
         id="path20" />
      <path
         d="M622.31,293.19a24.12,24.12,0,0,1-4.83,7.63,18.71,18.71,0,0,1-10.5,5.53,22.62,22.62,0,0,1-3.35.34c-.3,0-.6,0-.9,0h-.62C586,306.34,578.84,291,576,281.81c-1.19,4.37-3.51,9.92-8,13.82a19.4,19.4,0,0,1-11.88,4.7,25.85,25.85,0,0,1-3.72-.06l-.24,0a17.88,17.88,0,0,1-3.15-.57c-.16-1-.34-2.1-.56-3.18a16,16,0,0,0,4.2.92c5.39.44,9.92-.87,13.46-3.93,6.65-5.77,8-16.08,8.22-18.33,0-.27,0-.43,0-.44a1.43,1.43,0,0,1,2.85-.12s0,.18.08.47a53.79,53.79,0,0,0,4.7,14.2c4.82,9.48,11.6,14.38,20.16,14.57,5.56.1,9.93-1.56,13.24-5a23,23,0,0,0,5.05-9C621.06,290.93,621.68,292,622.31,293.19Z"
         style="fill:#fff"
         id="path21" />
      <path
         d="M639.57,333.68c.3,1,.59,2.06.87,3.1-.49.08-1,.14-1.49.18-.84.07-1.67.1-2.5.1-9.87,0-18.52-5-25.14-14.47a56,56,0,0,1-5.82-10.87c-2.85,8.47-10.5,24.74-27.21,24.74h-.58c-.83,0-1.65-.07-2.44-.15a26.91,26.91,0,0,1-3.21-.49,21.53,21.53,0,0,1-12.14-7.11c-6-7-7.15-17.14-7.18-23.59-.86,1.19-1.88,2.5-3.06,3.83a44.73,44.73,0,0,0-.13-4.86c1.12-1.5,2-2.84,2.63-3.85s1-1.8,1.06-1.84a1.58,1.58,0,0,1,1.89-.8,1.6,1.6,0,0,1,1.11,1.73s-.05.38-.1,1c-.33,3.85-1,17.9,6.21,26.31,3.64,4.25,8.83,6.48,15.43,6.63h.49c18.23,0,24.44-22.63,25.37-26.58.09-.36.14-.56.14-.58a1.6,1.6,0,0,1,3.11-.1s0,.13.1.34c1,3.29,9.46,29.28,31.71,27.43C639,333.76,639.28,333.72,639.57,333.68Z"
         style="fill:#fff"
         id="path22" />
      <path
         d="M172.43,349.1a1.59,1.59,0,0,1,.06,1.75,1.61,1.61,0,0,1-1.36.76,1.53,1.53,0,0,1-.47-.07c-.11,0-11.31-3.36-20.62,1.65-5.26,2.83-9,7.8-11.06,14.79-6.08,20.47,13.23,36.38,15.69,38.31l.25.19a1.59,1.59,0,0,1,.44,2.08l0,0-1.34-1a105.24,105.24,0,0,1-12.49-11c-5-7.46-9.07-17.77-5.58-29.53a33.41,33.41,0,0,1,3.23-7.55,25.27,25.27,0,0,1,2.21-3.18,23.09,23.09,0,0,1,7.19-6c6.7-3.6,14-3.43,18.6-2.8-3.08-4.34-7.48-12.21-6.81-21,1,.32,2.06.61,3.09.88-.6,11.45,8.35,21,8.85,21.49A.9.9,0,0,1,172.43,349.1Z"
         style="fill:#fff"
         id="path23" />
      <path
         d="M202.74,338a1.59,1.59,0,0,1-1.46,2.58l-.78-.09c-4.09-.39-22.33-1.19-27.37,14.89C166.8,375.56,185,389.2,187.8,391.18a3.52,3.52,0,0,0,.37.26,1.6,1.6,0,0,1-1,2.93s-.45,0-1.21-.06a43.16,43.16,0,0,0-13.28,1.76c-7.79,2.39-13.17,6.9-16,13.43l-1.31-.9-1.34-1c.21-.45.44-.9.68-1.34,3.44-6.36,9.26-10.9,17.16-13.3a45,45,0,0,1,10.8-1.83c-6.42-5.6-18.18-18.79-12.55-36.76a25.3,25.3,0,0,1,1-2.79,25.65,25.65,0,0,1,1.3-2.51c6.52-10.85,19.66-12,25.88-11.92a41.1,41.1,0,0,1-3.28-6.37c1.16,0,2.33,0,3.51,0a38.29,38.29,0,0,0,3.33,5.93C202.38,337.52,202.72,337.94,202.74,338Z"
         style="fill:#fff"
         id="path24" />
      <path
         d="M640.54,337.24c.79,2.9,1.49,5.78,2.09,8.75h0c-1.33,6.3-4.21,14.45-10.45,20.58-5.84,5.74-13.55,8.65-22.95,8.65h-1c-1.35,0-2.64-.12-3.89-.26a36.59,36.59,0,0,1-4.42-.78c-20-4.78-25.75-24.78-27.31-33.61-5.34,7.14-19.12,22.32-36.93,17.45-.65-.17-1.3-.38-2-.61s-1.49-.56-2.19-.89c-11.38-5.1-14.79-16.28-15.48-25.67h3.13c0,.63.1,1.26.18,1.9,1.34,11.24,6.53,18.53,15.42,21.65,20.08,7.07,35.22-15.37,37.26-18.58l.24-.38a1.59,1.59,0,0,1,3,.72,1,1,0,0,0,0,.15c.19,2.83,3.07,35.08,33,35.72,9,.19,16.23-2.4,21.63-7.71C639.06,355.36,640.36,341.08,640.54,337.24Z"
         style="fill:#fff"
         id="path25" />
      <path
         d="M635.76,403.74c-.57,1-1.19,2-1.84,3-18.87-2.28-28.82-21.71-32.09-29.53a59.68,59.68,0,0,1-10.1,12.35c-10,9.19-21.4,12.3-33.13,9l-1-.29a40.23,40.23,0,0,1-4-1.47c-9.87-4.27-16.58-12.27-19.53-23.34a50.83,50.83,0,0,1-1.65-13.4,39.05,39.05,0,0,1-22.87,9.35,33.46,33.46,0,0,1-16.05-2.77,30.12,30.12,0,0,1-8.17-5.38c-6.42-5.92-9.16-15-7.91-26.18.17-1.49.4-2.92.65-4.27h3.28c-1.69,8.4-2.15,20.45,6.14,28.1a27.81,27.81,0,0,0,5,3.69c.42.24.85.47,1.27.68h0a30.05,30.05,0,0,0,15.54,2.93c8.51-.57,16.82-4.24,22.21-9.74.53-.53,1-1.07,1.49-1.63a1.6,1.6,0,0,1,2.81,1.23s-.09.72-.15,1.9a48.38,48.38,0,0,0,1.49,14.76c2.91,10.84,9.47,18.18,19.5,21.85.43.16.88.32,1.33.46l.53.17c23.23,7.18,38-15.18,41.39-21.08.48-.85.74-1.35.76-1.39a1.6,1.6,0,0,1,2.95.23s.24.74.71,1.94a63.13,63.13,0,0,0,8.58,15.3C619.49,398.67,627.14,403.19,635.76,403.74Z"
         style="fill:#fff"
         id="path26" />
      <path
         d="M564.87,418.85l-4-.05a46.76,46.76,0,0,1-5.65-18.74,68,68,0,0,1-14.41,8.8c-12.7,5.65-24.85,5.62-35.33-.05-.74-.4-1.48-.83-2.21-1.29s-1.56-1-2.28-1.57c-15.54-11.6-13.21-30.39-11.33-38.39-7.75,3.21-26.54,9-40.38-2.57-.7-.59-1.39-1.23-2.07-1.91a27.24,27.24,0,0,1-1.86-2.06c-8-9.64-7.55-21.52-5.61-30.17h3.54c-.32,1.31-.6,2.72-.82,4.18-1.57,10.54.86,19.15,7.24,25.58,12.88,13,32.14,6.52,39.16,3.49,1.66-.71,2.63-1.23,2.68-1.26a1.76,1.76,0,0,1,1-.2,1.7,1.7,0,0,1,1,.41,1.6,1.6,0,0,1,.25.27h0A1.76,1.76,0,0,1,494,365s-.23.63-.53,1.69A46.45,46.45,0,0,0,491.76,380c.27,10.83,4.78,19.08,13.39,24.52l.06,0c20.22,12.71,41.82-2.43,48.39-7.76,1.26-1,2-1.69,2-1.73a1.7,1.7,0,0,1,1.07-.48,1.89,1.89,0,0,1,.87.15,1.62,1.62,0,0,1,.46.31,1.74,1.74,0,0,1,.57,1.36c0,.18,0,.95,0,2.15A41.17,41.17,0,0,0,564.87,418.85Z"
         style="fill:#fff"
         id="path27" />
      <path
         d="M505.92,406.45c0,.05-.21.91-.44,2.36a61.12,61.12,0,0,0-.74,9.18l-3.55,0a63.12,63.12,0,0,1,.62-8.49,53.76,53.76,0,0,1-21.24,5.27c-8.15.33-19.69-1.18-28.32-10.08-12.57-13-8.75-32.34-6.53-40.09a38.29,38.29,0,0,1-26.5-1.89A29.87,29.87,0,0,1,408.33,354a29,29,0,0,1-2.88-4.48,31.52,31.52,0,0,1-1.84-4.28,31.9,31.9,0,0,1-1.48-14.41h3.58a28.54,28.54,0,0,0,1.22,13.26,26.16,26.16,0,0,0,13.8,15.4A34.85,34.85,0,0,0,445.35,361c.84-.24,1.67-.52,2.5-.82a1.76,1.76,0,0,1,2.24,2.28s-.36,1-.81,2.51c-2,6.73-6,25.41,5.49,37.23C467.55,415.4,489.91,412,501,406c.81-.44,1.56-.9,2.24-1.36a1.74,1.74,0,0,1,1.92,0l.06,0A1.75,1.75,0,0,1,505.92,406.45Z"
         style="fill:#fff"
         id="path28" />
      <path
         d="M453.78,408.38a53.86,53.86,0,0,0-2.18,9.42h-3.55a62.36,62.36,0,0,1,1.37-7.07,43.21,43.21,0,0,1-29.6-1.74,33,33,0,0,1-16.14-15,35.46,35.46,0,0,1-2.31-5.54c-.13-.37-.24-.74-.35-1.12-5-17.29.72-29.47,3.8-34.36-6.06-1.39-20.1-6.16-24.89-21.13-.11-.33-.21-.66-.31-1-.25-.88-.47-1.78-.65-2.72.6-.46,1-.7,1-.72a1.76,1.76,0,0,1,1.92,2.94l-.7.5h2.12c4.31,13.2,16.73,17.45,22.15,18.69A21.74,21.74,0,0,0,408,350a1.78,1.78,0,0,1,1.45,1.09,1.74,1.74,0,0,1-.3,1.79,12.11,12.11,0,0,0-.84,1.13c-2.45,3.55-8.94,15.12-3.94,32.35.3,1,.64,2,1,3,.06.16.13.32.2.47a0,0,0,0,1,0,0,29.62,29.62,0,0,0,15.64,15.94c11.05,4.93,23.36,3.67,30.12.42a1.75,1.75,0,0,1,2.41,2.18Z"
         style="fill:#fff"
         id="path29" />
      <path
         d="M405.35,391.24s-.7,1-1.67,2.76a64.92,64.92,0,0,0-6,14.62A49.88,49.88,0,0,0,396,417.8h-3.44c.84-11.39,5.66-21.28,8.25-25.85a52.47,52.47,0,0,1-13.68-2.55c-7.37-2.46-13-6.49-16.82-11.88-.18-.26-.36-.53-.53-.8a29.54,29.54,0,0,1-4.11-10c-4-18.42,4.72-30.42,10.23-35.9a37,37,0,0,1,3.06-2.72c.6-.46,1-.7,1-.72a1.76,1.76,0,0,1,1.92,2.94l-.7.5c-.33.24-.75.58-1.25,1-4.53,3.84-15,15.07-10.82,34.16,2.12,9.74,8.53,16.48,19.05,20a49.62,49.62,0,0,0,13.21,2.42c1.52.08,2.43,0,2.46,0a1.87,1.87,0,0,1,1.57.84l0,.06a2.05,2.05,0,0,1,.16.41,0,0,0,0,1,0,0A1.79,1.79,0,0,1,405.35,391.24Z"
         style="fill:#fff"
         id="path30" />
      <path
         d="M369.44,379.93a46.44,46.44,0,0,0-11.06,9.65c-6.78,8.16-9.26,17.1-7.37,26.57.11.56.24,1.11.38,1.65.07.26.14.51.22.76a2,2,0,0,0-.47-.76h-3.85c-.07-.29-.13-.59-.19-.88s-.08-.41-.11-.61c-1.89-10.38,1-20.52,8.41-29.38a51.08,51.08,0,0,1,6.74-6.67,30.38,30.38,0,0,1-17.61-7c-5.39-4.69-8.41-11.27-8.74-19a.41.41,0,0,1,0-.11,24.48,24.48,0,0,1,.68-6.93,26.48,26.48,0,0,1,9.43-14.32c.91-.74,1.82-1.41,2.71-2H357a35,35,0,0,0-8.7,5.16c-6,4.9-8.83,10.93-8.56,17.93.27,6.7,2.82,12.33,7.38,16.3,5.31,4.61,13,6.79,21.11,6a2,2,0,0,1,2.07,1.31l0,.07A2,2,0,0,1,369.44,379.93Z"
         style="fill:#fff"
         id="path31" />
      <path
         d="M351.14,417.8H340a54.65,54.65,0,0,1-5.89-3.15c-10.32-6.36-16.73-15.29-18.55-25.85,0-.08,0-.16,0-.24a30.84,30.84,0,0,1-.37-6.79c.88-15.86,13.84-27.37,19-31.35-3.24-3.09-9.6-10.12-11.94-19.57h4.07a31.83,31.83,0,0,0,3,7,42.05,42.05,0,0,0,7.24,9.29c1.22,1.18,2,1.82,2.06,1.84a2,2,0,0,1,.76,1.65,2,2,0,0,1-.89,1.58c-.05,0-1.06.72-2.6,2-5.8,4.71-19.06,17.46-16.37,33.7,1.58,9.59,7.18,17.42,16.64,23.29A52.63,52.63,0,0,0,347,416.31c1.93.66,3.14.93,3.17.94A2,2,0,0,1,351.14,417.8Z"
         style="fill:#fff"
         id="path32" />
      <path
         d="M319,385.47a2,2,0,0,1-1,1.71c-.18.11-1.11.65-2.48,1.62-5.09,3.62-16.34,13.25-18.86,29h-4c2.63-17.46,15.18-28.31,20.72-32.32-13.35-9.12-18.7-21.15-18.55-30.71a22,22,0,0,1,.84-5.76c.14-.49.3-1,.46-1.45a34.39,34.39,0,0,1,12.72-16.71h7.73c-6.07,3.13-14.12,9.06-17.08,19.27a19.84,19.84,0,0,0-.46,2c-2.14,11.87,7.42,23.4,16.07,29.69,1,.73,2,1.39,2.94,2A2,2,0,0,1,319,385.47Z"
         style="fill:#fff"
         id="path33" />
      <path
         d="M299,352.08a2,2,0,0,1-1.28,1.43,29.38,29.38,0,0,0-2.93,1.26c-5.77,2.77-18.5,10.32-23.68,24.85a35.62,35.62,0,0,0,2.56,29.15,39.14,39.14,0,0,0,6.69,9H275a43.73,43.73,0,0,1-4.81-7.14,39.57,39.57,0,0,1-2.79-32.38c.08-.23.17-.46.26-.69.37-1,.78-2,1.22-2.93,6.54-14.13,19.22-21.23,24.82-23.79-5.56-6.39-8.52-13.11-8.81-20h4c.28,5.69,2.7,11.29,7.23,16.71.73.89,1.54,1.78,2.4,2.67A2,2,0,0,1,299,352.08Z"
         style="fill:#fff"
         id="path34" />
      <path
         d="M269.12,376a2,2,0,0,1-1.28,1.53l-.18.07c-2.32.91-26.81,11.16-26.92,35.1v0a36.69,36.69,0,0,0,.33,5.09h-4q-.13-1.14-.21-2.28c-.07-.94-.09-1.88-.09-2.83,0-1.17.06-2.31.17-3.42,1.89-20.41,19.75-30.91,26.75-34.28-3.68-4-10.71-13.34-10.75-26.08,0-1,0-2.07.14-3.14a36.69,36.69,0,0,1,1.31-7,31.69,31.69,0,0,1,3.44-7.88h4.79a27.48,27.48,0,0,0-4.4,9c-5.87,20.42,10.07,34.15,10.23,34.29a2,2,0,0,1,.44.54A2,2,0,0,1,269.12,376Z"
         style="fill:#fff"
         id="path35" />
      <path
         d="M253.67,347.9a2,2,0,0,1-.74,1,2,2,0,0,1-1.19.36c-.22,0-24-.21-31.05,17.15-9.47,23.17,8.95,38.06,16.24,42.85,1.51,1,2.54,1.56,2.75,1.67a2,2,0,0,1,1.06,1.75v0a1.09,1.09,0,0,1,0,.18,2,2,0,0,1-1.4,1.72c-.05,0-1,.31-2.48.91-1.3.52-3,1.28-5,2.28h-7.77a61,61,0,0,1,10.2-5.54c-6.95-4.79-21.7-17.28-20.12-36a34.83,34.83,0,0,1,.67-4.49,40.27,40.27,0,0,1,2.13-6.82c3.39-8.29,10.52-14.31,20.62-17.43a50.53,50.53,0,0,1,9.16-1.89,26.37,26.37,0,0,1-7.09-14.75h4a22.11,22.11,0,0,0,9.24,14.81l.14.11A2,2,0,0,1,253.67,347.9Z"
         style="fill:#fff"
         id="path36" />
      <path
         d="M216.7,374.4a1.74,1.74,0,0,1-1.22,1.38s-.5.16-1.29.45c-5.18,1.9-24.31,10-27.58,26.73a31.78,31.78,0,0,0,.51,14.84h-3.56a34.73,34.73,0,0,1-.39-15.52,29.48,29.48,0,0,1,2.78-8,31.39,31.39,0,0,1,1.85-3.13c6.76-10.12,18.34-15.6,23.75-17.72-5-4.7-15.78-17.11-11.05-33a33.37,33.37,0,0,1,1.37-3.69c.41-.94.88-1.88,1.41-2.84a24.35,24.35,0,0,1,2-3.08H210a20.61,20.61,0,0,0-3.63,4.78c-4.85,8.77-4.72,17.65.38,26.38a39.89,39.89,0,0,0,8.13,9.73c.7.61,1.14.94,1.16.95A1.77,1.77,0,0,1,216.7,374.4Z"
         style="fill:#fff"
         id="path37" />
      <path
         d="M112.62,316a1.19,1.19,0,0,1-2.16.89,1.09,1.09,0,0,1-.11-.16c-.86-1.16-6.42-8.46-14.8-12.31-.27-1-.52-2-.78-2.94a34.8,34.8,0,0,1,8.64,4.88,47,47,0,0,1,6.37,5.9c-.46-6.13-.34-17.62,5.76-25l1.39,2.12c-6.51,8.64-4.77,23.4-4.38,26.14C112.59,315.78,112.62,315.93,112.62,316Z"
         style="fill:#fff"
         id="path38" />
      <path
         d="M106,272.07l1.53,2.49a16.24,16.24,0,0,0-9.15,1.52,17.72,17.72,0,0,0-7.91,7.43l-.73-3.35a20,20,0,0,1,7.61-6.24A18.54,18.54,0,0,1,106,272.07Z"
         style="fill:#fff"
         id="path39" />
      <path
         d="M98.54,259.73a26.2,26.2,0,0,0-1.65,12.66,1.2,1.2,0,0,1-1,1.36l-.18,0a1.2,1.2,0,0,1-1.18-1c-.07-.47-1.24-8.7,2.53-15.49C97.55,258.06,98,258.89,98.54,259.73Z"
         style="fill:#fff"
         id="path40" />
      <path
         d="M86.17,240.93l-1,.06a.71.71,0,0,1,.21-.26C85.52,240.58,85.8,240.65,86.17,240.93Z"
         style="fill:#fff"
         id="path41" />
    </g>
    <path
       d="M594.37,207.14l-64.44,10.92c-1.29-7.67-2.38-15.27-3.22-22.62H593.4S593.6,200,594.37,207.14Z"
       style="opacity:0.1"
       id="path42" />
    <path
       d="M584.42,195.44c.38,3.49,1.36,12.53,3.35,24.68,0,.31.1.61.15.91q.66,4.07,1.49,8.52c.06.3.11.61.17.91.64,3.42,1.34,7,2.13,10.67.07.31.12.6.2.91.81,3.82,1.71,7.77,2.71,11.79.07.29.15.6.22.9.8,3.21,1.65,6.48,2.57,9.76.4,1.44.82,2.86,1.26,4.25.09.3.19.6.28.89,1.46,4.57,3.1,8.92,4.84,13.17.12.3.24.59.37.89,1.88,4.57,3.88,9,5.86,13.51q.19.45.39.87c2.26,5.1,4.5,10.22,6.58,15.6.11.28.22.58.33.88a152.32,152.32,0,0,1,5.25,16.32c.09.3.16.6.24.9A134.13,134.13,0,0,1,626,349.22c0,.3.07.61.1.91a150,150,0,0,1,.86,16.92c0,1.53-.06,3-.16,4.48,0,.31,0,.62-.09.93a60.73,60.73,0,0,1-4.41,18c-.12.31-.25.6-.38.9a63.85,63.85,0,0,1-6.32,11.27,10.17,10.17,0,0,1-.6.86,73.19,73.19,0,0,1-7.8,9.18c-.27.28-.55.56-.83.82a80.09,80.09,0,0,1-6.45,5.64c14.56,0,24-.37,25-1.37,1.29-1.29,2.51-2.6,3.64-3.93.31-.33.58-.67.85-1a64.5,64.5,0,0,0,6.47-9.23c.2-.32.38-.65.56-1a65.1,65.1,0,0,0,5.17-11.86c.11-.33.21-.65.31-1a75.7,75.7,0,0,0,3.2-20.17c0-.32,0-.65,0-1a106.6,106.6,0,0,0-1.82-20.91c-.06-.3-.11-.61-.17-.9a153.33,153.33,0,0,0-4.24-16.76c-.1-.3-.19-.61-.29-.92-1.81-5.69-3.87-11.21-6-16.43-.12-.31-.25-.62-.38-.91-2.34-5.62-4.78-10.88-7.11-15.67-.15-.31-.3-.6-.45-.9-2.49-5.1-4.84-9.64-6.8-13.45l-.25-.49-.21-.41c-2.16-4.25-4.13-8.62-5.94-13l-.36-.89c-1.82-4.51-3.47-9.06-5-13.55-.1-.31-.2-.61-.29-.91-1.26-3.83-2.39-7.62-3.42-11.32-.08-.3-.18-.61-.25-.92-1-3.63-1.89-7.16-2.69-10.55-.08-.32-.15-.62-.21-.93q-1.06-4.52-1.89-8.61c-.06-.31-.13-.62-.18-.92-2.85-14.15-3.83-23.86-3.83-23.86Z"
       style="fill:#455a64"
       id="path43" />
    <path
       d="M610.41,298.07a123.37,123.37,0,0,1,14.72-1.89c-.15-.31-.3-.6-.45-.9A124.33,124.33,0,0,0,610,297.2Q610.21,297.65,610.41,298.07Z"
       style="fill:#263238"
       id="path44" />
    <path
       d="M617.32,314.55a124.8,124.8,0,0,1,15.3-1.79c-.12-.31-.25-.62-.38-.91A123.43,123.43,0,0,0,617,313.67C617.1,314,617.21,314.25,617.32,314.55Z"
       style="fill:#263238"
       id="path45" />
    <path
       d="M622.81,331.77a123.22,123.22,0,0,1,16.13-1.66c-.1-.3-.19-.61-.29-.92a124.19,124.19,0,0,0-16.08,1.68C622.66,331.17,622.73,331.47,622.81,331.77Z"
       style="fill:#263238"
       id="path46" />
    <path
       d="M626.09,350.13a127,127,0,0,0,17.26-2.36c-.06-.3-.11-.61-.17-.9A130.43,130.43,0,0,1,626,349.22C626,349.52,626.06,349.83,626.09,350.13Z"
       style="fill:#263238"
       id="path47" />
    <path
       d="M626.7,372.46a114,114,0,0,0,18.44-2.82c0-.32,0-.65,0-1a112.2,112.2,0,0,1-18.38,2.85C626.76,371.84,626.74,372.15,626.7,372.46Z"
       style="fill:#263238"
       id="path48" />
    <path
       d="M628.51,391.64a103.44,103.44,0,0,0,13.12-.85c.11-.33.21-.65.31-1a99.35,99.35,0,0,1-19.65.69c-.12.31-.25.6-.38.9C624.14,391.57,626.35,391.64,628.51,391.64Z"
       style="fill:#263238"
       id="path49" />
    <path
       d="M625.67,404.16a98.1,98.1,0,0,0,10.23-.53c.2-.32.38-.65.56-1a95,95,0,0,1-20.87,0,10.17,10.17,0,0,1-.6.86A87,87,0,0,0,625.67,404.16Z"
       style="fill:#263238"
       id="path50" />
    <path
       d="M606.36,413.53a88.69,88.69,0,0,0,12.32.84,97.87,97.87,0,0,0,9.9-.5c.31-.33.58-.67.85-1a94.28,94.28,0,0,1-22.24-.15C606.92,413,606.64,413.27,606.36,413.53Z"
       style="fill:#263238"
       id="path51" />
    <path
       d="M604.16,283.69a125.36,125.36,0,0,1,13.72-1.86l-.25-.49-.21-.41a131.47,131.47,0,0,0-13.63,1.87C603.91,283.1,604,283.39,604.16,283.69Z"
       style="fill:#263238"
       id="path52" />
    <path
       d="M598.67,268.74c.09.3.19.6.28.89,3.8-.71,8-1.34,12.53-1.73l-.36-.89C606.64,267.41,602.45,268,598.67,268.74Z"
       style="fill:#263238"
       id="path53" />
    <path
       d="M594.62,253.83c.07.29.15.6.22.9,3.52-.56,7.32-1,11.32-1.27-.1-.31-.2-.61-.29-.91C601.89,252.82,598.12,253.27,594.62,253.83Z"
       style="fill:#263238"
       id="path54" />
    <path
       d="M591.71,241.13c.07.31.12.6.2.91,3.31-.4,6.86-.7,10.54-.81-.08-.3-.18-.61-.25-.92C598.53,240.43,595,240.73,591.71,241.13Z"
       style="fill:#263238"
       id="path55" />
    <path
       d="M589.41,229.55c.06.3.11.61.17.91,3.14-.36,6.47-.61,9.93-.7-.08-.32-.15-.62-.21-.93C595.85,228.93,592.54,229.19,589.41,229.55Z"
       style="fill:#263238"
       id="path56" />
    <path
       d="M587.77,220.12c0,.31.1.61.15.91,3-.38,6.18-.66,9.49-.81-.06-.31-.13-.62-.18-.92C593.92,219.46,590.75,219.74,587.77,220.12Z"
       style="fill:#263238"
       id="path57" />
    <path
       d="M569.6,57a26.94,26.94,0,0,0-1.15,11.53,13.93,13.93,0,0,0,1.9,5.36,8.85,8.85,0,0,0,4.08,3.64,19.64,19.64,0,0,0,5.56,1c1.92.15,3.87.19,5.83.24a94.85,94.85,0,0,1,11.85.74,33.15,33.15,0,0,1,11.59,3.62,23.49,23.49,0,0,1,7.1,6A13.63,13.63,0,0,1,618,92a33.17,33.17,0,0,1,1.85,5.84c.47,2,.84,3.89,1.21,5.82.73,3.87,1.41,7.7,2.36,11.43a34.27,34.27,0,0,0,4.14,10.41,12.88,12.88,0,0,0,3.66,3.76,10.54,10.54,0,0,0,2.34,1.13,19.93,19.93,0,0,0,2.64.76,39.86,39.86,0,0,0,11.32.41,91.48,91.48,0,0,1,11.89-.48,23.38,23.38,0,0,1,6.05,1.07,17.69,17.69,0,0,1,5.45,2.91,19.68,19.68,0,0,1,4.16,4.52,17,17,0,0,1,2.17,5.7,37.37,37.37,0,0,1,.13,11.89,64.19,64.19,0,0,1-2.61,11.49,72.35,72.35,0,0,0,1.91-11.57,36.11,36.11,0,0,0-.68-11.52,16.4,16.4,0,0,0-2.21-5.14,17.12,17.12,0,0,0-14.47-7.1,100.24,100.24,0,0,0-11.58.81,42.79,42.79,0,0,1-12.1-.23,22.82,22.82,0,0,1-3-.81,13.16,13.16,0,0,1-3-1.41,15.83,15.83,0,0,1-4.52-4.56,36.91,36.91,0,0,1-4.61-11.31c-1-3.88-1.64-7.78-2.34-11.62a59,59,0,0,0-2.79-11.07,11,11,0,0,0-1.25-2.27,21.86,21.86,0,0,0-1.8-2.07A20.81,20.81,0,0,0,608,85.47a32.27,32.27,0,0,0-10.64-3.65,109.93,109.93,0,0,0-11.58-1.18c-2-.13-3.93-.27-5.91-.52a19.83,19.83,0,0,1-5.87-1.5,8.25,8.25,0,0,1-2.53-1.83,12.81,12.81,0,0,1-1.84-2.44,14.65,14.65,0,0,1-1.76-5.73A26.19,26.19,0,0,1,569.6,57Z"
       style="fill:#263238"
       id="path58" />
    <polygon
       points="682.24 174.66 662.35 185.58 657.9 164.8 682.24 174.66"
       style="fill:#fff"
       id="polygon58" />
    <path
       d="M682.24,174.66l-9.7,5.6c-3.29,1.89-6.61,3.84-10,5.7l-.51.28-.13-.57-2.28-10.38c-.76-3.46-1.45-6.93-2.19-10.39l-.18-.85.8.33,6.16,2.55,6.1,2.62Zm0,0-12.43-4.75-6.08-2.31-6-2.38.61-.51c.75,3.46,1.54,6.91,2.26,10.38l2.17,10.4-.63-.3c3.25-1.78,6.57-3.46,9.9-5.21Z"
       style="fill:#dbdbdb"
       id="path59" />
    <path
       d="M654.48,187.56,640,195.16s-28.48-8-49.67-7.87l2.48,6.91s56.54,14.24,58.39,13.05S654.48,187.56,654.48,187.56Z"
       style="fill:#fff"
       id="path60" />
    <path
       d="M654.48,187.56,640,195.34l-.06,0-.09,0c-8.12-2.09-16.34-3.85-24.62-5.22-4.14-.66-8.29-1.26-12.46-1.7s-8.35-.67-12.53-.67l.45-.64,2.5,6.9-.35-.31,19.41,4.82c6.47,1.59,13,3.13,19.44,4.67,3.24.76,6.49,1.51,9.74,2.22,1.63.35,3.26.7,4.89,1,.82.15,1.63.3,2.45.42.41.06.82.13,1.23.16a4,4,0,0,0,.6,0h.27c.11,0,.08,0,.15-.06a3,3,0,0,0,.53-1c.14-.38.25-.77.36-1.17.22-.8.39-1.61.55-2.43.32-1.63.58-3.27.81-4.92C653.78,194.19,654.16,190.88,654.48,187.56Zm0,0c-.24,3.33-.53,6.65-.92,10-.19,1.66-.41,3.31-.69,5-.14.83-.29,1.65-.49,2.47-.1.41-.21.81-.34,1.22a3.16,3.16,0,0,1-.65,1.2.65.65,0,0,1-.41.19l-.34,0-.65,0c-.42,0-.84-.09-1.26-.14-.83-.12-1.65-.25-2.47-.4-1.65-.29-3.29-.61-4.92-.94-3.27-.66-6.53-1.36-9.79-2.08-6.51-1.44-13-3-19.48-4.54s-13-3.13-19.43-4.76l-.25-.07-.09-.24-2.47-6.92-.23-.64h.68c4.22,0,8.43.3,12.63.73s8.35,1.06,12.5,1.79,8.26,1.59,12.36,2.53S636,193.79,640,195l-.15,0Z"
       style="fill:#dbdbdb"
       id="path61" />
    <path
       d="M589.26,107.88c-8.46-2.71-11.64-.24-28-13.4C541.82,78.92,519.69,62.67,513,70.23s34.2,23.58,34.2,23.58-19.33-6.63-20.79-1.31,18.51,6.12,26.25,9.58c14.67,6.55,20.75,12.8,21.43,12.8C586.1,114.75,589.26,107.88,589.26,107.88Z"
       style="fill:#FFC727"
       id="path62" />
    <g
       style="opacity:0.1"
       id="g63">
      <path
         d="M589.26,107.88c-8.46-2.71-11.64-.24-28-13.4C541.82,78.92,519.69,62.67,513,70.23s34.2,23.58,34.2,23.58-19.33-6.63-20.79-1.31,18.51,6.12,26.25,9.58c14.67,6.55,20.75,12.8,21.43,12.8C586.1,114.75,589.26,107.88,589.26,107.88Z"
         id="path63" />
    </g>
    <path
       d="M656.79,203.42s5.67,8.21,2.57,17.78-10.6,11.65-8.92,19.88c0,0-15.76-9.48-13.77-33.55Z"
       style="fill:#455a64"
       id="path64" />
    <path
       d="M649.57,207.07c4.62,3.46,6.16,15.33-1.18,23.08-10.28,10.85-10,18.54-10,18.54s-14.58-11-13.77-24.12,6.65-19.31,6.65-19.31Z"
       style="fill:#37474f"
       id="path65" />
    <path
       d="M646.59,205.6a21.06,21.06,0,0,1-5,16.07c-6.5,7.79-19,9-21.73,20,0,0-11.41-13.52-2.54-33.87Z"
       style="fill:#455a64"
       id="path66" />
    <path
       d="M592.2,106.49c12.51,5.73,14.88,25.76,21.92,29.39s34.45,13.63,38.92,12.64,6.94-10.16,18.09-11.15,23.53,7.18,24.27,13.13-9.41,9.91-9.41,9.91,5.77,3.19,6.19,6.77c.33,2.81-1.81,9.58-7.26,8.92S661.45,164.13,653,163s-18.17,7.76-30.88,5.78-18.83-10.57-28.41-7.93-8.42,31.22,0,31.71,19.32-3.47,25.6-1.65,13.71,11.23,20.48,11.4,16.68-1.32,18.33,0-8.75,9.41-14,10.9-37.65-6.44-47.07-8.09-38.15-5.29-58-2.56-32.21-19.08-35.67-32.71,4-49.79,15.85-58.46c5.62-4.1,19.83-1.84,33.94-3.72C569,105.55,583.27,102.39,592.2,106.49Z"
       style="fill:#FFC727"
       id="path67" />
    <path
       d="M584.16,192l2.18-34.27L464.93,94.63S454.87,120,474.65,134c0,0-8.13,21,9.46,30.46,0,0-1.8,18,17,22.75,0,0-1.72,11.72,12.71,16.12S584.16,192,584.16,192Z"
       style="fill:#455a64"
       id="path68" />
    <path
       d="M586.34,157.73,584.17,192l-.23.07-.18,0-.1,0-.28.08-.45.12-.69.19-2.69.72c-12,3.16-44.11,11-54.74,7.79-13.17-4-11.6-14.71-11.6-14.71-17.16-4.31-15.52-20.78-15.52-20.78-16.06-8.67-8.63-27.83-8.63-27.83-16.26-11.5-10.46-31.42-9.13-35.31Z"
       style="fill:#37474f"
       id="path69" />
    <path
       d="M588.45,159.28S549,122.92,533.73,135.87c-4.66,4,4.78,16.94,14,21.41,0,0-27.6,3.62-27.24,17,.45,17,33.88,10.35,33.88,10.35s-15.1,11.29-9.48,18c8.73,10.41,45.61-13.54,45.61-13.54s-13.68-2.82-11.91-13.25S585.85,160.06,588.45,159.28Z"
       style="fill:#455a64"
       id="path70" />
    <path
       d="M591.32,161s-30.49-19.24-39.81-8.83c-2.84,3.19,4.93,11.28,11.73,13.49,0,0-18.77,5.14-17.24,14.38,1.93,11.73,24.44,3.94,24.44,3.94s-9.54,9.44-4.84,13.36c6.43,5.37,26-8.68,26-8.68s-5.47-5.69-5.24-13.08S589.6,161.78,591.32,161Z"
       style="fill:#37474f"
       id="path71" />
    <path
       d="M693.53,169.91c1.67,2-.27,5.36-2.75,6.36s-14.25.59-19.08-.56-15.56-9.85-20.76-10.22-16.23,7.8-25.77,7.18-23-10.24-29.6-9.78c-9.05.62-6.07,25.14-2.23,26.38s19.2-2.1,24.52-1.24,16.35,11.15,20.69,11.89,18.08-1.36,20.93.62.25,6.32-2.85,7.56-18.33.62-22.91-1-12.39-10.65-18-11.52-20.07,3.71-26.88-.13-11.74-35.74,5.82-40.13c4-1,24.52,10,29.48,10.65s19.06-9.62,28.86-8.09c4.56.71,14.16,8.11,21.64,10.7C679.22,170.15,691.84,167.89,693.53,169.91Z"
       style="fill:#FFC727"
       id="path72" />
    <path
       d="M693.53,169.91c1.67,2-.27,5.36-2.75,6.36s-14.25.59-19.08-.56-15.56-9.85-20.76-10.22-16.23,7.8-25.77,7.18-23-10.24-29.6-9.78c-9.05.62-6.07,25.14-2.23,26.38s19.2-2.1,24.52-1.24,16.35,11.15,20.69,11.89,18.08-1.36,20.93.62.25,6.32-2.85,7.56-18.33.62-22.91-1-12.39-10.65-18-11.52-20.07,3.71-26.88-.13-11.74-35.74,5.82-40.13c4-1,24.52,10,29.48,10.65s19.06-9.62,28.86-8.09c4.56.71,14.16,8.11,21.64,10.7C679.22,170.15,691.84,167.89,693.53,169.91Z"
       style="fill:#fff;opacity:0.6000000000000001"
       id="path73" />
    <path
       d="M597.53,145.22c2.74-5.58,1-25.69-14.2-27.3-7.17-.76-1.29,8.17-1.29,8.17a24,24,0,0,0-14.23-5.16c-8.74-.27-14.39,1.94-14.57,5s13,6.19,13,6.19-13.07,4.4-13.8,10c-.39,3,4.34,4.73,13.25.55S597.53,145.22,597.53,145.22Z"
       style="fill:#FFC727"
       id="path74" />
    <g
       style="opacity:0.6000000000000001"
       id="g75">
      <path
         d="M597.53,145.22c2.74-5.58,1-25.69-14.2-27.3-7.17-.76-1.29,8.17-1.29,8.17a24,24,0,0,0-14.23-5.16c-8.74-.27-14.39,1.94-14.57,5s13,6.19,13,6.19-13.07,4.4-13.8,10c-.39,3,4.34,4.73,13.25.55S597.53,145.22,597.53,145.22Z"
         style="fill:#fff"
         id="path75" />
    </g>
    <path
       d="M589.8,134.71a10.73,10.73,0,0,0-9.28,11.35c.26,4.46,4,10.25,11,9.7,7.34-.58,10.4-6.22,9.8-11.75C600.82,139.55,596.27,133.9,589.8,134.71Z"
       style="fill:#fff"
       id="path76" />
    <path
       d="M590.19,138.38a7,7,0,0,0-6,7.38,6.8,6.8,0,1,0,13.52-1.33C597.37,141.53,594.41,137.84,590.19,138.38Z"
       style="fill:#263238"
       id="path77" />
    <path
       d="M565.07,111.7c-10.47-2-13.91,1.36-35.31-12-25.31-15.82-54-32.08-60.9-22.13s44.08,23.3,44.08,23.3-24-5.18-25,1.36,22.93,4.7,32.63,7.73c18.41,5.74,26.54,12.34,27.35,12.24C562.27,120.34,565.07,111.7,565.07,111.7Z"
       style="fill:#FFC727"
       id="path78" />
    <path
       d="M675.71,156.8a14.54,14.54,0,0,0,6.81-.6c3.1-1.3,5.21-4.54,2.73-7.41C680.42,143.19,672.61,152,675.71,156.8Z"
       style="fill:#263238;mix-blend-mode:multiply"
       id="path79" />
    <path
       d="M674.68,168.59a23.26,23.26,0,0,0-10.48-12.35,23.88,23.88,0,0,0-7.72-2.64,20.79,20.79,0,0,0-8.09.19,132.65,132.65,0,0,0-15.84,4.81c-5.25,1.82-10.55,3.62-16,5-10.83,2.84-22.47,3.84-33.67.8a37.88,37.88,0,0,1-7.82-3.68c-2.45-1.45-4.77-3-7.06-4.63-4.57-3.21-9-6.5-13.66-9.44a64.28,64.28,0,0,0-14.56-7.2,34.7,34.7,0,0,0-7.82-1.59,32.41,32.41,0,0,0-8,.39,68.43,68.43,0,0,0-15.64,4.64c-5.08,2.09-10.11,4.51-15.39,6.47a53.65,53.65,0,0,1-16.52,3.7,45.43,45.43,0,0,1-8.49-.42l-2.09-.35-2.07-.45c-.69-.14-1.38-.37-2.07-.55s-1.36-.44-2-.72a34.91,34.91,0,0,1-13.37-10.17A51.35,51.35,0,0,1,437.91,126a51.51,51.51,0,0,0,4,7.28,52.76,52.76,0,0,0,5,6.58,33.63,33.63,0,0,0,13.3,9.3c.63.24,1.28.43,1.92.63s1.3.36,2,.47l2,.39,2,.29a42.69,42.69,0,0,0,8.15.2,51.84,51.84,0,0,0,15.79-4c5.09-2.06,10.05-4.56,15.22-6.74a70.85,70.85,0,0,1,16.2-5,33.64,33.64,0,0,1,8.64-.47,36.92,36.92,0,0,1,8.49,1.68A66,66,0,0,1,556,144.12c4.75,3,9.23,6.37,13.74,9.56s9.1,6.32,14,8c1.21.39,2.57.65,3.89.94s2.66.48,4,.61a56.73,56.73,0,0,0,8.14.34,80.15,80.15,0,0,0,8.16-.68c2.71-.38,5.41-.89,8.09-1.5,5.37-1.21,10.66-2.85,16-4.53,2.64-.84,5.3-1.69,8-2.47a63,63,0,0,1,8.2-1.91,22.6,22.6,0,0,1,8.48.14,24.67,24.67,0,0,1,7.89,3A23.1,23.1,0,0,1,674.68,168.59Z"
       style="fill:#263238"
       id="path80" />
  </g>
  <g
     id="freepik--character-1--inject-5">
    <path
       d="M273.25,330.85H205.06c-3.72,0-7.31,0-10.79-.05h-.74l-2.4-.05-.86,0-1.7-.05-1.42-.05c-15.92-.65-30-3.11-45.22-12.48l-.45-.28-.65-.42h0c-.06-.26-.12-.52-.17-.78-.09-.42-.17-.83-.24-1.26s-.11-.64-.16-1-.09-.59-.13-.89a2.17,2.17,0,0,1,0-.25c-.08-.61-.15-1.22-.2-1.84,0-.37-.06-.74-.08-1.11v-.09c0-.51-.06-1-.08-1.54v-.11c0-.28,0-.57,0-.86,0-.59,0-1.17,0-1.77,0-.29,0-.59,0-.89,0-.62.05-1.24.09-1.87.05-.84.12-1.69.2-2.55,0-.21.05-.41.07-.62s0-.41.07-.62.07-.62.11-.93l2.77.31,7.12.8,4.26.48h0l8.39.94h0l.56.06,6.16.7,9.19,1s0,0,0,0l1.26.14.2,0,.33,0,1.91.21,1,.07,1,.06h0l.89.06,1.58.09.61,0c1.83.11,3.64.2,5.41.29l1.91.08,1.07.05h0l1.3.05h.37l1.81.07,3.35.12h0l.91,0s0,0,0,0c7.3.24,14,.4,20.23.79h0l.76.05c1.37.09,2.72.19,4,.3l1.9.18h.17c1.18.12,2.34.26,3.48.41l.62.08h0a74,74,0,0,1,12,2.55,49.55,49.55,0,0,1,6.58,2.55h0c.7.33,1.37.68,2.05,1.05l.26.14a42.27,42.27,0,0,1,5.17,3.36C265.17,318.91,269.33,324.34,273.25,330.85Z"
       style="fill:#37474f"
       id="path81" />
    <path
       d="M224.05,330.85h-19c-3.72,0-7.31,0-10.79-.05h-.74l-2.4-.05-.86,0-1.7-.05-1.42-.05c-15.92-.65-30-3.11-45.22-12.48l-.45-.28-.65-.42-.18-.79c-.09-.42-.17-.83-.24-1.26s-.11-.64-.16-1-.09-.59-.13-.89l0-.25c-.08-.61-.15-1.22-.2-1.84l-.09-1.11v-.09c0-.51-.06-1-.08-1.54v-.11c0-.28,0-.57,0-.86,0-.59,0-1.17,0-1.77,0-.29,0-.59,0-.89,0-.62.05-1.24.09-1.87.05-.84.12-1.69.2-2.55,0-.21.05-.41.07-.62s0-.41.08-.62.07-.61.11-.92l2.72.31h0l7.15.8,4.26.47h0l8.39.94h0l.56.07,6.16.69,9.19,1,1.26.14.2,0,.33,0,1.91.21,1,.07,1,.06h0l.89.06,1.58.09c.21,0,.41,0,.62,0,1.79.11,3.59.19,5.4.27l1.92.08.85,0h0l1.48.06,0,0,.29.24h0l0,0c.41.35.82.71,1.24,1.09,3.82,3.36,7.86,7.26,12.06,11.51,1,1,2,2,3,3.08l.21.21q1.5,1.56,3,3.16C219.36,325.76,221.7,328.28,224.05,330.85Z"
       style="fill:#263238"
       id="path82" />
    <path
       d="M261.2,330.85H205.06c-3.72,0-7.31,0-10.79-.05h-.74l-2.4-.05-.86,0-1.7-.05-1.42-.05c-15.92-.65-30-3.11-45.22-12.48l-.45-.28-.65-.42h0a35.43,35.43,0,0,1-4.15-3.29c-.57-.52-1.14-1.07-1.72-1.64l-.51-.51q-1.73-1.75-3.49-3.78.39-1.69.87-3.3c.39-1.4.82-2.73,1.27-4,.55-1.58,1.13-3.05,1.68-4.37.35-.83.69-1.6,1-2.3.9-1.95,1.66-3.4,2.1-4.18l.36-.66,1.77.2h0l10.44,1.21.89.1h0l7.12.83h0l11.32,1.3h0l1.59.19,3.35.39h0l2.12.24,3.53.41.69.08h.09l.91,1.34.62.9c.6.89,1.33,1.95,2,3l.1.15c.29.4.56.8.82,1.17.12.16.23.32.33.47.56.79,1,1.43,1.29,1.78.07.09.48.08,1.18,0h0l.74-.08h0l.65-.1h0l1.48-.22h0l3.59-.54c11.37-1.73,32.58-4.57,44.25.73a16.67,16.67,0,0,1,1.79.91l.31.19a27.54,27.54,0,0,1,5.53,4.55,48.77,48.77,0,0,1,3.57,4.17c.6.77,1.19,1.58,1.78,2.42.49.69,1,1.41,1.45,2.14.36.56.72,1.12,1.08,1.7,1.67,2.68,3.29,5.58,4.87,8.64l0,.07C260.17,328.76,260.69,329.79,261.2,330.85Z"
       style="fill:#37474f"
       id="path83" />
    <path
       d="M163.71,299.36c0-.16-.23-.18-.27,0a18,18,0,0,1-7.43,9.87c-4,2.53-9,3.11-13.59,3.91-.44.08-.33.76.1.77a36.53,36.53,0,0,0,7.94-.89,17.69,17.69,0,0,0,6.62-2.77A15.8,15.8,0,0,0,163.71,299.36Z"
       style="fill:#263238"
       id="path84" />
    <path
       d="M186.44,305.84c-.49-1.14-1.05-2.26-1.58-3.39-1.26-2.67-2.52-5.35-3.88-8-.13-.24-.56-.06-.45.21.85,2,1.78,4,2.69,6,.46,1,.93,2.06,1.41,3.08a16.41,16.41,0,0,1,1.28,3c.26,1.07-.62,1.69-1.62,1.54a3.51,3.51,0,0,1-2.11-1.49,31.35,31.35,0,0,1-2.84-5.3c-.54-1.07-1.08-2.15-1.64-3.21s-1.25-2.24-1.83-3.37c0-.07-.17,0-.14.06.46,1.19.86,2.41,1.32,3.6s.94,2.38,1.43,3.56,1,2.22,1.47,3.31a9.4,9.4,0,0,0,1.71,2.59c1.17,1.19,3.54,2,4.76.41A2.61,2.61,0,0,0,186.44,305.84Z"
       style="fill:#263238"
       id="path85" />
    <path
       d="M261.3,330.85h-1.18q-1.49-2.89-3.06-5.73c-.86-1.56-1.76-3.12-2.68-4.66-.51-.87-1-1.73-1.56-2.59-.11-.2-.23-.39-.35-.58l-1.08-1.71c-.44-.7-.88-1.4-1.33-2.09-.1-.15-.2-.3-.29-.46-.74-1.13-1.44-2.29-2.22-3.38-.07-.1.09-.2.17-.1.48.65,1,1.27,1.51,1.9.37.45.72.9,1.07,1.37.6.8,1.18,1.62,1.74,2.45s1,1.44,1.44,2.17l.9,1.38.3.47c1.56,2.4,3,4.88,4.39,7.39l.54,1,0,.07C260.21,328.76,260.76,329.8,261.3,330.85Z"
       style="fill:#263238"
       id="path86" />
    <path
       d="M141.85,292.3c-.12.24-.23.49-.35.73q-.57,1.2-1.11,2.4c-.15.32-.3.65-.44,1-.49,1.1-1,2.22-1.42,3.35-.53,1.33-1,2.68-1.49,4a47.49,47.49,0,0,0-2.08,8.6.41.41,0,0,0,0,.11l-.51-.51a46.66,46.66,0,0,1,2.11-8.1c.48-1.37,1-2.72,1.58-4.05s1.3-2.94,2-4.36c.4-.82.8-1.62,1.21-2.41l.42-.82C141.79,292.18,141.89,292.24,141.85,292.3Z"
       style="fill:#263238"
       id="path87" />
    <path
       d="M174.27,247.82c15.43,13.15,43,26.07,52.75,21.78,9.17-4,17.34-21.48,25.28-39.89,1.5-3.46-26.32-8.12-28-4.43-3.53,7.84-8.78,19.43-10.44,19.87-4,1-20.32-2.9-34.39-6.83C162.41,233.55,168.12,242.58,174.27,247.82Z"
       style="fill:#d3766a"
       id="path88" />
    <path
       d="M255.83,215c-.41,9.38-4.69,20.11-6.89,22.61s-23-4.38-24.16-7.61S222.29,205,226,200.29,256.1,208.9,255.83,215Z"
       style="fill:#d3766a"
       id="path89" />
    <path
       d="M213.53,193.61c-.62,1,.05,2.5,1.5,3.42a3.3,3.3,0,0,0,3.15.43l43.28,28.78,1.89-3L219,196.19a3.3,3.3,0,0,0-1.72-2.66C215.81,192.61,214.14,192.64,213.53,193.61Z"
       style="fill:#FFC727"
       id="path90" />
    <path
       d="M225.22,207c1.51,2.72,3.85-.61,3.85-.61s-2.21,5.61.42,7.81,5.24-2,5.43-2.3c-.11.29-2,5.5.87,7.44s5-2.59,5.1-2.89c0,.32-.21,4.49,2.31,5.47,4.33,1.67,5.12-9,8.07-11.31,0,0,4.53,4.55,4.69,4.65,0,0,1-10.11-2.41-13.92a3.25,3.25,0,0,0-4-.74s.67-3.23-1.55-4.83c-1.14-.82-3.46.28-3.46.28a4.07,4.07,0,0,0-1.63-3.91c-1.65-1-3.72.22-3.72.22s-.75-2.69-2.77-3.21C232.34,188.08,222,201.17,225.22,207Z"
       style="fill:#d3766a"
       id="path91" />
    <path
       d="M238.83,192.5s0-.1-.06-.06a28.85,28.85,0,0,0-9.84,14.1c-.06.18.21.34.31.16A59.32,59.32,0,0,1,238.83,192.5Z"
       style="fill:#263238"
       id="path92" />
    <path
       d="M244.56,196c.05,0,0-.12-.09-.07a27.05,27.05,0,0,0-9.78,16.05c0,.23.15.46.21.21C236,207.87,240.87,199.88,244.56,196Z"
       style="fill:#263238"
       id="path93" />
    <path
       d="M241,216.92c1.27-6.19,4.4-11.35,8.38-16.2.05-.06,0-.13-.1-.08-2.59,1.83-4.8,5.18-6.3,7.94a16.59,16.59,0,0,0-2.19,8.3C240.76,217,241,217.06,241,216.92Z"
       style="fill:#263238"
       id="path94" />
    <path
       d="M229.07,206.38a19,19,0,0,0-.66,3.41,6.4,6.4,0,0,0,.4,3.3,2.07,2.07,0,0,0,1.09,1,3,3,0,0,0,1.53.2,3.73,3.73,0,0,0,2.44-1.78l1.37-2.16-.53,2.5a10.07,10.07,0,0,0-.19,3.37A3.73,3.73,0,0,0,235.9,219a2.12,2.12,0,0,0,2.68,0,6.43,6.43,0,0,0,1.84-2.66l1.13-2.79-.15,3a9.48,9.48,0,0,0,.18,2.49,4.05,4.05,0,0,0,1,2.09,1.94,1.94,0,0,0,2,.45,4.27,4.27,0,0,0,1.71-1.65,32,32,0,0,0,2.32-4.69c.36-.8.72-1.62,1.12-2.41a6.25,6.25,0,0,1,1.53-2.16,6.73,6.73,0,0,0-1.31,2.26c-.33.81-.63,1.65-.92,2.48a28.22,28.22,0,0,1-2.12,4.91,5,5,0,0,1-2,2,2.72,2.72,0,0,1-2.93-.55,4.92,4.92,0,0,1-1.35-2.56,10.71,10.71,0,0,1-.25-2.77l1,.2a7.42,7.42,0,0,1-2.14,3.17,3.07,3.07,0,0,1-2,.7,3.53,3.53,0,0,1-2-.67,4.74,4.74,0,0,1-1.75-3.44,11.27,11.27,0,0,1,.26-3.71l.83.34a4.42,4.42,0,0,1-3.14,2.05,3.8,3.8,0,0,1-1.88-.34,2.71,2.71,0,0,1-1.32-1.39,6.51,6.51,0,0,1-.21-3.57A15.67,15.67,0,0,1,229.07,206.38Z"
       style="fill:#263238"
       id="path95" />
    <path
       d="M224.38,226.58s-10.27-22.71.57-22.37c3.22.1,16.33,4.35,15.53,7-1,3.42-6.85,2.67-10.41,1.62,0,0,4.58,7.23.49,11.92A6.17,6.17,0,0,1,224.38,226.58Z"
       style="fill:#d3766a"
       id="path96" />
    <path
       d="M224.05,204.24a12.72,12.72,0,0,1,3.79.22,29.3,29.3,0,0,1,3.69.93,43.31,43.31,0,0,1,7.09,2.87,7.45,7.45,0,0,1,1.65,1.17,2.78,2.78,0,0,1,.64,1,1.84,1.84,0,0,1,.13.62,2.08,2.08,0,0,1-.09.63,3.19,3.19,0,0,1-1.37,1.75,6.25,6.25,0,0,1-2,.73,11.52,11.52,0,0,1-3.93,0,26.32,26.32,0,0,1-3.76-.87l.49-.67a14.83,14.83,0,0,1,1.23,2.66,14.29,14.29,0,0,1,.71,2.81,10,10,0,0,1,0,2.89,7.51,7.51,0,0,1-1,2.69,8.17,8.17,0,0,0,.67-2.72,9.91,9.91,0,0,0-.2-2.77,14.2,14.2,0,0,0-.83-2.64,14.43,14.43,0,0,0-1.29-2.43l-.63-.94,1.12.27a27.27,27.27,0,0,0,3.64.73,11.36,11.36,0,0,0,3.59,0,3.12,3.12,0,0,0,2.52-1.75c.31-.8-.8-1.63-1.82-2.22a37.07,37.07,0,0,0-3.34-1.66c-1.14-.51-2.29-1-3.46-1.45A23.84,23.84,0,0,0,224.05,204.24Z"
       style="fill:#263238"
       id="path97" />
    <path
       d="M178.18,237.47c-13.37-3.34-14.25,2.92-5.08,11.14A196.4,196.4,0,0,0,193.58,264l8.88-20.45Z"
       style="fill:#263238"
       id="path98" />
    <path
       d="M191.63,261.24c1.09-3,6-15.18,7.22-17.74.09-.18.22-.17.16,0a178,178,0,0,1-7.26,17.75A.06.06,0,0,1,191.63,261.24Z"
       style="fill:#37474f"
       id="path99" />
    <path
       d="M197.58,254.79l-4,9.2a195.64,195.64,0,0,1-20.47-15.38c-3.6-3.23-5.65-6.15-6-8.31C171.2,242.38,187.65,250.13,197.58,254.79Z"
       style="fill:#37474f"
       id="path100" />
    <path
       d="M188.76,302.82h0c0,.11,0,.17,0,.2l-.23.12h0c-.2.09-.53.21-1,.37h0c-.48.17-1.1.39-1.83.63l-.75.26-1.93.65-1.64.54c-.37.12-.76.24-1.15.38-9.91,3.24-26.42,8.46-38.27,12.15l-.45-.28-.65-.42h0a35.43,35.43,0,0,1-4.15-3.29c-.57-.52-1.14-1.07-1.72-1.64l-.51-.51q-1.73-1.75-3.49-3.78c-.32-.37-.65-.75-1-1.14.11-.6.23-1.21.35-1.84h0c.25-1.25.51-2.54.79-3.88s.59-2.79.92-4.24c.15-.71.31-1.43.48-2.15q.45-1.93.93-3.93h0q.35-1.41.72-2.85c.07-.3.15-.6.23-.9.18-.71.37-1.42.55-2.14.36-1.31.72-2.63,1.1-4,1.13-4,2.38-8,3.75-11.94.29-.84.58-1.67.88-2.5.06-.15.11-.3.16-.45a118.74,118.74,0,0,1,8.35-18.36A62.78,62.78,0,0,1,153,242l.47-.61a1.3,1.3,0,0,1,.15-.2c.67-.87,1.35-1.7,2.05-2.48a9.5,9.5,0,0,1,3-2.25,14,14,0,0,1,7.52-1.07,15,15,0,0,1,4.53,1.18,5.53,5.53,0,0,1,.73.38,3.29,3.29,0,0,1,.89.71,12.06,12.06,0,0,1,.94,1.42c.25.43.5.92.75,1.44h0c.54,1.12,1.09,2.44,1.65,3.92.69,1.84,1.39,3.93,2.09,6.2h0c.24.82.49,1.64.74,2.5q.74,2.53,1.45,5.27c.69,2.61,1.36,5.32,2,8.07a.75.75,0,0,1,0,.16h0a2.22,2.22,0,0,1,.09.37c.32,1.33.63,2.67.92,4,.09.39.18.79.26,1.18h0c.18.8.36,1.58.53,2.38.22,1,.43,2,.64,3L185,280q.38,1.81.72,3.57c.13.71.27,1.4.4,2.09.25,1.3.48,2.55.71,3.75h0l.63,3.59q.1.63.21,1.23c0,.25.08.48.11.72a1,1,0,0,1,0,.17c.14.83.26,1.61.37,2.33.14.93.26,1.75.35,2.46h0c0,.23.06.44.08.64s.08.62.1.88l0,.28A6.41,6.41,0,0,1,188.76,302.82Z"
       style="fill:#263238"
       id="path101" />
    <path
       d="M190.45,294.21a3,3,0,0,0,0-.42c0-.3-.07-.6-.11-.9s-.05-.32-.08-.48-.06-.33-.1-.49,0-.21-.07-.32a22.17,22.17,0,0,0-.8-2.71,21.39,21.39,0,0,0-1.15-2.65,13.4,13.4,0,0,0,.27-3.24c0-.31,0-.62-.07-.91s-.06-.45-.1-.67-.07-.4-.12-.6l-.09-.39c-.09-.36-.19-.7-.3-1a10.39,10.39,0,0,0-1.27-2.58c.07-.48.12-.94.16-1.38,0-.08,0-.16,0-.24,0-.4,0-.79,0-1.16s0-.57,0-.84,0-.39,0-.57a2.43,2.43,0,0,0,0-.3c0-.1,0-.2,0-.29s-.08-.44-.13-.65a2.82,2.82,0,0,0-.07-.31c-.06-.23-.12-.45-.19-.66a8.29,8.29,0,0,0-1.29-2.59,2.75,2.75,0,0,0-.21-.25l-.39-1.76a1.83,1.83,0,0,0-.06-.25q-.25-1.2-.54-2.37c-.44-1.85-.9-3.67-1.38-5.43-.2-.77-.41-1.52-.63-2.26h0q-.39-1.36-.81-2.67c-.82-2.61-1.69-5-2.61-7.22h0a32.54,32.54,0,0,0-4.19-7.48c-.18-.24-.37-.47-.56-.68a4.17,4.17,0,0,0-.48-.45h0a4.3,4.3,0,0,0-.64-.45h0a13.49,13.49,0,0,0-6.3-1.47,18.91,18.91,0,0,0-7.19,1.2,11.88,11.88,0,0,0-5.38,3.89c-.52.69-1,1.38-1.51,2.1v0c-.33.45-.64.91-1,1.38a120,120,0,0,0-11.35,22h0c-.06.13-.11.27-.16.4-.33.81-.66,1.64-1,2.46-1.07,2.78-2.08,5.62-3,8.5a21.37,21.37,0,0,0-2.44,4.8c-.09.25-.18.51-.26.78s-.09.28-.13.42-.15.52-.21.79a.53.53,0,0,0,0,.12c-.07.25-.12.52-.17.78s-.1.52-.13.78a.31.31,0,0,0,0,.1,1,1,0,0,0,0,.17,14,14,0,0,0-.08,2.83h0a10.72,10.72,0,0,0-2.44,3.28c-.1.21-.2.44-.3.67a2.67,2.67,0,0,0-.14.36l-.13.37a9.72,9.72,0,0,0-.44,1.91l0,.21c0,.15,0,.3,0,.45a11.83,11.83,0,0,0,.11,2.88,31.93,31.93,0,0,0-1.51,3.51c-.09.25-.19.52-.28.79q1,1.32,2,2.55c.41.51.83,1,1.25,1.5s.65.77,1,1.14q1.77,2,3.49,3.78l.51.51c.58.57,1.15,1.12,1.72,1.64l3.41-.86h0l9.67-2.45,6.08-1.54,3.33-.85c7.16-1.84,14.28-3.68,19.78-5.15L180,303l.17-.05.33-.09,3.26-.89.07,0,.68-.19,1.47-.41,1.29-.38c.56-.16,1-.3,1.29-.41a1.25,1.25,0,0,0,.45-.2l.1-.12a6.14,6.14,0,0,0,1.14-2.79c.05-.29.1-.59.14-.93A12,12,0,0,0,190.45,294.21Zm-37.89-51.87a10,10,0,0,1,.92-.92,3.74,3.74,0,0,1,.4-.32l0,0a4,4,0,0,1,.46-.3,3.91,3.91,0,0,1,2.94-.4l.16,0a4.26,4.26,0,0,1,.82.36h0c3.7,2.07,6,9.56,4.92,13.54s-5,7.67-8.27,9.46l-.59.31h0l-.15.07a6.68,6.68,0,0,1-2.45.7h-.21c-3.18,0-5.05-2.26-5.16-6.73-.06-2.42,1.11-6.57,2.79-10.24A24,24,0,0,1,152.56,242.34Z"
       style="fill:#FFC727"
       id="path102" />
    <path
       d="M190.23,292.41l-2.79.6-1.63.35-4.69,1-.21.05-.35.07-.1,0-3.13.67-1.21.26-.22.05-1.74.37-1,.21-18.73,4h0l-4.3.92-10.3,2.21-2.77.59-.49.1-4.73,1-1.49.31h0l-1.6.34q-1-1.23-2-2.55c.09-.27.19-.54.28-.79l4.15-.89,2-.42,5-1.08.4-.09,1.62-.34h0l2.83-.61h0l7.21-1.54,19.57-4.2h0l1.3-.28h0l4.92-1,3.87-.83,6.88-1.47h0l2.45-.52a22.17,22.17,0,0,1,.8,2.71c0,.11.05.21.07.32S190.2,292.24,190.23,292.41Z"
       style="fill:#fff"
       id="path103" />
    <path
       d="M188.38,283l-60,12.84a11.07,11.07,0,0,1,1.08-4l58.25-12.45A12.32,12.32,0,0,1,188.38,283Z"
       style="fill:#fff"
       id="path104" />
    <path
       d="M186.64,274.06,132,285.76a18.32,18.32,0,0,1,1-3.94l53.13-11.38A12.23,12.23,0,0,1,186.64,274.06Z"
       style="fill:#fff"
       id="path105" />
    <path
       d="M151.3,266.53c0,3.76,0,7.51-.1,11.27s-.21,7.5-.3,11.25l-.48,11.26c-.19,3.74-.4,7.49-.68,11.24,0-3.76,0-7.51.1-11.26l.31-11.26c.16-3.75.28-7.5.48-11.25S151,270.28,151.3,266.53Z"
       style="fill:#263238"
       id="path106" />
    <path
       d="M171.88,246.4c1.08,4.73,2.06,9.47,3,14.23s1.83,9.52,2.72,14.28,1.67,9.55,2.36,14.36c.16,1.2.34,2.4.49,3.6a26,26,0,0,1,.31,3.64c0,2.43-.11,4.86-.27,7.27,0-2.42,0-4.84-.08-7.26,0-.6-.06-1.2-.15-1.79l-.27-1.79c-.18-1.2-.4-2.39-.59-3.59-.82-4.77-1.65-9.54-2.54-14.31l-2.54-14.31C173.49,256,172.65,251.19,171.88,246.4Z"
       style="fill:#263238"
       id="path107" />
    <path
       d="M128.94,297.71c4.86-1.12,9.73-2.16,14.6-3.21l14.62-3.08,14.63-3,7.32-1.52c2.44-.49,4.86-1,7.3-1.59-4.79,1.41-9.64,2.54-14.49,3.67s-9.74,2.14-14.61,3.18-9.76,2-14.66,2.9S133.86,296.9,128.94,297.71Z"
       style="fill:#263238"
       id="path108" />
    <path
       d="M131.9,288.59c4.44-1,8.9-1.95,13.35-2.89l13.36-2.76L172,280.23l6.68-1.37c2.23-.45,4.45-.94,6.68-1.44-4.37,1.31-8.8,2.35-13.24,3.38s-8.89,1.93-13.35,2.87-8.92,1.77-13.4,2.59S136.4,287.88,131.9,288.59Z"
       style="fill:#263238"
       id="path109" />
    <rect
       x="168.23"
       y="266.22"
       width="11.9"
       height="3.88"
       transform="translate(-62.09 52.7) rotate(-14.63)"
       style="fill:#263238"
       id="rect109" />
    <rect
       x="170.11"
       y="273.41"
       width="11.9"
       height="3.88"
       transform="translate(-63.85 53.41) rotate(-14.63)"
       style="fill:#263238"
       id="rect110" />
    <rect
       x="173.95"
       y="292.35"
       width="11.9"
       height="3.88"
       transform="translate(-68.51 55) rotate(-14.63)"
       style="fill:#263238"
       id="rect111" />
    <path
       d="M171.88,246.4c-3.32.42-11.52-3.91-13.34-8.79-.12-.34.83-3.53,1.8-7.47.58-2.39,1.16-5.07,1.52-7.55.08-.51,15,6,15,6a39.83,39.83,0,0,0-2.89,9.31,6,6,0,0,0,0,1,1,1,0,0,1,0,.17C174,241.12,175.43,246,171.88,246.4Z"
       style="fill:#d3766a"
       id="path111" />
    <path
       d="M174,239c0,.05,0,.11,0,.17a9.46,9.46,0,0,1-1.61-.15c-9.13-1.53-9.88-13.34-9.93-16.31,2.71.79,14.47,5.95,14.47,5.95a39.83,39.83,0,0,0-2.89,9.31A5.13,5.13,0,0,0,174,239Z"
       style="fill:#263238"
       id="path112" />
    <path
       d="M180.69,198.88s5.22,2.06,6.27,7.31-.05,10.79-.51,11.06S180.69,198.88,180.69,198.88Z"
       style="fill:#263238"
       id="path113" />
    <path
       d="M160.33,206.44c-1.68,5.58,1.35,21.68,5.34,25.25,5.77,5.17,15.19,5.62,19.57-1.31,4.26-6.72-.06-27.62-4.5-30.86C174.19,194.74,162.8,198.19,160.33,206.44Z"
       style="fill:#d3766a"
       id="path114" />
    <path
       d="M176.41,216.17s-.07.06-.06.11c.23,1.08.31,2.35-.6,2.89,0,0,0,.07,0,.06C176.94,218.84,176.81,217.15,176.41,216.17Z"
       style="fill:#263238"
       id="path115" />
    <path
       d="M175.24,215.21c-1.77.19-1.27,3.71.37,3.54S176.72,215.06,175.24,215.21Z"
       style="fill:#263238"
       id="path116" />
    <path
       d="M182.44,215.28c0-.05.09,0,.09.08.13,1.1.45,2.33,1.49,2.55,0,0,0,.07,0,.07C182.79,218,182.38,216.34,182.44,215.28Z"
       style="fill:#263238"
       id="path117" />
    <path
       d="M183.25,214c1.73-.39,2.38,3.12.77,3.47S181.79,214.32,183.25,214Z"
       style="fill:#263238"
       id="path118" />
    <path
       d="M173.62,213.8a13.24,13.24,0,0,0,1.29-.68,2.28,2.28,0,0,0,1.19-.94.74.74,0,0,0-.25-.88,1.86,1.86,0,0,0-1.89.07,2.75,2.75,0,0,0-1.39,1.4A.81.81,0,0,0,173.62,213.8Z"
       style="fill:#263238"
       id="path119" />
    <path
       d="M184.36,212a12.09,12.09,0,0,1-1.46-.17,2.35,2.35,0,0,1-1.45-.44.77.77,0,0,1-.08-.92,1.85,1.85,0,0,1,1.79-.61,2.7,2.7,0,0,1,1.8.8A.8.8,0,0,1,184.36,212Z"
       style="fill:#263238"
       id="path120" />
    <path
       d="M176.53,226.28c.3.22.61.53,1,.51a3,3,0,0,0,1.13-.44s.08,0,.06.05a1.49,1.49,0,0,1-1.3.79,1.19,1.19,0,0,1-1-.85C176.41,226.28,176.49,226.25,176.53,226.28Z"
       style="fill:#263238"
       id="path121" />
    <path
       d="M177.21,222.85a3.77,3.77,0,0,0,2.72,1.3,5.08,5.08,0,0,0,1.34-.13,1.49,1.49,0,0,0,.25-.07l.24-.07a.27.27,0,0,0,.18-.28h0a.35.35,0,0,0,0-.11h0v-.1c-.1-.84-.36-2.11-.36-2.11.33.11,2,.59,1.9.16a55.58,55.58,0,0,0-3.05-11.05.1.1,0,0,0-.19.06c.57,3.49,1.75,6.86,2.38,10.36a6.23,6.23,0,0,0-1.83-.28c-.11,0,.55,2.43.57,2.82v0a5.18,5.18,0,0,1-4-.65C177.21,222.68,177.13,222.77,177.21,222.85Z"
       style="fill:#263238"
       id="path122" />
    <path
       d="M180.72,223.66a4.55,4.55,0,0,1-1.57,1.62,2,2,0,0,1-1.2.25c-.9-.11-1-.9-1-1.61a4.83,4.83,0,0,1,.24-1.1A5.78,5.78,0,0,0,180.72,223.66Z"
       style="fill:#263238"
       id="path123" />
    <path
       d="M179.15,225.28a2,2,0,0,1-1.2.25c-.9-.11-1-.9-1-1.61A2.07,2.07,0,0,1,179.15,225.28Z"
       style="fill:#ff9bbc"
       id="path124" />
    <path
       d="M162.15,220c3-.51,1.91-7.88,1.91-7.88s4.53-1.33,6.1-7.91c0,0,6.34,3.08,11.23,1.63,7.66-2.28,6.34-12.4,3.19-14.15-4.46-2.48-11.38,2.6-11.38,2.6s-11.51-1.89-14,6a5.77,5.77,0,0,0-4.7,6.3C154.75,212.12,159.91,220.35,162.15,220Z"
       style="fill:#263238"
       id="path125" />
    <path
       d="M163.07,213.08a10.36,10.36,0,0,0,5.49-3.82,7.72,7.72,0,0,0,1-7,.11.11,0,0,1,.2-.07,9,9,0,0,1-.43,7.55,7.21,7.21,0,0,1-6.25,3.59A.11.11,0,0,1,163.07,213.08Z"
       style="fill:#263238"
       id="path126" />
    <path
       d="M153.74,203.4c1.33-2.11,3.64-2.67,6-2.85a.11.11,0,0,1,0,.21,6.5,6.5,0,0,0-5.43,3.76c-1,2-.45,4.24.24,6.22a16.31,16.31,0,0,0,7.54,8.95c.06,0,0,.13,0,.1A16.34,16.34,0,0,1,153.6,210C153,207.91,152.52,205.36,153.74,203.4Z"
       style="fill:#263238"
       id="path127" />
    <path
       d="M172.94,194.66a7.66,7.66,0,0,1,3.93-3.76,9.18,9.18,0,0,1,6.55-.05,5.17,5.17,0,0,1,3.18,4.1,9.16,9.16,0,0,1-1.41,6s-.11,0-.08,0a9.15,9.15,0,0,0,1-5.41,4.77,4.77,0,0,0-3.25-3.89c-3.36-1.08-8-.33-9.76,3.16A.1.1,0,1,1,172.94,194.66Z"
       style="fill:#263238"
       id="path128" />
    <path
       d="M164.47,219.73s-3.77-5.12-6.1-3.76.6,8.84,3.4,9.8a2.82,2.82,0,0,0,3.74-1.61Z"
       style="fill:#d3766a"
       id="path129" />
    <path
       d="M159.26,218.09s0,.06,0,.08c2,.74,3,2.52,3.8,4.37a1.57,1.57,0,0,0-2.35-.37s0,.12.06.1a1.76,1.76,0,0,1,1.93.56,8.81,8.81,0,0,1,.95,1.52c.09.17.41.07.33-.13v0C163.94,221.7,161.93,218.28,159.26,218.09Z"
       style="fill:#263238"
       id="path130" />
    <path
       d="M252.65,327.83a2,2,0,0,1-.08.55,4.81,4.81,0,0,1-2.44,2.47H205.06c-3.72,0-7.31,0-10.79-.05h-.74l-2.4-.05-.86,0-1.7-.05-1.42-.05a5.08,5.08,0,0,1-1.86-1.78h0a2.13,2.13,0,0,1-.26-1,2.1,2.1,0,0,1,0-.43h0a2.54,2.54,0,0,1,.56-1.06c1.48-1.83,5.62-3.44,11.45-4.59a102,102,0,0,1,14.1-1.67h0l2.6-.11c1.63-.06,3.3-.09,5-.09,2.63,0,5.18.07,7.63.2h.08a101,101,0,0,1,14.17,1.69h0c5.76,1.16,9.86,2.75,11.32,4.57a3.06,3.06,0,0,1,.42.64h0A2.14,2.14,0,0,1,252.65,327.83Z"
       style="fill:#37474f"
       id="path131" />
    <path
       d="M255.5,312.19c0,.17,0,.35,0,.53h0a30.5,30.5,0,0,1-.19,3.11,29.13,29.13,0,0,1-.56,3.18,1.31,1.31,0,0,1-.06.27q-.13.58-.3,1.17a30.66,30.66,0,0,1-2.34,5.87c0,.09-.09.18-.14.27h0s0,.09,0,.14a2.74,2.74,0,0,1-.87,1.54,8.14,8.14,0,0,1-1.82,1.3,16.66,16.66,0,0,1-1.78.82c-.38.16-.77.31-1.19.45H205.06c-3.72,0-7.31,0-10.79-.05h-.74l-2.4-.05-.74-.29a15,15,0,0,1-1.78-.8h0a8.26,8.26,0,0,1-1.85-1.26,3,3,0,0,1-.91-1.35,1.63,1.63,0,0,1-.08-.43c-.05-.09-.1-.18-.14-.27a29.74,29.74,0,0,1-3.27-10.54h0a30.77,30.77,0,0,1-.2-3.12v-.36a28.38,28.38,0,0,1,.15-3q0-.33.06-.66c0-.47.12-.93.19-1.38.12-.78.27-1.52.43-2.22s.3-1.23.46-1.79.25-.83.38-1.22a.38.38,0,0,1,0-.1l.32-.94c.2-.54.4-1,.58-1.45s.25-.6.37-.84c.38-.82.64-1.27.64-1.27H251.9s.26.45.64,1.28a33.17,33.17,0,0,1,2.82,10.61s0,0,0,0C255.45,310.27,255.5,311.21,255.5,312.19Z"
       style="fill:#FFC727"
       id="path132" />
    <path
       d="M255.5,312.19c0,.17,0,.35,0,.53h0a30.5,30.5,0,0,1-.19,3.11,29.13,29.13,0,0,1-.56,3.18,1.31,1.31,0,0,1-.06.27q-.13.58-.3,1.17a30.66,30.66,0,0,1-2.34,5.87c0,.09-.09.18-.14.27h0s0,.09,0,.14a2.74,2.74,0,0,1-.87,1.54,8.14,8.14,0,0,1-1.82,1.3,16.66,16.66,0,0,1-1.78.82c-.38.16-.77.31-1.19.45H205.06c-3.72,0-7.31,0-10.79-.05h-.74l-2.4-.05-.74-.29a15,15,0,0,1-1.78-.8h0a8.26,8.26,0,0,1-1.85-1.26,3,3,0,0,1-.91-1.35,1.63,1.63,0,0,1-.08-.43c-.05-.09-.1-.18-.14-.27a29.74,29.74,0,0,1-3.27-10.54h0a30.77,30.77,0,0,1-.2-3.12v-.36a28.38,28.38,0,0,1,.15-3q0-.33.06-.66c0-.47.12-.93.19-1.38.12-.78.27-1.52.43-2.22s.3-1.23.46-1.79.25-.83.38-1.22a.38.38,0,0,1,0-.1l.32-.94c.2-.54.4-1,.58-1.45s.25-.6.37-.84c.38-.82.64-1.27.64-1.27H251.9s.26.45.64,1.28a33.17,33.17,0,0,1,2.82,10.61s0,0,0,0C255.45,310.27,255.5,311.21,255.5,312.19Z"
       style="opacity:0.2"
       id="path133" />
    <ellipse
       cx="218.83"
       cy="298.1"
       rx="33.82"
       ry="7.96"
       style="fill:#37474f"
       id="ellipse133" />
    <ellipse
       cx="218.83"
       cy="296.82"
       rx="33.07"
       ry="7.78"
       style="fill:#ebebeb"
       id="ellipse134" />
    <path
       d="M186.83,299.92a1,1,0,1,1-1-1A1,1,0,0,1,186.83,299.92Z"
       style="fill:#fff"
       id="path134" />
    <path
       d="M190.43,302.1a1,1,0,1,1-1-1A1,1,0,0,1,190.43,302.1Z"
       style="fill:#fff"
       id="path135" />
    <path
       d="M199.46,304.44a1,1,0,1,1-1-1A1,1,0,0,1,199.46,304.44Z"
       style="fill:#fff"
       id="path136" />
    <path
       d="M194.87,303.62a1,1,0,1,1-1-1A1,1,0,0,1,194.87,303.62Z"
       style="fill:#fff"
       id="path137" />
    <path
       d="M204.18,305.07a1,1,0,1,1-1-1A1,1,0,0,1,204.18,305.07Z"
       style="fill:#fff"
       id="path138" />
    <path
       d="M208.86,305.71a1,1,0,1,1-1-1A1,1,0,0,1,208.86,305.71Z"
       style="fill:#fff"
       id="path139" />
    <path
       d="M213.86,306.06a1,1,0,1,1-1-1A1,1,0,0,1,213.86,306.06Z"
       style="fill:#fff"
       id="path140" />
    <path
       d="M225.22,305.93a1,1,0,1,1-1-1A1,1,0,0,1,225.22,305.93Z"
       style="fill:#fff"
       id="path141" />
    <path
       d="M219.3,306.06a1,1,0,1,1-1-1A1,1,0,0,1,219.3,306.06Z"
       style="fill:#fff"
       id="path142" />
    <path
       d="M230.63,305.71a1,1,0,1,1-1-1A1,1,0,0,1,230.63,305.71Z"
       style="fill:#fff"
       id="path143" />
    <ellipse
       cx="234.69"
       cy="305.07"
       rx="0.99"
       ry="0.99"
       style="fill:#fff"
       id="ellipse143" />
    <path
       d="M240.28,304.4a1,1,0,1,1-1-1A1,1,0,0,1,240.28,304.4Z"
       style="fill:#fff"
       id="path144" />
    <path
       d="M244.9,303.41a1,1,0,1,1-1-1A1,1,0,0,1,244.9,303.41Z"
       style="fill:#fff"
       id="path145" />
    <ellipse
       cx="248.35"
       cy="301.99"
       rx="0.99"
       ry="0.99"
       style="fill:#fff"
       id="ellipse145" />
    <path
       d="M252.82,299.64a1,1,0,1,1-1-1A1,1,0,0,1,252.82,299.64Z"
       style="fill:#fff"
       id="path146" />
    <path
       d="M186.83,328a1,1,0,1,1-1-1A1,1,0,0,1,186.83,328Z"
       style="fill:#fff"
       id="path147" />
    <path
       d="M190.43,330.19a.75.75,0,0,1,0,.26.66.66,0,0,1-.12.27l-1.7-.05a1,1,0,0,1-.13-.48.94.94,0,0,1,.17-.54h0a1,1,0,0,1,.83-.44A1,1,0,0,1,190.43,330.19Z"
       style="fill:#fff"
       id="path148" />
    <path
       d="M194.27,330.8h-.74a.84.84,0,0,1,.35-.07A1,1,0,0,1,194.27,330.8Z"
       style="fill:#fff"
       id="path149" />
    <path
       d="M244.64,330.85h-1.46a1,1,0,0,1,1.46,0Z"
       style="fill:#fff"
       id="path150" />
    <path
       d="M249.34,330.08a1,1,0,0,1-.38.77h-1.23a.91.91,0,0,1-.32-.45.87.87,0,0,1-.06-.32,1,1,0,0,1,1-1,1,1,0,0,1,.84.48A.89.89,0,0,1,249.34,330.08Z"
       style="fill:#fff"
       id="path151" />
    <path
       d="M252.82,327.73a1,1,0,1,1-1-1A1,1,0,0,1,252.82,327.73Z"
       style="fill:#fff"
       id="path152" />
    <path
       d="M182.16,309.11a6.72,6.72,0,0,0,1.75,1.61A15,15,0,0,0,186,311.9c.7.38,1.46.63,2.19.94s1.51.5,2.27.75a63.11,63.11,0,0,0,9.34,1.9,148.39,148.39,0,0,0,19.09,1.07A152.06,152.06,0,0,0,238,315.51a61.64,61.64,0,0,0,9.35-1.86c.77-.23,1.51-.5,2.27-.74s1.49-.56,2.19-.94a14.46,14.46,0,0,0,2.05-1.2,6.24,6.24,0,0,0,1.7-1.66,9.16,9.16,0,0,1-3.63,3.09c-.69.42-1.45.7-2.17,1.06s-1.5.59-2.26.85a60.55,60.55,0,0,1-9.39,2.16,138.65,138.65,0,0,1-19.2,1.29,135.64,135.64,0,0,1-19.2-1.31,64.46,64.46,0,0,1-9.38-2.19c-.75-.29-1.51-.56-2.26-.87s-1.47-.64-2.17-1.05A10.17,10.17,0,0,1,182.16,309.11Z"
       style="fill:#FFC727"
       id="path153" />
    <path
       d="M181.84,312.2a6.51,6.51,0,0,0,1.76,1.63,14.78,14.78,0,0,0,2.08,1.2c.71.38,1.47.63,2.21.94s1.52.51,2.28.76a64.6,64.6,0,0,0,9.43,1.92,151,151,0,0,0,19.26,1.08,152.88,152.88,0,0,0,19.26-1.06,62.83,62.83,0,0,0,9.44-1.88c.77-.23,1.52-.5,2.29-.75s1.5-.57,2.2-1a13.92,13.92,0,0,0,2.08-1.21,6.18,6.18,0,0,0,1.7-1.68,9.13,9.13,0,0,1-3.66,3.13c-.69.42-1.46.71-2.19,1.07s-1.51.59-2.28.85a60.44,60.44,0,0,1-9.47,2.18,142.7,142.7,0,0,1-19.37,1.3,138,138,0,0,1-19.37-1.32A64,64,0,0,1,190,317.2c-.76-.3-1.53-.57-2.28-.88s-1.49-.64-2.19-1.06A10.07,10.07,0,0,1,181.84,312.2Z"
       style="fill:#FFC727"
       id="path154" />
    <path
       d="M182.06,315.37a6.55,6.55,0,0,0,1.75,1.61,15.19,15.19,0,0,0,2.07,1.19c.7.38,1.46.63,2.19.94s1.52.51,2.27.76a65,65,0,0,0,9.38,1.9,147.38,147.38,0,0,0,19.14,1.07,153.12,153.12,0,0,0,19.15-1,61.31,61.31,0,0,0,9.38-1.87c.76-.22,1.51-.49,2.27-.74s1.49-.56,2.19-.94a15.32,15.32,0,0,0,2.07-1.21,6.07,6.07,0,0,0,1.69-1.66,9.1,9.1,0,0,1-3.63,3.1c-.7.42-1.45.71-2.18,1.06s-1.5.59-2.27.86a61.82,61.82,0,0,1-9.42,2.16,139.26,139.26,0,0,1-19.25,1.29,136.24,136.24,0,0,1-19.25-1.31,63,63,0,0,1-9.41-2.2c-.76-.29-1.52-.56-2.26-.87s-1.49-.64-2.18-1A10.06,10.06,0,0,1,182.06,315.37Z"
       style="fill:#FFC727"
       id="path155" />
    <path
       d="M196.36,230.9c-1.06-.38-2.38.61-2.94,2.2a3.23,3.23,0,0,0,.29,3.12l-18,47.93L179,285.3l16.08-48.59a3.24,3.24,0,0,0,2.17-2.25C197.84,232.87,197.43,231.28,196.36,230.9Z"
       style="fill:#FFC727"
       id="path156" />
    <path
       d="M177.6,298a.29.29,0,0,1,0,.1.71.71,0,0,1-.36.38l-.19.08c-2.27,1-4.79,2.13-7.47,3.22-2.41,1-5,2-7.56,2.94l-1.71.62h0c-3.44,1.24-7,2.42-10.43,3.47s-6.77,1.93-10,2.64h0c-1.7.38-3.34.7-4.92.95a.18.18,0,0,1-.1,0l-.42-.42q-1.73-1.75-3.49-3.78c-.32-.37-.65-.75-1-1.14s-.84-1-1.25-1.5q-1-1.23-2-2.55c-2.26-2.9-4.54-6-6.81-9.32,2.78-8.3,7.85-18.28,13.71-27.65l1.47-2.3.09-.15a159.79,159.79,0,0,1,9.69-13.43,52.9,52.9,0,0,1,6.08-6.5c.57-.5,1.12-.94,1.64-1.33L153,242c4.77-3.26,7-.92,3.13,10-1.59,4.49-3.17,8.9-4.58,12.85-.71,2-1.38,3.91-2,5.63,0,.1-.07.2-.1.3-.36,1-.68,2-1,2.84-.78,2.32-1.34,4.12-1.59,5.18-.17.7-.2,1.09-.06,1.09h0c.17-.06,1.78-.58,4-1.41.92-.34,2-.74,3-1.17h0a65.87,65.87,0,0,0,8.72-4.12h0c.65-.36,1.72.3,3,1.62a30,30,0,0,1,2.6,3.18c.65.9,1.32,1.88,2,2.91.41.64.83,1.31,1.23,2,.66,1.09,1.29,2.21,1.9,3.32.38.71.75,1.43,1.1,2.13.59,1.17,1.13,2.31,1.58,3.38.21.49.4,1,.58,1.42.09.25.18.49.26.73.17.46.31.9.43,1.3a10.83,10.83,0,0,1,.35,1.71A2.68,2.68,0,0,1,177.6,298Z"
       style="fill:#d3766a"
       id="path157" />
    <path
       d="M193.59,257.64a4.24,4.24,0,0,1,1.14,4.72,6.3,6.3,0,0,1,3.81,2c1.67,2-.72,5.49-.72,5.49a7.79,7.79,0,0,1,3.68,2.73c1.41,2.07-.5,5.95-.5,5.95a6.86,6.86,0,0,1,1.73,4.44c-.11,4.39-5.89,7.8-9.53,10s-16.06,5-18.37,5.81l-14.34-23.28S174,261,178.69,259C182.61,257.3,191,255.52,193.59,257.64Z"
       style="fill:#d3766a"
       id="path158" />
    <path
       d="M194.34,262.09c-4.6.77-8.72,2.86-12.94,4.72-.1,0,0,.19.06.14,4.18-1.89,8.69-2.93,12.94-4.65A.11.11,0,0,0,194.34,262.09Z"
       style="fill:#263238"
       id="path159" />
    <path
       d="M197.55,269.58a12.28,12.28,0,0,0-2.93,1.22c-1,.5-2,1-3,1.56-2,1.07-3.94,2.19-5.86,3.37-.09,0,0,.19.06.14,2-1.06,4-2.1,6-3.08l3-1.45a14,14,0,0,0,2.82-1.48A.16.16,0,0,0,197.55,269.58Z"
       style="fill:#263238"
       id="path160" />
    <path
       d="M200.91,278.56a8.41,8.41,0,0,0-2.58,1.24c-.89.51-1.79,1-2.69,1.51-1.8,1-3.59,2-5.42,2.92-.1,0,0,.19.06.14,1.87-.93,3.74-1.85,5.6-2.8l2.73-1.42a8.17,8.17,0,0,0,2.36-1.5A.06.06,0,0,0,200.91,278.56Z"
       style="fill:#263238"
       id="path161" />
    <path
       d="M146.88,279.91a71.74,71.74,0,0,1-6.25,4.06c-2.14,1.24-4.28,2.47-6.57,3.51a36.48,36.48,0,0,1,6.07-4.37A36.92,36.92,0,0,1,146.88,279.91Z"
       style="fill:#263238"
       id="path162" />
    <path
       d="M158.39,251.41c4.1-12.93-2-14.18-10.63-5.67a192,192,0,0,0-16.37,19.19l19.56,10Z"
       style="fill:#263238"
       id="path163" />
    <path
       d="M157.32,255.52c-.52,1.71-1,3.44-1.47,5.16.41-.65.84-1.28,1.31-1.9a0,0,0,1,1,0,0c-.32.52-.62,1.05-.95,1.57-.16.24-.31.49-.47.74l-.09.16c-.38,1.34-.76,2.69-1.17,4-.49,1.59-1,3.16-1.54,4.74s-1.31,3.37-1.79,5a11.28,11.28,0,0,1-1.92-.95c-.19-.08-.13-.28,0-.17s1.74.73,1.77.73c.53-1.58.89-3.22,1.37-4.83s1-3.18,1.48-4.77c1-3.21,2.27-6.37,3.34-9.57C157.27,255.45,157.33,255.48,157.32,255.52Z"
       style="fill:#37474f"
       id="path164" />
    <path
       d="M134.21,263.18c2.89,1.26,14.55,6.82,17,8.19.17.09.16.22,0,.14a172.27,172.27,0,0,1-17-8.21C134.1,263.27,134.14,263.15,134.21,263.18Z"
       style="fill:#37474f"
       id="path165" />
  </g>
  <g
     id="freepik--character-2--inject-5">
    <path
       d="M304.81,277.36C317,287.83,332,297.47,340.94,300.17c6,1.81,23-12.48,35.2-27.82,2.44-3.05-12.68-24.45-15.11-21.06-6.36,8.86-18.17,23.1-20.61,23.35-2,.21-16.66-4-27.63-7.48C295.33,261.61,296.27,270,304.81,277.36Z"
       style="fill:#ad6359"
       id="path166" />
    <path
       d="M329.16,271.9l-7,22.54s-16.15-11.84-21.79-20-3.16-12.54,5.8-10.27S329.16,271.9,329.16,271.9Z"
       style="fill:#a6a6a6"
       id="path167" />
    <path
       d="M317.86,289.92c0-1.6,2.61-12.19,5.44-19.4a.09.09,0,0,1,.17.06c-.21.83-4.65,18-5.38,19.41C318,290.11,317.85,290,317.86,289.92Z"
       style="fill:#263238"
       id="path168" />
    <path
       d="M325.58,283.38l-3.45,11.06s-16.14-11.84-21.78-20c-3.89-5.64-3.92-9.47-.61-10.54Z"
       style="opacity:0.1"
       id="path169" />
    <path
       d="M325.07,330.85H269.7c0-.61.08-1.26.14-2,0-.5.07-1,.11-1.54.1-1.17.21-2.43.33-3.76.1-1,.21-2.13.33-3.26s.25-2.33.4-3.55c2-17,6.48-40,16-48.86a21,21,0,0,1,5-3.51,13.07,13.07,0,0,1,14.95,1.7,16.39,16.39,0,0,1,1.65,1.68c1.28,1.52,12.57,14.51,13.66,23a20.14,20.14,0,0,1-3,13.11l1.64,7.54.72,3.31.68,3.14.75,3.47.37,1.66.68,3.14.74,3.41Z"
       style="fill:#a6a6a6"
       id="path170" />
    <path
       d="M310.88,302a53.19,53.19,0,0,0-8,2.46c-1.29.53-2.54,1.12-3.79,1.75-.62.31-1.25.59-1.89.88a8.37,8.37,0,0,1-2.05.68c-.06,0,0,.12,0,.11a15.6,15.6,0,0,0,2-.29,13.88,13.88,0,0,0,1.88-.64c1.31-.52,2.6-1.11,3.9-1.65,2.64-1.09,5.27-2.18,8-3.06C311.06,302.18,311,302,310.88,302Z"
       style="fill:#263238"
       id="path171" />
    <path
       d="M318,303.73a56.57,56.57,0,0,0-6.88.51c-1.14.15-2.26.38-3.38.64-.54.12-1.07.26-1.6.4s-1.15.4-1.74.54c-.06,0-.05.12,0,.11.55-.12,1.13-.15,1.7-.23l1.7-.26c1.13-.18,2.26-.33,3.4-.52,2.26-.37,4.53-.71,6.8-1C318.16,303.91,318.12,303.73,318,303.73Z"
       style="fill:#263238"
       id="path172" />
    <path
       d="M326.2,314.27c0-.44,0-.78,0-1-.31-3-4.55-9.58-4.55-9.58s3.64-9.13,1.48-14.52c-4-10.07-11.38-19.71-16.15-23l-.24-.17c2.89,2.24,2.51,11.13.84,11.74s-8-1.86-10.49-4.08c-1.6-1.44-5-6.66-5.06-9.19a1.76,1.76,0,0,1,.16-.87c-2.27.76-7,4.22-8.11,6.21-5.79,10.58-11.84,24.89-14.21,38.1a26.61,26.61,0,0,0-2.3,6.23,14.59,14.59,0,0,0,.37,6.54l0,.08a24.47,24.47,0,0,0-1,3.26,23.69,23.69,0,0,0-.69,5.32c0,.39,0,.78,0,1.18a2.71,2.71,0,0,0,.06.38h59.12c0-.05.26-2.9.36-4.85.06-1,.11-2.07.17-3.23.08-1.76.15-3.64.19-5.27C326.2,316.22,326.22,315.09,326.2,314.27Zm-33.91-34.83c4.47,10.62-.85,19.46-8.88,21.71s-8-12.45-1.22-25.43C285.39,269.55,287.82,268.81,292.29,279.44Z"
       style="fill:#FFC727"
       id="path173" />
    <path
       d="M326.2,314.27c0-.44,0-.78,0-1-.31-3-4.55-9.58-4.55-9.58s3.64-9.13,1.48-14.52c-4-10.07-11.38-19.71-16.15-23l-.24-.17c2.89,2.24,2.51,11.13.84,11.74s-8-1.86-10.49-4.08c-1.6-1.44-5-6.66-5.06-9.19a1.76,1.76,0,0,1,.16-.87c-2.27.76-7,4.22-8.11,6.21-5.79,10.58-11.84,24.89-14.21,38.1a26.61,26.61,0,0,0-2.3,6.23,14.59,14.59,0,0,0,.37,6.54l0,.08a24.47,24.47,0,0,0-1,3.26,23.69,23.69,0,0,0-.69,5.32c0,.39,0,.78,0,1.18a2.71,2.71,0,0,0,.06.38h59.12c0-.06.26-2.9.36-4.85.06-1,.11-2.07.17-3.23.08-1.76.15-3.64.19-5.27C326.2,316.22,326.22,315.09,326.2,314.27Zm-44-38.55c3.2-6.17,5.63-6.91,10.1,3.72s-.85,19.46-8.88,21.71S275.46,288.7,282.19,275.72Z"
       style="fill:#FFC727"
       id="path174" />
    <path
       d="M326,322.77c-.06,1.16-.11,2.26-.17,3.23l-1.74.19-42.59,4.66H266.32a2.71,2.71,0,0,1-.06-.38c0-.4,0-.79,0-1.18l3.62-.39,16.53-1.81,37-4Z"
       style="fill:#fff"
       id="path175" />
    <path
       d="M326.16,317.5,266.91,324a24.47,24.47,0,0,1,1-3.26l0-.08,58.3-6.36C326.22,315.09,326.2,316.22,326.16,317.5Z"
       style="fill:#fff"
       id="path176" />
    <path
       d="M285.36,300.49c.25,2.46.41,4.92.57,7.38s.24,4.93.36,7.39.17,4.93.2,7.4.05,4.93,0,7.4c-.25-2.46-.41-4.92-.57-7.38s-.24-4.93-.36-7.39-.16-4.93-.2-7.39S285.3,303,285.36,300.49Z"
       style="fill:#263238"
       id="path177" />
    <path
       d="M307.54,277.69c1.46,2.34,2.8,4.74,4.06,7.19s2.43,4.94,3.53,7.47c.26.65.54,1.26.78,1.93a10.44,10.44,0,0,1,.51,2.07,12.66,12.66,0,0,1-.08,4.21,17.27,17.27,0,0,1-3.53,7.53l.05-.17a28.66,28.66,0,0,1,.13,3.45l-.06,3.42c-.06,2.29-.14,4.57-.26,6.84l0-6.84-.05-3.42a31,31,0,0,0-.2-3.37v-.1l.06-.07a18.4,18.4,0,0,0,3.18-7.38,12.15,12.15,0,0,0,0-4,17.64,17.64,0,0,0-1.24-3.83c-1-2.54-2.2-5-3.34-7.52S308.77,280.15,307.54,277.69Z"
       style="fill:#263238"
       id="path178" />
    <path
       d="M267.25,327.66c4.75-.69,9.5-1.3,14.26-1.89l14.28-1.7,14.29-1.52c4.77-.47,9.54-.94,14.32-1.32-4.74.69-9.5,1.3-14.25,1.89l-14.28,1.7-14.3,1.52C276.8,326.81,272,327.28,267.25,327.66Z"
       style="fill:#263238"
       id="path179" />
    <path
       d="M268.59,317.05c4.56-.64,9.13-1.2,13.69-1.74L296,313.76l13.73-1.38c4.58-.43,9.16-.84,13.75-1.2-4.55.67-9.12,1.22-13.69,1.77l-13.71,1.55-13.74,1.38C277.76,316.3,273.18,316.72,268.59,317.05Z"
       style="fill:#263238"
       id="path180" />
    <rect
       x="307.5"
       y="287.94"
       width="10.04"
       height="3.27"
       transform="translate(-76.35 115.5) rotate(-18.7)"
       style="fill:#263238"
       id="rect180" />
    <rect
       x="310.1"
       y="293.68"
       width="10.04"
       height="3.27"
       transform="translate(-78.05 116.63) rotate(-18.7)"
       style="fill:#263238"
       id="rect181" />
    <path
       d="M279.54,247.53a2.91,2.91,0,0,0,2.14,5.25,3,3,0,0,0,0,1.23,3.2,3.2,0,0,0,3.56,2.46,2.61,2.61,0,0,0,0,1,2.92,2.92,0,0,0,5.14,1.15,2.91,2.91,0,0,0,3.44,1.94,2.72,2.72,0,0,0,1.11-.53,2,2,0,0,0,.05.26,2.92,2.92,0,0,0,5.54.46,2.91,2.91,0,0,0,5.44-.42,3.26,3.26,0,0,0,2.12.23,3.12,3.12,0,0,0,2-1.47,3.21,3.21,0,0,0,4.91-2.55,2.91,2.91,0,0,0,3.39-3.15,3.21,3.21,0,0,0,3.83-3.86,3.12,3.12,0,0,0-.41-1,1.86,1.86,0,0,0,.51-.06,2.93,2.93,0,0,0,2.19-3.5,2.89,2.89,0,0,0-.77-1.39,3.2,3.2,0,0,0,2.12-3.77,3.16,3.16,0,0,0-.85-1.54,3.23,3.23,0,0,0,1.36-3.41,3.16,3.16,0,0,0-1.79-2.19,2.9,2.9,0,0,0-1-4.21,3.17,3.17,0,0,0,.66-2.77,3.2,3.2,0,0,0-2.88-2.48,2.88,2.88,0,0,0,0-1.4,2.93,2.93,0,0,0-3.12-2.25,2.93,2.93,0,0,0,0-1.38,3.21,3.21,0,0,0-3.85-2.4,2.35,2.35,0,0,0-.7.26,3.12,3.12,0,0,0-.08-.52,3.22,3.22,0,0,0-3.85-2.4,2.7,2.7,0,0,0-.75.28,2.82,2.82,0,0,0-.07-.91,3.22,3.22,0,0,0-5.91-.91,3.19,3.19,0,0,0-3-.91,3.25,3.25,0,0,0-2,1.37,2.92,2.92,0,0,0-5.33.45,3,3,0,0,0-2.43-.51,2.92,2.92,0,0,0-2.24,2.55,3.15,3.15,0,0,0-2.55-.5,3.22,3.22,0,0,0-2.5,3.21,2.9,2.9,0,0,0-3.24,3.55,2.85,2.85,0,0,0,.41,1l-.19,0a3.23,3.23,0,0,0-2.41,3.87,3,3,0,0,0,.34.86,2.88,2.88,0,0,0-.77.08,2.91,2.91,0,0,0-.87,5.32,2.91,2.91,0,0,0,.37,4.63,3.21,3.21,0,0,0,1.24,6,2.87,2.87,0,0,0-.79,2.72A2.94,2.94,0,0,0,279.54,247.53Z"
       style="fill:#263238"
       id="path181" />
    <path
       d="M294.7,265.73c.14,1.1,4.56,8.63,9.51,8.91,1.62.09,2.49-8.69,2.49-8.69l.21-.64,3-8.86-10-7.95-1.45-1.07s-.65,2.48-1.43,5.58c0,.14-.08.29-.11.44s-.1.34-.14.5q-.18.69-.36,1.41c-.09.36-.17.7-.25,1.08s-.17.75-.25,1.13A61.25,61.25,0,0,0,294.7,265.73Z"
       style="fill:#ad6359"
       id="path182" />
    <path
       d="M297.05,253a18.75,18.75,0,0,0,9.86,12.3l3-8.86-10-7.95-1.45-1.07S297.83,249.91,297.05,253Z"
       style="fill:#263238"
       id="path183" />
    <path
       d="M293.48,243.22a19.18,19.18,0,0,1-2.54-12.89c1.32-7,10-11.79,17.82-10.39a14.39,14.39,0,0,1,9,5.06,14.33,14.33,0,0,0-15.92-1.4C292.76,228.35,292.1,239.61,293.48,243.22Z"
       style="fill:#FFC727"
       id="path184" />
    <path
       d="M323,241.34c1.16,16.37-8.52,18.92-12.05,19.16-3.2.22-14.14.58-17-15.59s4.41-21.88,11.71-22.78S321.84,225,323,241.34Z"
       style="fill:#ad6359"
       id="path185" />
    <path
       d="M295,245.49c2.67.15,3.14-5.46,3.14-5.46s5.42-.11,7-7.95a11.92,11.92,0,0,1-2.24,6.5s9.53-1.24,13.35-9.33c0,0-1.5,4.11-3,5.59a11.2,11.2,0,0,0,5.85-4.52s1.79,4.58,3.11,5.82c0,0-.81-16.7-16.24-14.54,0,0-9.68.88-13,8.63S295,245.49,295,245.49Z"
       style="fill:#263238"
       id="path186" />
    <path
       d="M319.2,235.76c-.35.15-.71.24-1.08.36a1.9,1.9,0,0,1-1.17.16.6.6,0,0,1-.37-.62,1.47,1.47,0,0,1,1.07-1,2.1,2.1,0,0,1,1.54,0A.63.63,0,0,1,319.2,235.76Z"
       style="fill:#263238"
       id="path187" />
    <path
       d="M308.13,239.75a8.64,8.64,0,0,0,1.14,0,1.8,1.8,0,0,0,1.16-.25.59.59,0,0,0,.13-.71,1.45,1.45,0,0,0-1.35-.59,2.13,2.13,0,0,0-1.46.5A.63.63,0,0,0,308.13,239.75Z"
       style="fill:#263238"
       id="path188" />
    <path
       d="M310.83,241.58s-.08.06-.07.11c.19,1.11.23,2.41-.73,2.92,0,0,0,.07,0,.06C311.26,244.32,311.19,242.6,310.83,241.58Z"
       style="fill:#263238"
       id="path189" />
    <path
       d="M309.67,240.56c-1.81.12-1.44,3.73.24,3.62S311.18,240.45,309.67,240.56Z"
       style="fill:#263238"
       id="path190" />
    <path
       d="M309,240.82c-.3.24-.57.63-1,.71s-.8-.26-1.13-.59c0,0-.06,0-.06.05.07.69.41,1.37,1.16,1.4s1.11-.64,1.21-1.35C309.23,240.9,309.1,240.73,309,240.82Z"
       style="fill:#263238"
       id="path191" />
    <path
       d="M317.31,240.25s.09,0,.1.09c.07,1.12.34,2.4,1.39,2.67,0,0,0,.07,0,.07C317.54,243,317.2,241.32,317.31,240.25Z"
       style="fill:#263238"
       id="path192" />
    <path
       d="M318.2,239c1.79-.31,2.27,3.29.62,3.58S316.7,239.24,318.2,239Z"
       style="fill:#263238"
       id="path193" />
    <path
       d="M319,239.12c.31.15.64.46,1,.44s.64-.46.84-.87c0,0,.05,0,.06,0,.11.69,0,1.44-.66,1.66s-1.11-.33-1.37-1C318.79,239.26,318.86,239.06,319,239.12Z"
       style="fill:#263238"
       id="path194" />
    <path
       d="M311.61,251.52c.28.25.57.59,1,.6a3,3,0,0,0,1.19-.35,0,0,0,0,1,.05,0,1.51,1.51,0,0,1-1.39.7,1.21,1.21,0,0,1-.94-.94C311.48,251.51,311.57,251.48,311.61,251.52Z"
       style="fill:#263238"
       id="path195" />
    <path
       d="M316.43,246.47s.46,1.68.56,2.48c0,.08-.18.14-.45.19h0a3.88,3.88,0,0,1-3.91-.94.09.09,0,0,1,.11-.13,5.76,5.76,0,0,0,3.62.54c0-.23-.88-2.84-.75-2.87a7.46,7.46,0,0,1,1.88.17c-.86-3.51-2.27-6.87-3.07-10.38a.11.11,0,0,1,.2-.08,58.8,58.8,0,0,1,3.79,11C318.5,247,316.77,246.57,316.43,246.47Z"
       style="fill:#263238"
       id="path196" />
    <path
       d="M316.45,248.6a4.71,4.71,0,0,1-1.48,1.86,2.16,2.16,0,0,1-1.23.38c-1,0-1.19-.84-1.19-1.59a4.84,4.84,0,0,1,.14-1.18A6.11,6.11,0,0,0,316.45,248.6Z"
       style="fill:#263238"
       id="path197" />
    <path
       d="M315,250.46a2.16,2.16,0,0,1-1.23.38c-1,0-1.19-.84-1.19-1.59A2.18,2.18,0,0,1,315,250.46Z"
       style="fill:#ff9bbc"
       id="path198" />
    <path
       d="M296.87,245.29s-3.51-5.21-5.87-4,.21,8.76,2.94,9.83a2.79,2.79,0,0,0,3.77-1.44Z"
       style="fill:#ad6359"
       id="path199" />
    <path
       d="M291.79,243.46s-.05,0,0,.07c1.91.81,2.9,2.61,3.57,4.48a1.54,1.54,0,0,0-2.3-.47c-.05,0,0,.12.06.11a1.7,1.7,0,0,1,1.87.63,7.86,7.86,0,0,1,.88,1.55c.09.17.4.08.34-.12l0,0C296.27,247.22,294.42,243.75,291.79,243.46Z"
       style="fill:#263238"
       id="path200" />
    <path
       d="M392.34,262.91c-3.94,4.38-15.5,10.19-18.82,10.52s-13.87-19-12.49-22.14,15.78-16.87,21.71-17.85S396.42,258.36,392.34,262.91Z"
       style="fill:#ad6359"
       id="path201" />
    <rect
       x="250.6"
       y="288.57"
       width="209.8"
       height="4.47"
       transform="translate(783.61 124.45) rotate(119.48)"
       style="fill:#263238"
       id="rect201" />
    <path
       d="M311,398.29l-14,24.82H262.72L285,383.77a8.2,8.2,0,0,1,4.08-3.56l16.94-6.8.2.12,3.7,2.09L312,393.28A8.09,8.09,0,0,1,311,398.29Z"
       style="fill:#FFC727"
       id="path202" />
    <path
       d="M311,398.29l-14,24.82H262.72L285,383.77a8.2,8.2,0,0,1,4.08-3.56l16.94-6.8.2.12,3.7,2.09L312,393.28A8.09,8.09,0,0,1,311,398.29Z"
       style="opacity:0.2"
       id="path203" />
    <path
       d="M300.25,382.83c-1.72,3.46-3.53,6.86-5.36,10.26s-3.73,6.75-5.59,10.13-3.83,6.69-5.8,10l-3,5c-1,1.63-2,3.29-3.06,4.91.85-1.73,1.75-3.43,2.63-5.15l2.72-5.11c1.83-3.39,3.73-6.75,5.6-10.13s3.82-6.69,5.79-10S298.17,386.08,300.25,382.83Z"
       style="opacity:0.1"
       id="path204" />
    <path
       d="M304.45,385.2c-1.61,3.26-3.31,6.47-5,9.67s-3.48,6.37-5.25,9.53-3.6,6.31-5.46,9.42l-2.8,4.67c-1,1.54-1.9,3.1-2.89,4.62.79-1.63,1.64-3.24,2.46-4.86l2.56-4.8c1.71-3.21,3.48-6.37,5.26-9.54s3.59-6.31,5.46-9.42S302.48,388.26,304.45,385.2Z"
       style="opacity:0.1"
       id="path205" />
    <path
       d="M373.92,236.78c-.59,3.06,3.36,2,3.36,2s-5.31,2.9-4.69,6.3,5.33,1.81,5.67,1.71c-.28.16-5.09,3-4.12,6.3s5.51,1.2,5.8,1.06c-.22.23-3,3.32-1.72,5.7,2.26,4.07,9.72-3.64,13.49-3.55,0,0,.58,6.42.63,6.61,0,0,7.24-7.2,7.08-12.3a3.26,3.26,0,0,0-2.6-3.15s2.59-2.06,1.9-4.72c-.35-1.36-2.85-2-2.85-2a4.1,4.1,0,0,0,1.25-4.06c-.6-1.86-3-2.22-3-2.22s1.15-2.56-.08-4.26C391.56,226.75,375.17,230.21,373.92,236.78Z"
       style="fill:#ad6359"
       id="path206" />
    <path
       d="M393.73,234.33c.06,0,.06-.08,0-.09a29.12,29.12,0,0,0-16.67,4.57c-.15.11-.05.4.14.32A59.63,59.63,0,0,1,393.73,234.33Z"
       style="fill:#263238"
       id="path207" />
    <path
       d="M395.94,240.68c.07,0,.06-.11,0-.12a27.21,27.21,0,0,0-17.87,6.12c-.17.15-.18.45,0,.29C381.63,244.35,390.57,241.34,395.94,240.68Z"
       style="fill:#263238"
       id="path208" />
    <path
       d="M379.7,254.57c5-4,10.69-5.94,16.87-7.13.09,0,.05-.13,0-.13-3.18-.25-7,.92-10,2.08a16.77,16.77,0,0,0-7,5C379.48,254.48,379.59,254.65,379.7,254.57Z"
       style="fill:#263238"
       id="path209" />
    <path
       d="M377.28,238.78a19.79,19.79,0,0,0-2.7,2.2,6.54,6.54,0,0,0-1.81,2.81,2.15,2.15,0,0,0,.17,1.5,3.11,3.11,0,0,0,1.06,1.13,3.72,3.72,0,0,0,3,.2l2.44-.79-2,1.59a10.67,10.67,0,0,0-2.31,2.48,3.77,3.77,0,0,0-.67,3,2.11,2.11,0,0,0,2.09,1.69,6.45,6.45,0,0,0,3.12-.87l2.68-1.44-2.05,2.22a10.6,10.6,0,0,0-1.46,2.05,4.07,4.07,0,0,0-.55,2.28,2,2,0,0,0,1.24,1.61,4.28,4.28,0,0,0,2.38-.17,34.07,34.07,0,0,0,4.81-2.13c.79-.39,1.59-.79,2.41-1.15a6.3,6.3,0,0,1,2.57-.68,7,7,0,0,0-2.46.9c-.78.42-1.54.87-2.31,1.33a29.09,29.09,0,0,1-4.79,2.43,5,5,0,0,1-2.85.29,2.74,2.74,0,0,1-1.92-2.31,5,5,0,0,1,.61-2.84,10.61,10.61,0,0,1,1.59-2.3l.62.78a7.35,7.35,0,0,1-3.68,1.07,3.11,3.11,0,0,1-2-.72,3.49,3.49,0,0,1-1.07-1.77,4.72,4.72,0,0,1,.85-3.79,11.4,11.4,0,0,1,2.59-2.69l.42.8a4.44,4.44,0,0,1-3.74-.44,3.65,3.65,0,0,1-1.23-1.47,2.67,2.67,0,0,1-.14-1.92,6.56,6.56,0,0,1,2.14-2.89A15.41,15.41,0,0,1,377.28,238.78Z"
       style="fill:#263238"
       id="path210" />
    <path
       d="M363.07,248.52s8-23.67,15.75-16c2.29,2.28,9,14.38,6.58,15.77-3.11,1.8-6.84-2.73-8.74-6,0,0-1.6,8.44-7.8,9.07A6.19,6.19,0,0,1,363.07,248.52Z"
       style="fill:#ad6359"
       id="path211" />
    <path
       d="M378.14,231.93a12.72,12.72,0,0,1,2.62,2.76,28,28,0,0,1,2.08,3.22,43.6,43.6,0,0,1,3.22,7,7.32,7.32,0,0,1,.41,2,2.6,2.6,0,0,1-.2,1.14,1.71,1.71,0,0,1-.33.55,2,2,0,0,1-.49.4,3.27,3.27,0,0,1-2.21.34,6.25,6.25,0,0,1-1.93-.8,11.6,11.6,0,0,1-2.87-2.71,26.5,26.5,0,0,1-2.16-3.21l.82-.15a15.21,15.21,0,0,1-.92,2.79,13.7,13.7,0,0,1-1.41,2.54,10.27,10.27,0,0,1-2,2.1,7.63,7.63,0,0,1-2.56,1.29,8.63,8.63,0,0,0,2.36-1.53,10.12,10.12,0,0,0,1.74-2.17,13.72,13.72,0,0,0,1.21-2.5,14.27,14.27,0,0,0,.72-2.67l.18-1.12.63,1a29.09,29.09,0,0,0,2.17,3,11.57,11.57,0,0,0,2.66,2.44,3.13,3.13,0,0,0,3,.45c.77-.38.53-1.74.19-2.88a36.18,36.18,0,0,0-1.31-3.5c-.49-1.16-1-2.32-1.54-3.44A24.29,24.29,0,0,0,378.14,231.93Z"
       style="fill:#263238"
       id="path212" />
    <path
       d="M280.34,275.36c-9.6,21.38-15.41,46.9-12.2,52.37,3.53,6,36.57,17,56.89,17.38,3.78.07,4.37-31.16.33-31.28-7.29-.22-31.28-3.37-33.5-5.1-1.86-1.45.25-11.1.11-27.5C291.87,268.66,285.22,264.5,280.34,275.36Z"
       style="fill:#ad6359"
       id="path213" />
    <path
       d="M360.16,316.54a4.49,4.49,0,0,1-1.48,4.92,6.69,6.69,0,0,1,2.43,3.84c.46,2.71-3.58,4.62-3.58,4.62a8.26,8.26,0,0,1,1.91,4.46c.18,2.63-3.62,5.15-3.62,5.15a7.18,7.18,0,0,1-.79,5c-2.43,3.95-9.51,4-14,4.06s-17.32-3.94-19.84-4.46l-.71-28.87s20.08-6.06,25.39-5.39C350.32,310.4,358.94,313.25,360.16,316.54Z"
       style="fill:#ad6359"
       id="path214" />
    <path
       d="M358.47,321c-4.6-1.74-9.47-2-14.31-2.57a.08.08,0,1,0,0,.16c4.82.5,9.49,2,14.28,2.64A.12.12,0,0,0,358.47,321Z"
       style="fill:#263238"
       id="path215" />
    <path
       d="M357.43,329.55a12.91,12.91,0,0,0-3.33-.45c-1.19-.08-2.37-.13-3.56-.17-2.38-.07-4.76-.1-7.14-.05-.11,0-.13.17,0,.17q3.56.12,7.11.37l3.55.3a15.06,15.06,0,0,0,3.35.15A.17.17,0,0,0,357.43,329.55Z"
       style="fill:#263238"
       id="path216" />
    <path
       d="M355.72,339.52a9,9,0,0,0-3-.24l-3.25,0c-2.17-.05-4.34-.1-6.5-.22a.09.09,0,0,0,0,.17c2.2.13,4.4.3,6.6.42l3.24.15a8.35,8.35,0,0,0,3-.12A.06.06,0,0,0,355.72,339.52Z"
       style="fill:#263238"
       id="path217" />
    <path
       d="M293,298.93l-23.6.5s6.1-19.07,12.07-27,10.89-7,11.58,2.23S293,298.93,293,298.93Z"
       style="fill:#a6a6a6"
       id="path218" />
    <path
       d="M272.31,293.94c1.52-.49,12.39-1.39,20.12-1a.09.09,0,1,1,0,.18c-.85.07-18.5,1.3-20.12,1.06C272.18,294.17,272.2,294,272.31,293.94Z"
       style="fill:#263238"
       id="path219" />
    <path
       d="M294.25,284.6c0-.07-.11-.08-.13,0-.22.8-.33,1.63-.47,2.45,0,.19-.06.38-.08.57-.1-2-.23-4-.37-5.95a.08.08,0,0,0-.15,0c.18,6.85-.25,10.24-.26,17.08l-2,.2a.13.13,0,0,0,0,.25l2.3.05a.26.26,0,0,0,.25-.2c.67-4.44.5-5.51.32-10,.14-.65.28-1.3.37-2A17.09,17.09,0,0,0,294.25,284.6Z"
       style="fill:#263238"
       id="path220" />
  </g>
  <g
     id="freepik--character-3--inject-5">
    <path
       d="M429.69,277.36c12.14,10.47,27.22,20.11,36.12,22.81,6,1.81,22.71-11.12,35-26.46,2.43-3-11-26.44-13.48-23-6.35,8.86-19.55,23.73-22,24-2,.21-16.65-4-27.62-7.48C420.21,261.61,421.14,270,429.69,277.36Z"
       style="fill:#f7a9a0"
       id="path221" />
    <path
       d="M454,271.9l-7,22.54s-16.15-11.84-21.78-20-3.17-12.54,5.79-10.27S454,271.9,454,271.9Z"
       style="fill:#455a64"
       id="path222" />
    <path
       d="M450.46,283.38,447,294.44s-16.15-11.84-21.78-20c-3.89-5.64-3.93-9.47-.61-10.54Z"
       style="fill:#37474f"
       id="path223" />
    <path
       d="M442.73,289.92c0-1.6,2.62-12.19,5.45-19.4a.09.09,0,0,1,.17.06c-.21.83-4.65,18-5.39,19.41C442.9,290.11,442.73,290,442.73,289.92Z"
       style="fill:#263238"
       id="path224" />
    <path
       d="M444.14,330.85H386.06c.11-.52.21-1.05.32-1.59.27-1.37.56-2.78.87-4.24.16-.7.31-1.41.47-2.14.28-1.28.58-2.59.89-3.92.23-.95.45-1.9.69-2.86s.5-2,.76-3c.33-1.31.68-2.62,1-3.95,4.58-16.86,11.19-34.67,20-44.49a8.82,8.82,0,0,1,4.38-2.64l.36-.09a9.76,9.76,0,0,1,1.53-.25l.3,0c4.51-.33,9.12,1.67,10.13,3,3.47,4.43,7.57,19.63,10.8,34.37.26,1.19.52,2.39.77,3.57.21,1,.42,2,.62,3q.24,1.2.48,2.37c.24,1.21.47,2.41.7,3.57.13.7.26,1.4.39,2.08.25,1.3.48,2.57.7,3.77s.43,2.46.62,3.59c.53,3.19.92,5.81,1.13,7.57A11.09,11.09,0,0,1,444.14,330.85Z"
       style="fill:#455a64"
       id="path225" />
    <path
       d="M445.43,319.36a2.86,2.86,0,0,1-.07-.28c-.07-.29-.15-.58-.23-.86a2.17,2.17,0,0,1-.07-.24,22.58,22.58,0,0,0-1.56-3.85,13.4,13.4,0,0,0,.27-3.24,1.28,1.28,0,0,1,0-.19c0-.25,0-.48-.06-.72a12.7,12.7,0,0,0-.61-2.67,10.39,10.39,0,0,0-1.27-2.58A16.6,16.6,0,0,0,442,302c0-.18,0-.36,0-.54s0-.2,0-.3,0-.39-.05-.57-.05-.4-.08-.59a11.42,11.42,0,0,0-.38-1.62h0a7.38,7.38,0,0,0-1.5-2.84c-2.79-13-6.5-25.91-11.17-31.14-1.71-1.92-6.48-3.23-11.15-2.73l-.3,0c-.51.06-1,.14-1.53.25l-.36.09a11.35,11.35,0,0,0-6.67,4.07c-7.65,10.23-13.44,25.11-18,38.85a20.89,20.89,0,0,0-2.44,4.8h0s0,.07,0,.11c-.07.22-.15.44-.22.67a.65.65,0,0,0,0,.13c-.08.26-.16.52-.23.79,0,.09-.05.19-.07.29s-.11.44-.15.67a3.4,3.4,0,0,0-.07.34c0,.22-.08.44-.11.66a.37.37,0,0,0,0,.11,1,1,0,0,0,0,.17,14,14,0,0,0-.08,2.83,10.49,10.49,0,0,0-2.45,3.28,10.68,10.68,0,0,0-.54,1.32l-.15.46c-.05.18-.1.35-.14.53s-.08.35-.11.53l-.09.54-.06.59a12.41,12.41,0,0,0,.12,2.88,31.93,31.93,0,0,0-1.51,3.51c-.09.24-.17.48-.26.73h53.48l.33-.09c4.05-1.09,7-1.92,8.07-2.3a1.36,1.36,0,0,0,.44-.2c.12-.18,1.07-1.06,1.38-3.84A15.13,15.13,0,0,0,445.43,319.36Zm-27.27-35.48c-1.45,5.27-8.16,10.42-11.46,10.54s-5.26-2.15-5.38-6.72,4.18-15.31,8-17.36C415.09,267.21,419.6,278.62,418.16,283.88Z"
       style="fill:#FFC727"
       id="path226" />
    <path
       d="M382.1,330.85h0c-.06.2-.13.4-.2.61C382,331.25,382,331.05,382.1,330.85Z"
       style="fill:#fff"
       id="path227" />
    <path
       d="M445.62,320.3l-2.76.59-1.65.35-5.36,1.15-6.3,1.35-24.05,5.14-9.19,2h-14.2c.08-.25.16-.49.25-.73h0l4-.86,19.25-4.12,29.7-6.36,6.91-1.48,2.41-.52c.14.37.28.77.41,1.2a2.17,2.17,0,0,0,.07.24A18.71,18.71,0,0,1,445.62,320.3Z"
       style="fill:#fff"
       id="path228" />
    <path
       d="M443.78,310.89l-60,12.84a11.07,11.07,0,0,1,1.09-4l58.25-12.45A13,13,0,0,1,443.78,310.89Z"
       style="fill:#fff"
       id="path229" />
    <path
       d="M442,302l-54.66,11.7a18.93,18.93,0,0,1,1-3.94l53.14-11.38A12.6,12.6,0,0,1,442,302Z"
       style="fill:#fff"
       id="path230" />
    <path
       d="M405.43,330.85c-.05-3,0-6.08,0-9.12s.15-6.07.23-9.11.24-6.07.4-9.1.35-6.07.61-9.1c.05,3,0,6.08,0,9.12s-.15,6.07-.23,9.11-.24,6.07-.41,9.1S405.69,327.82,405.43,330.85Z"
       style="fill:#263238"
       id="path231" />
    <path
       d="M427.27,274.29c1.08,4.73,2.06,9.47,3,14.23S432.12,298,433,302.8s1.67,9.55,2.36,14.36c.17,1.2.35,2.4.49,3.6a26,26,0,0,1,.32,3.64c0,2.43-.11,4.86-.28,7.27,0-2.42,0-4.84-.08-7.26,0-.6-.06-1.2-.14-1.79l-.28-1.79c-.18-1.2-.39-2.39-.59-3.59-.82-4.77-1.65-9.54-2.53-14.31l-2.55-14.31C428.88,283.85,428.05,279.08,427.27,274.29Z"
       style="fill:#263238"
       id="path232" />
    <path
       d="M384.34,325.6c4.86-1.12,9.72-2.16,14.59-3.21l14.62-3.08,14.64-3,7.31-1.52c2.44-.49,4.87-1,7.3-1.59-4.78,1.41-9.64,2.54-14.49,3.67s-9.73,2.14-14.6,3.18-9.77,2-14.66,2.9S389.26,324.79,384.34,325.6Z"
       style="fill:#263238"
       id="path233" />
    <path
       d="M387.3,316.48c4.44-1,8.89-2,13.34-2.89L414,310.83l13.38-2.71,6.68-1.37c2.23-.45,4.45-.94,6.67-1.44-4.36,1.31-8.8,2.35-13.23,3.38s-8.9,1.93-13.35,2.87-8.93,1.77-13.41,2.59S391.8,315.77,387.3,316.48Z"
       style="fill:#263238"
       id="path234" />
    <rect
       x="423.62"
       y="294.11"
       width="11.9"
       height="3.88"
       transform="translate(-60.85 118.12) rotate(-14.63)"
       style="fill:#263238"
       id="rect234" />
    <rect
       x="425.5"
       y="301.3"
       width="11.9"
       height="3.88"
       transform="translate(-62.61 118.83) rotate(-14.63)"
       style="fill:#263238"
       id="rect235" />
    <rect
       x="429.35"
       y="320.24"
       width="11.9"
       height="3.88"
       transform="translate(-67.27 120.42) rotate(-14.63)"
       style="fill:#263238"
       id="rect236" />
    <path
       d="M382.11,330.85c-.06.2-.13.4-.2.61.06-.21.12-.41.19-.61Z"
       style="fill:#FFC727"
       id="path236" />
    <path
       d="M405.22,275.36c-9.61,21.38-15.41,46.9-12.2,52.37,3.52,6,36.56,17,56.89,17.38,3.77.07,4.36-31.16.33-31.28-7.3-.22-31.29-3.37-33.5-5.1-1.87-1.45.25-11.1.11-27.5C416.74,268.66,410.1,264.5,405.22,275.36Z"
       style="fill:#f7a9a0"
       id="path237" />
    <path
       d="M485,316.54a4.5,4.5,0,0,1-1.48,4.92A6.69,6.69,0,0,1,486,325.3c.46,2.71-3.59,4.62-3.59,4.62a8.24,8.24,0,0,1,1.92,4.46c.18,2.63-3.63,5.15-3.63,5.15a7.21,7.21,0,0,1-.78,5c-2.44,3.95-9.51,4-14,4.06s-17.33-3.94-19.85-4.46l-.7-28.87s20.08-6.06,25.38-5.39C475.2,310.4,483.82,313.25,485,316.54Z"
       style="fill:#f7a9a0"
       id="path238" />
    <path
       d="M483.35,321c-4.6-1.74-9.47-2-14.31-2.57a.08.08,0,1,0,0,.16c4.82.5,9.48,2,14.27,2.64A.12.12,0,0,0,483.35,321Z"
       style="fill:#263238"
       id="path239" />
    <path
       d="M482.3,329.55a12.78,12.78,0,0,0-3.32-.45c-1.19-.08-2.38-.13-3.57-.17-2.37-.07-4.76-.1-7.14-.05-.1,0-.12.17,0,.17q3.56.12,7.1.37c1.19.09,2.37.19,3.55.3a15.12,15.12,0,0,0,3.36.15A.17.17,0,0,0,482.3,329.55Z"
       style="fill:#263238"
       id="path240" />
    <path
       d="M480.59,339.52a8.93,8.93,0,0,0-3-.24l-3.26,0c-2.16-.05-4.33-.1-6.5-.22a.09.09,0,0,0,0,.17c2.2.13,4.4.3,6.6.42l3.25.15a8.35,8.35,0,0,0,3-.12A.06.06,0,0,0,480.59,339.52Z"
       style="fill:#263238"
       id="path241" />
    <path
       d="M417.86,298.93l-23.6.5s6.1-19.07,12.07-27,10.88-7,11.58,2.23S417.86,298.93,417.86,298.93Z"
       style="fill:#455a64"
       id="path242" />
    <path
       d="M397.19,293.94c1.51-.49,12.39-1.39,20.12-1,.11,0,.11.18,0,.18-.86.07-18.51,1.3-20.12,1.06C397.05,294.17,397.08,294,397.19,293.94Z"
       style="fill:#263238"
       id="path243" />
    <path
       d="M419.12,284.6a.06.06,0,0,0-.12,0,20.36,20.36,0,0,0-.47,2.45c0,.19-.06.38-.09.57-.1-2-.23-4-.36-5.95a.08.08,0,0,0-.15,0c.17,6.85-.25,10.24-.26,17.08l-2.05.2a.13.13,0,0,0,0,.25l2.31.05a.24.24,0,0,0,.24-.2c.67-4.44.51-5.51.33-10,.13-.65.27-1.3.37-2A15.77,15.77,0,0,0,419.12,284.6Z"
       style="fill:#263238"
       id="path244" />
    <path
       d="M426.9,272.32c-3.32.42-11.52-3.92-13.34-8.79-.12-.34.83-3.53,1.8-7.47.58-2.39,1.16-5.07,1.52-7.55.07-.51,15,6,15,6a39.83,39.83,0,0,0-2.89,9.31,6,6,0,0,0,0,1,1,1,0,0,1,0,.17C429,267,430.45,271.87,426.9,272.32Z"
       style="fill:#f7a9a0"
       id="path245" />
    <path
       d="M429,264.89c0,.05,0,.11,0,.17a9.46,9.46,0,0,1-1.61-.15c-9.13-1.53-9.88-13.34-9.93-16.32,2.71.8,14.47,6,14.47,6a39.83,39.83,0,0,0-2.89,9.31A5.13,5.13,0,0,0,429,264.89Z"
       style="fill:#263238"
       id="path246" />
    <path
       d="M436.09,226.19s5.26,2.25,6.18,7.63-.37,11-.83,11.27S436.09,226.19,436.09,226.19Z"
       style="fill:#263238"
       id="path247" />
    <path
       d="M415.35,232.36c-1.68,5.58,1.35,21.67,5.33,25.25,5.78,5.17,15.2,5.62,19.58-1.31,4.26-6.72-.06-27.62-4.5-30.86C429.21,220.66,417.82,224.11,415.35,232.36Z"
       style="fill:#f7a9a0"
       id="path248" />
    <path
       d="M431.43,242.09s-.07.06-.06.11c.23,1.08.31,2.35-.6,2.89,0,0,0,.07,0,.06C432,244.76,431.83,243.07,431.43,242.09Z"
       style="fill:#263238"
       id="path249" />
    <path
       d="M430.26,241.13c-1.77.19-1.27,3.71.37,3.54S431.74,241,430.26,241.13Z"
       style="fill:#263238"
       id="path250" />
    <path
       d="M437.46,241.19s.09,0,.09.09c.12,1.1.45,2.33,1.49,2.55,0,0,0,.07,0,.07C437.81,243.9,437.39,242.25,437.46,241.19Z"
       style="fill:#263238"
       id="path251" />
    <path
       d="M438.27,239.92c1.73-.39,2.38,3.11.77,3.47S436.81,240.24,438.27,239.92Z"
       style="fill:#263238"
       id="path252" />
    <path
       d="M428.64,239.72a13.24,13.24,0,0,0,1.29-.68,2.28,2.28,0,0,0,1.19-.94.73.73,0,0,0-.25-.88,1.86,1.86,0,0,0-1.89.07,2.75,2.75,0,0,0-1.39,1.4A.8.8,0,0,0,428.64,239.72Z"
       style="fill:#263238"
       id="path253" />
    <path
       d="M439.38,238a14.51,14.51,0,0,1-1.46-.17,2.35,2.35,0,0,1-1.45-.45.75.75,0,0,1-.08-.91,1.85,1.85,0,0,1,1.79-.61,2.7,2.7,0,0,1,1.8.8A.8.8,0,0,1,439.38,238Z"
       style="fill:#263238"
       id="path254" />
    <path
       d="M431.55,252.2c.3.22.61.53,1,.51a3,3,0,0,0,1.13-.45s.08,0,.06.05a1.48,1.48,0,0,1-1.3.79,1.16,1.16,0,0,1-1-.84C431.43,252.2,431.51,252.17,431.55,252.2Z"
       style="fill:#263238"
       id="path255" />
    <path
       d="M432.23,248.76a3.73,3.73,0,0,0,2.72,1.3,4.36,4.36,0,0,0,1.34-.13.92.92,0,0,0,.25-.06l.24-.07a.27.27,0,0,0,.18-.28h0a.45.45,0,0,0,0-.11h0v-.1c-.1-.84-.36-2.11-.36-2.11.33.11,2,.59,1.9.15a55.68,55.68,0,0,0-3-11,.1.1,0,0,0-.19.06c.57,3.49,1.75,6.86,2.38,10.36a6.61,6.61,0,0,0-1.83-.29c-.11.06.55,2.44.57,2.83v0a5.23,5.23,0,0,1-4-.65C432.23,248.6,432.15,248.69,432.23,248.76Z"
       style="fill:#263238"
       id="path256" />
    <path
       d="M435.74,249.58a4.55,4.55,0,0,1-1.57,1.62,2,2,0,0,1-1.2.25c-.9-.11-1-.9-1-1.61a5,5,0,0,1,.24-1.11A5.83,5.83,0,0,0,435.74,249.58Z"
       style="fill:#263238"
       id="path257" />
    <path
       d="M434.17,251.2a2,2,0,0,1-1.2.25c-.9-.11-1-.9-1-1.61A2.07,2.07,0,0,1,434.17,251.2Z"
       style="fill:#ff9bbc"
       id="path258" />
    <path
       d="M417,247c1.92.32,3.29-5.52,3.6-7.73.27-1.95.07-8,.11-8.41S429.5,235,434,233s7-6.58,6.8-8.54-6.64-6.11-11.67-5.69-10.92,7.68-10.92,7.68a23.42,23.42,0,0,0,1.81-3.26c-.11-.22-3.16,1.51-3.44,3.89,0,0,.25-3,0-3s-2.43,2.79-1.61,4.58c0,0-2.56,2.91-2.45,5.7S414.78,246.61,417,247Z"
       style="fill:#263238"
       id="path259" />
    <path
       d="M437.14,231.62a15.66,15.66,0,0,1-4.18,2.16,10.57,10.57,0,0,1-5.12-.12,15.92,15.92,0,0,1-4.75-2c-1.29-.8-2.48-1.81-3.83-2.5-.34-.17-.64.33-.41.59a16.85,16.85,0,0,0,9.27,5.06,9.66,9.66,0,0,0,9-3.15S437.16,231.6,437.14,231.62Z"
       style="fill:#263238"
       id="path260" />
    <path
       d="M419.49,245.65s-3.77-5.12-6.1-3.76.6,8.84,3.4,9.8a2.82,2.82,0,0,0,3.74-1.61Z"
       style="fill:#f7a9a0"
       id="path261" />
    <path
       d="M414.28,244s0,.06,0,.08c2,.74,3,2.51,3.8,4.37a1.57,1.57,0,0,0-2.35-.37s0,.11.06.1a1.72,1.72,0,0,1,1.92.56,8.29,8.29,0,0,1,1,1.52c.09.17.41.07.33-.13v0C419,247.62,417,244.19,414.28,244Z"
       style="fill:#263238"
       id="path262" />
    <path
       d="M518.25,262.91c-3.94,4.38-15.5,10.19-18.83,10.52s-13.86-19-12.48-22.14,15.78-16.87,21.71-17.85S522.33,258.36,518.25,262.91Z"
       style="fill:#f7a9a0"
       id="path263" />
    <rect
       x="376.51"
       y="288.57"
       width="209.8"
       height="4.47"
       transform="translate(971.48 14.84) rotate(119.48)"
       style="fill:#263238"
       id="rect263" />
    <path
       d="M436.92,398.29l-14,24.82H388.63l22.23-39.34a8.2,8.2,0,0,1,4.08-3.56l16.93-6.8.21.12,3.7,2.09,2.14,17.66A8.16,8.16,0,0,1,436.92,398.29Z"
       style="fill:#FFC727"
       id="path264" />
    <path
       d="M436.92,398.29l-14,24.82H388.63l22.23-39.34a8.2,8.2,0,0,1,4.08-3.56l16.93-6.8.21.12,3.7,2.09,2.14,17.66A8.16,8.16,0,0,1,436.92,398.29Z"
       style="opacity:0.2"
       id="path265" />
    <path
       d="M426.16,382.83c-1.72,3.46-3.53,6.86-5.36,10.26s-3.73,6.75-5.59,10.13-3.83,6.69-5.8,10l-3,5c-1,1.63-2,3.29-3.06,4.91.85-1.73,1.76-3.43,2.64-5.15l2.72-5.11c1.83-3.39,3.73-6.75,5.6-10.13s3.82-6.69,5.79-10S424.08,386.08,426.16,382.83Z"
       style="opacity:0.1"
       id="path266" />
    <path
       d="M430.36,385.2c-1.61,3.26-3.31,6.47-5,9.67s-3.48,6.37-5.26,9.53-3.59,6.31-5.45,9.42l-2.8,4.67c-1,1.54-1.9,3.1-2.9,4.62.8-1.63,1.65-3.24,2.47-4.86l2.56-4.8c1.7-3.21,3.48-6.37,5.25-9.54s3.6-6.31,5.46-9.42S428.39,388.26,430.36,385.2Z"
       style="opacity:0.1"
       id="path267" />
    <path
       d="M499.83,236.78c-.59,3.06,3.36,2,3.36,2s-5.31,2.9-4.69,6.3,5.33,1.81,5.67,1.71c-.28.16-5.09,3-4.12,6.3s5.51,1.2,5.8,1.06c-.22.23-3.05,3.32-1.73,5.7,2.27,4.07,9.72-3.64,13.5-3.55,0,0,.58,6.42.63,6.61,0,0,7.24-7.2,7.08-12.3a3.27,3.27,0,0,0-2.61-3.15s2.6-2.06,1.91-4.72c-.35-1.36-2.85-2-2.85-2a4.1,4.1,0,0,0,1.25-4.06c-.6-1.86-3-2.22-3-2.22s1.15-2.56-.08-4.26C517.47,226.75,501.08,230.21,499.83,236.78Z"
       style="fill:#f7a9a0"
       id="path268" />
    <path
       d="M519.64,234.33c.06,0,.06-.08,0-.09A29.1,29.1,0,0,0,503,238.81c-.15.11-.05.4.14.32A59.63,59.63,0,0,1,519.64,234.33Z"
       style="fill:#263238"
       id="path269" />
    <path
       d="M521.85,240.68c.07,0,0-.11,0-.12A27.21,27.21,0,0,0,504,246.68c-.17.15-.18.45,0,.29C507.54,244.35,516.48,241.34,521.85,240.68Z"
       style="fill:#263238"
       id="path270" />
    <path
       d="M505.61,254.57c5-4,10.69-5.94,16.87-7.13.08,0,0-.13,0-.13-3.18-.25-7,.92-10,2.08a16.77,16.77,0,0,0-7,5C505.39,254.48,505.5,254.65,505.61,254.57Z"
       style="fill:#263238"
       id="path271" />
    <path
       d="M503.19,238.78a19.2,19.2,0,0,0-2.7,2.2,6.36,6.36,0,0,0-1.81,2.81,2.15,2.15,0,0,0,.17,1.5,3.11,3.11,0,0,0,1.06,1.13,3.72,3.72,0,0,0,3,.2l2.44-.79-2,1.59a10.46,10.46,0,0,0-2.31,2.48,3.73,3.73,0,0,0-.67,3,2.11,2.11,0,0,0,2.09,1.69,6.45,6.45,0,0,0,3.12-.87l2.68-1.44-2,2.22a10.19,10.19,0,0,0-1.46,2.05,4.07,4.07,0,0,0-.55,2.28,2,2,0,0,0,1.24,1.61,4.28,4.28,0,0,0,2.38-.17,34.58,34.58,0,0,0,4.81-2.13c.79-.39,1.59-.79,2.41-1.15a6.26,6.26,0,0,1,2.57-.68,7,7,0,0,0-2.46.9c-.78.42-1.54.87-2.31,1.33a28.8,28.8,0,0,1-4.8,2.43,5,5,0,0,1-2.84.29,2.74,2.74,0,0,1-1.92-2.31,5,5,0,0,1,.61-2.84,10.93,10.93,0,0,1,1.58-2.3l.63.78a7.41,7.41,0,0,1-3.68,1.07,3.11,3.11,0,0,1-2-.72,3.49,3.49,0,0,1-1.07-1.77,4.72,4.72,0,0,1,.85-3.79,11.56,11.56,0,0,1,2.58-2.69l.43.8a4.44,4.44,0,0,1-3.74-.44,3.65,3.65,0,0,1-1.23-1.47,2.67,2.67,0,0,1-.14-1.92,6.49,6.49,0,0,1,2.14-2.89A15.41,15.41,0,0,1,503.19,238.78Z"
       style="fill:#263238"
       id="path272" />
    <path
       d="M489,248.52s8-23.67,15.75-16c2.29,2.28,9,14.38,6.58,15.77-3.11,1.8-6.84-2.73-8.74-6,0,0-1.6,8.44-7.8,9.07A6.19,6.19,0,0,1,489,248.52Z"
       style="fill:#f7a9a0"
       id="path273" />
    <path
       d="M504.05,231.93a12.72,12.72,0,0,1,2.62,2.76,28,28,0,0,1,2.08,3.22,43.6,43.6,0,0,1,3.22,7,7,7,0,0,1,.4,2,2.45,2.45,0,0,1-.19,1.14,1.71,1.71,0,0,1-.33.55,2.21,2.21,0,0,1-.49.4,3.27,3.27,0,0,1-2.21.34,6.25,6.25,0,0,1-1.93-.8,11.6,11.6,0,0,1-2.87-2.71,26.5,26.5,0,0,1-2.16-3.21l.82-.15a15.21,15.21,0,0,1-.92,2.79,13.7,13.7,0,0,1-1.41,2.54,10.27,10.27,0,0,1-2,2.1,7.63,7.63,0,0,1-2.56,1.29,8.63,8.63,0,0,0,2.36-1.53,10.12,10.12,0,0,0,1.74-2.17,13.72,13.72,0,0,0,1.21-2.5,15.08,15.08,0,0,0,.72-2.67l.18-1.12.63,1a29.09,29.09,0,0,0,2.17,3,11.37,11.37,0,0,0,2.66,2.44,3.13,3.13,0,0,0,3,.45c.77-.38.53-1.74.19-2.88a36.18,36.18,0,0,0-1.31-3.5c-.49-1.16-1-2.32-1.54-3.44A24.29,24.29,0,0,0,504.05,231.93Z"
       style="fill:#263238"
       id="path274" />
  </g>
  <g
     id="freepik--Water--inject-5">
    <path
       d="M77.09,389.81s25,45.87,83,58.23h0c.94.21,1.89.39,2.85.58,50.2,9.54,130.33-16.73,165.69-14.07a38.32,38.32,0,0,1,8.36,1.45C396,454.43,448.3,469.65,509,460.07a240.11,240.11,0,0,0,42-10.39h0c32.59-11.38,50.43-26.24,62-30.91,28.52-11.54,45.85,1.42,58.92,4h0a15.36,15.36,0,0,0,9-.5c8.4-3.42.88-22-13.16-28.38-20.56-9.38-45.08-1.57-45.26-3.94-.79-10,42.37-11.56,39.47-22.87s-31.36-15.75-60,.79c-20.08,11.59-32.56,32.33-50.79,41.79-5.56,2.89-22.1,7.62-23.15,6.83S541.12,411,544.54,407s-2.11-7.36-10-7.09-23.17,13.4-31.59,17.34-39.21-.52-37.36-6.09,30-9.41,46.05-14.94a18.21,18.21,0,0,0,4.87-2.48.85.85,0,0,0,.14-.1,1,1,0,0,1,.1-.07l.06,0h0c9.35-7.24,3.12-21.11-18.61-19.62-29.07,2-53.67,33.89-77.12,33.12-2.41-.09,22.53-11.24,21.62-19.6-.53-5-10.25-7.8-21.57-3.34s-24.25,19.26-42.67,25.57-82.64-8.93-82.64-8.93c16.85-5.53,27.64-17.88,17.9-24.18S284,387,248.47,396.77C160.17,421.12,100.34,407.41,77.09,389.81Z"
       style="fill:#fff"
       id="path275" />
    <path
       d="M671.88,422.76h0a17,17,0,0,0,7.16.06,7.94,7.94,0,0,0,3.26-1.45,5.79,5.79,0,0,0,1.8-3,13.38,13.38,0,0,0-.66-7.08,28,28,0,0,0-3.22-6.42,31.61,31.61,0,0,0-10.42-9.77,46,46,0,0,0-13.57-4.65,71.83,71.83,0,0,0-14.35-1.15c-4.8.05-9.59.53-14.38,1.05-1.2.12-2.39.26-3.61.27a5.84,5.84,0,0,1-.93-.08,1.11,1.11,0,0,1-.49-.19.58.58,0,0,1-.21-.53,3.6,3.6,0,0,1,.43-1.82,7.53,7.53,0,0,1,2.57-2.6,23.55,23.55,0,0,1,3.2-1.73,118.58,118.58,0,0,1,13.7-4.62,100.17,100.17,0,0,0,13.59-4.73,20.89,20.89,0,0,0,3.09-1.76,8,8,0,0,0,2.43-2.48,3.85,3.85,0,0,0,.26-3.28,7.94,7.94,0,0,0-1.73-3,15.59,15.59,0,0,0-5.81-4,31,31,0,0,0-6.88-1.92,53.22,53.22,0,0,0-14.32-.23,78.67,78.67,0,0,0-27.29,8.6c-8.56,4.38-16,10.54-23,17.19S569,397.15,561.47,403.18a59.58,59.58,0,0,1-12.26,7.72,119.57,119.57,0,0,1-13.74,4.57c-1.16.31-2.33.61-3.51.88a18.65,18.65,0,0,1-3.66.56l-.29,0c-.13-.07-.27,0-.43-.33a.57.57,0,0,1,.14-.56,1.74,1.74,0,0,1,.22-.19,6,6,0,0,1,.81-.51c.54-.3,1.09-.56,1.63-.82l3.29-1.51c2.18-1,4.36-2,6.44-3.18a23.78,23.78,0,0,0,3-1.92,5.2,5.2,0,0,0,2-2.62,2.28,2.28,0,0,0-.13-1.52,3.73,3.73,0,0,0-1.05-1.23,9.18,9.18,0,0,0-3.1-1.49,19.25,19.25,0,0,0-7-.6,21.75,21.75,0,0,0-6.64,2.37c-2.13,1.07-4.17,2.34-6.21,3.61-4.05,2.57-8,5.33-12.06,7.93a49.18,49.18,0,0,1-6.36,3.56,24.92,24.92,0,0,1-7.21,1.24,77.06,77.06,0,0,1-14.48-.83,66.87,66.87,0,0,1-7.12-1.41,25,25,0,0,1-6.83-2.66,5,5,0,0,1-1.43-1.33,2,2,0,0,1-.17-2.11,4.33,4.33,0,0,1,1.28-1.51,12.85,12.85,0,0,1,1.58-1,39.66,39.66,0,0,1,6.78-2.68c4.62-1.43,9.31-2.56,14-3.7s9.37-2.24,14-3.48c2.31-.62,4.62-1.28,6.9-2a20.85,20.85,0,0,0,6.39-3l0,0,.12-.09,0,0,.16-.12-.15.33h0v-.24l.46-.22h0l-.28.09a11.42,11.42,0,0,0,3-3.5,8.16,8.16,0,0,0,1-4.43c-.21-3.1-2.34-5.79-5-7.47a22.09,22.09,0,0,0-8.9-3.12,39.28,39.28,0,0,0-9.57-.14,56.28,56.28,0,0,0-18.41,5.38,151.2,151.2,0,0,0-16.87,9.48c-5.48,3.44-10.88,7-16.53,10.26s-11.57,6.15-18.06,7.36c-.81.12-1.61.3-2.44.35a20.06,20.06,0,0,1-2.46.14h-1.24a.32.32,0,0,1-.13,0,.68.68,0,0,1-.24-.08.56.56,0,0,1-.26-.48.83.83,0,0,1,.09-.29,1.7,1.7,0,0,1,.31-.33,5.31,5.31,0,0,1,.53-.38c.7-.47,1.39-.88,2.09-1.3,2.79-1.65,5.56-3.3,8.24-5.1a47.37,47.37,0,0,0,7.49-6,12.87,12.87,0,0,0,2.68-3.81,4.87,4.87,0,0,0,.38-2.17,4,4,0,0,0-.83-2,7.79,7.79,0,0,0-3.82-2.43,17.7,17.7,0,0,0-4.65-.8,28.53,28.53,0,0,0-9.42,1.37,34.6,34.6,0,0,0-8.62,4.15c-2.72,1.73-5.33,3.64-7.95,5.54a175.31,175.31,0,0,1-16.1,10.95,80.8,80.8,0,0,1-8.74,4.35l-2.29.87-1.14.43c-.39.13-.79.23-1.19.34a28.5,28.5,0,0,1-4.83.89,74,74,0,0,1-9.76.31c-3.25-.07-6.49-.29-9.72-.58-6.47-.57-12.9-1.44-19.3-2.43-12.81-2-25.53-4.54-38.17-7.46l-1.19-.27,1.16-.39a46.72,46.72,0,0,0,15.38-8.22,19.16,19.16,0,0,0,5.36-6.73,7.31,7.31,0,0,0,.51-4.14,6.43,6.43,0,0,0-2.16-3.53,8.73,8.73,0,0,0-3.71-2,12.48,12.48,0,0,0-4.27-.19,37.87,37.87,0,0,0-8.44,2.25c-5.5,2.07-10.85,4.56-16.25,6.91A244.64,244.64,0,0,1,249,396.92c-5.71,1.47-11.43,2.93-17.15,4.34l-8.65,1.83-4.33.91-2.16.45-2.18.37-8.72,1.45c-1.46.23-2.91.51-4.37.71l-4.39.53-8.78,1.07c-2.93.27-5.87.47-8.81.7l-4.41.34c-1.47.12-2.94.11-4.42.17l-8.83.28-8.85-.14c-2.95,0-5.89-.22-8.83-.41a184.44,184.44,0,0,1-34.89-5.37c-11.37-3-22.53-7.42-32.1-14.34,9.6,6.88,20.77,11.22,32.13,14.21a183.58,183.58,0,0,0,34.88,5.24c2.94.18,5.88.4,8.82.38l8.83.1,8.83-.31c1.47-.06,2.94-.07,4.41-.18l4.4-.36c2.93-.25,5.87-.45,8.8-.73l8.76-1.1,4.38-.55c1.46-.21,2.91-.49,4.36-.72l8.71-1.47,2.17-.37,2.16-.46,4.32-.91,8.64-1.83c5.71-1.42,11.42-2.89,17.12-4.36a244.56,244.56,0,0,0,33.1-12.2c5.4-2.35,10.74-4.85,16.27-6.94a38.91,38.91,0,0,1,8.59-2.3,13.12,13.12,0,0,1,4.5.2,9.32,9.32,0,0,1,4,2.15,8.3,8.3,0,0,1,1.5,1.73,6.6,6.6,0,0,1,.86,2.15,7.78,7.78,0,0,1-.54,4.5,19.71,19.71,0,0,1-5.53,7A47.43,47.43,0,0,1,296,401l0-.66c12.61,2.9,25.33,5.4,38.12,7.4,6.4,1,12.81,1.84,19.26,2.4,3.22.28,6.44.5,9.67.57a73.93,73.93,0,0,0,9.65-.32,28.74,28.74,0,0,0,4.71-.87c.38-.11.76-.21,1.14-.34l1.13-.42,2.25-.86a79.11,79.11,0,0,0,8.64-4.32,173.88,173.88,0,0,0,16-10.91c2.61-1.91,5.23-3.83,8-5.59a35.93,35.93,0,0,1,8.82-4.26,29.36,29.36,0,0,1,9.72-1.41,18.16,18.16,0,0,1,4.89.83,8.69,8.69,0,0,1,4.24,2.73,4.78,4.78,0,0,1,1,2.44,5.63,5.63,0,0,1-.43,2.58,13.8,13.8,0,0,1-2.86,4.1,48.19,48.19,0,0,1-7.63,6.14c-2.7,1.82-5.5,3.48-8.28,5.14-.69.41-1.39.83-2,1.26l-.45.33-.11.11s.05-.1,0-.16a.42.42,0,0,0-.17-.35c-.1-.05-.11,0-.1-.05h1.21a19,19,0,0,0,2.38-.14c.79,0,1.58-.22,2.36-.34,6.31-1.18,12.17-4.1,17.76-7.27s11-6.81,16.47-10.26a147.28,147.28,0,0,1,17-9.55,71.35,71.35,0,0,1,9.12-3.53,49.62,49.62,0,0,1,9.6-1.91,39.77,39.77,0,0,1,9.81.16,23,23,0,0,1,9.28,3.28,13.1,13.1,0,0,1,3.63,3.45,9.35,9.35,0,0,1,1.73,4.73,9,9,0,0,1-1.08,4.93,12.1,12.1,0,0,1-3.28,3.79l-.28.1h0l.46-.46h0v.23l-.15.11L517,394l-.05,0-.16.11,0,0a21.65,21.65,0,0,1-6.65,3.09c-2.3.74-4.62,1.4-6.95,2-4.66,1.24-9.35,2.34-14,3.46s-9.36,2.26-13.93,3.67a39.35,39.35,0,0,0-6.63,2.6,5.84,5.84,0,0,0-2.5,2.14c-.52.86.36,1.78,1.3,2.39a24.06,24.06,0,0,0,6.57,2.55,67.26,67.26,0,0,0,7,1.41,76.36,76.36,0,0,0,14.32.84,24.12,24.12,0,0,0,7-1.18,49,49,0,0,0,6.23-3.48c4-2.58,8-5.34,12.07-7.92,2-1.27,4.11-2.55,6.28-3.64a22.27,22.27,0,0,1,6.89-2.43,20,20,0,0,1,7.3.62,10,10,0,0,1,3.35,1.64,4.46,4.46,0,0,1,1.26,1.49,3.09,3.09,0,0,1,.17,2,5.88,5.88,0,0,1-2.28,3,23.35,23.35,0,0,1-3.08,2c-2.12,1.18-4.31,2.2-6.5,3.2l-3.28,1.5c-.54.26-1.08.52-1.59.8a4.91,4.91,0,0,0-.72.44l-.12.11s0,0,0-.16,0-.09-.06-.1l.16,0a18.78,18.78,0,0,0,3.46-.54c1.17-.26,2.33-.56,3.49-.87a117.29,117.29,0,0,0,13.65-4.52,59,59,0,0,0,12.12-7.61c7.52-6,14.06-13.08,21.06-19.7s14.49-12.86,23.12-17.26a79.31,79.31,0,0,1,27.5-8.62,53.46,53.46,0,0,1,14.46.25,31.53,31.53,0,0,1,7,2,19.46,19.46,0,0,1,3.22,1.71,12.7,12.7,0,0,1,2.78,2.39,8.4,8.4,0,0,1,1.82,3.21,4.31,4.31,0,0,1-.31,3.67,8.31,8.31,0,0,1-2.57,2.64,21.27,21.27,0,0,1-3.18,1.8,100.72,100.72,0,0,1-13.67,4.7A117.75,117.75,0,0,0,628.62,384a22.66,22.66,0,0,0-3.15,1.69,7.36,7.36,0,0,0-2.47,2.46,3.29,3.29,0,0,0-.39,1.65c0,.18,0,.21.08.27a.81.81,0,0,0,.34.13,4.15,4.15,0,0,0,.87.07c1.19,0,2.39-.13,3.58-.24,4.78-.51,9.59-1,14.41-1a71.59,71.59,0,0,1,14.39,1.2,46.23,46.23,0,0,1,13.61,4.72,31.7,31.7,0,0,1,10.43,9.85,28.22,28.22,0,0,1,3.21,6.46,13.47,13.47,0,0,1,.63,7.11,5.79,5.79,0,0,1-1.83,3.06,8,8,0,0,1-3.28,1.45,17,17,0,0,1-7.16-.09h0Z"
       style="fill:#dbdbdb"
       id="path276" />
    <path
       d="M662.15,410.41a70,70,0,0,0-15.09-7.53,53.38,53.38,0,0,0-16.44-3.35,37.65,37.65,0,0,0-16.35,2.93A79.5,79.5,0,0,0,599.82,411c-4.57,3.28-8.9,6.89-13.22,10.52s-8.65,7.27-13.18,10.68a131.58,131.58,0,0,1-14.17,9.32,100.41,100.41,0,0,1-15.49,6.86A106.55,106.55,0,0,0,559,441.1a133.47,133.47,0,0,0,14-9.5c4.43-3.49,8.75-7.1,13-10.76s8.63-7.31,13.22-10.64a81.06,81.06,0,0,1,14.69-8.58,37.52,37.52,0,0,1,16.74-2.86,54.1,54.1,0,0,1,16.57,3.66,69.68,69.68,0,0,1,7.71,3.53A59.25,59.25,0,0,1,662.15,410.41Z"
       style="fill:#dbdbdb"
       id="path277" />
    <path
       d="M351.29,437.06c-12.53-5.06-25.19-9.95-38.38-12.83a105.46,105.46,0,0,0-20-2.6,83.22,83.22,0,0,0-20,2.24c-6.59,1.4-13.1,3.21-19.56,5.19s-12.87,4.09-19.31,6.16-12.86,4.18-19.36,6.06-13.09,3.56-19.84,4.13c6.73-.73,13.25-2.64,19.7-4.6s12.85-4.16,19.26-6.32,12.82-4.3,19.29-6.3,13-3.86,19.61-5.3a83.8,83.8,0,0,1,20.22-2.16,100.46,100.46,0,0,1,20.14,2.75,169.91,169.91,0,0,1,19.43,5.89c3.18,1.17,6.32,2.43,9.44,3.73S348.16,435.79,351.29,437.06Z"
       style="fill:#dbdbdb"
       id="path278" />
    <path
       d="M417.38,450.73a312.13,312.13,0,0,1-38.15-9,315.72,315.72,0,0,1-36.8-13.57c-6-2.68-11.74-5.79-17.84-8a79.86,79.86,0,0,0-18.91-4.52,75.92,75.92,0,0,0-19.46.35,82.84,82.84,0,0,0-9.57,2,84.83,84.83,0,0,0-9.26,3.15,76,76,0,0,1,57.51-1.8c3.13,1,6.07,2.5,9.08,3.81s5.88,2.82,8.86,4.13A332.43,332.43,0,0,0,379.46,441c6.22,2,12.5,3.73,18.82,5.36S411,449.52,417.38,450.73Z"
       style="fill:#dbdbdb"
       id="path279" />
    <path
       d="M654.46,371.78a12,12,0,0,1-2.56.79c-.87.18-1.75.36-2.62.52-1.76.31-3.5.64-5.24,1a65.82,65.82,0,0,0-10.17,2.95,49.11,49.11,0,0,0-9.36,4.84l-2.13,1.57c-.73.51-1.34,1.16-2,1.73A46.12,46.12,0,0,0,616.6,389a35.28,35.28,0,0,1,7.46-7.68,41.07,41.07,0,0,1,9.45-5.15,53,53,0,0,1,10.39-2.77c1.76-.29,3.53-.53,5.3-.74A29.87,29.87,0,0,0,654.46,371.78Z"
       style="fill:#dbdbdb"
       id="path280" />
    <path
       d="M208,410.73a171,171,0,0,1-28.44,4.88,201.89,201.89,0,0,1-28.89.57c-4.82-.16-9.61-.79-14.4-1.26l-7.15-1.11c-1.19-.2-2.38-.35-3.56-.58l-3.53-.79A163.81,163.81,0,0,1,94.41,404l6.85,2.27,3.42,1.15c1.14.36,2.32.62,3.48.94l7,1.86c2.34.55,4.7,1,7,1.47l3.53.71c1.18.22,2.37.37,3.55.56l7.12,1.06c4.78.44,9.54,1,14.34,1.16a212.5,212.5,0,0,0,28.77-.33c2.4-.18,4.78-.44,7.18-.65s4.76-.58,7.14-.91C198.55,412.63,203.29,411.8,208,410.73Z"
       style="fill:#dbdbdb"
       id="path281" />
    <path
       d="M513.57,379.82a43.5,43.5,0,0,0-10.83-1.25A46.66,46.66,0,0,0,492,379.83a47.35,47.35,0,0,0-10.17,3.73c-3.25,1.6-6.35,3.52-9.45,5.44-6.2,3.83-12.28,7.93-18.7,11.47a86.66,86.66,0,0,1-9.95,4.67A41.8,41.8,0,0,1,433,407.67c7.28-1,13.93-4.29,20.24-7.87s12.37-7.73,18.55-11.64c3.13-1.91,6.26-3.82,9.58-5.42a44.57,44.57,0,0,1,10.41-3.66A44,44,0,0,1,513.57,379.82Z"
       style="fill:#dbdbdb"
       id="path282" />
    <path
       d="M576,394.44a53.52,53.52,0,0,1-9.39,10.16,63.54,63.54,0,0,1-11.5,7.79,60.82,60.82,0,0,1-12.92,5.09l-1.68.45-.84.22-.85.16-3.42.62a32.89,32.89,0,0,1-3.44.38q-1.73.15-3.45.27A81.64,81.64,0,0,0,542,416.74l1.64-.51.82-.24.8-.3,3.21-1.22c1.08-.41,2.09-1,3.13-1.41l1.56-.73c.51-.26,1-.55,1.5-.82,1-.55,2-1,3-1.65l2.92-1.8,2.81-2c.93-.67,1.82-1.4,2.74-2.08s1.76-1.47,2.64-2.2,1.7-1.55,2.54-2.33A57.44,57.44,0,0,0,576,394.44Z"
       style="fill:#dbdbdb"
       id="path283" />
    <path
       d="M412.05,393a86.26,86.26,0,0,1-16.88,14.3,65.11,65.11,0,0,1-9.85,5.18,46.09,46.09,0,0,1-10.78,2.91,96,96,0,0,1-11.11.49c-3.7-.1-7.4-.3-11.08-.72a154.21,154.21,0,0,1-21.78-4c3.61.73,7.24,1.38,10.89,1.9s7.3,1,11,1.31,7.34.51,11,.57a93.59,93.59,0,0,0,11-.58A44.67,44.67,0,0,0,385,411.62a72.45,72.45,0,0,0,9.78-5,92.49,92.49,0,0,0,9-6.35A95.72,95.72,0,0,0,412.05,393Z"
       style="fill:#dbdbdb"
       id="path284" />
    <path
       d="M371.64,432c.68-2,15.22-3.93,17.81.58s-4.77,7.27-8.91,6.43S370.55,435.17,371.64,432Z"
       style="fill:#FFC727"
       id="path285" />
    <path
       d="M369.64,423.59c2.9.3,2.76,5.59-2.5,5.1S365,423.1,369.64,423.59Z"
       style="fill:#FFC727"
       id="path286" />
    <path
       d="M232,413.24c1.52.89.14,3.77-2.64,2.2S229.52,411.83,232,413.24Z"
       style="fill:#FFC727"
       id="path287" />
    <path
       d="M429.86,385.93c1.52.88.14,3.76-2.64,2.19S427.42,384.51,429.86,385.93Z"
       style="fill:#FFC727"
       id="path288" />
    <path
       d="M218.93,409.27c2.22-1,4.47-.63,4.83.78s-.78,3.16-3.45,4.67-6.75,1.69-7.41.89S216.79,410.19,218.93,409.27Z"
       style="fill:#FFC727"
       id="path289" />
  </g>
</svg>
`,w2=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 750 500"
   version="1.1"
   id="svg289"
   sodipodi:docname="Dragon Boat Festival-cuate-red.svg"
   inkscape:version="1.4.4 (dcaf3e7, 2026-05-05)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs289" />
  <sodipodi:namedview
     id="namedview289"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="2.434"
     inkscape:cx="375.10271"
     inkscape:cy="250"
     inkscape:window-width="2560"
     inkscape:window-height="1494"
     inkscape:window-x="-11"
     inkscape:window-y="-11"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg289" />
  <g
     id="freepik--dragon-boat--inject-5">
    <path
       d="M98.34,268.57s14.13-21.5,13.81-33.3-7.44-19.42-8.52-28.26.61-17-.76-17.27c-3.07-.6-11.25,11.79-11.57,20.78a55.5,55.5,0,0,1-5.64-18.19c-1.91-14.06,2.71-26.09-.53-29.06-2.66-2.44-22.61,21.92-22.32,46.55,0,0-1.84-13.62-4.6-14.45s-8.45,31.94,4.48,55.27C70.28,264.33,98.34,268.57,98.34,268.57Z"
       style="fill:#37474f"
       id="path8" />
    <path
       d="M94.8,266.37s9.77-14.87,9.54-23-5.14-13.42-5.89-19.53.43-11.76-.52-11.94c-2.12-.42-5.93,8-6.15,14.18a42.44,42.44,0,0,1-8.43-12.6c-3.69-9.27-3.68-20.48-5.92-22.54-1.84-1.68-7.4,17.81-7.2,34.84,0,0-1.27-9.42-3.18-10s-5.84,22.08,3.1,38.21C75.39,263.43,94.8,266.37,94.8,266.37Z"
       style="fill:#455a64"
       id="path9" />
    <path
       d="M526.71,195.44s-1.22,13.25-3.92,19.68-7.45,12.24-4.2,12.82,8.12-4.52,8.12-4.52a114.12,114.12,0,0,1-3.25,16.82c-2.78,10.17-7.35,16.24-4.05,16.82s10.42-5.95,12.05-9.89a144.26,144.26,0,0,1-.88,20.41c-1.39,10.68-6.42,21.39-3.06,21.85s9.4-8.58,11.72-15.2c0,0,.84,14.32-1.7,23.21-3.09,10.83-9.44,17.05-8.86,19.61s8.4,0,14.62-6.31c0,0-1.43,13.62-19.6,17.1-12.44,2.38-21.24,1.51-22.86,3s34,14.62,48.15-2.55S526.71,195.44,526.71,195.44Z"
       style="fill:#455a64"
       id="path10" />
    <path
       d="M105.12,336.12c16.1,47.64,52,81.68,73,81.68H472.72c44,0,96.72,1.41,127.19,1.37,14.56,0,24-.37,25-1.37,42.7-42.7,5.81-111.77-9.38-136.14-19.67-31.56-22.16-86.22-22.16-86.22H526.71a540.69,540.69,0,0,0,19,90.4c8.59,27.84,3.71,45-20,45H205.06c-24.13,0-42.69,0-63.58-13S88.58,238,85.33,240.73,89,288.46,105.12,336.12Z"
       style="fill:#FFC727"
       id="path11" />
    <path
       d="M105.12,336.12c16.1,47.64,52,81.68,73,81.68H472.72c44,0,96.72,1.41,127.19,1.37,14.56,0,24-.37,25-1.37,42.7-42.7,5.81-111.77-9.38-136.14-19.67-31.56-22.16-86.22-22.16-86.22H526.71a540.69,540.69,0,0,0,19,90.4c8.59,27.84,3.71,45-20,45H205.06c-24.13,0-42.69,0-63.58-13S88.58,238,85.33,240.73,89,288.46,105.12,336.12Z"
       style="fill:#FFC727"
       id="path12" />
    <path
       d="M635.76,403.74c-.57,1-1.19,2-1.84,3a67.66,67.66,0,0,1-9,11.05c-1,1-10.47,1.35-25,1.37-9.74,0-21.76-.12-35-.32l-4-.05c-17.5-.26-36.94-.6-56.13-.81l-3.55,0c-9.69-.1-19.27-.16-28.47-.16H178.14c-6.18,0-13.64-2.94-21.5-8.3l-1.31-.9-1.34-1a105.24,105.24,0,0,1-12.49-11,155.79,155.79,0,0,1-26.73-37.68c-.49-.95-1-1.91-1.45-2.88a167.83,167.83,0,0,1-8.2-19.92c-.46-1.35-.91-2.71-1.35-4.05q-.78-2.42-1.55-4.8c-2.48-7.84-4.7-15.53-6.67-22.9-.27-1-.52-2-.78-2.94-1.63-6.27-3.08-12.28-4.33-17.92l-.73-3.35c-4.53-21.25-6.12-36.56-4.59-39.16h0a.71.71,0,0,1,.21-.26c.19-.15.47-.08.84.2,1.82,1.38,5.75,7.75,10.89,16.33.49.8,1,1.63,1.48,2.47,2.3,3.83,4.8,8,7.43,12.34l1.53,2.49h0c2.59,4.2,5.29,8.5,8,12.68l1.39,2.12c6.18,9.26,12.55,17.82,18.43,23.53,1,1,2,1.91,3,2.72.21.17.41.34.61.48a25.42,25.42,0,0,0,2.48,1.76l.18.11a79.33,79.33,0,0,0,18.68,8.57c1,.32,2.06.61,3.09.88,10.08,2.67,20.28,3.26,31.6,3.39,1.16,0,2.33,0,3.51,0H525.78c16.15,0,23.55-8,23.89-21.89h0a44.73,44.73,0,0,0-.13-4.86c-.12-1.42-.29-2.9-.52-4.42-.16-1-.34-2.1-.56-3.18h0a101.72,101.72,0,0,0-2.72-10.64c-1.46-4.74-2.92-9.82-4.35-15.15-.22-.81-.44-1.62-.65-2.43-2.3-8.69-4.51-18-6.51-27.5-.47-2.25-.94-4.5-1.39-6.77h0q-.6-3-1.18-6.11c-.14-.79-.29-1.58-.43-2.36-1.52-8.36-2.85-16.71-3.88-24.82h0c-.17-1.27-.32-2.53-.47-3.78h0c-.06-.49-.11-1-.17-1.45H593.4s.32,7.16,1.67,17.8c.12.91.24,1.84.37,2.8,1,7.54,2.55,16.51,4.77,25.78l.6,2.45a171.82,171.82,0,0,0,6.52,20.66c.67,1.73,1.39,3.44,2.13,5.11a94.45,94.45,0,0,0,6.1,11.62c1.46,2.34,3.12,5.1,4.9,8.21.6,1.06,1.22,2.17,1.85,3.32a206.68,206.68,0,0,1,17.26,40.49c.3,1,.59,2.06.87,3.1,0,.12.07.25.1.38v.08c.79,2.9,1.49,5.78,2.09,8.75h0C646.52,365.41,646,385.92,635.76,403.74Z"
       style="fill:#aa0000"
       id="path13" />
    <g
       style="opacity:0.1"
       id="g41">
      <path
         d="M550.9,195.44h2.6c-1.57,4.38-4.35,8.51-9.24,10a12.3,12.3,0,0,1-2.19.45l-.4,0c-5.78.54-10.64-2-14.32-5.19h0c-.17-1.27-.32-2.53-.47-3.78,3.56,3.68,8.73,7.29,14.92,6.57C546.52,202.92,549.28,199.42,550.9,195.44Z"
         style="fill:#fff"
         id="path14" />
      <path
         d="M585.6,195.44a13.87,13.87,0,0,1-5.23,3.29,14.7,14.7,0,0,1-1.55.46c-.47.11-.94.2-1.4.26-4.95.69-9.46-1.25-13.21-4h4.56a13.63,13.63,0,0,0,9.42,1.44l.17,0a11.21,11.21,0,0,0,3.33-1.4Z"
         style="fill:#fff"
         id="path15" />
      <path
         d="M595.07,213.24c.12.91.24,1.84.37,2.8-7.17-2.92-12.68-9.54-15.6-13.74-.14,4.57-1.1,11.71-5.26,16.56a14.08,14.08,0,0,1-7,4.48,16.39,16.39,0,0,1-2.6.52c-.39,0-.78.08-1.18.1-11.13.57-17.19-7.71-20-13.48-.75,6-3.36,15-12.11,17.39-.14-.79-.29-1.58-.43-2.36,9.8-3,10.46-16,10.44-19.63,0-.6,0-.94,0-1a1.2,1.2,0,0,1,2.35-.38s.09.33.26.87a31.9,31.9,0,0,0,4,8.09c4,5.7,9.18,8.42,15.4,8.08a12.39,12.39,0,0,0,9.1-4.26c4.64-5.41,4.79-14.5,4.66-17.86,0-.81-.07-1.28-.07-1.31a1.21,1.21,0,0,1,.84-1.26l.17,0a1.2,1.2,0,0,1,1.23.61s.28.5.78,1.28C582.3,201.8,587.74,209.62,595.07,213.24Z"
         style="fill:#fff"
         id="path16" />
      <path
         d="M600.21,241.82l.6,2.45a18.41,18.41,0,0,1-3.76,1.72c-.62.21-1.25.39-1.91.55l-.46.11c-9.28,2.08-17.36-1.32-23.36-9.87a42.91,42.91,0,0,1-4.44-8.21c-1,6.74-4.27,17.29-14.21,19.62a17.24,17.24,0,0,1-2.37.39h-.14c-7.26.63-12.42-3.24-15.93-7.83-.47-2.25-.94-4.5-1.39-6.77,2.89,5.84,8.3,13,17.24,12.21,13.09-1.24,14.69-18,14.89-22.34,0-.63,0-1,0-1a1.2,1.2,0,0,1,2.36-.3l.22.81a43.49,43.49,0,0,0,5.75,12.11c5.56,7.89,12.71,10.84,21.26,8.77A17.58,17.58,0,0,0,600.21,241.82Z"
         style="fill:#fff"
         id="path17" />
      <path
         d="M609.46,270a35,35,0,0,1-8.8-9.93,55.09,55.09,0,0,1-4.4-9,54.45,54.45,0,0,1-3.23,9.91c-3.75,8.4-9.15,13.18-15.72,14a16.73,16.73,0,0,1-2,.12c-.32,0-.63,0-.95,0h-.12c-7.88-.47-14.53-5.32-19.25-14a48.36,48.36,0,0,1-3.24-7.48c-1.21,5.37-4,13.23-10.34,17-.22-.81-.44-1.62-.65-2.43,7.48-5,9.12-16.81,9.42-19.67,0-.39.05-.61.05-.63a1.2,1.2,0,0,1,1.12-1.12,1.21,1.21,0,0,1,1.26,1s0,.15.08.38c.67,3.06,5.84,23.61,21.69,24.57s19.81-22.69,20.32-26.11c0-.25.06-.39.06-.41a1.19,1.19,0,0,1,1.1-1.05,1.16,1.16,0,0,1,1.21.8l0,.09c0,.17,3,11.16,10.25,18.85C608,266.66,608.72,268.37,609.46,270Z"
         style="fill:#fff"
         id="path18" />
      <path
         d="M139.6,320.26a1.17,1.17,0,0,1-.42.73.86.86,0,0,1-.2.13,1.2,1.2,0,0,1-1.19,0s-.74-.45-1.93-1c-5-2.5-18.73-7.95-27.65,1.43a17.05,17.05,0,0,0-4.44,10.59q-.78-2.42-1.55-4.8a18.18,18.18,0,0,1,4.26-7.43,19.6,19.6,0,0,1,3.87-3.16,18,18,0,0,1,2.2-1.17c8.88-3.94,19.13-.11,23.86,2.15a46.72,46.72,0,0,1-1-4.76c1,1,2,1.91,3,2.72.07.31.14.61.22.89.48,1.91.91,3.09.93,3.14A1.16,1.16,0,0,1,139.6,320.26Z"
         style="fill:#fff"
         id="path19" />
      <path
         d="M142.29,357.79a1.59,1.59,0,0,1-2.12,2.29c-.09-.06-.45-.27-1-.56-3.54-1.85-15.32-7.11-24.38-.6-.49-.95-1-1.91-1.45-2.88,8.1-5.49,17.9-3.17,23.65-1-3.45-6.55-8.32-19.16-3.11-31.23a26.58,26.58,0,0,1,2-3.8,21.75,21.75,0,0,1,2.75-3.54c.12-.14.26-.28.39-.41a25.42,25.42,0,0,0,2.48,1.76l.18.11a19.11,19.11,0,0,0-2.06,2.29c-.21.27-.42.56-.62.86a23.23,23.23,0,0,0-2.19,4c-5.51,12.75,1.86,26.76,4.57,31.22C141.91,357.25,142.27,357.76,142.29,357.79Z"
         style="fill:#fff"
         id="path20" />
      <path
         d="M622.31,293.19a24.12,24.12,0,0,1-4.83,7.63,18.71,18.71,0,0,1-10.5,5.53,22.62,22.62,0,0,1-3.35.34c-.3,0-.6,0-.9,0h-.62C586,306.34,578.84,291,576,281.81c-1.19,4.37-3.51,9.92-8,13.82a19.4,19.4,0,0,1-11.88,4.7,25.85,25.85,0,0,1-3.72-.06l-.24,0a17.88,17.88,0,0,1-3.15-.57c-.16-1-.34-2.1-.56-3.18a16,16,0,0,0,4.2.92c5.39.44,9.92-.87,13.46-3.93,6.65-5.77,8-16.08,8.22-18.33,0-.27,0-.43,0-.44a1.43,1.43,0,0,1,2.85-.12s0,.18.08.47a53.79,53.79,0,0,0,4.7,14.2c4.82,9.48,11.6,14.38,20.16,14.57,5.56.1,9.93-1.56,13.24-5a23,23,0,0,0,5.05-9C621.06,290.93,621.68,292,622.31,293.19Z"
         style="fill:#fff"
         id="path21" />
      <path
         d="M639.57,333.68c.3,1,.59,2.06.87,3.1-.49.08-1,.14-1.49.18-.84.07-1.67.1-2.5.1-9.87,0-18.52-5-25.14-14.47a56,56,0,0,1-5.82-10.87c-2.85,8.47-10.5,24.74-27.21,24.74h-.58c-.83,0-1.65-.07-2.44-.15a26.91,26.91,0,0,1-3.21-.49,21.53,21.53,0,0,1-12.14-7.11c-6-7-7.15-17.14-7.18-23.59-.86,1.19-1.88,2.5-3.06,3.83a44.73,44.73,0,0,0-.13-4.86c1.12-1.5,2-2.84,2.63-3.85s1-1.8,1.06-1.84a1.58,1.58,0,0,1,1.89-.8,1.6,1.6,0,0,1,1.11,1.73s-.05.38-.1,1c-.33,3.85-1,17.9,6.21,26.31,3.64,4.25,8.83,6.48,15.43,6.63h.49c18.23,0,24.44-22.63,25.37-26.58.09-.36.14-.56.14-.58a1.6,1.6,0,0,1,3.11-.1s0,.13.1.34c1,3.29,9.46,29.28,31.71,27.43C639,333.76,639.28,333.72,639.57,333.68Z"
         style="fill:#fff"
         id="path22" />
      <path
         d="M172.43,349.1a1.59,1.59,0,0,1,.06,1.75,1.61,1.61,0,0,1-1.36.76,1.53,1.53,0,0,1-.47-.07c-.11,0-11.31-3.36-20.62,1.65-5.26,2.83-9,7.8-11.06,14.79-6.08,20.47,13.23,36.38,15.69,38.31l.25.19a1.59,1.59,0,0,1,.44,2.08l0,0-1.34-1a105.24,105.24,0,0,1-12.49-11c-5-7.46-9.07-17.77-5.58-29.53a33.41,33.41,0,0,1,3.23-7.55,25.27,25.27,0,0,1,2.21-3.18,23.09,23.09,0,0,1,7.19-6c6.7-3.6,14-3.43,18.6-2.8-3.08-4.34-7.48-12.21-6.81-21,1,.32,2.06.61,3.09.88-.6,11.45,8.35,21,8.85,21.49A.9.9,0,0,1,172.43,349.1Z"
         style="fill:#fff"
         id="path23" />
      <path
         d="M202.74,338a1.59,1.59,0,0,1-1.46,2.58l-.78-.09c-4.09-.39-22.33-1.19-27.37,14.89C166.8,375.56,185,389.2,187.8,391.18a3.52,3.52,0,0,0,.37.26,1.6,1.6,0,0,1-1,2.93s-.45,0-1.21-.06a43.16,43.16,0,0,0-13.28,1.76c-7.79,2.39-13.17,6.9-16,13.43l-1.31-.9-1.34-1c.21-.45.44-.9.68-1.34,3.44-6.36,9.26-10.9,17.16-13.3a45,45,0,0,1,10.8-1.83c-6.42-5.6-18.18-18.79-12.55-36.76a25.3,25.3,0,0,1,1-2.79,25.65,25.65,0,0,1,1.3-2.51c6.52-10.85,19.66-12,25.88-11.92a41.1,41.1,0,0,1-3.28-6.37c1.16,0,2.33,0,3.51,0a38.29,38.29,0,0,0,3.33,5.93C202.38,337.52,202.72,337.94,202.74,338Z"
         style="fill:#fff"
         id="path24" />
      <path
         d="M640.54,337.24c.79,2.9,1.49,5.78,2.09,8.75h0c-1.33,6.3-4.21,14.45-10.45,20.58-5.84,5.74-13.55,8.65-22.95,8.65h-1c-1.35,0-2.64-.12-3.89-.26a36.59,36.59,0,0,1-4.42-.78c-20-4.78-25.75-24.78-27.31-33.61-5.34,7.14-19.12,22.32-36.93,17.45-.65-.17-1.3-.38-2-.61s-1.49-.56-2.19-.89c-11.38-5.1-14.79-16.28-15.48-25.67h3.13c0,.63.1,1.26.18,1.9,1.34,11.24,6.53,18.53,15.42,21.65,20.08,7.07,35.22-15.37,37.26-18.58l.24-.38a1.59,1.59,0,0,1,3,.72,1,1,0,0,0,0,.15c.19,2.83,3.07,35.08,33,35.72,9,.19,16.23-2.4,21.63-7.71C639.06,355.36,640.36,341.08,640.54,337.24Z"
         style="fill:#fff"
         id="path25" />
      <path
         d="M635.76,403.74c-.57,1-1.19,2-1.84,3-18.87-2.28-28.82-21.71-32.09-29.53a59.68,59.68,0,0,1-10.1,12.35c-10,9.19-21.4,12.3-33.13,9l-1-.29a40.23,40.23,0,0,1-4-1.47c-9.87-4.27-16.58-12.27-19.53-23.34a50.83,50.83,0,0,1-1.65-13.4,39.05,39.05,0,0,1-22.87,9.35,33.46,33.46,0,0,1-16.05-2.77,30.12,30.12,0,0,1-8.17-5.38c-6.42-5.92-9.16-15-7.91-26.18.17-1.49.4-2.92.65-4.27h3.28c-1.69,8.4-2.15,20.45,6.14,28.1a27.81,27.81,0,0,0,5,3.69c.42.24.85.47,1.27.68h0a30.05,30.05,0,0,0,15.54,2.93c8.51-.57,16.82-4.24,22.21-9.74.53-.53,1-1.07,1.49-1.63a1.6,1.6,0,0,1,2.81,1.23s-.09.72-.15,1.9a48.38,48.38,0,0,0,1.49,14.76c2.91,10.84,9.47,18.18,19.5,21.85.43.16.88.32,1.33.46l.53.17c23.23,7.18,38-15.18,41.39-21.08.48-.85.74-1.35.76-1.39a1.6,1.6,0,0,1,2.95.23s.24.74.71,1.94a63.13,63.13,0,0,0,8.58,15.3C619.49,398.67,627.14,403.19,635.76,403.74Z"
         style="fill:#fff"
         id="path26" />
      <path
         d="M564.87,418.85l-4-.05a46.76,46.76,0,0,1-5.65-18.74,68,68,0,0,1-14.41,8.8c-12.7,5.65-24.85,5.62-35.33-.05-.74-.4-1.48-.83-2.21-1.29s-1.56-1-2.28-1.57c-15.54-11.6-13.21-30.39-11.33-38.39-7.75,3.21-26.54,9-40.38-2.57-.7-.59-1.39-1.23-2.07-1.91a27.24,27.24,0,0,1-1.86-2.06c-8-9.64-7.55-21.52-5.61-30.17h3.54c-.32,1.31-.6,2.72-.82,4.18-1.57,10.54.86,19.15,7.24,25.58,12.88,13,32.14,6.52,39.16,3.49,1.66-.71,2.63-1.23,2.68-1.26a1.76,1.76,0,0,1,1-.2,1.7,1.7,0,0,1,1,.41,1.6,1.6,0,0,1,.25.27h0A1.76,1.76,0,0,1,494,365s-.23.63-.53,1.69A46.45,46.45,0,0,0,491.76,380c.27,10.83,4.78,19.08,13.39,24.52l.06,0c20.22,12.71,41.82-2.43,48.39-7.76,1.26-1,2-1.69,2-1.73a1.7,1.7,0,0,1,1.07-.48,1.89,1.89,0,0,1,.87.15,1.62,1.62,0,0,1,.46.31,1.74,1.74,0,0,1,.57,1.36c0,.18,0,.95,0,2.15A41.17,41.17,0,0,0,564.87,418.85Z"
         style="fill:#fff"
         id="path27" />
      <path
         d="M505.92,406.45c0,.05-.21.91-.44,2.36a61.12,61.12,0,0,0-.74,9.18l-3.55,0a63.12,63.12,0,0,1,.62-8.49,53.76,53.76,0,0,1-21.24,5.27c-8.15.33-19.69-1.18-28.32-10.08-12.57-13-8.75-32.34-6.53-40.09a38.29,38.29,0,0,1-26.5-1.89A29.87,29.87,0,0,1,408.33,354a29,29,0,0,1-2.88-4.48,31.52,31.52,0,0,1-1.84-4.28,31.9,31.9,0,0,1-1.48-14.41h3.58a28.54,28.54,0,0,0,1.22,13.26,26.16,26.16,0,0,0,13.8,15.4A34.85,34.85,0,0,0,445.35,361c.84-.24,1.67-.52,2.5-.82a1.76,1.76,0,0,1,2.24,2.28s-.36,1-.81,2.51c-2,6.73-6,25.41,5.49,37.23C467.55,415.4,489.91,412,501,406c.81-.44,1.56-.9,2.24-1.36a1.74,1.74,0,0,1,1.92,0l.06,0A1.75,1.75,0,0,1,505.92,406.45Z"
         style="fill:#fff"
         id="path28" />
      <path
         d="M453.78,408.38a53.86,53.86,0,0,0-2.18,9.42h-3.55a62.36,62.36,0,0,1,1.37-7.07,43.21,43.21,0,0,1-29.6-1.74,33,33,0,0,1-16.14-15,35.46,35.46,0,0,1-2.31-5.54c-.13-.37-.24-.74-.35-1.12-5-17.29.72-29.47,3.8-34.36-6.06-1.39-20.1-6.16-24.89-21.13-.11-.33-.21-.66-.31-1-.25-.88-.47-1.78-.65-2.72.6-.46,1-.7,1-.72a1.76,1.76,0,0,1,1.92,2.94l-.7.5h2.12c4.31,13.2,16.73,17.45,22.15,18.69A21.74,21.74,0,0,0,408,350a1.78,1.78,0,0,1,1.45,1.09,1.74,1.74,0,0,1-.3,1.79,12.11,12.11,0,0,0-.84,1.13c-2.45,3.55-8.94,15.12-3.94,32.35.3,1,.64,2,1,3,.06.16.13.32.2.47a0,0,0,0,1,0,0,29.62,29.62,0,0,0,15.64,15.94c11.05,4.93,23.36,3.67,30.12.42a1.75,1.75,0,0,1,2.41,2.18Z"
         style="fill:#fff"
         id="path29" />
      <path
         d="M405.35,391.24s-.7,1-1.67,2.76a64.92,64.92,0,0,0-6,14.62A49.88,49.88,0,0,0,396,417.8h-3.44c.84-11.39,5.66-21.28,8.25-25.85a52.47,52.47,0,0,1-13.68-2.55c-7.37-2.46-13-6.49-16.82-11.88-.18-.26-.36-.53-.53-.8a29.54,29.54,0,0,1-4.11-10c-4-18.42,4.72-30.42,10.23-35.9a37,37,0,0,1,3.06-2.72c.6-.46,1-.7,1-.72a1.76,1.76,0,0,1,1.92,2.94l-.7.5c-.33.24-.75.58-1.25,1-4.53,3.84-15,15.07-10.82,34.16,2.12,9.74,8.53,16.48,19.05,20a49.62,49.62,0,0,0,13.21,2.42c1.52.08,2.43,0,2.46,0a1.87,1.87,0,0,1,1.57.84l0,.06a2.05,2.05,0,0,1,.16.41,0,0,0,0,1,0,0A1.79,1.79,0,0,1,405.35,391.24Z"
         style="fill:#fff"
         id="path30" />
      <path
         d="M369.44,379.93a46.44,46.44,0,0,0-11.06,9.65c-6.78,8.16-9.26,17.1-7.37,26.57.11.56.24,1.11.38,1.65.07.26.14.51.22.76a2,2,0,0,0-.47-.76h-3.85c-.07-.29-.13-.59-.19-.88s-.08-.41-.11-.61c-1.89-10.38,1-20.52,8.41-29.38a51.08,51.08,0,0,1,6.74-6.67,30.38,30.38,0,0,1-17.61-7c-5.39-4.69-8.41-11.27-8.74-19a.41.41,0,0,1,0-.11,24.48,24.48,0,0,1,.68-6.93,26.48,26.48,0,0,1,9.43-14.32c.91-.74,1.82-1.41,2.71-2H357a35,35,0,0,0-8.7,5.16c-6,4.9-8.83,10.93-8.56,17.93.27,6.7,2.82,12.33,7.38,16.3,5.31,4.61,13,6.79,21.11,6a2,2,0,0,1,2.07,1.31l0,.07A2,2,0,0,1,369.44,379.93Z"
         style="fill:#fff"
         id="path31" />
      <path
         d="M351.14,417.8H340a54.65,54.65,0,0,1-5.89-3.15c-10.32-6.36-16.73-15.29-18.55-25.85,0-.08,0-.16,0-.24a30.84,30.84,0,0,1-.37-6.79c.88-15.86,13.84-27.37,19-31.35-3.24-3.09-9.6-10.12-11.94-19.57h4.07a31.83,31.83,0,0,0,3,7,42.05,42.05,0,0,0,7.24,9.29c1.22,1.18,2,1.82,2.06,1.84a2,2,0,0,1,.76,1.65,2,2,0,0,1-.89,1.58c-.05,0-1.06.72-2.6,2-5.8,4.71-19.06,17.46-16.37,33.7,1.58,9.59,7.18,17.42,16.64,23.29A52.63,52.63,0,0,0,347,416.31c1.93.66,3.14.93,3.17.94A2,2,0,0,1,351.14,417.8Z"
         style="fill:#fff"
         id="path32" />
      <path
         d="M319,385.47a2,2,0,0,1-1,1.71c-.18.11-1.11.65-2.48,1.62-5.09,3.62-16.34,13.25-18.86,29h-4c2.63-17.46,15.18-28.31,20.72-32.32-13.35-9.12-18.7-21.15-18.55-30.71a22,22,0,0,1,.84-5.76c.14-.49.3-1,.46-1.45a34.39,34.39,0,0,1,12.72-16.71h7.73c-6.07,3.13-14.12,9.06-17.08,19.27a19.84,19.84,0,0,0-.46,2c-2.14,11.87,7.42,23.4,16.07,29.69,1,.73,2,1.39,2.94,2A2,2,0,0,1,319,385.47Z"
         style="fill:#fff"
         id="path33" />
      <path
         d="M299,352.08a2,2,0,0,1-1.28,1.43,29.38,29.38,0,0,0-2.93,1.26c-5.77,2.77-18.5,10.32-23.68,24.85a35.62,35.62,0,0,0,2.56,29.15,39.14,39.14,0,0,0,6.69,9H275a43.73,43.73,0,0,1-4.81-7.14,39.57,39.57,0,0,1-2.79-32.38c.08-.23.17-.46.26-.69.37-1,.78-2,1.22-2.93,6.54-14.13,19.22-21.23,24.82-23.79-5.56-6.39-8.52-13.11-8.81-20h4c.28,5.69,2.7,11.29,7.23,16.71.73.89,1.54,1.78,2.4,2.67A2,2,0,0,1,299,352.08Z"
         style="fill:#fff"
         id="path34" />
      <path
         d="M269.12,376a2,2,0,0,1-1.28,1.53l-.18.07c-2.32.91-26.81,11.16-26.92,35.1v0a36.69,36.69,0,0,0,.33,5.09h-4q-.13-1.14-.21-2.28c-.07-.94-.09-1.88-.09-2.83,0-1.17.06-2.31.17-3.42,1.89-20.41,19.75-30.91,26.75-34.28-3.68-4-10.71-13.34-10.75-26.08,0-1,0-2.07.14-3.14a36.69,36.69,0,0,1,1.31-7,31.69,31.69,0,0,1,3.44-7.88h4.79a27.48,27.48,0,0,0-4.4,9c-5.87,20.42,10.07,34.15,10.23,34.29a2,2,0,0,1,.44.54A2,2,0,0,1,269.12,376Z"
         style="fill:#fff"
         id="path35" />
      <path
         d="M253.67,347.9a2,2,0,0,1-.74,1,2,2,0,0,1-1.19.36c-.22,0-24-.21-31.05,17.15-9.47,23.17,8.95,38.06,16.24,42.85,1.51,1,2.54,1.56,2.75,1.67a2,2,0,0,1,1.06,1.75v0a1.09,1.09,0,0,1,0,.18,2,2,0,0,1-1.4,1.72c-.05,0-1,.31-2.48.91-1.3.52-3,1.28-5,2.28h-7.77a61,61,0,0,1,10.2-5.54c-6.95-4.79-21.7-17.28-20.12-36a34.83,34.83,0,0,1,.67-4.49,40.27,40.27,0,0,1,2.13-6.82c3.39-8.29,10.52-14.31,20.62-17.43a50.53,50.53,0,0,1,9.16-1.89,26.37,26.37,0,0,1-7.09-14.75h4a22.11,22.11,0,0,0,9.24,14.81l.14.11A2,2,0,0,1,253.67,347.9Z"
         style="fill:#fff"
         id="path36" />
      <path
         d="M216.7,374.4a1.74,1.74,0,0,1-1.22,1.38s-.5.16-1.29.45c-5.18,1.9-24.31,10-27.58,26.73a31.78,31.78,0,0,0,.51,14.84h-3.56a34.73,34.73,0,0,1-.39-15.52,29.48,29.48,0,0,1,2.78-8,31.39,31.39,0,0,1,1.85-3.13c6.76-10.12,18.34-15.6,23.75-17.72-5-4.7-15.78-17.11-11.05-33a33.37,33.37,0,0,1,1.37-3.69c.41-.94.88-1.88,1.41-2.84a24.35,24.35,0,0,1,2-3.08H210a20.61,20.61,0,0,0-3.63,4.78c-4.85,8.77-4.72,17.65.38,26.38a39.89,39.89,0,0,0,8.13,9.73c.7.61,1.14.94,1.16.95A1.77,1.77,0,0,1,216.7,374.4Z"
         style="fill:#fff"
         id="path37" />
      <path
         d="M112.62,316a1.19,1.19,0,0,1-2.16.89,1.09,1.09,0,0,1-.11-.16c-.86-1.16-6.42-8.46-14.8-12.31-.27-1-.52-2-.78-2.94a34.8,34.8,0,0,1,8.64,4.88,47,47,0,0,1,6.37,5.9c-.46-6.13-.34-17.62,5.76-25l1.39,2.12c-6.51,8.64-4.77,23.4-4.38,26.14C112.59,315.78,112.62,315.93,112.62,316Z"
         style="fill:#fff"
         id="path38" />
      <path
         d="M106,272.07l1.53,2.49a16.24,16.24,0,0,0-9.15,1.52,17.72,17.72,0,0,0-7.91,7.43l-.73-3.35a20,20,0,0,1,7.61-6.24A18.54,18.54,0,0,1,106,272.07Z"
         style="fill:#fff"
         id="path39" />
      <path
         d="M98.54,259.73a26.2,26.2,0,0,0-1.65,12.66,1.2,1.2,0,0,1-1,1.36l-.18,0a1.2,1.2,0,0,1-1.18-1c-.07-.47-1.24-8.7,2.53-15.49C97.55,258.06,98,258.89,98.54,259.73Z"
         style="fill:#fff"
         id="path40" />
      <path
         d="M86.17,240.93l-1,.06a.71.71,0,0,1,.21-.26C85.52,240.58,85.8,240.65,86.17,240.93Z"
         style="fill:#fff"
         id="path41" />
    </g>
    <path
       d="M594.37,207.14l-64.44,10.92c-1.29-7.67-2.38-15.27-3.22-22.62H593.4S593.6,200,594.37,207.14Z"
       style="opacity:0.1"
       id="path42" />
    <path
       d="M584.42,195.44c.38,3.49,1.36,12.53,3.35,24.68,0,.31.1.61.15.91q.66,4.07,1.49,8.52c.06.3.11.61.17.91.64,3.42,1.34,7,2.13,10.67.07.31.12.6.2.91.81,3.82,1.71,7.77,2.71,11.79.07.29.15.6.22.9.8,3.21,1.65,6.48,2.57,9.76.4,1.44.82,2.86,1.26,4.25.09.3.19.6.28.89,1.46,4.57,3.1,8.92,4.84,13.17.12.3.24.59.37.89,1.88,4.57,3.88,9,5.86,13.51q.19.45.39.87c2.26,5.1,4.5,10.22,6.58,15.6.11.28.22.58.33.88a152.32,152.32,0,0,1,5.25,16.32c.09.3.16.6.24.9A134.13,134.13,0,0,1,626,349.22c0,.3.07.61.1.91a150,150,0,0,1,.86,16.92c0,1.53-.06,3-.16,4.48,0,.31,0,.62-.09.93a60.73,60.73,0,0,1-4.41,18c-.12.31-.25.6-.38.9a63.85,63.85,0,0,1-6.32,11.27,10.17,10.17,0,0,1-.6.86,73.19,73.19,0,0,1-7.8,9.18c-.27.28-.55.56-.83.82a80.09,80.09,0,0,1-6.45,5.64c14.56,0,24-.37,25-1.37,1.29-1.29,2.51-2.6,3.64-3.93.31-.33.58-.67.85-1a64.5,64.5,0,0,0,6.47-9.23c.2-.32.38-.65.56-1a65.1,65.1,0,0,0,5.17-11.86c.11-.33.21-.65.31-1a75.7,75.7,0,0,0,3.2-20.17c0-.32,0-.65,0-1a106.6,106.6,0,0,0-1.82-20.91c-.06-.3-.11-.61-.17-.9a153.33,153.33,0,0,0-4.24-16.76c-.1-.3-.19-.61-.29-.92-1.81-5.69-3.87-11.21-6-16.43-.12-.31-.25-.62-.38-.91-2.34-5.62-4.78-10.88-7.11-15.67-.15-.31-.3-.6-.45-.9-2.49-5.1-4.84-9.64-6.8-13.45l-.25-.49-.21-.41c-2.16-4.25-4.13-8.62-5.94-13l-.36-.89c-1.82-4.51-3.47-9.06-5-13.55-.1-.31-.2-.61-.29-.91-1.26-3.83-2.39-7.62-3.42-11.32-.08-.3-.18-.61-.25-.92-1-3.63-1.89-7.16-2.69-10.55-.08-.32-.15-.62-.21-.93q-1.06-4.52-1.89-8.61c-.06-.31-.13-.62-.18-.92-2.85-14.15-3.83-23.86-3.83-23.86Z"
       style="fill:#455a64"
       id="path43" />
    <path
       d="M610.41,298.07a123.37,123.37,0,0,1,14.72-1.89c-.15-.31-.3-.6-.45-.9A124.33,124.33,0,0,0,610,297.2Q610.21,297.65,610.41,298.07Z"
       style="fill:#263238"
       id="path44" />
    <path
       d="M617.32,314.55a124.8,124.8,0,0,1,15.3-1.79c-.12-.31-.25-.62-.38-.91A123.43,123.43,0,0,0,617,313.67C617.1,314,617.21,314.25,617.32,314.55Z"
       style="fill:#263238"
       id="path45" />
    <path
       d="M622.81,331.77a123.22,123.22,0,0,1,16.13-1.66c-.1-.3-.19-.61-.29-.92a124.19,124.19,0,0,0-16.08,1.68C622.66,331.17,622.73,331.47,622.81,331.77Z"
       style="fill:#263238"
       id="path46" />
    <path
       d="M626.09,350.13a127,127,0,0,0,17.26-2.36c-.06-.3-.11-.61-.17-.9A130.43,130.43,0,0,1,626,349.22C626,349.52,626.06,349.83,626.09,350.13Z"
       style="fill:#263238"
       id="path47" />
    <path
       d="M626.7,372.46a114,114,0,0,0,18.44-2.82c0-.32,0-.65,0-1a112.2,112.2,0,0,1-18.38,2.85C626.76,371.84,626.74,372.15,626.7,372.46Z"
       style="fill:#263238"
       id="path48" />
    <path
       d="M628.51,391.64a103.44,103.44,0,0,0,13.12-.85c.11-.33.21-.65.31-1a99.35,99.35,0,0,1-19.65.69c-.12.31-.25.6-.38.9C624.14,391.57,626.35,391.64,628.51,391.64Z"
       style="fill:#263238"
       id="path49" />
    <path
       d="M625.67,404.16a98.1,98.1,0,0,0,10.23-.53c.2-.32.38-.65.56-1a95,95,0,0,1-20.87,0,10.17,10.17,0,0,1-.6.86A87,87,0,0,0,625.67,404.16Z"
       style="fill:#263238"
       id="path50" />
    <path
       d="M606.36,413.53a88.69,88.69,0,0,0,12.32.84,97.87,97.87,0,0,0,9.9-.5c.31-.33.58-.67.85-1a94.28,94.28,0,0,1-22.24-.15C606.92,413,606.64,413.27,606.36,413.53Z"
       style="fill:#263238"
       id="path51" />
    <path
       d="M604.16,283.69a125.36,125.36,0,0,1,13.72-1.86l-.25-.49-.21-.41a131.47,131.47,0,0,0-13.63,1.87C603.91,283.1,604,283.39,604.16,283.69Z"
       style="fill:#263238"
       id="path52" />
    <path
       d="M598.67,268.74c.09.3.19.6.28.89,3.8-.71,8-1.34,12.53-1.73l-.36-.89C606.64,267.41,602.45,268,598.67,268.74Z"
       style="fill:#263238"
       id="path53" />
    <path
       d="M594.62,253.83c.07.29.15.6.22.9,3.52-.56,7.32-1,11.32-1.27-.1-.31-.2-.61-.29-.91C601.89,252.82,598.12,253.27,594.62,253.83Z"
       style="fill:#263238"
       id="path54" />
    <path
       d="M591.71,241.13c.07.31.12.6.2.91,3.31-.4,6.86-.7,10.54-.81-.08-.3-.18-.61-.25-.92C598.53,240.43,595,240.73,591.71,241.13Z"
       style="fill:#263238"
       id="path55" />
    <path
       d="M589.41,229.55c.06.3.11.61.17.91,3.14-.36,6.47-.61,9.93-.7-.08-.32-.15-.62-.21-.93C595.85,228.93,592.54,229.19,589.41,229.55Z"
       style="fill:#263238"
       id="path56" />
    <path
       d="M587.77,220.12c0,.31.1.61.15.91,3-.38,6.18-.66,9.49-.81-.06-.31-.13-.62-.18-.92C593.92,219.46,590.75,219.74,587.77,220.12Z"
       style="fill:#263238"
       id="path57" />
    <path
       d="M569.6,57a26.94,26.94,0,0,0-1.15,11.53,13.93,13.93,0,0,0,1.9,5.36,8.85,8.85,0,0,0,4.08,3.64,19.64,19.64,0,0,0,5.56,1c1.92.15,3.87.19,5.83.24a94.85,94.85,0,0,1,11.85.74,33.15,33.15,0,0,1,11.59,3.62,23.49,23.49,0,0,1,7.1,6A13.63,13.63,0,0,1,618,92a33.17,33.17,0,0,1,1.85,5.84c.47,2,.84,3.89,1.21,5.82.73,3.87,1.41,7.7,2.36,11.43a34.27,34.27,0,0,0,4.14,10.41,12.88,12.88,0,0,0,3.66,3.76,10.54,10.54,0,0,0,2.34,1.13,19.93,19.93,0,0,0,2.64.76,39.86,39.86,0,0,0,11.32.41,91.48,91.48,0,0,1,11.89-.48,23.38,23.38,0,0,1,6.05,1.07,17.69,17.69,0,0,1,5.45,2.91,19.68,19.68,0,0,1,4.16,4.52,17,17,0,0,1,2.17,5.7,37.37,37.37,0,0,1,.13,11.89,64.19,64.19,0,0,1-2.61,11.49,72.35,72.35,0,0,0,1.91-11.57,36.11,36.11,0,0,0-.68-11.52,16.4,16.4,0,0,0-2.21-5.14,17.12,17.12,0,0,0-14.47-7.1,100.24,100.24,0,0,0-11.58.81,42.79,42.79,0,0,1-12.1-.23,22.82,22.82,0,0,1-3-.81,13.16,13.16,0,0,1-3-1.41,15.83,15.83,0,0,1-4.52-4.56,36.91,36.91,0,0,1-4.61-11.31c-1-3.88-1.64-7.78-2.34-11.62a59,59,0,0,0-2.79-11.07,11,11,0,0,0-1.25-2.27,21.86,21.86,0,0,0-1.8-2.07A20.81,20.81,0,0,0,608,85.47a32.27,32.27,0,0,0-10.64-3.65,109.93,109.93,0,0,0-11.58-1.18c-2-.13-3.93-.27-5.91-.52a19.83,19.83,0,0,1-5.87-1.5,8.25,8.25,0,0,1-2.53-1.83,12.81,12.81,0,0,1-1.84-2.44,14.65,14.65,0,0,1-1.76-5.73A26.19,26.19,0,0,1,569.6,57Z"
       style="fill:#263238"
       id="path58" />
    <polygon
       points="682.24 174.66 662.35 185.58 657.9 164.8 682.24 174.66"
       style="fill:#fff"
       id="polygon58" />
    <path
       d="M682.24,174.66l-9.7,5.6c-3.29,1.89-6.61,3.84-10,5.7l-.51.28-.13-.57-2.28-10.38c-.76-3.46-1.45-6.93-2.19-10.39l-.18-.85.8.33,6.16,2.55,6.1,2.62Zm0,0-12.43-4.75-6.08-2.31-6-2.38.61-.51c.75,3.46,1.54,6.91,2.26,10.38l2.17,10.4-.63-.3c3.25-1.78,6.57-3.46,9.9-5.21Z"
       style="fill:#dbdbdb"
       id="path59" />
    <path
       d="M654.48,187.56,640,195.16s-28.48-8-49.67-7.87l2.48,6.91s56.54,14.24,58.39,13.05S654.48,187.56,654.48,187.56Z"
       style="fill:#fff"
       id="path60" />
    <path
       d="M654.48,187.56,640,195.34l-.06,0-.09,0c-8.12-2.09-16.34-3.85-24.62-5.22-4.14-.66-8.29-1.26-12.46-1.7s-8.35-.67-12.53-.67l.45-.64,2.5,6.9-.35-.31,19.41,4.82c6.47,1.59,13,3.13,19.44,4.67,3.24.76,6.49,1.51,9.74,2.22,1.63.35,3.26.7,4.89,1,.82.15,1.63.3,2.45.42.41.06.82.13,1.23.16a4,4,0,0,0,.6,0h.27c.11,0,.08,0,.15-.06a3,3,0,0,0,.53-1c.14-.38.25-.77.36-1.17.22-.8.39-1.61.55-2.43.32-1.63.58-3.27.81-4.92C653.78,194.19,654.16,190.88,654.48,187.56Zm0,0c-.24,3.33-.53,6.65-.92,10-.19,1.66-.41,3.31-.69,5-.14.83-.29,1.65-.49,2.47-.1.41-.21.81-.34,1.22a3.16,3.16,0,0,1-.65,1.2.65.65,0,0,1-.41.19l-.34,0-.65,0c-.42,0-.84-.09-1.26-.14-.83-.12-1.65-.25-2.47-.4-1.65-.29-3.29-.61-4.92-.94-3.27-.66-6.53-1.36-9.79-2.08-6.51-1.44-13-3-19.48-4.54s-13-3.13-19.43-4.76l-.25-.07-.09-.24-2.47-6.92-.23-.64h.68c4.22,0,8.43.3,12.63.73s8.35,1.06,12.5,1.79,8.26,1.59,12.36,2.53S636,193.79,640,195l-.15,0Z"
       style="fill:#dbdbdb"
       id="path61" />
    <path
       d="M589.26,107.88c-8.46-2.71-11.64-.24-28-13.4C541.82,78.92,519.69,62.67,513,70.23s34.2,23.58,34.2,23.58-19.33-6.63-20.79-1.31,18.51,6.12,26.25,9.58c14.67,6.55,20.75,12.8,21.43,12.8C586.1,114.75,589.26,107.88,589.26,107.88Z"
       style="fill:#d40000"
       id="path62" />
    <g
       style="opacity:0.1"
       id="g63">
      <path
         d="M589.26,107.88c-8.46-2.71-11.64-.24-28-13.4C541.82,78.92,519.69,62.67,513,70.23s34.2,23.58,34.2,23.58-19.33-6.63-20.79-1.31,18.51,6.12,26.25,9.58c14.67,6.55,20.75,12.8,21.43,12.8C586.1,114.75,589.26,107.88,589.26,107.88Z"
         id="path63"
         style="fill:#d40000" />
    </g>
    <path
       d="M656.79,203.42s5.67,8.21,2.57,17.78-10.6,11.65-8.92,19.88c0,0-15.76-9.48-13.77-33.55Z"
       style="fill:#455a64"
       id="path64" />
    <path
       d="M649.57,207.07c4.62,3.46,6.16,15.33-1.18,23.08-10.28,10.85-10,18.54-10,18.54s-14.58-11-13.77-24.12,6.65-19.31,6.65-19.31Z"
       style="fill:#37474f"
       id="path65" />
    <path
       d="M646.59,205.6a21.06,21.06,0,0,1-5,16.07c-6.5,7.79-19,9-21.73,20,0,0-11.41-13.52-2.54-33.87Z"
       style="fill:#455a64"
       id="path66" />
    <path
       d="M592.2,106.49c12.51,5.73,14.88,25.76,21.92,29.39s34.45,13.63,38.92,12.64,6.94-10.16,18.09-11.15,23.53,7.18,24.27,13.13-9.41,9.91-9.41,9.91,5.77,3.19,6.19,6.77c.33,2.81-1.81,9.58-7.26,8.92S661.45,164.13,653,163s-18.17,7.76-30.88,5.78-18.83-10.57-28.41-7.93-8.42,31.22,0,31.71,19.32-3.47,25.6-1.65,13.71,11.23,20.48,11.4,16.68-1.32,18.33,0-8.75,9.41-14,10.9-37.65-6.44-47.07-8.09-38.15-5.29-58-2.56-32.21-19.08-35.67-32.71,4-49.79,15.85-58.46c5.62-4.1,19.83-1.84,33.94-3.72C569,105.55,583.27,102.39,592.2,106.49Z"
       style="fill:#aa0000"
       id="path67" />
    <path
       d="M584.16,192l2.18-34.27L464.93,94.63S454.87,120,474.65,134c0,0-8.13,21,9.46,30.46,0,0-1.8,18,17,22.75,0,0-1.72,11.72,12.71,16.12S584.16,192,584.16,192Z"
       style="fill:#455a64"
       id="path68" />
    <path
       d="M586.34,157.73,584.17,192l-.23.07-.18,0-.1,0-.28.08-.45.12-.69.19-2.69.72c-12,3.16-44.11,11-54.74,7.79-13.17-4-11.6-14.71-11.6-14.71-17.16-4.31-15.52-20.78-15.52-20.78-16.06-8.67-8.63-27.83-8.63-27.83-16.26-11.5-10.46-31.42-9.13-35.31Z"
       style="fill:#37474f"
       id="path69" />
    <path
       d="M588.45,159.28S549,122.92,533.73,135.87c-4.66,4,4.78,16.94,14,21.41,0,0-27.6,3.62-27.24,17,.45,17,33.88,10.35,33.88,10.35s-15.1,11.29-9.48,18c8.73,10.41,45.61-13.54,45.61-13.54s-13.68-2.82-11.91-13.25S585.85,160.06,588.45,159.28Z"
       style="fill:#455a64"
       id="path70" />
    <path
       d="M591.32,161s-30.49-19.24-39.81-8.83c-2.84,3.19,4.93,11.28,11.73,13.49,0,0-18.77,5.14-17.24,14.38,1.93,11.73,24.44,3.94,24.44,3.94s-9.54,9.44-4.84,13.36c6.43,5.37,26-8.68,26-8.68s-5.47-5.69-5.24-13.08S589.6,161.78,591.32,161Z"
       style="fill:#37474f"
       id="path71" />
    <path
       d="M693.53,169.91c1.67,2-.27,5.36-2.75,6.36s-14.25.59-19.08-.56-15.56-9.85-20.76-10.22-16.23,7.8-25.77,7.18-23-10.24-29.6-9.78c-9.05.62-6.07,25.14-2.23,26.38s19.2-2.1,24.52-1.24,16.35,11.15,20.69,11.89,18.08-1.36,20.93.62.25,6.32-2.85,7.56-18.33.62-22.91-1-12.39-10.65-18-11.52-20.07,3.71-26.88-.13-11.74-35.74,5.82-40.13c4-1,24.52,10,29.48,10.65s19.06-9.62,28.86-8.09c4.56.71,14.16,8.11,21.64,10.7C679.22,170.15,691.84,167.89,693.53,169.91Z"
       style="fill:#FFC727"
       id="path72" />
    <path
       d="M693.53,169.91c1.67,2-.27,5.36-2.75,6.36s-14.25.59-19.08-.56-15.56-9.85-20.76-10.22-16.23,7.8-25.77,7.18-23-10.24-29.6-9.78c-9.05.62-6.07,25.14-2.23,26.38s19.2-2.1,24.52-1.24,16.35,11.15,20.69,11.89,18.08-1.36,20.93.62.25,6.32-2.85,7.56-18.33.62-22.91-1-12.39-10.65-18-11.52-20.07,3.71-26.88-.13-11.74-35.74,5.82-40.13c4-1,24.52,10,29.48,10.65s19.06-9.62,28.86-8.09c4.56.71,14.16,8.11,21.64,10.7C679.22,170.15,691.84,167.89,693.53,169.91Z"
       style="fill:#ff8080;opacity:0.6"
       id="path73" />
    <path
       d="M597.53,145.22c2.74-5.58,1-25.69-14.2-27.3-7.17-.76-1.29,8.17-1.29,8.17a24,24,0,0,0-14.23-5.16c-8.74-.27-14.39,1.94-14.57,5s13,6.19,13,6.19-13.07,4.4-13.8,10c-.39,3,4.34,4.73,13.25.55S597.53,145.22,597.53,145.22Z"
       style="fill:#FFC727"
       id="path74" />
    <g
       style="opacity:0.6000000000000001"
       id="g75">
      <path
         d="M597.53,145.22c2.74-5.58,1-25.69-14.2-27.3-7.17-.76-1.29,8.17-1.29,8.17a24,24,0,0,0-14.23-5.16c-8.74-.27-14.39,1.94-14.57,5s13,6.19,13,6.19-13.07,4.4-13.8,10c-.39,3,4.34,4.73,13.25.55S597.53,145.22,597.53,145.22Z"
         style="fill:#ff2a2a"
         id="path75" />
    </g>
    <path
       d="M589.8,134.71a10.73,10.73,0,0,0-9.28,11.35c.26,4.46,4,10.25,11,9.7,7.34-.58,10.4-6.22,9.8-11.75C600.82,139.55,596.27,133.9,589.8,134.71Z"
       style="fill:#fff"
       id="path76" />
    <path
       d="M590.19,138.38a7,7,0,0,0-6,7.38,6.8,6.8,0,1,0,13.52-1.33C597.37,141.53,594.41,137.84,590.19,138.38Z"
       style="fill:#263238"
       id="path77" />
    <path
       d="M565.07,111.7c-10.47-2-13.91,1.36-35.31-12-25.31-15.82-54-32.08-60.9-22.13s44.08,23.3,44.08,23.3-24-5.18-25,1.36,22.93,4.7,32.63,7.73c18.41,5.74,26.54,12.34,27.35,12.24C562.27,120.34,565.07,111.7,565.07,111.7Z"
       style="fill:#d40000"
       id="path78" />
    <path
       d="M675.71,156.8a14.54,14.54,0,0,0,6.81-.6c3.1-1.3,5.21-4.54,2.73-7.41C680.42,143.19,672.61,152,675.71,156.8Z"
       style="fill:#263238;mix-blend-mode:multiply"
       id="path79" />
    <path
       d="M674.68,168.59a23.26,23.26,0,0,0-10.48-12.35,23.88,23.88,0,0,0-7.72-2.64,20.79,20.79,0,0,0-8.09.19,132.65,132.65,0,0,0-15.84,4.81c-5.25,1.82-10.55,3.62-16,5-10.83,2.84-22.47,3.84-33.67.8a37.88,37.88,0,0,1-7.82-3.68c-2.45-1.45-4.77-3-7.06-4.63-4.57-3.21-9-6.5-13.66-9.44a64.28,64.28,0,0,0-14.56-7.2,34.7,34.7,0,0,0-7.82-1.59,32.41,32.41,0,0,0-8,.39,68.43,68.43,0,0,0-15.64,4.64c-5.08,2.09-10.11,4.51-15.39,6.47a53.65,53.65,0,0,1-16.52,3.7,45.43,45.43,0,0,1-8.49-.42l-2.09-.35-2.07-.45c-.69-.14-1.38-.37-2.07-.55s-1.36-.44-2-.72a34.91,34.91,0,0,1-13.37-10.17A51.35,51.35,0,0,1,437.91,126a51.51,51.51,0,0,0,4,7.28,52.76,52.76,0,0,0,5,6.58,33.63,33.63,0,0,0,13.3,9.3c.63.24,1.28.43,1.92.63s1.3.36,2,.47l2,.39,2,.29a42.69,42.69,0,0,0,8.15.2,51.84,51.84,0,0,0,15.79-4c5.09-2.06,10.05-4.56,15.22-6.74a70.85,70.85,0,0,1,16.2-5,33.64,33.64,0,0,1,8.64-.47,36.92,36.92,0,0,1,8.49,1.68A66,66,0,0,1,556,144.12c4.75,3,9.23,6.37,13.74,9.56s9.1,6.32,14,8c1.21.39,2.57.65,3.89.94s2.66.48,4,.61a56.73,56.73,0,0,0,8.14.34,80.15,80.15,0,0,0,8.16-.68c2.71-.38,5.41-.89,8.09-1.5,5.37-1.21,10.66-2.85,16-4.53,2.64-.84,5.3-1.69,8-2.47a63,63,0,0,1,8.2-1.91,22.6,22.6,0,0,1,8.48.14,24.67,24.67,0,0,1,7.89,3A23.1,23.1,0,0,1,674.68,168.59Z"
       style="fill:#263238"
       id="path80" />
  </g>
  <g
     id="freepik--character-1--inject-5">
    <path
       d="M273.25,330.85H205.06c-3.72,0-7.31,0-10.79-.05h-.74l-2.4-.05-.86,0-1.7-.05-1.42-.05c-15.92-.65-30-3.11-45.22-12.48l-.45-.28-.65-.42h0c-.06-.26-.12-.52-.17-.78-.09-.42-.17-.83-.24-1.26s-.11-.64-.16-1-.09-.59-.13-.89a2.17,2.17,0,0,1,0-.25c-.08-.61-.15-1.22-.2-1.84,0-.37-.06-.74-.08-1.11v-.09c0-.51-.06-1-.08-1.54v-.11c0-.28,0-.57,0-.86,0-.59,0-1.17,0-1.77,0-.29,0-.59,0-.89,0-.62.05-1.24.09-1.87.05-.84.12-1.69.2-2.55,0-.21.05-.41.07-.62s0-.41.07-.62.07-.62.11-.93l2.77.31,7.12.8,4.26.48h0l8.39.94h0l.56.06,6.16.7,9.19,1s0,0,0,0l1.26.14.2,0,.33,0,1.91.21,1,.07,1,.06h0l.89.06,1.58.09.61,0c1.83.11,3.64.2,5.41.29l1.91.08,1.07.05h0l1.3.05h.37l1.81.07,3.35.12h0l.91,0s0,0,0,0c7.3.24,14,.4,20.23.79h0l.76.05c1.37.09,2.72.19,4,.3l1.9.18h.17c1.18.12,2.34.26,3.48.41l.62.08h0a74,74,0,0,1,12,2.55,49.55,49.55,0,0,1,6.58,2.55h0c.7.33,1.37.68,2.05,1.05l.26.14a42.27,42.27,0,0,1,5.17,3.36C265.17,318.91,269.33,324.34,273.25,330.85Z"
       style="fill:#37474f"
       id="path81" />
    <path
       d="M224.05,330.85h-19c-3.72,0-7.31,0-10.79-.05h-.74l-2.4-.05-.86,0-1.7-.05-1.42-.05c-15.92-.65-30-3.11-45.22-12.48l-.45-.28-.65-.42-.18-.79c-.09-.42-.17-.83-.24-1.26s-.11-.64-.16-1-.09-.59-.13-.89l0-.25c-.08-.61-.15-1.22-.2-1.84l-.09-1.11v-.09c0-.51-.06-1-.08-1.54v-.11c0-.28,0-.57,0-.86,0-.59,0-1.17,0-1.77,0-.29,0-.59,0-.89,0-.62.05-1.24.09-1.87.05-.84.12-1.69.2-2.55,0-.21.05-.41.07-.62s0-.41.08-.62.07-.61.11-.92l2.72.31h0l7.15.8,4.26.47h0l8.39.94h0l.56.07,6.16.69,9.19,1,1.26.14.2,0,.33,0,1.91.21,1,.07,1,.06h0l.89.06,1.58.09c.21,0,.41,0,.62,0,1.79.11,3.59.19,5.4.27l1.92.08.85,0h0l1.48.06,0,0,.29.24h0l0,0c.41.35.82.71,1.24,1.09,3.82,3.36,7.86,7.26,12.06,11.51,1,1,2,2,3,3.08l.21.21q1.5,1.56,3,3.16C219.36,325.76,221.7,328.28,224.05,330.85Z"
       style="fill:#263238"
       id="path82" />
    <path
       d="M261.2,330.85H205.06c-3.72,0-7.31,0-10.79-.05h-.74l-2.4-.05-.86,0-1.7-.05-1.42-.05c-15.92-.65-30-3.11-45.22-12.48l-.45-.28-.65-.42h0a35.43,35.43,0,0,1-4.15-3.29c-.57-.52-1.14-1.07-1.72-1.64l-.51-.51q-1.73-1.75-3.49-3.78.39-1.69.87-3.3c.39-1.4.82-2.73,1.27-4,.55-1.58,1.13-3.05,1.68-4.37.35-.83.69-1.6,1-2.3.9-1.95,1.66-3.4,2.1-4.18l.36-.66,1.77.2h0l10.44,1.21.89.1h0l7.12.83h0l11.32,1.3h0l1.59.19,3.35.39h0l2.12.24,3.53.41.69.08h.09l.91,1.34.62.9c.6.89,1.33,1.95,2,3l.1.15c.29.4.56.8.82,1.17.12.16.23.32.33.47.56.79,1,1.43,1.29,1.78.07.09.48.08,1.18,0h0l.74-.08h0l.65-.1h0l1.48-.22h0l3.59-.54c11.37-1.73,32.58-4.57,44.25.73a16.67,16.67,0,0,1,1.79.91l.31.19a27.54,27.54,0,0,1,5.53,4.55,48.77,48.77,0,0,1,3.57,4.17c.6.77,1.19,1.58,1.78,2.42.49.69,1,1.41,1.45,2.14.36.56.72,1.12,1.08,1.7,1.67,2.68,3.29,5.58,4.87,8.64l0,.07C260.17,328.76,260.69,329.79,261.2,330.85Z"
       style="fill:#37474f"
       id="path83" />
    <path
       d="M163.71,299.36c0-.16-.23-.18-.27,0a18,18,0,0,1-7.43,9.87c-4,2.53-9,3.11-13.59,3.91-.44.08-.33.76.1.77a36.53,36.53,0,0,0,7.94-.89,17.69,17.69,0,0,0,6.62-2.77A15.8,15.8,0,0,0,163.71,299.36Z"
       style="fill:#263238"
       id="path84" />
    <path
       d="M186.44,305.84c-.49-1.14-1.05-2.26-1.58-3.39-1.26-2.67-2.52-5.35-3.88-8-.13-.24-.56-.06-.45.21.85,2,1.78,4,2.69,6,.46,1,.93,2.06,1.41,3.08a16.41,16.41,0,0,1,1.28,3c.26,1.07-.62,1.69-1.62,1.54a3.51,3.51,0,0,1-2.11-1.49,31.35,31.35,0,0,1-2.84-5.3c-.54-1.07-1.08-2.15-1.64-3.21s-1.25-2.24-1.83-3.37c0-.07-.17,0-.14.06.46,1.19.86,2.41,1.32,3.6s.94,2.38,1.43,3.56,1,2.22,1.47,3.31a9.4,9.4,0,0,0,1.71,2.59c1.17,1.19,3.54,2,4.76.41A2.61,2.61,0,0,0,186.44,305.84Z"
       style="fill:#263238"
       id="path85" />
    <path
       d="M261.3,330.85h-1.18q-1.49-2.89-3.06-5.73c-.86-1.56-1.76-3.12-2.68-4.66-.51-.87-1-1.73-1.56-2.59-.11-.2-.23-.39-.35-.58l-1.08-1.71c-.44-.7-.88-1.4-1.33-2.09-.1-.15-.2-.3-.29-.46-.74-1.13-1.44-2.29-2.22-3.38-.07-.1.09-.2.17-.1.48.65,1,1.27,1.51,1.9.37.45.72.9,1.07,1.37.6.8,1.18,1.62,1.74,2.45s1,1.44,1.44,2.17l.9,1.38.3.47c1.56,2.4,3,4.88,4.39,7.39l.54,1,0,.07C260.21,328.76,260.76,329.8,261.3,330.85Z"
       style="fill:#263238"
       id="path86" />
    <path
       d="M141.85,292.3c-.12.24-.23.49-.35.73q-.57,1.2-1.11,2.4c-.15.32-.3.65-.44,1-.49,1.1-1,2.22-1.42,3.35-.53,1.33-1,2.68-1.49,4a47.49,47.49,0,0,0-2.08,8.6.41.41,0,0,0,0,.11l-.51-.51a46.66,46.66,0,0,1,2.11-8.1c.48-1.37,1-2.72,1.58-4.05s1.3-2.94,2-4.36c.4-.82.8-1.62,1.21-2.41l.42-.82C141.79,292.18,141.89,292.24,141.85,292.3Z"
       style="fill:#263238"
       id="path87" />
    <path
       d="M174.27,247.82c15.43,13.15,43,26.07,52.75,21.78,9.17-4,17.34-21.48,25.28-39.89,1.5-3.46-26.32-8.12-28-4.43-3.53,7.84-8.78,19.43-10.44,19.87-4,1-20.32-2.9-34.39-6.83C162.41,233.55,168.12,242.58,174.27,247.82Z"
       style="fill:#d3766a"
       id="path88" />
    <path
       d="M255.83,215c-.41,9.38-4.69,20.11-6.89,22.61s-23-4.38-24.16-7.61S222.29,205,226,200.29,256.1,208.9,255.83,215Z"
       style="fill:#d3766a"
       id="path89" />
    <path
       d="M213.53,193.61c-.62,1,.05,2.5,1.5,3.42a3.3,3.3,0,0,0,3.15.43l43.28,28.78,1.89-3L219,196.19a3.3,3.3,0,0,0-1.72-2.66C215.81,192.61,214.14,192.64,213.53,193.61Z"
       style="fill:#ff2a2a"
       id="path90" />
    <path
       d="M225.22,207c1.51,2.72,3.85-.61,3.85-.61s-2.21,5.61.42,7.81,5.24-2,5.43-2.3c-.11.29-2,5.5.87,7.44s5-2.59,5.1-2.89c0,.32-.21,4.49,2.31,5.47,4.33,1.67,5.12-9,8.07-11.31,0,0,4.53,4.55,4.69,4.65,0,0,1-10.11-2.41-13.92a3.25,3.25,0,0,0-4-.74s.67-3.23-1.55-4.83c-1.14-.82-3.46.28-3.46.28a4.07,4.07,0,0,0-1.63-3.91c-1.65-1-3.72.22-3.72.22s-.75-2.69-2.77-3.21C232.34,188.08,222,201.17,225.22,207Z"
       style="fill:#d3766a"
       id="path91" />
    <path
       d="M238.83,192.5s0-.1-.06-.06a28.85,28.85,0,0,0-9.84,14.1c-.06.18.21.34.31.16A59.32,59.32,0,0,1,238.83,192.5Z"
       style="fill:#263238"
       id="path92" />
    <path
       d="M244.56,196c.05,0,0-.12-.09-.07a27.05,27.05,0,0,0-9.78,16.05c0,.23.15.46.21.21C236,207.87,240.87,199.88,244.56,196Z"
       style="fill:#263238"
       id="path93" />
    <path
       d="M241,216.92c1.27-6.19,4.4-11.35,8.38-16.2.05-.06,0-.13-.1-.08-2.59,1.83-4.8,5.18-6.3,7.94a16.59,16.59,0,0,0-2.19,8.3C240.76,217,241,217.06,241,216.92Z"
       style="fill:#263238"
       id="path94" />
    <path
       d="M229.07,206.38a19,19,0,0,0-.66,3.41,6.4,6.4,0,0,0,.4,3.3,2.07,2.07,0,0,0,1.09,1,3,3,0,0,0,1.53.2,3.73,3.73,0,0,0,2.44-1.78l1.37-2.16-.53,2.5a10.07,10.07,0,0,0-.19,3.37A3.73,3.73,0,0,0,235.9,219a2.12,2.12,0,0,0,2.68,0,6.43,6.43,0,0,0,1.84-2.66l1.13-2.79-.15,3a9.48,9.48,0,0,0,.18,2.49,4.05,4.05,0,0,0,1,2.09,1.94,1.94,0,0,0,2,.45,4.27,4.27,0,0,0,1.71-1.65,32,32,0,0,0,2.32-4.69c.36-.8.72-1.62,1.12-2.41a6.25,6.25,0,0,1,1.53-2.16,6.73,6.73,0,0,0-1.31,2.26c-.33.81-.63,1.65-.92,2.48a28.22,28.22,0,0,1-2.12,4.91,5,5,0,0,1-2,2,2.72,2.72,0,0,1-2.93-.55,4.92,4.92,0,0,1-1.35-2.56,10.71,10.71,0,0,1-.25-2.77l1,.2a7.42,7.42,0,0,1-2.14,3.17,3.07,3.07,0,0,1-2,.7,3.53,3.53,0,0,1-2-.67,4.74,4.74,0,0,1-1.75-3.44,11.27,11.27,0,0,1,.26-3.71l.83.34a4.42,4.42,0,0,1-3.14,2.05,3.8,3.8,0,0,1-1.88-.34,2.71,2.71,0,0,1-1.32-1.39,6.51,6.51,0,0,1-.21-3.57A15.67,15.67,0,0,1,229.07,206.38Z"
       style="fill:#263238"
       id="path95" />
    <path
       d="M224.38,226.58s-10.27-22.71.57-22.37c3.22.1,16.33,4.35,15.53,7-1,3.42-6.85,2.67-10.41,1.62,0,0,4.58,7.23.49,11.92A6.17,6.17,0,0,1,224.38,226.58Z"
       style="fill:#d3766a"
       id="path96" />
    <path
       d="M224.05,204.24a12.72,12.72,0,0,1,3.79.22,29.3,29.3,0,0,1,3.69.93,43.31,43.31,0,0,1,7.09,2.87,7.45,7.45,0,0,1,1.65,1.17,2.78,2.78,0,0,1,.64,1,1.84,1.84,0,0,1,.13.62,2.08,2.08,0,0,1-.09.63,3.19,3.19,0,0,1-1.37,1.75,6.25,6.25,0,0,1-2,.73,11.52,11.52,0,0,1-3.93,0,26.32,26.32,0,0,1-3.76-.87l.49-.67a14.83,14.83,0,0,1,1.23,2.66,14.29,14.29,0,0,1,.71,2.81,10,10,0,0,1,0,2.89,7.51,7.51,0,0,1-1,2.69,8.17,8.17,0,0,0,.67-2.72,9.91,9.91,0,0,0-.2-2.77,14.2,14.2,0,0,0-.83-2.64,14.43,14.43,0,0,0-1.29-2.43l-.63-.94,1.12.27a27.27,27.27,0,0,0,3.64.73,11.36,11.36,0,0,0,3.59,0,3.12,3.12,0,0,0,2.52-1.75c.31-.8-.8-1.63-1.82-2.22a37.07,37.07,0,0,0-3.34-1.66c-1.14-.51-2.29-1-3.46-1.45A23.84,23.84,0,0,0,224.05,204.24Z"
       style="fill:#263238"
       id="path97" />
    <path
       d="M178.18,237.47c-13.37-3.34-14.25,2.92-5.08,11.14A196.4,196.4,0,0,0,193.58,264l8.88-20.45Z"
       style="fill:#263238"
       id="path98" />
    <path
       d="M191.63,261.24c1.09-3,6-15.18,7.22-17.74.09-.18.22-.17.16,0a178,178,0,0,1-7.26,17.75A.06.06,0,0,1,191.63,261.24Z"
       style="fill:#37474f"
       id="path99" />
    <path
       d="M197.58,254.79l-4,9.2a195.64,195.64,0,0,1-20.47-15.38c-3.6-3.23-5.65-6.15-6-8.31C171.2,242.38,187.65,250.13,197.58,254.79Z"
       style="fill:#37474f"
       id="path100" />
    <path
       d="M188.76,302.82h0c0,.11,0,.17,0,.2l-.23.12h0c-.2.09-.53.21-1,.37h0c-.48.17-1.1.39-1.83.63l-.75.26-1.93.65-1.64.54c-.37.12-.76.24-1.15.38-9.91,3.24-26.42,8.46-38.27,12.15l-.45-.28-.65-.42h0a35.43,35.43,0,0,1-4.15-3.29c-.57-.52-1.14-1.07-1.72-1.64l-.51-.51q-1.73-1.75-3.49-3.78c-.32-.37-.65-.75-1-1.14.11-.6.23-1.21.35-1.84h0c.25-1.25.51-2.54.79-3.88s.59-2.79.92-4.24c.15-.71.31-1.43.48-2.15q.45-1.93.93-3.93h0q.35-1.41.72-2.85c.07-.3.15-.6.23-.9.18-.71.37-1.42.55-2.14.36-1.31.72-2.63,1.1-4,1.13-4,2.38-8,3.75-11.94.29-.84.58-1.67.88-2.5.06-.15.11-.3.16-.45a118.74,118.74,0,0,1,8.35-18.36A62.78,62.78,0,0,1,153,242l.47-.61a1.3,1.3,0,0,1,.15-.2c.67-.87,1.35-1.7,2.05-2.48a9.5,9.5,0,0,1,3-2.25,14,14,0,0,1,7.52-1.07,15,15,0,0,1,4.53,1.18,5.53,5.53,0,0,1,.73.38,3.29,3.29,0,0,1,.89.71,12.06,12.06,0,0,1,.94,1.42c.25.43.5.92.75,1.44h0c.54,1.12,1.09,2.44,1.65,3.92.69,1.84,1.39,3.93,2.09,6.2h0c.24.82.49,1.64.74,2.5q.74,2.53,1.45,5.27c.69,2.61,1.36,5.32,2,8.07a.75.75,0,0,1,0,.16h0a2.22,2.22,0,0,1,.09.37c.32,1.33.63,2.67.92,4,.09.39.18.79.26,1.18h0c.18.8.36,1.58.53,2.38.22,1,.43,2,.64,3L185,280q.38,1.81.72,3.57c.13.71.27,1.4.4,2.09.25,1.3.48,2.55.71,3.75h0l.63,3.59q.1.63.21,1.23c0,.25.08.48.11.72a1,1,0,0,1,0,.17c.14.83.26,1.61.37,2.33.14.93.26,1.75.35,2.46h0c0,.23.06.44.08.64s.08.62.1.88l0,.28A6.41,6.41,0,0,1,188.76,302.82Z"
       style="fill:#263238"
       id="path101" />
    <path
       d="M190.45,294.21a3,3,0,0,0,0-.42c0-.3-.07-.6-.11-.9s-.05-.32-.08-.48-.06-.33-.1-.49,0-.21-.07-.32a22.17,22.17,0,0,0-.8-2.71,21.39,21.39,0,0,0-1.15-2.65,13.4,13.4,0,0,0,.27-3.24c0-.31,0-.62-.07-.91s-.06-.45-.1-.67-.07-.4-.12-.6l-.09-.39c-.09-.36-.19-.7-.3-1a10.39,10.39,0,0,0-1.27-2.58c.07-.48.12-.94.16-1.38,0-.08,0-.16,0-.24,0-.4,0-.79,0-1.16s0-.57,0-.84,0-.39,0-.57a2.43,2.43,0,0,0,0-.3c0-.1,0-.2,0-.29s-.08-.44-.13-.65a2.82,2.82,0,0,0-.07-.31c-.06-.23-.12-.45-.19-.66a8.29,8.29,0,0,0-1.29-2.59,2.75,2.75,0,0,0-.21-.25l-.39-1.76a1.83,1.83,0,0,0-.06-.25q-.25-1.2-.54-2.37c-.44-1.85-.9-3.67-1.38-5.43-.2-.77-.41-1.52-.63-2.26h0q-.39-1.36-.81-2.67c-.82-2.61-1.69-5-2.61-7.22h0a32.54,32.54,0,0,0-4.19-7.48c-.18-.24-.37-.47-.56-.68a4.17,4.17,0,0,0-.48-.45h0a4.3,4.3,0,0,0-.64-.45h0a13.49,13.49,0,0,0-6.3-1.47,18.91,18.91,0,0,0-7.19,1.2,11.88,11.88,0,0,0-5.38,3.89c-.52.69-1,1.38-1.51,2.1v0c-.33.45-.64.91-1,1.38a120,120,0,0,0-11.35,22h0c-.06.13-.11.27-.16.4-.33.81-.66,1.64-1,2.46-1.07,2.78-2.08,5.62-3,8.5a21.37,21.37,0,0,0-2.44,4.8c-.09.25-.18.51-.26.78s-.09.28-.13.42-.15.52-.21.79a.53.53,0,0,0,0,.12c-.07.25-.12.52-.17.78s-.1.52-.13.78a.31.31,0,0,0,0,.1,1,1,0,0,0,0,.17,14,14,0,0,0-.08,2.83h0a10.72,10.72,0,0,0-2.44,3.28c-.1.21-.2.44-.3.67a2.67,2.67,0,0,0-.14.36l-.13.37a9.72,9.72,0,0,0-.44,1.91l0,.21c0,.15,0,.3,0,.45a11.83,11.83,0,0,0,.11,2.88,31.93,31.93,0,0,0-1.51,3.51c-.09.25-.19.52-.28.79q1,1.32,2,2.55c.41.51.83,1,1.25,1.5s.65.77,1,1.14q1.77,2,3.49,3.78l.51.51c.58.57,1.15,1.12,1.72,1.64l3.41-.86h0l9.67-2.45,6.08-1.54,3.33-.85c7.16-1.84,14.28-3.68,19.78-5.15L180,303l.17-.05.33-.09,3.26-.89.07,0,.68-.19,1.47-.41,1.29-.38c.56-.16,1-.3,1.29-.41a1.25,1.25,0,0,0,.45-.2l.1-.12a6.14,6.14,0,0,0,1.14-2.79c.05-.29.1-.59.14-.93A12,12,0,0,0,190.45,294.21Zm-37.89-51.87a10,10,0,0,1,.92-.92,3.74,3.74,0,0,1,.4-.32l0,0a4,4,0,0,1,.46-.3,3.91,3.91,0,0,1,2.94-.4l.16,0a4.26,4.26,0,0,1,.82.36h0c3.7,2.07,6,9.56,4.92,13.54s-5,7.67-8.27,9.46l-.59.31h0l-.15.07a6.68,6.68,0,0,1-2.45.7h-.21c-3.18,0-5.05-2.26-5.16-6.73-.06-2.42,1.11-6.57,2.79-10.24A24,24,0,0,1,152.56,242.34Z"
       style="fill:#aa0000"
       id="path102" />
    <path
       d="M190.23,292.41l-2.79.6-1.63.35-4.69,1-.21.05-.35.07-.1,0-3.13.67-1.21.26-.22.05-1.74.37-1,.21-18.73,4h0l-4.3.92-10.3,2.21-2.77.59-.49.1-4.73,1-1.49.31h0l-1.6.34q-1-1.23-2-2.55c.09-.27.19-.54.28-.79l4.15-.89,2-.42,5-1.08.4-.09,1.62-.34h0l2.83-.61h0l7.21-1.54,19.57-4.2h0l1.3-.28h0l4.92-1,3.87-.83,6.88-1.47h0l2.45-.52a22.17,22.17,0,0,1,.8,2.71c0,.11.05.21.07.32S190.2,292.24,190.23,292.41Z"
       style="fill:#fff"
       id="path103" />
    <path
       d="M188.38,283l-60,12.84a11.07,11.07,0,0,1,1.08-4l58.25-12.45A12.32,12.32,0,0,1,188.38,283Z"
       style="fill:#fff"
       id="path104" />
    <path
       d="M186.64,274.06,132,285.76a18.32,18.32,0,0,1,1-3.94l53.13-11.38A12.23,12.23,0,0,1,186.64,274.06Z"
       style="fill:#fff"
       id="path105" />
    <path
       d="M151.3,266.53c0,3.76,0,7.51-.1,11.27s-.21,7.5-.3,11.25l-.48,11.26c-.19,3.74-.4,7.49-.68,11.24,0-3.76,0-7.51.1-11.26l.31-11.26c.16-3.75.28-7.5.48-11.25S151,270.28,151.3,266.53Z"
       style="fill:#263238"
       id="path106" />
    <path
       d="M171.88,246.4c1.08,4.73,2.06,9.47,3,14.23s1.83,9.52,2.72,14.28,1.67,9.55,2.36,14.36c.16,1.2.34,2.4.49,3.6a26,26,0,0,1,.31,3.64c0,2.43-.11,4.86-.27,7.27,0-2.42,0-4.84-.08-7.26,0-.6-.06-1.2-.15-1.79l-.27-1.79c-.18-1.2-.4-2.39-.59-3.59-.82-4.77-1.65-9.54-2.54-14.31l-2.54-14.31C173.49,256,172.65,251.19,171.88,246.4Z"
       style="fill:#263238"
       id="path107" />
    <path
       d="M128.94,297.71c4.86-1.12,9.73-2.16,14.6-3.21l14.62-3.08,14.63-3,7.32-1.52c2.44-.49,4.86-1,7.3-1.59-4.79,1.41-9.64,2.54-14.49,3.67s-9.74,2.14-14.61,3.18-9.76,2-14.66,2.9S133.86,296.9,128.94,297.71Z"
       style="fill:#263238"
       id="path108" />
    <path
       d="M131.9,288.59c4.44-1,8.9-1.95,13.35-2.89l13.36-2.76L172,280.23l6.68-1.37c2.23-.45,4.45-.94,6.68-1.44-4.37,1.31-8.8,2.35-13.24,3.38s-8.89,1.93-13.35,2.87-8.92,1.77-13.4,2.59S136.4,287.88,131.9,288.59Z"
       style="fill:#263238"
       id="path109" />
    <rect
       x="168.23"
       y="266.22"
       width="11.9"
       height="3.88"
       transform="translate(-62.09 52.7) rotate(-14.63)"
       style="fill:#263238"
       id="rect109" />
    <rect
       x="170.11"
       y="273.41"
       width="11.9"
       height="3.88"
       transform="translate(-63.85 53.41) rotate(-14.63)"
       style="fill:#263238"
       id="rect110" />
    <rect
       x="173.95"
       y="292.35"
       width="11.9"
       height="3.88"
       transform="translate(-68.51 55) rotate(-14.63)"
       style="fill:#263238"
       id="rect111" />
    <path
       d="M171.88,246.4c-3.32.42-11.52-3.91-13.34-8.79-.12-.34.83-3.53,1.8-7.47.58-2.39,1.16-5.07,1.52-7.55.08-.51,15,6,15,6a39.83,39.83,0,0,0-2.89,9.31,6,6,0,0,0,0,1,1,1,0,0,1,0,.17C174,241.12,175.43,246,171.88,246.4Z"
       style="fill:#d3766a"
       id="path111" />
    <path
       d="M174,239c0,.05,0,.11,0,.17a9.46,9.46,0,0,1-1.61-.15c-9.13-1.53-9.88-13.34-9.93-16.31,2.71.79,14.47,5.95,14.47,5.95a39.83,39.83,0,0,0-2.89,9.31A5.13,5.13,0,0,0,174,239Z"
       style="fill:#263238"
       id="path112" />
    <path
       d="M180.69,198.88s5.22,2.06,6.27,7.31-.05,10.79-.51,11.06S180.69,198.88,180.69,198.88Z"
       style="fill:#263238"
       id="path113" />
    <path
       d="M160.33,206.44c-1.68,5.58,1.35,21.68,5.34,25.25,5.77,5.17,15.19,5.62,19.57-1.31,4.26-6.72-.06-27.62-4.5-30.86C174.19,194.74,162.8,198.19,160.33,206.44Z"
       style="fill:#d3766a"
       id="path114" />
    <path
       d="M176.41,216.17s-.07.06-.06.11c.23,1.08.31,2.35-.6,2.89,0,0,0,.07,0,.06C176.94,218.84,176.81,217.15,176.41,216.17Z"
       style="fill:#263238"
       id="path115" />
    <path
       d="M175.24,215.21c-1.77.19-1.27,3.71.37,3.54S176.72,215.06,175.24,215.21Z"
       style="fill:#263238"
       id="path116" />
    <path
       d="M182.44,215.28c0-.05.09,0,.09.08.13,1.1.45,2.33,1.49,2.55,0,0,0,.07,0,.07C182.79,218,182.38,216.34,182.44,215.28Z"
       style="fill:#263238"
       id="path117" />
    <path
       d="M183.25,214c1.73-.39,2.38,3.12.77,3.47S181.79,214.32,183.25,214Z"
       style="fill:#263238"
       id="path118" />
    <path
       d="M173.62,213.8a13.24,13.24,0,0,0,1.29-.68,2.28,2.28,0,0,0,1.19-.94.74.74,0,0,0-.25-.88,1.86,1.86,0,0,0-1.89.07,2.75,2.75,0,0,0-1.39,1.4A.81.81,0,0,0,173.62,213.8Z"
       style="fill:#263238"
       id="path119" />
    <path
       d="M184.36,212a12.09,12.09,0,0,1-1.46-.17,2.35,2.35,0,0,1-1.45-.44.77.77,0,0,1-.08-.92,1.85,1.85,0,0,1,1.79-.61,2.7,2.7,0,0,1,1.8.8A.8.8,0,0,1,184.36,212Z"
       style="fill:#263238"
       id="path120" />
    <path
       d="M176.53,226.28c.3.22.61.53,1,.51a3,3,0,0,0,1.13-.44s.08,0,.06.05a1.49,1.49,0,0,1-1.3.79,1.19,1.19,0,0,1-1-.85C176.41,226.28,176.49,226.25,176.53,226.28Z"
       style="fill:#263238"
       id="path121" />
    <path
       d="M177.21,222.85a3.77,3.77,0,0,0,2.72,1.3,5.08,5.08,0,0,0,1.34-.13,1.49,1.49,0,0,0,.25-.07l.24-.07a.27.27,0,0,0,.18-.28h0a.35.35,0,0,0,0-.11h0v-.1c-.1-.84-.36-2.11-.36-2.11.33.11,2,.59,1.9.16a55.58,55.58,0,0,0-3.05-11.05.1.1,0,0,0-.19.06c.57,3.49,1.75,6.86,2.38,10.36a6.23,6.23,0,0,0-1.83-.28c-.11,0,.55,2.43.57,2.82v0a5.18,5.18,0,0,1-4-.65C177.21,222.68,177.13,222.77,177.21,222.85Z"
       style="fill:#263238"
       id="path122" />
    <path
       d="M180.72,223.66a4.55,4.55,0,0,1-1.57,1.62,2,2,0,0,1-1.2.25c-.9-.11-1-.9-1-1.61a4.83,4.83,0,0,1,.24-1.1A5.78,5.78,0,0,0,180.72,223.66Z"
       style="fill:#263238"
       id="path123" />
    <path
       d="M179.15,225.28a2,2,0,0,1-1.2.25c-.9-.11-1-.9-1-1.61A2.07,2.07,0,0,1,179.15,225.28Z"
       style="fill:#ff9bbc"
       id="path124" />
    <path
       d="M162.15,220c3-.51,1.91-7.88,1.91-7.88s4.53-1.33,6.1-7.91c0,0,6.34,3.08,11.23,1.63,7.66-2.28,6.34-12.4,3.19-14.15-4.46-2.48-11.38,2.6-11.38,2.6s-11.51-1.89-14,6a5.77,5.77,0,0,0-4.7,6.3C154.75,212.12,159.91,220.35,162.15,220Z"
       style="fill:#263238"
       id="path125" />
    <path
       d="M163.07,213.08a10.36,10.36,0,0,0,5.49-3.82,7.72,7.72,0,0,0,1-7,.11.11,0,0,1,.2-.07,9,9,0,0,1-.43,7.55,7.21,7.21,0,0,1-6.25,3.59A.11.11,0,0,1,163.07,213.08Z"
       style="fill:#263238"
       id="path126" />
    <path
       d="M153.74,203.4c1.33-2.11,3.64-2.67,6-2.85a.11.11,0,0,1,0,.21,6.5,6.5,0,0,0-5.43,3.76c-1,2-.45,4.24.24,6.22a16.31,16.31,0,0,0,7.54,8.95c.06,0,0,.13,0,.1A16.34,16.34,0,0,1,153.6,210C153,207.91,152.52,205.36,153.74,203.4Z"
       style="fill:#263238"
       id="path127" />
    <path
       d="M172.94,194.66a7.66,7.66,0,0,1,3.93-3.76,9.18,9.18,0,0,1,6.55-.05,5.17,5.17,0,0,1,3.18,4.1,9.16,9.16,0,0,1-1.41,6s-.11,0-.08,0a9.15,9.15,0,0,0,1-5.41,4.77,4.77,0,0,0-3.25-3.89c-3.36-1.08-8-.33-9.76,3.16A.1.1,0,1,1,172.94,194.66Z"
       style="fill:#263238"
       id="path128" />
    <path
       d="M164.47,219.73s-3.77-5.12-6.1-3.76.6,8.84,3.4,9.8a2.82,2.82,0,0,0,3.74-1.61Z"
       style="fill:#d3766a"
       id="path129" />
    <path
       d="M159.26,218.09s0,.06,0,.08c2,.74,3,2.52,3.8,4.37a1.57,1.57,0,0,0-2.35-.37s0,.12.06.1a1.76,1.76,0,0,1,1.93.56,8.81,8.81,0,0,1,.95,1.52c.09.17.41.07.33-.13v0C163.94,221.7,161.93,218.28,159.26,218.09Z"
       style="fill:#263238"
       id="path130" />
    <path
       d="M252.65,327.83a2,2,0,0,1-.08.55,4.81,4.81,0,0,1-2.44,2.47H205.06c-3.72,0-7.31,0-10.79-.05h-.74l-2.4-.05-.86,0-1.7-.05-1.42-.05a5.08,5.08,0,0,1-1.86-1.78h0a2.13,2.13,0,0,1-.26-1,2.1,2.1,0,0,1,0-.43h0a2.54,2.54,0,0,1,.56-1.06c1.48-1.83,5.62-3.44,11.45-4.59a102,102,0,0,1,14.1-1.67h0l2.6-.11c1.63-.06,3.3-.09,5-.09,2.63,0,5.18.07,7.63.2h.08a101,101,0,0,1,14.17,1.69h0c5.76,1.16,9.86,2.75,11.32,4.57a3.06,3.06,0,0,1,.42.64h0A2.14,2.14,0,0,1,252.65,327.83Z"
       style="fill:#37474f"
       id="path131" />
    <path
       d="M255.5,312.19c0,.17,0,.35,0,.53h0a30.5,30.5,0,0,1-.19,3.11,29.13,29.13,0,0,1-.56,3.18,1.31,1.31,0,0,1-.06.27q-.13.58-.3,1.17a30.66,30.66,0,0,1-2.34,5.87c0,.09-.09.18-.14.27h0s0,.09,0,.14a2.74,2.74,0,0,1-.87,1.54,8.14,8.14,0,0,1-1.82,1.3,16.66,16.66,0,0,1-1.78.82c-.38.16-.77.31-1.19.45H205.06c-3.72,0-7.31,0-10.79-.05h-.74l-2.4-.05-.74-.29a15,15,0,0,1-1.78-.8h0a8.26,8.26,0,0,1-1.85-1.26,3,3,0,0,1-.91-1.35,1.63,1.63,0,0,1-.08-.43c-.05-.09-.1-.18-.14-.27a29.74,29.74,0,0,1-3.27-10.54h0a30.77,30.77,0,0,1-.2-3.12v-.36a28.38,28.38,0,0,1,.15-3q0-.33.06-.66c0-.47.12-.93.19-1.38.12-.78.27-1.52.43-2.22s.3-1.23.46-1.79.25-.83.38-1.22a.38.38,0,0,1,0-.1l.32-.94c.2-.54.4-1,.58-1.45s.25-.6.37-.84c.38-.82.64-1.27.64-1.27H251.9s.26.45.64,1.28a33.17,33.17,0,0,1,2.82,10.61s0,0,0,0C255.45,310.27,255.5,311.21,255.5,312.19Z"
       style="fill:#d40000"
       id="path132" />
    <path
       d="M255.5,312.19c0,.17,0,.35,0,.53h0a30.5,30.5,0,0,1-.19,3.11,29.13,29.13,0,0,1-.56,3.18,1.31,1.31,0,0,1-.06.27q-.13.58-.3,1.17a30.66,30.66,0,0,1-2.34,5.87c0,.09-.09.18-.14.27h0s0,.09,0,.14a2.74,2.74,0,0,1-.87,1.54,8.14,8.14,0,0,1-1.82,1.3,16.66,16.66,0,0,1-1.78.82c-.38.16-.77.31-1.19.45H205.06c-3.72,0-7.31,0-10.79-.05h-.74l-2.4-.05-.74-.29a15,15,0,0,1-1.78-.8h0a8.26,8.26,0,0,1-1.85-1.26,3,3,0,0,1-.91-1.35,1.63,1.63,0,0,1-.08-.43c-.05-.09-.1-.18-.14-.27a29.74,29.74,0,0,1-3.27-10.54h0a30.77,30.77,0,0,1-.2-3.12v-.36a28.38,28.38,0,0,1,.15-3q0-.33.06-.66c0-.47.12-.93.19-1.38.12-.78.27-1.52.43-2.22s.3-1.23.46-1.79.25-.83.38-1.22a.38.38,0,0,1,0-.1l.32-.94c.2-.54.4-1,.58-1.45s.25-.6.37-.84c.38-.82.64-1.27.64-1.27H251.9s.26.45.64,1.28a33.17,33.17,0,0,1,2.82,10.61s0,0,0,0C255.45,310.27,255.5,311.21,255.5,312.19Z"
       style="opacity:0.2;fill:#aa0000"
       id="path133" />
    <ellipse
       cx="218.83"
       cy="298.1"
       rx="33.82"
       ry="7.96"
       style="fill:#37474f"
       id="ellipse133" />
    <ellipse
       cx="218.83"
       cy="296.82"
       rx="33.07"
       ry="7.78"
       style="fill:#ebebeb"
       id="ellipse134" />
    <path
       d="M186.83,299.92a1,1,0,1,1-1-1A1,1,0,0,1,186.83,299.92Z"
       style="fill:#fff"
       id="path134" />
    <path
       d="M190.43,302.1a1,1,0,1,1-1-1A1,1,0,0,1,190.43,302.1Z"
       style="fill:#fff"
       id="path135" />
    <path
       d="M199.46,304.44a1,1,0,1,1-1-1A1,1,0,0,1,199.46,304.44Z"
       style="fill:#fff"
       id="path136" />
    <path
       d="M194.87,303.62a1,1,0,1,1-1-1A1,1,0,0,1,194.87,303.62Z"
       style="fill:#fff"
       id="path137" />
    <path
       d="M204.18,305.07a1,1,0,1,1-1-1A1,1,0,0,1,204.18,305.07Z"
       style="fill:#fff"
       id="path138" />
    <path
       d="M208.86,305.71a1,1,0,1,1-1-1A1,1,0,0,1,208.86,305.71Z"
       style="fill:#fff"
       id="path139" />
    <path
       d="M213.86,306.06a1,1,0,1,1-1-1A1,1,0,0,1,213.86,306.06Z"
       style="fill:#fff"
       id="path140" />
    <path
       d="M225.22,305.93a1,1,0,1,1-1-1A1,1,0,0,1,225.22,305.93Z"
       style="fill:#fff"
       id="path141" />
    <path
       d="M219.3,306.06a1,1,0,1,1-1-1A1,1,0,0,1,219.3,306.06Z"
       style="fill:#fff"
       id="path142" />
    <path
       d="M230.63,305.71a1,1,0,1,1-1-1A1,1,0,0,1,230.63,305.71Z"
       style="fill:#fff"
       id="path143" />
    <ellipse
       cx="234.69"
       cy="305.07"
       rx="0.99"
       ry="0.99"
       style="fill:#fff"
       id="ellipse143" />
    <path
       d="M240.28,304.4a1,1,0,1,1-1-1A1,1,0,0,1,240.28,304.4Z"
       style="fill:#fff"
       id="path144" />
    <path
       d="M244.9,303.41a1,1,0,1,1-1-1A1,1,0,0,1,244.9,303.41Z"
       style="fill:#fff"
       id="path145" />
    <ellipse
       cx="248.35"
       cy="301.99"
       rx="0.99"
       ry="0.99"
       style="fill:#fff"
       id="ellipse145" />
    <path
       d="M252.82,299.64a1,1,0,1,1-1-1A1,1,0,0,1,252.82,299.64Z"
       style="fill:#fff"
       id="path146" />
    <path
       d="M186.83,328a1,1,0,1,1-1-1A1,1,0,0,1,186.83,328Z"
       style="fill:#fff"
       id="path147" />
    <path
       d="M190.43,330.19a.75.75,0,0,1,0,.26.66.66,0,0,1-.12.27l-1.7-.05a1,1,0,0,1-.13-.48.94.94,0,0,1,.17-.54h0a1,1,0,0,1,.83-.44A1,1,0,0,1,190.43,330.19Z"
       style="fill:#fff"
       id="path148" />
    <path
       d="M194.27,330.8h-.74a.84.84,0,0,1,.35-.07A1,1,0,0,1,194.27,330.8Z"
       style="fill:#fff"
       id="path149" />
    <path
       d="M244.64,330.85h-1.46a1,1,0,0,1,1.46,0Z"
       style="fill:#fff"
       id="path150" />
    <path
       d="M249.34,330.08a1,1,0,0,1-.38.77h-1.23a.91.91,0,0,1-.32-.45.87.87,0,0,1-.06-.32,1,1,0,0,1,1-1,1,1,0,0,1,.84.48A.89.89,0,0,1,249.34,330.08Z"
       style="fill:#fff"
       id="path151" />
    <path
       d="M252.82,327.73a1,1,0,1,1-1-1A1,1,0,0,1,252.82,327.73Z"
       style="fill:#fff"
       id="path152" />
    <path
       d="M182.16,309.11a6.72,6.72,0,0,0,1.75,1.61A15,15,0,0,0,186,311.9c.7.38,1.46.63,2.19.94s1.51.5,2.27.75a63.11,63.11,0,0,0,9.34,1.9,148.39,148.39,0,0,0,19.09,1.07A152.06,152.06,0,0,0,238,315.51a61.64,61.64,0,0,0,9.35-1.86c.77-.23,1.51-.5,2.27-.74s1.49-.56,2.19-.94a14.46,14.46,0,0,0,2.05-1.2,6.24,6.24,0,0,0,1.7-1.66,9.16,9.16,0,0,1-3.63,3.09c-.69.42-1.45.7-2.17,1.06s-1.5.59-2.26.85a60.55,60.55,0,0,1-9.39,2.16,138.65,138.65,0,0,1-19.2,1.29,135.64,135.64,0,0,1-19.2-1.31,64.46,64.46,0,0,1-9.38-2.19c-.75-.29-1.51-.56-2.26-.87s-1.47-.64-2.17-1.05A10.17,10.17,0,0,1,182.16,309.11Z"
       style="fill:#ff0000"
       id="path153" />
    <path
       d="M181.84,312.2a6.51,6.51,0,0,0,1.76,1.63,14.78,14.78,0,0,0,2.08,1.2c.71.38,1.47.63,2.21.94s1.52.51,2.28.76a64.6,64.6,0,0,0,9.43,1.92,151,151,0,0,0,19.26,1.08,152.88,152.88,0,0,0,19.26-1.06,62.83,62.83,0,0,0,9.44-1.88c.77-.23,1.52-.5,2.29-.75s1.5-.57,2.2-1a13.92,13.92,0,0,0,2.08-1.21,6.18,6.18,0,0,0,1.7-1.68,9.13,9.13,0,0,1-3.66,3.13c-.69.42-1.46.71-2.19,1.07s-1.51.59-2.28.85a60.44,60.44,0,0,1-9.47,2.18,142.7,142.7,0,0,1-19.37,1.3,138,138,0,0,1-19.37-1.32A64,64,0,0,1,190,317.2c-.76-.3-1.53-.57-2.28-.88s-1.49-.64-2.19-1.06A10.07,10.07,0,0,1,181.84,312.2Z"
       style="fill:#ff0000"
       id="path154" />
    <path
       d="M182.06,315.37a6.55,6.55,0,0,0,1.75,1.61,15.19,15.19,0,0,0,2.07,1.19c.7.38,1.46.63,2.19.94s1.52.51,2.27.76a65,65,0,0,0,9.38,1.9,147.38,147.38,0,0,0,19.14,1.07,153.12,153.12,0,0,0,19.15-1,61.31,61.31,0,0,0,9.38-1.87c.76-.22,1.51-.49,2.27-.74s1.49-.56,2.19-.94a15.32,15.32,0,0,0,2.07-1.21,6.07,6.07,0,0,0,1.69-1.66,9.1,9.1,0,0,1-3.63,3.1c-.7.42-1.45.71-2.18,1.06s-1.5.59-2.27.86a61.82,61.82,0,0,1-9.42,2.16,139.26,139.26,0,0,1-19.25,1.29,136.24,136.24,0,0,1-19.25-1.31,63,63,0,0,1-9.41-2.2c-.76-.29-1.52-.56-2.26-.87s-1.49-.64-2.18-1A10.06,10.06,0,0,1,182.06,315.37Z"
       style="fill:#ff0000"
       id="path155" />
    <path
       d="M196.36,230.9c-1.06-.38-2.38.61-2.94,2.2a3.23,3.23,0,0,0,.29,3.12l-18,47.93L179,285.3l16.08-48.59a3.24,3.24,0,0,0,2.17-2.25C197.84,232.87,197.43,231.28,196.36,230.9Z"
       style="fill:#ff2a2a"
       id="path156" />
    <path
       d="M177.6,298a.29.29,0,0,1,0,.1.71.71,0,0,1-.36.38l-.19.08c-2.27,1-4.79,2.13-7.47,3.22-2.41,1-5,2-7.56,2.94l-1.71.62h0c-3.44,1.24-7,2.42-10.43,3.47s-6.77,1.93-10,2.64h0c-1.7.38-3.34.7-4.92.95a.18.18,0,0,1-.1,0l-.42-.42q-1.73-1.75-3.49-3.78c-.32-.37-.65-.75-1-1.14s-.84-1-1.25-1.5q-1-1.23-2-2.55c-2.26-2.9-4.54-6-6.81-9.32,2.78-8.3,7.85-18.28,13.71-27.65l1.47-2.3.09-.15a159.79,159.79,0,0,1,9.69-13.43,52.9,52.9,0,0,1,6.08-6.5c.57-.5,1.12-.94,1.64-1.33L153,242c4.77-3.26,7-.92,3.13,10-1.59,4.49-3.17,8.9-4.58,12.85-.71,2-1.38,3.91-2,5.63,0,.1-.07.2-.1.3-.36,1-.68,2-1,2.84-.78,2.32-1.34,4.12-1.59,5.18-.17.7-.2,1.09-.06,1.09h0c.17-.06,1.78-.58,4-1.41.92-.34,2-.74,3-1.17h0a65.87,65.87,0,0,0,8.72-4.12h0c.65-.36,1.72.3,3,1.62a30,30,0,0,1,2.6,3.18c.65.9,1.32,1.88,2,2.91.41.64.83,1.31,1.23,2,.66,1.09,1.29,2.21,1.9,3.32.38.71.75,1.43,1.1,2.13.59,1.17,1.13,2.31,1.58,3.38.21.49.4,1,.58,1.42.09.25.18.49.26.73.17.46.31.9.43,1.3a10.83,10.83,0,0,1,.35,1.71A2.68,2.68,0,0,1,177.6,298Z"
       style="fill:#d3766a"
       id="path157" />
    <path
       d="M193.59,257.64a4.24,4.24,0,0,1,1.14,4.72,6.3,6.3,0,0,1,3.81,2c1.67,2-.72,5.49-.72,5.49a7.79,7.79,0,0,1,3.68,2.73c1.41,2.07-.5,5.95-.5,5.95a6.86,6.86,0,0,1,1.73,4.44c-.11,4.39-5.89,7.8-9.53,10s-16.06,5-18.37,5.81l-14.34-23.28S174,261,178.69,259C182.61,257.3,191,255.52,193.59,257.64Z"
       style="fill:#d3766a"
       id="path158" />
    <path
       d="M194.34,262.09c-4.6.77-8.72,2.86-12.94,4.72-.1,0,0,.19.06.14,4.18-1.89,8.69-2.93,12.94-4.65A.11.11,0,0,0,194.34,262.09Z"
       style="fill:#263238"
       id="path159" />
    <path
       d="M197.55,269.58a12.28,12.28,0,0,0-2.93,1.22c-1,.5-2,1-3,1.56-2,1.07-3.94,2.19-5.86,3.37-.09,0,0,.19.06.14,2-1.06,4-2.1,6-3.08l3-1.45a14,14,0,0,0,2.82-1.48A.16.16,0,0,0,197.55,269.58Z"
       style="fill:#263238"
       id="path160" />
    <path
       d="M200.91,278.56a8.41,8.41,0,0,0-2.58,1.24c-.89.51-1.79,1-2.69,1.51-1.8,1-3.59,2-5.42,2.92-.1,0,0,.19.06.14,1.87-.93,3.74-1.85,5.6-2.8l2.73-1.42a8.17,8.17,0,0,0,2.36-1.5A.06.06,0,0,0,200.91,278.56Z"
       style="fill:#263238"
       id="path161" />
    <path
       d="M146.88,279.91a71.74,71.74,0,0,1-6.25,4.06c-2.14,1.24-4.28,2.47-6.57,3.51a36.48,36.48,0,0,1,6.07-4.37A36.92,36.92,0,0,1,146.88,279.91Z"
       style="fill:#263238"
       id="path162" />
    <path
       d="M158.39,251.41c4.1-12.93-2-14.18-10.63-5.67a192,192,0,0,0-16.37,19.19l19.56,10Z"
       style="fill:#263238"
       id="path163" />
    <path
       d="M157.32,255.52c-.52,1.71-1,3.44-1.47,5.16.41-.65.84-1.28,1.31-1.9a0,0,0,1,1,0,0c-.32.52-.62,1.05-.95,1.57-.16.24-.31.49-.47.74l-.09.16c-.38,1.34-.76,2.69-1.17,4-.49,1.59-1,3.16-1.54,4.74s-1.31,3.37-1.79,5a11.28,11.28,0,0,1-1.92-.95c-.19-.08-.13-.28,0-.17s1.74.73,1.77.73c.53-1.58.89-3.22,1.37-4.83s1-3.18,1.48-4.77c1-3.21,2.27-6.37,3.34-9.57C157.27,255.45,157.33,255.48,157.32,255.52Z"
       style="fill:#37474f"
       id="path164" />
    <path
       d="M134.21,263.18c2.89,1.26,14.55,6.82,17,8.19.17.09.16.22,0,.14a172.27,172.27,0,0,1-17-8.21C134.1,263.27,134.14,263.15,134.21,263.18Z"
       style="fill:#37474f"
       id="path165" />
  </g>
  <g
     id="freepik--character-2--inject-5">
    <path
       d="M304.81,277.36C317,287.83,332,297.47,340.94,300.17c6,1.81,23-12.48,35.2-27.82,2.44-3.05-12.68-24.45-15.11-21.06-6.36,8.86-18.17,23.1-20.61,23.35-2,.21-16.66-4-27.63-7.48C295.33,261.61,296.27,270,304.81,277.36Z"
       style="fill:#ad6359"
       id="path166" />
    <path
       d="M329.16,271.9l-7,22.54s-16.15-11.84-21.79-20-3.16-12.54,5.8-10.27S329.16,271.9,329.16,271.9Z"
       style="fill:#a6a6a6"
       id="path167" />
    <path
       d="M317.86,289.92c0-1.6,2.61-12.19,5.44-19.4a.09.09,0,0,1,.17.06c-.21.83-4.65,18-5.38,19.41C318,290.11,317.85,290,317.86,289.92Z"
       style="fill:#263238"
       id="path168" />
    <path
       d="M325.58,283.38l-3.45,11.06s-16.14-11.84-21.78-20c-3.89-5.64-3.92-9.47-.61-10.54Z"
       style="opacity:0.1"
       id="path169" />
    <path
       d="M325.07,330.85H269.7c0-.61.08-1.26.14-2,0-.5.07-1,.11-1.54.1-1.17.21-2.43.33-3.76.1-1,.21-2.13.33-3.26s.25-2.33.4-3.55c2-17,6.48-40,16-48.86a21,21,0,0,1,5-3.51,13.07,13.07,0,0,1,14.95,1.7,16.39,16.39,0,0,1,1.65,1.68c1.28,1.52,12.57,14.51,13.66,23a20.14,20.14,0,0,1-3,13.11l1.64,7.54.72,3.31.68,3.14.75,3.47.37,1.66.68,3.14.74,3.41Z"
       style="fill:#a6a6a6"
       id="path170" />
    <path
       d="M310.88,302a53.19,53.19,0,0,0-8,2.46c-1.29.53-2.54,1.12-3.79,1.75-.62.31-1.25.59-1.89.88a8.37,8.37,0,0,1-2.05.68c-.06,0,0,.12,0,.11a15.6,15.6,0,0,0,2-.29,13.88,13.88,0,0,0,1.88-.64c1.31-.52,2.6-1.11,3.9-1.65,2.64-1.09,5.27-2.18,8-3.06C311.06,302.18,311,302,310.88,302Z"
       style="fill:#263238"
       id="path171" />
    <path
       d="M318,303.73a56.57,56.57,0,0,0-6.88.51c-1.14.15-2.26.38-3.38.64-.54.12-1.07.26-1.6.4s-1.15.4-1.74.54c-.06,0-.05.12,0,.11.55-.12,1.13-.15,1.7-.23l1.7-.26c1.13-.18,2.26-.33,3.4-.52,2.26-.37,4.53-.71,6.8-1C318.16,303.91,318.12,303.73,318,303.73Z"
       style="fill:#263238"
       id="path172" />
    <path
       d="M326.2,314.27c0-.44,0-.78,0-1-.31-3-4.55-9.58-4.55-9.58s3.64-9.13,1.48-14.52c-4-10.07-11.38-19.71-16.15-23l-.24-.17c2.89,2.24,2.51,11.13.84,11.74s-8-1.86-10.49-4.08c-1.6-1.44-5-6.66-5.06-9.19a1.76,1.76,0,0,1,.16-.87c-2.27.76-7,4.22-8.11,6.21-5.79,10.58-11.84,24.89-14.21,38.1a26.61,26.61,0,0,0-2.3,6.23,14.59,14.59,0,0,0,.37,6.54l0,.08a24.47,24.47,0,0,0-1,3.26,23.69,23.69,0,0,0-.69,5.32c0,.39,0,.78,0,1.18a2.71,2.71,0,0,0,.06.38h59.12c0-.05.26-2.9.36-4.85.06-1,.11-2.07.17-3.23.08-1.76.15-3.64.19-5.27C326.2,316.22,326.22,315.09,326.2,314.27Zm-33.91-34.83c4.47,10.62-.85,19.46-8.88,21.71s-8-12.45-1.22-25.43C285.39,269.55,287.82,268.81,292.29,279.44Z"
       style="fill:#FFC727"
       id="path173" />
    <path
       d="M326.2,314.27c0-.44,0-.78,0-1-.31-3-4.55-9.58-4.55-9.58s3.64-9.13,1.48-14.52c-4-10.07-11.38-19.71-16.15-23l-.24-.17c2.89,2.24,2.51,11.13.84,11.74s-8-1.86-10.49-4.08c-1.6-1.44-5-6.66-5.06-9.19a1.76,1.76,0,0,1,.16-.87c-2.27.76-7,4.22-8.11,6.21-5.79,10.58-11.84,24.89-14.21,38.1a26.61,26.61,0,0,0-2.3,6.23,14.59,14.59,0,0,0,.37,6.54l0,.08a24.47,24.47,0,0,0-1,3.26,23.69,23.69,0,0,0-.69,5.32c0,.39,0,.78,0,1.18a2.71,2.71,0,0,0,.06.38h59.12c0-.06.26-2.9.36-4.85.06-1,.11-2.07.17-3.23.08-1.76.15-3.64.19-5.27C326.2,316.22,326.22,315.09,326.2,314.27Zm-44-38.55c3.2-6.17,5.63-6.91,10.1,3.72s-.85,19.46-8.88,21.71S275.46,288.7,282.19,275.72Z"
       style="fill:#aa0000"
       id="path174" />
    <path
       d="M326,322.77c-.06,1.16-.11,2.26-.17,3.23l-1.74.19-42.59,4.66H266.32a2.71,2.71,0,0,1-.06-.38c0-.4,0-.79,0-1.18l3.62-.39,16.53-1.81,37-4Z"
       style="fill:#fff"
       id="path175" />
    <path
       d="M326.16,317.5,266.91,324a24.47,24.47,0,0,1,1-3.26l0-.08,58.3-6.36C326.22,315.09,326.2,316.22,326.16,317.5Z"
       style="fill:#fff"
       id="path176" />
    <path
       d="M285.36,300.49c.25,2.46.41,4.92.57,7.38s.24,4.93.36,7.39.17,4.93.2,7.4.05,4.93,0,7.4c-.25-2.46-.41-4.92-.57-7.38s-.24-4.93-.36-7.39-.16-4.93-.2-7.39S285.3,303,285.36,300.49Z"
       style="fill:#263238"
       id="path177" />
    <path
       d="M307.54,277.69c1.46,2.34,2.8,4.74,4.06,7.19s2.43,4.94,3.53,7.47c.26.65.54,1.26.78,1.93a10.44,10.44,0,0,1,.51,2.07,12.66,12.66,0,0,1-.08,4.21,17.27,17.27,0,0,1-3.53,7.53l.05-.17a28.66,28.66,0,0,1,.13,3.45l-.06,3.42c-.06,2.29-.14,4.57-.26,6.84l0-6.84-.05-3.42a31,31,0,0,0-.2-3.37v-.1l.06-.07a18.4,18.4,0,0,0,3.18-7.38,12.15,12.15,0,0,0,0-4,17.64,17.64,0,0,0-1.24-3.83c-1-2.54-2.2-5-3.34-7.52S308.77,280.15,307.54,277.69Z"
       style="fill:#263238"
       id="path178" />
    <path
       d="M267.25,327.66c4.75-.69,9.5-1.3,14.26-1.89l14.28-1.7,14.29-1.52c4.77-.47,9.54-.94,14.32-1.32-4.74.69-9.5,1.3-14.25,1.89l-14.28,1.7-14.3,1.52C276.8,326.81,272,327.28,267.25,327.66Z"
       style="fill:#263238"
       id="path179" />
    <path
       d="M268.59,317.05c4.56-.64,9.13-1.2,13.69-1.74L296,313.76l13.73-1.38c4.58-.43,9.16-.84,13.75-1.2-4.55.67-9.12,1.22-13.69,1.77l-13.71,1.55-13.74,1.38C277.76,316.3,273.18,316.72,268.59,317.05Z"
       style="fill:#263238"
       id="path180" />
    <rect
       x="307.5"
       y="287.94"
       width="10.04"
       height="3.27"
       transform="translate(-76.35 115.5) rotate(-18.7)"
       style="fill:#263238"
       id="rect180" />
    <rect
       x="310.1"
       y="293.68"
       width="10.04"
       height="3.27"
       transform="translate(-78.05 116.63) rotate(-18.7)"
       style="fill:#263238"
       id="rect181" />
    <path
       d="M279.54,247.53a2.91,2.91,0,0,0,2.14,5.25,3,3,0,0,0,0,1.23,3.2,3.2,0,0,0,3.56,2.46,2.61,2.61,0,0,0,0,1,2.92,2.92,0,0,0,5.14,1.15,2.91,2.91,0,0,0,3.44,1.94,2.72,2.72,0,0,0,1.11-.53,2,2,0,0,0,.05.26,2.92,2.92,0,0,0,5.54.46,2.91,2.91,0,0,0,5.44-.42,3.26,3.26,0,0,0,2.12.23,3.12,3.12,0,0,0,2-1.47,3.21,3.21,0,0,0,4.91-2.55,2.91,2.91,0,0,0,3.39-3.15,3.21,3.21,0,0,0,3.83-3.86,3.12,3.12,0,0,0-.41-1,1.86,1.86,0,0,0,.51-.06,2.93,2.93,0,0,0,2.19-3.5,2.89,2.89,0,0,0-.77-1.39,3.2,3.2,0,0,0,2.12-3.77,3.16,3.16,0,0,0-.85-1.54,3.23,3.23,0,0,0,1.36-3.41,3.16,3.16,0,0,0-1.79-2.19,2.9,2.9,0,0,0-1-4.21,3.17,3.17,0,0,0,.66-2.77,3.2,3.2,0,0,0-2.88-2.48,2.88,2.88,0,0,0,0-1.4,2.93,2.93,0,0,0-3.12-2.25,2.93,2.93,0,0,0,0-1.38,3.21,3.21,0,0,0-3.85-2.4,2.35,2.35,0,0,0-.7.26,3.12,3.12,0,0,0-.08-.52,3.22,3.22,0,0,0-3.85-2.4,2.7,2.7,0,0,0-.75.28,2.82,2.82,0,0,0-.07-.91,3.22,3.22,0,0,0-5.91-.91,3.19,3.19,0,0,0-3-.91,3.25,3.25,0,0,0-2,1.37,2.92,2.92,0,0,0-5.33.45,3,3,0,0,0-2.43-.51,2.92,2.92,0,0,0-2.24,2.55,3.15,3.15,0,0,0-2.55-.5,3.22,3.22,0,0,0-2.5,3.21,2.9,2.9,0,0,0-3.24,3.55,2.85,2.85,0,0,0,.41,1l-.19,0a3.23,3.23,0,0,0-2.41,3.87,3,3,0,0,0,.34.86,2.88,2.88,0,0,0-.77.08,2.91,2.91,0,0,0-.87,5.32,2.91,2.91,0,0,0,.37,4.63,3.21,3.21,0,0,0,1.24,6,2.87,2.87,0,0,0-.79,2.72A2.94,2.94,0,0,0,279.54,247.53Z"
       style="fill:#263238"
       id="path181" />
    <path
       d="M294.7,265.73c.14,1.1,4.56,8.63,9.51,8.91,1.62.09,2.49-8.69,2.49-8.69l.21-.64,3-8.86-10-7.95-1.45-1.07s-.65,2.48-1.43,5.58c0,.14-.08.29-.11.44s-.1.34-.14.5q-.18.69-.36,1.41c-.09.36-.17.7-.25,1.08s-.17.75-.25,1.13A61.25,61.25,0,0,0,294.7,265.73Z"
       style="fill:#ad6359"
       id="path182" />
    <path
       d="M297.05,253a18.75,18.75,0,0,0,9.86,12.3l3-8.86-10-7.95-1.45-1.07S297.83,249.91,297.05,253Z"
       style="fill:#263238"
       id="path183" />
    <path
       d="M293.48,243.22a19.18,19.18,0,0,1-2.54-12.89c1.32-7,10-11.79,17.82-10.39a14.39,14.39,0,0,1,9,5.06,14.33,14.33,0,0,0-15.92-1.4C292.76,228.35,292.1,239.61,293.48,243.22Z"
       style="fill:#ff2a2a"
       id="path184" />
    <path
       d="M323,241.34c1.16,16.37-8.52,18.92-12.05,19.16-3.2.22-14.14.58-17-15.59s4.41-21.88,11.71-22.78S321.84,225,323,241.34Z"
       style="fill:#ad6359"
       id="path185" />
    <path
       d="M295,245.49c2.67.15,3.14-5.46,3.14-5.46s5.42-.11,7-7.95a11.92,11.92,0,0,1-2.24,6.5s9.53-1.24,13.35-9.33c0,0-1.5,4.11-3,5.59a11.2,11.2,0,0,0,5.85-4.52s1.79,4.58,3.11,5.82c0,0-.81-16.7-16.24-14.54,0,0-9.68.88-13,8.63S295,245.49,295,245.49Z"
       style="fill:#263238"
       id="path186" />
    <path
       d="M319.2,235.76c-.35.15-.71.24-1.08.36a1.9,1.9,0,0,1-1.17.16.6.6,0,0,1-.37-.62,1.47,1.47,0,0,1,1.07-1,2.1,2.1,0,0,1,1.54,0A.63.63,0,0,1,319.2,235.76Z"
       style="fill:#263238"
       id="path187" />
    <path
       d="M308.13,239.75a8.64,8.64,0,0,0,1.14,0,1.8,1.8,0,0,0,1.16-.25.59.59,0,0,0,.13-.71,1.45,1.45,0,0,0-1.35-.59,2.13,2.13,0,0,0-1.46.5A.63.63,0,0,0,308.13,239.75Z"
       style="fill:#263238"
       id="path188" />
    <path
       d="M310.83,241.58s-.08.06-.07.11c.19,1.11.23,2.41-.73,2.92,0,0,0,.07,0,.06C311.26,244.32,311.19,242.6,310.83,241.58Z"
       style="fill:#263238"
       id="path189" />
    <path
       d="M309.67,240.56c-1.81.12-1.44,3.73.24,3.62S311.18,240.45,309.67,240.56Z"
       style="fill:#263238"
       id="path190" />
    <path
       d="M309,240.82c-.3.24-.57.63-1,.71s-.8-.26-1.13-.59c0,0-.06,0-.06.05.07.69.41,1.37,1.16,1.4s1.11-.64,1.21-1.35C309.23,240.9,309.1,240.73,309,240.82Z"
       style="fill:#263238"
       id="path191" />
    <path
       d="M317.31,240.25s.09,0,.1.09c.07,1.12.34,2.4,1.39,2.67,0,0,0,.07,0,.07C317.54,243,317.2,241.32,317.31,240.25Z"
       style="fill:#263238"
       id="path192" />
    <path
       d="M318.2,239c1.79-.31,2.27,3.29.62,3.58S316.7,239.24,318.2,239Z"
       style="fill:#263238"
       id="path193" />
    <path
       d="M319,239.12c.31.15.64.46,1,.44s.64-.46.84-.87c0,0,.05,0,.06,0,.11.69,0,1.44-.66,1.66s-1.11-.33-1.37-1C318.79,239.26,318.86,239.06,319,239.12Z"
       style="fill:#263238"
       id="path194" />
    <path
       d="M311.61,251.52c.28.25.57.59,1,.6a3,3,0,0,0,1.19-.35,0,0,0,0,1,.05,0,1.51,1.51,0,0,1-1.39.7,1.21,1.21,0,0,1-.94-.94C311.48,251.51,311.57,251.48,311.61,251.52Z"
       style="fill:#263238"
       id="path195" />
    <path
       d="M316.43,246.47s.46,1.68.56,2.48c0,.08-.18.14-.45.19h0a3.88,3.88,0,0,1-3.91-.94.09.09,0,0,1,.11-.13,5.76,5.76,0,0,0,3.62.54c0-.23-.88-2.84-.75-2.87a7.46,7.46,0,0,1,1.88.17c-.86-3.51-2.27-6.87-3.07-10.38a.11.11,0,0,1,.2-.08,58.8,58.8,0,0,1,3.79,11C318.5,247,316.77,246.57,316.43,246.47Z"
       style="fill:#263238"
       id="path196" />
    <path
       d="M316.45,248.6a4.71,4.71,0,0,1-1.48,1.86,2.16,2.16,0,0,1-1.23.38c-1,0-1.19-.84-1.19-1.59a4.84,4.84,0,0,1,.14-1.18A6.11,6.11,0,0,0,316.45,248.6Z"
       style="fill:#263238"
       id="path197" />
    <path
       d="M315,250.46a2.16,2.16,0,0,1-1.23.38c-1,0-1.19-.84-1.19-1.59A2.18,2.18,0,0,1,315,250.46Z"
       style="fill:#ff9bbc"
       id="path198" />
    <path
       d="M296.87,245.29s-3.51-5.21-5.87-4,.21,8.76,2.94,9.83a2.79,2.79,0,0,0,3.77-1.44Z"
       style="fill:#ad6359"
       id="path199" />
    <path
       d="M291.79,243.46s-.05,0,0,.07c1.91.81,2.9,2.61,3.57,4.48a1.54,1.54,0,0,0-2.3-.47c-.05,0,0,.12.06.11a1.7,1.7,0,0,1,1.87.63,7.86,7.86,0,0,1,.88,1.55c.09.17.4.08.34-.12l0,0C296.27,247.22,294.42,243.75,291.79,243.46Z"
       style="fill:#263238"
       id="path200" />
    <path
       d="M392.34,262.91c-3.94,4.38-15.5,10.19-18.82,10.52s-13.87-19-12.49-22.14,15.78-16.87,21.71-17.85S396.42,258.36,392.34,262.91Z"
       style="fill:#ad6359"
       id="path201" />
    <rect
       x="250.6"
       y="288.57"
       width="209.8"
       height="4.47"
       transform="translate(783.61 124.45) rotate(119.48)"
       style="fill:#263238"
       id="rect201" />
    <path
       d="M311,398.29l-14,24.82H262.72L285,383.77a8.2,8.2,0,0,1,4.08-3.56l16.94-6.8.2.12,3.7,2.09L312,393.28A8.09,8.09,0,0,1,311,398.29Z"
       style="fill:#FFC727"
       id="path202" />
    <path
       d="M311,398.29l-14,24.82H262.72L285,383.77a8.2,8.2,0,0,1,4.08-3.56l16.94-6.8.2.12,3.7,2.09L312,393.28A8.09,8.09,0,0,1,311,398.29Z"
       style="opacity:0.2"
       id="path203" />
    <path
       d="M300.25,382.83c-1.72,3.46-3.53,6.86-5.36,10.26s-3.73,6.75-5.59,10.13-3.83,6.69-5.8,10l-3,5c-1,1.63-2,3.29-3.06,4.91.85-1.73,1.75-3.43,2.63-5.15l2.72-5.11c1.83-3.39,3.73-6.75,5.6-10.13s3.82-6.69,5.79-10S298.17,386.08,300.25,382.83Z"
       style="opacity:0.1"
       id="path204" />
    <path
       d="M304.45,385.2c-1.61,3.26-3.31,6.47-5,9.67s-3.48,6.37-5.25,9.53-3.6,6.31-5.46,9.42l-2.8,4.67c-1,1.54-1.9,3.1-2.89,4.62.79-1.63,1.64-3.24,2.46-4.86l2.56-4.8c1.71-3.21,3.48-6.37,5.26-9.54s3.59-6.31,5.46-9.42S302.48,388.26,304.45,385.2Z"
       style="opacity:0.1"
       id="path205" />
    <path
       d="M373.92,236.78c-.59,3.06,3.36,2,3.36,2s-5.31,2.9-4.69,6.3,5.33,1.81,5.67,1.71c-.28.16-5.09,3-4.12,6.3s5.51,1.2,5.8,1.06c-.22.23-3,3.32-1.72,5.7,2.26,4.07,9.72-3.64,13.49-3.55,0,0,.58,6.42.63,6.61,0,0,7.24-7.2,7.08-12.3a3.26,3.26,0,0,0-2.6-3.15s2.59-2.06,1.9-4.72c-.35-1.36-2.85-2-2.85-2a4.1,4.1,0,0,0,1.25-4.06c-.6-1.86-3-2.22-3-2.22s1.15-2.56-.08-4.26C391.56,226.75,375.17,230.21,373.92,236.78Z"
       style="fill:#ad6359"
       id="path206" />
    <path
       d="M393.73,234.33c.06,0,.06-.08,0-.09a29.12,29.12,0,0,0-16.67,4.57c-.15.11-.05.4.14.32A59.63,59.63,0,0,1,393.73,234.33Z"
       style="fill:#263238"
       id="path207" />
    <path
       d="M395.94,240.68c.07,0,.06-.11,0-.12a27.21,27.21,0,0,0-17.87,6.12c-.17.15-.18.45,0,.29C381.63,244.35,390.57,241.34,395.94,240.68Z"
       style="fill:#263238"
       id="path208" />
    <path
       d="M379.7,254.57c5-4,10.69-5.94,16.87-7.13.09,0,.05-.13,0-.13-3.18-.25-7,.92-10,2.08a16.77,16.77,0,0,0-7,5C379.48,254.48,379.59,254.65,379.7,254.57Z"
       style="fill:#263238"
       id="path209" />
    <path
       d="M377.28,238.78a19.79,19.79,0,0,0-2.7,2.2,6.54,6.54,0,0,0-1.81,2.81,2.15,2.15,0,0,0,.17,1.5,3.11,3.11,0,0,0,1.06,1.13,3.72,3.72,0,0,0,3,.2l2.44-.79-2,1.59a10.67,10.67,0,0,0-2.31,2.48,3.77,3.77,0,0,0-.67,3,2.11,2.11,0,0,0,2.09,1.69,6.45,6.45,0,0,0,3.12-.87l2.68-1.44-2.05,2.22a10.6,10.6,0,0,0-1.46,2.05,4.07,4.07,0,0,0-.55,2.28,2,2,0,0,0,1.24,1.61,4.28,4.28,0,0,0,2.38-.17,34.07,34.07,0,0,0,4.81-2.13c.79-.39,1.59-.79,2.41-1.15a6.3,6.3,0,0,1,2.57-.68,7,7,0,0,0-2.46.9c-.78.42-1.54.87-2.31,1.33a29.09,29.09,0,0,1-4.79,2.43,5,5,0,0,1-2.85.29,2.74,2.74,0,0,1-1.92-2.31,5,5,0,0,1,.61-2.84,10.61,10.61,0,0,1,1.59-2.3l.62.78a7.35,7.35,0,0,1-3.68,1.07,3.11,3.11,0,0,1-2-.72,3.49,3.49,0,0,1-1.07-1.77,4.72,4.72,0,0,1,.85-3.79,11.4,11.4,0,0,1,2.59-2.69l.42.8a4.44,4.44,0,0,1-3.74-.44,3.65,3.65,0,0,1-1.23-1.47,2.67,2.67,0,0,1-.14-1.92,6.56,6.56,0,0,1,2.14-2.89A15.41,15.41,0,0,1,377.28,238.78Z"
       style="fill:#263238"
       id="path210" />
    <path
       d="M363.07,248.52s8-23.67,15.75-16c2.29,2.28,9,14.38,6.58,15.77-3.11,1.8-6.84-2.73-8.74-6,0,0-1.6,8.44-7.8,9.07A6.19,6.19,0,0,1,363.07,248.52Z"
       style="fill:#ad6359"
       id="path211" />
    <path
       d="M378.14,231.93a12.72,12.72,0,0,1,2.62,2.76,28,28,0,0,1,2.08,3.22,43.6,43.6,0,0,1,3.22,7,7.32,7.32,0,0,1,.41,2,2.6,2.6,0,0,1-.2,1.14,1.71,1.71,0,0,1-.33.55,2,2,0,0,1-.49.4,3.27,3.27,0,0,1-2.21.34,6.25,6.25,0,0,1-1.93-.8,11.6,11.6,0,0,1-2.87-2.71,26.5,26.5,0,0,1-2.16-3.21l.82-.15a15.21,15.21,0,0,1-.92,2.79,13.7,13.7,0,0,1-1.41,2.54,10.27,10.27,0,0,1-2,2.1,7.63,7.63,0,0,1-2.56,1.29,8.63,8.63,0,0,0,2.36-1.53,10.12,10.12,0,0,0,1.74-2.17,13.72,13.72,0,0,0,1.21-2.5,14.27,14.27,0,0,0,.72-2.67l.18-1.12.63,1a29.09,29.09,0,0,0,2.17,3,11.57,11.57,0,0,0,2.66,2.44,3.13,3.13,0,0,0,3,.45c.77-.38.53-1.74.19-2.88a36.18,36.18,0,0,0-1.31-3.5c-.49-1.16-1-2.32-1.54-3.44A24.29,24.29,0,0,0,378.14,231.93Z"
       style="fill:#263238"
       id="path212" />
    <path
       d="M280.34,275.36c-9.6,21.38-15.41,46.9-12.2,52.37,3.53,6,36.57,17,56.89,17.38,3.78.07,4.37-31.16.33-31.28-7.29-.22-31.28-3.37-33.5-5.1-1.86-1.45.25-11.1.11-27.5C291.87,268.66,285.22,264.5,280.34,275.36Z"
       style="fill:#ad6359"
       id="path213" />
    <path
       d="M360.16,316.54a4.49,4.49,0,0,1-1.48,4.92,6.69,6.69,0,0,1,2.43,3.84c.46,2.71-3.58,4.62-3.58,4.62a8.26,8.26,0,0,1,1.91,4.46c.18,2.63-3.62,5.15-3.62,5.15a7.18,7.18,0,0,1-.79,5c-2.43,3.95-9.51,4-14,4.06s-17.32-3.94-19.84-4.46l-.71-28.87s20.08-6.06,25.39-5.39C350.32,310.4,358.94,313.25,360.16,316.54Z"
       style="fill:#ad6359"
       id="path214" />
    <path
       d="M358.47,321c-4.6-1.74-9.47-2-14.31-2.57a.08.08,0,1,0,0,.16c4.82.5,9.49,2,14.28,2.64A.12.12,0,0,0,358.47,321Z"
       style="fill:#263238"
       id="path215" />
    <path
       d="M357.43,329.55a12.91,12.91,0,0,0-3.33-.45c-1.19-.08-2.37-.13-3.56-.17-2.38-.07-4.76-.1-7.14-.05-.11,0-.13.17,0,.17q3.56.12,7.11.37l3.55.3a15.06,15.06,0,0,0,3.35.15A.17.17,0,0,0,357.43,329.55Z"
       style="fill:#263238"
       id="path216" />
    <path
       d="M355.72,339.52a9,9,0,0,0-3-.24l-3.25,0c-2.17-.05-4.34-.1-6.5-.22a.09.09,0,0,0,0,.17c2.2.13,4.4.3,6.6.42l3.24.15a8.35,8.35,0,0,0,3-.12A.06.06,0,0,0,355.72,339.52Z"
       style="fill:#263238"
       id="path217" />
    <path
       d="M293,298.93l-23.6.5s6.1-19.07,12.07-27,10.89-7,11.58,2.23S293,298.93,293,298.93Z"
       style="fill:#a6a6a6"
       id="path218" />
    <path
       d="M272.31,293.94c1.52-.49,12.39-1.39,20.12-1a.09.09,0,1,1,0,.18c-.85.07-18.5,1.3-20.12,1.06C272.18,294.17,272.2,294,272.31,293.94Z"
       style="fill:#263238"
       id="path219" />
    <path
       d="M294.25,284.6c0-.07-.11-.08-.13,0-.22.8-.33,1.63-.47,2.45,0,.19-.06.38-.08.57-.1-2-.23-4-.37-5.95a.08.08,0,0,0-.15,0c.18,6.85-.25,10.24-.26,17.08l-2,.2a.13.13,0,0,0,0,.25l2.3.05a.26.26,0,0,0,.25-.2c.67-4.44.5-5.51.32-10,.14-.65.28-1.3.37-2A17.09,17.09,0,0,0,294.25,284.6Z"
       style="fill:#263238"
       id="path220" />
  </g>
  <g
     id="freepik--character-3--inject-5">
    <path
       d="M429.69,277.36c12.14,10.47,27.22,20.11,36.12,22.81,6,1.81,22.71-11.12,35-26.46,2.43-3-11-26.44-13.48-23-6.35,8.86-19.55,23.73-22,24-2,.21-16.65-4-27.62-7.48C420.21,261.61,421.14,270,429.69,277.36Z"
       style="fill:#f7a9a0"
       id="path221" />
    <path
       d="M454,271.9l-7,22.54s-16.15-11.84-21.78-20-3.17-12.54,5.79-10.27S454,271.9,454,271.9Z"
       style="fill:#455a64"
       id="path222" />
    <path
       d="M450.46,283.38,447,294.44s-16.15-11.84-21.78-20c-3.89-5.64-3.93-9.47-.61-10.54Z"
       style="fill:#37474f"
       id="path223" />
    <path
       d="M442.73,289.92c0-1.6,2.62-12.19,5.45-19.4a.09.09,0,0,1,.17.06c-.21.83-4.65,18-5.39,19.41C442.9,290.11,442.73,290,442.73,289.92Z"
       style="fill:#263238"
       id="path224" />
    <path
       d="M444.14,330.85H386.06c.11-.52.21-1.05.32-1.59.27-1.37.56-2.78.87-4.24.16-.7.31-1.41.47-2.14.28-1.28.58-2.59.89-3.92.23-.95.45-1.9.69-2.86s.5-2,.76-3c.33-1.31.68-2.62,1-3.95,4.58-16.86,11.19-34.67,20-44.49a8.82,8.82,0,0,1,4.38-2.64l.36-.09a9.76,9.76,0,0,1,1.53-.25l.3,0c4.51-.33,9.12,1.67,10.13,3,3.47,4.43,7.57,19.63,10.8,34.37.26,1.19.52,2.39.77,3.57.21,1,.42,2,.62,3q.24,1.2.48,2.37c.24,1.21.47,2.41.7,3.57.13.7.26,1.4.39,2.08.25,1.3.48,2.57.7,3.77s.43,2.46.62,3.59c.53,3.19.92,5.81,1.13,7.57A11.09,11.09,0,0,1,444.14,330.85Z"
       style="fill:#455a64"
       id="path225" />
    <path
       d="M445.43,319.36a2.86,2.86,0,0,1-.07-.28c-.07-.29-.15-.58-.23-.86a2.17,2.17,0,0,1-.07-.24,22.58,22.58,0,0,0-1.56-3.85,13.4,13.4,0,0,0,.27-3.24,1.28,1.28,0,0,1,0-.19c0-.25,0-.48-.06-.72a12.7,12.7,0,0,0-.61-2.67,10.39,10.39,0,0,0-1.27-2.58A16.6,16.6,0,0,0,442,302c0-.18,0-.36,0-.54s0-.2,0-.3,0-.39-.05-.57-.05-.4-.08-.59a11.42,11.42,0,0,0-.38-1.62h0a7.38,7.38,0,0,0-1.5-2.84c-2.79-13-6.5-25.91-11.17-31.14-1.71-1.92-6.48-3.23-11.15-2.73l-.3,0c-.51.06-1,.14-1.53.25l-.36.09a11.35,11.35,0,0,0-6.67,4.07c-7.65,10.23-13.44,25.11-18,38.85a20.89,20.89,0,0,0-2.44,4.8h0s0,.07,0,.11c-.07.22-.15.44-.22.67a.65.65,0,0,0,0,.13c-.08.26-.16.52-.23.79,0,.09-.05.19-.07.29s-.11.44-.15.67a3.4,3.4,0,0,0-.07.34c0,.22-.08.44-.11.66a.37.37,0,0,0,0,.11,1,1,0,0,0,0,.17,14,14,0,0,0-.08,2.83,10.49,10.49,0,0,0-2.45,3.28,10.68,10.68,0,0,0-.54,1.32l-.15.46c-.05.18-.1.35-.14.53s-.08.35-.11.53l-.09.54-.06.59a12.41,12.41,0,0,0,.12,2.88,31.93,31.93,0,0,0-1.51,3.51c-.09.24-.17.48-.26.73h53.48l.33-.09c4.05-1.09,7-1.92,8.07-2.3a1.36,1.36,0,0,0,.44-.2c.12-.18,1.07-1.06,1.38-3.84A15.13,15.13,0,0,0,445.43,319.36Zm-27.27-35.48c-1.45,5.27-8.16,10.42-11.46,10.54s-5.26-2.15-5.38-6.72,4.18-15.31,8-17.36C415.09,267.21,419.6,278.62,418.16,283.88Z"
       style="fill:#aa0000"
       id="path226" />
    <path
       d="M382.1,330.85h0c-.06.2-.13.4-.2.61C382,331.25,382,331.05,382.1,330.85Z"
       style="fill:#fff"
       id="path227" />
    <path
       d="M445.62,320.3l-2.76.59-1.65.35-5.36,1.15-6.3,1.35-24.05,5.14-9.19,2h-14.2c.08-.25.16-.49.25-.73h0l4-.86,19.25-4.12,29.7-6.36,6.91-1.48,2.41-.52c.14.37.28.77.41,1.2a2.17,2.17,0,0,0,.07.24A18.71,18.71,0,0,1,445.62,320.3Z"
       style="fill:#fff"
       id="path228" />
    <path
       d="M443.78,310.89l-60,12.84a11.07,11.07,0,0,1,1.09-4l58.25-12.45A13,13,0,0,1,443.78,310.89Z"
       style="fill:#fff"
       id="path229" />
    <path
       d="M442,302l-54.66,11.7a18.93,18.93,0,0,1,1-3.94l53.14-11.38A12.6,12.6,0,0,1,442,302Z"
       style="fill:#fff"
       id="path230" />
    <path
       d="M405.43,330.85c-.05-3,0-6.08,0-9.12s.15-6.07.23-9.11.24-6.07.4-9.1.35-6.07.61-9.1c.05,3,0,6.08,0,9.12s-.15,6.07-.23,9.11-.24,6.07-.41,9.1S405.69,327.82,405.43,330.85Z"
       style="fill:#263238"
       id="path231" />
    <path
       d="M427.27,274.29c1.08,4.73,2.06,9.47,3,14.23S432.12,298,433,302.8s1.67,9.55,2.36,14.36c.17,1.2.35,2.4.49,3.6a26,26,0,0,1,.32,3.64c0,2.43-.11,4.86-.28,7.27,0-2.42,0-4.84-.08-7.26,0-.6-.06-1.2-.14-1.79l-.28-1.79c-.18-1.2-.39-2.39-.59-3.59-.82-4.77-1.65-9.54-2.53-14.31l-2.55-14.31C428.88,283.85,428.05,279.08,427.27,274.29Z"
       style="fill:#263238"
       id="path232" />
    <path
       d="M384.34,325.6c4.86-1.12,9.72-2.16,14.59-3.21l14.62-3.08,14.64-3,7.31-1.52c2.44-.49,4.87-1,7.3-1.59-4.78,1.41-9.64,2.54-14.49,3.67s-9.73,2.14-14.6,3.18-9.77,2-14.66,2.9S389.26,324.79,384.34,325.6Z"
       style="fill:#263238"
       id="path233" />
    <path
       d="M387.3,316.48c4.44-1,8.89-2,13.34-2.89L414,310.83l13.38-2.71,6.68-1.37c2.23-.45,4.45-.94,6.67-1.44-4.36,1.31-8.8,2.35-13.23,3.38s-8.9,1.93-13.35,2.87-8.93,1.77-13.41,2.59S391.8,315.77,387.3,316.48Z"
       style="fill:#263238"
       id="path234" />
    <rect
       x="423.62"
       y="294.11"
       width="11.9"
       height="3.88"
       transform="translate(-60.85 118.12) rotate(-14.63)"
       style="fill:#263238"
       id="rect234" />
    <rect
       x="425.5"
       y="301.3"
       width="11.9"
       height="3.88"
       transform="translate(-62.61 118.83) rotate(-14.63)"
       style="fill:#263238"
       id="rect235" />
    <rect
       x="429.35"
       y="320.24"
       width="11.9"
       height="3.88"
       transform="translate(-67.27 120.42) rotate(-14.63)"
       style="fill:#263238"
       id="rect236" />
    <path
       d="M382.11,330.85c-.06.2-.13.4-.2.61.06-.21.12-.41.19-.61Z"
       style="fill:#FFC727"
       id="path236" />
    <path
       d="M405.22,275.36c-9.61,21.38-15.41,46.9-12.2,52.37,3.52,6,36.56,17,56.89,17.38,3.77.07,4.36-31.16.33-31.28-7.3-.22-31.29-3.37-33.5-5.1-1.87-1.45.25-11.1.11-27.5C416.74,268.66,410.1,264.5,405.22,275.36Z"
       style="fill:#f7a9a0"
       id="path237" />
    <path
       d="M485,316.54a4.5,4.5,0,0,1-1.48,4.92A6.69,6.69,0,0,1,486,325.3c.46,2.71-3.59,4.62-3.59,4.62a8.24,8.24,0,0,1,1.92,4.46c.18,2.63-3.63,5.15-3.63,5.15a7.21,7.21,0,0,1-.78,5c-2.44,3.95-9.51,4-14,4.06s-17.33-3.94-19.85-4.46l-.7-28.87s20.08-6.06,25.38-5.39C475.2,310.4,483.82,313.25,485,316.54Z"
       style="fill:#f7a9a0"
       id="path238" />
    <path
       d="M483.35,321c-4.6-1.74-9.47-2-14.31-2.57a.08.08,0,1,0,0,.16c4.82.5,9.48,2,14.27,2.64A.12.12,0,0,0,483.35,321Z"
       style="fill:#263238"
       id="path239" />
    <path
       d="M482.3,329.55a12.78,12.78,0,0,0-3.32-.45c-1.19-.08-2.38-.13-3.57-.17-2.37-.07-4.76-.1-7.14-.05-.1,0-.12.17,0,.17q3.56.12,7.1.37c1.19.09,2.37.19,3.55.3a15.12,15.12,0,0,0,3.36.15A.17.17,0,0,0,482.3,329.55Z"
       style="fill:#263238"
       id="path240" />
    <path
       d="M480.59,339.52a8.93,8.93,0,0,0-3-.24l-3.26,0c-2.16-.05-4.33-.1-6.5-.22a.09.09,0,0,0,0,.17c2.2.13,4.4.3,6.6.42l3.25.15a8.35,8.35,0,0,0,3-.12A.06.06,0,0,0,480.59,339.52Z"
       style="fill:#263238"
       id="path241" />
    <path
       d="M417.86,298.93l-23.6.5s6.1-19.07,12.07-27,10.88-7,11.58,2.23S417.86,298.93,417.86,298.93Z"
       style="fill:#455a64"
       id="path242" />
    <path
       d="M397.19,293.94c1.51-.49,12.39-1.39,20.12-1,.11,0,.11.18,0,.18-.86.07-18.51,1.3-20.12,1.06C397.05,294.17,397.08,294,397.19,293.94Z"
       style="fill:#263238"
       id="path243" />
    <path
       d="M419.12,284.6a.06.06,0,0,0-.12,0,20.36,20.36,0,0,0-.47,2.45c0,.19-.06.38-.09.57-.1-2-.23-4-.36-5.95a.08.08,0,0,0-.15,0c.17,6.85-.25,10.24-.26,17.08l-2.05.2a.13.13,0,0,0,0,.25l2.31.05a.24.24,0,0,0,.24-.2c.67-4.44.51-5.51.33-10,.13-.65.27-1.3.37-2A15.77,15.77,0,0,0,419.12,284.6Z"
       style="fill:#263238"
       id="path244" />
    <path
       d="M426.9,272.32c-3.32.42-11.52-3.92-13.34-8.79-.12-.34.83-3.53,1.8-7.47.58-2.39,1.16-5.07,1.52-7.55.07-.51,15,6,15,6a39.83,39.83,0,0,0-2.89,9.31,6,6,0,0,0,0,1,1,1,0,0,1,0,.17C429,267,430.45,271.87,426.9,272.32Z"
       style="fill:#f7a9a0"
       id="path245" />
    <path
       d="M429,264.89c0,.05,0,.11,0,.17a9.46,9.46,0,0,1-1.61-.15c-9.13-1.53-9.88-13.34-9.93-16.32,2.71.8,14.47,6,14.47,6a39.83,39.83,0,0,0-2.89,9.31A5.13,5.13,0,0,0,429,264.89Z"
       style="fill:#263238"
       id="path246" />
    <path
       d="M436.09,226.19s5.26,2.25,6.18,7.63-.37,11-.83,11.27S436.09,226.19,436.09,226.19Z"
       style="fill:#263238"
       id="path247" />
    <path
       d="M415.35,232.36c-1.68,5.58,1.35,21.67,5.33,25.25,5.78,5.17,15.2,5.62,19.58-1.31,4.26-6.72-.06-27.62-4.5-30.86C429.21,220.66,417.82,224.11,415.35,232.36Z"
       style="fill:#f7a9a0"
       id="path248" />
    <path
       d="M431.43,242.09s-.07.06-.06.11c.23,1.08.31,2.35-.6,2.89,0,0,0,.07,0,.06C432,244.76,431.83,243.07,431.43,242.09Z"
       style="fill:#263238"
       id="path249" />
    <path
       d="M430.26,241.13c-1.77.19-1.27,3.71.37,3.54S431.74,241,430.26,241.13Z"
       style="fill:#263238"
       id="path250" />
    <path
       d="M437.46,241.19s.09,0,.09.09c.12,1.1.45,2.33,1.49,2.55,0,0,0,.07,0,.07C437.81,243.9,437.39,242.25,437.46,241.19Z"
       style="fill:#263238"
       id="path251" />
    <path
       d="M438.27,239.92c1.73-.39,2.38,3.11.77,3.47S436.81,240.24,438.27,239.92Z"
       style="fill:#263238"
       id="path252" />
    <path
       d="M428.64,239.72a13.24,13.24,0,0,0,1.29-.68,2.28,2.28,0,0,0,1.19-.94.73.73,0,0,0-.25-.88,1.86,1.86,0,0,0-1.89.07,2.75,2.75,0,0,0-1.39,1.4A.8.8,0,0,0,428.64,239.72Z"
       style="fill:#263238"
       id="path253" />
    <path
       d="M439.38,238a14.51,14.51,0,0,1-1.46-.17,2.35,2.35,0,0,1-1.45-.45.75.75,0,0,1-.08-.91,1.85,1.85,0,0,1,1.79-.61,2.7,2.7,0,0,1,1.8.8A.8.8,0,0,1,439.38,238Z"
       style="fill:#263238"
       id="path254" />
    <path
       d="M431.55,252.2c.3.22.61.53,1,.51a3,3,0,0,0,1.13-.45s.08,0,.06.05a1.48,1.48,0,0,1-1.3.79,1.16,1.16,0,0,1-1-.84C431.43,252.2,431.51,252.17,431.55,252.2Z"
       style="fill:#263238"
       id="path255" />
    <path
       d="M432.23,248.76a3.73,3.73,0,0,0,2.72,1.3,4.36,4.36,0,0,0,1.34-.13.92.92,0,0,0,.25-.06l.24-.07a.27.27,0,0,0,.18-.28h0a.45.45,0,0,0,0-.11h0v-.1c-.1-.84-.36-2.11-.36-2.11.33.11,2,.59,1.9.15a55.68,55.68,0,0,0-3-11,.1.1,0,0,0-.19.06c.57,3.49,1.75,6.86,2.38,10.36a6.61,6.61,0,0,0-1.83-.29c-.11.06.55,2.44.57,2.83v0a5.23,5.23,0,0,1-4-.65C432.23,248.6,432.15,248.69,432.23,248.76Z"
       style="fill:#263238"
       id="path256" />
    <path
       d="M435.74,249.58a4.55,4.55,0,0,1-1.57,1.62,2,2,0,0,1-1.2.25c-.9-.11-1-.9-1-1.61a5,5,0,0,1,.24-1.11A5.83,5.83,0,0,0,435.74,249.58Z"
       style="fill:#263238"
       id="path257" />
    <path
       d="M434.17,251.2a2,2,0,0,1-1.2.25c-.9-.11-1-.9-1-1.61A2.07,2.07,0,0,1,434.17,251.2Z"
       style="fill:#ff9bbc"
       id="path258" />
    <path
       d="M417,247c1.92.32,3.29-5.52,3.6-7.73.27-1.95.07-8,.11-8.41S429.5,235,434,233s7-6.58,6.8-8.54-6.64-6.11-11.67-5.69-10.92,7.68-10.92,7.68a23.42,23.42,0,0,0,1.81-3.26c-.11-.22-3.16,1.51-3.44,3.89,0,0,.25-3,0-3s-2.43,2.79-1.61,4.58c0,0-2.56,2.91-2.45,5.7S414.78,246.61,417,247Z"
       style="fill:#263238"
       id="path259" />
    <path
       d="M437.14,231.62a15.66,15.66,0,0,1-4.18,2.16,10.57,10.57,0,0,1-5.12-.12,15.92,15.92,0,0,1-4.75-2c-1.29-.8-2.48-1.81-3.83-2.5-.34-.17-.64.33-.41.59a16.85,16.85,0,0,0,9.27,5.06,9.66,9.66,0,0,0,9-3.15S437.16,231.6,437.14,231.62Z"
       style="fill:#263238"
       id="path260" />
    <path
       d="M419.49,245.65s-3.77-5.12-6.1-3.76.6,8.84,3.4,9.8a2.82,2.82,0,0,0,3.74-1.61Z"
       style="fill:#f7a9a0"
       id="path261" />
    <path
       d="M414.28,244s0,.06,0,.08c2,.74,3,2.51,3.8,4.37a1.57,1.57,0,0,0-2.35-.37s0,.11.06.1a1.72,1.72,0,0,1,1.92.56,8.29,8.29,0,0,1,1,1.52c.09.17.41.07.33-.13v0C419,247.62,417,244.19,414.28,244Z"
       style="fill:#263238"
       id="path262" />
    <path
       d="M518.25,262.91c-3.94,4.38-15.5,10.19-18.83,10.52s-13.86-19-12.48-22.14,15.78-16.87,21.71-17.85S522.33,258.36,518.25,262.91Z"
       style="fill:#f7a9a0"
       id="path263" />
    <rect
       x="376.51"
       y="288.57"
       width="209.8"
       height="4.47"
       transform="translate(971.48 14.84) rotate(119.48)"
       style="fill:#263238"
       id="rect263" />
    <path
       d="M436.92,398.29l-14,24.82H388.63l22.23-39.34a8.2,8.2,0,0,1,4.08-3.56l16.93-6.8.21.12,3.7,2.09,2.14,17.66A8.16,8.16,0,0,1,436.92,398.29Z"
       style="fill:#FFC727"
       id="path264" />
    <path
       d="M436.92,398.29l-14,24.82H388.63l22.23-39.34a8.2,8.2,0,0,1,4.08-3.56l16.93-6.8.21.12,3.7,2.09,2.14,17.66A8.16,8.16,0,0,1,436.92,398.29Z"
       style="opacity:0.2"
       id="path265" />
    <path
       d="M426.16,382.83c-1.72,3.46-3.53,6.86-5.36,10.26s-3.73,6.75-5.59,10.13-3.83,6.69-5.8,10l-3,5c-1,1.63-2,3.29-3.06,4.91.85-1.73,1.76-3.43,2.64-5.15l2.72-5.11c1.83-3.39,3.73-6.75,5.6-10.13s3.82-6.69,5.79-10S424.08,386.08,426.16,382.83Z"
       style="opacity:0.1"
       id="path266" />
    <path
       d="M430.36,385.2c-1.61,3.26-3.31,6.47-5,9.67s-3.48,6.37-5.26,9.53-3.59,6.31-5.45,9.42l-2.8,4.67c-1,1.54-1.9,3.1-2.9,4.62.8-1.63,1.65-3.24,2.47-4.86l2.56-4.8c1.7-3.21,3.48-6.37,5.25-9.54s3.6-6.31,5.46-9.42S428.39,388.26,430.36,385.2Z"
       style="opacity:0.1"
       id="path267" />
    <path
       d="M499.83,236.78c-.59,3.06,3.36,2,3.36,2s-5.31,2.9-4.69,6.3,5.33,1.81,5.67,1.71c-.28.16-5.09,3-4.12,6.3s5.51,1.2,5.8,1.06c-.22.23-3.05,3.32-1.73,5.7,2.27,4.07,9.72-3.64,13.5-3.55,0,0,.58,6.42.63,6.61,0,0,7.24-7.2,7.08-12.3a3.27,3.27,0,0,0-2.61-3.15s2.6-2.06,1.91-4.72c-.35-1.36-2.85-2-2.85-2a4.1,4.1,0,0,0,1.25-4.06c-.6-1.86-3-2.22-3-2.22s1.15-2.56-.08-4.26C517.47,226.75,501.08,230.21,499.83,236.78Z"
       style="fill:#f7a9a0"
       id="path268" />
    <path
       d="M519.64,234.33c.06,0,.06-.08,0-.09A29.1,29.1,0,0,0,503,238.81c-.15.11-.05.4.14.32A59.63,59.63,0,0,1,519.64,234.33Z"
       style="fill:#263238"
       id="path269" />
    <path
       d="M521.85,240.68c.07,0,0-.11,0-.12A27.21,27.21,0,0,0,504,246.68c-.17.15-.18.45,0,.29C507.54,244.35,516.48,241.34,521.85,240.68Z"
       style="fill:#263238"
       id="path270" />
    <path
       d="M505.61,254.57c5-4,10.69-5.94,16.87-7.13.08,0,0-.13,0-.13-3.18-.25-7,.92-10,2.08a16.77,16.77,0,0,0-7,5C505.39,254.48,505.5,254.65,505.61,254.57Z"
       style="fill:#263238"
       id="path271" />
    <path
       d="M503.19,238.78a19.2,19.2,0,0,0-2.7,2.2,6.36,6.36,0,0,0-1.81,2.81,2.15,2.15,0,0,0,.17,1.5,3.11,3.11,0,0,0,1.06,1.13,3.72,3.72,0,0,0,3,.2l2.44-.79-2,1.59a10.46,10.46,0,0,0-2.31,2.48,3.73,3.73,0,0,0-.67,3,2.11,2.11,0,0,0,2.09,1.69,6.45,6.45,0,0,0,3.12-.87l2.68-1.44-2,2.22a10.19,10.19,0,0,0-1.46,2.05,4.07,4.07,0,0,0-.55,2.28,2,2,0,0,0,1.24,1.61,4.28,4.28,0,0,0,2.38-.17,34.58,34.58,0,0,0,4.81-2.13c.79-.39,1.59-.79,2.41-1.15a6.26,6.26,0,0,1,2.57-.68,7,7,0,0,0-2.46.9c-.78.42-1.54.87-2.31,1.33a28.8,28.8,0,0,1-4.8,2.43,5,5,0,0,1-2.84.29,2.74,2.74,0,0,1-1.92-2.31,5,5,0,0,1,.61-2.84,10.93,10.93,0,0,1,1.58-2.3l.63.78a7.41,7.41,0,0,1-3.68,1.07,3.11,3.11,0,0,1-2-.72,3.49,3.49,0,0,1-1.07-1.77,4.72,4.72,0,0,1,.85-3.79,11.56,11.56,0,0,1,2.58-2.69l.43.8a4.44,4.44,0,0,1-3.74-.44,3.65,3.65,0,0,1-1.23-1.47,2.67,2.67,0,0,1-.14-1.92,6.49,6.49,0,0,1,2.14-2.89A15.41,15.41,0,0,1,503.19,238.78Z"
       style="fill:#263238"
       id="path272" />
    <path
       d="M489,248.52s8-23.67,15.75-16c2.29,2.28,9,14.38,6.58,15.77-3.11,1.8-6.84-2.73-8.74-6,0,0-1.6,8.44-7.8,9.07A6.19,6.19,0,0,1,489,248.52Z"
       style="fill:#f7a9a0"
       id="path273" />
    <path
       d="M504.05,231.93a12.72,12.72,0,0,1,2.62,2.76,28,28,0,0,1,2.08,3.22,43.6,43.6,0,0,1,3.22,7,7,7,0,0,1,.4,2,2.45,2.45,0,0,1-.19,1.14,1.71,1.71,0,0,1-.33.55,2.21,2.21,0,0,1-.49.4,3.27,3.27,0,0,1-2.21.34,6.25,6.25,0,0,1-1.93-.8,11.6,11.6,0,0,1-2.87-2.71,26.5,26.5,0,0,1-2.16-3.21l.82-.15a15.21,15.21,0,0,1-.92,2.79,13.7,13.7,0,0,1-1.41,2.54,10.27,10.27,0,0,1-2,2.1,7.63,7.63,0,0,1-2.56,1.29,8.63,8.63,0,0,0,2.36-1.53,10.12,10.12,0,0,0,1.74-2.17,13.72,13.72,0,0,0,1.21-2.5,15.08,15.08,0,0,0,.72-2.67l.18-1.12.63,1a29.09,29.09,0,0,0,2.17,3,11.37,11.37,0,0,0,2.66,2.44,3.13,3.13,0,0,0,3,.45c.77-.38.53-1.74.19-2.88a36.18,36.18,0,0,0-1.31-3.5c-.49-1.16-1-2.32-1.54-3.44A24.29,24.29,0,0,0,504.05,231.93Z"
       style="fill:#263238"
       id="path274" />
  </g>
  <g
     id="freepik--Water--inject-5">
    <path
       d="M77.09,389.81s25,45.87,83,58.23h0c.94.21,1.89.39,2.85.58,50.2,9.54,130.33-16.73,165.69-14.07a38.32,38.32,0,0,1,8.36,1.45C396,454.43,448.3,469.65,509,460.07a240.11,240.11,0,0,0,42-10.39h0c32.59-11.38,50.43-26.24,62-30.91,28.52-11.54,45.85,1.42,58.92,4h0a15.36,15.36,0,0,0,9-.5c8.4-3.42.88-22-13.16-28.38-20.56-9.38-45.08-1.57-45.26-3.94-.79-10,42.37-11.56,39.47-22.87s-31.36-15.75-60,.79c-20.08,11.59-32.56,32.33-50.79,41.79-5.56,2.89-22.1,7.62-23.15,6.83S541.12,411,544.54,407s-2.11-7.36-10-7.09-23.17,13.4-31.59,17.34-39.21-.52-37.36-6.09,30-9.41,46.05-14.94a18.21,18.21,0,0,0,4.87-2.48.85.85,0,0,0,.14-.1,1,1,0,0,1,.1-.07l.06,0h0c9.35-7.24,3.12-21.11-18.61-19.62-29.07,2-53.67,33.89-77.12,33.12-2.41-.09,22.53-11.24,21.62-19.6-.53-5-10.25-7.8-21.57-3.34s-24.25,19.26-42.67,25.57-82.64-8.93-82.64-8.93c16.85-5.53,27.64-17.88,17.9-24.18S284,387,248.47,396.77C160.17,421.12,100.34,407.41,77.09,389.81Z"
       style="fill:#fff"
       id="path275" />
    <path
       d="M671.88,422.76h0a17,17,0,0,0,7.16.06,7.94,7.94,0,0,0,3.26-1.45,5.79,5.79,0,0,0,1.8-3,13.38,13.38,0,0,0-.66-7.08,28,28,0,0,0-3.22-6.42,31.61,31.61,0,0,0-10.42-9.77,46,46,0,0,0-13.57-4.65,71.83,71.83,0,0,0-14.35-1.15c-4.8.05-9.59.53-14.38,1.05-1.2.12-2.39.26-3.61.27a5.84,5.84,0,0,1-.93-.08,1.11,1.11,0,0,1-.49-.19.58.58,0,0,1-.21-.53,3.6,3.6,0,0,1,.43-1.82,7.53,7.53,0,0,1,2.57-2.6,23.55,23.55,0,0,1,3.2-1.73,118.58,118.58,0,0,1,13.7-4.62,100.17,100.17,0,0,0,13.59-4.73,20.89,20.89,0,0,0,3.09-1.76,8,8,0,0,0,2.43-2.48,3.85,3.85,0,0,0,.26-3.28,7.94,7.94,0,0,0-1.73-3,15.59,15.59,0,0,0-5.81-4,31,31,0,0,0-6.88-1.92,53.22,53.22,0,0,0-14.32-.23,78.67,78.67,0,0,0-27.29,8.6c-8.56,4.38-16,10.54-23,17.19S569,397.15,561.47,403.18a59.58,59.58,0,0,1-12.26,7.72,119.57,119.57,0,0,1-13.74,4.57c-1.16.31-2.33.61-3.51.88a18.65,18.65,0,0,1-3.66.56l-.29,0c-.13-.07-.27,0-.43-.33a.57.57,0,0,1,.14-.56,1.74,1.74,0,0,1,.22-.19,6,6,0,0,1,.81-.51c.54-.3,1.09-.56,1.63-.82l3.29-1.51c2.18-1,4.36-2,6.44-3.18a23.78,23.78,0,0,0,3-1.92,5.2,5.2,0,0,0,2-2.62,2.28,2.28,0,0,0-.13-1.52,3.73,3.73,0,0,0-1.05-1.23,9.18,9.18,0,0,0-3.1-1.49,19.25,19.25,0,0,0-7-.6,21.75,21.75,0,0,0-6.64,2.37c-2.13,1.07-4.17,2.34-6.21,3.61-4.05,2.57-8,5.33-12.06,7.93a49.18,49.18,0,0,1-6.36,3.56,24.92,24.92,0,0,1-7.21,1.24,77.06,77.06,0,0,1-14.48-.83,66.87,66.87,0,0,1-7.12-1.41,25,25,0,0,1-6.83-2.66,5,5,0,0,1-1.43-1.33,2,2,0,0,1-.17-2.11,4.33,4.33,0,0,1,1.28-1.51,12.85,12.85,0,0,1,1.58-1,39.66,39.66,0,0,1,6.78-2.68c4.62-1.43,9.31-2.56,14-3.7s9.37-2.24,14-3.48c2.31-.62,4.62-1.28,6.9-2a20.85,20.85,0,0,0,6.39-3l0,0,.12-.09,0,0,.16-.12-.15.33h0v-.24l.46-.22h0l-.28.09a11.42,11.42,0,0,0,3-3.5,8.16,8.16,0,0,0,1-4.43c-.21-3.1-2.34-5.79-5-7.47a22.09,22.09,0,0,0-8.9-3.12,39.28,39.28,0,0,0-9.57-.14,56.28,56.28,0,0,0-18.41,5.38,151.2,151.2,0,0,0-16.87,9.48c-5.48,3.44-10.88,7-16.53,10.26s-11.57,6.15-18.06,7.36c-.81.12-1.61.3-2.44.35a20.06,20.06,0,0,1-2.46.14h-1.24a.32.32,0,0,1-.13,0,.68.68,0,0,1-.24-.08.56.56,0,0,1-.26-.48.83.83,0,0,1,.09-.29,1.7,1.7,0,0,1,.31-.33,5.31,5.31,0,0,1,.53-.38c.7-.47,1.39-.88,2.09-1.3,2.79-1.65,5.56-3.3,8.24-5.1a47.37,47.37,0,0,0,7.49-6,12.87,12.87,0,0,0,2.68-3.81,4.87,4.87,0,0,0,.38-2.17,4,4,0,0,0-.83-2,7.79,7.79,0,0,0-3.82-2.43,17.7,17.7,0,0,0-4.65-.8,28.53,28.53,0,0,0-9.42,1.37,34.6,34.6,0,0,0-8.62,4.15c-2.72,1.73-5.33,3.64-7.95,5.54a175.31,175.31,0,0,1-16.1,10.95,80.8,80.8,0,0,1-8.74,4.35l-2.29.87-1.14.43c-.39.13-.79.23-1.19.34a28.5,28.5,0,0,1-4.83.89,74,74,0,0,1-9.76.31c-3.25-.07-6.49-.29-9.72-.58-6.47-.57-12.9-1.44-19.3-2.43-12.81-2-25.53-4.54-38.17-7.46l-1.19-.27,1.16-.39a46.72,46.72,0,0,0,15.38-8.22,19.16,19.16,0,0,0,5.36-6.73,7.31,7.31,0,0,0,.51-4.14,6.43,6.43,0,0,0-2.16-3.53,8.73,8.73,0,0,0-3.71-2,12.48,12.48,0,0,0-4.27-.19,37.87,37.87,0,0,0-8.44,2.25c-5.5,2.07-10.85,4.56-16.25,6.91A244.64,244.64,0,0,1,249,396.92c-5.71,1.47-11.43,2.93-17.15,4.34l-8.65,1.83-4.33.91-2.16.45-2.18.37-8.72,1.45c-1.46.23-2.91.51-4.37.71l-4.39.53-8.78,1.07c-2.93.27-5.87.47-8.81.7l-4.41.34c-1.47.12-2.94.11-4.42.17l-8.83.28-8.85-.14c-2.95,0-5.89-.22-8.83-.41a184.44,184.44,0,0,1-34.89-5.37c-11.37-3-22.53-7.42-32.1-14.34,9.6,6.88,20.77,11.22,32.13,14.21a183.58,183.58,0,0,0,34.88,5.24c2.94.18,5.88.4,8.82.38l8.83.1,8.83-.31c1.47-.06,2.94-.07,4.41-.18l4.4-.36c2.93-.25,5.87-.45,8.8-.73l8.76-1.1,4.38-.55c1.46-.21,2.91-.49,4.36-.72l8.71-1.47,2.17-.37,2.16-.46,4.32-.91,8.64-1.83c5.71-1.42,11.42-2.89,17.12-4.36a244.56,244.56,0,0,0,33.1-12.2c5.4-2.35,10.74-4.85,16.27-6.94a38.91,38.91,0,0,1,8.59-2.3,13.12,13.12,0,0,1,4.5.2,9.32,9.32,0,0,1,4,2.15,8.3,8.3,0,0,1,1.5,1.73,6.6,6.6,0,0,1,.86,2.15,7.78,7.78,0,0,1-.54,4.5,19.71,19.71,0,0,1-5.53,7A47.43,47.43,0,0,1,296,401l0-.66c12.61,2.9,25.33,5.4,38.12,7.4,6.4,1,12.81,1.84,19.26,2.4,3.22.28,6.44.5,9.67.57a73.93,73.93,0,0,0,9.65-.32,28.74,28.74,0,0,0,4.71-.87c.38-.11.76-.21,1.14-.34l1.13-.42,2.25-.86a79.11,79.11,0,0,0,8.64-4.32,173.88,173.88,0,0,0,16-10.91c2.61-1.91,5.23-3.83,8-5.59a35.93,35.93,0,0,1,8.82-4.26,29.36,29.36,0,0,1,9.72-1.41,18.16,18.16,0,0,1,4.89.83,8.69,8.69,0,0,1,4.24,2.73,4.78,4.78,0,0,1,1,2.44,5.63,5.63,0,0,1-.43,2.58,13.8,13.8,0,0,1-2.86,4.1,48.19,48.19,0,0,1-7.63,6.14c-2.7,1.82-5.5,3.48-8.28,5.14-.69.41-1.39.83-2,1.26l-.45.33-.11.11s.05-.1,0-.16a.42.42,0,0,0-.17-.35c-.1-.05-.11,0-.1-.05h1.21a19,19,0,0,0,2.38-.14c.79,0,1.58-.22,2.36-.34,6.31-1.18,12.17-4.1,17.76-7.27s11-6.81,16.47-10.26a147.28,147.28,0,0,1,17-9.55,71.35,71.35,0,0,1,9.12-3.53,49.62,49.62,0,0,1,9.6-1.91,39.77,39.77,0,0,1,9.81.16,23,23,0,0,1,9.28,3.28,13.1,13.1,0,0,1,3.63,3.45,9.35,9.35,0,0,1,1.73,4.73,9,9,0,0,1-1.08,4.93,12.1,12.1,0,0,1-3.28,3.79l-.28.1h0l.46-.46h0v.23l-.15.11L517,394l-.05,0-.16.11,0,0a21.65,21.65,0,0,1-6.65,3.09c-2.3.74-4.62,1.4-6.95,2-4.66,1.24-9.35,2.34-14,3.46s-9.36,2.26-13.93,3.67a39.35,39.35,0,0,0-6.63,2.6,5.84,5.84,0,0,0-2.5,2.14c-.52.86.36,1.78,1.3,2.39a24.06,24.06,0,0,0,6.57,2.55,67.26,67.26,0,0,0,7,1.41,76.36,76.36,0,0,0,14.32.84,24.12,24.12,0,0,0,7-1.18,49,49,0,0,0,6.23-3.48c4-2.58,8-5.34,12.07-7.92,2-1.27,4.11-2.55,6.28-3.64a22.27,22.27,0,0,1,6.89-2.43,20,20,0,0,1,7.3.62,10,10,0,0,1,3.35,1.64,4.46,4.46,0,0,1,1.26,1.49,3.09,3.09,0,0,1,.17,2,5.88,5.88,0,0,1-2.28,3,23.35,23.35,0,0,1-3.08,2c-2.12,1.18-4.31,2.2-6.5,3.2l-3.28,1.5c-.54.26-1.08.52-1.59.8a4.91,4.91,0,0,0-.72.44l-.12.11s0,0,0-.16,0-.09-.06-.1l.16,0a18.78,18.78,0,0,0,3.46-.54c1.17-.26,2.33-.56,3.49-.87a117.29,117.29,0,0,0,13.65-4.52,59,59,0,0,0,12.12-7.61c7.52-6,14.06-13.08,21.06-19.7s14.49-12.86,23.12-17.26a79.31,79.31,0,0,1,27.5-8.62,53.46,53.46,0,0,1,14.46.25,31.53,31.53,0,0,1,7,2,19.46,19.46,0,0,1,3.22,1.71,12.7,12.7,0,0,1,2.78,2.39,8.4,8.4,0,0,1,1.82,3.21,4.31,4.31,0,0,1-.31,3.67,8.31,8.31,0,0,1-2.57,2.64,21.27,21.27,0,0,1-3.18,1.8,100.72,100.72,0,0,1-13.67,4.7A117.75,117.75,0,0,0,628.62,384a22.66,22.66,0,0,0-3.15,1.69,7.36,7.36,0,0,0-2.47,2.46,3.29,3.29,0,0,0-.39,1.65c0,.18,0,.21.08.27a.81.81,0,0,0,.34.13,4.15,4.15,0,0,0,.87.07c1.19,0,2.39-.13,3.58-.24,4.78-.51,9.59-1,14.41-1a71.59,71.59,0,0,1,14.39,1.2,46.23,46.23,0,0,1,13.61,4.72,31.7,31.7,0,0,1,10.43,9.85,28.22,28.22,0,0,1,3.21,6.46,13.47,13.47,0,0,1,.63,7.11,5.79,5.79,0,0,1-1.83,3.06,8,8,0,0,1-3.28,1.45,17,17,0,0,1-7.16-.09h0Z"
       style="fill:#dbdbdb"
       id="path276" />
    <path
       d="M662.15,410.41a70,70,0,0,0-15.09-7.53,53.38,53.38,0,0,0-16.44-3.35,37.65,37.65,0,0,0-16.35,2.93A79.5,79.5,0,0,0,599.82,411c-4.57,3.28-8.9,6.89-13.22,10.52s-8.65,7.27-13.18,10.68a131.58,131.58,0,0,1-14.17,9.32,100.41,100.41,0,0,1-15.49,6.86A106.55,106.55,0,0,0,559,441.1a133.47,133.47,0,0,0,14-9.5c4.43-3.49,8.75-7.1,13-10.76s8.63-7.31,13.22-10.64a81.06,81.06,0,0,1,14.69-8.58,37.52,37.52,0,0,1,16.74-2.86,54.1,54.1,0,0,1,16.57,3.66,69.68,69.68,0,0,1,7.71,3.53A59.25,59.25,0,0,1,662.15,410.41Z"
       style="fill:#dbdbdb"
       id="path277" />
    <path
       d="M351.29,437.06c-12.53-5.06-25.19-9.95-38.38-12.83a105.46,105.46,0,0,0-20-2.6,83.22,83.22,0,0,0-20,2.24c-6.59,1.4-13.1,3.21-19.56,5.19s-12.87,4.09-19.31,6.16-12.86,4.18-19.36,6.06-13.09,3.56-19.84,4.13c6.73-.73,13.25-2.64,19.7-4.6s12.85-4.16,19.26-6.32,12.82-4.3,19.29-6.3,13-3.86,19.61-5.3a83.8,83.8,0,0,1,20.22-2.16,100.46,100.46,0,0,1,20.14,2.75,169.91,169.91,0,0,1,19.43,5.89c3.18,1.17,6.32,2.43,9.44,3.73S348.16,435.79,351.29,437.06Z"
       style="fill:#dbdbdb"
       id="path278" />
    <path
       d="M417.38,450.73a312.13,312.13,0,0,1-38.15-9,315.72,315.72,0,0,1-36.8-13.57c-6-2.68-11.74-5.79-17.84-8a79.86,79.86,0,0,0-18.91-4.52,75.92,75.92,0,0,0-19.46.35,82.84,82.84,0,0,0-9.57,2,84.83,84.83,0,0,0-9.26,3.15,76,76,0,0,1,57.51-1.8c3.13,1,6.07,2.5,9.08,3.81s5.88,2.82,8.86,4.13A332.43,332.43,0,0,0,379.46,441c6.22,2,12.5,3.73,18.82,5.36S411,449.52,417.38,450.73Z"
       style="fill:#dbdbdb"
       id="path279" />
    <path
       d="M654.46,371.78a12,12,0,0,1-2.56.79c-.87.18-1.75.36-2.62.52-1.76.31-3.5.64-5.24,1a65.82,65.82,0,0,0-10.17,2.95,49.11,49.11,0,0,0-9.36,4.84l-2.13,1.57c-.73.51-1.34,1.16-2,1.73A46.12,46.12,0,0,0,616.6,389a35.28,35.28,0,0,1,7.46-7.68,41.07,41.07,0,0,1,9.45-5.15,53,53,0,0,1,10.39-2.77c1.76-.29,3.53-.53,5.3-.74A29.87,29.87,0,0,0,654.46,371.78Z"
       style="fill:#dbdbdb"
       id="path280" />
    <path
       d="M208,410.73a171,171,0,0,1-28.44,4.88,201.89,201.89,0,0,1-28.89.57c-4.82-.16-9.61-.79-14.4-1.26l-7.15-1.11c-1.19-.2-2.38-.35-3.56-.58l-3.53-.79A163.81,163.81,0,0,1,94.41,404l6.85,2.27,3.42,1.15c1.14.36,2.32.62,3.48.94l7,1.86c2.34.55,4.7,1,7,1.47l3.53.71c1.18.22,2.37.37,3.55.56l7.12,1.06c4.78.44,9.54,1,14.34,1.16a212.5,212.5,0,0,0,28.77-.33c2.4-.18,4.78-.44,7.18-.65s4.76-.58,7.14-.91C198.55,412.63,203.29,411.8,208,410.73Z"
       style="fill:#dbdbdb"
       id="path281" />
    <path
       d="M513.57,379.82a43.5,43.5,0,0,0-10.83-1.25A46.66,46.66,0,0,0,492,379.83a47.35,47.35,0,0,0-10.17,3.73c-3.25,1.6-6.35,3.52-9.45,5.44-6.2,3.83-12.28,7.93-18.7,11.47a86.66,86.66,0,0,1-9.95,4.67A41.8,41.8,0,0,1,433,407.67c7.28-1,13.93-4.29,20.24-7.87s12.37-7.73,18.55-11.64c3.13-1.91,6.26-3.82,9.58-5.42a44.57,44.57,0,0,1,10.41-3.66A44,44,0,0,1,513.57,379.82Z"
       style="fill:#dbdbdb"
       id="path282" />
    <path
       d="M576,394.44a53.52,53.52,0,0,1-9.39,10.16,63.54,63.54,0,0,1-11.5,7.79,60.82,60.82,0,0,1-12.92,5.09l-1.68.45-.84.22-.85.16-3.42.62a32.89,32.89,0,0,1-3.44.38q-1.73.15-3.45.27A81.64,81.64,0,0,0,542,416.74l1.64-.51.82-.24.8-.3,3.21-1.22c1.08-.41,2.09-1,3.13-1.41l1.56-.73c.51-.26,1-.55,1.5-.82,1-.55,2-1,3-1.65l2.92-1.8,2.81-2c.93-.67,1.82-1.4,2.74-2.08s1.76-1.47,2.64-2.2,1.7-1.55,2.54-2.33A57.44,57.44,0,0,0,576,394.44Z"
       style="fill:#dbdbdb"
       id="path283" />
    <path
       d="M412.05,393a86.26,86.26,0,0,1-16.88,14.3,65.11,65.11,0,0,1-9.85,5.18,46.09,46.09,0,0,1-10.78,2.91,96,96,0,0,1-11.11.49c-3.7-.1-7.4-.3-11.08-.72a154.21,154.21,0,0,1-21.78-4c3.61.73,7.24,1.38,10.89,1.9s7.3,1,11,1.31,7.34.51,11,.57a93.59,93.59,0,0,0,11-.58A44.67,44.67,0,0,0,385,411.62a72.45,72.45,0,0,0,9.78-5,92.49,92.49,0,0,0,9-6.35A95.72,95.72,0,0,0,412.05,393Z"
       style="fill:#dbdbdb"
       id="path284" />
    <path
       d="M371.64,432c.68-2,15.22-3.93,17.81.58s-4.77,7.27-8.91,6.43S370.55,435.17,371.64,432Z"
       style="fill:#aa0000"
       id="path285" />
    <path
       d="M369.64,423.59c2.9.3,2.76,5.59-2.5,5.1S365,423.1,369.64,423.59Z"
       style="fill:#aa0000"
       id="path286" />
    <path
       d="M232,413.24c1.52.89.14,3.77-2.64,2.2S229.52,411.83,232,413.24Z"
       style="fill:#aa0000"
       id="path287" />
    <path
       d="M429.86,385.93c1.52.88.14,3.76-2.64,2.19S427.42,384.51,429.86,385.93Z"
       style="fill:#FFC727"
       id="path288" />
    <path
       d="M218.93,409.27c2.22-1,4.47-.63,4.83.78s-.78,3.16-3.45,4.67-6.75,1.69-7.41.89S216.79,410.19,218.93,409.27Z"
       style="fill:#aa0000"
       id="path289" />
  </g>
</svg>
`,S2=C2,j2=v2,k2=w2,T2={3:S2,2:j2,1:k2};function L1({index:n,label:t="近舟",isNight:e,showLabel:i=!1,morphLite:l=!1,rowBurst:c=!1,hitTargetRef:d}){const h=T2[n],r=n===1?"0.9s":"1.15s",o=n===1?"0.6s":"0.77s",y=c?"0.28s":"0.55s",u=c?o:r,p=`
    @keyframes dbRower1-${n} {
      0%, 100% { transform: rotate(0deg) translate(0, 0); }
      50% { transform: rotate(-14deg) translate(-4px, 3px); }
    }
    @keyframes dbRower2-${n} {
      0%, 100% { transform: rotate(0deg) translate(0, 0); }
      50% { transform: rotate(-16deg) translate(-5px, 4px); }
    }
    @keyframes dbDrummer-${n} {
      0%, 100% { transform: rotate(0deg) translateY(0); }
      50% { transform: rotate(16deg) translateY(3px); }
    }
    .boat-container-${n} #freepik--character-1--inject-5 {
      transform-origin: 240px 325px;
      animation: dbRower1-${n} var(--row-duration, 1.15s) ease-in-out infinite;
    }
    .boat-container-${n} #freepik--character-2--inject-5 {
      transform-origin: 330px 295px;
      animation: dbRower2-${n} var(--row-duration, 1.15s) ease-in-out infinite;
      animation-delay: 0.22s;
    }
    .boat-container-${n} #freepik--character-3--inject-5 {
      transform-origin: 450px 295px;
      animation: dbDrummer-${n} var(--drum-duration, 0.55s) ease-in-out infinite;
    }
    .boat-container-${n}.boat-container--lite #freepik--character-1--inject-5,
    .boat-container-${n}.boat-container--lite #freepik--character-2--inject-5,
    .boat-container-${n}.boat-container--lite #freepik--character-3--inject-5 {
      animation: none !important;
    }
    @media (prefers-reduced-motion: reduce) {
      .boat-container-${n} #freepik--character-1--inject-5,
      .boat-container-${n} #freepik--character-2--inject-5,
      .boat-container-${n} #freepik--character-3--inject-5 {
        animation: none !important;
      }
    }
  `,g=a.jsx("div",{ref:d,className:`db-boat-svg-hit-target pointer-events-none flex h-full w-full items-center justify-end [&>svg]:h-full [&>svg]:w-full [&>svg]:overflow-visible ${e?"brightness-110":""}`,dangerouslySetInnerHTML:{__html:h}});return a.jsxs("div",{className:[`relative flex h-full w-full flex-col items-center justify-end boat-container-${n}`,l?"boat-container--lite":"",c?"boat-container--row-burst":""].filter(Boolean).join(" "),style:{"--row-duration":u,"--drum-duration":y},children:[a.jsx("style",{children:p}),i&&a.jsx("span",{className:"pointer-events-none absolute -top-4 select-none rounded border border-amber-900/30 bg-black/45 px-1 py-0.5 font-serif text-[7px] text-amber-200",children:t}),l?g:a.jsx(m.div,{className:"pointer-events-none h-full w-full",animate:{y:[-1,1,-1],rotate:[-.4,.4,-.4]},transition:{duration:n===1?.95:1.25,repeat:1/0,ease:"easeInOut"},children:g})]})}function R2(n){const i=(n.querySelector("svg")??n).getBoundingClientRect();return i.width<4||i.height<4?null:{left:i.left,top:i.top,width:i.width,height:i.height}}function F2({hitTargetRef:n,onTap:t,disabled:e=!1,isNight:i=!1}){const[l,c]=s.useState(null),[d,h]=s.useState([]),r=s.useRef(null),o=s.useRef(0),y=s.useRef(0),[u,p]=s.useState(null);s.useEffect(()=>{p(document.getElementById("dragon-boat-scroll-root"))},[]);const g=()=>{const Z=n.current;if(!Z||e){c(null);return}c(R2(Z))};s.useLayoutEffect(()=>{if(g(),e)return;const Z=n.current,A=Z?new ResizeObserver(g):null;A==null||A.observe(Z);let x=0;const v=()=>{g(),x=requestAnimationFrame(v)};return x=requestAnimationFrame(v),window.addEventListener("resize",g),()=>{A==null||A.disconnect(),cancelAnimationFrame(x),window.removeEventListener("resize",g)}},[n,e]);const M=(Z,A)=>{const x=++y.current;h(v=>[...v.slice(-5),{id:x,x:Z,y:A}]),window.setTimeout(()=>{h(v=>v.filter(R=>R.id!==x))},950)},f=(Z,A)=>{const x=Date.now();x-o.current<100||(o.current=x,M(Z,A),t())},b=Z=>{r.current={x:Z.clientX,y:Z.clientY},Z.stopPropagation()},k=Z=>{Z.stopPropagation();const A=r.current;if(r.current=null,!A)return;const x=Z.clientX-A.x,v=Z.clientY-A.y;Math.hypot(x,v)>18||f(Z.clientX,Z.clientY)};if(e||!u||!l)return null;const j=i?"db-race-drum-wave--night":"db-race-drum-wave--day";return T1.createPortal(a.jsxs(a.Fragment,{children:[d.map(Z=>a.jsxs("span",{className:["db-race-drum-wave",j].join(" "),style:{left:Z.x,top:Z.y},"aria-hidden":!0,children:[a.jsx("span",{className:"db-race-drum-wave__ring"}),a.jsx("span",{className:"db-race-drum-wave__ring db-race-drum-wave__ring--delay-1"}),a.jsx("span",{className:"db-race-drum-wave__ring db-race-drum-wave__ring--delay-2"})]},Z.id)),a.jsx("button",{type:"button",className:"db-race-drum-hit db-race-drum-hit--portal",style:{position:"fixed",left:l.left,top:l.top,width:l.width,height:l.height},onPointerDown:b,onPointerUp:k,"aria-label":"敲鼓"})]}),u)}const i1=5e3,w1=1.35,c1=.9,n1=1200,O=[{segments:["临时加了这个part，","也是为我最近不好的状态说声抱歉"],partGaps:[0,880],startOffset:0,fadeStagger:0,placement:{left:"6%",top:"48%",maxWidth:"min(78vw, 17.5rem)",rotate:-2.1,textAlign:"left"}},{segments:["很抱歉最近事情很多，","连开假条的时间都忘了"],partGaps:[0,720],startOffset:2900,fadeStagger:820,placement:{right:"7%",top:"57%",maxWidth:"min(72vw, 16rem)",rotate:1.6,textAlign:"right",transformOrigin:"100% 50%"}},{segments:["在你情绪不好的时候，没能给你一些依靠"],partGaps:[0],startOffset:5400,fadeStagger:1680,placement:{left:"11%",top:"66%",maxWidth:"min(70vw, 15.5rem)",rotate:-.9,textAlign:"left"}},{segments:["我还不够细心周到，","但我会不断努力的"],partGaps:[0,1040],startOffset:7600,fadeStagger:2540,placement:{left:"19%",top:"76%",maxWidth:"min(68vw, 15rem)",rotate:1.3,textAlign:"left"}}];function N2({active:n,isNight:t}){const e=S(),[i,l]=s.useState(()=>O.map(()=>({visibleParts:0,fading:!1,gone:!1}))),c=s.useRef(0);return s.useEffect(()=>{if(!n){c.current+=1,l(O.map(()=>({visibleParts:0,fading:!1,gone:!1})));return}const d=c.current+1;c.current=d;const h=[],r=(p,g)=>{c.current===d&&l(M=>M.map((f,b)=>b===p?{...f,...g}:f))};if(e)return h.push(window.setTimeout(()=>{l(O.map(p=>({visibleParts:p.segments.length,fading:!1,gone:!1})))},n1)),h.push(window.setTimeout(()=>{O.forEach((p,g)=>r(g,{fading:!0}))},n1+i1)),h.push(window.setTimeout(()=>{O.forEach((p,g)=>r(g,{gone:!0,visibleParts:0}))},n1+i1+c1*1e3)),()=>h.forEach(p=>window.clearTimeout(p));const o=[];O.forEach((p,g)=>{let M=n1+p.startOffset;p.segments.forEach((f,b)=>{b>0&&(M+=p.partGaps[b]??800),h.push(window.setTimeout(()=>{r(g,{visibleParts:b+1,fading:!1,gone:!1})},M))}),o.push(M+w1*1e3)});const u=Math.max(...o)+i1;return O.forEach((p,g)=>{const M=u+p.fadeStagger;h.push(window.setTimeout(()=>{r(g,{fading:!0})},M)),h.push(window.setTimeout(()=>{r(g,{fading:!1,gone:!0,visibleParts:0})},M+c1*1e3))}),()=>h.forEach(p=>window.clearTimeout(p))},[n,e]),n?a.jsx("div",{className:["db-race-water-whispers",t?"db-race-water-whispers--night":""].join(" "),"aria-hidden":!0,children:O.map((d,h)=>{const r=i[h];if(r.gone&&r.visibleParts===0)return null;const{placement:o}=d;return a.jsx(m.p,{className:"db-race-water-whisper-line",style:{left:o.left,right:o.right,top:o.top,maxWidth:o.maxWidth,textAlign:o.textAlign??"left",transform:`rotate(${o.rotate}deg)`,transformOrigin:o.transformOrigin??"0 50%"},initial:!1,animate:{opacity:r.fading?0:1},transition:{duration:e?0:r.fading?c1:.6,ease:"easeOut"},children:d.segments.map((y,u)=>a.jsx(m.span,{className:"db-race-water-whisper-part",initial:!1,animate:{opacity:r.visibleParts>u?1:0},transition:{duration:e?0:w1,ease:[.22,1,.36,1]},children:y},u))},h)})}):null}const S1=K/1e3,L2=[.38,.02,.18,1],H2=3200,y1=3.6,q2=Math.round(y1*1e3)+80,_2=280,H1=[0,.45,.45,1],q1=[.42,0,.58,1],B2=118,E2="-118vw";function s1(n){if(!n)return 0;const t=n.style.transform||window.getComputedStyle(n).transform;if(!t||t==="none")return 0;const e=t.match(/matrix\(([^)]+)\)/);if(!e)return 0;const i=e[1].split(",").map(l=>parseFloat(l.trim()));return i.length<6||Number.isNaN(i[4])?0:i[4]/window.innerWidth*100}function d1(n){const t=n+B2;return[`${n}vw`,`${t}vw`,E2,"0vw"]}function j1({classSuffix:n,boatIndex:t,isNight:e,isExitingMorph:i,driftDuration:l,baseOpacity:c,rowBurst:d,burstPath:h,boatRef:r}){const o=S(),y=d&&h!==null;return a.jsx(m.div,{ref:r,className:`db-layout-race-far db-layout-race-far--${n}`,initial:!1,animate:i?{opacity:0,x:"16vw",y:"-2%"}:y?{opacity:c,x:h,y:0}:o?{opacity:c,x:0,y:0}:{opacity:c,x:["-5vw","6vw"],y:[0,"-1.2%",0]},transition:i?{duration:.5,ease:[.4,0,.2,1]}:y?{duration:y1,ease:q1,times:[...H1]}:o?{duration:0}:{duration:l,repeat:1/0,repeatType:"mirror",ease:"easeInOut"},children:a.jsx(L1,{index:t,isNight:e,showLabel:!1,morphLite:i,rowBurst:d&&!i})})}function O2({beat:n,onDark:t,isNight:e,enterFromMorph:i,isExitingMorph:l=!1,onMorphComplete:c}){const d=S(),r=s.useRef(i&&!d).current,o=s.useRef(!1),[y,u]=s.useState(!1),[p,g]=s.useState(null),M=s.useRef(0),f=s.useRef(null),b=s.useRef(null),k=s.useRef(null),j=s.useRef(null),Z=s.useRef(null),A=s.useRef(null),x=s.useRef(null),v=s.useRef(!1),[R,I]=s.useState(!1),N=s.useCallback(()=>{!l||o.current||(o.current=!0,c==null||c())},[l,c]);s.useEffect(()=>{if(!l){o.current=!1;return}if(d){N();return}const L=window.setTimeout(N,d2),z=window.setTimeout(N,K+100);return()=>{window.clearTimeout(L),window.clearTimeout(z)}},[l,d,N]),s.useEffect(()=>()=>{f.current&&window.clearTimeout(f.current),b.current&&window.clearTimeout(b.current),k.current&&window.clearTimeout(k.current)},[]);const D=s.useCallback(()=>{if(d||l)return;const L=s1(j.current),z=s1(Z.current),X=s1(A.current);g({near:d1(L),far1:d1(z),far2:d1(X)}),u(!0),b.current&&window.clearTimeout(b.current),b.current=window.setTimeout(()=>{u(!1),g(null)},q2)},[d,l]),V=s.useCallback(()=>{if(T.ensureReady(),T.playRaceDrum(),M.current+=1,M.current>=3){M.current=0,f.current&&window.clearTimeout(f.current),k.current&&window.clearTimeout(k.current),v.current||(v.current=!0,I(!0)),k.current=window.setTimeout(()=>{D(),k.current=null},_2);return}f.current&&window.clearTimeout(f.current),f.current=window.setTimeout(()=>{M.current=0},H2)},[D]);return a.jsxs(l1,{className:"db-layout-race-diagonal",variant:"stage",children:[a.jsxs("div",{className:"db-layout-race-diagonal-copy",children:[a.jsx("h2",{className:["db-ink-display db-ink-display--hero db-layout-race-title",t?"db-ink-display--on-dark":"db-ink-display--on-light"].join(" "),children:a.jsx(m.span,{className:"db-race-title-char",style:{transformOrigin:"50% 100%",display:"inline-block"},initial:r?{opacity:.6,x:-12}:d?!1:{opacity:0,y:28},animate:l?{opacity:0,x:-12,y:-8}:{opacity:1,x:0,y:0},transition:l?{duration:.38,ease:[.4,0,.2,1]}:{delay:r?.35:.08,duration:.62,ease:[.22,1,.36,1]},children:n.display})}),n.subtitle&&a.jsx(m.p,{className:["db-ink-subtitle",t?"text-stone-300":"text-stone-600"].join(" "),initial:r?{opacity:0}:d?!1:{opacity:0,y:14},animate:l?{opacity:0,y:-6}:{opacity:1,y:0},transition:l?{duration:.32,delay:.04,ease:[.4,0,.2,1]}:{delay:r?.52:.42,duration:.55,ease:[.22,1,.36,1]},children:n.subtitle}),n.body&&n.body.length>0&&a.jsx(f1,{lines:n.body,onDark:t,variant:"asymmetric",baseDelay:r?.62:.52,exiting:l,exitBaseDelay:.02})]}),a.jsxs(m.div,{className:"db-layout-race-far-lane","aria-hidden":!0,animate:l?{opacity:0}:{opacity:1},transition:{duration:l?.48:.2,ease:[.4,0,.2,1]},children:[a.jsx(j1,{classSuffix:"1",boatIndex:3,isNight:e,isExitingMorph:l,driftDuration:26,baseOpacity:.3,rowBurst:y&&!l,burstPath:(p==null?void 0:p.far1)??null,boatRef:Z}),a.jsx(j1,{classSuffix:"2",boatIndex:2,isNight:e,isExitingMorph:l,driftDuration:34,baseOpacity:.48,rowBurst:y&&!l,burstPath:(p==null?void 0:p.far2)??null,boatRef:A})]}),a.jsx(m.div,{ref:j,className:"db-layout-race-boat",initial:r?{opacity:.75,x:"-18vw",y:"14%",scale:.92}:d?!1:{opacity:0,x:"-28vw",y:"12%"},animate:l?{opacity:.92,x:"108vw",y:"-3%",scale:1.12}:y&&p?{opacity:1,x:p.near,y:0,scale:1}:{opacity:1,x:0,y:0,scale:1},transition:l?{duration:S1,ease:L2,delay:.06}:y&&p?{duration:y1,ease:q1,times:[...H1]}:{delay:r?.12:d?0:.42,duration:r?1.15:1.05,ease:[.22,1,.36,1]},children:a.jsx(L1,{index:1,isNight:e,showLabel:!1,morphLite:l,rowBurst:y&&!l,hitTargetRef:x})}),a.jsx(F2,{hitTargetRef:x,onTap:V,disabled:l,isNight:e}),a.jsx(N2,{active:R&&!l,isNight:e}),l&&a.jsx(m.div,{className:"db-layout-race-warm-glow",style:{background:c2(e)},initial:{opacity:0,scale:.88},animate:{opacity:.85,scale:1.04},transition:{duration:S1*.85,delay:.12,ease:[.32,.72,0,1]},"aria-hidden":!0})]})}const I2={sm:"db-mugwort-mark--sm",md:"db-mugwort-mark--md",lg:"db-mugwort-mark--lg"};function D2({className:n,size:t="md",animate:e=!0}){const i=S(),l=a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 70",fill:"none",role:"img","aria-label":"艾",className:"db-mugwort-mark-svg",children:[a.jsx("path",{d:"M 15 20 C 5 25, 2 45, 12 55 C 10 40, 12 30, 15 20 Z",fill:"#047857",opacity:"0.95"}),a.jsx("path",{d:"M 15 20 C 25 25, 28 45, 18 55 C 20 40, 18 30, 15 20 Z",fill:"#065F46",opacity:"0.9"}),a.jsx("path",{d:"M 15 5 L 8 45 C 8 45, 15 50, 15 65 C 15 50, 22 45, 22 45 L 15 5 Z",fill:"#059669"}),a.jsx("rect",{x:"11",y:"32",width:"8",height:"3",rx:"1.5",fill:"#EF4444"}),a.jsx("path",{d:"M 14 35 Q 11 50, 12 60 M 16 35 Q 19 50, 18 60",stroke:"#EF4444",strokeWidth:"1"})]}),c=["db-mugwort-mark",I2[t],n].filter(Boolean).join(" ");return!e||i?a.jsx("span",{className:c,children:l}):a.jsx(m.span,{className:c,initial:{opacity:0,y:-8,scale:.85},animate:{opacity:1,y:0,scale:1},transition:{delay:.28,duration:.55,ease:[.22,1,.36,1]},children:l})}const z2=`  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1153.44 1086.59" style="vertical-align: middle; max-width: 100%; width: 100%;" width="100%">
   <g>
    <g>
     <path d="M609.29,0c277.32,0,695.54,800.59,467.78,958.79c-229.53,159.43-863.09,165.79-1029.79-55.83    S331.98,0,609.29,0z" fill="rgb(111, 140, 66)">
     </path>
     <g>
      <path d="M737.84,47.06c-2.26-1.52-4.52-3.02-6.77-4.47C631,348.68,597.18,718.93,605.81,1074.12     c3.31-0.06,6.61-0.14,9.91-0.22C609.18,720.78,642.28,352.01,737.84,47.06z" fill="rgb(149, 173, 76)">
      </path>
      <path d="M995.25,350.83c-49.18,218.91-75.81,453.15-84.69,681.15c3.29-0.93,6.56-1.88,9.81-2.84     c10.2-222.03,36.37-450.28,82.79-664.4C1000.54,360.09,997.91,355.45,995.25,350.83z" fill="rgb(149, 173, 76)">
      </path>
      <path d="M1115.43,628.34c-17.83,108.98-30.72,220.13-39.21,331.03c0.28-0.19,0.57-0.38,0.85-0.58     c3.64-2.53,7.11-5.22,10.42-8.07c8.21-99.07,19.76-198.35,35.01-296.08C1120.31,645.95,1117.95,637.18,1115.43,628.34z" fill="rgb(149, 173, 76)">
      </path>
      <path d="M770.95,1056.26c6.53-289.93,39.71-596.72,109.41-873.38c-2.7-3.3-5.41-6.57-8.13-9.81     c-70.24,269.67-103.59,568.59-109.67,853.62C765.29,1036.59,768.09,1046.45,770.95,1056.26z" fill="rgb(149, 173, 76)">
      </path>
      <path d="M186.31,331.38c-4.46,6.49-8.86,13.03-13.21,19.6c-21.38,205.52-24.45,418.62-13.96,623.51     c2.53,7.12,5.11,14.2,7.71,21.27c0.83,0.41,1.66,0.82,2.49,1.23C158.73,778.99,162.51,550.58,186.31,331.38z" fill="rgb(149, 173, 76)">
      </path>
      <path d="M594.05,0.69c-2.9,0.25-5.81,0.57-8.74,0.95c-99.33,319.23-128.96,704.27-114.97,1068.34     c3.18,0.26,6.37,0.51,9.56,0.75C468.22,706.45,497.76,320.15,594.05,0.69z" fill="rgb(149, 173, 76)">
      </path>
      <path d="M384.46,107.04c-4.09,3.46-8.17,6.97-12.24,10.56c-62.27,291.74-77.49,619-61.87,927.82     c3.07,0.72,6.16,1.43,9.25,2.13C305.89,734.78,322.01,402.14,384.46,107.04z" fill="rgb(149, 173, 76)">
      </path>
     </g>
     <g>
      <path d="M79.73,933.11c219.05,170.93,847.6,212.21,1025.31,1.42c82.16-97.46,57.96-311.02-59.22-490.66     C1014.14,395.31-137.63,763.5,79.73,933.11z" fill="rgb(121, 153, 72)">
      </path>
      <g>
       <path d="M43.01,830.61c345.71-3.36,789.24-84.16,1051.53-282.67c-0.34-0.86-0.68-1.72-1.03-2.58      C831.32,737.78,387.65,819.14,44.78,827.24C44.16,828.37,43.57,829.49,43.01,830.61z" fill="rgb(158, 184, 80)">
       </path>
       <path d="M154.08,728.56c315.71-24.67,670.52-110.47,890.66-282.48c-0.43-0.72-0.86-1.44-1.29-2.16      C825.49,608.87,475.38,694.11,163.72,722.47C160.46,724.5,157.25,726.53,154.08,728.56z" fill="rgb(158, 184, 80)">
       </path>
       <path d="M1133.52,791.6c0.19-1.66,0.37-3.33,0.54-5.01c-228.94,135.13-553.42,204.37-838.21,225.79      c5.08,1.32,10.19,2.61,15.33,3.87C592.98,996.2,908.9,927.35,1133.52,791.6z" fill="rgb(158, 184, 80)">
       </path>
       <path d="M1125.86,653.43c-0.22-1.11-0.46-2.22-0.69-3.34C852.89,835.75,407.92,911.76,71.4,915.75      c1.37,0.99,2.75,1.98,4.14,2.96C414.14,918.76,855.11,843.45,1125.86,653.43z" fill="rgb(158, 184, 80)">
       </path>
      </g>
     </g>
     <g>
      <path d="M114.61,431.73C-0.65,632.62-45.43,852.4,57.99,933.11c219.05,170.93,879.25,235.25,1025.31,1.42     C1101.65,905.15,191.23,298.2,114.61,431.73z" fill="rgb(129, 166, 73)">
      </path>
      <g>
       <path d="M31.16,627.37c-0.43,1.43-0.86,2.86-1.28,4.29c206.94,203.18,540.2,349.97,830.02,427.72      c2.7-0.64,5.38-1.3,8.06-1.97C578.59,976.98,240.77,828.46,31.16,627.37z" fill="rgb(167, 194, 85)">
       </path>
       <path d="M620.09,1081.71c6.08,0.13,12.16,0.21,18.21,0.24C412.82,1004.03,177.68,889.42,7.15,744.66      c-0.18,1.98-0.35,3.94-0.5,5.9C172.29,893.65,399.3,1005.72,620.09,1081.71z" fill="rgb(167, 194, 85)">
       </path>
       <path d="M74.5,513.52c-0.49,1.08-0.97,2.15-1.45,3.23c218.53,239.07,614.11,405.81,935.1,481.46      c1.16-0.79,2.32-1.58,3.47-2.39C693.14,916.59,294.93,748.28,74.5,513.52z" fill="rgb(167, 194, 85)">
       </path>
       <path d="M1075.67,928.59c-328.13-81.92-740.22-258.17-955.4-504.07c-0.55,0.79-1.08,1.61-1.57,2.46      c213.67,251.47,624.44,426.52,955.69,504.54c0.34-0.53,0.69-1.06,1.02-1.6C1075.64,929.56,1075.72,929.11,1075.67,928.59z" fill="rgb(167, 194, 85)">
       </path>
      </g>
     </g>
    </g>
    <path d="M31.68,905.34c163.08-31.05,329.66-86.23,489.85-161.25c187.59,89.87,388.17,153.41,587.41,185.61   c10.08-12.96,18.42-27.8,25.04-44.18c-187.93-27.66-378.1-85.62-557.23-168.21c162.76-81.64,317.59-183.62,453.79-301.25   c-7.53-14.83-15.34-29.57-23.41-44.15c-143.17,126.52-308.24,235.65-483.4,320.07c-146.6-72.49-284.68-161.51-406.71-263.81   c-0.87,1.13-1.69,2.31-2.42,3.57c-7.58,13.21-14.84,26.49-21.79,39.82c113.88,94.44,240.88,177.13,375.49,246.14   C319.34,784.25,164.13,832.78,9.72,858.93C14.87,876.19,22.13,891.76,31.68,905.34z" fill="rgb(216,202,160)">
    </path>
   </g>
  </svg>
`,P2=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 500 500"
   version="1.1"
   id="svg84"
   sodipodi:docname="icecream.svg"
   inkscape:version="1.4.4 (dcaf3e7, 2026-05-05)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs84" />
  <sodipodi:namedview
     id="namedview84"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="2.434"
     inkscape:cx="249.79458"
     inkscape:cy="250"
     inkscape:window-width="2560"
     inkscape:window-height="1494"
     inkscape:window-x="-11"
     inkscape:window-y="-11"
     inkscape:window-maximized="1"
     inkscape:current-layer="freepik--ice-cream--inject-65" />
  <g
     id="g84">
    <g
       id="freepik--ice-cream--inject-65">
      <path
         d="M304,195.3l-78.89-15.12,0,.18c-4.87,25.87,30.53,220.78,30.53,220.78a9.57,9.57,0,0,0,17.55,3.35h0S377.91,236.27,383,210.32h0Z"
         style="fill:#ffbda7"
         id="path27" />
      <path
         d="M357.63,217.67c-23.31,37.54-90.37,71-119.82,78.3l-1.69-10.82S308.15,270.09,357.63,217.67Z"
         style="fill:#f0997a"
         id="path28" />
      <path
         d="M357.63,217.67c-23.13,37.23-89.28,70.49-119.09,78.12a5,5,0,0,0-3.66,5.8l20.73,99.55Z"
         style="fill:#ffbda7"
         id="path29" />
      <path
         d="M353.71,238.17c-34.22,11.92-84.21,2.37-111.64-21.31s-21.92-52.54,12.31-64.46S338.59,150,366,173.72,387.94,226.26,353.71,238.17Z"
         style="fill:#f0997a"
         id="path30" />
      <path
         d="M349.7,233c-31.12,10.09-76.79,1.37-102-19.47s-20.43-45.91,10.69-56,76.79-1.36,102,19.48S380.82,222.94,349.7,233Z"
         style="opacity:0.2"
         id="path31" />
      <path
         d="M355.42,203.06c-25.21-20.84-70.88-29.56-102-19.47-8.8,2.85-15.49,6.9-20,11.71,2.41,6.13,7.14,12.36,14.27,18.25,25.21,20.84,70.88,29.56,102,19.47,8.8-2.85,15.49-6.9,20-11.71C367.28,215.18,362.55,209,355.42,203.06Z"
         style="opacity:0.2"
         id="path32" />
      <path
         d="M363,246.16l-5.12,2.65-2.56,1.33-2.6,1.23c-3.72,1.87-7.54,3.51-11.41,5.1a1.31,1.31,0,0,0,.78,2.49,81.11,81.11,0,0,0,12.31-3.51l2.83-1c.93-.35,1.83-.77,2.74-1.15,1.21-.51,2.41-1.05,3.61-1.58q2.38-4.39,4.54-8.5C366.44,244.22,364.72,245.17,363,246.16Z"
         style="fill:#f0997a"
         id="path33" />
      <path
         d="M260.86,284.1c-6.35-4.09-12.52-8.2-18.54-12.5-3.15-2.22-6.22-4.52-9.26-6.86.34,2.38.7,4.77,1.06,7.18,1.91,1.2,3.84,2.37,5.82,3.46A93.48,93.48,0,0,0,260.86,284.1Z"
         style="fill:#f0997a"
         id="path34" />
      <path
         d="M286.56,382.31l-2.23.36q-2.22-2.35-4.38-4.75c-2.64-2.79-5-5.8-7.54-8.7l-3.57-4.52-1.79-2.26-1.7-2.33c-2.64-3.44-5.06-7-7.44-10.67a1.26,1.26,0,0,0-2.23,1.15,82.29,82.29,0,0,0,6,12l1.48,2.59c.52.84,1.1,1.65,1.65,2.48,1.1,1.65,2.23,3.29,3.37,4.91,2.45,3.13,4.86,6.3,7.58,9.2.61.69,1.25,1.34,1.88,2-3.33.45-6.69.8-10.07,1.15a.92.92,0,0,0,0,1.82,88.12,88.12,0,0,0,13.59.62c.55.54,1.11,1.07,1.67,1.6l4.1-6.68Z"
         style="fill:#f0997a"
         id="path35" />
      <path
         d="M301.4,306.44c1.07,1.41,2.15,2.82,3.25,4.21,2.49,2.87,5,5.77,7.68,8.42q3.59,3.6,7.44,6.88l3.59-4.07q-3.56-3.36-7-6.81c-2.66-2.55-5.09-5.3-7.65-7.94l-1.64-1.85.74-.19q2.9-.72,5.77-1.52c3.76-1.25,7.56-2.45,11.21-4s7-3.07,10.44-4.84c.88.83,1.79,1.63,2.7,2.43.94-1.62,1.88-3.23,2.81-4.85l-.45-.36,1-.61q2.28-3.93,4.5-7.81l-2.21,1.16c-2.49,1.27-5,2.48-7.52,3.68-1.87-1.64-3.74-3.29-5.56-5-2.76-2.42-5.36-5-8-7.55-1.4-1.22-6.74-8-8-7.77-.65.88,4.8,8.06,5.91,9.57a109.83,109.83,0,0,0,7,8.85c1.21,1.43,2.48,2.82,3.78,4.18-2.82,1.26-5.64,2.49-8.49,3.66-3.52,1.55-7.15,2.77-10.73,4.17l-5.46,1.83-2.74.93-.19.06-.31-.34-1.75-2.13c-4.19-4.74-7.9-9.84-11.81-14.95a.48.48,0,0,0-.83.48,88.18,88.18,0,0,0,9.08,17.14l.8,1.22c-5.26,1.58-10.61,2.81-16,4.09a.61.61,0,0,0,.13,1.21A87.56,87.56,0,0,0,301.4,306.44Z"
         style="fill:#f0997a"
         id="path36" />
      <path
         d="M250.3,249.58q2.05,1.36,4.17,2.66A103.68,103.68,0,0,0,265.53,258a1.28,1.28,0,0,0,1.27-2.21q-5.07-3.6-9.95-7.36c0-1.32,0-1.85.06-3.16q2.32-1.64,4.53-3.39a1,1,0,0,0-1.05-1.64q-4.33,2.13-8.68,4.13c-4-3.17-7.85-6.41-11.6-9.82-4.32-3.91-8.59-7.89-12.7-12.06.32,2.78.67,5.65,1,8.59q3.78,4,7.87,7.71a113.09,113.09,0,0,0,10,8h0q-7.41,3.25-14.95,6.06c.26,1.87.53,3.76.8,5.65a114.62,114.62,0,0,0,15.91-7.65C248.82,250.46,249.56,250,250.3,249.58Z"
         style="fill:#f0997a"
         id="path37" />
      <path
         d="M301.83,352.63q-3.52-3.33-6.91-6.76l1.33-.15c1-.15,1.95-.37,2.93-.55q2.93-.56,5.84-1.18c2-.55,4.09-1.08,6.12-1.67,1.47-2.43,2.95-4.91,4.45-7.41l0,0c-3.9,1.53-7.94,2.61-11.92,3.91l-5.56,1.5-2.78.77-2.81.65-2.26-.67q-2.31-2.43-4.55-4.92c-2.65-2.79-5-5.8-7.55-8.7l-3.56-4.52-1.79-2.27-1.71-2.32c-3.38-4.41-9.09-12.8-12.14-17.52a.87.87,0,0,0-1.55.77c1.94,5.35,7,14.3,10,19.17l1.48,2.59c.51.85,1.1,1.66,1.64,2.49,1.11,1.64,2.23,3.28,3.38,4.91,2.45,3.13,4.86,6.3,7.57,9.2,1.08,1.19,2.19,2.35,3.3,3.51-3.37.66-6.78,1.25-10.21,1.85a.69.69,0,0,0,.06,1.36,90.68,90.68,0,0,0,13.39,0A116.39,116.39,0,0,0,299,356q1.33,1,2.7,2l2.15-3.54C303.15,353.85,302.48,353.24,301.83,352.63Z"
         style="fill:#f0997a"
         id="path38" />
      <path
         d="M307,263.88h0c-25,15.93-52.15,27.75-68.43,31.92a5,5,0,0,0-3.66,5.8L248.7,368h0c-5.16-24.77-8.07-61.65-5.21-65.39S283.07,284.19,307,263.88Z"
         style="fill:#fff;opacity:0.2"
         id="path39" />
      <path
         d="M386.92,214.57c-2.67-4.95-3.74-8.58-2.84-12.45h0c.47-1.77.75-3.6,1.1-5.42a79.77,79.77,0,1,0-156.7-29.92c-.34,1.79-.6,3.56-.82,5.34-1.08,4.67-2.86,5.69-6.22,8.91-2.18,2.09-4.82,4.29-6.26,6.95-3.25,6-.52,10,3,13.31s6.8,2.53,8.51,7c.78,2,.88,4.25,1.49,6.33a13.7,13.7,0,0,0,7.6,8.58c6.08,2.62,13.48.57,19.43,3.47,6.92,3.37,9.66,12.32,16.49,15.86s15.61.52,22.77,3.45c5.85,2.4,9.92,8.51,16.14,9.68,8.56,1.6,17.18-6.95,25.33-3.88,3.79,1.42,5.58,4.91,5.83,8.77a31.37,31.37,0,0,1-.82,7.95c-.2,1.06-.33,2.11-.54,3.18s-.37,2-.49,3a21,21,0,0,0,0,6.08c.63,3.73,2.87,7.4,6.41,8.75a8.5,8.5,0,0,0,8.27-1.38c3.13-2.6,3.93-7,4.08-11.11.24-6.45-.63-12.94,0-19.37a30.31,30.31,0,0,1,2.08-8.79,19.77,19.77,0,0,1,4.11-6.4c.45-.45,1-.84,1.4-1.32s.48-.75.77-1.1a9.45,9.45,0,0,1,1.72-1.49,41.36,41.36,0,0,1,4-2.62c2.76-1.62,5.28-3.62,8.07-5.24a12.43,12.43,0,0,0,5.42-5.4C388.65,219.92,388.17,216.88,386.92,214.57Z"
         style="fill:#FF81AE"
         id="path40" />
      <path
         d="M386.92,214.57c-2.67-4.95-3.74-8.58-2.84-12.45h0c.47-1.77.75-3.6,1.1-5.42a79.77,79.77,0,1,0-156.7-29.92c-.34,1.79-.6,3.56-.82,5.34-1.08,4.67-2.86,5.69-6.22,8.91-2.18,2.09-4.82,4.29-6.26,6.95-3.25,6-.52,10,3,13.31s6.8,2.53,8.51,7c.78,2,.88,4.25,1.49,6.33a13.7,13.7,0,0,0,7.6,8.58c6.08,2.62,13.48.57,19.43,3.47,6.92,3.37,9.66,12.32,16.49,15.86s15.61.52,22.77,3.45c5.85,2.4,9.92,8.51,16.14,9.68,8.56,1.6,17.18-6.95,25.33-3.88,3.79,1.42,5.58,4.91,5.83,8.77a31.37,31.37,0,0,1-.82,7.95c-.2,1.06-.33,2.11-.54,3.18s-.37,2-.49,3a21,21,0,0,0,0,6.08c.63,3.73,2.87,7.4,6.41,8.75a8.5,8.5,0,0,0,8.27-1.38c3.13-2.6,3.93-7,4.08-11.11.24-6.45-.63-12.94,0-19.37a30.31,30.31,0,0,1,2.08-8.79,19.77,19.77,0,0,1,4.11-6.4c.45-.45,1-.84,1.4-1.32s.48-.75.77-1.1a9.45,9.45,0,0,1,1.72-1.49,41.36,41.36,0,0,1,4-2.62c2.76-1.62,5.28-3.62,8.07-5.24a12.43,12.43,0,0,0,5.42-5.4C388.65,219.92,388.17,216.88,386.92,214.57Z"
         style="opacity:0.2"
         id="path41" />
      <path
         d="M317.45,198.87c-2-1.19-4.59-1.42-6.23-3.08-3.18-3.21-.44-8.67,2.88-11.74s7.56-6.35,7.22-10.85a10.37,10.37,0,0,0-2.07-5c-2.08-3-4.88-5.67-8.37-6.72s-7.73-.11-9.84,2.87c-2.74,3.87-1.17,9.58-3.75,13.56-3.64,5.64-12.19,4-18.44,1.55a4.86,4.86,0,0,1-1.91-1.1,4.49,4.49,0,0,1-.74-3.53A25.59,25.59,0,0,1,281.26,162c2.49-3.28,6-6.35,6.14-10.47.28-6.44-7.36-10-13.74-10.92s-13.93-1.36-17.36-6.81c-3.15-5-.85-11.37,3.09-16.12a79.45,79.45,0,0,0-30.91,49.15c-.34,1.79-.6,3.56-.82,5.34-1.08,4.67-2.86,5.69-6.22,8.91-2.18,2.09-4.82,4.29-6.26,6.95-3.25,6-.52,10,3,13.31s6.8,2.53,8.51,7c.78,2,.88,4.25,1.49,6.33a13.7,13.7,0,0,0,7.6,8.58c3.51,1.51,7.45,1.47,11.29,1.72a9.43,9.43,0,0,0-1.15-3c-1.12-1.84-2.81-3.3-3.74-5.25s-.69-4.76,1.27-5.65a5.6,5.6,0,0,1,3.07-.15c6.92,1,9.48,6.8,19.37,5.74-2.12-4.93-2.42-14.57,1.95-17.68,2.33-1.66,5.48-1.43,8.3-.94a64.17,64.17,0,0,1,19.07,6.55c7.61,4,16.65,9.74,24,5.27A7.58,7.58,0,0,0,317.45,198.87Z"
         style="opacity:0.1"
         id="path42" />
      <g
         style="opacity:0.2"
         id="g45">
        <path
           d="M275.55,243.88c-2.67-3.12-4.52-7-6.48-10.66-2.58-4.81-5.86-9.73-10.95-11.7-3.37-1.31-7.11-1.15-10.71-1.48s-7.47-1.39-9.59-4.33-1.95-6.7-3.4-9.89c-2.37-5.18-8.31-7.61-13.82-9a12.33,12.33,0,0,1-4.23-1.61,6.67,6.67,0,0,1-2.48-3.67c-.77,4.14,1.51,7.2,4.28,9.78,3.52,3.27,6.8,2.53,8.51,7,.78,2,.88,4.25,1.49,6.33a13.7,13.7,0,0,0,7.6,8.58c6.08,2.62,13.48.57,19.43,3.47,6.92,3.37,9.66,12.32,16.49,15.86A15.79,15.79,0,0,0,275.55,243.88Z"
           id="path43" />
        <path
           d="M353,289.15c-3.93-.64-7.57-3.31-8.45-7.16a12.52,12.52,0,0,1,.18-5.41c1-4.34,3.09-8.42,3.41-12.85a26.53,26.53,0,0,0-1.33-9.25c-1-3.41-2.34-6.94-5.16-9.1-4-3.06-9.69-2.41-14.57-1.1s-9.91,3.17-14.84,2c-2.45-.56-4.67-1.83-7-2.72a23.05,23.05,0,0,0-5.91-1.35,24.06,24.06,0,0,0-10.76,1.46,20,20,0,0,0-2.1.86,23.16,23.16,0,0,1,8,1.42c5.85,2.4,9.92,8.51,16.14,9.68,8.56,1.6,17.18-6.95,25.33-3.88,3.79,1.42,5.58,4.91,5.83,8.77a31.37,31.37,0,0,1-.82,7.95c-.2,1.06-.33,2.11-.54,3.18s-.37,2-.49,3a21,21,0,0,0,0,6.08c.63,3.73,2.87,7.4,6.41,8.75A8.52,8.52,0,0,0,353,289.15Z"
           id="path44" />
        <path
           d="M386.27,225.29a24,24,0,0,0,.9-2.35c-2.24,1-5,1.17-7.55,1.58a24.42,24.42,0,0,0-20.11,28.2,27.58,27.58,0,0,1,1.25-3.86,19.77,19.77,0,0,1,4.11-6.4c.45-.45,1-.84,1.4-1.32s.48-.75.77-1.1a9.45,9.45,0,0,1,1.72-1.49,41.36,41.36,0,0,1,4-2.62c2.76-1.62,5.28-3.62,8.07-5.24A12.43,12.43,0,0,0,386.27,225.29Z"
           id="path45" />
      </g>
      <path
         d="M236.82,191.07c2.5,3.53,2.41,8.63,5.58,11.57s8.64,2.58,11.67,5.74c.91.94,1.51,2.12,2.34,3.13,3.58,4.37,10.18,4.57,15,7.57,4.57,2.86,7.3,8.15,12.07,10.66,3.19,1.69,6.85,1.88,10.38,1.7,3.68-.19,7.35-.75,11-.55.57,0,1.15.13,1.73.14a3.77,3.77,0,0,1,.58,0,6.23,6.23,0,0,1,1.14.23,10.7,10.7,0,0,1,2.16,1l.48.29c1.38.85,2.66,1.88,4.1,2.63a15.61,15.61,0,0,0,5.05,1.51,4.24,4.24,0,0,0,1.28,0,1.18,1.18,0,0,0,.69-.35A1.1,1.1,0,0,0,322,235a3.66,3.66,0,0,0-1.2-.8,3.49,3.49,0,0,1-1-.54,1.61,1.61,0,0,0-.34-.24c-.3-.16-.6-.32-.89-.51a14,14,0,0,1-1.64-1.22c-1.06-.9-2-1.9-3.05-2.84a17.88,17.88,0,0,0-2.48-1.95,16.48,16.48,0,0,0-3.24-1.51c-5.62-2-11.7-2.14-17.65-2.59a9.94,9.94,0,0,1-2.36-.38,6.56,6.56,0,0,0-.94-.33,3,3,0,0,1-.78-.24,17.4,17.4,0,0,1-3.79-2.64c-.27-.23-.54-.48-.8-.72-2.14-2-4.14-4.22-6.7-5.66a43.08,43.08,0,0,0-7.22-2.68c-2.43-.84-4.88-2.05-6.35-4.16a38.86,38.86,0,0,1-1.84-3.43,12.49,12.49,0,0,0-6-5.38,32.74,32.74,0,0,1-4.34-1.74c-2.77-1.64-4.1-4.85-5.74-7.62a29,29,0,0,0-3.82-5.06,6.9,6.9,0,0,0-2-1.51,4.2,4.2,0,0,1-.92-.58c-.51-.43-.95-.92-1.42-1.38a5.69,5.69,0,0,1-1.73-2.2c-.25-.84-.64-1.64-.92-2.47a28.23,28.23,0,0,1-1.22-5.43c-.07-.61-.31-1.39-.92-1.39-.43,0-.72.44-.88.83-.67,1.64-.48,3.48-.45,5.25s-.19,3.7-1.45,4.94a12.87,12.87,0,0,0-1,.95,3,3,0,0,0-.23,3.17,4.87,4.87,0,0,0,1.93,2c.32.18.68.21,1,.38s.84.55,1.25.82a27.47,27.47,0,0,1,4.71,3.44A9.51,9.51,0,0,1,236.82,191.07Z"
         style="opacity:0.1"
         id="path46" />
      <path
         d="M378.15,212.51c-1.4,2.75-4.66,3.94-7.66,4.67s-6.27,1.34-8.41,3.57c-3,3.13-2.92,8.62-6.49,11.08a6.86,6.86,0,0,1-3.21,1.14,11.2,11.2,0,0,1-1.92,0,2.45,2.45,0,0,0-.89,0,.77.77,0,0,1-1-1,1.26,1.26,0,0,1,.39-.52,24.71,24.71,0,0,1,2.23-1.42,8,8,0,0,0,2.5-3,23.42,23.42,0,0,0,1.4-3.66l0-.1c.24-.75.48-1.51.71-2.27a1.76,1.76,0,0,1,.17-.37c.19-.36.37-.71.57-1.06a23.76,23.76,0,0,1,1.27-2.12,12.53,12.53,0,0,1,3.27-3.42c2.07-1.42,4.65-2,6.61-3.57,2.19-1.75,3.31-4.47,4.65-6.94s4.9-7.23,8.31-5.06c1.09.69.9,1.71.4,2.73a20.76,20.76,0,0,0-1.89,4.09C378.6,207.71,379.33,210.2,378.15,212.51Z"
         style="opacity:0.1"
         id="path47" />
      <path
         d="M335.43,117.54a7.48,7.48,0,0,0,0,2.06,2.75,2.75,0,0,0,1.29,1.91c.88.57,1.63,1.62,2.77,1.57a2.76,2.76,0,0,0,2-1.2c.48-.63.83-1.36,1.34-2a4,4,0,0,1,4.85-1.19,14.53,14.53,0,0,1,2,1.63,10,10,0,0,1,2.42,2.05,2.85,2.85,0,0,1,.37,2,2.45,2.45,0,0,1-.37,1,4.94,4.94,0,0,1-2.5,1.83c-1.27.39-2.78.8-3.22,2.05-.89,2.5,3.52,5.31,1.71,7.24s-5.88-1.13-6.66,1.18a2.07,2.07,0,0,0,0,1,3,3,0,0,0,2.13,2.63,10.11,10.11,0,0,1,1.91.27c1.11.41,1.81,1.67,3,1.82a2.56,2.56,0,0,0,2.3-1.31c1.59-2.41.9-6,3-8a5.06,5.06,0,0,1,3.94-1.17,11.61,11.61,0,0,1,3.46,1,1.46,1.46,0,0,1,.54.32c.35.37.76.69,1.11,1.07a7.15,7.15,0,0,1,2.12,6.19c-.52,2.57-2.71,4.43-4.79,6-1.74,1.33-3.71,3.35-2.83,5.35a3.72,3.72,0,0,0,3.41,1.85c2.32.08,4.53-.94,6.83-1.27s5.11.36,5.9,2.55c.84,2.35-1.13,4.71-1.67,7.15a6.58,6.58,0,0,0,4.56,7.5,12.6,12.6,0,0,1,2.6.69,4.46,4.46,0,0,1,2.11,4.35,13.16,13.16,0,0,1-1.68,4.81c-1.76,3.49-3.7,7.16-7.08,9.11a16.94,16.94,0,0,0-3.07,1.83c-3,2.75-1.26,8-3.21,11.59-2.46,4.53-9.15,4.26-13.19,7.45-2.42,1.92-3.67,4.91-5.25,7.56s-4,5.26-7.08,5.38c-3.78.14-6.84-4.46-5.25-7.89,1.1-2.35,3.7-3.65,6.25-4.05,1.19-.19,2.52-.27,3.38-1.13a4.83,4.83,0,0,0,1.05-2.51c1.09-5.23,2-11.29-1.42-15.41-1.43-1.71-3.6-3.11-3.8-5.33-.26-2.83,2.82-4.72,5.52-5.61s5.9-1.93,6.72-4.65c1.45-4.76-6-8.52-5.18-13.44a12.46,12.46,0,0,0,.51-2.67c-.1-1.67-1.8-2.85-3.46-3.07a7.32,7.32,0,0,0-1.62,0c-1.81.13-3.55.58-5.37.55-.81,0-1.62-.1-2.43-.13-.55,0-1.1,0-1.65-.09a5,5,0,0,1-2.77-1.51c-.67-.62-1.3-1.29-1.94-1.94a5.39,5.39,0,0,1-1.36-1.92,3.84,3.84,0,0,1,.15-2.67,5.34,5.34,0,0,1,2.27-2.6,6.06,6.06,0,0,0,2.17-1.44c.61-.87.31-1.83.1-2.77-.06-.29,0-.58,0-.87-.14-1-1.27-1.42-2.08-1.64a15.37,15.37,0,0,0-10.63,1c-2.26,1.1-4.22,2.74-6.46,3.85s-5,1.65-7.22.44c-1.33-.73-2.27-2-3.45-3a11.37,11.37,0,0,0-3.84-2,48.65,48.65,0,0,0-6.09-1.23c-1.73-.31-3.88-.56-5.22-1.79-1.92-1.76-1.52-5.67,1-6.67,1.77-.7,4.58-.72,4.58-2.62a3,3,0,0,0-.7-1.63c-1.39-2-2.9-4.19-2.51-6.56a7.11,7.11,0,0,1,2.46-3.93,16.36,16.36,0,0,1,14-3.86c2.43.49,4.72,1.54,7.15,2s5.21.26,7-1.45c.71-.68,1.23-1.55,2-2.16,2.18-1.76,5.39-.88,8,.09,2.19.81,4.68,2,5.19,4.23A7.12,7.12,0,0,1,335.43,117.54Z"
         style="fill:#FF81AE;opacity:0.5"
         id="path48" />
      <path
         d="M353.08,286.1a4.51,4.51,0,0,0,1.23-1.58,22.62,22.62,0,0,0,2-14.49,3.81,3.81,0,0,0-.19-1.06,1,1,0,0,0-1-.54,2.5,2.5,0,0,0-1.53,1.23l-2.29,3.17c-.49.68-1,1.36-1.45,2.06a11,11,0,0,0-1,1.56,3.79,3.79,0,0,0-.18.66c-.14.6-.44,1.16-.58,1.78a7.81,7.81,0,0,0,.11,3.75,7.27,7.27,0,0,0,1.18,2.4,3.2,3.2,0,0,0,1.31,1.08,3.6,3.6,0,0,0,1.18.37A2,2,0,0,0,353.08,286.1Z"
         style="fill:#FF81AE;opacity:0.5"
         id="path49" />
      <path
         d="M352.74,265.87a3.39,3.39,0,0,0,2.15-.73,4.43,4.43,0,0,0,1.85-2.87,2.65,2.65,0,0,0-1.23-2.76c-2.13-1.05-4,1.8-4.44,3.49a2.54,2.54,0,0,0,.14,2A2.06,2.06,0,0,0,352.74,265.87Z"
         style="fill:#FF81AE;opacity:0.5"
         id="path50" />
      <path
         d="M384.08,202.12c.47-1.77.75-3.6,1.1-5.42a80.78,80.78,0,0,0,1.33-11.36c0-.74,0-1.47.06-2.2a79.73,79.73,0,0,0-129.64-63.6l2.07-.42a37.18,37.18,0,0,0-6.11,10.21c-1.14,3.15-.87,7,1.52,9.37,1.79,1.74,4.46,2.36,6.21,4.14,2.39,2.41,2.58,6.41,5,8.76,2.73,2.64,7.72,2.69,9.35,6.11,1.47,3.12-.84,7.35,1.29,10.06,1.15,1.46,3.31,2,4.16,3.62,1.09,2.11-.55,4.51-1.26,6.77a8.6,8.6,0,1,0,16.65,4.23c.56-2.88-.37-5.84-.16-8.77s2.43-6.2,5.31-5.69c2.67.47,3.91,3.79,6.44,4.77,2.07.8,4.49-.17,6.59.56s3.23,2.85,4.58,4.59a17,17,0,0,0,18.51,5.5c3.23-1.12,6.33-3.27,9.72-2.85,4.23.53,7.34,5,11.61,5,4,.07,7.65-3.76,11.48-2.64,3.18.93,4.49,4.84,4.21,8.13s-1.61,6.47-1.64,9.78A13,13,0,0,0,383.7,213.4c.41-1.18.75-2.38,1-3.58A13.25,13.25,0,0,1,384.08,202.12Z"
         style="opacity:0.2"
         id="path51" />
      <path
         d="M398.87,161.91c-3.3-8.8-5.27-11.87-2-19.31A71.66,71.66,0,0,0,400,105.72c-9.7-63.21-98.08-80.68-131.2-26-4.24,6.63-6.77,15.13-14.43,18.72-14.78,3.51-14.75,20.28-7.82,31,4-4.27,6.69-7.37,12.41-10.32-2.8,7.45-4.26,13,4.13,17,3,2.85,3.16,7.65,6.42,10.42,6.69,5.67,11,1.31,12.05,6.92-1.35,10.34-1.07,9,4.07,17.87.88,5.54-2.87,14.32,5.19,15.93,14.55,1.07,3.36-19.48,11.47-21.2a6.87,6.87,0,0,1,3.89,1.06c2.47,1.28,5.36-.87,7.69,0,10.42,4.11,14.84,15.18,26.39,9.45,3.07-1.68,6.61-4.55,10.27-3.31,4,1.72,5.12,7.84,10.4,7.56,6.7-.36,8.51-5.84,13.67-3.68,12.08,7.91-5,25.32,4.61,35.39,2.91,4.35,12.41,7.49,13.51.23.73-6.07-2.89-11.48-3.24-17.41C386.62,181.1,403.39,174,398.87,161.91Z"
         style="fill:#FF81AE"
         id="path52" />
      <path
         d="M335.23,121.84c3.55-2,8-4,8.62-8a9.32,9.32,0,0,0-.75-4.78c-1.18-3.06-3.05-6-5.89-7.66s-6.73-1.74-9.21.41c-3.22,2.8-3.06,8.13-6.16,11.06-4.39,4.15-11.51.88-16.46-2.58A4.33,4.33,0,0,1,304,109a4.05,4.05,0,0,1,.11-3.25,22.88,22.88,0,0,1,7.17-10.21c2.88-2.34,6.56-4.29,7.6-7.85A7.57,7.57,0,0,0,317.35,81a12.38,12.38,0,0,0-4.64-4c-1.22-.5-2.4-1.1-3.61-1.61A47,47,0,0,1,302,72c-.47-.3-.92-.62-1.36-1-3.61-2.78-6.15-7.73-4.36-11.91.83-1.93,2.52-3.75,2.13-5.8a66.25,66.25,0,0,0-29.55,26.37c-4.24,6.63-6.77,15.13-14.43,18.72-14.78,3.51-14.75,20.28-7.82,31,4-4.27,6.69-7.37,12.41-10.32-2.8,7.45-4.26,13,4.13,17,2.43,2.33,2.91,6.08,4.86,8.77a6.05,6.05,0,0,0-.13-3.52c-.66-2.16-2-4.11-2.48-6.33-.39-1.89.41-4.31,2.31-4.67a5.16,5.16,0,0,1,2.73.52c5.84,2.31,6.83,8,15.7,9.15-.8-4.76,1-13.25,5.48-15,2.39-1,5.09-.08,7.45,1a57.74,57.74,0,0,1,15.27,9.79c5.79,5.16,12.48,12.07,19.88,9.72a6.81,6.81,0,0,0,.79-10c-1.5-1.47-3.71-2.23-4.79-4C328.11,128,331.67,123.81,335.23,121.84Z"
         style="opacity:0.1"
         id="path53" />
      <path
         d="M266.18,111.49c1.42,3.62.26,8.07,2.41,11.31s7,4.1,9,7.51c.58,1,.86,2.17,1.37,3.23,2.2,4.59,7.92,6.17,11.48,9.81,3.38,3.47,4.64,8.68,8.27,11.89,2.43,2.16,5.59,3.1,8.72,3.7a94.9,94.9,0,0,1,9.76,1.87c.5.15,1,.36,1.48.49l.5.16a5.5,5.5,0,0,1,1,.45,9.61,9.61,0,0,1,1.68,1.29l.37.36c1,1,1.91,2.21,3,3.17a14.1,14.1,0,0,0,4.1,2.41,3.66,3.66,0,0,0,1.11.3,1.06,1.06,0,0,0,.68-.16,1,1,0,0,0,.19-1.19,3,3,0,0,0-.88-1,3.32,3.32,0,0,1-.72-.68,1.08,1.08,0,0,0-.24-.28c-.24-.21-.46-.42-.67-.64a12.34,12.34,0,0,1-1.18-1.42c-.73-1-1.37-2.09-2.06-3.13a16.36,16.36,0,0,0-1.75-2.23,14.76,14.76,0,0,0-2.51-2c-4.49-2.95-9.78-4.37-14.88-6a8.86,8.86,0,0,1-2-.84,7.43,7.43,0,0,0-.75-.49A2.12,2.12,0,0,1,303,149a15.59,15.59,0,0,1-2.75-3.1l-.55-.81c-1.44-2.2-2.72-4.57-4.65-6.37a39.09,39.09,0,0,0-5.74-3.89,11.2,11.2,0,0,1-4.66-5c-.43-1.09-.56-2.27-.88-3.4a11.21,11.21,0,0,0-4.1-6,29.93,29.93,0,0,1-3.43-2.44c-2.07-2-2.55-5.12-3.39-7.89a25.87,25.87,0,0,0-2.27-5.24,6,6,0,0,0-1.39-1.73,3.85,3.85,0,0,1-.68-.72c-.36-.47-.64-1-.95-1.5a5,5,0,0,1-1-2.3c0-.78-.21-1.56-.28-2.35a24.67,24.67,0,0,1,.09-5c.07-.54,0-1.28-.5-1.4-.38-.09-.73.22-1,.53a11.93,11.93,0,0,0-1.5,4.49c-.36,1.55-1,3.2-2.33,4a11.49,11.49,0,0,0-1.08.61,2.71,2.71,0,0,0-.87,2.73,4.4,4.4,0,0,0,1.25,2.19c.24.22.56.33.8.55s.61.65.92,1a25.45,25.45,0,0,1,3.38,4A10.28,10.28,0,0,1,266.18,111.49Z"
         style="opacity:0.1"
         id="path54" />
      <path
         d="M385.15,160.37c-1.81,2.11-4.91,2.45-7.69,2.45s-5.77-.17-8.12,1.33c-3.29,2.09-4.39,6.9-8,8.3a6.33,6.33,0,0,1-3.05.31,10.49,10.49,0,0,1-1.68-.38,2.25,2.25,0,0,0-.78-.23.69.69,0,0,1-.68-.32.72.72,0,0,1,0-.75,1.11,1.11,0,0,1,.46-.37,20.5,20.5,0,0,1,2.25-.76,7.2,7.2,0,0,0,2.81-2.08,19.45,19.45,0,0,0,2-2.9l0-.08c.37-.61.74-1.22,1.1-1.83a1.28,1.28,0,0,1,.23-.29l.72-.81c.5-.55,1-1.08,1.56-1.58a11.33,11.33,0,0,1,3.59-2.29c2.12-.8,4.5-.76,6.54-1.71,2.29-1.06,3.85-3.21,5.55-5.08s5.82-5.28,8.34-2.65c.81.84.43,1.68-.23,2.47a18.35,18.35,0,0,0-2.52,3.18C386.57,156.27,386.67,158.6,385.15,160.37Z"
         style="opacity:0.1"
         id="path55" />
      <path
         d="M389.78,215.18a12.15,12.15,0,0,1-8.47-10.29c-.38-4.1,1.37-8,2.77-11.91.13-.35.25-.71.37-1.06a20,20,0,0,0,1.28-7.33,8.23,8.23,0,0,0-.78-3.42,13.82,13.82,0,0,1-.7-2.6,7.66,7.66,0,0,0-5.31-5.47c-3.49-.77-6.91,1.59-10.47,1.69-.77,0-1.55-.07-2.32,0-3.49.35-6,3.84-9.35,4.6a5.67,5.67,0,0,0,4.17,1.48c6.7-.36,8.51-5.84,13.67-3.68,12.08,7.91-5,25.32,4.61,35.39,2.45,3.65,9.54,6.43,12.39,2.92A9.6,9.6,0,0,1,389.78,215.18Z"
         style="opacity:0.1"
         id="path56" />
      <path
         d="M368.05,68.24a6.29,6.29,0,0,0-.42,1.8,2.38,2.38,0,0,0,.72,1.95c.64.69,1.07,1.76,2.08,2a2.47,2.47,0,0,0,2-.64c.56-.45,1-1,1.6-1.44a3.65,3.65,0,0,1,4.49,0,12,12,0,0,1,1.38,1.85,9.05,9.05,0,0,1,1.68,2.3,2.54,2.54,0,0,1-.09,1.8,2.17,2.17,0,0,1-.53.77,4.37,4.37,0,0,1-2.58,1.06c-1.19.08-2.6.11-3.25,1.11-1.31,2,1.95,5.39-.05,6.69-1.84,1.2-4.9-2.24-6.07-.38a1.8,1.8,0,0,0-.25.88A2.65,2.65,0,0,0,370,90.71a9,9,0,0,1,1.61.65c.88.59,1.23,1.85,2.22,2.22a2.31,2.31,0,0,0,2.29-.66c1.9-1.76,2.06-5.06,4.32-6.34a4.52,4.52,0,0,1,3.69-.18A10.61,10.61,0,0,1,387,88a1.27,1.27,0,0,1,.4.4c.23.4.51.76.74,1.17a6.42,6.42,0,0,1,.53,5.86c-1,2.14-3.31,3.3-5.47,4.25-1.8.8-4,2.14-3.62,4.07a3.36,3.36,0,0,0,2.59,2.35c2,.56,4.16.15,6.24.34s4.4,1.41,4.62,3.49c.23,2.24-2,3.88-3,5.9a5.93,5.93,0,0,0,2.39,7.53,11.8,11.8,0,0,1,2.13,1.15,4,4,0,0,1,.91,4.25,11.83,11.83,0,0,1-2.5,3.85c-2.28,2.67-4.75,5.48-8.12,6.46a14.56,14.56,0,0,0-3.07.94c-3.24,1.76-2.82,6.72-5.29,9.45-3.11,3.43-8.9,1.77-13.11,3.7-2.53,1.16-4.26,3.51-6.21,5.49s-4.61,3.75-7.33,3.19c-3.34-.68-5-5.36-2.9-8,1.45-1.81,4-2.39,6.32-2.2a5.22,5.22,0,0,0,3.19-.27,4.34,4.34,0,0,0,1.46-2c2.07-4.34,4.15-9.45,2-13.77-.88-1.8-2.48-3.49-2.19-5.47.38-2.53,3.48-3.52,6-3.73s5.58-.43,6.88-2.63c2.27-3.85-3.4-8.72-1.67-12.85a12.08,12.08,0,0,0,1-2.23c.27-1.48-1-2.87-2.37-3.42a7,7,0,0,0-1.41-.38c-1.61-.28-3.23-.25-4.81-.67-.71-.18-1.4-.43-2.1-.63a13.69,13.69,0,0,1-1.42-.43,4.44,4.44,0,0,1-2.11-1.91c-.44-.69-.85-1.4-1.27-2.11a4.9,4.9,0,0,1-.79-2,3.43,3.43,0,0,1,.71-2.3A4.75,4.75,0,0,1,357,93.08a5.42,5.42,0,0,0,2.2-.79,3,3,0,0,0,.68-2.4,6.53,6.53,0,0,1,.14-.77c.08-.87-.81-1.52-1.47-1.88a13.77,13.77,0,0,0-9.5-1.41c-2.21.48-4.27,1.49-6.47,2s-4.74.37-6.41-1.16a23.59,23.59,0,0,1-2.38-3.33,10.06,10.06,0,0,0-2.94-2.53,46.67,46.67,0,0,0-5.06-2.38c-1.44-.64-3.27-1.31-4.18-2.67-1.31-2-.12-5.29,2.31-5.62,1.69-.23,4.15.35,4.56-1.32a2.64,2.64,0,0,0-.27-1.57c-.79-2-1.64-4.28-.79-6.27a6.4,6.4,0,0,1,3-2.91,14.75,14.75,0,0,1,13.05-.39c2,.95,3.8,2.36,5.82,3.29s4.5,1.33,6.44.22c.76-.44,1.4-1.09,2.2-1.47,2.28-1.07,4.89.39,7,1.79,1.74,1.17,3.68,2.71,3.63,4.8A6.24,6.24,0,0,1,368.05,68.24Z"
         style="fill:#fff;opacity:0.05"
         id="path57" />
      <path
         d="M345.66,53.88c-3.12.52-1.36,2.44-3.77,3.67-1.61.82-4.7,1.22-5.11,3a4.13,4.13,0,0,0,2,4.12,12.16,12.16,0,0,0,4.59,1.49L353.69,68c2.05.37,4.51,1.12,4.95,3.16.14.67,0,1.37.21,2,.56,2,3.23,2.27,5.29,2.1s4.7,0,5.44,1.89a15.25,15.25,0,0,1,.36,1.81c.6,2.37,3.35,3.33,5.59,4.32a21.28,21.28,0,0,1,12,15.05c.3,1.52,1.18,3.58,2.65,3.08,1-.33,1.18-1.62,1.17-2.66-.11-11.39-4.91-21.48-13-29.46S356.59,52.05,345.66,53.88Z"
         style="fill:#fff;opacity:0.2"
         id="path58" />
      <path
         d="M388.47,110.18a1.9,1.9,0,0,0,.78,1.19,2.15,2.15,0,0,0,.9.24,2.9,2.9,0,0,0,1.8-.27,2.46,2.46,0,0,0,1-1.87,3.85,3.85,0,0,0-1.65-3.75c-1.35-.71-2.4.74-2.78,1.88A4.45,4.45,0,0,0,388.47,110.18Z"
         style="fill:#fff;opacity:0.2"
         id="path59" />
      <path
         d="M383.92,202.73a11.19,11.19,0,0,0,.24,4.53,7.93,7.93,0,0,0,1.59,3.57,4.87,4.87,0,0,0,2.4,1.46,1.36,1.36,0,0,0,.6,0,1.23,1.23,0,0,0,.51-.31c1.08-1,1.15-2.69,1.08-4.18a19.38,19.38,0,0,0-1.22-6.4,8.26,8.26,0,0,0-1.68-2.73c-.73-.7-1.41-.25-1.91.45A9.24,9.24,0,0,0,383.92,202.73Z"
         style="fill:#fff;opacity:0.2"
         id="path60" />
      <path
         d="M392.16,162.84c-.13.2-.25.41-.37.61-.56,1-1.07,1.92-1.54,2.91-.6,1.26-1.12,2.73-.56,4a3.52,3.52,0,0,0,1.72,1.64,1.23,1.23,0,0,0,1,.16c.39-.12.8-.21,1.19-.36a3.68,3.68,0,0,0,.91-.5,4.74,4.74,0,0,0,1.57-1.76,16.06,16.06,0,0,0,1.41-3.44,5.45,5.45,0,0,0-.28-3.65,2.41,2.41,0,0,0-4-.86A5.48,5.48,0,0,0,392.16,162.84Z"
         style="fill:#fff;opacity:0.2"
         id="path61" />
      <path
         d="M359.76,387.14a14,14,0,0,0-7.1.83c-1,.4-3.35,1.21-3.21,3.83.13,2.42,3.62,1.4,4.63,1a21.09,21.09,0,0,1,7.2-1.48,15.14,15.14,0,0,1,5.49,1.06c.76.25,2.24,1,3-.06.61-.92-1.12-1.87-1.77-2.33A19.52,19.52,0,0,0,359.76,387.14Z"
         style="fill:#fff;opacity:0.1"
         id="path69" />
      <path
         d="M294.06,86.82c1.42-4.3.49-9.57-3.06-12.36-.87-.68-1.88-1.07-2.79-1.67a2.7,2.7,0,0,0-1.12-.41,19.05,19.05,0,0,0-3.62-.16,30,30,0,0,0-7.21,1.28c-1,.3-2,.63-3,1-.46.69-.9,1.39-1.33,2.11-3.6,5.62-6,12.57-11.27,16.75a17.63,17.63,0,0,1-6.26,5.06,17.83,17.83,0,0,0-4.69,1.81.36.36,0,0,1,0,.09,4.29,4.29,0,0,0,1.53,1.3,20.64,20.64,0,0,0,8.63,2.4,39.38,39.38,0,0,0,25.65-6.9C289.28,94.51,292.63,91.11,294.06,86.82Z"
         style="opacity:0.2"
         id="path79" />
      <path
         d="M292.22,67.19c3.59,14.35-5.36,28-19.7,31.58s-28.66-4.23-32.25-18.57,10.3-26.27,22.09-22C271.44,48.18,288.63,52.85,292.22,67.19Z"
         style="fill:#ff2a2a"
         id="path80" />
      <path
         d="M266.26,20.56a6.62,6.62,0,0,0-4,1.4,10.42,10.42,0,0,0-3.44,3.54c-1.84,3.58-2.47,8.24-2.36,12.63a51.7,51.7,0,0,0,2,13.34,27,27,0,0,0,4.88,9.91,3.84,3.84,0,0,0,1.54-.71c-4.46-5.83-5.11-17.19-4.45-22.76.81-6.78,3.07-12.5,6.24-16C267,21.55,266.66,20.56,266.26,20.56Z"
         style="fill:#550000"
         id="path81" />
      <path
         d="M269,59.15c-1.2.24-2.32.78-3.52,1a11.58,11.58,0,0,1-3.52.21c-1.74-.19-4.43-1.05-5.86.36-.06.06-.08.23,0,.25.51.09,1,.07,1.58.12s1.23.19,1.84.32a23.62,23.62,0,0,0,3.53.67c2.22.11,4.84-.53,6.07-2.54C269.18,59.46,269.15,59.11,269,59.15Z"
         style="fill:#263238"
         id="path82" />
      <path
         d="M276,58.58a3.79,3.79,0,0,0,.11,4.07,8.63,8.63,0,0,0,2.25,1.95,28.14,28.14,0,0,1,5.85,5.58,7.13,7.13,0,0,0,1.44,1.56,2.12,2.12,0,0,0,2,.32,2.76,2.76,0,0,0,1.27-2.25,11.77,11.77,0,0,0-6-12,11.12,11.12,0,0,0-2.47-1,4.46,4.46,0,0,0-2.08.15A3.84,3.84,0,0,0,276,58.58Z"
         style="fill:#fff;opacity:0.2"
         id="path83" />
      <path
         d="M284.54,78a6.81,6.81,0,0,0-.49,3.15,1.93,1.93,0,0,0,.72,1.48,1.61,1.61,0,0,0,1.14.19,3.43,3.43,0,0,0,2.3-1.54,5.75,5.75,0,0,0,.84-2.69,3.74,3.74,0,0,0-.39-2.29c-.33-.54-1.14-1.16-1.81-.91a2.69,2.69,0,0,0-.86.48,4.84,4.84,0,0,0-.84.93A5.42,5.42,0,0,0,284.54,78Z"
         style="fill:#fff;opacity:0.2"
         id="path84" />
    </g>
  </g>
</svg>
`,$2=z2,W2=P2,V2={sm:"db-treat-svg--sm",md:"db-treat-svg--md",lg:"db-treat-svg--lg"};function X2({raw:n,size:t="md",className:e,label:i}){return a.jsx("span",{className:["db-treat-svg",V2[t],e].filter(Boolean).join(" "),role:"img","aria-label":i,dangerouslySetInnerHTML:{__html:n}})}function Y2({className:n,size:t="lg",enterAnimate:e=!0}){const i=S(),[l,c]=s.useState(!1),[d,h]=s.useState(!e||i),r=()=>{c(u=>!u),d||h(!0)},o=i?{initial:!1,animate:{opacity:1},exit:{opacity:0},transition:{duration:.12}}:{initial:{opacity:0,scale:.92,y:8,filter:"blur(5px)"},animate:{opacity:1,scale:1,y:0,filter:"blur(0px)"},exit:{opacity:0,scale:.94,y:-6,filter:"blur(4px)"},transition:{duration:.48,ease:[.22,1,.36,1]}},y=!d&&e&&!i?{initial:{opacity:0,scale:.6,y:10},animate:{opacity:1,scale:1,y:0}}:{};return a.jsx("button",{type:"button",className:["db-zongzi-flip-treat",n].filter(Boolean).join(" "),onClick:u=>{u.stopPropagation(),r()},"aria-label":l?"甜筒变回粽子":"粽子变甜筒","aria-pressed":l,children:a.jsx("span",{className:"db-zongzi-flip-treat-stage",children:a.jsx(W,{mode:"wait",initial:!1,children:a.jsx(m.span,{className:"db-zongzi-flip-treat-inner",...o,...!l&&!d?y:{},onAnimationComplete:()=>{d||h(!0)},children:a.jsx(X2,{raw:l?W2:$2,size:t,label:l?"甜筒":"粽"})},l?"ice":"zong")})})})}const J={hidden:{opacity:0,x:14},visible:{opacity:1,x:0,transition:{duration:.4,ease:[.22,1,.36,1]}}};function h1({text:n,className:t,hide:e}){return e?null:a.jsx(m.p,{className:["db-festive-vertical-text",t].filter(Boolean).join(" "),variants:J,children:n})}function U2({beat:n,onDark:t,enterFromMorph:e,isExitingMorph:i=!1,onMorphComplete:l}){var M;const c=S(),h=s.useRef(e&&!c).current,r=s.useRef(!1),o=(M=n.body)==null?void 0:M[n.body.length-1],y=n.body&&n.body.length>1?n.body.slice(0,-1):n.body,u=h?{hidden:{opacity:0,x:32},visible:{opacity:1,x:0,transition:{duration:.52,ease:[.22,1,.36,1],staggerChildren:.04,delayChildren:.05}}}:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.07,delayChildren:.1}}},p=s.useCallback(()=>{!i||r.current||(r.current=!0,l==null||l())},[i,l]);s.useEffect(()=>{if(!i){r.current=!1;return}if(c){p();return}const f=window.setTimeout(p,h2),b=window.setTimeout(p,o1+80);return()=>{window.clearTimeout(f),window.clearTimeout(b)}},[i,c,p]);const g=t?"db-ink-display--on-dark":"db-ink-display--on-light";return a.jsxs(l1,{className:"db-layout-festive-vertical",variant:"split",children:[a.jsxs(m.aside,{className:"db-layout-festive-side",initial:h&&!c?{opacity:0,x:16}:!1,animate:i?{opacity:0,x:-16}:{opacity:1,x:0},transition:{duration:i?.36:h?.48:.35,delay:h&&!i?.04:0,ease:[.22,1,.36,1]},children:[a.jsx(D2,{size:"lg",className:"db-festive-side-mugwort",animate:!h&&!i}),!i&&a.jsx(Y2,{size:"lg",className:"db-festive-side-zongzi",enterAnimate:!h&&!i})]}),a.jsxs(m.div,{className:"db-layout-festive-columns",variants:u,initial:c?!1:"hidden",animate:i?{opacity:0,x:-28}:"visible",transition:i?{duration:.42,ease:[.38,.02,.18,1]}:void 0,children:[a.jsx(m.div,{className:"db-festive-vcol db-festive-vcol--title",variants:J,children:a.jsxs("h2",{className:["db-festive-title-vertical",g].join(" "),"aria-label":"节物",children:[a.jsx("span",{className:"db-festive-title-char",children:"节"}),a.jsx("span",{className:"db-festive-title-char",children:"物"})]})}),n.subtitle&&a.jsx(m.div,{className:"db-festive-vcol",variants:J,children:a.jsx(h1,{text:n.subtitle,className:t?"text-stone-200/90":"text-stone-700",hide:i})}),y==null?void 0:y.map(f=>a.jsx(m.div,{className:"db-festive-vcol",variants:J,children:a.jsx(h1,{text:f,className:t?"text-stone-200/88":"text-stone-700/95",hide:i})},f)),o&&a.jsx(m.div,{className:"db-festive-vcol db-festive-vcol--bridge",variants:J,children:a.jsx(h1,{text:o,className:t?"text-amber-100/85":"text-emerald-950/85",hide:i})})]})]})}function G2({beat:n,isNight:t}){const e=`db-ambient db-ambient--${n.id}${t?" db-ambient--night":""}`;return a.jsxs("div",{className:e,"aria-hidden":!0,children:[n.id==="prologue"&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"db-ambient-spot db-ambient-spot--a"}),a.jsx("div",{className:"db-ambient-spot db-ambient-spot--b"}),a.jsx("div",{className:"db-ambient-spot db-ambient-spot--c"})]}),n.id==="river"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"db-ambient-mountains","aria-hidden":!0,children:[a.jsx("div",{className:"db-ambient-mountain db-ambient-mountain--back"}),a.jsx("div",{className:"db-ambient-mountain db-ambient-mountain--mid"}),a.jsx("div",{className:"db-ambient-mountain db-ambient-mountain--front"})]}),a.jsx("div",{className:"db-ambient-mist"}),a.jsx("div",{className:"db-ambient-ripple-band"}),a.jsx("div",{className:"db-ambient-waterline"})]}),n.id==="festive"&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"db-ambient-smoke db-ambient-smoke--1"}),a.jsx("div",{className:"db-ambient-smoke db-ambient-smoke--2"}),a.jsx("div",{className:"db-ambient-leaf db-ambient-leaf--1"}),a.jsx("div",{className:"db-ambient-leaf db-ambient-leaf--2"})]}),n.id==="letter"&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"db-ambient-paper-shimmer"}),a.jsx("div",{className:"db-ambient-ink-wet"})]}),n.id==="finale"&&a.jsx("div",{className:"db-ambient-gold-dust",children:Array.from({length:12},(i,l)=>a.jsx("span",{className:"db-ambient-gold-particle",style:{"--p-i":l}},l))})]})}function J2({isNight:n,isExiting:t,onComplete:e}){const i=S(),l=s.useRef(!1),c=s.useCallback(()=>{!t||l.current||(l.current=!0,e==null||e())},[t,e]);if(s.useEffect(()=>{if(!t){l.current=!1;return}if(i){c();return}const h=window.setTimeout(c,a1+120);return()=>window.clearTimeout(h)},[t,i,c]),!t)return null;const d=G("river",n);return a.jsxs(a.Fragment,{children:[a.jsx(m.div,{className:"db-morph-ink-bloom pointer-events-none absolute inset-0 z-[12]",style:{background:n?"radial-gradient(ellipse 45% 38% at 50% 42%, rgba(2,44,29,0.95) 0%, transparent 72%)":"radial-gradient(ellipse 45% 38% at 50% 42%, rgba(28,25,23,0.88) 0%, transparent 72%)"},initial:{opacity:0,scale:.15},animate:{opacity:1,scale:2.8},transition:{duration:a1/1e3,ease:[.32,.72,0,1]},onAnimationComplete:c,"aria-hidden":!0}),a.jsx(m.div,{className:"db-morph-ink-river pointer-events-none absolute inset-0 z-[11]",style:{background:d},initial:{opacity:0},animate:{opacity:1},transition:{duration:a1/1e3,delay:.22,ease:[.22,1,.36,1]},"aria-hidden":!0})]})}const Q2=2.1,K2={"top-left":"db-scroll-egg--top-left","top-right":"db-scroll-egg--top-right","bottom-left":"db-scroll-egg--bottom-left","bottom-right":"db-scroll-egg--bottom-right","mid-left":"db-scroll-egg--mid-left"};function n0({egg:n,theme:t,onDark:e,isNight:i,index:l,hidden:c,onTap:d}){const[h,r]=s.useState(!1),o=S();if(c)return null;const y=n.anchor.includes("right"),u=i||e?"text-amber-100/90":"text-emerald-900";return a.jsxs(m.div,{className:["db-scroll-egg-slot",K2[n.anchor]].join(" "),initial:o?{}:{opacity:0},animate:{opacity:1},transition:{delay:.85+l*.08,duration:.4},children:[a.jsx(m.button,{type:"button",className:["db-scroll-egg",n.hint&&"db-scroll-egg--hint",t.egg,t.eggHover,"border-0 bg-transparent font-serif"].join(" "),onClick:p=>{p.stopPropagation(),n.reveal&&(r(g=>!g),d==null||d())},"aria-expanded":h,"aria-label":n.reveal?`彩蛋：${n.text}`:n.text,children:n.text}),a.jsx(W,{children:h&&n.reveal&&a.jsx(m.p,{initial:{opacity:0,x:y?8:-8,filter:"blur(4px)"},animate:{opacity:1,x:0,filter:"blur(0px)"},exit:{opacity:0,x:y?6:-6},transition:{duration:.35},className:["db-scroll-egg-reveal",n.hint&&"db-scroll-egg-reveal--hint",u].join(" "),children:n.reveal})})]})}function a0({beat:n,isNight:t,onDark:e,morphPhase:i,onMorphComplete:l,enterFromMorph:c,letterEnterFromMorph:d}){const h=S(),r=i==="morph-jiang"&&n.id==="river",o=i==="morph-boat"&&n.id==="race",y=i==="morph-zongzi-seal"&&n.id==="festive";if(n.layout==="river-glyph")return a.jsx(x2,{beat:n,onDark:e,isNight:t,isExitingMorph:r,onMorphComplete:l});if(n.layout==="race-diagonal")return a.jsx(O2,{beat:n,onDark:e,isNight:t,enterFromMorph:c==="morph-jiang",isExitingMorph:o,onMorphComplete:l});if(n.layout==="festive-split")return a.jsx(U2,{beat:n,onDark:e,enterFromMorph:c==="morph-boat",isExitingMorph:y,onMorphComplete:l});const u=a.jsxs(l1,{className:["db-scene-layout--center",n.bodyVariant==="letter"?"db-scroll-content--letter":""].filter(Boolean).join(" "),variant:"stack",children:[a.jsx(l2,{text:n.display,mode:n.displayMode,onDark:e}),n.subtitle&&a.jsx(e2,{text:n.subtitle,onDark:e}),n.body&&n.body.length>0&&a.jsx(f1,{lines:n.body,onDark:e,variant:n.bodyVariant??"center"})]});return n.id==="letter"&&d?a.jsx(m.div,{className:"db-scene-layout-letter-enter",initial:h?!1:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.48,delay:.05,ease:[.22,1,.36,1]},children:u}):u}function t0({beat:n,isNight:t,theme:e,introComplete:i=!0,onUnrollComplete:l,morphPhase:c,onMorphComplete:d,enterFromMorph:h,onEggTap:r}){const o=S(),y=R1(n.material,t),u=n.material==="dawn"&&!t,p=G(n.material,t),g=n.layout!=="center",M=n.id==="prologue"&&!i&&!o,f=c==="morph-jiang"||c==="morph-boat"||c==="morph-ink"||c==="morph-zongzi-seal",b=c==="morph-ink"&&n.id==="prologue",j=s.useRef(h==="morph-zongzi-seal"&&!o).current,Z=c==="morph-jiang"&&n.id==="river"?G("race",t):c==="morph-boat"&&n.id==="race"?G("festive",t):c==="morph-zongzi-seal"&&n.id==="festive"?G("paper",t):null;return s.useEffect(()=>{if(!M||!l)return;const A=window.setTimeout(l,Q2*1e3);return()=>window.clearTimeout(A)},[M,l]),a.jsxs("div",{className:["db-scroll-scene",n.material==="paper"?"db-scroll-scene--paper":"",g?"db-scroll-scene--layout":"",M?"db-scroll-scene--unrolling":"",f?"db-scroll-scene--morphing":"",u?"db-scroll-scene--dawn-day":"",n.id==="race"?"db-scroll-scene--race":"",n.id==="festive"?"db-scroll-scene--festive":""].join(" "),style:{background:p},role:"group","aria-roledescription":"slide","aria-label":`${n.display}${n.subtitle?`，${n.subtitle}`:""}`,children:[M&&a.jsx("div",{className:"db-scroll-unroll-edge","aria-hidden":!0}),a.jsx(G2,{beat:n,isNight:t}),a.jsx(J2,{isNight:t,isExiting:b,onComplete:d}),Z&&a.jsx("div",{className:["db-morph-bg-crossfade pointer-events-none absolute inset-0 z-[1]",c==="morph-boat"?"db-morph-bg-crossfade--boat":"",c==="morph-jiang"?"db-morph-bg-crossfade--jiang":"",c==="morph-zongzi-seal"?"db-morph-bg-crossfade--letter":""].filter(Boolean).join(" "),style:{background:Z,animationDuration:c==="morph-boat"||c==="morph-jiang"||c==="morph-zongzi-seal"?void 0:`${K}ms`},"aria-hidden":!0}),a.jsx(i2,{chapter:n.chapter,sceneLabel:n.sceneLabel,onDark:y}),t&&n.material==="dawn"&&a.jsx("div",{className:"pointer-events-none absolute inset-x-0 top-0 h-1/2 opacity-60",style:{background:"radial-gradient(circle at 50% 0%, rgba(252,211,77,0.12) 0%, transparent 65%)"},"aria-hidden":!0}),!t&&n.material==="dawn"&&a.jsx("div",{className:"pointer-events-none absolute inset-x-0 top-0 h-2/3",style:{background:"radial-gradient(circle at 50% 0%, rgba(252,211,77,0.22) 0%, transparent 70%)"},"aria-hidden":!0}),n.material==="river"&&n.layout==="center"&&a.jsx(m.svg,{className:"pointer-events-none absolute inset-x-0 top-[16%] h-28 w-full opacity-25",viewBox:"0 0 400 40",preserveAspectRatio:"none","aria-hidden":!0,initial:o?{}:{x:"-4%"},animate:{x:"4%"},transition:{duration:8,repeat:1/0,repeatType:"reverse",ease:"easeInOut"},children:a.jsx("path",{d:"M0 25 Q100 8, 200 22 T400 18 L400 40 L0 40 Z",fill:t?"#065f46":"#98B5A8"})}),n.material==="paper"&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"db-scroll-paper-texture pointer-events-none absolute inset-[8%] rounded-sm opacity-90","aria-hidden":!0}),a.jsx("div",{className:"db-scroll-paper-margin pointer-events-none absolute inset-y-[10%] left-[10%] w-px bg-stone-400/25","aria-hidden":!0})]}),a.jsx(a0,{beat:n,isNight:t,onDark:y,morphPhase:c,onMorphComplete:d,enterFromMorph:h,letterEnterFromMorph:j}),n.eggs.map((A,x)=>a.jsx(n0,{egg:A,theme:e,onDark:y,isNight:t,index:x,hidden:f,onTap:r},A.id))]})}const l0=m.create(t0);function e0({visible:n,onDark:t=!0}){const e=S();return n?a.jsxs("div",{className:`db-scroll-hint ${t?"text-stone-300":"text-stone-600"}`,"aria-hidden":!0,children:[a.jsx(m.div,{className:"db-scroll-hint-chevron",animate:e?{}:{y:[0,6,0],opacity:[.5,1,.5]},transition:{duration:1.6,repeat:1/0,ease:"easeInOut"}}),a.jsx("span",{children:"向上滑动 · 滚轮展卷"})]}):null}function i0({index:n,visited:t,onSelect:e}){return a.jsx("nav",{className:"db-scroll-seals","aria-label":"长卷分幕",children:Q.map((i,l)=>{const c=l===n,d=t.has(l)&&!c;return a.jsx("button",{type:"button","aria-label":`${i.chapter} · ${i.sceneLabel}`,"aria-current":c?"step":void 0,onClick:()=>e(l),className:["db-scroll-seal",c?"db-scroll-seal--active":"",d?"db-scroll-seal--visited":""].filter(Boolean).join(" "),children:a.jsx("span",{className:"db-scroll-seal-face","aria-hidden":!0,children:i.chapter})},i.id)})})}function c0({pulse:n,direction:t,isNight:e}){if(S()||n===0)return null;const l=e?"linear-gradient(180deg, rgba(2,44,29,0) 0%, rgba(2,44,29,0.92) 45%, rgba(1,6,4,0.98) 100%)":"linear-gradient(180deg, rgba(74,100,88,0) 0%, rgba(42,66,56,0.75) 40%, rgba(2,44,29,0.88) 100%)";return a.jsx(W,{mode:"wait",children:a.jsx(m.div,{className:"db-transition-curtain",style:{background:l,transformOrigin:t>0?"50% 100%":"50% 0%"},initial:{scaleY:0,opacity:.6},animate:{scaleY:[0,1.05,0],opacity:[.5,.92,0]},exit:{opacity:0},transition:{duration:.78,ease:[.76,0,.24,1],times:[0,.42,1]},"aria-hidden":!0},n)})}const s0={enter:n=>({opacity:0,y:n>0?"14%":"-14%",scale:.92,filter:"blur(12px)"}),center:{opacity:1,y:0,scale:1,filter:"blur(0px)"},exit:n=>({opacity:0,y:n>0?"-22%":"22%",scale:1.04,filter:"blur(14px)"})},d0={duration:.72,ease:[.32,.72,0,1]},h0=42,p0=52,k1=820,r0=Math.max(...p2)+80,f0=new Set(["morph-ink","morph-jiang","morph-boat","morph-zongzi-seal"]);function o0(n){return!!n&&f0.has(n)}function y0({isNight:n,theme:t,onFirstAdvance:e,soundEnabled:i=!0}){const[l,c]=s.useState(0),[d,h]=s.useState(1),[r,o]=s.useState(!0),[y,u]=s.useState(0),[p,g]=s.useState(!1),[M,f]=s.useState(null),[b,k]=s.useState(null),[j,Z]=s.useState(null),[A,x]=s.useState(()=>new Set([0])),v=s.useRef(0),R=s.useRef(null),I=s.useRef(null),N=s.useRef(0),D=s.useRef(null),V=s.useRef(null),L=s.useRef(!1),z=s.useRef(0),X=S();s.useEffect(()=>{T.setMuted(!i)},[i]),s.useEffect(()=>{X&&g(!0)},[X]),s.useEffect(()=>{R.current=b,I.current=M},[b,M]),s.useEffect(()=>{x(w=>{const F=new Set(w);for(let q=0;q<=l;q++)F.add(q);return F});const C=z.current;l!==C&&l===4&&l>C&&T.playLetterOpen(),z.current=l},[l]),s.useEffect(()=>{if(!p)return;T.ensureReady();const C=()=>T.ensureReady();return window.addEventListener("pointerdown",C,{once:!0}),()=>window.removeEventListener("pointerdown",C)},[p]);const u1=s.useCallback(C=>{switch(C){case"morph-ink":T.playMorphInk();break;case"morph-jiang":T.playMorphWater();break;case"morph-boat":T.playMorphDrum();break;case"morph-zongzi-seal":T.playMorphSeal();break}},[]),Y=s.useCallback(C=>{var _;const w=Math.max(0,Math.min(Q1-1,C));if(w===l||!p||M||Date.now()<v.current)return;const F=w>l?1:-1;if(h(F),F>0){const B=K1(l,w);if(B){f(B),k(w),u1(B),v.current=Date.now()+r0,N.current=0;return}}Z(null),(F>0&&((_=Q[l])==null?void 0:_.forwardTransition)==="light-curtain"||F<0)&&u(B=>B+1),c(w),v.current=Date.now()+k1,N.current=0,!L.current&&w>0&&(L.current=!0,o(!1),e==null||e())},[l,p,M,e,u1]),_1=s.useCallback(()=>{const C=R.current;if(C==null){f(null);return}const w=I.current;Z(w),c(C),k(null),f(null),v.current=Date.now()+k1,!L.current&&C>0&&(L.current=!0,o(!1),e==null||e()),requestAnimationFrame(()=>Z(null))},[e]),P=s.useCallback(()=>Y(l+1),[Y,l]),$=s.useCallback(()=>Y(l-1),[Y,l]),B1=s.useCallback(()=>{g(!0),T.playUnroll()},[]),E1=s.useCallback(()=>{T.playEggTap()},[]);s.useEffect(()=>{const C=V.current;if(!C)return;const w=F=>{F.preventDefault(),!(!p||M)&&(Date.now()<v.current||(N.current+=F.deltaY,!(Math.abs(N.current)<h0)&&(N.current>0?P():$(),N.current=0)))};return C.addEventListener("wheel",w,{passive:!1}),()=>C.removeEventListener("wheel",w)},[P,$,p,M]),s.useEffect(()=>{const C=V.current;if(!C)return;const w=q=>{var _;D.current=((_=q.touches[0])==null?void 0:_.clientY)??null},F=q=>{var m1;const _=D.current;if(D.current=null,_==null||!p||M)return;const B=(m1=q.changedTouches[0])==null?void 0:m1.clientY;if(B==null)return;const Z1=B-_;Math.abs(Z1)<p0||(Z1<0?P():$())};return C.addEventListener("touchstart",w,{passive:!0}),C.addEventListener("touchend",F,{passive:!0}),()=>{C.removeEventListener("touchstart",w),C.removeEventListener("touchend",F)}},[P,$,p,M]),s.useEffect(()=>{const C=w=>{!p||M||(w.key==="ArrowDown"||w.key==="PageDown"?(w.preventDefault(),P()):(w.key==="ArrowUp"||w.key==="PageUp")&&(w.preventDefault(),$()))};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[P,$,p,M]),s.useEffect(()=>()=>T.stopAmbient(),[]);const e1=Q[l],O1=R1(e1.material,n),M1=o0(M),I1=X?{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.18}}:M1||(j==="morph-jiang"||j==="morph-boat"||j==="morph-ink"||j==="morph-zongzi-seal")?{initial:!1,animate:{opacity:1},exit:{opacity:1},transition:{duration:0}}:{custom:d,variants:s0,initial:"enter",animate:"center",exit:"exit",transition:d0};return a.jsxs("div",{ref:V,className:"relative h-full w-full overflow-hidden",tabIndex:0,"aria-live":"polite",children:[!M1&&a.jsx(c0,{pulse:y,direction:d,isNight:n}),a.jsx(W,{mode:"wait",custom:d,children:a.jsx(l0,{beat:e1,direction:d,isNight:n,theme:t,introComplete:p,onUnrollComplete:B1,morphPhase:M,onMorphComplete:_1,enterFromMorph:j,onEggTap:E1,...I1},e1.id)}),a.jsx(e0,{visible:r&&l===0&&p,onDark:O1}),a.jsx(i0,{index:l,visited:A,onSelect:Y})]})}const u0=""+new URL("ambient-BBYjlx1c.mp3",import.meta.url).href;function M0(){T.setAmbientSrc(u0)}function b0({theme:n,onBackToArchive:t,onBackToCabinet:e}){const i=!!(n!=null&&n.isNight),l=J1(i),[c,d]=s.useState(!0);return s.useEffect(()=>(P1($1("festival-2026-DragonBoat")),M0(),()=>{T.dispose()}),[]),a.jsxs(W1,{id:"dragon-boat-scroll-root",className:"relative h-full min-h-0 overflow-hidden font-serif select-none [&_.viewport-main]:overflow-hidden [&_.viewport-main-inner]:h-full [&_.viewport-main-inner]:min-h-0",children:[a.jsx("div",{className:"pointer-events-none absolute inset-0 z-0",style:{background:i?"#0a2018":"#FCFBEB"},"aria-hidden":!0}),a.jsx("div",{className:"pointer-events-none absolute inset-x-0 top-0 z-[1] h-48 opacity-80",style:{background:l.sunAura},"aria-hidden":!0}),a.jsxs("header",{className:"pointer-events-auto absolute inset-x-0 top-0 z-30 flex items-center justify-between px-3 pb-1 pt-[max(0.5rem,env(safe-area-inset-top))] md:px-4",children:[a.jsx("div",{className:"flex items-center gap-2",children:e&&a.jsxs("button",{type:"button",onClick:e,className:`flex cursor-pointer items-center gap-1.5 rounded-full border px-3 py-1.5 font-serif text-xs font-bold transition-all active:scale-95 ${l.headerBtn}`,children:[a.jsx(V1,{className:"h-3.5 w-3.5 text-emerald-400"}),a.jsx("span",{children:"返回展柜"})]})}),a.jsxs("div",{className:"flex items-center",children:[t&&a.jsxs("button",{type:"button",onClick:t,className:"flex cursor-pointer items-center gap-1.5 rounded-full border border-emerald-700/40 bg-emerald-950/30 px-3 py-1.5 font-serif text-xs text-stone-300 transition-all hover:bg-emerald-900/50 hover:text-emerald-300 active:scale-95",children:[a.jsx(G1,{className:"h-3.5 w-3.5 text-emerald-400"}),a.jsx("span",{children:"节日风物志"})]}),a.jsx("button",{type:"button",onClick:()=>d(h=>!h),className:`ml-2 flex cursor-pointer items-center justify-center rounded-full border p-2 transition-all active:scale-95 ${l.headerBtn}`,"aria-label":c?"关闭端午页音效":"开启端午页音效",title:c?"关闭音效":"开启音效",children:c?a.jsx(X1,{className:"h-3.5 w-3.5 text-emerald-400"}):a.jsx(Y1,{className:"h-3.5 w-3.5 text-stone-400"})})]})]}),a.jsx("main",{className:"relative z-10 h-full min-h-0 w-full flex-1",children:a.jsx(y0,{isNight:i,theme:l,soundEnabled:c})})]})}export{b0 as DragonBoatScroll};
