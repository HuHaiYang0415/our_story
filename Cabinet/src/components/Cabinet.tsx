import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Key } from 'lucide-react';

interface CabinetProps {
  onOpenBox: (boxId: string) => void;
}

// ----------------------------------------------------------------------
// High-Quality Optimized Vector Decors (SVG + CSS Animations)
// ----------------------------------------------------------------------

// 1. 盆栽捕虫草 (Venus Flytrap Bonsai) - Fully detailed vector aesthetic
const VenusFlyTrap = () => (
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
const LemonTree = () => (
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
const GoldfishBowl = () => (
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
const HelloKittyDoll = () => (
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

export function Cabinet({ onOpenBox }: CabinetProps) {
  const [boxInFocus, setBoxInFocus] = useState<string | null>(null);

  const handleBoxClick = (boxId: string, isOpenable: boolean) => {
    if (!isOpenable) return;
    setBoxInFocus(boxId);
    
    // Smooth camera scale and layout fade out
    setTimeout(() => {
      onOpenBox(boxId);
    }, 750);
  };

  return (
    <div className="relative w-full min-h-screen bg-brand-bg py-4 md:py-6 px-4 flex flex-col justify-start items-center overflow-x-hidden select-none animate-fadeIn" id="cabinet-root-page">
      
      {/* Warm Ambient Floating Dust and Glow */}
      <div className="absolute inset-0 ambient-glow pointer-events-none" />
      <div className="absolute top-10 left-12 w-32 h-32 bg-amber-100/10 blur-2xl rounded-full pointer-events-none" />

      {/* Header Section: Reduced padding to bring the cabinet closer to the title */}
      <header className="w-full max-w-4xl mx-auto pt-2 pb-2 md:pt-4 md:pb-3 px-2 md:px-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-2.5 z-20 border-b border-[#E5DACE]/60" id="cabinet-title-section">
        <div className="space-y-1">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-amber-100/40 text-[#8C6239] text-[10px] tracking-wider uppercase font-sans font-bold border border-[#E5DACE]/30"
          >
            <Heart className="w-3 h-3 text-red-600 fill-red-600" />
            <span>时光与秘密展柜 · Our Memories</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 90 }}
            className="text-4xl md:text-5xl font-light tracking-tight leading-none text-brand-text font-serif"
            id="cabinet-main-title"
          >
            Our Story
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1 text-xs md:text-sm text-brand-text/60 italic font-serif leading-relaxed"
          >
            A collection of moments, captured in time. 叩开密匣，重温属于我们的浪漫时光。
          </motion.p>
        </div>

        <div className="flex space-x-6 text-[10px] uppercase tracking-[0.2em] font-sans text-brand-text/40 pb-1 border-t md:border-t-0 border-[#E5DACE]/40 pt-2 md:pt-0 w-full md:w-auto justify-between md:justify-end">
          <span>By 小胡 &bull; 平平</span>
          <span>Since 2026.05</span>
        </div>
      </header>

      {/* Wooden Cabinet Structure: Shrunk boxes, raised row container heights, closer to the header */}
      <motion.div
        animate={boxInFocus ? {
          scale: 2.3,
          y: boxInFocus === 'envelopes' ? 140 : boxInFocus === 'photos' ? 0 : -140,
          opacity: 0,
          transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] }
        } : {
          scale: 1,
          y: 0,
          opacity: 1
        }}
        className="w-full max-w-3xl bg-stone-950/5 p-2 md:p-3 rounded-3xl border border-stone-800/10 shadow-xl mt-1.5 md:mt-2 mb-2 relative"
        id="wooden-cabinet-wrapper"
      >
        {/* Real wood shelf look with taller layers (h-40 to h-48) */}
        <div className="absolute inset-1.5 rounded-2xl bg-[#5A3E23] wood-pattern shadow-inner border-4 border-[#6D4C2B] flex flex-col justify-between p-2 md:p-4 space-y-4 md:space-y-6" id="shelf-contents-box">
          
          <div className="absolute inset-0 wood-grain-radial pointer-events-none opacity-85" />

          {/* LAYER 1 (Top Shelf) - Heights raised, leaving plenty of vertical space */}
          <div className="relative h-[480px] md:h-[400px] w-full flex items-end justify-between px-3 md:px-14 border-b-12 border-[#5A3E23] bg-black/25 shadow-md rounded-t-lg" id="shelf-layer-1">
            <span className="absolute top-2 left-3 text-[8px] md:text-[9px] text-amber-100/40 uppercase tracking-widest font-mono">1st Tier · 信笺</span>
            
            {/* Optimized Venus Flytrap */}
            <div className="mb-0.5">
              <VenusFlyTrap />
            </div>

            {/* FIRST BOX: Timeless Letter box (Ultra compact style, height reduced significantly so space exists above) */}
            <div className="relative mb-0.5 group">
              <motion.div
                whileHover={boxInFocus ? {} : { y: -6, scale: 1.02 }}
                onClick={() => handleBoxClick('envelopes', true)}
                className={`w-28 md:w-36 h-[58px] md:h-[72px] ml-[40px] rounded-xl shadow-xl cursor-pointer bg-gradient-to-b from-[#8C6239] to-[#5A3E23] border border-[#6D4C2B] relative flex flex-col justify-center items-center transition-all p-2 ${
                  boxInFocus === 'envelopes' ? 'ring-3 ring-amber-400 z-50' : 'hover:shadow-2xl hover:border-amber-400/50'
                }`}
                id="wooden-box-envelopes"
              >
                {/* Brass locking hinge decoration */}
                <div className="w-5 h-5 bg-yellow-500 rounded-full border border-yellow-700 flex items-center justify-center shadow-xs absolute -top-1">
                  <Heart className="w-2.5 h-2.5 text-amber-100 fill-amber-300" />
                </div>

                {/* Text only design requested: "时光信箱" */}
                <div className="text-center z-10 w-full">
                  <span className="text-xs md:text-sm font-serif font-bold tracking-wider text-[#FFDACE] drop-shadow-[0_1px_1px_rgba(0,0,0,0.85)] block">
                    时光信箱
                  </span>
                  <span className="text-[7.5px] font-mono text-white/50 block tracking-widest uppercase mt-0.5">
                    Vol. 01
                  </span>
                </div>
              </motion.div>

              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 p-2 bg-brand-text text-brand-bg text-[10px] rounded shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40 text-center font-sans">
                点击打开“时光信箱”，重温心动蜜语。
              </div>
            </div>

            {/* Hello Kitty Doll */}
            <div className="mb-0.5">
              <HelloKittyDoll />
            </div>
          </div>

          {/* LAYER 2 (Middle Shelf) */}
          <div className="relative h-[480px] md:h-[400px] w-full flex items-end justify-between px-3 md:px-14 border-b-12 border-[#5A3E23] bg-black/25 shadow-md" id="shelf-layer-2">
            <span className="absolute top-2 left-3 text-[8px] md:text-[9px] text-amber-100/40 uppercase tracking-widest font-mono">2nd Tier · 相册</span>
            
            {/* Cozy Goldfish Bowl */}
            <div className="mb-0.5">
              <GoldfishBowl />
            </div>

            {/* SECOND BOX: Polaroid snap box (Ultra compact, reduced height for generous breathing space above) */}
            <div className="relative mb-0.5 group">
              <motion.div
                whileHover={boxInFocus ? {} : { y: -6, scale: 1.02 }}
                onClick={() => handleBoxClick('photos', true)}
                className={`w-28 md:w-36 h-[58px] md:h-[72px] rounded-xl shadow-xl cursor-pointer bg-gradient-to-b from-[#7c5043] to-[#4e342e] border border-[#55362e] relative flex flex-col justify-center items-center transition-all p-2 ${
                  boxInFocus === 'photos' ? 'ring-3 ring-rose-400 z-50' : 'hover:shadow-2xl hover:border-rose-400/50'
                }`}
                id="wooden-box-photos"
              >
                {/* Copper hinge */}
                <div className="w-6 h-3.5 bg-yellow-500/90 rounded-b-md border border-yellow-700 flex items-center justify-center shadow-xs absolute top-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5A3E23]" />
                </div>

                {/* Text only design requested: "相纸" */}
                <div className="text-center z-10 w-full">
                  <span className="text-xs md:text-sm font-serif font-bold tracking-wider text-[#FFEBE5] drop-shadow-[0_1px_1px_rgba(0,0,0,0.85)] block">
                    相纸
                  </span>
                  <span className="text-[7.5px] font-mono text-white/50 block tracking-widest uppercase mt-0.5">
                    Vol. 02
                  </span>
                </div>
              </motion.div>

              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 p-2 bg-brand-text text-brand-bg text-[10px] rounded shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40 text-center font-sans">
                点击进入小筑，查看美妙相册。
              </div>
            </div>

            {/* Analog Clock to support timing elegance */}
            <div className="flex flex-col items-center mb-1.5 opacity-35 select-none">
              <div className="w-6.5 h-6.5 rounded-full border border-stone-800 bg-[#FFFDFB] flex items-center justify-center relative shadow-xs">
                <div className="absolute w-[1.2px] h-2 bg-stone-950 top-1/2 left-1/2 origin-left -rotate-45" />
              </div>
            </div>
          </div>

          {/* LAYER 3 (Bottom Shelf) */}
          <div className="relative h-[480px] md:h-[400px] w-full flex items-end justify-between px-3 md:px-14 border-b-12 border-[#5A3E23] bg-black/25 shadow-md rounded-b-lg" id="shelf-layer-3">
            <span className="absolute top-2 left-3 text-[8px] md:text-[9px] text-amber-100/40 uppercase tracking-widest font-mono">3rd Tier · 珍藏</span>
            
            {/* Cozy Lemon Bonsai with branch nodes */}
            <div className="mb-0.5">
              <LemonTree />
            </div>

            {/* THIRD BOX: Locked future box (Compact, fits perfectly) */}
            <div className="relative mb-0.5 group">
              <div
                className="w-28 md:w-36 h-[58px] md:h-[72px] rounded-xl shadow-md bg-gradient-to-b from-[#A69580] to-[#736353] border border-[#594d40] relative flex flex-col justify-center items-center p-2 opacity-95 select-none"
                id="wooden-box-future"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center opacity-60">
                  <Key className="w-3 h-3 text-amber-100" />
                </div>

                <div className="text-center z-10 w-full">
                  <span className="text-xs md:text-sm font-serif font-bold tracking-wider text-stone-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.85)] block">
                    未完待续
                  </span>
                  <span className="text-[7.5px] font-mono text-stone-200/50 block mt-0.5">
                    To be Continued
                  </span>
                </div>
              </div>

              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 p-2 bg-brand-text text-brand-bg text-[10px] rounded shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-40 text-center font-sans">
                留白未来！敬请期待。
              </div>
            </div>

            {/* Visual balance */}
            <div className="w-10 h-2 bg-[#5A3E23]/20 mb-1" />
          </div>

        </div>
      </motion.div>

      <footer className="w-full max-w-xl z-20 flex flex-col items-center mt-auto pt-4 pb-2" id="cabinet-action-bar">
        <div className="mt-3 text-center text-[10px] uppercase tracking-[0.3em] text-brand-text/40 font-auto">
          CRAFTED WITH LOVE . SEALED WITH US
        </div>
      </footer>

    </div>
  );
}
