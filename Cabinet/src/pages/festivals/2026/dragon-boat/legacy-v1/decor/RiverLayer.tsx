import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { DragonBoatSvg } from './DragonBoatSvg';
import type { DragonBoatTheme } from '../theme';

interface RiverLayerProps {
  theme: DragonBoatTheme;
  isNight: boolean;
  onBoatClick: () => void;
}

/** 参考 index.tsx：Rushing Misty River Waves + 三舟（使用当前 DragonBoatSvg） */
export function RiverLayer({ theme, isNight, onBoatClick }: RiverLayerProps) {
  const reduceMotion = useReducedMotion();

  const boatX = (from: string, to: string) =>
    reduceMotion ? { x: '15vw' as const } : { x: [from, to] as string[] };

  const xTransition = (duration: number, delay = 0) =>
    reduceMotion
      ? { duration: 0 }
      : { duration, repeat: Infinity, ease: 'linear' as const, delay };

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 bottom-[15%] z-0 overflow-hidden">
      {/* 天光罩：上半参考暖白/薄荷 */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[58%]"
        style={{ background: theme.scene.skyCap }}
        aria-hidden
      />

      <div className="absolute inset-0 z-0" style={{ background: theme.scene.river }} />

      <div className="absolute top-12 inset-x-0 z-[2] h-16 opacity-30">
        <svg className={`h-full w-full ${theme.mountain}`} viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden>
          <path d="M0 10 Q 25 2, 50 8 T 100 2 L 100 10 L 0 10 Z" fill="currentColor" />
        </svg>
      </div>

      <motion.div
        animate={reduceMotion ? {} : { x: [-100, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
        className="absolute inset-x-0 top-[22%] z-[2] h-48 w-[200%] opacity-25 overflow-visible"
        style={{ backgroundImage: theme.waveGlow }}
      >
        <svg className={`h-full w-full ${theme.waveStroke}`} fill="none" strokeWidth="0.8" aria-hidden>
          <path d="M 0 50 Q 150 20, 300 50 T 600 50 T 900 50 T 1200 50 T 1500 50 L 1500 150 L 0 150 Z" />
        </svg>
      </motion.div>

      <motion.button
        type="button"
        aria-label="江上竞渡，点击查看"
        onClick={onBoatClick}
        animate={{
          ...boatX('-25vw', '115vw'),
          y: reduceMotion ? 0 : [-38, -36, -40, -38],
        }}
        transition={{
          x: xTransition(14.5, 1.5),
          y: reduceMotion ? { duration: 0 } : { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="pointer-events-auto absolute left-0 top-[23%] z-[2] h-12 w-32 scale-[0.6] cursor-pointer opacity-80 md:w-40"
      >
        <DragonBoatSvg index={3} label="远舟" isNight={isNight} />
      </motion.button>

      <motion.button
        type="button"
        aria-label="江上竞渡，点击查看"
        onClick={onBoatClick}
        animate={{
          ...boatX('-28vw', '120vw'),
          y: reduceMotion ? 0 : [-4, 0, -6, -4],
        }}
        transition={{
          x: xTransition(11, 0.2),
          y: reduceMotion ? { duration: 0 } : { duration: 1.3, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="pointer-events-auto absolute left-0 top-[32%] z-[4] h-14 w-36 scale-75 cursor-pointer opacity-90 md:w-[11.5rem]"
      >
        <DragonBoatSvg index={2} label="中流" isNight={isNight} />
      </motion.button>

      <motion.button
        type="button"
        aria-label="江上竞渡，点击查看"
        onClick={onBoatClick}
        animate={{
          ...boatX('-20vw', '115vw'),
          y: reduceMotion ? 0 : [32, 35, 30, 33, 32],
        }}
        transition={{
          x: xTransition(7.5),
          y: reduceMotion ? { duration: 0 } : { duration: 1.1, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="pointer-events-auto absolute left-0 top-[40%] z-[15] h-16 w-44 scale-90 cursor-pointer md:w-56"
      >
        <DragonBoatSvg index={1} label="近舟" isNight={isNight} />
        <motion.div
          animate={reduceMotion ? {} : { scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 0.6, repeat: Infinity }}
          className="absolute bottom-1 right-0 h-3 w-6 rounded-full bg-white/40 blur-[2px]"
          aria-hidden
        />
      </motion.button>

      <motion.div
        animate={reduceMotion ? {} : { x: [0, -100] }}
        transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
        className="absolute inset-x-0 top-[40%] h-48 w-[200%] opacity-25 overflow-visible"
      >
        <svg className={`h-full w-full ${theme.waveStroke}`} fill="none" strokeWidth="1" aria-hidden>
          <path d="M 0 60 Q 200 80, 400 60 T 800 60 T 1200 60 T 1600 60 L 1600 200 L 0 200 Z" />
        </svg>
      </motion.div>
    </div>
  );
}
