import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ScrollText } from 'lucide-react';
import { DRAGON_BOAT_LETTER } from '../letter';
import type { DragonBoatTheme } from '../theme';

interface InkLetterModalProps {
  open: boolean;
  theme: DragonBoatTheme;
  isNight: boolean;
  onClose: () => void;
}

export function InkLetterModal({ open, theme, isNight, onClose }: InkLetterModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 md:items-center md:p-8 ${theme.modalOverlay}`}
      id="ink-letter-overlay"
    >
      {isNight && (
        <motion.div
          animate={{ opacity: [0.25, 0.45, 0.28] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(252,211,77,0.2)_0%,transparent_65%)]"
          aria-hidden
        />
      )}

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="ink-letter-title"
        initial={{ y: 40, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 40, scale: 0.96 }}
        transition={{ type: 'spring', damping: 26, stiffness: 300 }}
        className={[
          'relative my-4 w-full max-w-2xl rounded-2xl border p-5 shadow-2xl md:my-8 md:p-10',
          theme.modalPaper,
          'paper-texture',
        ].join(' ')}
        id="ink-letter-card"
      >
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          className={`absolute left-4 top-4 flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer md:left-6 md:top-6 ${theme.headerBtn}`}
        >
          <ArrowLeft className="h-4 w-4" />
          <span>合上卷轴</span>
        </button>

        <div className="pointer-events-none absolute right-5 top-5 select-none md:right-8 md:top-8">
          <div
            className={`flex h-16 w-14 rotate-6 flex-col items-center justify-between border-2 border-dashed p-1 ${isNight ? 'border-emerald-400/25 bg-emerald-950/40' : 'border-emerald-700/20 bg-emerald-50/80'}`}
          >
            <span className={`font-mono text-[7px] ${theme.modalMuted}`}>蒲节</span>
            <ScrollText className={`h-5 w-5 ${theme.modalMuted}`} />
            <span className={`font-mono text-[7px] ${theme.modalMuted}`}>2026</span>
          </div>
        </div>

        <div className="mb-8 mt-12 md:mt-14">
          <div
            className={`mb-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${isNight ? 'bg-emerald-400/15 text-emerald-200' : 'bg-emerald-500/10 text-emerald-800'}`}
          >
            <ScrollText className="h-3.5 w-3.5" />
            {/* <span>{DRAGON_BOAT_LETTER.date}</span> */}
          </div>
          <h1
            id="ink-letter-title"
            className="font-serif text-2xl font-semibold tracking-tight md:text-3xl"
          >
            {DRAGON_BOAT_LETTER.title}
          </h1>
          <div
            className={`mt-4 h-0.5 w-16 rounded-full ${isNight ? 'bg-emerald-400/30' : 'bg-emerald-800/20'}`}
          />
        </div>

        <div
          className={`font-hand min-h-[220px] whitespace-pre-wrap text-xl leading-relaxed md:text-2xl ${theme.modalInk}`}
        >
          {DRAGON_BOAT_LETTER.content}
        </div>
      </motion.div>
    </motion.div>
  );
}
