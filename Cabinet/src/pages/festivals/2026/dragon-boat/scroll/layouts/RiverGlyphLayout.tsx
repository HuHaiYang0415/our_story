import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { SceneBeat } from '../../scroll-beats';
import { riverSoftWash } from '../morph/morphWashes';
import {
  JIANG_HANDOFF_MS,
  JIANG_MORPH_MS,
  JIANG_FLOAT_EXIT_EASE,
  JIANG_FLOAT_EXIT_S,
} from '../morph/morphConstants';
import { RiverRipple, type WaterTapPoint } from '../interaction/RiverRipple';
import { DriftBottle, type DriftBottlePhase } from '../interaction/DriftBottle';
import { DRIFT_BOTTLE_TAP_THRESHOLD } from '../interaction/driftBottleConfig';
import { StaggerLines } from '../typography/InkSubtitle';
import { dragonBoatSound } from '../audio/DragonBoatSound';
import { SceneLayoutShell } from './SceneLayoutShell';

interface RiverGlyphLayoutProps {
  beat: SceneBeat;
  onDark: boolean;
  isNight: boolean;
  isExitingMorph?: boolean;
  onMorphComplete?: () => void;
}

/** 贰幕：「江」大字 + 角标「天」，正文偏右下；切幕时原位反向 ScrollFloat 消失 */
export function RiverGlyphLayout({
  beat,
  onDark,
  isNight,
  isExitingMorph = false,
  onMorphComplete,
}: RiverGlyphLayoutProps) {
  const reduceMotion = useReducedMotion();
  const morphDoneRef = useRef(false);
  const [, setWaterTaps] = useState(0);
  const [bottleSpot, setBottleSpot] = useState<WaterTapPoint | null>(null);
  const [bottlePhase, setBottlePhase] = useState<DriftBottlePhase>('hidden');
  const [bottleConsumed, setBottleConsumed] = useState(false);

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
    const handoff = window.setTimeout(finishMorph, JIANG_HANDOFF_MS);
    const fallback = window.setTimeout(finishMorph, JIANG_MORPH_MS + 80);
    return () => {
      window.clearTimeout(handoff);
      window.clearTimeout(fallback);
    };
  }, [isExitingMorph, reduceMotion, finishMorph]);

  const waterInteractive =
    !isExitingMorph && !bottleConsumed && bottlePhase === 'hidden';

  const onWaterTap = useCallback(
    (point: WaterTapPoint) => {
      if (!waterInteractive) return;
      setWaterTaps((n) => {
        const next = n + 1;
        if (next >= DRIFT_BOTTLE_TAP_THRESHOLD) {
          setBottleSpot(point);
          setBottlePhase('rising');
        }
        return next;
      });
    },
    [waterInteractive],
  );

  const onRiseComplete = useCallback(() => {
    setBottlePhase((p) => (p === 'rising' ? 'floating' : p));
  }, []);

  const onBottleClick = useCallback(() => {
    setBottlePhase('paper');
    dragonBoatSound.playEggTap();
  }, []);

  const onClosePaper = useCallback(() => {
    setBottlePhase('sinking');
  }, []);

  const onSinkComplete = useCallback(() => {
    setBottlePhase('hidden');
    setBottleSpot(null);
    setBottleConsumed(true);
  }, []);

  return (
    <SceneLayoutShell className="db-layout-river-glyph" variant="stack">
      <div className="db-layout-river-glyph-water">
        <RiverRipple
          className="db-layout-river-glyph-ripples"
          isNight={isNight}
          onWaterTap={onWaterTap}
          interactive={waterInteractive}
        />
        <DriftBottle
          spot={bottleSpot}
          phase={bottlePhase}
          isNight={isNight}
          onBottleClick={onBottleClick}
          onClosePaper={onClosePaper}
          onRiseComplete={onRiseComplete}
          onSinkComplete={onSinkComplete}
        />
      </div>

      <div className="db-layout-river-glyph-hero">
        <h2
          className={['db-river-glyph-main', onDark ? 'db-ink-display--on-dark' : ''].join(' ')}
          aria-label="江天"
        >
          <motion.span
            className="db-river-glyph-char"
            style={{ transformOrigin: '50% 0%' }}
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: '40%', scaleY: 1.6, scaleX: 0.85, filter: 'blur(8px)' }
            }
            animate={
              isExitingMorph
                ? { opacity: 0, y: '120%', scaleY: 2.3, scaleX: 0.7, filter: 'blur(0px)' }
                : { opacity: 1, y: 0, scaleY: 1, scaleX: 1, filter: 'blur(0px)' }
            }
            transition={
              isExitingMorph
                ? { duration: JIANG_FLOAT_EXIT_S, ease: JIANG_FLOAT_EXIT_EASE, delay: 0 }
                : { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
            }
          >
            江
          </motion.span>
        </h2>

        {beat.subtitle && (
          <motion.span
            className="db-river-glyph-corner"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={
              isExitingMorph
                ? { opacity: 0, y: -14, scaleY: 1.35, scaleX: 0.88 }
                : { opacity: 0.75, y: 0, scaleY: 1, scaleX: 1 }
            }
            transition={
              isExitingMorph
                ? { duration: 0.42, delay: 0.04, ease: JIANG_FLOAT_EXIT_EASE }
                : { delay: 0.42, duration: 0.45, ease: [0.22, 1, 0.36, 1] }
            }
            style={{ transformOrigin: '50% 0%' }}
          >
            {beat.subtitle}
          </motion.span>
        )}
      </div>

      {beat.body && beat.body.length > 0 && (
        <div className="db-layout-river-glyph-body">
          <StaggerLines
            lines={beat.body}
            onDark={onDark}
            variant="asymmetric"
            exiting={isExitingMorph}
            exitBaseDelay={0}
          />
        </div>
      )}

      <motion.div
        className="db-layout-river-glyph-wave"
        style={{ background: riverSoftWash(isNight) }}
        aria-hidden
        initial={false}
        animate={
          isExitingMorph
            ? { opacity: 0, x: '0%' }
            : { opacity: 1, x: ['-2%', '2%', '-2%'] }
        }
        transition={
          isExitingMorph
            ? { duration: 0.38, ease: [0.4, 0, 0.2, 1] }
            : { duration: 10, repeat: Infinity, ease: 'easeInOut' }
        }
      />

      {isExitingMorph && (
        <motion.div
          className="db-layout-river-glyph-wash"
          style={{ background: riverSoftWash(isNight) }}
          initial={{ opacity: 0, scaleY: 0.35 }}
          animate={{ opacity: 0.82, scaleY: 1 }}
          transition={{ duration: JIANG_FLOAT_EXIT_S * 0.85, delay: 0.08, ease: [0.32, 0.72, 0, 1] }}
          aria-hidden
        />
      )}
    </SceneLayoutShell>
  );
}
