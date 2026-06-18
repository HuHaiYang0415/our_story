/**
 * 端午页配色
 *
 * 下半部水色/岸色采用「低饱和蓝灰绿」(sage-teal)，避免 Tailwind emerald 的高亮荧光感。
 * 参考真实江面：浅水偏灰绿、深处偏蓝黑绿，岸带带一点褐灰。
 */

/** 参考稿天空色（保持不变） */
export const DRAGON_BOAT_REF = {
  skyTop: '#FCFBEB',
  skyMid: '#E2FBF0',
  waterDeep: '#022C1D',
  shellFoot: '#032316',
} as const;

/**
 * 自然水岸色 — 由浅到深
 * - shallow/mist：水面反光、薄雾（灰绿，非荧光 mint）
 * - mid：远水、天光倒影
 * - deep/horizon：近岸深水、水线
 * - abyss：参考稿 #022C1D
 */
export const DRAGON_BOAT_WATER = {
  shallow: '#D6E6DE',
  mid: '#98B5A8',
  deep: '#4A6458',
  horizon: '#2A4238',
  abyss: DRAGON_BOAT_REF.waterDeep,
} as const;

/** 岸台：偏褐灰绿，像湿石与苔岸，而非纯绿 */
export const DRAGON_BOAT_SHORE = {
  light: 'rgba(58, 72, 64, 0.36)',
  mid: 'rgba(38, 48, 42, 0.48)',
  dark: 'rgba(20, 28, 24, 0.62)',
} as const;

export const DRAGON_BOAT_DAY_ACCENTS = {
  sunAura:
    'radial-gradient(circle at top, rgba(252,211,77,0.32) 0%, rgba(130,160,148,0.07) 58%, transparent 100%)',
  waveStroke: '#8AAEA0',
  waveGlow: 'radial-gradient(ellipse at center, rgba(251,191,36,0.22) 0%, transparent 62%)',
  mountain: '#5A6F64',
  platformBorder: 'rgba(90, 111, 100, 0.22)',
} as const;

/** 全屏布局用渐变（显式色标） */
export function getDragonBoatSceneGradients(isNight: boolean) {
  if (isNight) {
    return {
      shell: 'linear-gradient(180deg, #1a3d32 0%, #0f2a22 52%, #062018 78%, #010604 100%)',
      river:
        'linear-gradient(180deg, rgba(26,61,50,0.92) 0%, rgba(15,42,34,0.94) 42%, rgba(4,55,38,0.96) 72%, rgba(2,44,29,0.98) 100%)',
      skyCap:
        'linear-gradient(180deg, rgba(252,211,77,0.08) 0%, rgba(130,160,148,0.04) 38%, transparent 72%)',
      platform:
        'linear-gradient(180deg, rgba(8,42,28,0.62) 0%, rgba(3,21,14,0.72) 55%, rgba(1,6,4,0.82) 100%)',
    } as const;
  }

  const { skyTop, skyMid, shellFoot } = DRAGON_BOAT_REF;
  const { shallow, mid, deep, horizon, abyss } = DRAGON_BOAT_WATER;

  return {
    /** 壳层：上半晴照不变；下半经灰绿水色过渡到参考深底，无荧光绿 */
    shell: `linear-gradient(180deg, ${skyTop} 0%, ${skyMid} 52%, ${skyMid} 64%, ${shallow} 74%, ${deep} 86%, ${shellFoot} 100%)`,
    /** 江层：cream → 灰绿水 → 深蓝绿，贴近参考「晴照直落深水」 */
    river: `linear-gradient(180deg, ${skyTop} 0%, ${skyMid} 34%, ${shallow} 50%, ${mid} 62%, ${deep} 76%, ${horizon} 88%, ${abyss} 100%)`,
    skyCap: `linear-gradient(180deg, ${skyTop} 0%, ${skyMid} 48%, transparent 78%)`,
    platform: `linear-gradient(180deg, ${DRAGON_BOAT_SHORE.light} 0%, ${DRAGON_BOAT_SHORE.mid} 50%, ${DRAGON_BOAT_SHORE.dark} 100%)`,
  } as const;
}

