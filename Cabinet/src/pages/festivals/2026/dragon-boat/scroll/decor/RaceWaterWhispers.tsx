import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const HOLD_MS = 5000;
const FADE_IN_S = 1.35;
const FADE_OUT_S = 0.9;
const START_DELAY_MS = 1200;

interface WhisperLine {
  segments: string[];
  /** 各段之间额外间隔（ms），首段为 0 */
  partGaps: number[];
  /** 相对 START_DELAY_MS 的错开出现时间 */
  startOffset: number;
  /** 消失时相对首句的错开（ms） */
  fadeStagger: number;
  placement: {
    left?: string;
    right?: string;
    top: string;
    maxWidth: string;
    rotate: number;
    textAlign?: 'left' | 'right';
    transformOrigin?: string;
  };
}

const WHISPER_LINES: WhisperLine[] = [
  {
    segments: ['临时加了这个part，', '也是为我最近不好的状态说声抱歉'],
    partGaps: [0, 880],
    startOffset: 0,
    fadeStagger: 0,
    placement: {
      left: '6%',
      top: '48%',
      maxWidth: 'min(78vw, 17.5rem)',
      rotate: -2.1,
      textAlign: 'left',
    },
  },
  {
    segments: ['很抱歉最近事情很多，', '连开假条的时间都忘了'],
    partGaps: [0, 720],
    startOffset: 2900,
    fadeStagger: 820,
    placement: {
      right: '7%',
      top: '57%',
      maxWidth: 'min(72vw, 16rem)',
      rotate: 1.6,
      textAlign: 'right',
      transformOrigin: '100% 50%',
    },
  },
  {
    segments: ['在你情绪不好的时候，没能给你一些依靠'],
    partGaps: [0],
    startOffset: 5400,
    fadeStagger: 1680,
    placement: {
      left: '11%',
      top: '66%',
      maxWidth: 'min(70vw, 15.5rem)',
      rotate: -0.9,
      textAlign: 'left',
    },
  },
  {
    segments: ['我还不够细心周到，', '但我会不断努力的'],
    partGaps: [0, 1040],
    startOffset: 7600,
    fadeStagger: 2540,
    placement: {
      left: '19%',
      top: '76%',
      maxWidth: 'min(68vw, 15rem)',
      rotate: 1.3,
      textAlign: 'left',
    },
  },
];

interface LineRuntime {
  visibleParts: number;
  fading: boolean;
  gone: boolean;
}

interface RaceWaterWhispersProps {
  active: boolean;
  isNight: boolean;
}

/** 叁幕鼓点三下后：水面絮语 — 交错浮现，齐聚停留后再按先出先隐 */
export function RaceWaterWhispers({ active, isNight }: RaceWaterWhispersProps) {
  const reduceMotion = useReducedMotion();
  const [lines, setLines] = useState<LineRuntime[]>(() =>
    WHISPER_LINES.map(() => ({ visibleParts: 0, fading: false, gone: false })),
  );
  const runRef = useRef(0);

  useEffect(() => {
    if (!active) {
      runRef.current += 1;
      setLines(WHISPER_LINES.map(() => ({ visibleParts: 0, fading: false, gone: false })));
      return;
    }

    const runId = runRef.current + 1;
    runRef.current = runId;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const patchLine = (index: number, patch: Partial<LineRuntime>) => {
      if (runRef.current !== runId) return;
      setLines((prev) => prev.map((line, i) => (i === index ? { ...line, ...patch } : line)));
    };

    if (reduceMotion) {
      timers.push(
        window.setTimeout(() => {
          setLines(
            WHISPER_LINES.map((row) => ({
              visibleParts: row.segments.length,
              fading: false,
              gone: false,
            })),
          );
        }, START_DELAY_MS),
      );
      timers.push(
        window.setTimeout(() => {
          WHISPER_LINES.forEach((_, i) => patchLine(i, { fading: true }));
        }, START_DELAY_MS + HOLD_MS),
      );
      timers.push(
        window.setTimeout(() => {
          WHISPER_LINES.forEach((_, i) => patchLine(i, { gone: true, visibleParts: 0 }));
        }, START_DELAY_MS + HOLD_MS + FADE_OUT_S * 1000),
      );
      return () => timers.forEach((id) => window.clearTimeout(id));
    }

    const lineCompleteTimes: number[] = [];

    WHISPER_LINES.forEach((row, lineIndex) => {
      let t = START_DELAY_MS + row.startOffset;

      row.segments.forEach((_, partIndex) => {
        if (partIndex > 0) t += row.partGaps[partIndex] ?? 800;
        timers.push(
          window.setTimeout(() => {
            patchLine(lineIndex, { visibleParts: partIndex + 1, fading: false, gone: false });
          }, t),
        );
      });

      lineCompleteTimes.push(t + FADE_IN_S * 1000);
    });

    const allCompleteAt = Math.max(...lineCompleteTimes);
    const fadeStart = allCompleteAt + HOLD_MS;

    WHISPER_LINES.forEach((row, lineIndex) => {
      const fadeAt = fadeStart + row.fadeStagger;
      timers.push(
        window.setTimeout(() => {
          patchLine(lineIndex, { fading: true });
        }, fadeAt),
      );
      timers.push(
        window.setTimeout(() => {
          patchLine(lineIndex, { fading: false, gone: true, visibleParts: 0 });
        }, fadeAt + FADE_OUT_S * 1000),
      );
    });

    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [active, reduceMotion]);

  if (!active) return null;

  return (
    <div
      className={['db-race-water-whispers', isNight ? 'db-race-water-whispers--night' : ''].join(' ')}
      aria-hidden
    >
      {WHISPER_LINES.map((row, lineIndex) => {
        const runtime = lines[lineIndex];
        if (runtime.gone && runtime.visibleParts === 0) return null;

        const { placement } = row;
        return (
          <motion.p
            key={lineIndex}
            className="db-race-water-whisper-line"
            style={{
              left: placement.left,
              right: placement.right,
              top: placement.top,
              maxWidth: placement.maxWidth,
              textAlign: placement.textAlign ?? 'left',
              transform: `rotate(${placement.rotate}deg)`,
              transformOrigin: placement.transformOrigin ?? '0 50%',
            }}
            initial={false}
            animate={{ opacity: runtime.fading ? 0 : 1 }}
            transition={{ duration: reduceMotion ? 0 : runtime.fading ? FADE_OUT_S : 0.6, ease: 'easeOut' }}
          >
            {row.segments.map((segment, partIndex) => (
              <motion.span
                key={partIndex}
                className="db-race-water-whisper-part"
                initial={false}
                animate={{ opacity: runtime.visibleParts > partIndex ? 1 : 0 }}
                transition={{
                  duration: reduceMotion ? 0 : FADE_IN_S,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {segment}
              </motion.span>
            ))}
          </motion.p>
        );
      })}
    </div>
  );
}
