import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface MugwortMarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

const SIZE_CLASS = {
  sm: 'db-mugwort-mark--sm',
  md: 'db-mugwort-mark--md',
  lg: 'db-mugwort-mark--lg',
};

/** 肆幕节物：悬艾蒲（门悬艾蒲） */
export function MugwortMark({ className, size = 'md', animate = true }: MugwortMarkProps) {
  const reduceMotion = useReducedMotion();

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 70"
      fill="none"
      role="img"
      aria-label="艾"
      className="db-mugwort-mark-svg"
    >
      <path d="M 15 20 C 5 25, 2 45, 12 55 C 10 40, 12 30, 15 20 Z" fill="#047857" opacity="0.95" />
      <path d="M 15 20 C 25 25, 28 45, 18 55 C 20 40, 18 30, 15 20 Z" fill="#065F46" opacity="0.9" />
      <path d="M 15 5 L 8 45 C 8 45, 15 50, 15 65 C 15 50, 22 45, 22 45 L 15 5 Z" fill="#059669" />
      <rect x="11" y="32" width="8" height="3" rx="1.5" fill="#EF4444" />
      <path d="M 14 35 Q 11 50, 12 60 M 16 35 Q 19 50, 18 60" stroke="#EF4444" strokeWidth="1" />
    </svg>
  );

  const cls = ['db-mugwort-mark', SIZE_CLASS[size], className].filter(Boolean).join(' ');

  if (!animate || reduceMotion) {
    return <span className={cls}>{svg}</span>;
  }

  return (
    <motion.span
      className={cls}
      initial={{ opacity: 0, y: -8, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.28, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {svg}
    </motion.span>
  );
}
