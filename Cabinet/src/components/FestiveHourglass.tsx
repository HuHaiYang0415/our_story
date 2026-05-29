import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import holidaysData from '../data/holidays.json';

const HOLIDAY_METADATA: Record<string, {
  colorName: string;
  glowColor: string; 
  sandColor: string;
}> = {
  "元旦": { colorName: "淡金色", glowColor: "#FDE047", sandColor: "#FDE047" },
  "劳动节": { colorName: "橙红", glowColor: "#EA580C", sandColor: "#EA580C" },
  "儿童节": { colorName: "草莓粉", glowColor: "#FECDD3", sandColor: "#FB7185" },
  "国庆节": { colorName: "正红", glowColor: "#DC2626", sandColor: "#DC2626" },
  "情人节": { colorName: "玫瑰红", glowColor: "#E11D48", sandColor: "#E11D48" },
  "圣诞节": { colorName: "红+绿渐变", glowColor: "red-green", sandColor: "#10B981" },
  "春节": { colorName: "朱红", glowColor: "#F97316", sandColor: "#F97316" },
  "元宵节": { colorName: "暖橙", glowColor: "#F59E0B", sandColor: "#F59E0B" },
  "端午节": { colorName: "翠绿", glowColor: "#10B981", sandColor: "#10B981" },
  "七夕": { colorName: "淡紫", glowColor: "#C084FC", sandColor: "#C084FC" },
  "中秋节": { colorName: "月白", glowColor: "#E2E8F0", sandColor: "#E2E8F0" },
  "重阳节": { colorName: "金菊黄", glowColor: "#D97706", sandColor: "#D97706" },
  "除夕": { colorName: "暗红", glowColor: "#991B1B", sandColor: "#991B1B" },
  "清明": { colorName: "青灰", glowColor: "#64748B", sandColor: "#64748B" }
};

