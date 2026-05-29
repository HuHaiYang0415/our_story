import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { soundSynth } from './SoundSynth';
import GameMemory from './GameMemory';
import GameWhackAMole from './GameWhackAMole';

// Types for routing views
type ActivePage = 'room' | 'memory' | 'whack-mole';

// Webbed Summer Green Frog pre-defined hopping route avoiding other hotspots
const FROG_ROUTE = [
  { x: 33, y: 77, rotation: 10 }, // Start
  { x: 39, y: 75, rotation: 15 }, // Hop 1
  { x: 45, y: 79, rotation: -5 }, // Hop 2
  { x: 51, y: 74, rotation: 20 }, // Hop 3
  { x: 57, y: 77, rotation: 10 }, // Hop 4
  { x: 63, y: 80, rotation: 0 },  // Hop 5 (Final stop)
];

export default function Festival_2026_ChildrenDay({
  theme,
  onBackToArchive,
  onBackToCabinet
}: {
  theme: any;
  onBackToArchive?: () => void;
  onBackToCabinet?: () => void;
}) {
  const [currentPage, setCurrentPage] = useState<ActivePage>('room');
  const [isMuted, setIsMuted] = useState(false);
  const [loadingGame, setLoadingGame] = useState<ActivePage | null>(null);
  const [showSecretModal, setShowSecretModal] = useState(true);

  useEffect(() => {
    // Unmute the retro BGM sound synth by default on children's day mount
    soundSynth.setMute(false);
  }, []);

  // Automatically load the developer-provided image asset from `./image` if it exists.
  // Developers can place a custom room file like room.png, room.jpg, background.png, background.jpg
  // inside the /src/components/2026/Festival_2026_ChildrenDay/image folder.
  const [customBg, setCustomBg] = useState<string | null>(null);

  useEffect(() => {
    const checkAndSetBg = async () => {
      // Checked paths both under runtime routes and developer-provided asset folders
      const candidates = [
        '/src/components/2026/Festival_2026_ChildrenDay/image/room.png',
        '/src/components/2026/Festival_2026_ChildrenDay/image/room.jpg',
        '/src/components/2026/Festival_2026_ChildrenDay/image/background.png',
        '/src/components/2026/Festival_2026_ChildrenDay/image/background.jpg',
        // Also look for fallback relative to the standard component import location
        'src/components/2026/Festival_2026_ChildrenDay/image/room.png',
        'src/components/2026/Festival_2026_ChildrenDay/image/background.png'
      ];

      for (const src of candidates) {
        const canLoad = await new Promise<boolean>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
        });

        if (canLoad) {
          setCustomBg(src);
          break;
        }
      }
    };
    checkAndSetBg();
  }, []);

  // Toggle pre-loaded furniture items on/off so custom backgrounds aren't cluttered - permanently enabled as per user's request
  const showFurniture = true;

  // Day vs Night cozy lighting mapped directly to the parent's theme
  const isNight = !!theme?.isNight;

  // Summer green frog state with a predetermined jumping route (5 hops)
  const [isHopping, setIsHopping] = useState(false);
  const [frogPos, setFrogPos] = useState({ x: 33, y: 77, rotation: 10 });
  const [frogDirection, setFrogDirection] = useState<'forward' | 'backward'>('forward');

  // Scale tracking for exact responsive sizing (Virtually maps 800px x 500px canvas)
  const [scale, setScale] = useState(() => {
    if (typeof window !== 'undefined') {
      const initialWidth = Math.min(800, window.innerWidth - 32); // accounts for responsive side margins
      return Math.min(1, initialWidth / 800);
    }
    return 1;
  });
  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamic multiplier scale math
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const parentWidth = containerRef.current.clientWidth;
        // Target virtual room is 800px wide. Scale down to fit mobile
        const s = Math.min(1, parentWidth / 800);
        setScale(s || 1);
      }
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    // Periodically fall back
    window.addEventListener('resize', handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Audio Toggle Controller
  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    soundSynth.setMute(nextMuted);
    soundSynth.playClick();
  };

  // Launch Game with bouncing candy loading screen
  const launchGame = (game: ActivePage) => {
    soundSynth.playPop();
    setLoadingGame(game);
    
    setTimeout(() => {
      setCurrentPage(game);
      setLoadingGame(null);
    }, 1200);
  };

  // Summer green frog jumping route runner (exactly 5 hops and stops, going forward or backward)
  const startHoppingSequence = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isHopping) return;
    setIsHopping(true);
    
    if (frogDirection === 'forward') {
      // Execute 5 leaps forward along the path (indexes 1 to 5)
      for (let i = 1; i < FROG_ROUTE.length; i++) {
        soundSynth.playJump();
        const startPoint = FROG_ROUTE[i - 1];
        const endPoint = FROG_ROUTE[i];
        
        const midX = (startPoint.x + endPoint.x) / 2;
        const peakY = Math.min(startPoint.y, endPoint.y) - 15; // Arc heights
        
        // Arc rise
        setFrogPos({ x: midX, y: peakY, rotation: endPoint.rotation - 10 });
        await new Promise((resolve) => setTimeout(resolve, 220));
        
        // Arc landing
        setFrogPos({ x: endPoint.x, y: endPoint.y, rotation: endPoint.rotation });
        await new Promise((resolve) => setTimeout(resolve, 220));
      }
      setFrogDirection('backward');
    } else {
      // Execute 5 leaps backward along the path (indexes 4 down to 0)
      for (let i = FROG_ROUTE.length - 2; i >= 0; i--) {
        soundSynth.playJump();
        const startPoint = FROG_ROUTE[i + 1];
        const endPoint = FROG_ROUTE[i];
        
        const midX = (startPoint.x + endPoint.x) / 2;
        const peakY = Math.min(startPoint.y, endPoint.y) - 15; // Arc heights
        
        // Arc rise (facing backward, scaled horizontally)
        setFrogPos({ x: midX, y: peakY, rotation: endPoint.rotation - 10 });
        await new Promise((resolve) => setTimeout(resolve, 220));
        
        // Arc landing
        setFrogPos({ x: endPoint.x, y: endPoint.y, rotation: endPoint.rotation });
        await new Promise((resolve) => setTimeout(resolve, 220));
      }
      setFrogDirection('forward');
    }
    
    setIsHopping(false);
  };

  // Remove the interactive pull light cable toggle as per user mandate
  // The light will react directly to the parent's season/night theme switch!

  return (
    <div 
      className="w-full min-h-screen select-none bg-gradient-to-b from-[#FFF8F3] via-[#FCFAF4] to-[#F4EBE0] overflow-x-hidden p-3 md:p-6 relative"
      id="children-day-applet-wrapper"
    >

      {/* 1. Jumping Sweets & Toys Loader overlay */}
      <AnimatePresence>
        {loadingGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#FFFDF6] z-50 flex flex-col items-center justify-center text-center p-6 border-8 border-[#8C6239]/10"
            id="childhood-vault-loader"
          >
            {/* scrapbook grid backdrop */}
            <div 
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(#8C6239 1px, transparent 1px), linear-gradient(90deg, #8C6239 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            />

            <div className="flex space-x-3.5 mb-6 z-10">
              {['🍬', '🍭', '🧸', '🎈', '🐸'].map((emoji, idx) => (
                <motion.span
                  key={idx}
                  animate={{ y: [0, -45, 0], scale: [1, 1.25, 1] }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: idx * 0.1,
                    ease: "easeInOut"
                  }}
                  className="text-4.5xl select-none filter drop-shadow-md"
                >
                  {emoji}
                </motion.span>
              ))}
            </div>

            <h3 className="text-xl font-serif font-black text-[#8C6239] animate-pulse z-10">
              正在打开童心纸艺屋... ✨
            </h3>
            <p className="text-xs text-stone-400 mt-2.5 font-serif select-none max-w-sm leading-relaxed z-10">
              无休止的蝉鸣、手工折折剪剪、跳动的发条皮筋、还有香甜的水果硬糖……
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Extremely elegant & dreamy secret popup */}
      <AnimatePresence>
        {showSecretModal && !loadingGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-md"
            id="secret-wish-modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-md bg-gradient-to-br from-[#FFFDF9] via-[#FFFDF5] to-[#FFEFE0] rounded-3xl p-8 border border-amber-950/10 shadow-[0_20px_50px_rgba(140,98,57,0.35)] text-center overflow-hidden"
              id="secret-wish-modal-content"
            >
              {/* Confetti dot backdrop pattern */}
              <div 
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#8C6239 1.5px, transparent 1px)',
                  backgroundSize: '16px 16px'
                }} 
              />
              
              {/* Beautiful glowing ambient colors */}
              <div className="absolute -top-12 -left-12 w-28 h-28 bg-rose-200/50 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-amber-200/50 rounded-full blur-3xl pointer-events-none" />
              
              {/* Spinning / floating sparkles */}
              <div className="absolute top-10 right-10 opacity-30 animate-bounce" style={{ animationDuration: '3s' }}>
                <Sparkles className="w-5 h-5 text-amber-500" />
              </div>
              <div className="absolute bottom-12 left-8 opacity-25 animate-bounce" style={{ animationDuration: '4s' }}>
                <Sparkles className="w-4 h-4 text-amber-500" />
              </div>

              {/* Cute floating gift icon */}
              <div className="mx-auto w-16 h-16 bg-[#FFF2DE] rounded-full border-2 border-dashed border-amber-500/35 flex items-center justify-center mb-5 relative shadow-xs">
                <motion.span
                  animate={{ 
                    rotate: [0, 8, -8, 0],
                    y: [0, -4, 0] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className="text-3.5xl select-none"
                >
                  🎁
                </motion.span>
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-xl md:text-2xl font-serif font-black text-[#5A3E23] tracking-tight mb-3">
                ✨ 童心小屋 ✨
              </h2>

              {/* Message Banner Block */}
              <div className="bg-white/80 backdrop-blur-xs border border-dashed border-amber-900/15 rounded-2xl p-5.5 mb-6 text-stone-700 leading-relaxed font-serif text-sm relative shadow-xs">
                <p className="text-[#8C6239] font-bold text-base text-center mb-3.5 select-text">
                  恭喜发现了网站的小秘密！✨
                </p>
                <p className="text-stone-600 text-xs text-center leading-relaxed select-text font-medium px-1">
                  晚上可以向小胡许个愿望，小胡会尽力实现哦~
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    soundSynth.playScore();
                    soundSynth.startBgm();
                    setShowSecretModal(false);
                  }}
                  className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#D97706] to-[#8C6239] text-[#FFFDFB] font-serif font-black text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 border border-white/20"
                >
                  <span>记下来啦 (๑•̀ㅂ•́)و✧</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RENDER CURRENT VIEW ROUTER */}
      {currentPage === 'memory' ? (
        <GameMemory onBack={() => { soundSynth.playClick(); setCurrentPage('room'); }} />
      ) : currentPage === 'whack-mole' ? (
        <GameWhackAMole onBack={() => { soundSynth.playClick(); setCurrentPage('room'); }} />
      ) : (
        
        // MAIN VIEW: ADAPTIVE COTTAGE PLAYROOM
        <div className="w-full flex flex-col items-center">
          
          {/* Top Header Control Toolbar */}
          <div className="w-full max-w-4xl flex items-center justify-between gap-3 mb-4 md:mb-6 animate-fade-in z-20" id="cottage-header-bar">
            {onBackToArchive ? (
              <button
                onClick={onBackToArchive}
                className="flex items-center space-x-1.5 px-4.5 py-2 rounded-full bg-[#8C6239]/8 hover:bg-[#8C6239]/15 text-[#5A3E23] text-xs font-bold cursor-pointer transition-all active:scale-95 border-2 border-dashed border-[#8C6239]/15"
              >
                <ArrowLeft className="w-3.8 h-3.8" />
                <span>返回节日大厅</span>
              </button>
            ) : (
              <div />
            )}

            <div className="flex items-center gap-3">
              {/* Music BGM key toggle: Elegant, smaller and blends nicely with background */}
              <button
                onClick={handleToggleMute}
                className={`p-1.5 rounded-full transition-all cursor-pointer border active:scale-90 ${
                  isMuted 
                    ? 'bg-stone-200/50 text-stone-400 border-stone-300' 
                    : 'bg-[#8C6239]/10 text-[#8C6239]/80 border-[#8C6239]/15 hover:bg-[#8C6239]/20'
                }`}
                title={isMuted ? "开启" : "静音"}
                id="btn-bgm-toggle"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 animate-pulse" />}
              </button>

              {onBackToCabinet && (
                <button
                  onClick={onBackToCabinet}
                  className="px-4 py-2 rounded-full bg-[#8C6239] text-[#FFFDFB] text-xs font-bold shadow-md hover:bg-[#5A3E23] cursor-pointer transition-all active:scale-95 border-2 border-white whitespace-nowrap"
                >
                  我的纪念书架
                </button>
              )}
            </div>
          </div>

          {/* Cottage description titles */}
          <div className="w-full max-w-4xl text-center mb-5 z-20" id="welcome-room-banner">
            <h1 className="text-3xl md:text-3.5xl font-serif font-black text-[#5A3E23] tracking-tight relative block">
              六一儿童节 · 梦幻小屋
            </h1>
          </div>

          {/* THE MASTER COZY PLAYROOM CANVAS - Seamless unified room experience */}
          <div className="w-full max-w-4xl px-2 mb-8 mt-2 z-20" id="childrens-day-master-stage">
            <div 
              className="relative w-full aspect-square rounded-3xl border-0 overflow-hidden group select-none transition-all duration-350"
              id="unified-playroom-canvas"
            >
              {/* Cozy Room Background Image */}
              <img 
                src="/src/components/2026/Festival_2026_ChildrenDay/image/room_background.png" 
                alt="儿童梦幻纸艺屋" 
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />

              {/* Day/Night Environmental Shade Overlay */}
              <div 
                className={`absolute inset-0 pointer-events-none z-10 transition-all duration-1000 ${
                  isNight ? 'bg-[#060a24]/40 mix-blend-multiply opacity-100' : 'opacity-0'
                }`} 
              />

              {/* Night Lantern Glow Spotlight (Glow effects over key discoverable areas) */}
              {isNight && (
                <div 
                  className="absolute inset-0 pointer-events-none z-15 transition-all duration-1000 mix-blend-screen"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 78% 28%, rgba(253,224,71,0.3) 0%, transparent 15%), radial-gradient(circle at 50% 64%, rgba(253,224,71,0.22) 0%, transparent 22%), radial-gradient(circle at 22% 65%, rgba(253,224,71,0.22) 0%, transparent 20%), radial-gradient(circle at 58% 80%, rgba(253,224,71,0.18) 0%, transparent 22%)'
                  }}
                />
              )}

              {/* Decorative Paper Dust / Particle Effect floating in the warm room light */}
              <div className="absolute inset-0 pointer-events-none z-16 overflow-hidden">
                <div className="absolute top-[25%] left-[20%] w-1.5 h-1.5 bg-amber-200/50 rounded-full blur-[1px] animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute top-[60%] left-[80%] w-2 h-2 bg-amber-100/40 rounded-full blur-[1px] animate-pulse" style={{ animationDuration: '6s' }} />
                <div className="absolute top-[80%] left-[40%] w-1.5 h-1.5 bg-amber-300/35 rounded-full blur-[1px] animate-pulse" style={{ animationDuration: '5s' }} />
              </div>



              {/* ==========================================
                  HOTSPOT 2: THE CARD BOX (糖果翻牌 🍬)
                  ========================================== */}
              <motion.div
                onClick={() => launchGame('memory')}
                className="absolute top-[58%] left-[65%] w-[28%] h-[26%] cursor-pointer z-25 group/cardbox pointer-events-auto flex items-center justify-center rounded-2xl"
                whileHover={{ scale: 1.05 }}
              >
                {/* Subtle outer yellow/amber glow on hover for being selected */}
                <div className="absolute inset-0 rounded-2xl transition-all duration-300 bg-amber-500/0 group-hover/cardbox:bg-amber-400/5 group-hover/cardbox:shadow-[0_0_25px_10px_rgba(245,158,11,0.25)]" />
                
                {/* Embedded papercraft card box image asset */}
                <img 
                  src="/src/components/2026/Festival_2026_ChildrenDay/image/card_box.png" 
                  alt="Card Box" 
                  className="w-full h-full object-contain select-none pointer-events-none transition-all duration-300 group-hover/cardbox:scale-105 group-hover/cardbox:brightness-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* ==========================================
                  HOTSPOT 3: THE MOLE DOLL (保卫地鼠 🔨)
                  ========================================== */}
              <motion.div
                onClick={() => launchGame('whack-mole')}
                className="absolute top-[54%] left-[6%] w-[25%] h-[23%] cursor-pointer z-25 group/molehills pointer-events-auto flex items-center justify-center rounded-2xl"
                whileHover={{ scale: 1.05 }}
              >
                {/* Subtle outer rose/pink glow on hover for being selected */}
                <div className="absolute inset-0 rounded-2xl transition-all duration-300 bg-rose-500/0 group-hover/molehills:bg-rose-400/5 group-hover/molehills:shadow-[0_0_25px_10px_rgba(244,63,94,0.25)]" />

                {/* Embedded mole doll image asset */}
                <img 
                  src="/src/components/2026/Festival_2026_ChildrenDay/image/gameWhackAMole/mole_doll.png" 
                  alt="Mole Doll" 
                  className="w-full h-full object-contain select-none pointer-events-none transition-all duration-300 group-hover/molehills:scale-105 group-hover/molehills:brightness-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* ==========================================
                  EASTER EGG: THE BOUNCY SUMMER GREEN FROG 🐸
                  ========================================== */}
              <motion.div
                style={{
                  position: 'absolute',
                  left: `${frogPos.x}%`,
                  top: `${frogPos.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  rotate: frogDirection === 'forward' ? frogPos.rotation : -frogPos.rotation,
                  scale: isHopping ? [1, 1.25, 0.9, 1] : 1
                }}
                transition={{
                  repeat: isHopping ? Infinity : 0,
                  duration: 0.44,
                  ease: "easeInOut"
                }}
                onClick={startHoppingSequence}
                className={`cursor-pointer p-0.5 rounded-full flex flex-col items-center justify-center transition-all z-35 select-none pointer-events-auto ${
                  isHopping 
                    ? 'scale-105 filter drop-shadow-lg' 
                    : 'hover:scale-110 active:scale-95'
                }`}
                id="summer-green-frog"
              >
                {/* Custom summer green frog vector artwork */}
                <div 
                  className="w-12 h-12 flex items-center justify-center transition-transform duration-300"
                  style={{ transform: frogDirection === 'forward' ? 'none' : 'scaleX(-1)' }}
                >
                  <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-md select-none pointer-events-none">
                    {/* Feet */}
                    <path d="M 12 48 Q 10 52 14 54 Q 18 52 16 48" fill="#22C55E" stroke="#14532D" strokeWidth="2" />
                    <path d="M 52 48 Q 54 52 50 54 Q 46 52 48 48" fill="#22C55E" stroke="#14532D" strokeWidth="2" />
                    {/* Main Body */}
                    <ellipse cx="32" cy="38" rx="20" ry="15" fill="#4ADE80" stroke="#14532D" strokeWidth="2.5" />
                    {/* Inner Belly */}
                    <ellipse cx="32" cy="40" rx="13" ry="10" fill="#FFFDF0" />
                    
                    {/* Big Bulging Eyes */}
                    <ellipse cx="21" cy="23" rx="6.5" ry="6.5" fill="#4ADE80" stroke="#14532D" strokeWidth="2.5" />
                    <circle cx="21" cy="23" r="4" fill="#FFFFFF" />
                    <circle cx="22" cy="22.5" r="1.8" fill="#111827" />
                    
                    <ellipse cx="43" cy="23" rx="6.5" ry="6.5" fill="#4ADE80" stroke="#14532D" strokeWidth="2.5" />
                    <circle cx="43" cy="23" r="4" fill="#FFFFFF" />
                    <circle cx="42" cy="22.5" r="1.8" fill="#111827" />
                    
                    {/* Lotus Leaf Cute Summer Hat (夏天青蛙 🍃) */}
                    <path d="M 19 18 C 24 13, 38 13, 43 18 C 38 20, 24 20, 19 18 Z" fill="#16A34A" stroke="#14532D" strokeWidth="1.8" />
                    <path d="M 31 14 L 31 10 Q 33 10 33 11" fill="none" stroke="#14532D" strokeWidth="2" strokeLinecap="round" />
                    
                    {/* Lovely Pink Rosy Cheeks */}
                    <circle cx="17" cy="36" r="2.8" fill="#F43F5E" opacity="0.65" />
                    <circle cx="47" cy="36" r="2.8" fill="#F43F5E" opacity="0.65" />
                    
                    {/* Smiling Mouth */}
                    <path d="M 27 36 Q 32 40 37 36" fill="none" stroke="#14532D" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      )}

      {/* FOOTER WARM GREETING SIGNATURE SEALS */}
      <div 
        className="w-full max-w-4xl mx-auto border-t border-[#8C6239]/12 pt-4 mt-8 text-center select-none"
        id="cd-footer-banner"
      >
        <div className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-white/80 border border-amber-900/10 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" />
          <span className="text-[10.5px] text-[#8C6239] font-serif select-none font-bold leading-normal text-center">
            愿平平总有童心在怀
            <br />
            在小胡面前永远可以做一个快乐的小朋友 ✨
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" />
        </div>
      </div>

    </div>
  );
}
