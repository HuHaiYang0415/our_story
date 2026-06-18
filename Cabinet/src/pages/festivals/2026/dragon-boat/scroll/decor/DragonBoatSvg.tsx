import React from 'react';
import { motion } from 'motion/react';
import { BOAT_FAR_RAW, BOAT_MID_RAW, BOAT_NEAR_RAW } from './svg_assets';

const BOAT_RAW: Record<1 | 2 | 3, string> = {
  3: BOAT_FAR_RAW,
  2: BOAT_MID_RAW,
  1: BOAT_NEAR_RAW,
};

interface DragonBoatSvgProps {
  index: 1 | 2 | 3;
  label?: string;
  isNight: boolean;
  showLabel?: boolean;
  morphLite?: boolean;
  /** 鼓点三下：划桨加速 */
  rowBurst?: boolean;
  /** 近舟点击热区对齐用 */
  hitTargetRef?: React.Ref<HTMLDivElement>;
}

export function DragonBoatSvg({
  index,
  label = '近舟',
  isNight,
  showLabel = false,
  morphLite = false,
  rowBurst = false,
  hitTargetRef,
}: DragonBoatSvgProps) {
  const boatRaw = BOAT_RAW[index];
  const rowDuration = index === 1 ? '0.9s' : '1.15s';
  const rowFastDuration = index === 1 ? '0.6s' : '0.77s';
  const drumDuration = rowBurst ? '0.28s' : '0.55s';
  const activeRowDuration = rowBurst ? rowFastDuration : rowDuration;

  const rowStyle = `
    @keyframes dbRower1-${index} {
      0%, 100% { transform: rotate(0deg) translate(0, 0); }
      50% { transform: rotate(-14deg) translate(-4px, 3px); }
    }
    @keyframes dbRower2-${index} {
      0%, 100% { transform: rotate(0deg) translate(0, 0); }
      50% { transform: rotate(-16deg) translate(-5px, 4px); }
    }
    @keyframes dbDrummer-${index} {
      0%, 100% { transform: rotate(0deg) translateY(0); }
      50% { transform: rotate(16deg) translateY(3px); }
    }
    .boat-container-${index} #freepik--character-1--inject-5 {
      transform-origin: 240px 325px;
      animation: dbRower1-${index} var(--row-duration, 1.15s) ease-in-out infinite;
    }
    .boat-container-${index} #freepik--character-2--inject-5 {
      transform-origin: 330px 295px;
      animation: dbRower2-${index} var(--row-duration, 1.15s) ease-in-out infinite;
      animation-delay: 0.22s;
    }
    .boat-container-${index} #freepik--character-3--inject-5 {
      transform-origin: 450px 295px;
      animation: dbDrummer-${index} var(--drum-duration, 0.55s) ease-in-out infinite;
    }
    .boat-container-${index}.boat-container--lite #freepik--character-1--inject-5,
    .boat-container-${index}.boat-container--lite #freepik--character-2--inject-5,
    .boat-container-${index}.boat-container--lite #freepik--character-3--inject-5 {
      animation: none !important;
    }
    @media (prefers-reduced-motion: reduce) {
      .boat-container-${index} #freepik--character-1--inject-5,
      .boat-container-${index} #freepik--character-2--inject-5,
      .boat-container-${index} #freepik--character-3--inject-5 {
        animation: none !important;
      }
    }
  `;

  const svgInner = (
    <div
      ref={hitTargetRef}
      className={`db-boat-svg-hit-target pointer-events-none flex h-full w-full items-center justify-end [&>svg]:h-full [&>svg]:w-full [&>svg]:overflow-visible ${isNight ? 'brightness-110' : ''}`}
      dangerouslySetInnerHTML={{ __html: boatRaw }}
    />
  );

  return (
    <div
      className={[
        `relative flex h-full w-full flex-col items-center justify-end boat-container-${index}`,
        morphLite ? 'boat-container--lite' : '',
        rowBurst ? 'boat-container--row-burst' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={
        {
          '--row-duration': activeRowDuration,
          '--drum-duration': drumDuration,
        } as React.CSSProperties
      }
    >
      <style>{rowStyle}</style>

      {showLabel && (
        <span className="pointer-events-none absolute -top-4 select-none rounded border border-amber-900/30 bg-black/45 px-1 py-0.5 font-serif text-[7px] text-amber-200">
          {label}
        </span>
      )}

      {morphLite ? (
        svgInner
      ) : (
        <motion.div
          className="pointer-events-none h-full w-full"
          animate={{ y: [-1, 1, -1], rotate: [-0.4, 0.4, -0.4] }}
          transition={{ duration: index === 1 ? 0.95 : 1.25, repeat: Infinity, ease: 'easeInOut' }}
        >
          {svgInner}
        </motion.div>
      )}
    </div>
  );
}
