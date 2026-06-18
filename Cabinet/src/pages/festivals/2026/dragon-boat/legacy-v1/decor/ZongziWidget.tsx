import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ZongziWidgetProps {
  tieColor: string;
  isOpened: boolean;
  label: string;
}

export function ZongziWidget({ tieColor, isOpened, label }: ZongziWidgetProps) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="closed"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0, rotate: 10 }}
            className="relative h-full w-full"
          >
            <svg className="h-full w-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]" viewBox="0 0 48 48" fill="none" aria-hidden>
              <path d="M 24 6 L 10 38 Q 12 42, 24 42 Z" fill="url(#db-bamboo-l)" />
              <path d="M 24 6 L 38 38 Q 36 42, 24 42 Z" fill="url(#db-bamboo-r)" />
              <line x1="24" y1="6" x2="24" y2="42" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" />
              <path d="M 18 24 Q 24 27, 30 24" stroke={tieColor} strokeWidth="1.8" fill="none" />
              <path d="M 16 28 Q 24 31, 32 28" stroke={tieColor} strokeWidth="1.8" fill="none" />
              <circle cx="19" cy="27" r="2" fill={tieColor} />
              <defs>
                <linearGradient id="db-bamboo-l" x1="24" y1="6" x2="8" y2="40" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#047857" />
                </linearGradient>
                <linearGradient id="db-bamboo-r" x1="24" y1="6" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#064E3B" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute left-1/2 top-[48%] flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-12 items-center justify-center rounded-sm border border-amber-300 bg-red-600 font-serif text-[8px] font-bold text-amber-100 shadow-md">
              {label}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="opened"
            initial={{ scale: 0.65, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative h-full w-full"
          >
            <svg className="h-full w-full drop-shadow-[0_5px_12px_rgba(251,191,36,0.35)]" viewBox="0 0 48 48" fill="none" aria-hidden>
              <path d="M 24 10 L 14 36 C 14 36, 18 40, 24 40 Q 30 40, 34 36 Z" fill="url(#db-rice)" stroke="#d97706" strokeWidth="0.5" />
              {label === '甜' ? (
                <>
                  <circle cx="20" cy="30" r="3" fill="#991B1B" />
                  <circle cx="27" cy="26" r="2.2" fill="#B91C1C" />
                </>
              ) : (
                <>
                  <circle cx="24" cy="27" r="4.5" fill="#EF4444" stroke="#FBBF24" strokeWidth="1" />
                  <path d="M 18 32 Q 22 35, 29 32" stroke="#78350F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                </>
              )}
              <defs>
                <linearGradient id="db-rice" x1="24" y1="10" x2="24" y2="40" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FFFDF5" />
                  <stop offset="60%" stopColor="#FDE047" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
