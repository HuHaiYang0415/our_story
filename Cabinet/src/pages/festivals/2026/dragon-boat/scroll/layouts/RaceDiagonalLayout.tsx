import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { SceneBeat } from '../../scroll-beats';
import { festiveWarmGlow } from '../morph/morphWashes';
import { BOAT_HANDOFF_MS, BOAT_MORPH_MS } from '../morph/morphConstants';
import { DragonBoatSvg } from '../decor/DragonBoatSvg';
import { StaggerLines } from '../typography/InkSubtitle';
import { dragonBoatSound } from '../audio/DragonBoatSound';
import { RaceDrumHit } from '../interaction/RaceDrumHit';
import { RaceWaterWhispers } from '../decor/RaceWaterWhispers';
import { SceneLayoutShell } from './SceneLayoutShell';

const BOAT_EXIT_S = BOAT_MORPH_MS / 1000;
const BOAT_EXIT_EASE = [0.38, 0.02, 0.18, 1] as const;
const DRUM_TAP_WINDOW_MS = 3200;
/** 全屏横向一来回：右出屏 → 左入屏回位 */
const ROW_BURST_TRIP_S = 3.6;
const ROW_BURST_MS = Math.round(ROW_BURST_TRIP_S * 1000) + 80;
const ROW_BURST_DELAY_MS = 280;

/** 右出屏 / 左回位；中间两帧同刻换场，避免横穿屏幕插值 */
const BURST_TIMES = [0, 0.45, 0.45, 1] as const;
const BURST_EASE = [0.42, 0, 0.58, 1] as const;
/** 相对当前位再向右划出视口的距离 */
const BURST_EXIT_EXTRA_VW = 118;
/** 从左侧屏外划入的起点 */
const BURST_ENTER_X = '-118vw';

function readTranslateXVw(el: HTMLElement | null): number {
  if (!el) return 0;
  const raw = el.style.transform || window.getComputedStyle(el).transform;
  if (!raw || raw === 'none') return 0;
  const match = raw.match(/matrix\(([^)]+)\)/);
  if (!match) return 0;
  const parts = match[1].split(',').map((s) => parseFloat(s.trim()));
  if (parts.length < 6 || Number.isNaN(parts[4])) return 0;
  return (parts[4] / window.innerWidth) * 100;
}

function buildFullScreenBurstPath(startVw: number): string[] {
  const exitVw = startVw + BURST_EXIT_EXTRA_VW;
  return [`${startVw}vw`, `${exitVw}vw`, BURST_ENTER_X, '0vw'];
}

interface RaceDiagonalLayoutProps {
  beat: SceneBeat;
  onDark: boolean;
  isNight: boolean;
  enterFromMorph?: boolean;
  isExitingMorph?: boolean;
  onMorphComplete?: () => void;
}

interface FarBoatProps {
  classSuffix: '1' | '2';
  boatIndex: 2 | 3;
  isNight: boolean;
  isExitingMorph: boolean;
  driftDuration: number;
  baseOpacity: number;
  rowBurst: boolean;
  burstPath: string[] | null;
  boatRef: React.RefObject<HTMLDivElement | null>;
}

