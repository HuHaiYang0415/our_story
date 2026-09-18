import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

interface InkSubtitleProps {
  text: string;
  onDark: boolean;
  delay?: number;
}

export function InkSubtitle({ text, onDark, delay = 0.42 }: InkSubtitleProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="db-ink-subtitle-wrap">
      <motion.p
        className={['db-ink-subtitle', onDark ? 'text-emerald-100/85' : 'text-stone-600'].join(' ')}
        initial={reduceMotion ? {} : { opacity: 0, y: 14, letterSpacing: '0.2em' }}
        animate={{ opacity: 1, y: 0, letterSpacing: '0.08em' }}
        transition={{ delay: reduceMotion ? 0 : delay, duration: 0.55, ease: EASE_OUT }}
      >
        {text}
      </motion.p>
      <motion.div
        className={onDark ? 'db-ink-rule db-ink-rule--light' : 'db-ink-rule db-ink-rule--dark'}
        initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: reduceMotion ? 0 : delay + 0.12, duration: 0.65, ease: EASE_OUT }}
        aria-hidden
      />
    </div>
  );
}

interface StaggerLinesProps {
  lines: string[];
  onDark: boolean;
  variant?: 'center' | 'letter' | 'asymmetric';
  baseDelay?: number;
  exiting?: boolean;
  exitBaseDelay?: number;
}

export function StaggerLines({
  lines,
  onDark,
  variant = 'center',
  baseDelay = 0.52,
  exiting = false,
  exitBaseDelay = 0,
}: StaggerLinesProps) {
  const reduceMotion = useReducedMotion();
  const isLetter = variant === 'letter';
  const isAsymmetric = variant === 'asymmetric';

  return (
    <div
      className={[
        'db-stagger-lines',
        isLetter ? 'db-stagger-lines--letter' : '',
        isAsymmetric ? 'db-stagger-lines--asymmetric' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {lines.map((line, i) => {
        const isSalute = isLetter && i === 0;
        const isSign = isLetter && i === lines.length - 1 && lines.length > 1;

        return (
        <motion.p
          key={`${line}-${i}`}
          className={[
            'db-stagger-line',
            onDark ? 'text-stone-200/95' : 'text-stone-700',
            isLetter ? 'db-stagger-line--letter' : '',
            isSalute ? 'db-stagger-line--letter-salute' : '',
            isSign ? 'db-stagger-line--letter-sign' : '',
          ].join(' ')}
          initial={
            reduceMotion || exiting
              ? false
              : {
                  opacity: 0,
                  x: isLetter ? 24 : isAsymmetric ? -16 : 0,
                  y: isLetter ? 0 : 18,
                  filter: 'blur(5px)',
                }
          }
          animate={
            exiting
              ? { opacity: 0, x: isAsymmetric ? 12 : 0, y: 20, filter: 'blur(6px)' }
              : { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }
          }
          transition={
            exiting
              ? {
                  delay: reduceMotion ? 0 : exitBaseDelay + i * 0.08,
                  duration: 0.52,
                  ease: [0.4, 0, 0.2, 1],
                }
              : {
                  delay: reduceMotion ? 0 : baseDelay + i * 0.14,
                  duration: 0.58,
                  ease: EASE_OUT,
                }
          }
        >
          {line}
        </motion.p>
        );
      })}
    </div>
  );
}
