import catalog from './catalog.json';
import type { BirthdayObject } from './types';

/** Topic-owned, read-only content facade. UI never imports the catalog directly
 * or depends on an API/transport schema. Authority is the root v5 catalogs; all 24 belong to the 2026 ceremony. */
export type BirthdayScene = Readonly<(typeof catalog)[number]>;
export const FIRST_AGE = 1;
export const LAST_AGE = 24;
const scenes = Object.freeze(catalog.map(scene => Object.freeze(scene)));
export const birthdayRepository = Object.freeze({
  listScenes: (): readonly BirthdayScene[] => scenes,
  getScene: (age: number): BirthdayScene => {
    const value = scenes[age - 1];
    if (!value || !Number.isInteger(age)) throw new RangeError(`Invalid birthday age ${age}`);
    return value;
  },
  getObject: (id: BirthdayObject): { scene: BirthdayScene; name: string; blessing: string } => {
    const age = Number(id.slice(5));
    const scene = scenes[age - 1];
    if (!scene || id !== scene.cakeId && id !== scene.giftId) throw new RangeError(`Unknown object ${id}`);
    return { scene, name: id.startsWith('CAKE-') ? scene.cakeName : scene.giftName,
      blessing: id.startsWith('CAKE-') ? scene.cakeBlessing : scene.giftBlessing };
  },
});
export const visibleObjects = (age: number): BirthdayObject[] => {
  const s = birthdayRepository.getScene(age);
  return [s.cakeId, s.giftId] as BirthdayObject[];
};
const digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
export const ageLabel = (age: number) => `${age === 2 ? '两' : age < 10 ? digits[age] : age === 10 ? '十' : age < 20 ? '十' + digits[age % 10] : '二十' + (age % 10 ? digits[age % 10] : '')}岁`;
