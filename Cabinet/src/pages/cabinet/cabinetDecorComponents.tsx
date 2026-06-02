import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SWALLOW_FLIGHT_1, SWALLOW_FLIGHT_2 } from '@/shared/motion/stageMotion';
// ----------------------------------------------------------------------
// High-Quality Optimized Vector Decors (SVG + CSS Animations)
// ----------------------------------------------------------------------

// 1. 盆栽捕虫草 (Venus Flytrap Bonsai) - Fully detailed vector aesthetic
export const VenusFlyTrap = () => (
  <div className="w-14 h-16 md:w-20 md:h-22 flex flex-col items-center justify-end relative select-none" id="deco-flytrap">
    {/* Venus Flytrap Plant with stems and open teeth */}
    <div className="absolute bottom-5 w-full flex flex-col items-center z-10" style={{ height: '45px' }}>
      
      {/* Upper animated mouths */}
      <div className="flex justify-center items-end space-x-2 -mb-1">
        
        {/* Trap Left mouth */}
        <motion.div 
          animate={{ rotate: [-6, 6, -6], scaleY: [1, 0.95, 1] }}
          transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
          className="relative w-5 h-7 origin-bottom"
        >
          <svg className="w-full h-full" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Stem */}
            <path d="M10 28C10 20 8 16 6 12" stroke="#047857" strokeWidth="2" strokeLinecap="round"/>
            {/* Trap lobe (Green back, red inner mouth) */}
            <path d="M1 12C1 5.37258 5.47715 0 11 0C16.5228 0 19 6 19 12C19 17 11 18 11 15C11 12 1 18.6274 1 12Z" fill="#15803d" />
            <path d="M5 12C5 7.578 7.686 4 11 4C14.314 4 16 8 16 12C16 15 11 16 11 14C11 12 5 16.422 5 12Z" fill="#f87171" className="opacity-80" />
            
            {/* Trap cilia (teeth) */}
            <line x1="11" y1="0.5" x2="10" y2="-3" stroke="#fef08a" strokeWidth="1" strokeLinecap="round" />
            <line x1="14" y1="1" x2="14" y2="-2.5" stroke="#fef08a" strokeWidth="1" strokeLinecap="round" />
            <line x1="17" y1="4" x2="18.5" y2="1" stroke="#fef08a" strokeWidth="1" strokeLinecap="round" />
            <line x1="18.5" y1="8" x2="20.5" y2="6.5" stroke="#fef08a" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* Trap Right mouth */}
        <motion.div 
          animate={{ rotate: [4, -4, 4], scaleX: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut", delay: 0.8 }}
          className="relative w-6 h-8 origin-bottom"
        >
          <svg className="w-full h-full" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Stem */}
            <path d="M12 32C12 24 15 18 16 14" stroke="#047857" strokeWidth="2.5" strokeLinecap="round"/>
            {/* Closed/Half-open Trap */}
            <path d="M23 14C23 6.26801 18.0751 0 12 0C5.92487 0 1 6.26801 1 14C1 19.5 12 21 12 17.5C12 14 23 19.5 23 14Z" fill="#166534" />
            <path d="M19 14C19 8.5 16.075 4 12 4C7.925 4 4 8.5 4 14C4 18 12 19 12 16.5C12 14 19 18 19 14Z" fill="#ef4444" className="opacity-90" />
            
            {/* Tiny teeth intertwining */}
            <line x1="12" y1="0.5" x2="12" y2="-3.5" stroke="#fef08a" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="8" y1="1.5" x2="7.5" y2="-2.5" stroke="#fef08a" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="16" y1="1.5" x2="16.5" y2="-2.5" stroke="#fef08a" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="4" y1="5.5" x2="2.5" y2="2" stroke="#fef08a" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="20" y1="5.5" x2="21.5" y2="2" stroke="#fef08a" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </motion.div>

      </div>

      {/* Broad leaves framing the container */}
      <svg className="w-12 h-6 text-emerald-800" viewBox="0 0 48 24" fill="currentColor">
        <path d="M24 24C12 24 0 16 0 8C8 8 16 16 24 16C32 16 40 8 48 8C48 16 36 24 24 24Z" opacity="0.85" />
        <path d="M24 24C15 24 4 18 4 12C9 12 17 19 24 19C31 19 39 12 44 12C44 18 33 24 24 24Z" fill="#047857" />
      </svg>
    </div>

    {/* Ceramic Flower Bowl */}
    <div className="w-9 h-5 md:w-12 md:h-6 bg-[#D2B48C] rounded-b-md border border-[#8C6239] flex flex-col justify-end items-center shadow-md relative overflow-hidden z-20">
      <div className="absolute top-0 inset-x-0 h-1 bg-amber-950/35" />
      <span className="text-[5px] font-mono text-stone-700/80 pb-0.5 uppercase tracking-widest font-black">FLYTRAP</span>
    </div>
  </div>
);

// 2. 盆栽柠檬树 (Lemon Tree Bonsai) - Highly recognizable Branch, leaves & hanging lemons
export const LemonTree = () => (
  <div className="w-14 h-18 md:w-20 md:h-24 flex flex-col items-center justify-end relative select-none" id="deco-lemontree">
    
    {/* Tree branch construction with golden fruits */}
    <div className="absolute bottom-5 w-full flex flex-col items-center z-10">
      
      {/* Crown of Leaves with Fruit */}
      <div className="relative w-12 h-14 md:w-16 md:h-16 flex items-center justify-center">
        
        {/* Soft emerald outline shape */}
        <div className="absolute inset-0 rounded-full bg-emerald-800/80 blur-[2px]" />
        
        {/* Vector SVG overlay */}
        <svg className="w-full h-full relative" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main detailed Branches */}
          <path d="M32 64C32 45 40 38 45 30M32 50C32 38 22 34 16 22" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
          
          {/* Dense Leaf clusters */}
          <circle cx="20" cy="22" r="10" fill="#15803d" />
          <circle cx="44" cy="28" r="11" fill="#166534" />
          <circle cx="32" cy="16" r="12" fill="#047857" />

          {/* Golden Lemon fruit dangling with rotation */}
          <g>
            {/* dangling lemon left */}
            <circle cx="18" cy="28" r="4" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
            <path d="M18 24C18 24 16.5 25 16.5 28" stroke="#15803d" strokeWidth="0.8" />
            <circle cx="18" cy="31.8" r="1.2" fill="#d97706" /> {/* lemon pointy tip */}
          </g>
          
          <g>
            {/* dangling lemon right */}
            <circle cx="42" cy="35" r="4.5" fill="#facc15" stroke="#f59e0b" strokeWidth="1" />
            <path d="M42 30C42 30 44 31 44 35" stroke="#15803d" strokeWidth="0.8" />
            <circle cx="42" cy="39.3" r="1.3" fill="#d97706" />
          </g>

          <g>
            {/* dangling lemon center top */}
            <circle cx="32" cy="22" r="3.5" fill="#fef08a" stroke="#f59e0b" strokeWidth="0.8" />
            <circle cx="32" cy="25.3" r="1" fill="#d97706" />
          </g>
        </svg>
      </div>

    </div>

    {/* Terracotta Clay Pot */}
    <div className="w-10 h-5.5 md:w-13 md:h-6.5 bg-[#C06C4C] rounded-b-md border border-red-950 flex flex-col justify-end items-center shadow-lg relative overflow-hidden z-20">
      <div className="absolute top-0 inset-x-0 h-1 bg-[#8C3E20]" />
      <span className="text-[5px] font-mono text-[#F4A460]/95 font-bold pb-0.5">LEMON</span>
    </div>
  </div>
);

