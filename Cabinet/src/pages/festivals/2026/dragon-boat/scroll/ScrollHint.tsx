import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface ScrollHintProps {
  visible: boolean;
  onDark?: boolean;
}

export function ScrollHint({ visible, onDark = true }: ScrollHintProps) {
  const reduceMotion = useReducedMotion();

  if (!visible) return null;

  return (
    <div
      className={`db-scroll-hint ${onDark ? 'text-emerald-100/85' : 'text-stone-600'}`}
      aria-hidden
    >
      <motion.div
        className="db-scroll-hint-chevron"
        animate={reduceMotion ? {} : { y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <span>向上滑动 · 滚轮展卷</span>
    </div>
  );
}
