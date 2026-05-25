import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Hammer, Wrench, Paintbrush, Heart } from 'lucide-react';
import type { TimeTheme } from '../types';

interface PolaroidGalleryProps {
  theme: TimeTheme;
  onBackToCabinet: () => void;
}

export function PolaroidGallery({ theme, onBackToCabinet }: PolaroidGalleryProps) {
  return (
    <div className="relative w-full min-h-screen bg-brand-bg flex flex-col justify-between py-6 px-4 md:px-8 overflow-hidden select-none animate-fadeIn transition-colors duration-700" id="polaroid-gallery-page">
      
      {/* Spring (春) Decors in Box */}
      {theme.season === 'spring' && !theme.isNight && (
        <>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#93C572]/3 to-white/8 pointer-events-none z-0" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-pink-100/15 blur-3xl pointer-events-none" />
        </>
      )}
      {theme.season === 'spring' && theme.isNight && (
        <>
          <motion.div
            animate={{ opacity: [0.75, 0.95, 0.75] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(244,114,182,0.11)_0%,rgba(18,15,13,0.55)_85%)] pointer-events-none z-0"
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-pink-950/15 to-transparent pointer-events-none z-0" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
            {Array.from({ length: 8 }).map((_, i) => {
              const startLeft = 10 + i * 11;
              return (
                <motion.div
                  key={`gallery-spring-sparkle-${i}`}
                  initial={{ x: 0, y: `${30 + (i % 3) * 20}%`, opacity: 0, scale: 0.4 }}
                  animate={{
                    opacity: [0, 0.85, 0],
                    y: [`${30 + (i % 3) * 20}%`, `${30 + (i % 3) * 20 - 55}px`, `${30 + (i % 3) * 20 - 10}px`],
                    x: [0, 15, -15, 0],
                    scale: [0.4, 1.15, 0.5],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6 + (i % 4) * 2.5,
                    delay: i * 0.5,
                    ease: 'easeInOut',
                  }}
                  style={{ left: `${startLeft}%` }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-pink-100/90 pointer-events-none filter blur-[0.4px] shadow-[0_0_8px_#f472b6,0_0_15px_#db2777]"
                />
              );
            })}
          </div>
        </>
      )}

      {/* Summer (夏) Decors in Box */}
      {theme.season === 'summer' && !theme.isNight && (
        <>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-0" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-100/15 blur-3xl pointer-events-none" />
        </>
      )}
      {theme.season === 'summer' && theme.isNight && (
        <>
          <motion.div
            animate={{ opacity: [0.8, 0.98, 0.8] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(20,184,166,0.11)_0%,rgba(18,15,13,0.55)_90%)] pointer-events-none z-0"
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-emerald-950/15 to-transparent pointer-events-none z-0" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
            {Array.from({ length: 8 }).map((_, i) => {
              const startLeft = 10 + i * 11;
              return (
                <motion.div
                  key={`gallery-summer-firefly-${i}`}
                  initial={{ x: 0, y: `${25 + (i % 3) * 22}%`, opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: [0, 0.85, 0, 0.85, 0],
                    y: [`${25 + (i % 3) * 22}%`, `${25 + (i % 3) * 22 - 35}px`, `${25 + (i % 3) * 22 + 25}px`, `${25 + (i % 3) * 22}%`],
                    x: [0, 20, -20, 0],
                    scale: [0.5, 1.2, 0.7, 1.2, 0.5]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 7.5 + (i % 4) * 2.5,
                    delay: i * 0.7,
                    ease: 'easeInOut'
                  }}
                  style={{ left: `${startLeft}%` }}
                  className="absolute w-2 h-2 rounded-full bg-amber-200 pointer-events-none filter blur-[0.8px] shadow-[0_0_8px_#fef08a,0_0_15px_#eab308]"
                />
              );
            })}
          </div>
        </>
      )}

      {/* Autumn (秋) Decors in Box */}
      {theme.season === 'autumn' && !theme.isNight && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/3 via-orange-400/1 to-transparent pointer-events-none z-0" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-100/15 blur-3xl pointer-events-none" />
        </>
      )}
      {theme.season === 'autumn' && theme.isNight && (
        <>
          <motion.div
            animate={{ opacity: [0.75, 0.95, 0.75] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.13)_0%,rgba(18,15,13,0.58)_85%)] pointer-events-none z-0"
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-amber-950/20 via-orange-950/10 to-transparent pointer-events-none z-0" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
            {Array.from({ length: 8 }).map((_, i) => {
              const startLeft = 12 + i * 11;
              return (
                <motion.div
                  key={`gallery-autumn-ember-${i}`}
                  initial={{ x: 0, y: `${35 + (i % 3) * 20}%`, opacity: 0, scale: 0.4 }}
                  animate={{
                    opacity: [0, 0.9, 0],
                    y: [`${35 + (i % 3) * 20}%`, `${35 + (i % 3) * 20 - 55}px`, `${35 + (i % 3) * 20 - 15}px`],
                    x: [0, 20, -10, 5],
                    scale: [0.4, 1.2, 0.5],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5.5 + (i % 3) * 2.5,
                    delay: i * 0.6,
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

      {/* Winter (冬) Decors in Box */}
      {theme.season === 'winter' && !theme.isNight && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#E2E8F0]/8 via-transparent to-[#CBD5E1]/5 pointer-events-none z-0" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-100/10 blur-3xl pointer-events-none" />
        </>
      )}
      {theme.season === 'winter' && theme.isNight && (
        <>
          <motion.div
            animate={{
              opacity: [0.72, 0.92, 0.7, 0.84, 0.72],
              scale: [1, 1.04, 0.98, 1.02, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
              ease: 'easeInOut',
            }}
            className="absolute -bottom-24 -right-24 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.2)_0%,rgba(18,15,13,0)_75%)] pointer-events-none z-0"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.04)_0%,rgba(15,23,42,0.55)_90%)] pointer-events-none z-0" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-orange-950/15 to-transparent pointer-events-none z-0" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
            {Array.from({ length: 10 }).map((_, i) => {
              const startLeft = 10 + i * 8.5;
              return (
                <motion.div
                  key={`gallery-winter-ember-${i}`}
                  initial={{ x: 0, y: `${30 + (i % 4) * 16}%`, opacity: 0, scale: 0.3 }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    y: [`${30 + (i % 4) * 16}%`, `${30 + (i % 4) * 16 - 45}px`, `${30 + (i % 4) * 16 - 10}px`],
                    x: [0, 12, -12, 0],
                    scale: [0.3, 0.9, 0.4]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6.5 + (i % 4) * 2.5,
                    delay: i * 0.45,
                    ease: 'easeInOut'
                  }}
                  style={{ left: `${startLeft}%` }}
                  className="absolute w-1 h-1 rounded-full bg-amber-100 pointer-events-none filter blur-[0.2px] shadow-[0_0_6px_#f59e0b]"
                />
              );
            })}
          </div>
        </>
      )}

      {/* Header bar */}
      <div className="w-full max-w-4xl mx-auto flex items-center justify-between z-10 py-2 border-b border-[#E5DACE]/40" id="polaroid-page-header">
        <button
          onClick={onBackToCabinet}
          className={`flex items-center space-x-2 font-serif font-medium px-4 py-2 rounded-full transition-colors cursor-pointer border shadow-xs ${theme.isNight ? 'bg-[#2E241E]/75 hover:bg-[#2E241E] border-[#8C6239]/25 text-stone-300' : 'bg-white/60 hover:bg-stone-100 border-[#E5DACE] text-brand-text/70 backdrop-blur-sm'}`}
          id="btn-back-cabinet"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>返回展柜</span>
        </button>

        <div className="flex flex-col items-center text-center">
          <span className="font-serif italic text-[#8C6239] text-xs tracking-widest uppercase">SECTION II</span>
          <h2 className="text-xl md:text-xl font-serif text-brand-text font-bold">流光相册盒</h2>
        </div>

        <div className="w-24 flex justify-end">
          <div className="flex items-center space-x-1 bg-amber-500/10 px-3 py-1 rounded-full text-xs font-semibold text-[#8C6239]">
            <span>装修中</span>
          </div>
        </div>
      </div>

      {/* Main Container - Under Construction / Room Redecorating */}
      <div className="w-full max-w-2xl mx-auto flex-1 flex flex-col items-center justify-center text-center space-y-8 z-10 px-4">
        
        <div className="relative flex items-center justify-center w-36 h-36">
          <div className="absolute inset-0 bg-amber-100/40 rounded-full blur-xl animate-pulse" />
          <div className={`absolute w-28 h-28 rounded-full border shadow-sm flex items-center justify-center transition-colors duration-500 ${theme.isNight ? 'bg-[#2E241E] border-[#8C6239]/30 text-[#ECE5DF]' : 'bg-[#FFF9F2] border-[#E5DACE]'}`} />
          
          <motion.div 
            animate={{ rotate: [-10, 15, -10] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className={`absolute -top-1 -left-1 p-2 rounded-full border shadow-xs transition-colors duration-500 ${theme.isNight ? 'bg-[#221A14] border-[#8C6239]/25 text-amber-200' : 'bg-white border-[#E5DACE] text-[#8C6239]'}`}
          >
            <Hammer className="w-6 h-6" />
          </motion.div>

          <motion.div 
            animate={{ y: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className={`absolute -bottom-1 -right-1 p-2 rounded-full border shadow-xs transition-colors duration-500 ${theme.isNight ? 'bg-[#221A14] border-[#8C6239]/25' : 'bg-white border-[#E5DACE]'}`}
          >
            <Heart className="w-6 h-6 fill-red-600 text-red-600" />
          </motion.div>

          <div className="relative text-[#6D4C2B] flex flex-col items-center">
            <Paintbrush className="w-12 h-12 stroke-[1.5] animate-bounce" />
            <span className={`text-[10px] font-mono tracking-widest font-bold uppercase mt-1 ${theme.isNight ? 'text-amber-100/30' : 'text-[#2D241E]/40'}`}>COZY COTTAGE</span>
          </div>
        </div>

        <div className="space-y-4 max-w-md">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-serif text-brand-text font-light tracking-tight"
          >
            甜美的小屋装修中
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-brand-text/60 leading-relaxed text-sm font-serif italic"
          >
            “我和你约定在这里堆砌生活的小沙坑。” <br />
            相纸流光小藏盒正在进行精心修茸与场景布置，在未来这里将可以挂满我们一同出门拍下的拍立得相纸，敬请平平期待！
          </motion.p>
        </div>

        <div className={`px-6 py-2.5 rounded-full text-xs font-sans font-bold tracking-wider uppercase flex items-center space-x-2 shadow-xs border transition-colors duration-500 ${theme.isNight ? 'bg-[#2E241E] border-[#8C6239]/35 text-amber-400' : 'bg-[#FFFDFB] border-[#E5DACE] text-[#8C6239]'}`}>
          <Wrench className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
          <span>ESTIMATED COMPLETION: SUMMER 2026</span>
        </div>

      </div>

      <footer className="w-full max-w-4xl mx-auto text-center py-4 text-[10px] uppercase tracking-[0.3em] text-brand-text/40 font-sans border-t border-[#E5DACE]/25">
        Under Construction &bull; Building Our Digital Home Together
      </footer>
    </div>
  );
}
