import React from 'react';
import { motion } from 'motion/react';
import {
  SWALLOW_FLIGHT_1,
  SWALLOW_FLIGHT_1_TIMES,
  SWALLOW_FLIGHT_2,
  SWALLOW_FLIGHT_2_TIMES,
} from '@/shared/motion/stageMotion';

export const SpringSwallowNest = ({ isNight }: { isNight: boolean }) => (
  <div className="stage-edge-deco flex w-24 flex-col items-start">
    <div className="relative h-10 w-20 select-none">
      <svg className="h-full w-full filter drop-shadow-md" viewBox="0 0 80 40">
        <path d="M 5 22 L 0 25 M 75 22 L 80 25 M 15 32 L 8 36 M 65 32 L 72 36 M 40 35 L 40 40" stroke="#451A03" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 22 28 L 26 34 M 58 28 L 54 34" stroke="#451A03" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 5 10 Q 5 36, 40 36 T 75 10 Q 40 16, 5 10 Z" fill="#5C3A21" stroke="#3E2715" strokeWidth="1.5" />
        <path d="M 10 18 Q 40 24, 70 18" stroke="#78350F" strokeWidth="2.5" fill="none" opacity="0.6" strokeLinecap="round" />
        <path d="M 18 26 Q 40 30, 62 26" stroke="#451A03" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round" />
        <path d="M 8 13 Q 22 15, 36 13 T 72 13" stroke="#FBBF24" strokeWidth="1.2" fill="none" opacity="0.8" strokeLinecap="round" />
        <text x="40" y="27" fill="#FEF3C7" fontSize="5" fontWeight="bold" textAnchor="middle" opacity="0.8">
          NEST
        </text>
      </svg>

      {isNight && (
        <motion.div
          animate={{ y: [0, -1.8, 0] }}
          transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
          className="absolute -top-[12px] left-1/2 z-[-1] flex -translate-x-1/2 space-x-1.5"
        >
          <div className="relative flex h-6 w-6 flex-col items-center">
            <svg className="h-full w-full fill-current text-stone-900" viewBox="0 0 24 24">
              <circle cx="12" cy="14" r="8" fill="#1E293B" />
              <path d="M 12 14 Q 10 16, 12 19 L 12 14" fill="#EF4444" />
              <path d="M 12 10 L 12 6 L 14 9 Z" fill="#FBBF24" />
              <path d="M 7 11 Q 8.5 12.5, 10 11 M 14 11 Q 15.5 12.5, 17 11" stroke="#FEF08A" strokeWidth="1" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          <div className="relative -ml-1 flex h-6 w-6 flex-col items-center">
            <svg className="h-full w-full fill-current text-stone-900" viewBox="0 0 24 24">
              <circle cx="12" cy="14" r="7.5" fill="#334155" />
              <path d="M 12 14 Q 10 16, 12 19 L 12 14" fill="#EF4444" />
              <path d="M 12 10 L 11 6 L 13 8 Z" fill="#FBBF24" />
              <path d="M 7.5 11.5 Q 8.8 12.8, 10 11.5 M 14 11.5 Q 15.2 12.8, 16.5 11.5" stroke="#FEF08A" strokeWidth="1" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </motion.div>
      )}
    </div>
    <span className="mt-1 rounded-md bg-stone-900/10 px-1.5 py-0.5 text-[7.5px] font-bold uppercase tracking-widest text-stone-400">
      燕巢 Swallow
    </span>
  </div>
);
export const SummerCicadaEdge = () => (
  <div className="stage-edge-deco flex flex-col items-start" aria-hidden>
    <svg className="h-8 w-5 text-stone-700/30" viewBox="0 0 24 40" fill="currentColor">
      <path d="M12 2C8 2 6 6 6 12C6 18 10 24 12 26C14 24 18 18 18 12C18 6 16 2 12 2Z" fill="#3D2B1F" />
      <path d="M12 10C5 10 3 18 3 28C3 30 5 30 7 28C9 26 12 12 12 10Z" fill="#8B7355" opacity="0.3" />
      <path d="M12 10C19 10 21 18 21 28C21 30 19 30 17 28C15 26 12 12 12 10Z" fill="#8B7355" opacity="0.3" />
      <ellipse cx="8" cy="4" rx="2" ry="2" fill="#FFC107" />
      <ellipse cx="16" cy="4" rx="2" ry="2" fill="#FFC107" />
    </svg>
    <span className="mt-0.5 block rotate-90 text-center text-[5.5px] font-bold text-stone-500/30">鸣蝉</span>
  </div>
);
export const SpringSwallows = ({ isNight }: { isNight: boolean }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
      {!isNight && (
        <>
          <div className="absolute inset-0 overflow-hidden">
          {/* Swallow 1: Big Swoop */}
          <motion.div
            className="absolute w-11 h-11"
            initial={{
              left: SWALLOW_FLIGHT_1.left[0],
              top: SWALLOW_FLIGHT_1.top[0],
              rotate: SWALLOW_FLIGHT_1.rotate[0],
            }}
            animate={{
              left: [...SWALLOW_FLIGHT_1.left],
              top: [...SWALLOW_FLIGHT_1.top],
              rotate: [...SWALLOW_FLIGHT_1.rotate],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [...SWALLOW_FLIGHT_1_TIMES],
            }}
          >
            <svg className="w-full h-full text-slate-800" viewBox="0 0 60 60" fill="currentColor">
              <style>{`
                @keyframes swallow-flap-1 {
                  0%, 100% { transform: scaleY(1); }
                  50% { transform: scaleY(-0.7); }
                }
                .swallow-wing-flap-1 {
                  transform-origin: 30px 28px;
                  animation: swallow-flap-1 0.22s infinite ease-in-out;
                }
              `}</style>
              
              {/* Swallow Forked Tail */}
              <path d="M 28 32 L 20 54 L 28 42 L 36 54 L 28 32" fill="#1E293B" />
              {/* Swallow Body */}
              <ellipse cx="28" cy="28" rx="7" ry="11" fill="#1E293B" />
              {/* White/Cream belly */}
              <ellipse cx="28" cy="27" rx="5" ry="9" fill="#FFFBEB" />
              {/* Orange/Red Chin-Throat details */}
              <path d="M 25 18 Q 28 24, 31 18 C 30 17, 26 17, 25 18 Z" fill="#EF4444" />
              <path d="M 23 20 Q 28 27, 33 20" stroke="#EA580C" strokeWidth="1.5" fill="none" />
              {/* Head & Beak */}
              <circle cx="28" cy="16" r="4.5" fill="#0F172A" />
              <path d="M 28 12.5 L 26.5 8 L 29.5 8 Z" fill="#F59E0B" />
              
              {/* Wings Group with Left and Right wings flapping */}
              <g className="swallow-wing-flap-1">
                {/* Left wing - long blades curved */}
                <path d="M 21 26 C 14 26, 4 14, 0 6 C 8 10, 16 18, 21 26 Z" fill="#1E293B" />
                <path d="M 21 26 C 16 26, 8 16, 4 10 C 10 13, 16 20, 21 26 Z" fill="#334155" opacity="0.8" />
                
                {/* Right wing */}
                <path d="M 35 26 C 42 26, 52 14, 56 6 C 48 10, 40 18, 35 26 Z" fill="#1E293B" />
                <path d="M 35 26 C 40 26, 48 16, 52 10 C 46 13, 40 20, 35 26 Z" fill="#334155" opacity="0.8" />
              </g>
            </svg>
          </motion.div>

          {/* Swallow 2: Speed and playfulness offset */}
          <motion.div
            className="absolute w-8 h-8"
            initial={{
              left: SWALLOW_FLIGHT_2.left[0],
              top: SWALLOW_FLIGHT_2.top[0],
              rotate: SWALLOW_FLIGHT_2.rotate[0],
            }}
            animate={{
              left: [...SWALLOW_FLIGHT_2.left],
              top: [...SWALLOW_FLIGHT_2.top],
              rotate: [...SWALLOW_FLIGHT_2.rotate],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [...SWALLOW_FLIGHT_2_TIMES],
            }}
          >
            <svg className="w-full h-full text-slate-800" viewBox="0 0 60 60" fill="currentColor">
              <style>{`
                @keyframes swallow-flap-2 {
                  0%, 100% { transform: scaleY(1); }
                  50% { transform: scaleY(-0.75); }
                }
                .swallow-wing-flap-2 {
                  transform-origin: 30px 28px;
                  animation: swallow-flap-2 0.18s infinite ease-in-out;
                }
              `}</style>
              
              <path d="M 28 32 L 20 54 L 28 42 L 36 54 L 28 32" fill="#334155" />
              <ellipse cx="28" cy="28" rx="7" ry="11" fill="#334155" />
              <ellipse cx="28" cy="27" rx="5" ry="9" fill="#FFFDF5" />
              <path d="M 25 18 Q 28 24, 31 18 Z" fill="#F97316" />
              <circle cx="28" cy="16" r="4.5" fill="#1E293B" />
              
              <g className="swallow-wing-flap-2">
                <path d="M 21 26 C 14 26, 4 14, 0 6 Q 16 18, 21 26 Z" fill="#334155" />
                <path d="M 35 26 C 42 26, 52 14, 56 6 Q 40 18, 35 26 Z" fill="#334155" />
              </g>
            </svg>
          </motion.div>
          </div>
        </>
      )}
    </div>
  );
};

// 2. Summer Dragonfly Component - Lands on the Center Lotus precisely
