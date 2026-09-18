import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { RelationshipAmbient } from './AmbientAudio';
import { StoryBackButton, StoryMuteButton } from '@/shared/ui/StoryControls';
import {
  PRINCE_SVG,
  daysSinceRelationship,
  resolvePrincePeriod,
} from './assets';
import type { RelationshipPageProps } from './loadRelationship';

const STAR_SEEDS = Array.from({ length: 28 }, (_, i) => {
  const n = (i * 17 + 31) % 100;
  return {
    top: ((i * 37 + 11) % 97) + 1,
    left: ((i * 53 + 7) % 97) + 1,
    size: 1.2 + (n % 25) / 10,
    delay: (i % 7) * 0.7,
    duration: 3 + (i % 5),
  };
});

export default function RelationshipPage({ theme, onBackToCabinet }: RelationshipPageProps) {
  const reduceMotion = useReducedMotion();
  const [isPlayingBgm, setIsPlayingBgm] = useState(false);
  const [daysCount, setDaysCount] = useState(() => daysSinceRelationship());
  const [currentHour, setCurrentHour] = useState(() => new Date().getHours());
  const ambientRef = useRef<RelationshipAmbient | null>(null);

  useEffect(() => {
    return () => {
      ambientRef.current?.stop();
    };
  }, []);

  const toggleBgm = () => {
    if (isPlayingBgm) {
      ambientRef.current?.stop();
      setIsPlayingBgm(false);
      return;
    }

    const ambient = ambientRef.current ?? new RelationshipAmbient();
    ambientRef.current = ambient;
    ambient.start();
    setIsPlayingBgm(true);
  };

  useEffect(() => {
    const tick = () => {
      setDaysCount(daysSinceRelationship());
      setCurrentHour(new Date().getHours());
    };
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const period = useMemo(
    () => resolvePrincePeriod(currentHour, theme.isNight),
    [currentHour, theme.isNight],
  );
  const isNight = period !== 'day';
  const currentSvg = PRINCE_SVG[period];

  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-between transition-colors duration-[1500ms] p-6 md:p-12 font-serif overflow-hidden select-none ${
        isNight
          ? 'bg-gradient-to-b from-[#0A0B1A] via-[#0D1530] to-[#040612] text-[#F3EFE0]'
          : 'bg-gradient-to-b from-[#FFFDF6] via-[#F9F4E5] to-[#EFE7D5] text-[#4A3C2B]'
      }`}
      id="relationship-root"
    >
      {isNight && !reduceMotion && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40" aria-hidden>
          <motion.div
            animate={{
              x: ['-50%', '0%', '-50%'],
              y: ['0%', '10%', '0%'],
              scaleY: [1, 1.15, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[-20%] left-[-50%] w-[200%] h-[60%] opacity-40 mix-blend-screen blur-[80px]"
            style={{
              background:
                'linear-gradient(135deg, rgba(0,255,150,0.3) 0%, rgba(0,100,250,0.2) 40%, rgba(200,50,255,0.15) 80%)',
            }}
          />
          <motion.div
            animate={{
              x: ['0%', '-30%', '0%'],
              y: ['5%', '-5%', '5%'],
            }}
            transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[-10%] left-[-30%] w-[180%] h-[50%] opacity-30 mix-blend-screen blur-[90px]"
            style={{
              background:
                'linear-gradient(220deg, rgba(255,200,50,0.2) 0%, rgba(130,0,255,0.15) 50%, rgba(0,255,180,0.1) 100%)',
            }}
          />
        </div>
      )}

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
        {STAR_SEEDS.map((star, idx) => (
          <div
            key={idx}
            className={`absolute rounded-full ${
              reduceMotion ? 'opacity-40' : 'opacity-0 animate-pulse'
            } ${isNight ? 'bg-[#FFDF73]' : 'bg-[#D49B6A]'}`}
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: star.size > 1.8 ? '0 0 8px 1.5px rgba(234,168,19,0.5)' : 'none',
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
        <div
          className={`absolute top-12 right-12 md:top-20 md:right-20 w-16 h-16 rounded-full opacity-40 transition-colors duration-1000 ${
            isNight
              ? 'bg-gradient-to-r from-[#FFDF73] to-transparent'
              : 'bg-gradient-to-r from-[#D49B6A] to-transparent'
          }`}
          style={{ filter: 'blur(1px)' }}
        />
      </div>

      <header className="w-full max-w-5xl flex items-center justify-between shrink-0 z-20 pb-4 border-b border-stone-400/10 gap-2">
        <StoryBackButton
          onClick={onBackToCabinet}
          label="返回时光展柜"
          tone={isNight ? 'night' : 'paper'}
        />

        <StoryMuteButton
          muted={!isPlayingBgm}
          onToggle={toggleBgm}
          label="音乐"
          tone={isNight ? 'night' : 'wood'}
        />
      </header>

      <main className="w-full max-w-5xl flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14 py-8 z-20 min-h-0">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-md lg:max-w-lg flex items-center justify-center">
            <div
              className={`absolute w-3/4 h-3/4 rounded-full transition-colors duration-1000 blur-2xl opacity-25 -z-10 ${
                isNight ? 'bg-[#4A5785]' : 'bg-[#EAA813]'
              }`}
              aria-hidden
            />
            <motion.img
              key={currentSvg}
              initial={reduceMotion ? false : { opacity: 0.5, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              src={currentSvg}
              alt="小王子与玫瑰"
              loading="eager"
              decoding="async"
              className="w-full h-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)] select-none"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left space-y-6">
          <div className="space-y-2">
            <span className="text-xs md:text-sm tracking-[0.3em] font-mono text-amber-500 font-extrabold uppercase block text-balance">
              「你在我的星球上独一无二」
            </span>
            {/* <h1 className="text-3xl md:text-5xl font-serif font-black tracking-wider leading-tight text-[#EAA813] drop-shadow-sm text-balance">
              相恋时光
            </h1> */}
          </div>

          <div
            className={`py-10 px-6 md:px-10 rounded-[2rem] border relative overflow-hidden transition-colors duration-1000 ${
              isNight
                ? 'bg-[#180B20]/45 border-[#FFDF73]/10 shadow-[0_25px_60px_rgba(0,0,0,0.5)]'
                : 'bg-[#FAF3E0]/70 border-[#8C6D53]/20 shadow-[0_20px_50px_rgba(141,107,70,0.06)]'
            }`}
          >
            <div className="absolute top-5 left-5 w-1.5 h-1.5 rounded-full bg-amber-500/30" aria-hidden />
            <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-amber-500/30" aria-hidden />
            <div className="absolute bottom-5 left-5 w-1.5 h-1.5 rounded-full bg-amber-500/30" aria-hidden />
            <div className="absolute bottom-5 right-5 w-1.5 h-1.5 rounded-full bg-amber-500/30" aria-hidden />

            <div className="space-y-6">
              <h2 className="text-sm md:text-base font-serif font-medium opacity-85 italic tracking-wider">
                「小胡与平平相守了」
              </h2>

              <div className="flex items-baseline justify-center lg:justify-start space-x-2.5">
                <motion.span
                  key={daysCount}
                  initial={reduceMotion ? false : { scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 90 }}
                  className="text-7xl md:text-9xl font-serif font-black tracking-tight text-[#EAA813] drop-shadow-[0_4px_16px_rgba(234,168,19,0.25)]"
                >
                  {daysCount}
                </motion.span>
                <span className="text-2xl md:text-3xl font-serif font-semibold text-amber-500/90">天</span>
              </div>

              <div className="w-16 h-[1.5px] bg-[#EAA813]/25 mx-auto lg:mx-0" aria-hidden />

              <p className="text-xs md:text-sm leading-relaxed font-serif italic opacity-90 text-pretty">
                「正因为你为你的玫瑰花费了时间，才使你的玫瑰变得如此重要。」
                <br />
                从 2026 年 6 月 26 日起，在这个浩瀚宇宙中，我们成了彼此最特别的依靠。
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center z-20 shrink-0 pb-2">
        <div className="flex items-center justify-center space-x-1.5 text-xs opacity-85 font-serif italic text-amber-500">
          <span>
            两个有共同点的人能够相遇的几率是二十万分之一……遇见灵魂伴侣的几率是六十亿分之一！
          </span>
        </div>
      </footer>
    </div>
  );
}
