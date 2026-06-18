import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export type InkDisplayMode = 'horizontal' | 'vertical-pair' | 'finale';

interface InkDisplayProps {
  text: string;
  mode?: InkDisplayMode;
  onDark: boolean;
  className?: string;
}

function CharSpan({
  char,
  index,
  reduceMotion,
  className,
}: {
  char: string;
  index: number;
  reduceMotion: boolean;
  className?: string;
}) {
  if (char === ' ' || char === '\n') {
    return <span className="inline-block w-[0.35em]" aria-hidden />;
  }

  if (reduceMotion) {
    return <span className={className}>{char}</span>;
  }

  return (
    <motion.span
      className={`db-ink-char inline-block ${className ?? ''}`}
      style={{ transformOrigin: '50% 100%', transformPerspective: 600 }}
      initial={{ opacity: 0, y: 36, rotateX: -52, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
      transition={{
        delay: 0.08 + index * 0.07,
        duration: 0.62,
        ease: EASE_OUT,
      }}
    >
      {char}
    </motion.span>
  );
}

function HorizontalInk({ text, onDark, className }: InkDisplayProps) {
  const reduceMotion = useReducedMotion();
  const chars = [...text];

  return (
    <h2
      className={[
        'db-ink-display db-ink-display--hero',
        onDark ? 'db-ink-display--on-dark' : 'db-ink-display--on-light',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label={text}
    >
      {chars.map((char, i) => (
        <CharSpan key={`${char}-${i}`} char={char} index={i} reduceMotion={!!reduceMotion} />
      ))}
    </h2>
  );
}

function VerticalPairInk({ text, onDark }: InkDisplayProps) {
  const reduceMotion = useReducedMotion();
  const mid = Math.ceil(text.length / 2);
  const line1 = text.slice(0, mid);
  const line2 = text.slice(mid);

  return (
    <div className="db-ink-vertical-pair" aria-label={text}>
      {[line1, line2].map((line, row) => (
        <div key={row} className="db-ink-vertical-row">
          {[...line].map((char, i) => (
            <CharSpan
              key={`${row}-${char}-${i}`}
              char={char}
              index={row * 4 + i}
              reduceMotion={!!reduceMotion}
              className={onDark ? 'db-ink-display--on-dark' : 'db-ink-display--on-light'}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function FinaleInk({ onDark }: { onDark: boolean }) {
  const reduceMotion = useReducedMotion();
  const parts = ['永', '远', '「', '粽', '」', '意', '你'];
  let idx = 0;

  return (
    <h2
      className={[
        'db-ink-display db-ink-display--finale',
        onDark ? 'db-ink-display--on-dark' : 'db-ink-display--on-light',
      ].join(' ')}
      aria-label="永远粽意你"
    >
      {parts.map((char) => {
        const i = idx++;
        const isZong = char === '粽';
        if (reduceMotion) {
          return (
            <span key={char + i} className={isZong ? 'db-zong-accent' : undefined}>
              {char}
            </span>
          );
        }
        return (
          <motion.span
            key={char + i}
            className={`db-ink-char inline-block ${isZong ? 'db-zong-accent' : ''}`}
            style={{ transformOrigin: '50% 100%' }}
            initial={{ opacity: 0, y: 28, scale: isZong ? 0.5 : 0.85, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{
              delay: 0.1 + i * 0.09,
              duration: isZong ? 0.75 : 0.55,
              ease: EASE_OUT,
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </h2>
  );
}

export function InkDisplay({ text, mode = 'horizontal', onDark, className }: InkDisplayProps) {
  if (mode === 'finale') return <FinaleInk onDark={onDark} />;
  if (mode === 'vertical-pair') return <VerticalPairInk text={text} onDark={onDark} />;
  return <HorizontalInk text={text} onDark={onDark} className={className} />;
}
