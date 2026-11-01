import ceremonyRecords from './ceremony-2026-first.json';
import { ASSET_URLS } from './assetUrls';
import futureContent from './futureBirthdays.json';
import { PAGE_REGISTRY } from '@/app/pageRegistry';
/** Immutable topic archive data. Viewing preferences never create records. */
export const CEREMONY = Object.freeze({id:'ceremony-2026-first',givenYear:2026,birthYear:2002,snapshotVersion:'5.0.0',title:'2026 · 补给你的生日'});
export type BirthdayArchiveGift = Readonly<{id:string;name:string;blessing:string;displayAssetId:string;assetId:string;source:string}>;
export type FutureBirthdayRecord = Readonly<{id:string;givenYear:number;age:number;title:string;blessing:string;gifts:readonly BirthdayArchiveGift[];visible:boolean;snapshotVersion:string;source:string;experience?:Readonly<{view:string;available:boolean}>}>;
export function canOpenBirthdayExperience(view:string){return Object.values(PAGE_REGISTRY).some(p=>p.view===view&&p.lifecycle==='released'&&p.access());}
export function birthdayRecordIsAvailable(record:FutureBirthdayRecord){return !!(record.experience?.available&&canOpenBirthdayExperience(record.experience.view))||record.gifts.every(g=>!!ASSET_URLS[g.assetId]);}
export function createBirthdayArchives(records:readonly FutureBirthdayRecord[]=[]) {
  const future=Object.freeze(records.filter(r=>r.visible&&r.givenYear>2026&&r.age>24&&r.gifts.length>0).map(r=>Object.freeze({...r,gifts:Object.freeze(r.gifts.map(g=>Object.freeze({...g})))})).sort((a,b)=>a.givenYear-b.givenYear));
  return Object.freeze({ceremony:CEREMONY,records:Object.freeze(ceremonyRecords.map(r=>Object.freeze({...r,giftIds:Object.freeze([...r.giftIds]),displayIds:Object.freeze([...r.displayIds]),blessings:Object.freeze({...r.blessings}),assetHashes:Object.freeze({...r.assetHashes})}))),future,
    getFuture:(id:string)=>future.find(r=>r.id===id),latest:future.at(-1)??null});
}
export interface ReadonlyBirthdayArchiveRepository {listRecords():readonly FutureBirthdayRecord[];getRecord(id:string):FutureBirthdayRecord|undefined;}
// The only production content boundary is an immutable snapshot. Isolated
// browser fixtures inject a different repository without changing this data.
export const birthdayArchiveRepository:ReadonlyBirthdayArchiveRepository=Object.freeze({listRecords:()=>futureContent as readonly FutureBirthdayRecord[],getRecord:(id:string)=>(futureContent as readonly FutureBirthdayRecord[]).find(r=>r.id===id)});
export const birthdayArchives=createBirthdayArchives(birthdayArchiveRepository.listRecords());
export type BirthdayArchives=ReturnType<typeof createBirthdayArchives>;
