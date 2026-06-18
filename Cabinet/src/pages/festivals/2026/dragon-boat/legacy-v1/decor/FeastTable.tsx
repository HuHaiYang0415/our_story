import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, ScrollText, Sparkles } from 'lucide-react';
import type { DragonBoatTheme } from '../theme';
import type { ZongziSide } from '../zongzi';
import { ZONGZI_DATA } from '../zongzi';
import { ZongziWidget } from './ZongziWidget';

interface FeastTableProps {
  theme: DragonBoatTheme;
  onOpenZongzi: (side: ZongziSide) => void;
  onOpenMugwort: () => void;
  onOpenLetter: () => void;
}

/** 参考 index.tsx 前景条案区（无亭）；艾蒲悬于左侧 */
export function FeastTable({ theme, onOpenZongzi, onOpenMugwort, onOpenLetter }: FeastTableProps) {
  const [zongziOpened, setZongziOpened] = useState({ left: false, right: false });
  const [orchidRipple, setOrchidRipple] = useState(false);
  const [showOrchidText, setShowOrchidText] = useState(false);

  const handleZongzi = (side: ZongziSide) => {
    setZongziOpened((p) => ({ ...p, [side]: true }));
    onOpenZongzi(side);
  };

  const handleOrchid = () => {
    setOrchidRipple(true);
    setShowOrchidText(true);
    window.setTimeout(() => setOrchidRipple(false), 1200);
    window.setTimeout(() => setShowOrchidText(false), 2500);
  };

  return (
    <>
      {/* 艾蒲熏香 — 参考交互，无亭柱 */}
      <motion.button
        type="button"
        aria-label="艾菖辟邪，点击查看"
        onClick={onOpenMugwort}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group absolute left-[4%] top-[14%] z-30 flex cursor-pointer flex-col items-center sm:left-[6%] md:top-[16%]"
      >
        <div className="h-5 w-px bg-red-600 shadow-xs" />
        <svg viewBox="0 0 30 70" fill="none" className="h-16 w-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] sm:h-20 sm:w-9" aria-hidden>
          <path d="M 15 20 C 5 25, 2 45, 12 55 C 10 40, 12 30, 15 20 Z" fill="#047857" opacity="0.95" />
          <path d="M 15 20 C 25 25, 28 45, 18 55 C 20 40, 18 30, 15 20 Z" fill="#065F46" opacity="0.9" />
          <path d="M 15 5 L 8 45 C 8 45, 15 50, 15 65 C 15 50, 22 45, 22 45 L 15 5 Z" fill="#059669" />
          <rect x="11" y="32" width="8" height="3" rx="1.5" fill="#EF4444" />
          <path d="M 14 35 Q 11 50, 12 60 M 16 35 Q 19 50, 18 60" stroke="#EF4444" strokeWidth="1" />
        </svg>
        <motion.div
          animate={{ y: [-10, -32], x: [-2, 2, -2], opacity: [0, 0.7, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeOut' }}
          className="absolute top-2 h-3 w-3 rounded-full bg-emerald-200/40 blur-[4px]"
          aria-hidden
        />
        <span className="mt-1 scale-90 rounded border border-emerald-500/30 bg-emerald-950/80 px-1.5 py-0.5 font-serif text-[8px] font-bold text-emerald-300 opacity-0 transition-opacity group-hover:opacity-100">
          艾蒲熏香
        </span>
      </motion.button>

      {/* 竞渡角标 */}
      <div className={`absolute right-[4%] top-[16%] z-25 flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] shadow-md sm:right-8 md:top-[18%] ${theme.vistaBadge}`}>
        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
        <span className="font-serif font-black">五日节景 · 江天竞渡</span>
      </div>

      {/* 参考：Rounded Dark Mahogany Table */}
      <div className={`absolute inset-x-[4%] bottom-0 z-25 h-[26%] min-h-[80px] rounded-t-4xl ${theme.table}`}>
        <div className={`absolute inset-x-[12%] top-1 flex h-5 justify-around overflow-hidden rounded-sm border-t bg-gradient-to-b shadow-xs ${theme.tableRunner}`}>
          {Array.from({ length: 180 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-black/15" />
          ))}
        </div>

        <div className="relative -top-3 mx-auto flex h-full w-full max-w-[95%] items-center justify-center gap-4 sm:gap-14 md:gap-20 lg:gap-24">
          {/* 兰汤 */}
          <div className="relative flex shrink-0 flex-col items-center transition-transform duration-200 hover:scale-110 active:scale-95">
            <button type="button" aria-label="兰汤祓禊" onClick={handleOrchid} className="group relative cursor-pointer">
              <div className="absolute -bottom-0.5 left-1/2 z-0 h-3 w-10 -translate-x-1/2 rounded-xs border border-amber-950/30 bg-gradient-to-t from-[#0e0402] to-[#220c02] shadow-sm" />
              <div className="relative z-10 flex h-12 w-12 items-center justify-center">
                <Leaf className="absolute -top-1 -right-0.5 h-3.5 w-3.5 text-emerald-400" aria-hidden />
                <svg className="h-[85%] w-[85%] drop-shadow-[0_2.5px_4px_rgba(4,120,87,0.3)]" viewBox="0 0 40 40" fill="none" aria-hidden>
                  <path d="M 6 18 Q 20 38, 34 18 Z" fill="url(#celadon-bowl-grad)" stroke="#0E756C" strokeWidth="0.8" />
                  <ellipse cx="20" cy="18" rx="13" ry="3.5" fill="#67E8F9" opacity="0.85" />
                  <path d="M 12 18 Q 22 15, 25 18" stroke="#047857" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M 14 17 Q 19 19, 21 16" stroke="#059669" strokeWidth="0.8" strokeLinecap="round" />
                  <ellipse cx="20" cy="18" rx="7" ry="1.8" stroke="rgba(255,255,255,0.4)" strokeWidth="0.4" className="animate-pulse" fill="none" />
                  {orchidRipple && (
                    <>
                      <motion.ellipse cx="20" cy="18" initial={{ rx: 2, ry: 0.5, opacity: 0.9 }} animate={{ rx: 12, ry: 3.2, opacity: 0 }} transition={{ duration: 0.8 }} stroke="#ffffff" strokeWidth="1" fill="none" />
                      <motion.ellipse cx="20" cy="18" initial={{ rx: 1, ry: 0.2, opacity: 1 }} animate={{ rx: 14, ry: 3.8, opacity: 0 }} transition={{ duration: 1.1, delay: 0.15 }} stroke="#e0f2fe" strokeWidth="0.8" fill="none" />
                    </>
                  )}
                  <defs>
                    <linearGradient id="celadon-bowl-grad" x1="20" y1="18" x2="20" y2="40" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#14B8A6" />
                      <stop offset="60%" stopColor="#0E9488" />
                      <stop offset="100%" stopColor="#115E59" />
                    </linearGradient>
                  </defs>
                </svg>
                <AnimatePresence>
                  {showOrchidText && (
                    <motion.span
                      initial={{ opacity: 0, y: 3 }}
                      animate={{ opacity: [0, 1, 0], y: -26 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2.2, ease: 'easeOut' }}
                      className="pointer-events-none absolute -top-7 left-1/2 w-20 -translate-x-1/2 text-center font-serif text-[10.5px] font-black tracking-widest text-teal-200 whitespace-nowrap drop-shadow-[0_1.5px_3.5px_rgba(4,47,31,0.95)]"
                    >
                      长夏无忧
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </button>
            <div className="mt-1 rounded-full border border-teal-600/25 bg-gradient-to-b from-teal-950/75 to-stone-950/80 px-2 py-0.5 shadow-[0_1.5px_5px_rgba(0,0,0,0.4)]">
              <span className="font-serif text-[7.5px] font-black leading-none tracking-widest text-teal-300">兰汤 · 祓禊</span>
            </div>
          </div>

          {/* 咸粽 */}
          <div className="relative flex shrink-0 flex-col items-center">
            <motion.button
              type="button"
              aria-label={`${ZONGZI_DATA.left.name}，点击查看`}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleZongzi('left')}
              className="relative h-12 w-12 cursor-pointer sm:h-16 sm:w-16"
            >
              <ZongziWidget tieColor={ZONGZI_DATA.left.tieColor} isOpened={zongziOpened.left} label="咸" />
              {!zongziOpened.left && (
                <motion.span animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.4, repeat: Infinity }} className="absolute -top-1 -right-1 text-amber-300">
                  <Sparkles className="h-3 w-3" aria-hidden />
                </motion.span>
              )}
            </motion.button>
            <div className="mt-1 rounded-full border border-amber-600/30 bg-amber-950/65 px-2 py-0.5 text-center max-sm:scale-95">
              <span className="font-serif text-[9px] font-black text-amber-300">{ZONGZI_DATA.left.sealChar}蛋黄肉粽</span>
            </div>
          </div>

          {/* 甜粽 */}
          <div className="relative flex shrink-0 flex-col items-center">
            <motion.button
              type="button"
              aria-label={`${ZONGZI_DATA.right.name}，点击查看`}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleZongzi('right')}
              className="relative h-12 w-12 cursor-pointer sm:h-16 sm:w-16"
            >
              <ZongziWidget tieColor={ZONGZI_DATA.right.tieColor} isOpened={zongziOpened.right} label="甜" />
              {!zongziOpened.right && (
                <motion.span animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.6, repeat: Infinity, delay: 0.3 }} className="absolute -top-1 -left-1 text-rose-400">
                  <Sparkles className="h-3 w-3" aria-hidden />
                </motion.span>
              )}
            </motion.button>
            <div className="mt-1 rounded-full border border-emerald-600/30 bg-emerald-950/65 px-2 py-0.5 text-center max-sm:scale-95">
              <span className="font-serif text-[9px] font-black text-emerald-300">{ZONGZI_DATA.right.sealChar}金丝蜜枣粽</span>
            </div>
          </div>

          {/* 笔墨寄情 */}
          <div className="relative flex shrink-0 flex-col items-center transition-transform duration-200 hover:scale-110 active:scale-95">
            <button type="button" aria-label="笔墨寄情，打开书信" onClick={onOpenLetter} className="group relative cursor-pointer">
              <div className="absolute -bottom-0.5 left-1/2 z-0 h-3 w-10 -translate-x-1/2 rounded-xs border border-amber-950/30 bg-gradient-to-t from-[#0e0402] to-[#220c02] shadow-sm" />
              <div className="relative z-10 flex h-12 w-12 items-center justify-center">
                <ScrollText className="absolute -top-1 -left-0.5 h-3.5 w-3.5 text-amber-400" aria-hidden />
                <svg className="h-[85%] w-[85%] drop-shadow-[0_2.5px_4px_rgba(217,119,6,0.3)]" viewBox="0 0 40 40" fill="none" aria-hidden>
                  <path d="M 8 12 Q 12 8, 32 10 Q 30 20, 32 30 Q 12 28, 8 32 Z" fill="#FDFBF7" stroke="#92400E" strokeWidth="0.8" />
                  <rect x="5" y="10" width="3" height="22" rx="1.5" fill="#D97706" />
                  <rect x="32" y="8" width="3" height="22" rx="1.5" fill="#D97706" />
                  <circle cx="26" cy="18" r="1.8" fill="#DC2626" opacity="0.8" />
                  <line x1="12" y1="13" x2="12" y2="27" stroke="#DC2626" strokeWidth="0.5" strokeDasharray="1 1.5" opacity="0.4" />
                  <line x1="16" y1="13" x2="16" y2="27" stroke="#DC2626" strokeWidth="0.5" strokeDasharray="1 1.5" opacity="0.4" />
                  <line x1="20" y1="13" x2="20" y2="27" stroke="#DC2626" strokeWidth="0.5" strokeDasharray="1 1.5" opacity="0.4" />
                  <line x1="24" y1="13" x2="24" y2="27" stroke="#DC2626" strokeWidth="0.5" strokeDasharray="1 1.5" opacity="0.4" />
                  <line x1="12" y1="28" x2="28" y2="12" stroke="#451A03" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="12" cy="28" r="1.2" fill="#FBBF24" />
                  <path d="M 12 28 L 8 32 C 10 32, 11 31, 12 28" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="0.3" />
                </svg>
                <span className="pointer-events-none absolute -top-7 left-1/2 w-20 -translate-x-1/2 text-center opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="rounded border border-amber-500/30 bg-amber-100 px-1 py-0.5 font-serif text-[8px] font-bold tracking-tight text-[#92400E] whitespace-nowrap">
                    展信佳音
                  </span>
                </span>
              </div>
            </button>
            <div className="mt-1 rounded-full border border-amber-600/25 bg-gradient-to-b from-amber-950/75 to-stone-950/80 px-2 py-0.5 shadow-[0_1.5px_5px_rgba(0,0,0,0.4)]">
              <span className="font-serif text-[7.5px] font-black leading-none tracking-widest text-amber-300">笔墨 · 寄情</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
