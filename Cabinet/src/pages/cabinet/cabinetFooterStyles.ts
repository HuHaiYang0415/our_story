import type { TimeTheme } from '@/shared/types';

/** 与仓库原版 getFooterStyle 透明度一致 */
export function getCabinetFooterStyle(theme: TimeTheme) {
  switch (theme.season) {
    case 'spring':
      return theme.isNight
        ? {
            textClass:
              'text-[#fbcfe8] drop-shadow-[0_1px_4px_rgba(244,63,94,0.4)] font-bold tracking-[0.22em]',
            bgClass:
              'bg-[#1f121a]/65 border border-pink-500/15 backdrop-blur-[3px] ios-safe-no-blur px-3.5 py-1 rounded-full shadow-lg',
          }
        : {
            textClass:
              'text-[#064e3b] drop-shadow-[0_1.5px_1px_rgba(255,255,255,0.75)] font-extrabold tracking-[0.22em]',
            bgClass:
              'bg-[#ecfdf5]/55 border border-emerald-500/25 backdrop-blur-[3px] ios-safe-no-blur px-3.5 py-1 rounded-full shadow-md',
          };
    case 'summer':
      return theme.isNight
        ? {
            textClass:
              'text-amber-200 drop-shadow-[0_0_8px_#d97706] font-extrabold tracking-[0.25em] animate-pulse',
            bgClass:
              'bg-[#061822]/70 border border-amber-500/20 backdrop-blur-[3px] ios-safe-no-blur px-4 py-1.2 rounded-full shadow-xl',
          }
        : {
            textClass:
              'text-[#0369a1] drop-shadow-[0_1.5px_1px_rgba(255,255,255,0.7)] font-extrabold tracking-[0.22em]',
            bgClass:
              'bg-[#f0f9ff]/55 border border-sky-400/25 backdrop-blur-[3px] ios-safe-no-blur px-3.5 py-1 rounded-full shadow-md',
          };
    case 'autumn':
      return theme.isNight
        ? {
            textClass:
              'text-amber-100 drop-shadow-[0_1px_5px_rgba(249,115,22,0.45)] font-bold tracking-[0.22em]',
            bgClass:
              'bg-[#27120a]/65 border border-orange-500/20 backdrop-blur-[3px] ios-safe-no-blur px-3.5 py-1 rounded-full shadow-lg',
          }
        : {
            textClass:
              'text-[#7c2d12] drop-shadow-[0_1.5px_1px_rgba(255,255,255,0.75)] font-extrabold tracking-[0.22em]',
            bgClass:
              'bg-[#fffbeb]/55 border border-amber-500/25 backdrop-blur-[3px] ios-safe-no-blur px-3.5 py-1 rounded-full shadow-md',
          };
    case 'winter':
    default:
      return theme.isNight
        ? {
            textClass:
              'text-orange-200 drop-shadow-[0_1px_4px_rgba(249,115,22,0.35)] font-bold tracking-[0.22em]',
            bgClass:
              'bg-[#0f172a]/60 border border-orange-500/15 backdrop-blur-[3px] ios-safe-no-blur px-3.5 py-1 rounded-full shadow-lg',
          }
        : {
            textClass:
              'text-slate-700 drop-shadow-[0_1.5px_1px_rgba(255,255,255,0.85)] font-extrabold tracking-[0.22em]',
            bgClass:
              'bg-white/60 border border-slate-300/35 backdrop-blur-[3px] ios-safe-no-blur px-3.5 py-1 rounded-full shadow-xs',
          };
  }
}
