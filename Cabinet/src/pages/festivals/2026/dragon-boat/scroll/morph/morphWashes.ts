/** 与 scroll-theme 水色一致、边缘透明的柔化水纹渐变（避免纯色块） */
export function riverSoftWash(isNight: boolean): string {
  if (isNight) {
    return 'linear-gradient(180deg, transparent 0%, rgba(15,42,34,0.08) 18%, rgba(6,78,59,0.22) 48%, rgba(2,44,29,0.38) 78%, rgba(2,44,29,0.48) 100%)';
  }
  return 'linear-gradient(180deg, transparent 0%, rgba(214,230,222,0.22) 22%, rgba(152,181,168,0.32) 52%, rgba(74,100,88,0.28) 82%, rgba(74,100,88,0.36) 100%)';
}

/** 竞渡→节物：暖褐光晕（径向，非整屏矩块） */
export function festiveWarmGlow(isNight: boolean): string {
  if (isNight) {
    return 'radial-gradient(ellipse 70% 65% at 50% 55%, rgba(180,120,70,0.42) 0%, rgba(90,55,30,0.18) 42%, transparent 72%)';
  }
  return 'radial-gradient(ellipse 70% 65% at 50% 55%, rgba(210,165,105,0.38) 0%, rgba(160,110,65,0.16) 40%, transparent 72%)';
}

/** 舟后尾迹：横向渐隐，无硬边 */
export function boatWakeGradient(isNight: boolean): string {
  if (isNight) {
    return 'linear-gradient(90deg, transparent 0%, rgba(120,80,50,0.12) 35%, rgba(90,55,30,0.06) 65%, transparent 100%)';
  }
  return 'linear-gradient(90deg, transparent 0%, rgba(200,155,95,0.14) 30%, rgba(170,120,70,0.07) 60%, transparent 100%)';
}