export function getDragonBoatTheme(isNight: boolean) {
  const scene = getDragonBoatSceneGradients(isNight);

  if (isNight) {
    return {
      scene,
      shell: 'text-stone-100',
      sunAuraStyle:
        'radial-gradient(circle at top, rgba(252,211,77,0.18) 0%, rgba(130,160,148,0.05) 60%, transparent 100%)',
      sunBlob: 'bg-amber-200/10',
      headerBtn:
        'border-emerald-500/40 bg-emerald-950/75 text-stone-100 hover:bg-emerald-900/95 hover:text-emerald-300 shadow-lg',
      title: 'text-stone-100',
      subtitle: 'text-stone-300/90',
      waveStroke: 'stroke-[#7A9A8E]',
      waveGlow: 'radial-gradient(ellipse at center, rgba(251,191,36,0.15) 0%, transparent 60%)',
      mountain: 'text-[#4A6358]/40',
      platformBorder: 'border-t border-[#4A6358]/25',
      table:
        'bg-gradient-to-b from-[#3a1b07] via-[#241104] to-[#040100] border-t-2 border-amber-700/45 shadow-[0_-5px_24px_rgba(0,0,0,0.55)]',
      tableRunner: 'from-[#5c3c26]/55 to-[#402716]/55 border-amber-900/35',
      itemLabel: 'bg-emerald-950/75 border-emerald-600/30 text-emerald-200',
      vistaBadge: 'bg-black/45 border-emerald-700/30 text-stone-200',
      panel: 'bg-[#FAF6E9] text-stone-900',
      panelMuted: 'text-stone-700',
      panelAccent: 'text-emerald-800',
      panelBorderTop: 'border-t-8 border-emerald-700',
      footBorder: 'border-emerald-800/25',
      footPrimary: 'text-stone-100',
      footSecondary: 'text-stone-400/90',
      footAccent: 'text-red-400',
      modalOverlay: 'bg-black/55',
      modalPaper: 'bg-[#FAF6E9] border-amber-800/20 text-stone-900',
      modalInk: 'text-stone-800',
      modalMuted: 'text-stone-500',
    } as const;
  }

  return {
    scene,
    shell: 'text-stone-100',
    sunAuraStyle: DRAGON_BOAT_DAY_ACCENTS.sunAura,
    sunBlob: 'bg-amber-100/15',
    headerBtn:
      'border-emerald-500/60 bg-emerald-950/75 text-stone-100 hover:bg-emerald-900/95 hover:text-emerald-300 shadow-lg',
    title: 'text-stone-800',
    subtitle: 'text-stone-600',
    waveStroke: 'stroke-[#8AAEA0]',
    waveGlow: DRAGON_BOAT_DAY_ACCENTS.waveGlow,
    mountain: 'text-[#5A6F64]/35',
    platformBorder: 'border-t border-[#5A6F64]/22',
    table:
      'bg-gradient-to-b from-[#4a2510] via-[#2a1508] to-[#120801] border-t-2 border-amber-700/45 shadow-[0_-4px_18px_rgba(0,0,0,0.55)]',
    tableRunner: 'from-[#5c3c26]/60 to-[#402716]/60 border-amber-900/40',
    itemLabel: 'bg-amber-950/65 border-amber-600/30 text-amber-200',
    vistaBadge: 'bg-black/45 border-stone-600/30 text-stone-200',
    panel: 'bg-[#FAF6E9] text-stone-900',
    panelMuted: 'text-stone-700',
    panelAccent: 'text-emerald-800',
    panelBorderTop: 'border-t-8 border-emerald-600',
    footBorder: 'border-emerald-800/20',
    footPrimary: 'text-stone-100',
    footSecondary: 'text-stone-400/95',
    footAccent: 'text-red-400',
    modalOverlay: 'bg-black/40',
    modalPaper: 'bg-[#FFFCF7] border-amber-200/80 text-stone-900',
    modalInk: 'text-stone-800',
    modalMuted: 'text-stone-500',
  } as const;
}

export type DragonBoatTheme = ReturnType<typeof getDragonBoatTheme>;