// 3. 小鱼缸 (Small Goldfish Bowl / Aquarium)
export const GoldfishBowl = () => (
  <div className="w-14 h-14 md:w-18 md:h-18 flex flex-col items-center justify-end relative select-none" id="deco-goldfish">
    {/* Rounded clear water container */}
    <div className="rounded-full bg-cyan-100/35 border border-[#E5DACE] relative overflow-hidden shadow-inner flex items-center justify-center" style={{ width: '50px', height: '50px' }}>
      {/* Light highlights on glass */}
      <div className="absolute top-1 left-2 w-3.5 h-1 bg-white/70 rounded-full transform -rotate-12" />
      
      {/* Water layer */}
      <div className="absolute bottom-0 inset-x-0 h-[82%] bg-cyan-200/45" />
      
      {/* Fine Sand / Pebbles */}
      <div className="absolute bottom-0 inset-x-0 h-2 bg-stone-300/80 rounded-b-full" />
      
      {/* Swaying weeds */}
      <motion.div 
        animate={{ skewX: [-4, 4, -4] }}
        transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
        className="absolute bottom-1 w-1 h-4 bg-teal-600/80 rounded-t-full origin-bottom left-2.5" 
      />
      <motion.div 
        animate={{ skewX: [3, -3, 3] }}
        transition={{ repeat: Infinity, duration: 2.0, ease: "easeInOut" }}
        className="absolute bottom-1 w-1 h-3 bg-teal-500/80 rounded-t-full origin-bottom left-4" 
      />

      {/* Floating Orange Goldfish */}
      <motion.div
        animate={{ 
          x: [-12, 12, -12],
          scaleX: [1, -1, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 4.8, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-3 left-[28%] w-4 h-2 flex items-center"
      >
        <div className="w-2.5 h-1.5 bg-orange-500 rounded-full relative flex items-center">
          <div className="w-1 h-1 bg-orange-400 rounded-l-md absolute -left-0.5" />
          <div className="w-0.5 h-0.5 bg-white rounded-full absolute right-0.5 top-0.2" />
        </div>
      </motion.div>

      {/* Tiny rising bubbles */}
      <motion.div 
        animate={{ y: [10, -5], opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className="absolute bottom-2 right-3.5 w-0.5 h-0.5 bg-white/70 rounded-full"
      />
    </div>
  </div>
);

// 4. Hello Kitty 玩偶 (Hello Kitty Doll)
export const HelloKittyDoll = () => (
  <div className="w-16 h-20 md:w-20 md:h-24 flex flex-col items-center justify-end relative select-none" id="deco-hellokitty">
    {/* Hello Kitty figurine body */}
    <motion.div 
      animate={{ y: [0, -2, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      className="absolute bottom-2 w-full flex flex-col items-center z-10"
    >
      <div className="relative w-14 h-16 md:w-16 md:h-18 flex flex-col items-center">
        {/* Head and Bow Group */}
        <div className="relative w-16 h-14 bg-white rounded-[24px/18px] border-[2.5px] border-stone-950 shadow-sm flex items-center justify-center z-20">
          
          {/* Ears */}
          {/* Left Ear (Viewer's Left) */}
          <div className="absolute -top-1.5 -left-0.5 w-4 h-4 bg-white border-[2.5px] border-b-0 border-r-0 border-stone-950 rounded-tl-xl transform -rotate-12" />
          {/* Right Ear (Viewer's Right) */}
          <div className="absolute -top-1.5 -right-0.5 w-4 h-4 bg-white border-[2.5px] border-b-0 border-l-0 border-stone-950 rounded-tr-xl transform rotate-12" />
          
          {/* Bow on Right Ear (Viewer's Right) */}
          <div className="absolute -top-3.5 -right-2.5 z-30 flex items-center justify-center transform rotate-[15deg]">
            {/* Left loop */}
            <div className="w-4 h-4 md:w-5 md:h-5 bg-red-600 rounded-full border-[2.5px] border-stone-950 shadow-sm" />
            {/* Center knot */}
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-red-600 rounded-full border-[2.5px] border-stone-950 -mx-1 z-10" />
            {/* Right loop */}
            <div className="w-4 h-4 md:w-5 md:h-5 bg-red-600 rounded-full border-[2.5px] border-stone-950 shadow-sm" />
          </div>

          {/* Eyes (distinctly far apart, oval) */}
          <div className="absolute top-4 left-3 w-1.5 h-2.5 bg-stone-950 rounded-full" />
          <div className="absolute top-4 right-3 w-1.5 h-2.5 bg-stone-950 rounded-full" />

          {/* Nose (horizontal yellow oval placed right between eyes) */}
          <div className="absolute top-5.5 left-1/2 -translate-x-1/2 w-2.5 h-1.5 bg-yellow-400 rounded-full border-[1.5px] border-stone-950" />

          {/* Whiskers (3 on each cheek, sharp and bold) */}
          {/* Left Check Whiskers */}
          <div className="absolute left-[-3px] top-4 w-3 h-[2px] bg-stone-950 rounded-full transform -rotate-12" />
          <div className="absolute left-[-4.5px] top-5.2 w-3.5 h-[2px] bg-stone-950 rounded-full" />
          <div className="absolute left-[-3px] top-6.4 w-3 h-[2px] bg-stone-950 rounded-full transform rotate-12" />
          
          {/* Right Cheek Whiskers */}
          <div className="absolute right-[-3px] top-4 w-3 h-[2px] bg-stone-950 rounded-full transform rotate-12" />
          <div className="absolute right-[-4.5px] top-5.2 w-3.5 h-[2px] bg-stone-950 rounded-full" />
          <div className="absolute right-[-3px] top-6.4 w-3 h-[2px] bg-stone-950 rounded-full transform -rotate-12" />
        </div>

        {/* Body Piece (Yellow T-Shirt collar underneath Blue Overalls) */}
        <div className="w-9 h-7 bg-blue-600 border-[2.5px] border-stone-950 rounded-b-[10px] -mt-[3px] shadow-sm relative flex justify-center z-10">
          
          {/* Yellow collar patch */}
          <div className="absolute -top-[2px] w-4.5 h-2 bg-yellow-400 rounded-b-full border-b-[1.5px] border-x-[1.5px] border-stone-950 z-10" />

          {/* Left Arm (Viewer's Left) - resting down */}
          <div className="absolute -left-1.5 top-0 w-2 h-3.5 bg-yellow-400 border-l-[2px] border-t-[1.5px] border-r-[1.5px] border-stone-950 rounded-tl-md origin-top transform -rotate-[15deg]">
            <div className="absolute -bottom-1 -left-[1.5px] w-2.5 h-2.5 bg-white border-[1.8px] border-stone-950 rounded-full" />
          </div>

          {/* Right Arm (Viewer's Right) - waving up happily! */}
          <div className="absolute -right-2 top-[1px] w-2.5 h-3.5 bg-yellow-400 border-r-[2px] border-t-[2px] border-stone-950 rounded-tr-md origin-top transform rotate-[40deg]">
            <div className="absolute -bottom-2 -right-[2px] w-3 h-3 bg-white border-[2px] border-stone-950 rounded-full shadow-xs" />
          </div>

          {/* Sitting Legs & Feet (Two big white vertical/angled ovals in front of the overalls) */}
          <div className="absolute -bottom-[6px] left-[-2px] w-4.5 h-5.5 bg-white border-[2.5px] border-stone-950 rounded-full transform -rotate-[10deg] shadow-xs" />
          <div className="absolute -bottom-[6px] right-[-2px] w-4.5 h-5.5 bg-white border-[2.5px] border-stone-950 rounded-full transform rotate-[10deg] shadow-xs" />
        </div>
      </div>
    </motion.div>
    {/* Small wooden display base for the doll */}
    <div className="w-12 h-1.5 bg-stone-400 rounded-full border border-stone-600 shadow-xs z-0 opacity-80" />
  </div>
);

// ----------------------------------------------------------------------
// Exquisite Vector-Drawn Seasonal Decor Components (Swallow Nest, Dragonfly, Wild Geese)
// ----------------------------------------------------------------------

// 1. Spring Swallow Nest (贴边槽 stage-edge-deco) & Flying Swallows (大气层)
export const SpringSwallowNest = ({ isNight }: { isNight: boolean }) => (
  <div className="stage-edge-deco flex w-24 flex-col items-start">
    <div className="relative h-10 w-20 select-none">
      <svg className="h-full w-full filter drop-shadow-md" viewBox="0 0 80 40">
        <path d="M 5 22 L 0 25 M 75 22 L 80 25 M 15 32 L 8 36 M 65 32 L 72 36 M 40 35 L 40 40" stroke="#451A03" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 22 28 L 26 34 M 58 28 L 54 34" stroke="#451A03" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 5 10 Q 5 36, 40 36 T 75 10 Q 40 16, 5 10 Z" fill="#5C3A21" stroke="#3E2715" strokeWidth="1.5" />
        <path d="M 10 18 Q 40 24, 70 18" stroke="#78350F" strokeWidth="2.5" fill="none" opacity="0.6" strokeLinecap="round" />
        <path d="M 18 26 Q 40 30, 62 26" stroke="#451A03" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round" />
        <path d="M 8 13 Q 22 15, 36 13 T 72 13" stroke="#FBBF24" strokeWidth="1.2" fill="none" opacity="0.8" strokeLinecap="round" />
        <text x="40" y="27" fill="#FEF3C7" fontSize="5" fontWeight="bold" textAnchor="middle" opacity="0.8">
          NEST
        </text>
      </svg>

      {isNight && (
        <motion.div
          animate={{ y: [0, -1.8, 0] }}
          transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
          className="absolute -top-[12px] left-1/2 z-[-1] flex -translate-x-1/2 space-x-1.5"
        >
          <div className="relative flex h-6 w-6 flex-col items-center">
            <svg className="h-full w-full fill-current text-stone-900" viewBox="0 0 24 24">
              <circle cx="12" cy="14" r="8" fill="#1E293B" />
              <path d="M 12 14 Q 10 16, 12 19 L 12 14" fill="#EF4444" />
              <path d="M 12 10 L 12 6 L 14 9 Z" fill="#FBBF24" />
              <path d="M 7 11 Q 8.5 12.5, 10 11 M 14 11 Q 15.5 12.5, 17 11" stroke="#FEF08A" strokeWidth="1" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          <div className="relative -ml-1 flex h-6 w-6 flex-col items-center">
            <svg className="h-full w-full fill-current text-stone-900" viewBox="0 0 24 24">
              <circle cx="12" cy="14" r="7.5" fill="#334155" />
              <path d="M 12 14 Q 10 16, 12 19 L 12 14" fill="#EF4444" />
              <path d="M 12 10 L 11 6 L 13 8 Z" fill="#FBBF24" />
              <path d="M 7.5 11.5 Q 8.8 12.8, 10 11.5 M 14 11.5 Q 15.2 12.8, 16.5 11.5" stroke="#FEF08A" strokeWidth="1" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </motion.div>
      )}
    </div>
    <span className="mt-1 rounded-md bg-stone-900/10 px-1.5 py-0.5 text-[7.5px] font-bold uppercase tracking-widest text-stone-400">
      燕巢 Swallow
    </span>
  </div>
);

export const SummerCicadaEdge = () => (
  <div className="stage-edge-deco flex flex-col items-start" aria-hidden>
    <svg className="h-8 w-5 text-stone-700/30" viewBox="0 0 24 40" fill="currentColor">
      <path d="M12 2C8 2 6 6 6 12C6 18 10 24 12 26C14 24 18 18 18 12C18 6 16 2 12 2Z" fill="#3D2B1F" />
      <path d="M12 10C5 10 3 18 3 28C3 30 5 30 7 28C9 26 12 12 12 10Z" fill="#8B7355" opacity="0.3" />
      <path d="M12 10C19 10 21 18 21 28C21 30 19 30 17 28C15 26 12 12 12 10Z" fill="#8B7355" opacity="0.3" />
      <ellipse cx="8" cy="4" rx="2" ry="2" fill="#FFC107" />
      <ellipse cx="16" cy="4" rx="2" ry="2" fill="#FFC107" />
    </svg>
    <span className="mt-0.5 block rotate-90 text-center text-[5.5px] font-bold text-stone-500/30">鸣蝉</span>
  </div>
);

export const SpringSwallows = ({ isNight }: { isNight: boolean }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
      {!isNight && (
        <>
          <div className="absolute inset-0 overflow-hidden">
          {/* Swallow 1: Big Swoop */}
          <motion.div
            className="absolute w-11 h-11"
            initial={{
              left: SWALLOW_FLIGHT_1.left[0],
              top: SWALLOW_FLIGHT_1.top[0],
              rotate: SWALLOW_FLIGHT_1.rotate[0],
            }}
            animate={{
              left: [...SWALLOW_FLIGHT_1.left],
              top: [...SWALLOW_FLIGHT_1.top],
              rotate: [...SWALLOW_FLIGHT_1.rotate],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg className="w-full h-full text-slate-800" viewBox="0 0 60 60" fill="currentColor">
              <style>{`
                @keyframes swallow-flap-1 {
                  0%, 100% { transform: scaleY(1); }
                  50% { transform: scaleY(-0.7); }
                }
                .swallow-wing-flap-1 {
                  transform-origin: 30px 28px;
                  animation: swallow-flap-1 0.22s infinite ease-in-out;
                }
              `}</style>
              
              {/* Swallow Forked Tail */}
              <path d="M 28 32 L 20 54 L 28 42 L 36 54 L 28 32" fill="#1E293B" />
              {/* Swallow Body */}
              <ellipse cx="28" cy="28" rx="7" ry="11" fill="#1E293B" />
              {/* White/Cream belly */}
              <ellipse cx="28" cy="27" rx="5" ry="9" fill="#FFFBEB" />
              {/* Orange/Red Chin-Throat details */}
              <path d="M 25 18 Q 28 24, 31 18 C 30 17, 26 17, 25 18 Z" fill="#EF4444" />
              <path d="M 23 20 Q 28 27, 33 20" stroke="#EA580C" strokeWidth="1.5" fill="none" />
              {/* Head & Beak */}
              <circle cx="28" cy="16" r="4.5" fill="#0F172A" />
              <path d="M 28 12.5 L 26.5 8 L 29.5 8 Z" fill="#F59E0B" />
              
              {/* Wings Group with Left and Right wings flapping */}
              <g className="swallow-wing-flap-1">
                {/* Left wing - long blades curved */}
                <path d="M 21 26 C 14 26, 4 14, 0 6 C 8 10, 16 18, 21 26 Z" fill="#1E293B" />
                <path d="M 21 26 C 16 26, 8 16, 4 10 C 10 13, 16 20, 21 26 Z" fill="#334155" opacity="0.8" />
                
                {/* Right wing */}
                <path d="M 35 26 C 42 26, 52 14, 56 6 C 48 10, 40 18, 35 26 Z" fill="#1E293B" />
                <path d="M 35 26 C 40 26, 48 16, 52 10 C 46 13, 40 20, 35 26 Z" fill="#334155" opacity="0.8" />
              </g>
            </svg>
          </motion.div>

          {/* Swallow 2: Speed and playfulness offset */}
          <motion.div
            className="absolute w-8 h-8"
            initial={{
              left: SWALLOW_FLIGHT_2.left[0],
              top: SWALLOW_FLIGHT_2.top[0],
              rotate: SWALLOW_FLIGHT_2.rotate[0],
            }}
            animate={{
              left: [...SWALLOW_FLIGHT_2.left],
              top: [...SWALLOW_FLIGHT_2.top],
              rotate: [...SWALLOW_FLIGHT_2.rotate],
            }}
            transition={{
              duration: 11.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 3,
            }}
          >
            <svg className="w-full h-full text-slate-800" viewBox="0 0 60 60" fill="currentColor">
              <style>{`
                @keyframes swallow-flap-2 {
                  0%, 100% { transform: scaleY(1); }
                  50% { transform: scaleY(-0.75); }
                }
                .swallow-wing-flap-2 {
                  transform-origin: 30px 28px;
                  animation: swallow-flap-2 0.18s infinite ease-in-out;
                }
              `}</style>
              
              <path d="M 28 32 L 20 54 L 28 42 L 36 54 L 28 32" fill="#334155" />
              <ellipse cx="28" cy="28" rx="7" ry="11" fill="#334155" />
              <ellipse cx="28" cy="27" rx="5" ry="9" fill="#FFFDF5" />
              <path d="M 25 18 Q 28 24, 31 18 Z" fill="#F97316" />
              <circle cx="28" cy="16" r="4.5" fill="#1E293B" />
              
              <g className="swallow-wing-flap-2">
                <path d="M 21 26 C 14 26, 4 14, 0 6 Q 16 18, 21 26 Z" fill="#334155" />
                <path d="M 35 26 C 42 26, 52 14, 56 6 Q 40 18, 35 26 Z" fill="#334155" />
              </g>
            </svg>
          </motion.div>
          </div>
        </>
      )}
    </div>
  );
};

// 2. Summer Dragonfly Component - Lands on the Center Lotus precisely
export const SummerDragonfly = () => {
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    // 15 seconds cycle:
    // 0s to 4.5s: rests (isFlying = false)
    // 4.5s to 15s: flying around (isFlying = true)
    const runCycle = () => {
      setIsFlying(false);
      const toFly = setTimeout(() => {
        setIsFlying(true);
      }, 4500);
      return () => clearTimeout(toFly);
    };
    
    runCycle();
    const interval = setInterval(runCycle, 15000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: 'absolute',
        bottom: '38px', // Directly resting on the lotus seedpod center
        left: '50%',
        marginLeft: '-20px', // Centers the w-10 (40px) box perfectly
        zIndex: 40,
      }}
      animate={isFlying ? {
        x: [
          0,          // 4.5s rest (offset 0)
          -80,        // fly left above lilypad 1
          -160,       // rise up, look back
          20,         // fly across the middle high up
          160,        // dive near lilypad 2
          60,         // soar back towards lotus
          25,         // hover slightly above seedpod
          0,          // touch down gently
        ],
        y: [
          0,          // rest
          -35,        // rise up
          -100,       // climb high
          -160,       // super high sweep
          -80,        // dive down right
          -45,        // swoop back mid
          -15,        // hover alignment
          0,          // land
        ],
        rotate: [
          -15,        // resting posture on lotus
          35,         // taking off angle
          -65,        // sharp left turn
          15,         // flying rightwards
          85,         // steep climb down-right
          160,        // hover alignment turn
          -45,        // landing deceleration
          -15,        // flat rest
        ]
      } : {
        x: 0,
        y: 0,
        rotate: -15
      }}
      transition={isFlying ? {
        duration: 10.5, // 10.5s of elegant flight
        ease: 'easeInOut',
      } : {
        duration: 0.6 // GENTLE touch down transition
      }}
      className="pointer-events-none"
    >
      {/* Dragonfly Vector SVG */}
      <svg className="w-10 h-10 select-none drop-shadow-[0_2px_3px_rgba(0,0,0,0.18)]" viewBox="0 0 60 60">
        <style>{`
          @keyframes dragonfly-flap-wings-side {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(0.18); }
          }
          .dragonfly-flying-wing {
            transform-origin: 30px 24px;
            animation: dragonfly-flap-wings-side ${isFlying ? '0.05s' : '0s'} infinite linear;
          }
        `}</style>

        {/* Tail Segment - Long segmented bead chain look */}
        <line x1="30" y1="24" x2="30" y2="52" stroke="#0E7490" strokeWidth="2.5" strokeLinecap="round" />
        {/* Tail Joints detail */}
        <circle cx="30" cy="30" r="1.8" fill="#22D3EE" />
        <circle cx="30" cy="36" r="1.8" fill="#22D3EE" />
        <circle cx="30" cy="42" r="1.8" fill="#22D3EE" />
        <circle cx="30" cy="48" r="1.8" fill="#22D3EE" />
        <circle cx="30" cy="52" r="1.2" fill="#0891B2" />

        {/* Thorax (Middle chest body) */}
        <ellipse cx="30" cy="22" rx="3.5" ry="5.5" fill="#0284C7" />
        <ellipse cx="30" cy="21" rx="2" ry="4" fill="#38BDF8" opacity="0.6" />

        {/* Head with compound bulbous eyes */}
        <ellipse cx="30" cy="15" rx="3" ry="2.2" fill="#047857" />
        <circle cx="27.5" cy="14.5" r="2.2" fill="#34D399" />
        <circle cx="32.5" cy="14.5" r="2.2" fill="#34D399" stroke="#065F46" strokeWidth="0.5" />
        {/* Eye glossy dots */}
        <circle cx="26.8" cy="13.8" r="0.6" fill="#FFFFFF" />
        <circle cx="31.8" cy="13.8" r="0.6" fill="#FFFFFF" />

        {/* Translucent Glistening Wings groups */}
        <g className="dragonfly-flying-wing">
          {/* Forewing Left */}
          <path d="M 30 21 Q 14 10, 2 12 Q 12 18, 30 21 Z" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="0.6" fillOpacity="0.72" />
          <line x1="30" y1="21" x2="8" y2="13.5" stroke="#0891B2" strokeWidth="0.4" opacity="0.4" />
          
          {/* Hindwing Left */}
          <path d="M 30 23 Q 16 19, 4 23 Q 15 27, 30 23 Z" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="0.6" fillOpacity="0.72" />
          <line x1="30" y1="23" x2="10" y2="22" stroke="#0891B2" strokeWidth="0.4" opacity="0.4" />

          {/* Forewing Right */}
          <path d="M 30 21 Q 46 10, 58 12 Q 48 18, 30 21 Z" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="0.6" fillOpacity="0.72" />
          <line x1="30" y1="21" x2="52" y2="13.5" stroke="#0891B2" strokeWidth="0.4" opacity="0.4" />
          
          {/* Hindwing Right */}
          <path d="M 30 23 Q 44 19, 56 23 Q 45 27, 30 23 Z" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="0.6" fillOpacity="0.72" />
          <line x1="30" y1="23" x2="50" y2="22" stroke="#0891B2" strokeWidth="0.4" opacity="0.4" />
        </g>
      </svg>
      {/* Small mini-sign for dragonfly resting */}
      {!isFlying && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[5.5px] font-bold text-teal-400 bg-teal-950/80 px-1.5 py-0.2 rounded-full border border-teal-500/25 tracking-widest whitespace-nowrap opacity-80 animate-pulse">停留中</span>
      )}
    </motion.div>
  );
};

// ----------------------------------------------------------------------
// Exquisite Vector-Drawn Floor Decorations
// ----------------------------------------------------------------------

// 1. Spring Flowers (春年的鲜花形象) - Tulip, Daisy, and Bluebell
export const SpringFlowers = () => {
  const flowerTypes = [
    // Type 0: Pink/Rose Tulip with elegant layered SVG petals
    (key: string, idx: number, scale: number) => (
      <motion.div
        key={key}
        animate={{ rotate: [-2.5, 2.5, -2.5], y: [0, -0.6, 0] }}
        transition={{ repeat: Infinity, duration: 4.5 + (idx % 3) * 0.5, ease: 'easeInOut', delay: idx * 0.1 }}
        className="flex flex-col items-center origin-bottom relative shrink-0"
        style={{ transformOrigin: 'bottom center', scale }}
      >
        <svg className="w-9 h-14 md:w-11 md:h-18 drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.08)]" viewBox="0 0 40 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`tulipGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F472B6" />
              <stop offset="60%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#BE185D" />
            </linearGradient>
            <linearGradient id={`stemGrad-${idx}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          {/* Leaves */}
          <path d="M11 54 Q 4 40 15 33 Q 16 46 11 54 Z" fill="#10B981" />
          <path d="M29 50 Q 35 36 25 28 Q 23 40 29 50 Z" fill="#047857" />
          {/* Stem */}
          <path d="M20 70 Q19 46 20 20" stroke={`url(#stemGrad-${idx})`} strokeWidth="3" strokeLinecap="round" />
          {/* Tulip Flower Head - Exquisite Vector Petals */}
          <path d="M12 20 C12 8 28 8 28 20 Z" fill="#AF1F5F" opacity="0.8" />
          <path d="M9 20 C7 10 15 8 20 18 C17 23 13 24 9 20 Z" fill={`url(#tulipGrad-${idx})`} />
          <path d="M31 20 C33 10 25 8 20 18 C23 23 27 24 31 20 Z" fill={`url(#tulipGrad-${idx})`} />
          <path d="M13 20 C12 11 28 11 27 20 C22 23 18 23 13 20 Z" fill="#F472B6" />
        </svg>
      </motion.div>
    ),
    // Type 1: Delicate Sunlit Daisy (黄白雏菊)
    (key: string, idx: number, scale: number) => (
      <motion.div
        key={key}
        animate={{ rotate: [-3, 3, -3], y: [0, -0.8, 0] }}
        transition={{ repeat: Infinity, duration: 3.8 + (idx % 2) * 0.6, ease: 'easeInOut', delay: idx * 0.12 }}
        className="flex flex-col items-center origin-bottom relative shrink-0"
        style={{ transformOrigin: 'bottom center', scale }}
      >
        <svg className="w-9 h-14 md:w-11 md:h-18 drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.08)]" viewBox="0 0 40 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`daisyCenter-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
          {/* Curved leaf */}
          <path d="M11 47 Q 4 43 13 37 Q 15 42 11 47 Z" fill="#047857" />
          {/* Slanted Stem */}
          <path d="M20 70 Q16 46 20 22" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Daisy Petals Group */}
          <g transform="translate(20, 22)">
            {Array.from({ length: 12 }).map((_, rIdx) => (
              <path
                key={rIdx}
                d="M-2 -16 C-2.5 -4 2.5 -4 2 -16 C1.8 -23 -1.8 -23 -2 -16 Z"
                fill="#FFFFFF"
                stroke="#F2E8F0"
                strokeWidth="0.4"
                transform={`rotate(${rIdx * 30})`}
              />
            ))}
            <circle cx="0.5" cy="0.5" r="5" fill="#3D2B1F" opacity="0.1" />
            <circle cx="0" cy="0" r="4.8" fill={`url(#daisyCenter-${idx})`} stroke="#B45309" strokeWidth="0.4" />
          </g>
        </svg>
      </motion.div>
    ),
    // Type 2: Purple Bluebell (紫色风铃草) hanging gracefully
    (key: string, idx: number, scale: number) => (
      <motion.div
        key={key}
        animate={{ rotate: [2.5, -2.5, 2.5], y: [0, -0.4, 0] }}
        transition={{ repeat: Infinity, duration: 4.8 + (idx % 3) * 0.4, ease: 'easeInOut', delay: idx * 0.15 }}
        className="flex flex-col items-center origin-bottom relative shrink-0"
        style={{ transformOrigin: 'bottom center', scale }}
      >
        <svg className="w-9 h-14 md:w-11 md:h-18 drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.08)]" viewBox="0 0 40 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stem drooping forward */}
          <path d="M22 70 Q 22 45 16 26 Q 11 16 19 11" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M22 55 Q 30 45 23 35 Q 21 45 22 55 Z" fill="#10B981" opacity="0.9" />
          {/* Bell flower hanging 1 */}
          <g transform="translate(15, 26) rotate(-30)">
            <path d="M -5 0 C -5 -6 5 -6 5 0 C 5 4 3 6 5 8 C 3 9 1 7 0 8 C -1 7 -3 9 -5 8 C -3 6 -5 4 -5 0 Z" fill="#818CF8" />
            <path d="M -3 0 C -3 -4 3 -4 3 0 C 3 3 1.5 4.5 3 6 C 1.5 6.5 0.5 5 0 6.5 C -0.5 5 -1.5 6.5 -3 6 C -1.5 4.5 -3 3 -3 0 Z" fill="#A5B4FC" />
            <circle cx="0" cy="8.2" r="1" fill="#FBBF24" />
          </g>
          {/* Bell flower hanging 2 */}
          <g transform="translate(19, 13) rotate(-50)">
            <path d="M -4 0 C -4 -5 4 -5 4 0 C 4 3 2.5 5 4 7 C 2.5 7.5 0.8 6 0 7 C -0.8 6 -2.5 7.5 -4 7 C -2.5 5 -4 3 -4 0 Z" fill="#6366F1" />
            <path d="M -2 0 C -2 -3 2 -3 2 0 C 2 2 1.2 3.5 1.5 5 C 0.8 5.5 0.3 4.5 0 5.2 C -0.3 4.5 -0.8 5.5 -1.5 5 C -1.2 3.5 -2 2 -2 0 Z" fill="#818CF8" />
            <circle cx="0" cy="7.2" r="1" fill="#FBBF24" />
          </g>
        </svg>
      </motion.div>
    )
  ];

  // Draw 16 beautiful flowers nicely packed with absolute percentage positions to ensure perfect density & order
  const flowersCount = 16;
  return (
    <div className="absolute inset-x-0 bottom-0.5 h-16 md:h-20 flex items-end justify-between px-3 md:px-8 z-20 overflow-hidden">
      {Array.from({ length: flowersCount }).map((_, num) => {
        const typeIndex = num % flowerTypes.length;
        const renderer = flowerTypes[typeIndex];
        // Orderly visual sizing: Alternates small, large, medium, repeat
        const sizingPattern = [0.85, 1.05, 0.95];
        const scale = sizingPattern[num % sizingPattern.length];
        return renderer(`spring-fl-${num}`, num, scale);
      })}
    </div>
  );
};

// 1.5. Summer frogs on lilypad at night (click to jump)
export const SingleFrog = ({ 
  scale = 1, 
  rotate = 0, 
  delay = 0, 
  isIdle = true 
}: { 
  scale?: number; 
  rotate?: number; 
  delay?: number; 
  isIdle?: boolean;
}) => {
  return (
    <motion.div
      style={{
        scale,
        rotate,
        transformOrigin: "bottom center",
      }}
      animate={isIdle ? { 
        y: [0, -0.6, 0], 
        scaleY: [1, 1.02, 1] 
      } : {
        y: 0,
        scaleY: 1
      }}
      transition={{ 
        repeat: Infinity, 
        duration: 3 + delay, 
        ease: "easeInOut",
        delay 
      }}
      className="relative pointer-events-none"
    >
      <svg className="w-10 h-8 drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.25)]" viewBox="0 0 40 32" fill="none">
        <path d="M 8 26 C 2 24 2 18 8 18 C 10 18 12 21 11 26 Z" fill="#15803D" stroke="#166534" strokeWidth="0.8" />
        <path d="M 32 26 C 38 24 38 18 32 18 C 30 18 28 21 29 26 Z" fill="#15803D" stroke="#166534" strokeWidth="0.8" />
        <path d="M 5 26 L 12 26 M 28 26 L 35 26" stroke="#166534" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 12 26 L 15 28 M 28 26 L 25 28" stroke="#166534" strokeWidth="1.2" strokeLinecap="round" />
        <ellipse cx="20" cy="21" rx="11" ry="9" fill="#22C55E" />
        <motion.ellipse
          cx="20"
          cy="22"
          rx="7"
          ry="6"
          fill="#A3E635"
          animate={{ scaleX: [1, 1.15, 1], scaleY: [1, 1.12, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ repeat: Infinity, duration: 2.8 + delay, ease: "easeInOut", delay }}
          style={{ transformOrigin: "20px 28px" }}
        />
        <path d="M 14 22 L 12 28 C 12 28 11 29 11 30" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
        <path d="M 26 22 L 28 28 C 28 28 29 29 29 30" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
        <circle cx="13" cy="11" r="4.5" fill="#22C55E" stroke="#15803D" strokeWidth="0.8" />
        <circle cx="27" cy="11" r="4.5" fill="#22C55E" stroke="#15803D" strokeWidth="0.8" />
        <circle cx="13" cy="11" r="2.5" fill="#14532D" />
        <circle cx="12" cy="10" r="0.8" fill="#FFFFFF" />
        <circle cx="27" cy="11" r="2.5" fill="#14532D" />
        <circle cx="26" cy="10" r="0.8" fill="#FFFFFF" />
        <path d="M 18 19 Q 20 20.5, 22 19" stroke="#14532D" strokeWidth="1" strokeLinecap="round" fill="none" />
        <circle cx="12" cy="16" r="1.5" fill="#F43F5E" opacity="0.65" />
        <circle cx="28" cy="16" r="1.5" fill="#F43F5E" opacity="0.65" />
      </svg>
    </motion.div>
  );
};

export const Frog = () => {
  const [leftState, setLeftState] = useState<'idle' | 'jumping' | 'gone' | 'returning'>('idle');
  const [rightState, setRightState] = useState<'idle' | 'jumping' | 'gone' | 'returning'>('idle');
  const [leftSplash, setLeftSplash] = useState(false);
  const [rightSplash, setRightSplash] = useState(false);

  const handleFrogClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (leftState !== 'idle' || rightState !== 'idle') return;

    setRightState('jumping');
    setTimeout(() => {
      setRightSplash(true);
      setTimeout(() => setRightSplash(false), 900);
    }, 800);
    setTimeout(() => {
      setRightState('gone');
    }, 1000);

    setTimeout(() => {
      setLeftState('jumping');
      setTimeout(() => {
        setLeftSplash(true);
        setTimeout(() => setLeftSplash(false), 900);
      }, 800);
      setTimeout(() => {
        setLeftState('gone');
      }, 1000);
    }, 200);

    setTimeout(() => {
      setLeftState('returning');
      setLeftSplash(true);
      setTimeout(() => setLeftSplash(false), 900);
      setTimeout(() => {
        setLeftState('idle');
      }, 1100);
    }, 5000);

    setTimeout(() => {
      setRightState('returning');
      setRightSplash(true);
      setTimeout(() => setRightSplash(false), 900);
      setTimeout(() => {
        setRightState('idle');
      }, 1100);
    }, 5200);
  };

  const isBothIdle = leftState === 'idle' && rightState === 'idle';

  return (
    <>
      <div
        id="cuddly-frogs-pair"
        className={`absolute -top-[21px] left-[5px] w-14 h-8 z-10 flex items-end justify-center select-none ${
          isBothIdle ? 'cursor-pointer pointer-events-auto' : 'pointer-events-none'
        }`}
        onClick={handleFrogClick}
      >
        <motion.div
          className="flex items-end justify-center origin-bottom"
          style={{ marginRight: "-6px" }}
          animate={
            leftState === 'jumping'
              ? {
                  x: [0, 0, 12, 34, 54, 54],
                  y: [0, 2, -42, -18, 30, 38],
                  scaleX: [1, 1.15, 0.8, 1.0, 0.65, 0.2],
                  scaleY: [1, 0.72, 1.3, 1.0, 1.1, 0.2],
                  rotate: [0, -5, 15, 30, 45, 45],
                  opacity: [1, 1, 1, 1, 0.8, 0],
                }
              : leftState === 'returning'
              ? {
                  x: [54, 45, 22, 5, 0, 0],
                  y: [38, 5, -38, -10, 2, 0],
                  scaleX: [0.2, 0.8, 1.0, 1.15, 0.95, 1],
                  scaleY: [0.2, 1.2, 0.95, 0.75, 1.05, 1],
                  rotate: [-45, -35, -15, 0, 5, 0],
                  opacity: [0, 1, 1, 1, 1, 1],
                }
              : leftState === 'gone'
              ? {
                  x: 54,
                  y: 38,
                  scaleX: 0.2,
                  scaleY: 0.2,
                  opacity: 0,
                  rotate: 45,
                }
              : {
                  x: 0,
                  y: 0,
                  scaleX: 1,
                  scaleY: 1,
                  opacity: 1,
                  rotate: 0,
                }
          }
          transition={{
            duration: leftState === 'jumping' ? 1.0 : leftState === 'returning' ? 1.1 : 0.3,
            ease: "easeInOut",
          }}
          whileHover={isBothIdle ? { scale: 1.05 } : {}}
        >
          <SingleFrog scale={0.72} rotate={5} delay={0} isIdle={leftState === 'idle'} />
        </motion.div>

        <motion.div
          className="flex items-end justify-center origin-bottom"
          style={{ marginLeft: "-6px" }}
          animate={
            rightState === 'jumping'
              ? {
                  x: [0, 0, 12, 34, 54, 54],
                  y: [0, 2, -42, -18, 30, 38],
                  scaleX: [1, 1.15, 0.8, 1.0, 0.65, 0.2],
                  scaleY: [1, 0.72, 1.3, 1.0, 1.1, 0.2],
                  rotate: [0, -5, 15, 30, 45, 45],
                  opacity: [1, 1, 1, 1, 0.8, 0],
                }
              : rightState === 'returning'
              ? {
                  x: [54, 45, 22, 5, 0, 0],
                  y: [38, 5, -38, -10, 2, 0],
                  scaleX: [0.2, 0.8, 1.0, 1.15, 0.95, 1],
                  scaleY: [0.2, 1.2, 0.95, 0.75, 1.05, 1],
                  rotate: [-45, -35, -15, 0, 5, 0],
                  opacity: [0, 1, 1, 1, 1, 1],
                }
              : rightState === 'gone'
              ? {
                  x: 54,
                  y: 38,
                  scaleX: 0.2,
                  scaleY: 0.2,
                  opacity: 0,
                  rotate: 45,
                }
              : {
                  x: 0,
                  y: 0,
                  scaleX: 1,
                  scaleY: 1,
                  opacity: 1,
                  rotate: 0,
                }
          }
          transition={{
            duration: rightState === 'jumping' ? 1.0 : rightState === 'returning' ? 1.1 : 0.3,
            ease: "easeInOut",
          }}
          whileHover={isBothIdle ? { scale: 1.05 } : {}}
        >
          <SingleFrog scale={0.60} rotate={-7} delay={0.3} isIdle={rightState === 'idle'} />
        </motion.div>

        <span className={`absolute -top-[14px] left-1/2 -translate-x-1/2 text-[4.5px] font-bold text-green-300 bg-green-950/80 px-1 py-0.1 rounded border border-green-500/20 tracking-wider whitespace-nowrap transition-opacity duration-300 ${
          isBothIdle ? "opacity-90" : "opacity-0"
        }`}>
          依偎的青蛙 Cuddly Frogs
        </span>
      </div>

      {leftSplash && (
        <motion.div
          className="absolute pointer-events-none z-0"
          style={{
            left: "calc(5px + 55px + 4px)",
            top: "calc(-21px + 38px + 12px)",
          }}
          initial={{ scale: 0.3, opacity: 0.8 }}
          animate={{ scale: [0.3, 1.5], opacity: [0.8, 0] }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <svg className="w-12 h-6 overflow-visible" viewBox="0 0 40 20" fill="none">
            <ellipse cx="20" cy="10" rx="16" ry="6" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
            <ellipse cx="20" cy="10" rx="10" ry="4.2" stroke="#7DD3FC" strokeWidth="2" opacity="0.9" />
            <ellipse cx="20" cy="10" rx="4" ry="1.8" stroke="#E0F2FE" strokeWidth="1" opacity="1" />
            <circle cx="15" cy="4" r="1.5" fill="#E0F2FE" />
            <circle cx="20" cy="1" r="1.8" fill="#E0F2FE" />
            <circle cx="25" cy="5" r="1.2" fill="#E0F2FE" />
          </svg>
        </motion.div>
      )}

      {rightSplash && (
        <motion.div
          className="absolute pointer-events-none z-0"
          style={{
            left: "calc(5px + 55px + 16px)",
            top: "calc(-21px + 38px + 12px)",
          }}
          initial={{ scale: 0.3, opacity: 0.8 }}
          animate={{ scale: [0.3, 1.5], opacity: [0.8, 0] }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <svg className="w-12 h-6 overflow-visible" viewBox="0 0 40 20" fill="none">
            <ellipse cx="20" cy="10" rx="16" ry="6" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
            <ellipse cx="20" cy="10" rx="10" ry="4.2" stroke="#7DD3FC" strokeWidth="2" opacity="0.9" />
            <ellipse cx="20" cy="10" rx="4" ry="1.8" stroke="#E0F2FE" strokeWidth="1" opacity="1" />
            <circle cx="15" cy="4" r="1.5" fill="#E0F2FE" />
            <circle cx="20" cy="1" r="1.8" fill="#E0F2FE" />
            <circle cx="25" cy="5" r="1.2" fill="#E0F2FE" />
          </svg>
        </motion.div>
      )}
    </>
  );
};

// 2. Summer Pond (夏日荷塘) - Refined lilypads with veins, blooming lotus with seeds and filaments
export const SummerPond = ({ isNight }: { isNight: boolean }) => {
  return (
    <div className="absolute inset-x-0 bottom-1 flex justify-center items-end space-x-12 md:space-x-24 px-6 z-20 pb-1">
      {/* 2a. Left Lilypad with vein detail & water drop */}
      <motion.div
        animate={{ rotate: [-2.5, 2.5, -2.5], y: [0, -1.2, 0] }}
        transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut" }}
        className="relative w-16 h-8 origin-center"
      >
        {isNight && <Frog />}
        <svg className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lilypadGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0B5D51" />
              <stop offset="100%" stopColor="#0D534A" />
            </linearGradient>
          </defs>
          {/* Main Leaf Body with sliced notch */}
          <path d="M 30 15 L 43 0 C 53 6 62 20 48 28 C 30 34 10 28 4 18 C -2 10 8 0 25 1 C 28 1 30 15 30 15 Z" fill="url(#lilypadGrad1)" />
          {/* Veins */}
          <path d="M30 15 Q 16 10 10 5" stroke="#14B8A6" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6" />
          <path d="M30 15 Q 18 20 12 25" stroke="#14B8A6" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6" />
          <path d="M30 15 Q 35 25 45 24" stroke="#14B8A6" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6" />
          <path d="M30 15 Q 40 10 50 12" stroke="#14B8A6" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6" />
          {/* Glistening water drop */}
          <ellipse cx="25" cy="18" rx="2.2" ry="1.4" fill="#E0F2FE" opacity="0.85" />
          <ellipse cx="24.4" cy="17.4" rx="0.7" ry="0.4" fill="#FFFFFF" opacity="0.95" />
        </svg>
      </motion.div>

      {/* 2b. Exquisite blooming lotus in center */}
      <motion.div
        animate={{ y: [0, -2.5, 0], rotate: [-3, 3, -3] }}
        transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
        className="flex flex-col items-center relative z-30"
      >
        <svg className="w-20 h-20 md:w-24 md:h-24 filter drop-shadow-[0_3px_6px_rgba(0,0,0,0.18)]" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lotusPetalGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#BE185D" />
              <stop offset="55%" stopColor="#F472B6" />
              <stop offset="100%" stopColor="#FFF1F2" />
            </linearGradient>
            <linearGradient id="lotusPetalGradBack" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#9D174D" />
              <stop offset="100%" stopColor="#E879F9" />
            </linearGradient>
          </defs>
          
          {/* Stem */}
          <path d="M40 80 Q38 65 40 45" stroke="#065F46" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M40 80 Q38 65 40 45" stroke="#34D399" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

          {/* BACK PETALS */}
          <path d="M 40 48 C 22 48 10 38 40 18 C 70 38 58 48 40 48 Z" fill="url(#lotusPetalGradBack)" />
          <path d="M 40 48 C 15 42 16 28 35 24 C 40 28 40 40 40 48 Z" fill="url(#lotusPetalGradBack)" opacity="0.9" />
          <path d="M 40 48 C 65 42 64 28 45 24 C 40 28 40 40 40 48 Z" fill="url(#lotusPetalGradBack)" opacity="0.9" />

          {/* MID COAT PETALS */}
          <path d="M 40 48 C 24 50 18 35 38 28 C 42 34 41 45 40 48 Z" fill="url(#lotusPetalGrad)" />
          <path d="M 40 48 C 56 50 62 35 42 28 C 38 34 39 45 40 48 Z" fill="url(#lotusPetalGrad)" />

          {/* CUPPING FOREGROUND PETALS */}
          <path d="M 40 50 C 26 50 28 34 40 32 C 52 34 54 50 40 50 Z" fill="url(#lotusPetalGrad)" />
          <path d="M 40 50 C 31 50 32 38 40 37 C 48 38 49 50 40 50 Z" fill="#FFF5F5" />
          
          {/* Raised Seedpod inside center */}
          <ellipse cx="40" cy="38" rx="5" ry="3" fill="#FBBF24" />
          <ellipse cx="40" cy="37" rx="3.5" ry="1.8" fill="#10B981" />
          <circle cx="38.5" cy="37" r="0.6" fill="#FBBF24" />
          <circle cx="40" cy="36.2" r="0.6" fill="#FBBF24" />
          <circle cx="41.5" cy="37" r="0.6" fill="#FBBF24" />
          {/* Filaments */}
          <path d="M35 38 L32 36 M36 39 L33 39 M44 39 L47 39 M45 38 L48 36 M41 40 L41 42" stroke="#FBBF24" strokeWidth="0.8" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* 2c. Right Lilypad with beautiful flower bud nestled next to it */}
      <motion.div
        animate={{ rotate: [2, -2, 2], y: [0.3, -0.9, 0.3] }}
        transition={{ repeat: Infinity, duration: 5.8, ease: "easeInOut", delay: 0.8 }}
        className="relative w-20 h-10 origin-center flex items-end justify-center"
      >
        <div className="relative w-full h-full">
          <svg className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lilypadGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0D5E56" />
                <stop offset="100%" stopColor="#044740" />
              </linearGradient>
            </defs>
            {/* Sliced circular pad */}
            <path d="M 30 15 L 20 2 C 8 4 -4 18 6 26 C 20 32 44 32 54 22 C 62 12 50 1 32 2 C 30 2 30 15 30 15 Z" fill="url(#lilypadGrad2)" />
            <path d="M30 15 Q 16 10 10 14" stroke="#14B8A6" strokeWidth="0.8" fill="none" opacity="0.6" />
            <path d="M30 15 Q 32 26 24 28" stroke="#14B8A6" strokeWidth="0.8" fill="none" opacity="0.6" />
            <path d="M30 15 Q 46 22 52 14" stroke="#14B8A6" strokeWidth="0.8" fill="none" opacity="0.6" />
          </svg>
          
          {/* Sweet Lotus Bud poking up */}
          <div className="absolute top-[-10px] right-[12%] w-6 h-10 pointer-events-none origin-bottom">
            <svg className="w-full h-full filter drop-shadow-xs" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 32 Q9 20 10 12" stroke="#065F46" strokeWidth="2.5" />
              <path d="M10 16 C3 16 4 4 10 0 C16 4 17 16 10 16 Z" fill="url(#lotusPetalGradBack)" />
              <path d="M10 16 C6 16 6 8 10 3 C14 8 14 16 10 16 Z" fill="url(#lotusPetalGrad)" />
            </svg>
          </div>
        </div>
      </motion.div>
      {!isNight && <SummerDragonfly />}
    </div>
  );
};

// 3. Autumn Leaves Pile (秋叶堆) - Exquisite details of multi-colored Maple & Ginkgo leaves with fine veins
export const AutumnLeavesPile = () => {
  const MapleLeaf = ({ className, color1, color2, style }: { className?: string; color1: string; color2: string; style?: React.CSSProperties }) => {
    const randomId = React.useId().replace(/:/g, '');
    return (
      <svg className={className} style={style} viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`maple-${randomId}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color1} />
            <stop offset="100%" stopColor={color2} />
          </linearGradient>
        </defs>
        {/* Maple stem */}
        <path d="M12 21 L12 27" stroke={color1} strokeWidth="1.8" strokeLinecap="round" />
        {/* 5-lobed detailed maple leaf path */}
        <path 
          d="M12 21 C10 19.5 7 19.2 4 17 C3.2 16.4 2.8 15.2 4.5 14.5 C6.5 13.7 8 15 9.5 16.5 C8.5 12.8 6.5 9.5 5 6 C4.5 4.8 6.5 3.5 7.8 4.8 C9.2 6.2 10.5 8.2 11 11 C11.2 8.2 12.5 6.2 13.9 4.8 C15.2 3.5 17.2 4.8 16.7 6 C15.2 9.5 13.2 12.8 12.2 16.5 C13.7 15 15.2 13.7 17.2 14.5 C18.9 15.2 18.5 16.4 17.7 17 C14.7 19.2 11.7 19.5 9.7 21 Z" 
          fill={`url(#maple-${randomId})`} 
          stroke={color1} 
          strokeWidth="0.5" 
        />
        {/* Fine rib veins */}
        <path d="M12 21 L12 11 M12 18 L7 14 M12 16 L6 9 M12 18 L17 14 M12 16 L18 9" stroke="#000000" strokeWidth="0.3" opacity="0.15" />
      </svg>
    );
  };

  const GinkgoLeaf = ({ className, color1, color2, style }: { className?: string; color1: string; color2: string; style?: React.CSSProperties }) => {
    const randomId = React.useId().replace(/:/g, '');
    return (
      <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`ginkgo-${randomId}`} x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor={color1} />
            <stop offset="100%" stopColor={color2} />
          </linearGradient>
        </defs>
        {/* Ginkgo stem */}
        <path d="M12 23 C11.5 18 10 16 12 13" stroke={color1} strokeWidth="1.5" strokeLinecap="round" />
        {/* Broad fan leaf */}
        <path 
          d="M12 13 C8 13 4 10 2 6 C1.5 5 2.5 3.5 4.5 4 Q7 4.5 11 10 Q12 4 12.5 1.5 C13.5 4 14.5 4.5 17 4 C19 3.5 20 5 19.5 6 C17.5 10 13.5 13 12 13 Z" 
          fill={`url(#ginkgo-${randomId})`} 
          stroke={color1} 
          strokeWidth="0.4" 
        />
        {/* Radially spreading lines */}
        <path d="M12 13 L5 5 M12 13 L8 4 M12 13 L12 2 M12 13 L16 4 M12 13 L19 5" stroke="#000000" strokeWidth="0.25" opacity="0.12" fill="none" />
      </svg>
    );
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 md:h-22 pointer-events-none z-20 overflow-hidden flex items-end">
      {/* Soft floor base shadows */}
      <div className="absolute bottom-[-10px] left-[-30px] w-80 h-14 bg-amber-950/30 rounded-full filter blur-xl" />
      <div className="absolute bottom-[-10px] right-[-30px] w-80 h-14 bg-amber-950/30 rounded-full filter blur-xl" />

      {/* Overlapping rich piles on LEFT corner (Dual-layered for volumetric richness) */}
      <div className="absolute bottom-[-2px] left-[-15px] flex items-end h-22 w-96">
        {/* Layer 1: Back row (Slightly smaller, background leaves) */}
        <MapleLeaf color1="#7C2D12" color2="#B45309" className="w-9 h-11 absolute bottom-6 left-6 transform rotate-[15deg] opacity-75" />
        <GinkgoLeaf color1="#854D0E" color2="#D97706" className="w-8 h-8 absolute bottom-7 left-[65px] transform rotate-[60deg] opacity-80" />
        <MapleLeaf color1="#9D174D" color2="#C2410C" className="w-10 h-12 absolute bottom-5 left-[105px] transform rotate-[-65deg] opacity-80" />
        <GinkgoLeaf color1="#B45309" color2="#F59E0B" className="w-9 h-9 absolute bottom-6 left-[145px] transform rotate-[-10deg] opacity-75" />
        <MapleLeaf color1="#9A3412" color2="#EA580C" className="w-9 h-11 absolute bottom-5 left-[185px] transform rotate-[110deg] opacity-75" />

        {/* Layer 2: Main row (Large, vibrant foreground leaves) */}
        <MapleLeaf color1="#9A3412" color2="#EA580C" className="w-12 h-14 absolute bottom-1.5 left-3 transform rotate-[45deg]" />
        <GinkgoLeaf color1="#D97706" color2="#FBBF24" className="w-10 h-10 absolute bottom-0 left-12 transform rotate-[-15deg]" />
        <MapleLeaf color1="#7C2D12" color2="#C2410C" className="w-13 h-15 absolute bottom-[-3px] left-20 transform rotate-[-55deg] scale-110" />
        <GinkgoLeaf color1="#B45309" color2="#F59E0B" className="w-11 h-11 absolute bottom-1 left-30 transform rotate-[35deg]" />
        <MapleLeaf color1="#9D174D" color2="#DB2777" className="w-11 h-13 absolute bottom-2.5 left-40 transform rotate-[80deg]" />
        <GinkgoLeaf color1="#C2410C" color2="#F59E0B" className="w-9 h-9 absolute bottom-0 left-[210px] transform rotate-[65deg]" />
        <MapleLeaf color1="#B91C1C" color2="#F87171" className="w-10 h-12 absolute bottom-[-4px] left-1 transform rotate-[-25deg]" />
        <GinkgoLeaf color1="#854D0E" color2="#EAB308" className="w-11 h-11 absolute bottom-2 left-26 transform rotate-[-80deg]" />
        <MapleLeaf color1="#EA580C" color2="#F59E0B" className="w-11 h-13 absolute bottom-0.5 left-[120px] transform rotate-[-25deg]" />
        <GinkgoLeaf color1="#9A3412" color2="#D97706" className="w-10 h-10 absolute bottom-1.5 left-[162px] transform rotate-[45deg]" />
        <MapleLeaf color1="#7C2D12" color2="#EA580C" className="w-12 h-14 absolute bottom-[-1px] left-[230px] transform rotate-[-35deg]" />
      </div>

      {/* Overlapping rich piles on RIGHT corner (Dual-layered for volumetric richness) */}
      <div className="absolute bottom-[-2px] right-[-15px] flex items-end h-22 w-96">
        {/* Layer 1: Back row (Slightly smaller Background leaves) */}
        <GinkgoLeaf color1="#854D0E" color2="#D97706" className="w-8 h-8 absolute bottom-7 right-6 transform rotate-[-50deg] opacity-75" />
        <MapleLeaf color1="#7C2D12" color2="#B45309" className="w-10 h-11 absolute bottom-5 right-[65px] transform rotate-[105deg] opacity-80" />
        <GinkgoLeaf color1="#C2410C" color2="#F59E0B" className="w-9 h-9 absolute bottom-6 right-[115px] transform rotate-[-20deg] opacity-75" />
        <MapleLeaf color1="#9D174D" color2="#EA580C" className="w-9 h-11 absolute bottom-5 right-[165px] transform rotate-[35deg] opacity-80" />
        <GinkgoLeaf color1="#9A3412" color2="#FBBF24" className="w-8 h-8 absolute bottom-6 right-[215px] transform rotate-[-75deg] opacity-85" />

        {/* Layer 2: Main row (Large, vibrant foreground leaves) */}
        <GinkgoLeaf color1="#C2410C" color2="#FBBF24" className="w-11 h-11 absolute bottom-1 right-2 transform rotate-[-65deg]" />
        <MapleLeaf color1="#9A3412" color2="#EA580C" className="w-13 h-15 absolute bottom-0.5 right-10 transform rotate-[-15deg] scale-105" />
        <GinkgoLeaf color1="#B45309" color2="#F59E0B" className="w-10 h-10 absolute bottom-3 right-20 transform rotate-[45deg]" />
        <MapleLeaf color1="#7C2D12" color2="#B91C1C" className="w-12 h-14 absolute bottom-[-2px] right-[110px] transform rotate-[30deg] scale-105" />
        <GinkgoLeaf color1="#854D0E" color2="#EAB308" className="w-12 h-12 absolute bottom-2 right-[190px] transform rotate-[-40deg]" />
        <MapleLeaf color1="#9D174D" color2="#EC4899" className="w-10 h-12 absolute bottom-0.5 right-[225px] transform rotate-[95deg]" />
        <MapleLeaf color1="#C2410C" color2="#F59E0B" className="w-11 h-13 absolute bottom-[-3px] right-[150px] transform rotate-[-75deg]" />
        <GinkgoLeaf color1="#EA580C" color2="#F59E0B" className="w-10 h-10 absolute bottom-1.5 right-[135px] transform rotate-[15deg]" />
        <MapleLeaf color1="#7C2D12" color2="#F59E0B" className="w-12 h-14 absolute bottom-0 right-[255px] transform rotate-[-25deg]" />
      </div>

      {/* Scattered leaves across the CENTER ground (Increased counts & layered overlap) */}
      <div className="absolute bottom-[-1px] left-[24%] right-[24%] flex justify-around items-end h-12 z-20">
        <GinkgoLeaf color1="#D97706" color2="#FBBF24" className="w-9 h-9 transform rotate-[40deg] opacity-80" />
        <MapleLeaf color1="#7C2D12" color2="#EA580C" className="w-11 h-13 transform rotate-[-28deg] opacity-85" style={{ marginBottom: '-4px' }} />
        <GinkgoLeaf color1="#C2410C" color2="#F59E0B" className="w-10 h-10 transform rotate-[-55deg] opacity-80" />
        <GinkgoLeaf color1="#B45309" color2="#EAB308" className="w-8.5 h-8.5 transform rotate-[20deg] opacity-75" style={{ marginBottom: '-6px' }} />
        <MapleLeaf color1="#B91C1C" color2="#F87171" className="w-9 h-11 transform rotate-[65deg] opacity-75" />
        <MapleLeaf color1="#9D174D" color2="#EC4899" className="w-8 h-10 transform rotate-[-12deg] opacity-70" />
      </div>
    </div>
  );
};