function FarBoat({
  classSuffix,
  boatIndex,
  isNight,
  isExitingMorph,
  driftDuration,
  baseOpacity,
  rowBurst,
  burstPath,
  boatRef,
}: FarBoatProps) {
  const reduceMotion = useReducedMotion();
  const bursting = rowBurst && burstPath !== null;

  return (
    <motion.div
      ref={boatRef}
      className={`db-layout-race-far db-layout-race-far--${classSuffix}`}
      initial={false}
      animate={
        isExitingMorph
          ? { opacity: 0, x: '16vw', y: '-2%' }
          : bursting
            ? { opacity: baseOpacity, x: burstPath, y: 0 }
            : reduceMotion
              ? { opacity: baseOpacity, x: 0, y: 0 }
              : { opacity: baseOpacity, x: ['-5vw', '6vw'], y: [0, '-1.2%', 0] }
      }
      transition={
        isExitingMorph
          ? { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
          : bursting
            ? { duration: ROW_BURST_TRIP_S, ease: BURST_EASE, times: [...BURST_TIMES] }
            : reduceMotion
              ? { duration: 0 }
              : {
                  duration: driftDuration,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                }
      }
    >
      <DragonBoatSvg
        index={boatIndex}
        isNight={isNight}
        showLabel={false}
        morphLite={isExitingMorph}
        rowBurst={rowBurst && !isExitingMorph}
      />
    </motion.div>
  );
}

/** 叁幕：Grid 分区 — 文案上 / 远舟中 / 近舟下，远舟随近舟行自动对齐 */
export function RaceDiagonalLayout({
  beat,
  onDark,
  isNight,
  enterFromMorph,
  isExitingMorph = false,
  onMorphComplete,
}: RaceDiagonalLayoutProps) {
  const reduceMotion = useReducedMotion();
  const fromJiangRef = useRef(enterFromMorph && !reduceMotion);
  const fromJiang = fromJiangRef.current;
  const morphDoneRef = useRef(false);
  const [rowBurst, setRowBurst] = useState(false);
  const [burstPaths, setBurstPaths] = useState<{
    near: string[];
    far1: string[];
    far2: string[];
  } | null>(null);
  const drumTapCountRef = useRef(0);
  const drumTapResetRef = useRef<number | null>(null);
  const rowBurstTimerRef = useRef<number | null>(null);
  const rowBurstDelayRef = useRef<number | null>(null);
  const nearBoatMotionRef = useRef<HTMLDivElement>(null);
  const farBoat1Ref = useRef<HTMLDivElement>(null);
  const farBoat2Ref = useRef<HTMLDivElement>(null);
  const nearBoatHitRef = useRef<HTMLDivElement>(null);
  const whispersTriggeredRef = useRef(false);
  const [whispersActive, setWhispersActive] = useState(false);

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
    const handoff = window.setTimeout(finishMorph, BOAT_HANDOFF_MS);
    const fallback = window.setTimeout(finishMorph, BOAT_MORPH_MS + 100);
    return () => {
      window.clearTimeout(handoff);
      window.clearTimeout(fallback);
    };
  }, [isExitingMorph, reduceMotion, finishMorph]);

  useEffect(
    () => () => {
      if (drumTapResetRef.current) window.clearTimeout(drumTapResetRef.current);
      if (rowBurstTimerRef.current) window.clearTimeout(rowBurstTimerRef.current);
      if (rowBurstDelayRef.current) window.clearTimeout(rowBurstDelayRef.current);
    },
    [],
  );

  const triggerRowBurst = useCallback(() => {
    if (reduceMotion || isExitingMorph) return;

    const nearStart = readTranslateXVw(nearBoatMotionRef.current);
    const far1Start = readTranslateXVw(farBoat1Ref.current);
    const far2Start = readTranslateXVw(farBoat2Ref.current);

    setBurstPaths({
      near: buildFullScreenBurstPath(nearStart),
      far1: buildFullScreenBurstPath(far1Start),
      far2: buildFullScreenBurstPath(far2Start),
    });
    setRowBurst(true);

    if (rowBurstTimerRef.current) window.clearTimeout(rowBurstTimerRef.current);
    rowBurstTimerRef.current = window.setTimeout(() => {
      setRowBurst(false);
      setBurstPaths(null);
    }, ROW_BURST_MS);
  }, [reduceMotion, isExitingMorph]);

  const onDrumTap = useCallback(() => {
    dragonBoatSound.ensureReady();
    dragonBoatSound.playRaceDrum();

    drumTapCountRef.current += 1;
    const count = drumTapCountRef.current;

    if (count >= 3) {
      drumTapCountRef.current = 0;
      if (drumTapResetRef.current) window.clearTimeout(drumTapResetRef.current);
      if (rowBurstDelayRef.current) window.clearTimeout(rowBurstDelayRef.current);
      if (!whispersTriggeredRef.current) {
        whispersTriggeredRef.current = true;
        setWhispersActive(true);
      }
      rowBurstDelayRef.current = window.setTimeout(() => {
        triggerRowBurst();
        rowBurstDelayRef.current = null;
      }, ROW_BURST_DELAY_MS);
      return;
    }

    if (drumTapResetRef.current) window.clearTimeout(drumTapResetRef.current);
    drumTapResetRef.current = window.setTimeout(() => {
      drumTapCountRef.current = 0;
    }, DRUM_TAP_WINDOW_MS);
  }, [triggerRowBurst]);

  return (
    <SceneLayoutShell className="db-layout-race-diagonal" variant="stage">
      <div className="db-layout-race-diagonal-copy">
        <h2
          className={[
            'db-ink-display db-ink-display--hero db-layout-race-title',
            onDark ? 'db-ink-display--on-dark' : 'db-ink-display--on-light',
          ].join(' ')}
        >
          <motion.span
            className="db-race-title-char"
            style={{ transformOrigin: '50% 100%', display: 'inline-block' }}
            initial={
              fromJiang
                ? { opacity: 0.6, x: -12 }
                : reduceMotion
                  ? false
                  : { opacity: 0, y: 28 }
            }
            animate={
              isExitingMorph
                ? { opacity: 0, x: -12, y: -8 }
                : { opacity: 1, x: 0, y: 0 }
            }
            transition={
              isExitingMorph
                ? { duration: 0.38, ease: [0.4, 0, 0.2, 1] }
                : {
                    delay: fromJiang ? 0.35 : 0.08,
                    duration: 0.62,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
          >
            {beat.display}
          </motion.span>
        </h2>

        {beat.subtitle && (
          <motion.p
            className={['db-ink-subtitle', onDark ? 'text-emerald-100/85' : 'text-stone-600'].join(' ')}
            initial={fromJiang ? { opacity: 0 } : reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={isExitingMorph ? { opacity: 0, y: -6 } : { opacity: 1, y: 0 }}
            transition={
              isExitingMorph
                ? { duration: 0.32, delay: 0.04, ease: [0.4, 0, 0.2, 1] }
                : { delay: fromJiang ? 0.52 : 0.42, duration: 0.55, ease: [0.22, 1, 0.36, 1] }
            }
          >
            {beat.subtitle}
          </motion.p>
        )}

        {beat.body && beat.body.length > 0 && (
          <StaggerLines
            lines={beat.body}
            onDark={onDark}
            variant="asymmetric"
            baseDelay={fromJiang ? 0.62 : 0.52}
            exiting={isExitingMorph}
            exitBaseDelay={0.02}
          />
        )}
      </div>

      <motion.div
        className="db-layout-race-far-lane"
        aria-hidden
        animate={isExitingMorph ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: isExitingMorph ? 0.48 : 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <FarBoat
          classSuffix="1"
          boatIndex={3}
          isNight={isNight}
          isExitingMorph={isExitingMorph}
          driftDuration={26}
          baseOpacity={0.3}
          rowBurst={rowBurst && !isExitingMorph}
          burstPath={burstPaths?.far1 ?? null}
          boatRef={farBoat1Ref}
        />
        <FarBoat
          classSuffix="2"
          boatIndex={2}
          isNight={isNight}
          isExitingMorph={isExitingMorph}
          driftDuration={34}
          baseOpacity={0.48}
          rowBurst={rowBurst && !isExitingMorph}
          burstPath={burstPaths?.far2 ?? null}
          boatRef={farBoat2Ref}
        />
      </motion.div>

      <motion.div
        ref={nearBoatMotionRef}
        className="db-layout-race-boat"
        initial={
          fromJiang
            ? { opacity: 0.75, x: '-18vw', y: '14%', scale: 0.92 }
            : reduceMotion
              ? false
              : { opacity: 0, x: '-28vw', y: '12%' }
        }
        animate={
          isExitingMorph
            ? { opacity: 0.92, x: '108vw', y: '-3%', scale: 1.12 }
            : rowBurst && burstPaths
              ? { opacity: 1, x: burstPaths.near, y: 0, scale: 1 }
              : { opacity: 1, x: 0, y: 0, scale: 1 }
        }
        transition={
          isExitingMorph
            ? { duration: BOAT_EXIT_S, ease: BOAT_EXIT_EASE, delay: 0.06 }
            : rowBurst && burstPaths
              ? { duration: ROW_BURST_TRIP_S, ease: BURST_EASE, times: [...BURST_TIMES] }
              : {
                  delay: fromJiang ? 0.12 : reduceMotion ? 0 : 0.42,
                  duration: fromJiang ? 1.15 : 1.05,
                  ease: [0.22, 1, 0.36, 1],
                }
        }
      >
        <DragonBoatSvg
          index={1}
          isNight={isNight}
          showLabel={false}
          morphLite={isExitingMorph}
          rowBurst={rowBurst && !isExitingMorph}
          hitTargetRef={nearBoatHitRef}
        />
      </motion.div>

      <RaceDrumHit
        hitTargetRef={nearBoatHitRef}
        onTap={onDrumTap}
        disabled={isExitingMorph}
        isNight={isNight}
      />

      <RaceWaterWhispers active={whispersActive && !isExitingMorph} isNight={isNight} />

      {isExitingMorph && (
        <motion.div
          className="db-layout-race-warm-glow"
          style={{ background: festiveWarmGlow(isNight) }}
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 0.85, scale: 1.04 }}
          transition={{ duration: BOAT_EXIT_S * 0.85, delay: 0.12, ease: [0.32, 0.72, 0, 1] }}
          aria-hidden
        />
      )}
    </SceneLayoutShell>
  );
}
