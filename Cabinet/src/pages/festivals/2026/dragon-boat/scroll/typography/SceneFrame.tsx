import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface SceneFrameProps {
  chapter: string;
  sceneLabel: string;
  onDark: boolean;
}

/** 卷轴角标 + 幕序水印 */
export function SceneFrame({ chapter, sceneLabel, onDark }: SceneFrameProps) {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <motion.div
        className={['db-scroll-frame', onDark ? 'db-scroll-frame--dark' : 'db-scroll-frame--light'].join(' ')}
        initial={reduceMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.05, duration: 0.4 }}
        aria-hidden
      >
        <span className="db-scroll-frame-corner db-scroll-frame-corner--tl" />
        <span className="db-scroll-frame-corner db-scroll-frame-corner--tr" />
        <span className="db-scroll-frame-corner db-scroll-frame-corner--bl" />
        <span className="db-scroll-frame-corner db-scroll-frame-corner--br" />
      </motion.div>

      <motion.div
        className="db-scroll-chapter-mark"
        initial={reduceMotion ? {} : { opacity: 0, x: -8 }}
        animate={{ opacity: 0.22, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        aria-hidden
      >
        {chapter}
      </motion.div>

      <motion.p
        className={['db-scroll-scene-label', onDark ? 'text-stone-400/60' : 'text-stone-500/55'].join(' ')}
        initial={reduceMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.45 }}
      >
        {sceneLabel}
      </motion.p>
    </>
  );
}
