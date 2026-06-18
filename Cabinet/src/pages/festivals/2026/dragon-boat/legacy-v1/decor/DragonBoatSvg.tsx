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
  label: string;
  isNight: boolean;
}

export function DragonBoatSvg({ index, label, isNight }: DragonBoatSvgProps) {
  const boatRaw = BOAT_RAW[index];

  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-end boat-container-${index}`}
      style={{ '--row-duration': index === 1 ? '0.9s' : '1.15s', '--drum-duration': '0.55s' } as React.CSSProperties}
    >
      <style>{`
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
        @media (prefers-reduced-motion: reduce) {
          .boat-container-${index} #freepik--character-1--inject-5,
          .boat-container-${index} #freepik--character-2--inject-5,
          .boat-container-${index} #freepik--character-3--inject-5 {
            animation: none !important;
          }
        }
      `}</style>

      <span className="pointer-events-none absolute -top-4 select-none rounded border border-amber-900/30 bg-black/45 px-1 py-0.5 font-serif text-[7px] text-amber-200">
        {label}
      </span>

      <div className="pointer-events-none absolute bottom-1 right-4 flex gap-1">
        <motion.span
          animate={{ scale: [0.5, 1.2, 0.5], opacity: [0.35, 0, 0.35] }}
          transition={{ duration: 0.55, repeat: Infinity }}
          className="h-1.5 w-1.5 rounded-full bg-white/60"
        />
        <motion.span
          animate={{ scale: [0.5, 1.4, 0.5], opacity: [0.25, 0, 0.25] }}
          transition={{ duration: 0.65, repeat: Infinity, delay: 0.12 }}
          className="h-2 w-2 rounded-full bg-sky-300/50"
        />
      </div>

      <motion.div
        animate={{ y: [-1, 1, -1], rotate: [-0.4, 0.4, -0.4] }}
        transition={{ duration: index === 1 ? 0.95 : 1.25, repeat: Infinity, ease: 'easeInOut' }}
        className={`pointer-events-none flex h-full w-full items-center justify-center [&>svg]:h-full [&>svg]:w-full [&>svg]:overflow-visible ${isNight ? 'brightness-110' : ''}`}
        dangerouslySetInnerHTML={{ __html: boatRaw }}
      />
    </div>
  );
}
