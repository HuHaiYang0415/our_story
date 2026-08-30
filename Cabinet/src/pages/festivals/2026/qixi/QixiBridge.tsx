import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, BookOpen, MoveUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { ViewportShell } from '@/shared/layout/ViewportShell';
import type { TimeTheme } from '@/shared/types';
import { applyDocumentTitle, getPageTitle } from '@/shared/config/siteConfig';
import { QIXI_MOMENT_ALT, QIXI_MOMENT_URL } from './assets';
import { QIXI_LETTER, QIXI_WHISPERS } from './letter';
import './qixi.css';

export interface QixiBridgeProps {
  theme: TimeTheme;
  onBackToArchive?: () => void;
  onBackToCabinet?: () => void;
}

type RevealStage = 'covered' | 'seen' | 'ready' | 'open';

const DRAG_THRESHOLD = 96;

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function PhotoWhispers({ stage }: { stage: RevealStage }) {
  const visibleCount = stage === 'covered' ? 0 : stage === 'seen' ? 1 : 3;

  return (
    <div className="qixi-whispers" aria-live="polite">
      {QIXI_WHISPERS.map((text, index) => (
        <motion.p
          key={text}
          className={`qixi-whisper qixi-whisper-${index + 1}`}
          initial={false}
          animate={{ opacity: index < visibleCount ? 1 : 0, y: index < visibleCount ? 0 : 8 }}
          transition={{ duration: 0.7, delay: index === 2 ? 0.32 : 0, ease: [0.22, 1, 0.36, 1] }}
        >
          {text}
        </motion.p>
      ))}
    </div>
  );
}

function Letter({ open }: { open: boolean }) {
  const paragraphs = QIXI_LETTER.content.split(/\n\s*\n/).map((paragraph) => paragraph.trim());

  return (
    <motion.article
      className="qixi-letter"
      aria-hidden={!open}
      initial={false}
      animate={{ opacity: open ? 1 : 0, y: open ? 0 : 30 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="qixi-letter-inner">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <footer className="qixi-letter-signoff">
          <p>{QIXI_LETTER.signature}</p>
          <p className="qixi-letter-date">{QIXI_LETTER.date}</p>
        </footer>
      </div>
    </motion.article>
  );
}

/**
 * 七夕页新叙事：只有一张真实照片，以及藏在照片背后的信。
 * 保留旧组件名是为了不扩大路由层改动；视觉与交互已完全替换。
 */
export function QixiBridge({ onBackToArchive, onBackToCabinet }: QixiBridgeProps) {
  const reduceMotion = useReducedMotion();
  const [stage, setStage] = useState<RevealStage>('covered');
  const [dragOffset, setDragOffset] = useState(0);
  const dragRef = useRef({ active: false, startY: 0, startOffset: 0 });

  useEffect(() => {
    applyDocumentTitle(getPageTitle('festival-2026-Qixi'));
  }, []);

  useEffect(() => {
    if (stage !== 'seen') return;
    const timer = window.setTimeout(() => setStage('ready'), reduceMotion ? 0 : 1250);
    return () => window.clearTimeout(timer);
  }, [reduceMotion, stage]);

  const revealPhoto = useCallback(() => {
    if (stage === 'covered') setStage('seen');
  }, [stage]);

  const openLetter = useCallback(() => {
    setDragOffset(0);
    setStage('open');
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (stage === 'open') return;
    dragRef.current = { active: true, startY: event.clientY, startOffset: dragOffset };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active || stage === 'open') return;
    const offset = clamp(dragRef.current.startOffset + dragRef.current.startY - event.clientY, 0, DRAG_THRESHOLD + 24);
    setDragOffset(offset);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    const { startOffset, startY } = dragRef.current;
    dragRef.current.active = false;
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      /* Pointer capture can already be released by the browser. */
    }

    const moved = Math.abs(event.clientY - startY);
    const finalOffset = clamp(startOffset + startY - event.clientY, 0, DRAG_THRESHOLD + 24);
    if (moved < 8) {
      revealPhoto();
      return;
    }
    if (finalOffset >= DRAG_THRESHOLD * 0.72) {
      openLetter();
      return;
    }
    setDragOffset(0);
    if (stage === 'covered') setStage('seen');
  };

  const photoLift = clamp(dragOffset / DRAG_THRESHOLD, 0, 1);
  const photoStyle = reduceMotion
    ? undefined
    : {
        transform: `translate3d(0, ${-photoLift * 104}px, 0) rotate(${photoLift * -0.8}deg)`,
      };

  return (
    <ViewportShell
      id="qixi-photo-back-root"
      className="qixi-page [&_.viewport-main]:overflow-y-auto [&_.viewport-main-inner]:min-h-full"
    >
      <main className={`qixi-stage qixi-stage-${stage}`}>
        <header className="qixi-page-header" data-qixi-ui>
          <button
            type="button"
            className="qixi-icon-button"
            onClick={onBackToArchive ?? onBackToCabinet}
            aria-label="返回上一页"
          >
            <ArrowLeft aria-hidden="true" size={18} strokeWidth={1.5} />
          </button>
        </header>

        <section className="qixi-memory" aria-label="一张被留下的照片">
          <div className="qixi-photo-stack">
            <div className="qixi-paper-shadow" aria-hidden="true" />
            <div
              className="qixi-photo-wrap"
              style={photoStyle}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              onDoubleClick={revealPhoto}
              role="button"
              tabIndex={0}
              aria-label={stage === 'open' ? '照片背后的信已打开' : '查看照片，并向上推开阅读背后的信'}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  if (stage === 'ready') openLetter();
                  else revealPhoto();
                }
              }}
            >
              <img src={QIXI_MOMENT_URL} alt={QIXI_MOMENT_ALT} draggable={false} />
              <div className="qixi-exposure" aria-hidden="true" />
              <div className="qixi-photo-grain" aria-hidden="true" />
            </div>
            <PhotoWhispers stage={stage} />
          </div>

          <div className="qixi-paper-underlay" aria-hidden="true">
            <div className="qixi-paper-line" />
            <div className="qixi-paper-line qixi-paper-line-short" />
          </div>
        </section>

        <div className="qixi-guidance" aria-live="polite">
          {stage === 'covered' && <p>轻轻碰一下</p>}
          {stage === 'ready' && (
            <button type="button" className="qixi-read-button" onClick={openLetter}>
              <BookOpen aria-hidden="true" size={15} strokeWidth={1.5} />
              <span>读照片背后的信</span>
            </button>
          )}
          {stage === 'open' && <p className="qixi-open-note">这张照片，是这封信没有说完的话。</p>}
        </div>

        <Letter open={stage === 'open'} />

        <p className="qixi-drag-hint" aria-hidden={stage !== 'ready'}>
          <MoveUpRight aria-hidden="true" size={14} strokeWidth={1.4} />
          向上推开照片
        </p>
      </main>
    </ViewportShell>
  );
}

export default QixiBridge;