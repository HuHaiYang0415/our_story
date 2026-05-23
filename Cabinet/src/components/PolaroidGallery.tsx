import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Hammer, Wrench, Paintbrush, Heart } from 'lucide-react';
import type { TimeTheme } from '../types';
import { SeasonAtmosphere } from './SeasonAtmosphere';

interface PolaroidGalleryProps {
  theme: TimeTheme;
  onBackToCabinet: () => void;
}

export function PolaroidGallery({ theme, onBackToCabinet }: PolaroidGalleryProps) {
  return (
    <div className="relative w-full min-h-screen bg-brand-bg flex flex-col justify-between py-6 px-4 md:px-8 overflow-hidden select-none animate-fadeIn transition-colors duration-700" id="polaroid-gallery-page">
      <SeasonAtmosphere theme={theme} variant="gallery" />

      {/* Header bar */}
      <div className="w-full max-w-4xl mx-auto flex items-center justify-between z-10 py-2 border-b border-[#E5DACE]/40" id="polaroid-page-header">
        <button
          onClick={onBackToCabinet}
          className={`flex items-center space-x-2 font-serif font-medium px-4 py-2 rounded-full transition-colors cursor-pointer border shadow-xs backdrop-blur-sm ${
            theme.isNight
              ? 'bg-[#2E241E]/75 hover:bg-[#2E241E] border-[#8C6239]/25 text-stone-300'
              : 'bg-white/60 hover:bg-stone-100 border-[#E5DACE] text-brand-text/70'
          }`}
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
        
        {/* Animated Cozy Construction Icon Assembly */}
        <div className="relative flex items-center justify-center w-36 h-36">
          {/* Inner ambient glowing circles */}
          <div className="absolute inset-0 bg-amber-100/40 rounded-full blur-xl animate-pulse" />
          <div className="absolute w-28 h-28 bg-[#FFF9F2] rounded-full border border-[#E5DACE] shadow-sm flex items-center justify-center" />
          
          {/* Floating animated tools */}
          <motion.div 
            animate={{ rotate: [-10, 15, -10] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="absolute -top-1 -left-1 text-[#8C6239] bg-white p-2 rounded-full border border-[#E5DACE] shadow-xs"
          >
            <Hammer className="w-6 h-6" />
          </motion.div>

          <motion.div 
            animate={{ y: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="absolute -bottom-1 -right-1 text-red-600 bg-white p-2 rounded-full border border-[#E5DACE] shadow-xs"
          >
            <Heart className="w-6 h-6 fill-red-600" />
          </motion.div>

          {/* Center Main Icon */}
          <div className="relative text-[#6D4C2B] flex flex-col items-center">
            <Paintbrush className="w-12 h-12 stroke-[1.5] animate-bounce" />
            <span className="text-[10px] font-mono tracking-widest text-[#2D241E]/40 font-bold uppercase mt-1">COZY COTTAGE</span>
          </div>
        </div>

        {/* Text Area */}
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

        {/* Vintage Styled Notice Ribbon */}
        <div className="px-6 py-2.5 bg-[#FFFDFB] border border-[#E5DACE] rounded-full text-xs font-sans font-bold text-[#8C6239] tracking-wider uppercase flex items-center space-x-2 shadow-xs">
          <Wrench className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
          <span>ESTIMATED COMPLETION: SUMMER 2026</span>
        </div>

      </div>

      {/* Footer */}
      <footer className="w-full max-w-4xl mx-auto text-center py-4 text-[10px] uppercase tracking-[0.3em] text-brand-text/40 font-sans border-t border-[#E5DACE]/25">
        Under Construction &bull; Building Our Digital Home Together
      </footer>
    </div>
  );
}
