import React from 'react';
import { motion } from 'motion/react';
import type { TimeTheme } from '@/shared/types';
import {
  layoutFallingParticle,
  layoutFirefly,
  FIREFLY_COUNT,
  STAGE_FALL_TOP,
} from '@/shared/motion/stageMotion';
import { SpringSwallows } from './decor/CabinetSeasonalDecor';

export function CabinetAtmosphere({ theme }: { theme: TimeTheme }) {
  return (
    <>      {/* Spring (春) Decors */}
      {theme.season === 'spring' && theme.isNight && (
        <>
          {/* Soft peach-rose romantic spring night glow */}
          <motion.div
            animate={{ opacity: [0.75, 0.95, 0.75] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(244,114,182,0.13)_0%,rgba(18,15,13,0.55)_85%)] pointer-events-none z-10"
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-pink-950/20 to-transparent pointer-events-none z-10" />
          {/* Drifting glowing spring flower spores / star particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
            {Array.from({ length: 14 }).map((_, i) => {
              const startLeft = 5 + i * 7.5;
              return (
                <motion.div
                  key={`spring-sparkle-${i}`}
                  initial={{
                    x: 0,
                    y: `${35 + (i % 4) * 15}%`,
                    opacity: 0,
                    scale: 0.4,
                  }}
                  animate={{
                    opacity: [0, 0.9, 0],
                    y: [`${35 + (i % 4) * 15}%`, `${35 + (i % 4) * 15 - 60}px`, `${35 + (i % 4) * 15 - 15}px`],
                    x: [0, 18, -18, 0],
                    scale: [0.4, 1.2, 0.5],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6.5 + (i % 5),
                    delay: i * 0.45,
                    ease: 'easeInOut',
                  }}
                  style={{ left: `${startLeft}%` }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-pink-100 pointer-events-none filter blur-[0.4px] shadow-[0_0_8px_#f472b6,0_0_15px_#db2777]"
                />
              );
            })}
          </div>
        </>
      )}
      {theme.season === 'spring' && (
        <SpringSwallows isNight={theme.isNight} />
      )}
      {theme.season === 'spring' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
          {Array.from({ length: 16 }).map((_, i) => {
            const layout = layoutFallingParticle(i, 16, 'petal');
            return (
              <motion.div
                key={`petal-${i}`}
                className="absolute"
                style={{ left: `${layout.startLeft}%` }}
                initial={{
                  top: STAGE_FALL_TOP[0],
                  x: 0,
                  opacity: 0,
                  rotate: 0,
                  scale: layout.scale,
                }}
                animate={{
                  top: [...STAGE_FALL_TOP],
                  x: [0, layout.windDriftRange * 0.4, layout.windDriftRange],
                  opacity: [0, 0.85, 0.85, 0],
                  rotate: [0, layout.rotationDegree ?? 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: layout.duration,
                  delay: layout.delay,
                  ease: 'linear',
                }}
              >
                <svg className="w-4 h-4 text-pink-300 fill-current opacity-75" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Summer (夏) Decors */}
      {theme.season === 'summer' && theme.isNight && (
        <>
          {/* Cozy forest pool nighttime depth gradient with breathing pulse */}
          <motion.div
            animate={{ opacity: [0.8, 0.98, 0.8] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(20,184,166,0.13)_0%,rgba(18,15,13,0.52)_90%)] pointer-events-none z-10"
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-emerald-950/20 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
            {Array.from({ length: FIREFLY_COUNT }).map((_, i) => {
              const layout = layoutFirefly(i);
              const xDrift = layout.flipX
                ? [0, -layout.wiggleX, layout.wiggleX * 0.75, -layout.wiggleX * 0.35, 0]
                : [0, layout.wiggleX, -layout.wiggleX * 0.75, layout.wiggleX * 0.35, 0];

              return (
                <motion.div
                  key={`firefly-${i}`}
                  initial={{ x: 0, y: 0, opacity: layout.initialOpacity, scale: layout.scale }}
                  animate={{
                    opacity: [
                      layout.initialOpacity,
                      layout.peakOpacity,
                      layout.dimOpacity,
                      layout.peakOpacity * 0.82,
                      layout.initialOpacity,
                    ],
                    y: [0, -layout.wiggleYUp, layout.wiggleYDown, -layout.wiggleYUp * 0.4, 0],
                    x: xDrift,
                    scale: [
                      layout.scale,
                      layout.scale * layout.scaleMulHigh,
                      layout.scale * layout.scaleMulLow,
                      layout.scale * layout.scaleMulMid,
                      layout.scale,
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: layout.duration,
                    delay: -layout.phase * layout.duration,
                    ease: 'easeInOut',
                  }}
                  style={{ left: `${layout.startLeft}%`, top: `${layout.baseTop}%` }}
                  className="absolute w-2 h-2 rounded-full bg-amber-200 pointer-events-none filter blur-[1px] shadow-[0_0_8px_#fef08a,0_0_15px_#eab308]"
                />
              );
            })}
          </div>
        </>
      )}

      {/* Autumn (秋) Decors */}
      {theme.season === 'autumn' && !theme.isNight && (
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-orange-400/2 to-transparent pointer-events-none z-10 mix-blend-color-burn ios-safe-no-blend" />
      )}
      {theme.season === 'autumn' && theme.isNight && (
        <>
          {/* Warm campfire / retro autumn twilight glowing ambiance */}
          <motion.div
            animate={{ opacity: [0.75, 0.96, 0.75] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(249,115,22,0.15)_0%,rgba(18,15,13,0.58)_85%)] pointer-events-none z-10"
          />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-amber-950/25 via-orange-950/15 to-transparent pointer-events-none z-10" />
          {/* Floating glowing golden leaves and sparks/embers */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
            {Array.from({ length: 14 }).map((_, i) => {
              const startLeft = 6 + i * 8;
              return (
                <motion.div
                  key={`autumn-fire-ember-${i}`}
                  initial={{
                    x: 0,
                    y: `${45 + (i % 4) * 15}%`,
                    opacity: 0,
                    scale: 0.4,
                  }}
                  animate={{
                    opacity: [0, 0.95, 0],
                    y: [`${45 + (i % 4) * 15}%`, `${45 + (i % 4) * 15 - 70}px`, `${45 + (i % 4) * 15 - 130}px`],
                    x: [0, 24, -12, 6],
                    scale: [0.4, 1.25, 0.5],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5.5 + (i % 4),
                    delay: i * 0.4,
                    ease: 'easeInOut',
                  }}
                  style={{ left: `${startLeft}%` }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-amber-400 pointer-events-none filter blur-[0.4px] shadow-[0_0_10px_#f97316,0_0_18px_#ea580c]"
                />
              );
            })}
          </div>
        </>
      )}
      {theme.season === 'autumn' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
          {Array.from({ length: 15 }).map((_, i) => {
            const layout = layoutFallingParticle(i, 15, 'leaf');
            return (
              <motion.div
                key={`leaf-${i}`}
                className="absolute"
                style={{ left: `${layout.startLeft}%` }}
                initial={{
                  top: STAGE_FALL_TOP[0],
                  x: 0,
                  opacity: 0,
                  rotate: 0,
                  scale: layout.scale,
                }}
                animate={{
                  top: [...STAGE_FALL_TOP],
                  x: [0, layout.windDriftRange * 0.4, layout.windDriftRange],
                  opacity: [0, 0.85, 0.85, 0],
                  rotate: [0, layout.rotationDegree ?? 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: layout.duration,
                  delay: layout.delay,
                  ease: 'linear',
                }}
              >
                <svg className="w-5 h-5 text-amber-700/40 fill-current" viewBox="0 0 24 24">
                  <path d="M17 8C17 8 13.5 1 12 1C10.5 1 7 8 7 8C5.2 8 4 9.5 4 11.2C4 13.5 6.5 15 8 15C8 15 7.5 19 9 21C10.5 23 12 23 12 23C12 23 13.5 23 15 21C16.5 19 16 15 16 15C17.5 15 20 13.5 20 11.2C20 9.5 18.8 8 17 8Z"/>
                </svg>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Winter (冬) Decors */}
      {theme.season === 'winter' && theme.isNight && (
        <>
          {/* Soft, flickering fireplace warm hearth reflection from bottom-right corner */}
          <motion.div
            animate={{
              opacity: [0.72, 0.94, 0.7, 0.86, 0.72],
              scale: [1, 1.05, 0.98, 1.03, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
              ease: 'easeInOut',
            }}
            className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.22)_0%,rgba(18,15,13,0)_75%)] pointer-events-none z-11"
          />
          {/* Overall moonlit backdrop with warm hearth glow reflection */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.06)_0%,rgba(15,23,42,0.55)_90%)] pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-orange-950/15 to-transparent pointer-events-none z-10" />

          {/* Golden fireplace flurries / ember sparks rising */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
            {Array.from({ length: 15 }).map((_, i) => {
              const startLeft = 10 + i * 6.5;
              return (
                <motion.div
                  key={`winter-fireplace-ember-${i}`}
                  initial={{
                    x: 0,
                    y: `${35 + (i % 5) * 15}%`,
                    opacity: 0,
                    scale: 0.3,
                  }}
                  animate={{
                    opacity: [0, 0.85, 0],
                    y: [`${35 + (i % 5) * 15}%`, `${35 + (i % 5) * 15 - 55}px`, `${35 + (i % 5) * 15 - 110}px`],
                    x: [0, 15, -15, 0],
                    scale: [0.3, 0.95, 0.4],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6.5 + (i % 5),
                    delay: i * 0.35,
                    ease: 'easeInOut',
                  }}
                  style={{ left: `${startLeft}%` }}
                  className="absolute w-1 h-1 rounded-full bg-amber-100 pointer-events-none filter blur-[0.2px] shadow-[0_0_6px_#f59e0b]"
                />
              );
            })}
          </div>
        </>
      )}
      {theme.season === 'winter' && !theme.isNight && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(251,191,36,0.12)_0%,rgba(253,251,247,0)_60%)] pointer-events-none z-10" />
      )}
      {theme.season === 'winter' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
          {Array.from({ length: 32 }).map((_, i) => {
            const layout = layoutFallingParticle(i, 32, 'snow');
            return (
              <motion.div
                key={`snow-${i}`}
                className="absolute"
                style={{ left: `${layout.startLeft}%` }}
                initial={{
                  top: STAGE_FALL_TOP[0],
                  x: 0,
                  opacity: 0,
                  scale: layout.scale,
                }}
                animate={{
                  top: [...STAGE_FALL_TOP],
                  x: [0, layout.windDriftRange * 0.5, layout.windDriftRange],
                  opacity: [0, 0.85, 0.85, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: layout.duration,
                  delay: layout.delay,
                  ease: 'linear',
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/75 filter blur-[0.3px]" />
              </motion.div>
            );
          })}
        </div>
      )}

    </>
  );
}
