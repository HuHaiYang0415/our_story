import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ICECREAM_SVG_RAW, ZONGZI_SVG_RAW } from './festive-svg_assets';
import { TreatSvg } from './TreatSvg';

interface ZongziFlipTreatProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  /** 入场动画（仅首次） */
  enterAnimate?: boolean;
}

/** 肆幕：点击粽子与甜筒自然叠化切换 */
export function ZongziFlipTreat({
  className,
  size = 'lg',
  enterAnimate = true,
}: ZongziFlipTreatProps) {
  const reduceMotion = useReducedMotion();
  const [isIce, setIsIce] = useState(false);
  const [entered, setEntered] = useState(!enterAnimate || reduceMotion);

  const toggle = () => {
    setIsIce((v) => !v);
    if (!entered) setEntered(true);
  };

  const motionProps = reduceMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.12 } }
    : {
        initial: { opacity: 0, scale: 0.92, y: 8, filter: 'blur(5px)' },
        animate: { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' },
        exit: { opacity: 0, scale: 0.94, y: -6, filter: 'blur(4px)' },
        transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] as const },
      };

  const enterOnly =
    !entered && enterAnimate && !reduceMotion
      ? { initial: { opacity: 0, scale: 0.6, y: 10 }, animate: { opacity: 1, scale: 1, y: 0 } }
      : {};

  return (
    <button
      type="button"
      className={['db-zongzi-flip-treat', className].filter(Boolean).join(' ')}
      onClick={(e) => {
        e.stopPropagation();
        toggle();
      }}
      aria-label={isIce ? '甜筒变回粽子' : '粽子变甜筒'}
      aria-pressed={isIce}
    >
      <span className="db-zongzi-flip-treat-stage">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isIce ? 'ice' : 'zong'}
            className="db-zongzi-flip-treat-inner"
            {...motionProps}
            {...(!isIce && !entered ? enterOnly : {})}
            onAnimationComplete={() => {
              if (!entered) setEntered(true);
            }}
          >
            <TreatSvg
              raw={isIce ? ICECREAM_SVG_RAW : ZONGZI_SVG_RAW}
              size={size}
              label={isIce ? '甜筒' : '粽'}
            />
          </motion.span>
        </AnimatePresence>
      </span>
    </button>
  );
}
