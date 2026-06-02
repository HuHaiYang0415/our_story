import React from 'react';
import { motion } from 'motion/react';
import type { TimeTheme } from '@/shared/types';
import {
  SpringFlowers,
  SummerPond,
  AutumnLeavesPile,
} from './cabinetDecorComponents';

/** 与仓库原版一致：仅 SVG/装饰，容器不加纯色底 */
export function CabinetFloor({ theme }: { theme: TimeTheme }) {
  return (
    <>
      {theme.season === 'spring' && (
        <div className="relative flex h-16 w-full items-end overflow-hidden pointer-events-none md:h-24">
          <svg className="h-10 w-full text-emerald-600/25 md:h-14" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,80 Q180,60 360,80 T720,70 T1080,80 T1440,65 L1440,100 L0,100 Z" opacity="0.8" fill="#10B981" />
            <path d="M0,90 Q120,75 240,90 T480,85 T960,90 T1440,80 L1440,100 L0,100 Z" fill="#047857" opacity="0.9" />
          </svg>
          <SpringFlowers />
        </div>
      )}

      {theme.season === 'summer' && (
        <div className="relative flex h-20 w-full items-end overflow-hidden pointer-events-none md:h-28">
          <svg className="h-10 w-full text-cyan-800/15 md:h-14" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,75 Q360,55 720,75 T1440,65 L1440,100 L0,100 Z" fill="#0E7490" opacity="0.25" />
            <path d="M0,85 Q360,80 720,85 T1440,80 L1440,100 L0,100 Z" fill="#0369A1" opacity="0.45" />
          </svg>
          <SummerPond isNight={theme.isNight} />
        </div>
      )}

      {theme.season === 'autumn' && (
        <div className="relative flex h-16 w-full items-end overflow-hidden pb-0.5 pointer-events-none md:h-22">
          <AutumnLeavesPile />
        </div>
      )}

      {theme.season === 'winter' && (
        <div className="relative flex h-20 w-full items-end overflow-hidden pointer-events-none md:h-28">
          <svg className="h-8 w-full text-slate-100/90 filter drop-shadow-inner md:h-12" viewBox="0 0 1440 40" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,18 C360,32 1080,8 1440,25 L1440,40 L0,40 Z" fill="#F1F5F9" opacity="0.95" />
            <path d="M0,24 C360,34 1080,18 1440,32 L1440,40 L0,40 Z" fill="#E2E8F0" opacity="0.6" />
          </svg>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            className="absolute bottom-0.5 right-[10%] flex flex-col items-center pointer-events-none z-20 md:right-[22%]"
          >
            <div className="relative flex flex-col items-center" style={{ height: '46px', width: '34px' }}>
              <div className="w-6.5 h-6.5 bg-white rounded-full border border-slate-300 relative flex items-center justify-center z-20 shadow-xs">
                <div className="absolute top-2 left-1.5 w-1 h-1 bg-stone-900 rounded-full" />
                <div className="absolute top-2 right-1.5 w-1 h-1 bg-stone-900 rounded-full" />
                <div className="absolute top-2.5 w-1.8 h-0.8 bg-orange-500 rounded-full transform scale-x-150 rotate-3" />
                <div className="absolute -top-3 w-5 h-3.5 flex flex-col items-center justify-end">
                  <div className="w-3.5 h-3 bg-stone-800 rounded-t-xs" />
                  <div className="w-6.5 h-1 bg-stone-800 rounded-full" />
                </div>
              </div>
              <div className="w-5.5 h-2 bg-red-600 rounded-full -mt-1 z-30 border-b border-red-800 flex items-center">
                <div className="w-1.2 h-2.5 bg-red-600 rounded-b-xs transform rotate-[20deg] ml-3.5 mt-1.5 shadow-xs" />
              </div>
              <div className="w-9 h-9 bg-white rounded-full border border-slate-300 -mt-0.8 relative flex flex-col items-center justify-center z-10 shadow-sm">
                <div className="w-1 h-1 bg-red-500 rounded-full mb-0.5" />
                <div className="w-1 h-1 bg-green-500 rounded-full" />
                <div className="absolute -left-2 top-2.5 w-2.5 h-0.5 bg-[#4c3217] transform -rotate-[22deg] origin-right" />
                <div className="absolute -right-2 top-3 w-2.5 h-0.5 bg-[#4c3217] transform rotate-[15deg] origin-left" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
            className="absolute bottom-0 left-[12%] flex flex-col items-center z-20 md:left-[24%]"
          >
            <div className="w-5.5 h-5 bg-white rounded-full border border-slate-200 relative shadow-xs">
              <div className="absolute -top-1 left-1.2 w-1.2 h-2.6 bg-white rounded-t-full border-t border-x border-slate-200" />
              <div className="absolute -top-1.2 right-1.2 w-1.2 h-3 bg-white rounded-t-full border-t border-x border-slate-200 transform -rotate-12" />
              <div className="absolute top-1.8 left-1.2 w-0.6 h-0.6 bg-red-400 rounded-full" />
              <div className="absolute top-1.8 right-1.2 w-0.6 h-0.6 bg-red-400 rounded-full" />
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
