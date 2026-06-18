import React, { useCallback, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { INK_MORPH_MS } from '../morph/morphConstants';
import { getScrollSceneBackground } from '../../scroll-theme';

interface PrologueInkExitProps {
  isNight: boolean;
  isExiting: boolean;
  onComplete?: () => void;
}

/** 壹→贰：墨迹从「蒲节记胜」晕染扩散为江色 */
export function PrologueInkExit({ isNight, isExiting, onComplete }: PrologueInkExitProps) {
  const reduceMotion = useReducedMotion();
  const doneRef = useRef(false);

  const finish = useCallback(() => {
    if (!isExiting || doneRef.current) return;
    doneRef.current = true;
    onComplete?.();
  }, [isExiting, onComplete]);

  useEffect(() => {
    if (!isExiting) {
      doneRef.current = false;
      return;
    }
    if (reduceMotion) {
      finish();
      return;
    }
    const t = window.setTimeout(finish, INK_MORPH_MS + 120);
    return () => window.clearTimeout(t);
  }, [isExiting, reduceMotion, finish]);

  if (!isExiting) return null;

  const riverBg = getScrollSceneBackground('river', isNight);

  return (
    <>
      <motion.div
        className="db-morph-ink-bloom pointer-events-none absolute inset-0 z-[12]"
        style={{
          background: isNight
            ? 'radial-gradient(ellipse 45% 38% at 50% 42%, rgba(2,44,29,0.95) 0%, transparent 72%)'
            : 'radial-gradient(ellipse 45% 38% at 50% 42%, rgba(28,25,23,0.88) 0%, transparent 72%)',
        }}
        initial={{ opacity: 0, scale: 0.15 }}
        animate={{ opacity: 1, scale: 2.8 }}
        transition={{ duration: INK_MORPH_MS / 1000, ease: [0.32, 0.72, 0, 1] }}
        onAnimationComplete={finish}
        aria-hidden
      />
      <motion.div
        className="db-morph-ink-river pointer-events-none absolute inset-0 z-[11]"
        style={{ background: riverBg }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: INK_MORPH_MS / 1000, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
      />
    </>
  );
}
