import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shuffle } from 'lucide-react';
import type { DragonBoatTheme } from '../theme';
import { ZONGZI_DATA, type ZongziSide } from '../zongzi';

export type PanelKind = 'zongzi-left' | 'zongzi-right' | 'boats' | null;

interface FestivalPanelProps {
  kind: PanelKind;
  theme: DragonBoatTheme;
  onClose: () => void;
  onSwitchZongzi?: (side: ZongziSide) => void;
}

const BOATS_COPY = {
  title: '江上竞渡',
  body: '三舟并渡，鼓声与浪花同在。远、中、近处的龙舟各怀节奏，像这一年里不同时刻的心动。\n\n（可在此补充竞渡见闻或照片）',
};

export function FestivalPanel({ kind, theme, onClose, onSwitchZongzi }: FestivalPanelProps) {
  const zongziSide =
    kind === 'zongzi-left' ? 'left' : kind === 'zongzi-right' ? 'right' : null;
  const zongzi = zongziSide ? ZONGZI_DATA[zongziSide] : null;

  return (
    <AnimatePresence>
      {kind && (
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
            aria-labelledby="festival-panel-title"
            initial={{ scale: 0.92, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 16 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className={[
              'fixed left-1/2 top-1/2 z-50 w-[min(92vw,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl p-6 shadow-2xl sm:p-8',
              theme.panel,
              theme.panelBorderTop,
            ].join(' ')}
          >
            {zongzi ? (
              <>
                <div className="mb-4 border-b border-stone-300/80 pb-3 text-center">
                  <p className="font-mono text-[10px] tracking-widest text-stone-500">
                    拆封风物 · 自制端午
                  </p>
                  <h2 id="festival-panel-title" className={`mt-1 font-serif text-lg font-black ${theme.panelAccent}`}>
                    {zongzi.name}
                  </h2>
                  <p className="mt-1 text-[11px] leading-relaxed text-stone-500">{zongzi.description}</p>
                </div>
                <div className="relative my-4 rounded-xl border border-amber-800/15 bg-[#FFFDF4] p-4">
                  <p className={`text-center font-serif text-sm font-black ${theme.panelAccent}`}>{zongzi.poem}</p>
                  <p className="mt-3 indent-6 text-justify font-serif text-xs leading-relaxed text-stone-700 sm:text-sm">
                    {zongzi.fortune}
                  </p>
                </div>
                <p className="rounded-lg border border-emerald-100 bg-emerald-50/80 p-2 text-center font-serif text-[10px] leading-relaxed text-emerald-900">
                  寄语：{zongzi.tip}
                </p>
                <div className="mt-5 flex gap-2">
                  {onSwitchZongzi && (
                    <button
                      type="button"
                      onClick={() => onSwitchZongzi(zongziSide === 'left' ? 'right' : 'left')}
                      className="flex flex-1 cursor-pointer items-center justify-center gap-1 rounded-xl border border-stone-300 bg-stone-100 py-2.5 text-xs font-bold text-stone-700 transition-colors hover:bg-stone-200 active:scale-95"
                    >
                      <Shuffle className="h-3.5 w-3.5" />
                      拆解另一只
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex flex-1 cursor-pointer items-center justify-center rounded-xl bg-emerald-900 py-2.5 text-xs font-bold text-amber-100 transition-colors hover:bg-emerald-800 active:scale-95"
                  >
                    收起书卷
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h2 id="festival-panel-title" className={`font-serif text-xl font-black ${theme.panelAccent}`}>
                    {BOATS_COPY.title}
                  </h2>
                  <button type="button" onClick={onClose} className="cursor-pointer rounded-full border border-stone-300 p-2" aria-label="关闭">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className={`whitespace-pre-wrap font-serif text-sm leading-relaxed ${theme.panelMuted}`}>
                  {BOATS_COPY.body}
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-6 w-full cursor-pointer rounded-xl bg-emerald-900 py-2.5 text-xs font-bold text-amber-100 hover:bg-emerald-800"
                >
                  收起
                </button>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
