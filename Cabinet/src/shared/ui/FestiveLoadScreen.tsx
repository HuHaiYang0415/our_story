import React from 'react';
import { motion } from 'motion/react';

export type FestiveLoadTone = 'emerald' | 'amber' | 'rose';

const TONE_STYLES: Record<
  FestiveLoadTone,
  {
    shellNight: string;
    shellDay: string;
    glowNight: string;
    glowDay: string;
    titleNight: string;
    titleDay: string;
    trackNight: string;
    trackDay: string;
    barNight: string;
    barDay: string;
    btnNight: string;
    btnDay: string;
  }
> = {
  emerald: {
    shellNight: 'bg-[#0a2018] text-stone-200',
    shellDay: 'bg-[#FCFBEB] text-stone-700',
    glowNight: 'radial-gradient(circle at 50% 0%, rgba(52,211,153,0.12) 0%, transparent 70%)',
    glowDay: 'radial-gradient(circle at 50% 0%, rgba(167,243,208,0.35) 0%, transparent 70%)',
    titleNight: 'text-emerald-100/90',
    titleDay: 'text-emerald-900/85',
    trackNight: 'bg-emerald-950/80',
    trackDay: 'bg-emerald-100/90',
    barNight: 'bg-emerald-400/85',
    barDay: 'bg-emerald-600/80',
    btnNight: 'border-emerald-700/50 text-emerald-200 hover:bg-emerald-950/60',
    btnDay: 'border-emerald-600/35 text-emerald-800 hover:bg-emerald-50',
  },
  amber: {
    shellNight: 'bg-[#1a1408] text-stone-200',
    shellDay: 'bg-[#FFF9F0] text-stone-700',
    glowNight: 'radial-gradient(circle at 50% 0%, rgba(251,191,36,0.14) 0%, transparent 70%)',
    glowDay: 'radial-gradient(circle at 50% 0%, rgba(253,224,171,0.55) 0%, transparent 70%)',
    titleNight: 'text-amber-100/90',
    titleDay: 'text-amber-900/85',
    trackNight: 'bg-amber-950/80',
    trackDay: 'bg-amber-100/90',
    barNight: 'bg-amber-400/85',
    barDay: 'bg-amber-500/80',
    btnNight: 'border-amber-700/50 text-amber-200 hover:bg-amber-950/60',
    btnDay: 'border-amber-600/35 text-amber-900 hover:bg-amber-50',
  },
  rose: {
    shellNight: 'bg-[#1a1218] text-stone-200',
    shellDay: 'bg-[#FFF7F8] text-stone-700',
    glowNight: 'radial-gradient(circle at 50% 0%, rgba(244,114,182,0.14) 0%, transparent 70%)',
    glowDay: 'radial-gradient(circle at 50% 0%, rgba(251,207,232,0.55) 0%, transparent 70%)',
    titleNight: 'text-rose-100/90',
    titleDay: 'text-rose-900/85',
    trackNight: 'bg-rose-950/80',
    trackDay: 'bg-rose-100/90',
    barNight: 'bg-rose-400/85',
    barDay: 'bg-rose-500/75',
    btnNight: 'border-rose-700/50 text-rose-200 hover:bg-rose-950/60',
    btnDay: 'border-rose-600/35 text-rose-900 hover:bg-rose-50',
  },
};

export interface FestiveLoadScreenProps {
  title: string;
  label: string;
  progress: number;
  failed?: boolean;
  isNight?: boolean;
  tone?: FestiveLoadTone;
  backLabel?: string;
  onBack?: () => void;
  onRetry?: () => void;
}

/** 节日 / 专题页懒加载进度屏 */
export function FestiveLoadScreen({
  title,
  label,
  progress,
  failed = false,
  isNight = false,
  tone = 'emerald',
  backLabel = '返回',
  onBack,
  onRetry,
}: FestiveLoadScreenProps) {
  const styles = TONE_STYLES[tone];
  const pct = Math.round(progress * 100);

  return (
    <div
      className={[
        'relative flex h-full min-h-0 w-full flex-col items-center justify-center overflow-hidden font-serif select-none',
        isNight ? styles.shellNight : styles.shellDay,
      ].join(' ')}
      role="status"
      aria-live="polite"
      aria-busy={!failed}
      aria-label={failed ? `${title}加载失败` : `${title}加载中 ${pct}%`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-70"
        style={{ background: isNight ? styles.glowNight : styles.glowDay }}
        aria-hidden
      />

      <motion.div
        className="relative z-10 flex w-full max-w-xs flex-col items-center gap-5 px-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <p
          className={[
            'text-lg tracking-[0.35em]',
            isNight ? styles.titleNight : styles.titleDay,
          ].join(' ')}
        >
          {title}
        </p>

        <p className={`text-xs tracking-widest ${isNight ? 'text-stone-400' : 'text-stone-500'}`}>
          {failed ? '加载未竟，请稍后再试' : label}
        </p>

        {!failed && (
          <div className="w-full">
            <div
              className={[
                'h-1.5 w-full overflow-hidden rounded-full',
                isNight ? styles.trackNight : styles.trackDay,
              ].join(' ')}
            >
              <motion.div
                className={[
                  'h-full rounded-full',
                  isNight ? styles.barNight : styles.barDay,
                ].join(' ')}
                initial={{ width: '0%' }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
            </div>
            <p
              className={[
                'mt-2 text-center font-mono text-[10px] tracking-wider',
                isNight ? 'text-stone-500' : 'text-stone-400',
              ].join(' ')}
            >
              {pct}%
            </p>
          </div>
        )}

        {failed && (
          <div className="flex flex-col items-center gap-2">
            {onRetry && (
              <button
                type="button"
                onClick={onRetry}
                className={[
                  'rounded-full border px-4 py-1.5 text-xs tracking-wide transition active:scale-95',
                  isNight ? styles.btnNight : styles.btnDay,
                ].join(' ')}
              >
                重新加载
              </button>
            )}
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className={[
                  'rounded-full border px-4 py-1.5 text-xs tracking-wide transition active:scale-95',
                  isNight ? 'border-stone-600/40 text-stone-400 hover:bg-stone-900/40' : 'border-stone-300 text-stone-500 hover:bg-stone-50',
                ].join(' ')}
              >
                {backLabel}
              </button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
