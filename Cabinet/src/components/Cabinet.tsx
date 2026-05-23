import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Key, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { TimeTheme } from '../types';
import { startCricketSounds, stopCricketSounds } from '../utils/cricketSounds';

interface CabinetProps {
  onOpenBox: (boxId: string) => void;
  theme: TimeTheme;
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

// ----------------------------------------------------------------------
// Exquisite Vector-Drawn Seasonal Decor Components (Swallow Nest, Dragonfly, Wild Geese)
// ----------------------------------------------------------------------

// 1. Spring Swallow Nest & Swallow Component
const SpringSwallows = ({ isNight }: { isNight: boolean }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
      {/* Swallow Nest — 桌面左侧居中；手机固定于视口下方（展柜区域之下），不挡木柜 */}
      <div className="absolute left-0 md:left-2 w-20 flex flex-col items-center origin-left max-md:fixed max-md:bottom-[7%] max-md:left-2 max-md:z-20 max-md:scale-[0.75] max-md:translate-y-0 md:top-1/2 md:-translate-y-1/2 md:scale-100">
        {/* Nest Structure */}
        <div className="relative w-20 h-10 select-none">
          {/* Mud Texture/Accents background and mud sticks details */}
          <svg className="w-full h-full filter drop-shadow-md" viewBox="0 0 80 40">
            {/* Sticks sticking out */}
            <path d="M 5 22 L 0 25 M 75 22 L 80 25 M 15 32 L 8 36 M 65 32 L 72 36 M 40 35 L 40 40" stroke="#451A03" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 22 28 L 26 34 M 58 28 L 54 34" stroke="#451A03" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Main Mud Bowl */}
            <path d="M 5 10 Q 5 36, 40 36 T 75 10 Q 40 16, 5 10 Z" fill="#5C3A21" stroke="#3E2715" strokeWidth="1.5" />
            {/* Mud Layers */}
            <path d="M 10 18 Q 40 24, 70 18" stroke="#78350F" strokeWidth="2.5" fill="none" opacity="0.6" strokeLinecap="round" />
            <path d="M 18 26 Q 40 30, 62 26" stroke="#451A03" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round" />
            
            {/* Straw/Grass on top */}
            <path d="M 8 13 Q 22 15, 36 13 T 72 13" stroke="#FBBF24" strokeWidth="1.2" fill="none" opacity="0.8" strokeLinecap="round" />
            
            {/* Fine text styled beneath the nest */}
            <text x="40" y="27" fill="#FEF3C7" fontSize="5" fontWeight="bold" textAnchor="middle" opacity="0.8">NEST</text>
          </svg>

          {/* Sleeping Swallows inside the nest during the night */}
          {isNight && (
            <motion.div
              animate={{ y: [0, -1.8, 0] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
              className="absolute -top-[12px] left-1/2 -translate-x-1/2 flex space-x-1.5 z-[-1]"
            >
              {/* Swallow 1 */}
              <div className="relative w-6 h-6 flex flex-col items-center">
                {/* Swallow Head */}
                <svg className="w-full h-full text-stone-900 fill-current" viewBox="0 0 24 24">
                  {/* Head dome & beak */}
                  <circle cx="12" cy="14" r="8" fill="#1E293B" />
                  <path d="M 12 14 Q 10 16, 12 19 L 12 14" fill="#EF4444" /> {/* red throat */}
                  <path d="M 12 10 L 12 6 L 14 9 Z" fill="#FBBF24" /> {/* beak */}
                  {/* Closed sleeping eyes */}
                  <path d="M 7 11 Q 8.5 12.5, 10 11 M 14 11 Q 15.5 12.5, 17 11" stroke="#FEF08A" strokeWidth="1" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              
              {/* Swallow 2 */}
              <div className="relative w-6 h-6 flex flex-col items-center -ml-1">
                {/* Swallow Head */}
                <svg className="w-full h-full text-stone-900 fill-current" viewBox="0 0 24 24">
                  <circle cx="12" cy="14" r="7.5" fill="#334155" />
                  <path d="M 12 14 Q 10 16, 12 19 L 12 14" fill="#EF4444" />
                  <path d="M 12 10 L 11 6 L 13 8 Z" fill="#FBBF24" />
                  {/* Closed sleeping eyes */}
                  <path d="M 7.5 11.5 Q 8.8 12.8, 10 11.5 M 14 11.5 Q 15.2 12.8, 16.5 11.5" stroke="#FEF08A" strokeWidth="1" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            </motion.div>
          )}
        </div>
        <span className="text-[7.5px] font-bold text-stone-400 mt-1 uppercase tracking-widest bg-stone-900/10 px-1.5 py-0.5 rounded-md">燕巢 Swallow</span>
      </div>

      {/* Daytime Flying Swallows */}
      {!isNight && (
        <>
          {/* Swallow 1: Big Swoop (desktop — 手机不飞经展柜区域) */}
          <motion.div
            className="hidden md:block"
            style={{
              position: 'absolute',
              width: '44px',
              height: '44px',
              top: '0px',
              left: '0px',
            }}
            animate={{
              x: ['10vw', '45vw', '80vw', '55vw', '25vw', '10vw'],
              y: ['25vh', '15vh', '30vh', '10vh', '20vh', '25vh'],
              rotate: [15, -10, 45, -30, 25, 15],
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

          {/* Swallow 2: desktop */}
          <motion.div
            className="hidden md:block"
            style={{
              position: 'absolute',
              width: '32px',
              height: '32px',
              top: '0px',
              left: '0px',
            }}
            animate={{
              x: ['75vw', '45vw', '15vw', '40vw', '80vw', '75vw'],
              y: ['15vh', '28vh', '12vh', '22vh', '10vh', '15vh'],
              rotate: [-20, 30, -45, 10, -10, -20],
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

          {/* 手机：仅在页面底部燕巢附近低飞，不经过展柜 */}
          <motion.div
            className="md:hidden"
            style={{ position: 'absolute', width: '28px', height: '28px', top: 0, left: 0 }}
            animate={{
              x: ['4vw', '28vw', '52vw', '32vw', '8vw', '4vw'],
              y: ['90vh', '92vh', '91vh', '93vh', '90.5vh', '90vh'],
              rotate: [10, -15, 20, -10, 5, 10],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className="w-full h-full text-slate-800" viewBox="0 0 60 60" fill="currentColor">
              <path d="M 28 32 L 20 54 L 28 42 L 36 54 L 28 32" fill="#334155" />
              <ellipse cx="28" cy="28" rx="7" ry="11" fill="#334155" />
              <ellipse cx="28" cy="27" rx="5" ry="9" fill="#FFFDF5" />
              <circle cx="28" cy="16" r="4.5" fill="#1E293B" />
            </svg>
          </motion.div>
        </>
      )}
    </div>
  );
};

// 2. Summer Dragonfly Component - Lands on the Center Lotus precisely
const SummerDragonfly = () => {
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
const SpringFlowers = () => {
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

// 1.5. Summer Sleeping Frog Component nestled on lilypad at night
const Frog = () => (
  <motion.div
    animate={{ y: [0, -0.8, 0], scaleY: [1, 1.03, 1] }}
    transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
    className="absolute -top-7 left-3 w-10 h-8 pointer-events-none z-10"
  >
    <svg className="w-full h-full drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.25)]" viewBox="0 0 40 32" fill="none">
      {/* Back legs / crouching joints */}
      <path d="M 8 26 C 2 24 2 18 8 18 C 10 18 12 21 11 26 Z" fill="#15803D" stroke="#166534" strokeWidth="0.8" />
      <path d="M 32 26 C 38 24 38 18 32 18 C 30 18 28 21 29 26 Z" fill="#15803D" stroke="#166534" strokeWidth="0.8" />
      
      {/* Little webbed feet at the bottom */}
      <path d="M 5 26 L 12 26 M 28 26 L 35 26" stroke="#166534" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 12 26 L 15 28 M 28 26 L 25 28" stroke="#166534" strokeWidth="1.2" strokeLinecap="round" />

      {/* Main crouching frog body */}
      <ellipse cx="20" cy="21" rx="11" ry="9" fill="#22C55E" />
      
      {/* Soft yellow-green throat that dynamically pulses and breathes */}
      <motion.ellipse
        cx="20"
        cy="22"
        rx="7"
        ry="6"
        fill="#A3E635"
        animate={{ scaleX: [1, 1.15, 1], scaleY: [1, 1.12, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        style={{ transformOrigin: "20px 28px" }}
      />
      
      {/* Front legs resting on ground */}
      <path d="M 14 22 L 12 28 C 12 28 11 29 11 30" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
      <path d="M 26 22 L 28 28 C 28 28 29 29 29 30" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />

      {/* Big bulbous frog eyes on top */}
      <circle cx="13" cy="11" r="4.5" fill="#22C55E" stroke="#15803D" strokeWidth="0.8" />
      <circle cx="27" cy="11" r="4.5" fill="#22C55E" stroke="#15803D" strokeWidth="0.8" />
      
      {/* Eyes detailing - closed serene sleeping curved eyes for cozy night ambient mood */}
      <path d="M 10.5 11 Q 13 13.5, 15.5 11" stroke="#14532D" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M 24.5 11 Q 27 13.5, 29.5 11" stroke="#14532D" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Cute content cheeks & little mouth lines */}
      <path d="M 18 19 Q 20 20.5, 22 19" stroke="#14532D" strokeWidth="1" strokeLinecap="round" fill="none" />
      {/* Pink blush cheek circles */}
      <circle cx="12" cy="16" r="1.5" fill="#F43F5E" opacity="0.65" />
      <circle cx="28" cy="16" r="1.5" fill="#F43F5E" opacity="0.65" />
    </svg>
    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[5px] font-bold text-green-300 bg-green-950/80 px-1 py-0.2 rounded border border-green-500/20 tracking-wider whitespace-nowrap opacity-90">青蛙 Cozy Frog</span>
  </motion.div>
);

// 2. Summer Pond (夏日荷塘) - Refined lilypads with veins, blooming lotus with seeds and filaments
const SummerPond = ({ isNight }: { isNight: boolean }) => {
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
const AutumnLeavesPile = () => {
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

export function Cabinet({ onOpenBox, theme }: CabinetProps) {
  const [boxInFocus, setBoxInFocus] = useState<string | null>(null);
  const [cricketsEnabled, setCricketsEnabled] = useState(true);

  // Sound synthesis effect triggered on summer nights
  useEffect(() => {
    if (theme.season === 'summer' && theme.isNight && cricketsEnabled) {
      startCricketSounds();
    } else {
      stopCricketSounds();
    }
    return () => {
      stopCricketSounds();
    };
  }, [theme.season, theme.isNight, cricketsEnabled]);

  const handleBoxClick = (boxId: string, isOpenable: boolean) => {
    if (!isOpenable) return;
    setBoxInFocus(boxId);
    
    // Smooth camera scale and layout fade out
    setTimeout(() => {
      onOpenBox(boxId);
    }, 750);
  };

  return (
    <div className="relative w-full min-h-screen bg-brand-bg py-4 md:py-6 px-4 flex flex-col justify-start items-center overflow-x-hidden select-none animate-fadeIn max-md:h-[100dvh] max-md:max-h-[100dvh] max-md:min-h-0 max-md:overflow-hidden max-md:py-2 max-md:px-3" id="cabinet-root-page">
      
      {/* ----------------------------------------------------------------------
          Seasonal Decor Elements & Dynamic Atmospheric Filters 
         ---------------------------------------------------------------------- */}
      
      {/* Spring (春) Decors */}
      {theme.season === 'spring' && !theme.isNight && (
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#93C572]/3 to-white/10 pointer-events-none z-10 mix-blend-overlay" />
      )}
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
                    duration: 6.5 + Math.random() * 4,
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
        <div className="absolute top-2 left-2 z-20 flex items-center space-x-1 bg-emerald-700/10 px-2.5 py-0.5 rounded-full text-[9px] text-emerald-800 font-bold border border-emerald-500/15">
          <span>🌱 新芽复苏</span>
        </div>
      )}
      {theme.season === 'spring' && (
        <SpringSwallows isNight={theme.isNight} />
      )}
      {theme.season === 'spring' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
          {Array.from({ length: 16 }).map((_, i) => {
            const startLeft = -10 + i * 8; // Beautifully spans wide from -10% to 118%
            const duration = 8 + (i % 5) * 2.5;
            const delay = i * 0.65;
            const scale = 0.55 + (i % 4) * 0.15;
            const windDriftRange = 160 + (i % 3) * 110; // Wind drifts them diagonally left-to-right
            const rotationDegree = 180 + (i % 4) * 90;
            return (
              <motion.div
                key={`petal-${i}`}
                initial={{ y: -30, x: 0, opacity: 0, rotate: 0, scale: scale }}
                animate={{
                  y: '105vh',
                  x: [0, windDriftRange * 0.4, windDriftRange],
                  opacity: [0, 0.85, 0.85, 0],
                  rotate: [0, rotationDegree],
                }}
                transition={{
                  repeat: Infinity,
                  duration: duration,
                  delay: delay,
                  ease: 'linear'
                }}
                style={{ left: `${startLeft}%` }}
                className="absolute"
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
      {theme.season === 'summer' && !theme.isNight && (
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/8 to-transparent pointer-events-none z-10 mix-blend-overlay rotate-12 scale-150 origin-top" />
      )}
      {theme.season === 'summer' && (
        <div className="absolute top-2 left-2 z-20 flex items-center space-x-1 bg-amber-700/10 px-2.5 py-0.5 rounded-full text-[9px] text-amber-850 font-bold border border-amber-500/15">
          <span>☀️ 仲夏蝉鸣</span>
        </div>
      )}
      {theme.season === 'summer' && (
        <div className="absolute top-1/3 right-1.5 md:right-3 pointer-events-none z-10">
          <svg className="w-5 h-8 text-stone-700/30" viewBox="0 0 24 40" fill="currentColor">
            <path d="M12 2C8 2 6 6 6 12C6 18 10 24 12 26C14 24 18 18 18 12C18 6 16 2 12 2Z" fill="#3D2B1F" />
            <path d="M12 10C5 10 3 18 3 28C3 30 5 30 7 28C9 26 12 12 12 10Z" fill="#8B7355" opacity="0.3" />
            <path d="M12 10C19 10 21 18 21 28C21 30 19 30 17 28C15 26 12 12 12 10Z" fill="#8B7355" opacity="0.3" />
            <ellipse cx="8" cy="4" rx="2" ry="2" fill="#FFC107" />
            <ellipse cx="16" cy="4" rx="2" ry="2" fill="#FFC107" />
          </svg>
          <span className="text-[5.5px] font-bold text-stone-500/30 block text-center rotate-90 mt-0.5">鸣蝉</span>
        </div>
      )}
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
            {Array.from({ length: 14 }).map((_, i) => {
              const startLeft = 5 + i * 7;
              return (
                <motion.div
                  key={`firefly-${i}`}
                  initial={{ 
                    x: 0, 
                    y: `${25 + (i % 4) * 16}%`, 
                    opacity: 0, 
                    scale: 0.5 
                  }}
                  animate={{
                    opacity: [0, 0.9, 0, 0.9, 0],
                    y: [`${25 + (i % 4) * 16}%`, `${25 + (i % 4) * 16 - 40}px`, `${25 + (i % 4) * 16 + 30}px`, `${25 + (i % 4) * 16}%`],
                    x: [0, 25, -25, 0],
                    scale: [0.5, 1.25, 0.7, 1.35, 0.5]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8 + Math.random() * 5,
                    delay: i * 0.6,
                    ease: 'easeInOut'
                  }}
                  style={{ left: `${startLeft}%` }}
                  className="absolute w-2 h-2 rounded-full bg-amber-200 pointer-events-none filter blur-[1px] shadow-[0_0_8px_#fef08a,0_0_15px_#eab308]"
                />
              );
            })}
          </div>
        </>
      )}

      {/* Autumn (秋) Decors */}
      {theme.season === 'autumn' && !theme.isNight && (
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-orange-400/2 to-transparent pointer-events-none z-10 mix-blend-color-burn" />
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
                    duration: 5.5 + Math.random() * 4,
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
        <div className="absolute top-2 left-2 z-20 flex items-center space-x-1 bg-amber-700/10 px-2.5 py-0.5 rounded-full text-[9px] text-amber-800 font-bold border border-amber-500/15">
          <span>🍂 金秋落叶</span>
        </div>
      )}
      {theme.season === 'autumn' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
          {Array.from({ length: 15 }).map((_, i) => {
            const startLeft = -15 + i * 9.5; // Beautifully spaces wide from -15% to 118%
            const duration = 10 + (i % 5) * 2;
            const delay = i * 0.8;
            const scale = 0.55 + (i % 3) * 0.18;
            const windDriftRange = 140 + (i % 3) * 130; // Strong autumn wind leaves heap
            const rotationDegree = 240 + (i % 4) * 90;
            return (
              <motion.div
                key={`leaf-${i}`}
                initial={{ y: -30, x: 0, opacity: 0, rotate: 0, scale: scale }}
                animate={{
                  y: '105vh',
                  x: [0, windDriftRange * 0.4, windDriftRange],
                  opacity: [0, 0.85, 0.85, 0],
                  rotate: [0, rotationDegree],
                }}
                transition={{
                  repeat: Infinity,
                  duration: duration,
                  delay: delay,
                  ease: 'linear'
                }}
                style={{ left: `${startLeft}%` }}
                className="absolute"
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
      {theme.season === 'winter' && !theme.isNight && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#E2E8F0]/12 via-transparent to-[#CBD5E1]/8 pointer-events-none z-10" />
      )}
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
                    duration: 6.5 + Math.random() * 5,
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
        <div className="absolute top-2 left-2 z-20 flex items-center space-x-1 bg-stone-700/10 px-2.5 py-0.5 rounded-full text-[9px] text-stone-600 font-bold border border-stone-500/15">
          <span>❄️ 凛冬风雪</span>
        </div>
      )}
      {theme.season === 'winter' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
          {Array.from({ length: 32 }).map((_, i) => {
            const startLeft = -5 + i * 3.6; // Outstanding spacing spanning -5% to 110%
            const duration = 6 + (i % 5) * 1.5;
            const delay = i * 0.25;
            const scale = 0.35 + (i % 4) * 0.2;
            const windDriftRange = 70 + (i % 3) * 90; // Snow blowing slantingly
            return (
              <motion.div
                key={`snow-${i}`}
                initial={{ y: -15, x: 0, opacity: 0, scale: scale }}
                animate={{
                  y: '105vh',
                  x: [0, windDriftRange * 0.5, windDriftRange],
                  opacity: [0, 0.85, 0.85, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: duration,
                  delay: delay,
                  ease: 'linear'
                }}
                style={{ left: `${startLeft}%` }}
                className="absolute"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/75 filter blur-[0.3px]" />
              </motion.div>
            );
          })}
        </div>
      )}
      {theme.season === 'winter' && (
        <motion.div
          animate={{ opacity: [0.03, 0.07, 0.03] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/3 w-[280px] h-[190px] bg-white rounded-full filter blur-3xl pointer-events-none z-10"
        />
      )}

      {/* Warm Ambient Floating Dust and Glow */}
      <div className="absolute inset-0 ambient-glow pointer-events-none" />
      <div className="absolute top-10 left-12 w-32 h-32 bg-amber-100/10 blur-2xl rounded-full pointer-events-none" />

      {/* Header Section: Reduced padding to bring the cabinet closer to the title */}
      <header className="w-full max-w-4xl mx-auto pt-2 pb-2 md:pt-4 md:pb-3 px-2 md:px-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-2.5 z-20 border-b border-[#E5DACE]/60 max-md:shrink-0 max-md:pt-0 max-md:pb-1.5 max-md:gap-1" id="cabinet-title-section">
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
            className="text-3xl md:text-5xl font-light tracking-tight leading-none text-brand-text font-serif"
            id="cabinet-main-title"
          >
            Our Story
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-0.5 text-[10px] md:text-sm text-brand-text/60 italic font-serif leading-snug max-md:line-clamp-1"
          >
            A collection of moments, captured in time. 叩开密匣，重温属于我们的浪漫时光。
          </motion.p>
        </div>

        <div className="flex flex-col items-end gap-1 w-full md:w-auto mt-1 md:mt-0 max-md:shrink-0">
          {/* Cricket Sound Toggle for Summer Night */}
          {theme.season === 'summer' && theme.isNight && (
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={() => setCricketsEnabled(v => !v)}
              className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-full text-[9px] font-bold border cursor-pointer shadow-xs transition-all active:scale-95 ${
                cricketsEnabled 
                  ? 'bg-amber-500/15 text-amber-600 border-amber-500/30' 
                  : 'bg-stone-500/10 text-stone-400 border-[#E5DACE]'
              }`}
              title="夏夜虫鸣开关"
            >
              {cricketsEnabled ? <Volume2 className="w-3.5 h-3.5 text-amber-600 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span>{cricketsEnabled ? '夏夜虫鸣已启' : '虫鸣静音'}</span>
            </motion.button>
          )}

          <div className="flex space-x-4 text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] font-sans text-[#8C6239]/50 pb-0 md:pb-1 border-t md:border-t-0 border-[#E5DACE]/40 pt-1 md:pt-0 w-full md:w-auto justify-between md:justify-end">
            <span>By 小胡 &bull; 平平</span>
            <span>Since 2026.05</span>
          </div>
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
        className="w-full max-w-3xl bg-stone-950/5 p-1.5 md:p-3 rounded-2xl md:rounded-3xl border border-stone-800/10 shadow-xl mt-1 md:mt-2 mb-0 md:mb-2 relative max-md:flex-1 max-md:min-h-0 max-md:flex max-md:flex-col"
        id="wooden-cabinet-wrapper"
      >
        {/* Real wood shelf look — 手机三层均分剩余高度，去掉 400px 空层 */}
        <div className="absolute inset-1 md:inset-1.5 rounded-2xl bg-[#5A3E23] wood-pattern shadow-inner border-2 md:border-4 border-[#6D4C2B] flex flex-col justify-between p-1.5 md:p-4 space-y-1 md:space-y-6 max-md:h-full max-md:min-h-0" id="shelf-contents-box">
          
          <div className="absolute inset-0 wood-grain-radial pointer-events-none opacity-85" />

          {/* LAYER 1 (Top Shelf) - Heights raised, leaving plenty of vertical space */}
          <div className="relative flex-1 min-h-[68px] max-h-[28dvh] md:flex-none md:h-[400px] w-full flex items-end justify-between px-2 md:px-14 border-b-4 md:border-b-12 border-[#5A3E23] bg-black/25 shadow-md rounded-t-lg overflow-hidden" id="shelf-layer-1">
            <span className="absolute top-2 left-3 text-[8px] md:text-[9px] text-amber-100/40 uppercase tracking-widest font-mono">1st Tier · 信笺</span>
            
            {/* Optimized Venus Flytrap */}
            <div className="mb-0.5 max-md:scale-[0.72] max-md:origin-bottom">
              <VenusFlyTrap />
            </div>

            {/* FIRST BOX: Timeless Letter box (Ultra compact style, height reduced significantly so space exists above) */}
            <div className="relative mb-0.5 group">
              <motion.div
                whileHover={boxInFocus ? {} : { y: -6, scale: 1.02 }}
                onClick={() => handleBoxClick('envelopes', true)}
                className={`w-24 md:w-36 h-[50px] md:h-[72px] max-md:ml-2 ml-[40px] rounded-xl shadow-xl cursor-pointer bg-gradient-to-b from-[#8C6239] to-[#5A3E23] border border-[#6D4C2B] relative flex flex-col justify-center items-center transition-all p-2 ${
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
            <div className="mb-0.5 max-md:scale-[0.72] max-md:origin-bottom">
              <HelloKittyDoll />
            </div>
          </div>

          {/* LAYER 2 (Middle Shelf) */}
          <div className="relative flex-1 min-h-[68px] max-h-[28dvh] md:flex-none md:h-[400px] w-full flex items-end justify-between px-2 md:px-14 border-b-4 md:border-b-12 border-[#5A3E23] bg-black/25 shadow-md overflow-hidden" id="shelf-layer-2">
            <span className="absolute top-2 left-3 text-[8px] md:text-[9px] text-amber-100/40 uppercase tracking-widest font-mono">2nd Tier · 相册</span>
            
            {/* Cozy Goldfish Bowl */}
            <div className="mb-0.5 max-md:scale-[0.72] max-md:origin-bottom">
              <GoldfishBowl />
            </div>

            {/* SECOND BOX: Polaroid snap box (Ultra compact, reduced height for generous breathing space above) */}
            <div className="relative mb-0.5 group">
              <motion.div
                whileHover={boxInFocus ? {} : { y: -6, scale: 1.02 }}
                onClick={() => handleBoxClick('photos', true)}
                className={`w-24 md:w-36 h-[50px] md:h-[72px] rounded-xl shadow-xl cursor-pointer bg-gradient-to-b from-[#7c5043] to-[#4e342e] border border-[#55362e] relative flex flex-col justify-center items-center transition-all p-2 ${
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
          <div className="relative flex-1 min-h-[68px] max-h-[28dvh] md:flex-none md:h-[400px] w-full flex items-end justify-between px-2 md:px-14 border-b-4 md:border-b-12 border-[#5A3E23] bg-black/25 shadow-md rounded-b-lg overflow-hidden" id="shelf-layer-3">
            <span className="absolute top-2 left-3 text-[8px] md:text-[9px] text-amber-100/40 uppercase tracking-widest font-mono">3rd Tier · 珍藏</span>
            
            {/* Cozy Lemon Bonsai with branch nodes */}
            <div className="mb-0.5 max-md:scale-[0.72] max-md:origin-bottom">
              <LemonTree />
            </div>

            {/* THIRD BOX: Locked future box (Compact, fits perfectly) */}
            <div className="relative mb-0.5 group">
              <div
                className="w-24 md:w-36 h-[50px] md:h-[72px] rounded-xl shadow-md bg-gradient-to-b from-[#A69580] to-[#736353] border border-[#594d40] relative flex flex-col justify-center items-center p-2 opacity-95 select-none"
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

      <footer className="w-full max-w-xl z-20 flex flex-col items-center shrink-0 max-md:mt-0 max-md:pt-0.5 max-md:pb-0 md:mt-auto md:pt-4 md:pb-2" id="cabinet-action-bar">
        <div className="mt-0 md:mt-3 text-center text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-brand-text/40 font-auto">
          CRAFTED WITH LOVE . SEALED WITH US
        </div>
      </footer>

      {/* ----------------------------------------------------------------------
          Seasonal Bottom Floor Elements (Lawn, Lotus, Leaf Pile, Snowman)
         ---------------------------------------------------------------------- */}
      {theme.season === 'spring' && (
        <div className="absolute bottom-0 left-0 right-0 h-9 md:h-24 pointer-events-none z-10 overflow-hidden flex items-end">
          <svg className="w-full h-7 md:h-14 text-emerald-600/25" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,80 Q180,60 360,80 T720,70 T1080,80 T1440,65 L1440,100 L0,100 Z" opacity="0.8" fill="#10B981" />
            <path d="M0,90 Q120,75 240,90 T480,85 T960,90 T1440,80 L1440,100 L0,100 Z" fill="#047857" opacity="0.9" />
          </svg>
          <SpringFlowers />
        </div>
      )}

      {theme.season === 'summer' && (
        <div className="absolute bottom-0 left-0 right-0 h-10 md:h-28 pointer-events-none z-10 overflow-hidden flex items-end">
          <svg className="w-full h-7 md:h-14 text-cyan-800/15" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,75 Q360,55 720,75 T1440,65 L1440,100 L0,100 Z" fill="#0E7490" opacity="0.25" />
            <path d="M0,85 Q360,80 720,85 T1440,80 L1440,100 L0,100 Z" fill="#0369A1" opacity="0.45" />
          </svg>
          <SummerPond isNight={theme.isNight} />
        </div>
      )}

      {theme.season === 'autumn' && (
        <div className="absolute bottom-0 left-0 right-0 h-9 md:h-22 pointer-events-none z-10 overflow-hidden flex items-end pb-0.5">
          <AutumnLeavesPile />
        </div>
      )}

      {theme.season === 'winter' && (
        <div className="absolute bottom-0 left-0 right-0 h-11 md:h-28 pointer-events-none z-10 overflow-hidden flex items-end">
          {/* Beautifully curved snowy slope */}
          <svg className="w-full h-6 md:h-12 text-slate-100/90 filter drop-shadow-inner" viewBox="0 0 1440 40" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,18 C360,32 1080,8 1440,25 L1440,40 L0,40 Z" fill="#F1F5F9" opacity="0.95" />
            <path d="M0,24 C360,34 1080,18 1440,32 L1440,40 L0,40 Z" fill="#E2E8F0" opacity="0.6" />
          </svg>
          
          {/* Snowman right side */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            className="absolute bottom-0.5 right-[10%] md:right-[22%] flex flex-col items-center pointer-events-none z-20"
          >
            <div className="relative flex flex-col items-center" style={{ height: '46px', width: '34px' }}>
              {/* Head */}
              <div className="w-6.5 h-6.5 bg-white rounded-full border border-slate-300 relative flex items-center justify-center z-20 shadow-xs">
                {/* Small coal eyes */}
                <div className="absolute top-2 left-1.5 w-1 h-1 bg-stone-900 rounded-full" />
                <div className="absolute top-2 right-1.5 w-1 h-1 bg-stone-900 rounded-full" />
                {/* Carrot nose */}
                <div className="absolute top-2.5 w-1.8 h-0.8 bg-orange-500 rounded-full transform scale-x-150 rotate-3" />
                {/* Elegant little hat */}
                <div className="absolute -top-3 w-5 h-3.5 flex flex-col items-center justify-end">
                  <div className="w-3.5 h-3 bg-stone-800 rounded-t-xs" />
                  <div className="w-6.5 h-1 bg-stone-800 rounded-full" />
                </div>
              </div>
              
              {/* Cozy red scarf wrapping the neck */}
              <div className="w-5.5 h-2 bg-red-600 rounded-full -mt-1 z-30 border-b border-red-800 flex items-center">
                {/* scarf ribbon */}
                <div className="w-1.2 h-2.5 bg-red-600 rounded-b-xs transform rotate-[20deg] ml-3.5 mt-1.5 shadow-xs" />
              </div>

              {/* Body */}
              <div className="w-9 h-9 bg-white rounded-full border border-slate-300 -mt-0.8 relative flex flex-col items-center justify-center z-10 shadow-sm">
                {/* Colorful coal buttons */}
                <div className="w-1 h-1 bg-red-500 rounded-full mb-0.5" />
                <div className="w-1 h-1 bg-green-500 rounded-full" />
                {/* Small twig arms */}
                <div className="absolute -left-2 top-2.5 w-2.5 h-0.5 bg-[#4c3217] transform -rotate-[22deg] origin-right" />
                <div className="absolute -right-2 top-3 w-2.5 h-0.5 bg-[#4c3217] transform rotate-[15deg] origin-left" />
              </div>
            </div>
          </motion.div>

          {/* Adorable Snow bunny on the left side */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
            className="absolute bottom-0 left-[12%] md:left-[24%] flex flex-col items-center z-20"
          >
            <div className="w-5.5 h-5 bg-white rounded-full border border-slate-200 relative shadow-xs">
              {/* Floppy bunny snow ears */}
              <div className="absolute -top-1 left-1.2 w-1.2 h-2.6 bg-white rounded-t-full border-t border-x border-slate-200" />
              <div className="absolute -top-1.2 right-1.2 w-1.2 h-3 bg-white rounded-t-full border-t border-x border-slate-200 transform -rotate-12" />
              {/* Bright pink coal eyes */}
              <div className="absolute top-1.8 left-1.2 w-0.6 h-0.6 bg-red-400 rounded-full" />
              <div className="absolute top-1.8 right-1.2 w-0.6 h-0.6 bg-red-400 rounded-full" />
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
}
