import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import flowerBouquetSvg from '../images/flower-bouquet.svg?url';

const LONG_PRESS_MS = 480;
const MOVE_CANCEL_PX = 10;

export interface FlowerBouquetProps {
  onClick: () => void;
}

/** 展柜第三层「相伴花期」：单击进页；长按放大预览，再点屏幕归位 */
export function FlowerBouquet({ onClick }: FlowerBouquetProps) {
  const reduceMotion = useReducedMotion();
  const [previewOpen, setPreviewOpen] = useState(false);
  const timerRef = useRef<number | null>(null);
  const longFiredRef = useRef(false);
  const originRef = useRef<{ x: number; y: number } | null>(null);
  const ignoreDismissUntilRef = useRef(0);

  const clearTimer = () => {
    if (timerRef.current != null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => () => clearTimer(), []);

  useEffect(() => {
    if (!previewOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPreviewOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [previewOpen]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (previewOpen || e.button !== 0) return;
    longFiredRef.current = false;
    originRef.current = { x: e.clientX, y: e.clientY };
    clearTimer();
    timerRef.current = window.setTimeout(() => {
      longFiredRef.current = true;
      timerRef.current = null;
      ignoreDismissUntilRef.current = Date.now() + 400;
      setPreviewOpen(true);
    }, LONG_PRESS_MS);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const origin = originRef.current;
    if (!origin || timerRef.current == null) return;
    const dx = e.clientX - origin.x;
    const dy = e.clientY - origin.y;
    if (dx * dx + dy * dy > MOVE_CANCEL_PX * MOVE_CANCEL_PX) {
      clearTimer();
    }
  };

  const onPointerUp = () => {
    const wasLong = longFiredRef.current;
    clearTimer();
    originRef.current = null;
    if (!wasLong && !previewOpen) {
      onClick();
    }
  };

  const onPointerCancel = () => {
    clearTimer();
    originRef.current = null;
  };

  return (
    <>
      <div
        className="relative cursor-pointer group flex flex-col items-center select-none w-16 h-20 md:w-20 md:h-24 touch-manipulation"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        onContextMenu={(e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        }}
        role="button"
        tabIndex={0}
        id="flower-bouquet-entrance"
        aria-label="进入相恋时光纪念，长按可放大预览花束"
      >
        <motion.div
          whileHover={{
            scale: 1.12,
            rotate: [0, -3, 3, -3, 0],
            transition: { duration: 0.65, ease: 'easeInOut' },
          }}
          className="w-full h-full flex items-end justify-center"
        >
          <img
            src={flowerBouquetSvg}
            alt=""
            draggable={false}
            className="w-full h-full object-contain drop-shadow-[0_4px_8px_rgba(141,107,70,0.15)] pointer-events-none"
          />
        </motion.div>

        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 p-2.5 bg-[#201511] text-[#FDF8F5] text-[11px] rounded-xl shadow-2xl pointer-events-none opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-500 z-50 text-center font-sans border border-[#8C6D53]/20 transform group-hover:-translate-y-1.5 group-focus-visible:-translate-y-1.5">
          <div className="font-bold text-[#EAA813] text-[12px] mb-0.5 font-serif tracking-wider">
            相伴花期
          </div>
          单击进入 · 长按放大预览
        </div>
      </div>

      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {previewOpen && (
              <motion.button
                type="button"
                key="bouquet-preview"
                className="fixed inset-0 z-[80] flex items-center justify-center cursor-zoom-out border-0 p-6"
                style={{
                  background: 'rgba(20, 14, 10, 0.55)',
                  backdropFilter: 'blur(6px)',
                }}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => {
                  if (Date.now() < ignoreDismissUntilRef.current) return;
                  setPreviewOpen(false);
                }}
                aria-label="关闭花束预览"
              >
                <motion.img
                  src={flowerBouquetSvg}
                  alt="相伴花期花束"
                  draggable={false}
                  initial={reduceMotion ? false : { scale: 0.72, opacity: 0.85 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={reduceMotion ? undefined : { scale: 0.88, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="max-h-[min(72vh,520px)] max-w-[min(86vw,420px)] w-auto h-auto object-contain drop-shadow-[0_16px_40px_rgba(0,0,0,0.35)] pointer-events-none select-none"
                />
              </motion.button>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
