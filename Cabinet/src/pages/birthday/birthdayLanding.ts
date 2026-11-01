const LEGACY='our-story:birthday:ceremony-2026-first:v1';
export const PRESENTATION_PREFERENCE='our-story:birthday:ceremony-2026-first:v2';
export type BirthdayLanding='table'|'collection';
export type BirthdayLandingPlan=Readonly<{mode:BirthdayLanding;initialAge:number;reason:'first'|'resume'|'revisit'|'legacy'|'future'}>;
const validAge=(age:unknown):age is number=>typeof age==='number'&&Number.isInteger(age)&&age>=1&&age<=24;
/** Presentation only; reaching 24 does not claim to have completed every year. */
export function birthdayLanding(hasFuture=false):BirthdayLandingPlan{
  if(hasFuture)return {mode:'collection',initialAge:24,reason:'future'};
  try{
    const raw=window.localStorage.getItem(PRESENTATION_PREFERENCE),stored=JSON.parse(raw??'null');
    if(stored?.version===2&&validAge(stored.lastPresentedAge))return {mode:'table',initialAge:stored.hasReached24===true?24:stored.lastPresentedAge,reason:stored.hasReached24===true?'revisit':'resume'};
    if(raw!==null)return {mode:'table',initialAge:1,reason:'first'};
    const legacy=JSON.parse(window.localStorage.getItem(LEGACY)??'null');
    if(legacy?.hasOpenedFirstCeremony===true)return {mode:'table',initialAge:24,reason:'legacy'};
  }catch{/* Missing storage safely starts at the first birthday. */}
  return {mode:'table',initialAge:1,reason:'first'};
}
export function rememberPresentedAge(age:number){
  if(!validAge(age))return;
  try{let previous:{hasReached24?:boolean}|null=null;try{previous=JSON.parse(window.localStorage.getItem(PRESENTATION_PREFERENCE)??'null');}catch{/* Replace damaged preference. */}
    window.localStorage.setItem(PRESENTATION_PREFERENCE,JSON.stringify({version:2,lastPresentedAge:age,hasReached24:previous?.hasReached24===true||age===24}));
  }catch{/* Browsing works without storage. */}
}
