import React from 'react';
import { motion } from 'motion/react';

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