const FESTIVAL_CONFIGS: Record<string, {
  getIcon: () => React.ReactNode;
}> = {
  "元旦": {
    getIcon: () => (
      <div className="relative w-14 h-14 flex items-center justify-center overflow-visible" id="fest-new-year">
        {/* Animated Firework: Rising & Blooming */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          
          {/* 1. Rising Rocket Trail */}
          <motion.div
            className="absolute w-1 bg-gradient-to-t from-transparent via-amber-300 to-white rounded-full origin-bottom"
            animate={{
              y: [20, -12, -12],
              height: [0, 16, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              times: [0, 0.4, 1],
              ease: "easeOut",
            }}
          />

          {/* Spark trail particles rising */}
          <motion.div
            className="absolute text-yellow-200 text-[6px]"
            animate={{
              y: [18, -10, -10],
              opacity: [0, 0.9, 0],
              x: [0, -2, 2],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              times: [0, 0.4, 1],
              ease: "easeOut",
            }}
          >
            ✧
          </motion.div>

          {/* 2. Blooming Flower Burst (Yellow/Gold) */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-yellow-300"
            animate={{
              scale: [0, 0, 1.25, 1.35, 0.8],
              opacity: [0, 0, 1, 0.9, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              times: [0, 0.38, 0.48, 0.7, 1],
              ease: "easeOut",
            }}
          >
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
              <line x1="12" y1="12" x2="12" y2="2" />
              <line x1="12" y1="12" x2="12" y2="22" />
              <line x1="12" y1="12" x2="2" y2="12" />
              <line x1="12" y1="12" x2="22" y2="12" />
              <line x1="12" y1="12" x2="5" y2="5" />
              <line x1="12" y1="12" x2="19" y2="19" />
              <line x1="12" y1="12" x2="5" y2="19" />
              <line x1="12" y1="12" x2="19" y2="5" />
            </svg>
          </motion.div>

          {/* 3. Blooming Secondary Offset Burst (Rose/Magenta) */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-rose-400"
            animate={{
              scale: [0, 0, 1.1, 1.2, 0.7],
              rotate: [0, 0, 15, 30, 45],
              opacity: [0, 0, 1, 0.8, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              times: [0, 0.42, 0.52, 0.75, 1],
              ease: "easeOut",
            }}
          >
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="1.5 1.5">
              <line x1="12" y1="12" x2="12" y2="4" />
              <line x1="12" y1="12" x2="12" y2="20" />
              <line x1="12" y1="12" x2="4" y2="12" />
              <line x1="12" y1="12" x2="20" y2="12" />
              <line x1="12" y1="12" x2="6.5" y2="6.5" />
              <line x1="12" y1="12" x2="17.5" y2="17.5" />
              <line x1="12" y1="12" x2="6.5" y2="17.5" />
              <line x1="12" y1="12" x2="17.5" y2="6.5" />
            </svg>
          </motion.div>

          {/* 4. Center flash star core */}
          <motion.div
            className="absolute text-amber-200"
            animate={{
              scale: [0, 0, 1.3, 1, 0],
              opacity: [0, 0, 1, 0.7, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              times: [0, 0.38, 0.42, 0.6, 1],
              ease: "easeOut",
            }}
          >
            <Sparkles className="w-5.5 h-5.5 stroke-[2] drop-shadow-[0_0_3px_#F59E0B]" />
          </motion.div>
        </div>
      </div>
    )
  },
  "劳动节": {
    getIcon: () => (
      <div className="relative w-14 h-14 flex items-center justify-center overflow-visible" id="fest-labor">
        {/* Animated mechanical gears and central star */}
        <div className="relative w-11 h-11">
          {/* Main big bronze gear */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute inset-0 text-[#CD7f32]/80"
          >
            <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
              <path d="M12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Zm0-5A1.5,1.5,0,1,0,13.5,12,1.5,1.5,0,0,0,12,10.5M22,12c0-.38-.28-.7-.66-.74l-2.07-.2a7.35,7.35,0,0,0-.73-1.74l1.22-1.73a.75.75,0,0,0-.09-.95l-1.41-1.41a.75.75,0,0,0-.95-.09l-1.73,1.22a7.35,7.35,0,0,0-1.74-.73l-.2-2.07A.75.75,0,0,0,12.75,2h-1.5a.75.75,0,0,0-.74.66l-.2,2.07a7.35,7.35,0,0,0-1.74.73L6.84,4.24a.75.75,0,0,0-.95.09L4.48,5.74a.75.75,0,0,0-.09.95l1.22,1.73a7.35,7.35,0,0,0-.73,1.74l-2.07.2A.75.75,0,0,0,2,11.25v1.5a.75.75,0,0,0,.66.74l2.07.2a7.35,7.35,0,0,0,.73,1.74l-1.22,1.73a.75.75,0,0,0,.09.95l1.41,1.41a.75.75,0,0,0,.95.09l1.73-1.22a7.35,7.35,0,0,0,1.74.73l.2,2.07a.75.75,0,0,0,.74.66h1.5a.75.75,0,0,0,.74-.66l.2-2.07a7.35,7.35,0,0,0,1.74-.73l1.73,1.22a.75.75,0,0,0,.95-.09l1.41-1.41a.75.75,0,0,0,.09-.95l-1.22-1.73a7.35,7.35,0,0,0,.73-1.74l2.07-.2A.75.75,0,0,0,22,12.75Z" />
            </svg>
          </motion.div>
          {/* Slower smaller gold gear */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="absolute bottom-[-4px] right-[-4px] w-6 h-6 text-yellow-600/75"
          >
            <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
              <path d="M12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Zm0-5A1.5,1.5,0,1,0,13.5,12,1.5,1.5,0,0,0,12,10.5M22,12c0-.38-.28-.7-.66-.74l-2.07-.2a7.35,7.35,0,0,0-.73-1.74l1.22-1.73a.75.75,0,0,0-.09-.95l-1.41-1.41a.75.75,0,0,0-.95-.09l-1.73,1.22a7.35,7.35,0,0,0-1.74-.73l-.2-2.07A.75.75,0,0,0,12.75,2h-1.5a.75.75,0,0,0-.74.66l-.2,2.07a7.35,7.35,0,0,0-1.74.73L6.84,4.24a.75.75,0,0,0-.95.09L4.48,5.74a.75.75,0,0,0-.09.95l1.22,1.73a7.35,7.35,0,0,0-.73,1.74l-2.07.2A.75.75,0,0,0,2,11.25v1.5a.75.75,0,0,0,.66.74l2.07.2a7.35,7.35,0,0,0,.73,1.74l-1.22,1.73a.75.75,0,0,0,.09.95l1.41,1.41a.75.75,0,0,0,.95.09l1.73-1.22a7.35,7.35,0,0,0,1.74.73l.2,2.07a.75.75,0,0,0,.74.66h1.5a.75.75,0,0,0,.74-.66l.2-2.07a7.35,7.35,0,0,0,1.74-.73l1.73,1.22a.75.75,0,0,0,.95-.09l1.41-1.41a.75.75,0,0,0,.09-.95l-1.22-1.73a7.35,7.35,0,0,0,.73-1.74l2.07-.2A.75.75,0,0,0,22,12.75Z" />
            </svg>
          </motion.div>
          {/* Floating glowing red-orange star on top */}
          <motion.div
            animate={{ scale: [0.9, 1.15, 0.9], y: [-1, 1, -1] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="absolute top-[20%] left-[20%] w-6 h-6 text-orange-500 drop-shadow-[0_1.5px_3px_rgba(249,115,22,0.4)]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
            </svg>
          </motion.div>
        </div>
      </div>
    )
  },
  "儿童节": {
    getIcon: () => (
      <div className="relative w-14 h-14 flex items-center justify-center overflow-visible" id="fest-children">
        {/* Floating helium balloons & rotating wind pinwheel */}
        <div className="relative w-12 h-12">
          {/* Strawberry Pink Balloon */}
          <motion.div
            animate={{ y: [-1.5, 2.5, -1.5], rotate: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
            className="absolute left-1 top-0.5 text-rose-400 drop-shadow-[0_1.5px_3px_rgba(244,63,94,0.3)]"
          >
            <svg className="w-6 h-8" viewBox="0 0 20 24" fill="currentColor">
              <ellipse cx="10" cy="9" rx="7" ry="9" />
              <path d="M10,18 L10,23.5" stroke="currentColor" strokeWidth="0.8" />
              <polygon points="10,17.5 8,19.5 12,19.5" />
            </svg>
          </motion.div>
          {/* Dreamy Cyan/Aqua Balloon */}
          <motion.div
            animate={{ y: [1.5, -2.5, 1.5], rotate: [4, -4, 4] }}
            transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-1 top-1 text-cyan-400 drop-shadow-[0_1.5px_3px_rgba(34,211,238,0.3)]"
          >
            <svg className="w-5 h-7.2" viewBox="0 0 20 24" fill="currentColor">
              <ellipse cx="10" cy="9" rx="6.5" ry="8.5" />
              <path d="M10,17.5 L10,23" stroke="currentColor" strokeWidth="0.8" />
              <polygon points="10,17 8,19 12,19" />
            </svg>
          </motion.div>
          {/* Mini Pinwheel spinning fast and clean */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
            className="absolute bottom-1.5 left-3.5 text-yellow-500 drop-shadow-[0_1px_2px_rgba(234,179,8,0.4)]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,12 L12,4 C14,4 16,6 16,8 Z M12,12 L20,12 C20,14 18,16 16,16 Z M12,12 L12,20 C10,20 8,18 8,16 Z M12,12 L4,12 C4,10 6,8 8,8 Z" />
            </svg>
          </motion.div>
        </div>
      </div>
    )
  },
  "国庆节": {
    getIcon: () => (
      <div className="relative w-14 h-14 flex items-center justify-center overflow-visible" id="fest-national">
        {/* Soft waving red flag banner with five gold stars */}
        <motion.div
          animate={{ rotate: [-3, 3, -3], y: [-0.6, 0.6, -0.6] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="relative flex flex-col items-center"
        >
          <div className="relative w-12 h-10 flex">
            {/* Wooden flagpole */}
            <svg className="w-[2px] h-10 flex-shrink-0" viewBox="0 0 2 10">
              <rect x="0" y="0" width="2" height="10" rx="0.5" fill="#854d0e" />
            </svg>
            {/* The flag cloth in deep chinese red with gold stars */}
            <svg className="w-11 h-8 ml-0.8 text-red-600 drop-shadow-[0_2px_4px_rgba(220,38,38,0.4)]" viewBox="0 0 24 16" fill="currentColor">
              <path d="M0,0 C6,-1.2 9,1.5 15,-0.6 C19,-1.2 22,-0.3 24,0 L24,11 C21,11 18,10.2 14,11 C8,12.2 5,10.2 0,11.2 Z" />
              {/* Golden major star */}
              <path d="M4.5,2.2 L5.2,3.8 L6.8,4 L5.6,5.1 L6,6.7 L4.5,5.8 L3,6.7 L3.4,5.1 L2.2,4 L3.8,3.8 Z" fill="#FACC15" />
              {/* Four arching small golden stars */}
              <circle cx="8" cy="1.6" r="0.45" fill="#FACC15" />
              <circle cx="9.2" cy="2.6" r="0.45" fill="#FACC15" />
              <circle cx="9.2" cy="4.2" r="0.45" fill="#FACC15" />
              <circle cx="8" cy="5.2" r="0.45" fill="#FACC15" />
            </svg>
          </div>
        </motion.div>
      </div>
    )
  },
  "情人节": {
    getIcon: () => (
      <div className="relative w-14 h-14 flex items-center justify-center overflow-visible" id="fest-valentine">
        {/* Swirling double hearts with tiny floating aura sparks */}
        <div className="relative w-11 h-11 flex items-center justify-center">
          <motion.div
            animate={{ scale: [0.92, 1.15, 0.92] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-rose-500 absolute drop-shadow-[0_3px_6px_rgba(244,63,94,0.45)]"
          >
            <Heart className="w-10 h-10 fill-rose-500" />
          </motion.div>
          <motion.div
            animate={{ scale: [0.86, 1.25, 0.86], x: [1.2, -1.2, 1.2], rotate: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            className="text-red-400 absolute right-1 bottom-1 drop-shadow-[0_1.5px_3px_rgba(239,68,68,0.4)]"
          >
            <Heart className="w-5.5 h-5.5 fill-red-400" />
          </motion.div>
          {/* Climbing floating heart sparkles */}
          <motion.div
            animate={{ y: [-15, 12], x: [-6, 6], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "linear" }}
            className="absolute left-0 text-pink-400 text-[10px]"
          >
            ❤
          </motion.div>
          <motion.div
            animate={{ y: [-10, 15], x: [6, -6], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "linear", delay: 1.6 }}
            className="absolute right-0 text-rose-300 text-[9px]"
          >
            ❤
          </motion.div>
        </div>
      </div>
    )
  },
  "圣诞节": {
    getIcon: () => (
      <div className="relative w-14 h-14 flex items-center justify-center overflow-visible" id="fest-christmas">
        {/* Layered Pine Christmas Tree topped with detailed golden star */}
        <div className="relative w-12 h-12 flex flex-col items-center justify-center">
          <motion.div
            animate={{ rotate: [-4, 4, -4], scale: [0.98, 1.02, 0.98] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="text-emerald-700 flex items-center justify-center drop-shadow-[0_2.5px_5px_rgba(4,120,87,0.35)]"
          >
            <svg className="w-11 h-11" viewBox="0 0 24 24" fill="currentColor">
              {/* Christmas Tree Layer Path */}
              <path d="M12,1.5 L3.5,13.5 H6.5 L2.5,18.5 H8.5 L2,24 H22 L15.5,18.5 H21.5 L17.5,13.5 H20.5 Z" />
              {/* Tree Trunk */}
              <rect x="10.8" y="24" width="2.4" height="3" fill="#78350F" />
              {/* Tree Ornaments */}
              <circle cx="7" cy="12" r="0.9" fill="#EF4444" />
              <circle cx="16" cy="11" r="0.9" fill="#FBBF24" />
              <circle cx="11" cy="9" r="0.9" fill="#22D3EE" />
              <circle cx="12" cy="16" r="1.1" fill="#EF4444" />
              <circle cx="8" cy="19" r="1.1" fill="#FBBF24" />
              <circle cx="17" cy="18" r="1.1" fill="#22D3EE" />
            </svg>
          </motion.div>
          {/* Top golden star shining brightly on tree tip */}
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="absolute top-[-3px] text-yellow-300 drop-shadow-[0_0_4px_#FBBF24]"
          >
            <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
          </motion.div>
        </div>
      </div>
    )
  },
  "春节": {
    getIcon: () => (
      <div className="relative w-14 h-14 flex items-center justify-center overflow-visible" id="fest-chinese-ny">
        {/* Premium traditional Chinese Red Lantern */}
        <motion.div
          animate={{ y: [-2.5, 2.5, -2.5], rotate: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 3.4, ease: "easeInOut" }}
          className="text-red-600 flex flex-col items-center justify-center relative drop-shadow-[0_3px_6px_rgba(220,38,38,0.45)]"
        >
          <svg className="w-10 h-11" viewBox="0 0 24 24" fill="currentColor">
            {/* Top golden metal cap */}
            <rect x="9.5" y="0.5" width="5" height="1.8" rx="0.4" fill="#D97706" />
            {/* Main bulging red cage */}
            <ellipse cx="12" cy="12" rx="8" ry="9" />
            {/* Inner red patterns */}
            <ellipse cx="12" cy="12" rx="4.5" ry="9" fill="#F87171" className="opacity-80" />
            <ellipse cx="12" cy="12" rx="1.8" ry="9" fill="#EF4444" />
            {/* Bottom golden metal cap */}
            <rect x="9.5" y="21.5" width="5" height="1.8" rx="0.4" fill="#D97706" />
            {/* Golden hanging threads */}
            <line x1="12" y1="23.3" x2="12" y2="28" stroke="#D97706" strokeWidth="1.2" />
            <line x1="10.5" y1="23.3" x2="10.5" y2="27" stroke="#D97706" strokeWidth="0.8" />
            <line x1="13.5" y1="23.3" x2="13.5" y2="27" stroke="#D97706" strokeWidth="0.8" />
          </svg>
          
          {/* Elegant gold "福" character on the center of lantern */}
          <motion.div
            className="absolute bg-yellow-500 text-red-700 w-4.5 h-4.5 rounded-sm border border-yellow-300 flex items-center justify-center font-bold font-serif text-[8.5px] shadow-sm transform -rotate-12"
            style={{ transform: 'rotate(180deg)', top: '32%' }}
          >
            福
          </motion.div>
        </motion.div>
      </div>
    )
  },
  "元宵节": {
    getIcon: () => (
      <div className="relative w-14 h-14 flex items-center justify-center overflow-visible" id="fest-lantern">
        {/* Gently swaying floral palace/flower lantern */}
        <motion.div
          animate={{ rotate: [-3, 3, -3], y: [-1, 1, -1] }}
          transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
          className="relative w-12 h-12 flex flex-col items-center justify-center drop-shadow-[0_3px_6px_rgba(239,68,68,0.4)]"
        >
          {/* Decorative lantern hanging cord hook */}
          <div className="w-1 h-3 bg-amber-600 rounded-t-full mb-[-2px] relative z-20" />
          
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
            {/* Elegant wood finish top frame */}
            <path d="M4,3 L20,3 L18,5 L6,5 Z" fill="#D97706" />
            
            {/* Hexagonal lantern structure */}
            {/* Main red panel */}
            <path d="M6,5 L3,13 L6,19 L18,19 L21,13 L18,5 Z" fill="#EF4444" />
            {/* Lighter yellow glow core pane */}
            <path d="M9,5 L7,13 L9,19 L15,19 L17,13 L15,5 Z" fill="#FBBF24" opacity="0.9" />
            {/* Central auspicious floral cage lattice */}
            <ellipse cx="12" cy="11.5" rx="1.6" ry="2.8" fill="#D97706" opacity="0.55" />
            <line x1="12" y1="8.7" x2="12" y2="14.3" stroke="#7F1D1D" strokeWidth="0.8" />
            <line x1="10.4" y1="11.5" x2="13.6" y2="11.5" stroke="#7F1D1D" strokeWidth="0.8" />
            
            {/* Lower wood plate outline */}
            <path d="M5,19 L19,19 L17,20.5 L7,20.5 Z" fill="#D97706" />
          </svg>

          {/* Swinging golden thread tassels */}
          <motion.div
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="flex space-x-1.5 mt-[-1px] text-amber-500 relative z-30"
          >
            <div className="w-0.8 h-3 bg-amber-500 rounded-sm" />
            <div className="w-0.8 h-4.2 bg-amber-600 rounded-sm" />
            <div className="w-0.8 h-3 bg-amber-500 rounded-sm" />
          </motion.div>

          {/* Candle light spark aura */}
          <motion.div
            animate={{ scale: [0.8, 1.15, 0.8], opacity: [0.65, 1, 0.65] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="absolute top-[36%] w-2.5 h-3 bg-orange-500 rounded-full blur-[0.4px] mix-blend-screen"
            style={{ borderRadius: "50% 50% 20% 20%" }}
          />
        </motion.div>
      </div>
    )
  },
  "端午节": {
    getIcon: () => (
      <div className="relative w-14 h-14 flex items-center justify-center overflow-visible" id="fest-dragonboat">
        {/* Shaded 3D organic leaf Zongzi wrapped beautifully */}
        <motion.div
          animate={{ y: [-2, 2, -2], rotate: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
          className="relative w-12 h-12 flex items-center justify-center drop-shadow-[0_3.5px_6px_rgba(6,78,59,0.38)]"
        >
          <svg className="w-11.5 h-11.5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="leaf-left" x1="16" y1="2" x2="4" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
              <linearGradient id="leaf-right" x1="16" y1="2" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#059669" />
                <stop offset="100%" stopColor="#064E3B" />
              </linearGradient>
              <linearGradient id="rope-grad" x1="6" y1="12" x2="26" y2="22" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FDE047" />
                <stop offset="100%" stopColor="#CA8A04" />
              </linearGradient>
            </defs>
            
            {/* Left Bamboo Leaf Side */}
            <path d="M16,2 L5,24 C5,24 9,28 16,28 Z" fill="url(#leaf-left)" />
            
            {/* Right Bamboo Leaf Side */}
            <path d="M16,2 L27,24 C27,24 23,28 16,28 Z" fill="url(#leaf-right)" />
            
            {/* Wrap flap fold line */}
            <path d="M10,21 Q16,18 22,21 L16,28 Z" fill="#047857" stroke="#064E3B" strokeWidth="0.5" opacity="0.9" />

            {/* Bamboo leaf texture veins */}
            <path d="M16,2 Q11,13 6,22" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" strokeLinecap="round" />
            <path d="M16,2 Q13,15 10,25" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" strokeLinecap="round" />
            <path d="M16,2 Q21,13 26,22" stroke="rgba(255,255,255,0.10)" strokeWidth="0.8" strokeLinecap="round" />
            <path d="M16,2 Q19,15 22,25" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" strokeLinecap="round" />

            {/* Central structural ridge ribbon */}
            <line x1="16" y1="2" x2="16" y2="28" stroke="rgba(255,255,255,0.24)" strokeWidth="1" strokeLinecap="round" />

            {/* Tight Golden binding ropes wrap */}
            {/* Upper rope loop */}
            <path d="M11,12 Q16,15 21,12" stroke="url(#rope-grad)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <path d="M11.5,12.5 Q16,15.5 20.5,12.5" stroke="#713F12" strokeWidth="0.4" fill="none" opacity="0.4" />
            {/* Middle rope loop */}
            <path d="M8.5,17 Q16,20 23.5,17" stroke="url(#rope-grad)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <path d="M9,17.5 Q16,20.5 23,17.5" stroke="#713F12" strokeWidth="0.4" fill="none" opacity="0.4" />
            {/* Lower rope loop */}
            <path d="M6,22 Q16,25 26,22" stroke="url(#rope-grad)" strokeWidth="1.2" fill="none" strokeLinecap="round" />

            {/* Little physical knot tying details with trailing ends */}
            <circle cx="9" cy="17" r="1.4" fill="url(#rope-grad)" stroke="#854D0E" strokeWidth="0.5" />
            <path d="M9,17 C6,19 7,23 5,25" stroke="url(#rope-grad)" strokeWidth="1" strokeLinecap="round" fill="none" />
            <path d="M9,17 C10,21 8,24 9,26" stroke="url(#rope-grad)" strokeWidth="0.8" strokeLinecap="round" fill="none" />
          </svg>
        </motion.div>
      </div>
    )
  },
  "七夕": {
    getIcon: () => (
      <div className="relative w-14 h-14 flex items-center justify-center overflow-visible" id="fest-qixi">
        {/* romantic Cowherd and Weaver Girl meeting on the Magpie Bridge */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-purple-900/10 rounded-full filter blur-[4px]" />
          
          <svg className="w-12 h-12" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bridge-grad" x1="4" y1="24" x2="28" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="50%" stopColor="#F472B6" />
                <stop offset="100%" stopColor="#A855F7" />
              </linearGradient>
            </defs>
            
            {/* Star Dust starlit clouds */}
            <path d="M2,24 Q8,20 16,21 Q24,20 30,24 C26,27 6,27 2,24 Z" fill="rgba(192, 132, 252, 0.25)" />
            <path d="M4,25 Q16,22 28,25" stroke="rgba(244, 114, 182, 0.3)" strokeWidth="1" strokeDasharray="2 2" fill="none" />

            {/* Magpie bridge arch layout */}
            <path d="M4,22 C10,14 22,14 28,22" stroke="url(#bridge-grad)" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M6,22 C12,16 20,16 26,22" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" strokeLinecap="round" fill="none" />

            {/* Little white magpies holding the arches */}
            <circle cx="10" cy="18.5" r="0.6" fill="#FFF" opacity="0.6" />
            <circle cx="16" cy="16.5" r="0.6" fill="#FFF" opacity="0.7" />
            <circle cx="22" cy="18.5" r="0.6" fill="#FFF" opacity="0.6" />

            {/* Cowherd (Left Silhouette) */}
            <path d="M6,17.2 C6.2,16 7,16 7.5,17 C7.8,17.8 8,18.8 8,19 C6.8,19 6,18.5 6,17.2 Z" fill="#60A5FA" />
            {/* Head and Straw Hat */}
            <circle cx="7.2" cy="14.8" r="0.9" fill="#FBBF24" />
            <line x1="6" y1="14.2" x2="8.4" y2="14.2" stroke="#FBBF24" strokeWidth="0.4" />

            {/* Weaver Girl (Right Silhouette) */}
            <path d="M26,17.5 C25.8,16.2 25,16 24.5,17 C24.2,17.8 23.5,20 22.8,20 C24.2,20 26,19 26,17.5 Z" fill="#F472B6" />
            {/* Ribbon wrapping accent */}
            <path d="M25.5,15.5 C27,15.5 28,17.2 27,19.2" stroke="#F472B6" strokeWidth="0.6" strokeLinecap="round" fill="none" />
            {/* Hairstyle and detailed bun */}
            <circle cx="24.8" cy="14.8" r="0.8" fill="#F472B6" />
            <circle cx="24.8" cy="13.6" r="0.4" fill="#E11D48" />

            {/* Romantic starburst shine overhead */}
            <path d="M16,8 L16.8,10.2 L19,11 L16.8,11.8 L16,14 L15.2,11.8 L13,11 L15.2,10.2 Z" fill="#FFF" />
          </svg>

          {/* Symmetrical gentle hovering magpies background */}
          <motion.div
            animate={{ y: [-2, 2, -2], x: [-1, 2, -1] }}
            transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
            className="absolute left-1.5 top-2.5 text-purple-300 text-[9px]"
          >
            🕊
          </motion.div>
          <motion.div
            animate={{ y: [2, -2, 2], x: [1, -2, 1] }}
            transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut", delay: 1.4 }}
            className="absolute right-1.5 top-2.5 text-pink-300 text-[9px] transform scale-x-[-1]"
          >
            🕊
          </motion.div>
        </div>
      </div>
    )
  },
  "中秋节": {
    getIcon: () => (
      <div className="relative w-14 h-14 flex items-center justify-center overflow-visible" id="fest-mid-autumn">
        {/* Soft glowing gold full moon with Jade Rabbit silhouette */}
        <div className="relative w-11 h-11 flex items-center justify-center">
          <motion.div
            animate={{ scale: [0.96, 1.04, 0.96] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-10 h-10 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full border border-amber-300/40 flex items-center justify-center relative shadow-lg drop-shadow-[0_3px_8px_rgba(251,191,36,0.5)]"
          >
            {/* The dark craters forming the Jade Rabbit silhouette */}
            <div className="absolute w-3.2 h-4.5 bg-amber-950/15 rounded-t-full bottom-0 left-[26%] transform rotate-12" />
            <div className="absolute w-0.8 h-2.5 bg-amber-950/15 rounded-full bottom-4 left-[24%] transform -rotate-12" />
            <div className="absolute w-0.8 h-2.5 bg-amber-950/15 rounded-full bottom-4 left-[32%] transform rotate-12" />
            {/* A warm yellow crescent shadow */}
            <div className="absolute inset-0 bg-transparent shadow-[inset_-2px_-2px_6px_rgba(251,191,36,0.25)] rounded-full" />
          </motion.div>
          {/* Falling little star sparkles */}
          <motion.div
            animate={{ opacity: [0, 1, 0], y: [-4, 6] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute text-yellow-500 text-[7px] right-1 top-1"
          >
            ✿
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 1, 0], y: [-2, 8] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: 1.5 }}
            className="absolute text-yellow-400 text-[6px] left-1 bottom-1.5"
          >
            ✿
          </motion.div>
        </div>
      </div>
    )
  },
  "重阳节": {
    getIcon: () => (
      <div className="relative w-14 h-14 flex items-center justify-center overflow-visible" id="fest-double-ninth">
        {/* Large Mountain Height backdrop with delicate small Chrysanthemum flower */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          {/* Detailed Double Mountain Peaks in background */}
          <div className="absolute inset-x-0 bottom-1 h-8 opacity-70">
            <svg className="w-full h-full text-stone-400" viewBox="0 0 24 16" fill="currentColor">
              {/* Left tall peak */}
              <path d="M0,16 L8,2 L14,10 L20,3 L24,16 Z" />
              {/* Right secondary far mountain */}
              <path d="M6,16 L13,6 L18,11 L24,16 Z" fill="rgba(120, 113, 108, 0.4)" />
              {/* Winding mountain path */}
              <path d="M4,16 Q9,11 11,10 Q13,9 15,12 Q17,14 18,16" stroke="#E7E5E4" strokeWidth="0.8" fill="none" opacity="0.6" />
            </svg>
          </div>
          
          {/* Sizable, beautiful golden Chrysanthemum flower details in foreground */}
          <motion.div
            animate={{ scale: [0.93, 1.07, 0.93], rotate: [0, 4, -4, 0] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 w-8 h-8 z-20 drop-shadow-[0_2px_4px_rgba(217,119,6,0.5)]"
          >
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Leaf assets */}
              <path d="M4,19 Q11,18 9,21 Q5,22 4,19" fill="#047857" />
              {/* Stem outline */}
              <path d="M12,12 Q10,18 7,21" stroke="#047857" strokeWidth="1.2" strokeLinecap="round" />
              
              {/* Petal designs - elegant golden blooming chrysanthemum */}
              <circle cx="12" cy="12" r="1.5" fill="#B45309" />
              <circle cx="12" cy="8" r="1.2" fill="#FBBF24" />
              <circle cx="12" cy="16" r="1.2" fill="#FBBF24" />
              <circle cx="8" cy="12" r="1.2" fill="#FBBF24" />
              <circle cx="16" cy="12" r="1.2" fill="#FBBF24" />
              
              <circle cx="9.2" cy="9.2" r="1.2" fill="#F59E0B" />
              <circle cx="14.8" cy="14.8" r="1.2" fill="#F59E0B" />
              <circle cx="9.2" cy="14.8" r="1.2" fill="#F59E0B" />
              <circle cx="14.8" cy="9.2" r="1.2" fill="#F59E0B" />
              
              {/* Outer petal ring tips */}
              <circle cx="12" cy="6" r="0.8" fill="#FDE047" />
              <circle cx="12" cy="18" r="0.8" fill="#FDE047" />
              <circle cx="6" cy="12" r="0.8" fill="#FDE047" />
              <circle cx="18" cy="12" r="0.8" fill="#FDE047" />
            </svg>
          </motion.div>
        </div>
      </div>
    )
  },
  "除夕": {
    getIcon: () => (
      <div className="relative w-14 h-14 flex items-center justify-center overflow-visible" id="fest-nye">
        {/* Double hanging firecracker lines */}
        <div className="relative w-12 h-11 flex items-center justify-center">
          {/* Spring Couplet Banner Left */}
          <div className="absolute left-1 top-0.5 w-2 h-7 bg-red-600 border border-yellow-500 shadow-xs flex flex-col justify-around items-center py-0.2">
            <span className="text-[3px] text-yellow-400 scale-[0.6] font-serif font-black">迎</span>
            <span className="text-[3px] text-yellow-400 scale-[0.6] font-serif font-black">春</span>
          </div>
          {/* Spring Couplet Banner Right */}
          <div className="absolute right-1 top-0.5 w-2 h-7 bg-red-600 border border-yellow-500 shadow-xs flex flex-col justify-around items-center py-0.2">
            <span className="text-[3px] text-yellow-400 scale-[0.6] font-serif font-black">接</span>
            <span className="text-[3px] text-yellow-400 scale-[0.6] font-serif font-black">福</span>
          </div>
          {/* Flashing main giant firecracker popping */}
          <motion.div
            animate={{ scale: [1, 1.22, 1], rotate: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
            className="text-red-700 bg-red-500 w-4 h-6 rounded-xs flex flex-col justify-center items-center shadow-md border border-red-800 relative z-10 drop-shadow-[0_2px_4px_rgba(220,38,38,0.4)]"
          >
            <span className="text-[6.5px] font-black text-yellow-400 leading-none">爆</span>
            {/* Sparkle tip */}
            <div className="absolute top-[-4.5px] w-0.8 h-4.5 bg-yellow-600" />
            <div className="absolute top-[-5.5px] w-2 h-2 rounded-full bg-yellow-300 shadow-[0_0_4px_#FCD34D]" />
          </motion.div>
        </div>
      </div>
    )
  },
  "清明": {
    getIcon: () => (
      <div className="relative w-14 h-14 flex items-center justify-center overflow-visible" id="fest-qingming">
        {/* Weeping Willow Frame + Beautiful Swallow-shaped Paper Kite (纸鸢) in clear breeze */}
        <div className="relative w-12 h-12 flex flex-col items-center justify-center">
          
          {/* Subtle drizzle rain lines in the background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 24 24">
            <line x1="6" y1="1" x2="4" y2="9" stroke="#38BDF8" strokeWidth="0.6" strokeLinecap="round" />
            <line x1="18" y1="2" x2="16" y2="10" stroke="#38BDF8" strokeWidth="0.6" strokeLinecap="round" />
            <line x1="12" y1="4" x2="10" y2="12" stroke="#38BDF8" strokeWidth="0.6" strokeLinecap="round" />
          </svg>

          {/* Whispering willow branch arch at the left edge */}
          <div className="absolute left-[1px] top-[1px] w-5 h-5 opacity-45 pointer-events-none z-10">
            <svg viewBox="0 0 12 12" className="w-full h-full text-emerald-600">
              <path d="M1,1 Q4,5 2,10" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" fill="none" />
              <path d="M2.2,3 Q3,3.5 2.5,4.5" stroke="currentColor" strokeWidth="0.5" fill="none" />
              <path d="M1.3,5 Q2.3,5.5 1.8,6.5" stroke="currentColor" strokeWidth="0.5" fill="none" />
              <path d="M1.1,7 Q2.1,7.5 1.6,8.5" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </svg>
          </div>

          {/* Flying traditional Swallow Kite (纸鸢) */}
          <motion.div
            animate={{
              y: [-1.8, 1.8, -1.8],
              rotate: [-4, 4, -4],
              scale: [0.96, 1.04, 0.96]
            }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="w-11.5 h-11.5 drop-shadow-[0_2.5px_4.5px_rgba(30,41,59,0.32)] z-20"
          >
            <svg viewBox="0 0 32 32" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="kite-wing-left" x1="16" y1="7" x2="4" y2="15" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#EF4444" />
                  <stop offset="100%" stopColor="#991B1B" />
                </linearGradient>
                <linearGradient id="kite-wing-right" x1="16" y1="7" x2="28" y2="15" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#EF4444" />
                  <stop offset="100%" stopColor="#991B1B" />
                </linearGradient>
              </defs>

              {/* Gentle Cloud Trail beneath */}
              <path d="M4,23 Q16,19 28,23" stroke="rgba(56, 189, 248, 0.18)" strokeWidth="0.8" strokeDasharray="1.5 1.5" />

              {/* Left Wing */}
              <path d="M16,12 C10,5.5 6,9.5 5,13.5 C9.5,13.5 12,12.5 16,12 Z" fill="url(#kite-wing-left)" stroke="#7F1D1D" strokeWidth="0.4" />
              
              {/* Right Wing */}
              <path d="M16,12 C22,5.5 26,9.5 27,13.5 C22.5,13.5 20,12.5 16,12 Z" fill="url(#kite-wing-right)" stroke="#7F1D1D" strokeWidth="0.4" strokeLinejoin="round" />
              
              {/* Auspicious golden diamond marks inside wings */}
              <path d="M9.5,10 Q12.5,9.5 15,11.5 Q12,11.8 9.5,10 Z" fill="#FBBF24" opacity="0.9" />
              <path d="M22.5,10 Q19.5,9.5 17,11.5 Q20,11.8 22.5,10 Z" fill="#FBBF24" opacity="0.9" />

              {/* Kite swallow-head */}
              <circle cx="16" cy="7.2" r="1.3" fill="#1E293B" />
              <path d="M16,6.5 L13.5,9.5 L18.5,9.5 Z" fill="#1E293B" />
              <circle cx="16" cy="7.2" r="0.4" fill="#FFFFFF" />

              {/* Double Split scissor tails (双燕尾) */}
              <path d="M16,21.5 L11,28 C12.2,27.5 13.8,25 15.5,22.8 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="0.4" />
              <path d="M16,21.5 L21,28 C19.8,27.5 18.2,25 16.5,22.8 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="0.4" />

              {/* Symmetrical pink tail decorative streamers */}
              <path d="M11.5,27.5 Q9.5,30 11,31" stroke="#F43F5E" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.8" />
              <path d="M20.5,27.5 Q22.5,30 22,31" stroke="#F43F5E" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.8" />

              {/* Central wooden spine */}
              <rect x="15.6" y="8" width="0.8" height="14.5" rx="0.4" fill="#D97706" />

              {/* Fine thread hanging */}
              <path d="M16,14.5 Q12,23 9,30" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="0.5" strokeDasharray="1 1.5" fill="none" />
            </svg>
          </motion.div>

          {/* Dynamic tiny swirling spring wind-gust swirls */}
          <motion.div
            animate={{
              x: [-12, 12],
              opacity: [0, 0.8, 0],
              y: [4, 2]
            }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
            className="absolute text-sky-200/50 text-[10px] select-none pointer-events-none"
          >
            ༄
          </motion.div>
        </div>
      </div>
    )
  }
};

const HourglassSVG = ({ 
  daysLeft, 
  glowColor, 
  customSandColor 
}: { 
  daysLeft: number; 
  glowColor: string; 
  customSandColor?: string 
}) => {
  let topSandHeight = 0;
  let bottomSandHeight = 0;
  let isFlowing = false;
  let isPulsing = false;
  
  if (daysLeft > 30) {
    topSandHeight = 12;
    bottomSandHeight = 1.5;
    isFlowing = false;
    isPulsing = false;
  } else if (daysLeft >= 7 && daysLeft <= 30) {
    topSandHeight = 6;
    bottomSandHeight = 7.5;
    isFlowing = true;
    isPulsing = false;
  } else {
    topSandHeight = 1.5;
    bottomSandHeight = 12;
    isFlowing = true;
    isPulsing = true;
  }
  
  const sandFill = customSandColor || "#EAB308";

  return (
    <motion.div 
      className="relative w-11 h-15 flex items-center justify-center drop-shadow-[0_1.5px_3px_rgba(140,98,57,0.15)] scale-75 origin-bottom"
      animate={isPulsing ? {
        scale: [1, 1.06, 1],
        filter: [
          "drop-shadow(0 0 1px rgba(234,179,8,0.2))",
          `drop-shadow(0 0 6px ${glowColor === 'red-green' ? '#EF4444' : glowColor})`,
          "drop-shadow(0 0 1px rgba(234,179,8,0.2))"
        ]
      } : {}}
      transition={isPulsing ? {
        repeat: Infinity,
        duration: 1.8,
        ease: "easeInOut"
      } : {}}
    >
      <svg className="w-full h-full" viewBox="0 0 32 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="top-bulb">
            <path d="M 8.2 5 C 8.2 13.8, 13 18, 13.5 23 L 18.5 23 C 19 18, 23.8 13.8, 23.8 5 Z" />
          </clipPath>
          <clipPath id="bottom-bulb">
            <path d="M 13.5 24.5 L 18.5 24.5 C 19 29.5, 23.8 33.7, 23.8 42.5 L 8.2 42.5 C 8.2 33.7, 13 29.5, 13.5 24.5 Z" />
          </clipPath>
          
          <linearGradient id="christmas-sand" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="50%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>
        
        {/* Fine wood/metal caps on top and bottom */}
        <ellipse cx="16" cy="4.5" rx="8.2" ry="0.8" fill="#8C6239" stroke="#E5DACE" strokeWidth="0.5" />
        <ellipse cx="16" cy="42.5" rx="8.2" ry="0.8" fill="#8C6239" stroke="#E5DACE" strokeWidth="0.5" />

        {/* Glass body background with delicate edge */}
        <path 
          d="M 8.2 5 C 8.2 13.8, 13 18, 13.5 23 L 13.5 24.5 C 13 29.5, 8.2 33.7, 8.2 42.5 L 23.8 42.5 C 23.8 33.7, 19 29.5, 18.5 24.5 L 18.5 23 C 19 18, 23.8 13.8, 23.8 5 Z" 
          fill="rgba(255, 255, 255, 0.08)" 
          stroke="rgba(140, 98, 57, 0.22)" 
          strokeWidth="0.8" 
        />
        <path 
          d="M 8.2 5 C 8.2 13.8, 13 18, 13.5 23 L 13.5 24.5 C 13 29.5, 8.2 33.7, 8.2 42.5 L 23.8 32 C 23.8 33.7, 19 29.5, 18.5 24.5 L 18.5 23 C 19 18, 23.8 13.8, 23.8 5 Z" 
          fill="rgba(251, 191, 36, 0.02)" 
        />

        {/* Upper chamber sand pool */}
        <g clipPath="url(#top-bulb)">
          <rect 
            x="4" 
            y={23 - topSandHeight} 
            width="24" 
            height={topSandHeight + 0.5} 
            fill={glowColor === 'red-green' ? 'url(#christmas-sand)' : sandFill} 
          />
          <path 
            d={`M 7 ${23 - topSandHeight + 0.5} Q 16 ${21.5 - topSandHeight} 25 ${23 - topSandHeight + 0.5} L 25 23 L 7 23 Z`} 
            fill="rgba(0,0,0,0.12)" 
          />
        </g>
        
        {/* Lower chamber sand pile */}
        <g clipPath="url(#bottom-bulb)">
          <rect 
            x="4" 
            y={42.5 - bottomSandHeight} 
            width="24" 
            height={bottomSandHeight + 0.5} 
            fill={glowColor === 'red-green' ? 'url(#christmas-sand)' : sandFill} 
          />
          <path 
            d={`M 6 42.5 Q 16 ${42.5 - bottomSandHeight - 2} 26 42.5 Z`} 
            fill={glowColor === 'red-green' ? 'url(#christmas-sand)' : sandFill} 
          />
          <path 
            d={`M 7 42.5 Q 16 ${42.5 - bottomSandHeight - 1} 25 42.5 Z`} 
            fill="rgba(255,255,255,0.12)" 
          />
        </g>

        {/* Falling stream line in the central neck */}
        {isFlowing && (
          <motion.line 
            x1="16" 
            y1="23" 
            x2="16" 
            y2={42.5 - bottomSandHeight} 
            stroke={glowColor === 'red-green' ? '#EF4444' : sandFill} 
            strokeWidth="1.2" 
            strokeDasharray="2.5 2.5"
            animate={{ strokeDashoffset: [0, -10] }}
            transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
          />
        )}
        
        {/* Curved reflection highlights */}
        <path d="M 10 7.5 C 10 13.5, 12.8 16.5, 12.8 19" stroke="rgba(255, 255, 255, 0.28)" strokeWidth="0.8" strokeLinecap="round" fill="none" />
        <path d="M 10 40 C 10 34, 12.8 31, 12.8 28.5" stroke="rgba(255, 255, 255, 0.18)" strokeWidth="0.8" strokeLinecap="round" fill="none" />
        <path d="M 22 7.5 C 22 13.5, 19.2 16.5, 19.2 19" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.5" strokeLinecap="round" fill="none" />
        
        <ellipse cx="16" cy="23.8" rx="1.5" ry="0.5" fill="rgba(255, 255, 255, 0.1)" stroke="#1C1917" strokeWidth="0.4" />
      </svg>
    </motion.div>
  );
};

const HOLIDAY_MAP_TO_ENGLISH: Record<string, string> = {
  元旦: 'NewYear',
  劳动节: 'LaborDay',
  儿童节: 'ChildrenDay',
  国庆节: 'NationalDay',
  情人节: 'Valentine',
  圣诞节: 'Christmas',
  春节: 'SpringFestival',
  元宵节: 'LanternFestival',
  端午节: 'DragonBoatFestival',
  七夕: 'Qixi',
  中秋节: 'MidAutumn',
  重阳节: 'Chongyang',
  除夕: 'Chuxi',
  清明: 'Qingming',
};

export function FestiveHourglass({
  onEnterFestivalArchive,
  onEnterFestivalPage,
}: {
  onEnterFestivalArchive: () => void;
  onEnterFestivalPage: (pageId: string) => void;
}) {
  const [currentDate, setCurrentDate] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const getActualState = () => {
    const list = (holidaysData as { festivals?: { name: string; date: string }[] }).festivals || [];

    const localYr = currentDate.getFullYear();
    const localMth = currentDate.getMonth();
    const localDay = currentDate.getDate();
    const todayMidnight = new Date(localYr, localMth, localDay).getTime();

    let nearestFest: { name: string; date: string } | null = null;
    let minDiffDays = Infinity;

    for (const f of list) {
      if (!f.date) continue;
      if ('year' in f && f.year === 2026 && f.date < '2026-06-01') continue;

      const [fYear, fMonth, fDay] = f.date.split('-').map(Number);
      const fMidnight = new Date(fYear, fMonth - 1, fDay).getTime();
      const diffMs = fMidnight - todayMidnight;
      if (diffMs >= 0) {
        const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
        if (diffDays < minDiffDays) {
          minDiffDays = diffDays;
          nearestFest = f;
        }
      }
    }

    return {
      festivalName: nearestFest ? nearestFest.name : '元旦',
      daysLeft: minDiffDays === Infinity ? 45 : minDiffDays,
    };
  };

  const actual = getActualState();
  const activeHolidayName = actual.festivalName;
  const activeDaysLeft = actual.daysLeft;
  const meta = HOLIDAY_METADATA[activeHolidayName] || { colorName: '土黄', glowColor: '#D97706', sandColor: '#D97706' };
  const config = FESTIVAL_CONFIGS[activeHolidayName] || FESTIVAL_CONFIGS['元旦'];
  const isFestivalToday = activeDaysLeft === 0;

  const targetTime = new Date('2026-06-01T00:00:00').getTime();
  const isAccessible = currentDate.getTime() >= targetTime;

  const handleHourglassClick = () => {
    if (!isAccessible) return;
    if (isFestivalToday) {
      const activeYear = currentDate.getFullYear();
      const engName = HOLIDAY_MAP_TO_ENGLISH[activeHolidayName] || '';
      const pageId = `${activeYear}_${engName}`;
      const BUILT_PAGES = ['2026_ChildrenDay'];
      if (BUILT_PAGES.includes(pageId)) {
        onEnterFestivalPage(pageId);
      } else {
        onEnterFestivalArchive();
      }
    } else {
      onEnterFestivalArchive();
    }
  };

  return (
    <div className="w-14 h-14 md:w-18 md:h-18 flex flex-col items-center justify-end select-none relative" id="festive-display-container">
      <div
        onClick={handleHourglassClick}
        className={`w-[50px] h-[50px] flex flex-col items-center justify-center relative bg-transparent overflow-visible transition-all duration-200 ${
          isAccessible
            ? 'cursor-pointer group/hourglass hover:scale-110 active:scale-95'
            : 'cursor-default opacity-75'
        }`}
      >
        <AnimatePresence mode="wait">
          {isFestivalToday ? (
            <motion.div
              key={`icon-${activeHolidayName}`}
              initial={{ scale: 0, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0, rotate: 45 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
              className="flex flex-col items-center justify-center w-full h-full [&_span.absolute]:hidden"
            >
              {config.getIcon()}
            </motion.div>
          ) : (
            <motion.div
              key="hourglass"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              className="relative flex justify-center items-center"
            >
              <HourglassSVG
                daysLeft={activeDaysLeft}
                glowColor={meta.glowColor}
                customSandColor={activeDaysLeft < 7 ? meta.sandColor : undefined}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
