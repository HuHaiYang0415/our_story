import React from 'react';
import { motion } from 'motion/react';
import type { TimeTheme } from '../types';

type Variant = 'cabinet' | 'envelope' | 'gallery';

interface SeasonAtmosphereProps {
  theme: TimeTheme;
  variant?: Variant;
}

/** 信盒 / 相册页内层氛围（参考 our_story EnvelopeStack / PolaroidGallery） */
export function SeasonAtmosphere({ theme, variant = 'cabinet' }: SeasonAtmosphereProps) {
  const zBase = variant === 'cabinet' ? 'z-10' : 'z-0';
  const zParticles = variant === 'cabinet' ? 'z-30' : 'z-30';
  const particleScale = variant === 'cabinet' ? 1 : 0.65;

  const count = variant === 'cabinet' ? 14 : 8;

  return (
    <>
      {theme.season === 'spring' && !theme.isNight && (
        <>
          <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-[#93C572]/3 to-white/10 pointer-events-none ${zBase} mix-blend-overlay`} />
          {variant !== 'cabinet' && (
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-pink-100/15 blur-3xl pointer-events-none" />
          )}
        </>
      )}
      {theme.season === 'spring' && theme.isNight && (
        <>
          <motion.div
            animate={{ opacity: [0.75, 0.95, 0.75] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(244,114,182,0.13)_0%,rgba(18,15,13,0.55)_85%)] pointer-events-none ${zBase}`}
          />
          <div className={`absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-pink-950/20 to-transparent pointer-events-none ${zBase}`} />
          <ParticleField
            count={Math.round(count * particleScale)}
            className={zParticles}
            render={(i) => (
              <motion.div
                key={`spring-sparkle-${i}`}
                initial={{ x: 0, y: `${35 + (i % 4) * 15}%`, opacity: 0, scale: 0.4 }}
                animate={{
                  opacity: [0, 0.9, 0],
                  y: [`${35 + (i % 4) * 15}%`, `${35 + (i % 4) * 15 - 60}px`, `${35 + (i % 4) * 15 - 15}px`],
                  x: [0, 18, -18, 0],
                  scale: [0.4, 1.2, 0.5],
                }}
                transition={{ repeat: Infinity, duration: 6.5 + (i % 5), delay: i * 0.45, ease: 'easeInOut' }}
                style={{ left: `${5 + i * 7.5}%` }}
                className="absolute w-1.5 h-1.5 rounded-full bg-pink-100 pointer-events-none filter blur-[0.4px] shadow-[0_0_8px_#f472b6,0_0_15px_#db2777]"
              />
            )}
          />
        </>
      )}

      {theme.season === 'summer' && !theme.isNight && (
        <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/8 to-transparent pointer-events-none ${zBase} mix-blend-overlay`} />
      )}
      {theme.season === 'summer' && theme.isNight && (
        <>
          <motion.div
            animate={{ opacity: [0.8, 0.98, 0.8] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(20,184,166,0.13)_0%,rgba(18,15,13,0.52)_90%)] pointer-events-none ${zBase}`}
          />
          <div className={`absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-emerald-950/20 to-transparent pointer-events-none ${zBase}`} />
          <ParticleField count={Math.round(count * particleScale)} className={zParticles} render={(i) => (
            <motion.div
              key={`firefly-${i}`}
              initial={{ x: 0, y: `${25 + (i % 4) * 16}%`, opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0, 0.9, 0, 0.9, 0],
                y: [`${25 + (i % 4) * 16}%`, `${25 + (i % 4) * 16 - 40}px`, `${25 + (i % 4) * 16 + 30}px`, `${25 + (i % 4) * 16}%`],
                x: [0, 25, -25, 0],
                scale: [0.5, 1.25, 0.7, 1.35, 0.5],
              }}
              transition={{ repeat: Infinity, duration: 8 + (i % 5), delay: i * 0.6, ease: 'easeInOut' }}
              style={{ left: `${5 + i * 7}%` }}
              className="absolute w-2 h-2 rounded-full bg-amber-200 pointer-events-none filter blur-[1px] shadow-[0_0_8px_#fef08a,0_0_15px_#eab308]"
            />
          )} />
        </>
      )}

      {theme.season === 'autumn' && !theme.isNight && (
        <div className={`absolute inset-0 bg-gradient-to-b from-amber-500/5 via-orange-400/2 to-transparent pointer-events-none ${zBase} mix-blend-color-burn`} />
      )}
      {theme.season === 'autumn' && theme.isNight && (
        <>
          <motion.div
            animate={{ opacity: [0.75, 0.96, 0.75] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(249,115,22,0.15)_0%,rgba(18,15,13,0.58)_85%)] pointer-events-none ${zBase}`}
          />
          <div className={`absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-amber-950/20 via-orange-950/10 to-transparent pointer-events-none ${zBase}`} />
          <ParticleField count={Math.round(count * particleScale)} className={zParticles} render={(i) => (
            <motion.div
              key={`autumn-ember-${i}`}
              initial={{ x: 0, y: `${45 + (i % 4) * 15}%`, opacity: 0, scale: 0.4 }}
              animate={{
                opacity: [0, 0.95, 0],
                y: [`${45 + (i % 4) * 15}%`, `${45 + (i % 4) * 15 - 70}px`, `${45 + (i % 4) * 15 - 130}px`],
                x: [0, 24, -12, 6],
                scale: [0.4, 1.25, 0.5],
              }}
              transition={{ repeat: Infinity, duration: 5.5 + (i % 4), delay: i * 0.4, ease: 'easeInOut' }}
              style={{ left: `${6 + i * 8}%` }}
              className="absolute w-1.5 h-1.5 rounded-full bg-amber-400 pointer-events-none filter blur-[0.4px] shadow-[0_0_10px_#f97316,0_0_18px_#ea580c]"
            />
          )} />
        </>
      )}

      {theme.season === 'winter' && !theme.isNight && (
        <div className={`absolute inset-0 bg-gradient-to-b from-[#E2E8F0]/12 via-transparent to-[#CBD5E1]/8 pointer-events-none ${zBase}`} />
      )}
      {theme.season === 'winter' && theme.isNight && (
        <>
          <motion.div
            animate={{ opacity: [0.72, 0.94, 0.7, 0.86, 0.72], scale: [1, 1.05, 0.98, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            className={`absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.22)_0%,rgba(18,15,13,0)_75%)] pointer-events-none ${zBase}`}
          />
          <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.06)_0%,rgba(15,23,42,0.55)_90%)] pointer-events-none ${zBase}`} />
          <div className={`absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-orange-950/15 to-transparent pointer-events-none ${zBase}`} />
          <ParticleField count={Math.round(count * particleScale)} className={zParticles} render={(i) => (
            <motion.div
              key={`winter-ember-${i}`}
              initial={{ x: 0, y: `${35 + (i % 5) * 15}%`, opacity: 0, scale: 0.3 }}
              animate={{
                opacity: [0, 0.85, 0],
                y: [`${35 + (i % 5) * 15}%`, `${35 + (i % 5) * 15 - 55}px`, `${35 + (i % 5) * 15 - 110}px`],
                x: [0, 15, -15, 0],
                scale: [0.3, 0.95, 0.4],
              }}
              transition={{ repeat: Infinity, duration: 6.5 + (i % 5), delay: i * 0.35, ease: 'easeInOut' }}
              style={{ left: `${10 + i * 6.5}%` }}
              className="absolute w-1 h-1 rounded-full bg-amber-100 pointer-events-none filter blur-[0.2px] shadow-[0_0_6px_#f59e0b]"
            />
          )} />
        </>
      )}
    </>
  );
}

function ParticleField({
  count,
  className,
  render,
}: {
  count: number;
  className: string;
  render: (i: number) => React.ReactNode;
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => render(i))}
    </div>
  );
}
