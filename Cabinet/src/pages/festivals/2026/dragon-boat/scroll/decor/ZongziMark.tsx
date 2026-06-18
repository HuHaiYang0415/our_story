import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface ZongziMarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
  tone?: 'zong' | 'cone';
}

const SIZE_CLASS = {
  sm: 'db-zongzi-mark--sm',
  md: 'db-zongzi-mark--md',
  lg: 'db-zongzi-mark--lg',
};

/** 肆幕节物视觉：三角粽 SVG，可替代「粽」字或嵌入标题 */
export function ZongziMark({
  className,
  size = 'md',
  animate = true,
  tone = 'zong',
}: ZongziMarkProps) {
  const reduceMotion = useReducedMotion();
  const isCone = tone === 'cone';

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 96"
      role="img"
      aria-label={isCone ? '甜筒' : '粽'}
      className="db-zongzi-mark-svg"
    >
      <path
        d="M40 8 L12 72 C12 72 20 88 40 88 C60 88 68 72 68 72 Z"
        fill={isCone ? '#D4A574' : '#059669'}
      />
      <path
        d="M40 8 L68 72 C68 72 60 88 40 88 C20 88 12 72 12 72 Z"
        fill={isCone ? '#C49563' : '#10B981'}
      />
      <path
        d="M22 58 Q40 48 58 58 L40 88 Z"
        fill={isCone ? '#B8956A' : '#047857'}
      />
      {!isCone && (
        <>
          <path d="M18 42 Q40 52 62 42" fill="none" stroke="#EAB308" strokeWidth="2" />
          <path d="M14 54 Q40 64 66 54" fill="none" stroke="#CA8A04" strokeWidth="2" />
        </>
      )}
      {isCone && (
        <>
          <path d="M28 58 L52 58" stroke="#A88452" strokeWidth="0.9" opacity="0.45" />
          <path d="M32 72 L48 72" stroke="#A88452" strokeWidth="0.9" opacity="0.45" />
          {/* 甜筒球：贴在粽形宽底，随锥体旋转 180° 后落到倒三角宽口上 */}
          <ellipse cx="40" cy="84" rx="21" ry="17" fill="#F9A8D4" />
          <ellipse cx="40" cy="81" rx="17" ry="12" fill="#FBCFE8" opacity="0.9" />
        </>
      )}
    </svg>
  );

  const cls = ['db-zongzi-mark', SIZE_CLASS[size], className].filter(Boolean).join(' ');

  if (!animate || reduceMotion) {
    return <span className={cls}>{svg}</span>;
  }

  return (
    <motion.span
      className={cls}
      initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.35, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {svg}
    </motion.span>
  );
}
