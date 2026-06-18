import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { DRIFT_BOTTLE_NOTE } from './driftBottleConfig';
import type { WaterTapPoint } from './RiverRipple';

export type DriftBottlePhase = 'hidden' | 'rising' | 'floating' | 'paper' | 'sinking';

interface DriftBottleProps {
  spot: WaterTapPoint | null;
  phase: DriftBottlePhase;
  isNight?: boolean;
  onBottleClick: () => void;
  onClosePaper: () => void;
  onRiseComplete: () => void;
  onSinkComplete: () => void;
}

const BOTTLE_TILT = -28;
const SCROLL_ROOT_ID = 'dragon-boat-scroll-root';

function getPaperPortalTarget(): HTMLElement {
  return document.getElementById(SCROLL_ROOT_ID) ?? document.body;
}

function DriftBottleSvg({
  isNight,
  submerged = false,
}: {
  isNight: boolean;
  submerged?: boolean;
}) {
  const glass = submerged
    ? isNight
      ? 'rgba(6, 78, 59, 0.35)'
      : 'rgba(16, 120, 90, 0.32)'
    : isNight
      ? 'rgba(134, 239, 172, 0.28)'
      : 'rgba(167, 243, 208, 0.48)';
  const glassDeep = submerged
    ? isNight
      ? 'rgba(2, 44, 34, 0.72)'
      : 'rgba(4, 72, 55, 0.58)'
    : isNight
      ? 'rgba(6, 78, 59, 0.58)'
      : 'rgba(52, 211, 153, 0.32)';
  const stroke = submerged
    ? isNight
      ? 'rgba(94, 234, 212, 0.28)'
      : 'rgba(167, 243, 208, 0.35)'
    : isNight
      ? 'rgba(167, 243, 208, 0.62)'
      : 'rgba(255, 255, 255, 0.78)';

  return (
    <svg
      className="db-drift-bottle-svg"
      viewBox="0 0 64 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M32 37 C17.5 37 13.5 54 13.5 72.5 C13.5 89 19.5 97 32 97 C44.5 97 50.5 89 50.5 72.5 C50.5 54 46.5 37 32 37Z"
        fill={glassDeep}
        stroke={stroke}
        strokeWidth="1.2"
      />
      <path
        d="M32 37 C22 37 18 50 18 68 C18 82 22 90 32 90 C42 90 46 82 46 68 C46 50 42 37 32 37Z"
        fill={glass}
      />
      <path
        d="M26.5 37 L26.5 17.5 C26.5 13.5 28.5 11.5 32 11.5 C35.5 11.5 37.5 13.5 37.5 17.5 L37.5 37"
        fill={glassDeep}
        stroke={stroke}
        strokeWidth="1"
      />
      {!submerged && (
        <>
          <rect x="24.5" y="3.5" width="15" height="9.5" rx="2.5" fill="#c9a66b" stroke="#8b6914" strokeWidth="0.8" />
          <rect x="23" y="2" width="18" height="3" rx="1.2" fill="#a8844a" />
        </>
      )}
      {submerged && (
        <rect x="24.5" y="3.5" width="15" height="9.5" rx="2.5" fill="#7a6344" stroke="#4a3818" strokeWidth="0.8" opacity="0.55" />
      )}
      <rect
        x="22"
        y="54"
        width="20"
        height="26"
        rx="1.5"
        fill={submerged ? '#d4c4a0' : '#fef3c7'}
        stroke="#d6c4a0"
        strokeWidth="0.6"
        transform="rotate(-10 32 67)"
        opacity={submerged ? 0.55 : 0.92}
      />
      {!submerged && (
        <path
          d="M24 58 L28 56 L30 78 L26 80Z"
          fill="#fde68a"
          opacity="0.5"
          transform="rotate(-10 32 67)"
        />
      )}
      {!submerged && (
        <path
          d="M21 48 Q19 70 23 88"
          stroke="rgba(255,255,255,0.42)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      )}
      {!submerged && (
        <path
          d="M28 14 C30 15 34 15 36 14"
          stroke="#8b6914"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.6"
        />
      )}
    </svg>
  );
}

function DriftBottleFigure({ isNight }: { isNight: boolean }) {
  return (
    <span className="db-drift-bottle-figure" aria-hidden>
      <span className="db-drift-bottle-half db-drift-bottle-half--below">
        <DriftBottleSvg isNight={isNight} submerged />
      </span>
      <span className="db-drift-bottle-surface-line" />
      <span className="db-drift-bottle-half db-drift-bottle-half--above">
        <DriftBottleSvg isNight={isNight} />
      </span>
    </span>
  );
}

/** 贰幕彩蛋：第五次点击处浮起漂流瓶，纸条同位展开，关闭后沉底消失 */
export function DriftBottle({
  spot,
  phase,
  isNight = false,
  onBottleClick,
  onClosePaper,
  onRiseComplete,
  onSinkComplete,
}: DriftBottleProps) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (phase !== 'rising') return;
    if (reduceMotion) {
      onRiseComplete();
      return;
    }
    const t = window.setTimeout(onRiseComplete, 780);
    return () => window.clearTimeout(t);
  }, [phase, reduceMotion, onRiseComplete]);

  useEffect(() => {
    if (phase !== 'sinking' || !reduceMotion) return;
    onSinkComplete();
  }, [phase, reduceMotion, onSinkComplete]);

  if (!spot || phase === 'hidden') return null;

  const spotStyle = {
    left: `${spot.x}%`,
    top: `${spot.y}%`,
  } as React.CSSProperties;

  const showBottle = phase === 'rising' || phase === 'floating' || phase === 'sinking';
  const showPaper = phase === 'paper';

  const paperPortal =
    typeof document !== 'undefined'
      ? createPortal(
          <AnimatePresence>
            {showPaper && (
              <>
                <motion.button
                  key="drift-bottle-backdrop"
                  type="button"
                  className="db-drift-bottle-backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={onClosePaper}
                  aria-label="收起纸团"
                />
                <motion.div
                  key="drift-bottle-paper"
                  className="db-drift-bottle-paper"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="drift-bottle-paper-text"
                  initial={
                    reduceMotion
                      ? { opacity: 1, scale: 1, x: '-50%', y: '-50%' }
                      : { opacity: 0, scale: 0.88, x: '-50%', y: 'calc(-50% + 12px)' }
                  }
                  animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
                  exit={{ opacity: 0, scale: 0.92, x: '-50%', y: 'calc(-50% + 8px)' }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="db-drift-bottle-paper-body">
                    <p id="drift-bottle-paper-text" className="db-drift-bottle-paper-text">
                      {DRIFT_BOTTLE_NOTE}
                    </p>
                  </div>
                  <button type="button" className="db-drift-bottle-paper-close" onClick={onClosePaper}>
                    收起
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          getPaperPortalTarget(),
        )
      : null;

  return (
    <>
      <div className="db-drift-bottle-layer" style={spotStyle}>
        <AnimatePresence mode="wait">
          {showBottle && (
            <motion.button
              key="bottle"
              type="button"
              className="db-drift-bottle"
              initial={
                reduceMotion
                  ? { opacity: 1, y: 0, scale: 1, rotate: BOTTLE_TILT }
                  : { opacity: 0, y: 28, scale: 0.82, rotate: BOTTLE_TILT - 6 }
              }
              animate={
                phase === 'sinking'
                  ? { opacity: 0, y: 36, scale: 0.65, rotate: BOTTLE_TILT + 10 }
                  : phase === 'rising'
                    ? { opacity: 1, y: 0, scale: 1, rotate: BOTTLE_TILT }
                    : {
                        opacity: 1,
                        y: [0, -3, 0],
                        scale: 1,
                        rotate: [BOTTLE_TILT + 2, BOTTLE_TILT - 2, BOTTLE_TILT + 2],
                      }
              }
              exit={{ opacity: 0, y: 32, scale: 0.6, rotate: BOTTLE_TILT + 8 }}
              style={{ transformOrigin: '50% 50%' }}
              transition={
                phase === 'sinking'
                  ? { duration: 0.85, ease: [0.45, 0.05, 0.55, 0.95] }
                  : phase === 'rising'
                    ? { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
                    : {
                        y: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
                        rotate: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
                      }
              }
              onAnimationComplete={() => {
                if (phase === 'sinking' && !reduceMotion) onSinkComplete();
              }}
              onClick={(e) => {
                if (phase !== 'floating') return;
                e.stopPropagation();
                onBottleClick();
              }}
              disabled={phase !== 'floating'}
              aria-label="拾取漂流瓶"
            >
              <span className="db-drift-bottle-ring" aria-hidden />
              <DriftBottleFigure isNight={isNight} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {paperPortal}
    </>
  );
}
