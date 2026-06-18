import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

interface TransitionCurtainProps {
  pulse: number;
  direction: 1 | -1;
  isNight: boolean;
}

/** 切幕时墨染掠屏 */
export function TransitionCurtain({ pulse, direction, isNight }: TransitionCurtainProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion || pulse === 0) return null;

  const ink = isNight
    ? 'linear-gradient(180deg, rgba(2,44,29,0) 0%, rgba(2,44,29,0.92) 45%, rgba(1,6,4,0.98) 100%)'
    : 'linear-gradient(180deg, rgba(74,100,88,0) 0%, rgba(42,66,56,0.75) 40%, rgba(2,44,29,0.88) 100%)';

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pulse}
        className="db-transition-curtain"
        style={{
          background: ink,
          transformOrigin: direction > 0 ? '50% 100%' : '50% 0%',
        }}
        initial={{ scaleY: 0, opacity: 0.6 }}
        animate={{ scaleY: [0, 1.05, 0], opacity: [0.5, 0.92, 0] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.78, ease: [0.76, 0, 0.24, 1], times: [0, 0.42, 1] }}
        aria-hidden
      />
    </AnimatePresence>
  );
}

export const sceneMotionVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? '14%' : '-14%',
    scale: 0.92,
    filter: 'blur(12px)',
  }),
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? '-22%' : '22%',
    scale: 1.04,
    filter: 'blur(14px)',
  }),
};

export const sceneMotionTransition = {
  duration: 0.72,
  ease: [0.32, 0.72, 0, 1] as const,
};
