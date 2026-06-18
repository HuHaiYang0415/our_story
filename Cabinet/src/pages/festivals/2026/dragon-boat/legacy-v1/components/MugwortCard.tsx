import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Leaf } from 'lucide-react';
import type { DragonBoatTheme } from '../theme';

interface MugwortCardProps {
  open: boolean;
  theme: DragonBoatTheme;
  onClose: () => void;
}

export function MugwortCard({ open, theme, onClose }: MugwortCardProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="关闭"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-40 cursor-pointer ${theme.modalOverlay}`}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="mugwort-card-title"
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 12 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className={[
              'fixed left-1/2 top-1/2 z-50 w-[min(92vw,24rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border-t-8 border-emerald-600 p-6 shadow-2xl sm:w-[26rem] sm:p-8',
              theme.panel,
            ].join(' ')}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 cursor-pointer rounded-full border border-stone-300 p-1.5"
              aria-label="关闭"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="mb-3 border-b border-stone-300/80 pb-3 text-center">
              <p className="font-mono text-[10px] tracking-widest text-emerald-700">艾蒲悬窗 · 端阳清芬</p>
              <h2 id="mugwort-card-title" className="mt-1 flex items-center justify-center gap-2 font-serif text-lg font-black text-emerald-900">
                <Leaf className="h-5 w-5 text-emerald-600" aria-hidden />
                艾蒲熏香 · 避疫辟邪
              </h2>
            </div>
            <div className="rounded-xl border border-amber-800/15 bg-[#FFFDF4] p-4">
              <p className="text-center font-serif text-sm font-black text-emerald-800">
                门悬艾叶招百福，艾香一缕祝温良
              </p>
              <p className="mt-3 indent-6 text-justify font-serif text-xs leading-relaxed text-stone-700 sm:text-sm">
                端午悬艾挂菖，草木清芬驱邪避害。愿烦忧随烟气散尽，留下与你相守的晴朗长夏。
              </p>
              <p className="mt-3 indent-6 text-justify font-serif text-xs leading-relaxed text-emerald-900 sm:text-sm">
                （可在此补充挂艾习俗或私人祝语）
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mt-5 w-full cursor-pointer rounded-xl bg-emerald-900 py-2.5 font-serif text-xs font-bold text-amber-100 hover:bg-emerald-800"
            >
              收起香卷
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
