import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Heart } from 'lucide-react';
import { Letter } from '../types';

interface LetterReaderProps {
  letter: Letter & { content: string };
  onClose: () => void;
}

export function LetterReader({ letter, onClose }: LetterReaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-amber-950/40 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
      id="letter-reader-overlay"
    >
      {/* Warm background glow */}
      <div className="absolute inset-0 ambient-glow pointer-events-none" />

      <motion.div
        initial={{ y: 50, scale: 0.9, rotateX: 10 }}
        animate={{ y: 0, scale: 1, rotateX: 0 }}
        exit={{ y: 50, scale: 0.9, rotateX: -10 }}
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
        className="relative w-full max-w-2xl my-8 paper-texture rounded-2xl p-6 md:p-12 shadow-2xl border border-amber-900/10 flex flex-col justify-between"
        id="letter-reader-card"
        style={{ transformPerspective: 1000 }}
      >
        {/* Back Button */}
        <button
          onClick={onClose}
          className="absolute top-6 left-6 flex items-center space-x-1.5 text-amber-900/60 hover:text-amber-900 bg-amber-100/40 hover:bg-amber-100/80 px-3 py-1.5 rounded-full transition-all text-sm font-medium border border-amber-900/5 cursor-pointer"
          id="btn-back-to-stack"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>放回盒子</span>
        </button>

        {/* Nostalgic Stamp and Wax Seal effect in the top-right */}
        <div className="absolute top-6 right-6 flex flex-col items-end space-y-2 select-none pointer-events-none" id="decorative-stamps">
          {/* Mock Stamp */}
          <div className="w-16 h-20 border-4 border-dashed border-red-800/20 bg-amber-50/50 p-1 flex flex-col justify-between items-center rotate-6 relative shadow-sm">
            <span className="text-[8px] font-mono text-red-900/40">OUR STORY</span>
            <Heart className="w-6 h-6 text-red-700/30" />
            <span className="text-[7px] font-mono text-center text-red-900/40">{letter.date}</span>
            {/* Postal waves */}
            <div className="absolute -left-6 top-6 w-14 h-4 border-t border-b border-red-800/10 rotate-12" />
          </div>
        </div>

        {/* Letter Head */}
        <div className="mt-14 mb-8" id="letter-header">
          <div className="inline-flex items-center space-x-1.5 bg-amber-500/10 px-2.5 py-0.5 rounded-full text-xs font-semibold text-amber-800 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>纪念日: {letter.date}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-serif text-amber-950 font-semibold tracking-tight" id="letter-title">
            {letter.title}
          </h1>
          <div className="w-16 h-[2px] bg-amber-900/20 mt-4 rounded-full" />
        </div>

        {/* Styled Letter Body */}
        <div 
          className="font-hand text-xl md:text-2xl leading-relaxed text-amber-900/90 space-y-6 select-text pr-1 whitespace-pre-wrap min-h-[300px]"
          id="letter-content"
        >
          {letter.content}
        </div>

        {/* Sign-off Seal / Decoration */}
        <div className="mt-12 pt-6 border-t border-amber-900/5 flex justify-between items-center" id="letter-footer">
          <div className="flex items-center space-x-2 text-amber-900/40 text-xs font-medium">
            <Heart className="w-3.5 h-3.5 fill-amber-900/20" />
            <span>回忆永存 · Our Story Box</span>
          </div>
          <div className="flex items-center space-x-3 select-none">
            {/* Custom stylized golden stamp */}
            <div className="w-10 h-10 rounded-full bg-red-800/10 border border-red-800/20 flex items-center justify-center rotate-12 relative">
              <span className="text-[10px] text-red-800 font-serif font-bold">星</span>
              <div className="absolute inset-0.5 rounded-full border border-dashed border-red-800/20" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
