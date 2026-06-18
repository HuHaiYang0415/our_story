import React, { useCallback, useEffect, useRef } from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import type { SceneBeat } from '../../scroll-beats';
import { FESTIVE_LETTER_HANDOFF_MS, ZONGZI_SEAL_MS } from '../morph/morphConstants';
import { MugwortMark } from '../decor/MugwortMark';
import { ZongziFlipTreat } from '../decor/ZongziFlipTreat';
import { SceneLayoutShell } from './SceneLayoutShell';

interface FestiveSplitLayoutProps {
  beat: SceneBeat;
  onDark: boolean;
  enterFromMorph?: boolean;
  isExitingMorph?: boolean;
  onMorphComplete?: () => void;
}

const festiveColItemVariants: Variants = {
  hidden: { opacity: 0, x: 14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

function VerticalText({
  text,
  className,
  hide,
}: {
  text: string;
  className?: string;
  hide?: boolean;
}) {
  if (hide) return null;
  return (
    <motion.p
      className={['db-festive-vertical-text', className].filter(Boolean).join(' ')}
      variants={festiveColItemVariants}
    >
      {text}
    </motion.p>
  );
}

/** 肆幕：竖排古读序（右→左）；肆→伍时整体向左淡出，纸色渗入 */
export function FestiveSplitLayout({
  beat,
  onDark,
  enterFromMorph,
  isExitingMorph = false,
  onMorphComplete,
}: FestiveSplitLayoutProps) {
  const reduceMotion = useReducedMotion();
  const fromBoatRef = useRef(enterFromMorph && !reduceMotion);
  const fromBoat = fromBoatRef.current;
  const morphDoneRef = useRef(false);
  const bridgeLine = beat.body?.[beat.body.length - 1];
  const bodyLines = beat.body && beat.body.length > 1 ? beat.body.slice(0, -1) : beat.body;

  const columnsVariants: Variants = fromBoat
    ? {
        hidden: { opacity: 0, x: 32 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.52,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.04,
            delayChildren: 0.05,
          },
        },
      }
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.07, delayChildren: 0.1 },
        },
      };

  const finishMorph = useCallback(() => {
    if (!isExitingMorph || morphDoneRef.current) return;
    morphDoneRef.current = true;
    onMorphComplete?.();
  }, [isExitingMorph, onMorphComplete]);

  useEffect(() => {
    if (!isExitingMorph) {
      morphDoneRef.current = false;
      return;
    }
    if (reduceMotion) {
      finishMorph();
      return;
    }
    const handoff = window.setTimeout(finishMorph, FESTIVE_LETTER_HANDOFF_MS);
    const fallback = window.setTimeout(finishMorph, ZONGZI_SEAL_MS + 80);
    return () => {
      window.clearTimeout(handoff);
      window.clearTimeout(fallback);
    };
  }, [isExitingMorph, reduceMotion, finishMorph]);

  const titleTone = onDark ? 'db-ink-display--on-dark' : 'db-ink-display--on-light';

  return (
    <SceneLayoutShell className="db-layout-festive-vertical" variant="split">
      <motion.aside
        className="db-layout-festive-side"
        initial={fromBoat && !reduceMotion ? { opacity: 0, x: 16 } : false}
        animate={
          isExitingMorph
            ? { opacity: 0, x: -16 }
            : { opacity: 1, x: 0 }
        }
        transition={{
          duration: isExitingMorph ? 0.36 : fromBoat ? 0.48 : 0.35,
          delay: fromBoat && !isExitingMorph ? 0.04 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <MugwortMark size="lg" className="db-festive-side-mugwort" animate={!fromBoat && !isExitingMorph} />
        {!isExitingMorph && (
          <ZongziFlipTreat
            size="lg"
            className="db-festive-side-zongzi"
            enterAnimate={!fromBoat && !isExitingMorph}
          />
        )}
      </motion.aside>

      <motion.div
        className="db-layout-festive-columns"
        variants={columnsVariants}
        initial={reduceMotion ? false : 'hidden'}
        animate={isExitingMorph ? { opacity: 0, x: -28 } : 'visible'}
        transition={
          isExitingMorph
            ? { duration: 0.42, ease: [0.38, 0.02, 0.18, 1] }
            : undefined
        }
      >
        <motion.div className="db-festive-vcol db-festive-vcol--title" variants={festiveColItemVariants}>
          <h2 className={['db-festive-title-vertical', titleTone].join(' ')} aria-label="节物">
            <span className="db-festive-title-char">节</span>
            <span className="db-festive-title-char">物</span>
          </h2>
        </motion.div>

        {beat.subtitle && (
          <motion.div className="db-festive-vcol" variants={festiveColItemVariants}>
            <VerticalText
              text={beat.subtitle}
              className={onDark ? 'text-stone-200/90' : 'text-stone-700'}
              hide={isExitingMorph}
            />
          </motion.div>
        )}

        {bodyLines?.map((line) => (
          <motion.div key={line} className="db-festive-vcol" variants={festiveColItemVariants}>
            <VerticalText
              text={line}
              className={onDark ? 'text-stone-200/88' : 'text-stone-700/95'}
              hide={isExitingMorph}
            />
          </motion.div>
        ))}

        {bridgeLine && (
          <motion.div className="db-festive-vcol db-festive-vcol--bridge" variants={festiveColItemVariants}>
            <VerticalText
              text={bridgeLine}
              className={onDark ? 'text-amber-100/85' : 'text-emerald-950/85'}
              hide={isExitingMorph}
            />
          </motion.div>
        )}
      </motion.div>
    </SceneLayoutShell>
  );
}
