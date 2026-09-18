/** 端午长卷 v2 — 分幕材质与配色 */

export const SCROLL_REF = {
  skyTop: '#FCFBEB',
  skyMid: '#E2FBF0',
  waterDeep: '#022C1D',
  ink: '#1C1917',
  seal: '#B91C1C',
  paper: '#FFFDF7',
} as const;

export const SCROLL_WATER = {
  shallow: '#D6E6DE',
  mid: '#98B5A8',
  deep: '#4A6458',
  horizon: '#2A4238',
} as const;

export type SceneMaterial = 'dawn' | 'river' | 'race' | 'festive' | 'paper' | 'finale';

export function getScrollSceneBackground(material: SceneMaterial, isNight: boolean): string {
  if (isNight) {
    const night: Record<SceneMaterial, string> = {
      dawn: 'linear-gradient(180deg, #1a3d32 0%, #0f2a22 55%, #062018 100%)',
      river: 'linear-gradient(180deg, #0f2a22 0%, #0a2018 45%, #022C1D 100%)',
      race: 'linear-gradient(180deg, #0a2018 0%, #064e3b 40%, #022C1D 100%)',
      festive: 'linear-gradient(180deg, #1a1208 0%, #241104 50%, #0a2018 100%)',
      paper: 'linear-gradient(180deg, #1a1814 0%, #2a241c 100%)',
      finale: 'linear-gradient(180deg, #0a2018 0%, #03150e 60%, #010604 100%)',
    };
    return night[material];
  }

  const day: Record<SceneMaterial, string> = {
    dawn: `linear-gradient(180deg, ${SCROLL_REF.skyTop} 0%, ${SCROLL_REF.skyMid} 70%, ${SCROLL_WATER.shallow} 100%)`,
    river: `linear-gradient(180deg, ${SCROLL_REF.skyMid} 0%, ${SCROLL_WATER.shallow} 40%, ${SCROLL_WATER.mid} 70%, ${SCROLL_WATER.deep} 100%)`,
    race: `linear-gradient(180deg, ${SCROLL_WATER.shallow} 0%, ${SCROLL_WATER.mid} 35%, ${SCROLL_WATER.deep} 75%, ${SCROLL_WATER.horizon} 100%)`,
    festive: 'linear-gradient(180deg, #3a2510 0%, #241104 45%, #1a3328 100%)',
    paper: `linear-gradient(180deg, ${SCROLL_REF.paper} 0%, #F5F0E6 100%)`,
    finale: `linear-gradient(180deg, ${SCROLL_WATER.horizon} 0%, ${SCROLL_REF.waterDeep} 55%, #03150e 100%)`,
  };
  return day[material];
}

export function getScrollTheme(isNight: boolean) {
  return {
    isNight,
    sunAura: isNight
      ? 'radial-gradient(circle at 50% 0%, rgba(252,211,77,0.15) 0%, transparent 55%)'
      : 'radial-gradient(circle at 50% 0%, rgba(252,211,77,0.28) 0%, rgba(130,160,148,0.06) 45%, transparent 70%)',
    headerBtn: isNight
      ? 'border-emerald-500/40 bg-emerald-950/80 text-emerald-50 hover:bg-emerald-900'
      : 'border-emerald-600/50 bg-emerald-950/75 text-emerald-50 hover:bg-emerald-900',
    titleOnDark: 'text-stone-100',
    titleOnLight: 'text-stone-900',
    subtitleOnDark: 'text-emerald-100/85',
    subtitleOnLight: 'text-stone-600',
    egg: isNight ? 'text-emerald-400/70' : 'text-stone-500/80',
    eggHover: isNight ? 'hover:text-amber-200' : 'hover:text-emerald-800',
    progressActive: isNight ? 'bg-amber-300' : 'bg-emerald-700',
    progressIdle: isNight ? 'bg-stone-600/50' : 'bg-stone-400/40',
  } as const;
}

export type ScrollTheme = ReturnType<typeof getScrollTheme>;

/** 幕内正文是否用浅色字（引幕昼间为浅底深字） */
export function isSceneOnDark(material: SceneMaterial, isNight: boolean): boolean {
  if (material === 'paper') return false;
  if (material === 'dawn' && !isNight) return false;
  return true;
}
