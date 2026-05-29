import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, RotateCcw, Sparkles, Heart, Zap, Play, Smile } from 'lucide-react';
import { soundSynth } from './SoundSynth';

interface Mole {
  id: number;
  active: boolean;
  whacked: boolean;
  type: 'standard' | 'shiny' | 'golden';
}

// 2. Playful custom Mole Doll using uploaded .png illustrations with fallback SVG
function MoleDoll({ type, whacked, rowIndex = 2 }: { type: 'standard' | 'shiny' | 'golden'; whacked: boolean; rowIndex?: number }) {
  const [imgError, setImgError] = useState(false);

  // Glow classes for special mole types
  const typeGlowClass = type === 'golden' 
    ? 'drop-shadow-[0_0_15px_rgba(245,158,11,0.95)]' 
    : type === 'shiny' 
      ? 'drop-shadow-[0_0_15px_rgba(168,85,247,0.95)]' 
      : 'drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)]';

  if (!imgError) {
    const srcPath = whacked
      ? '/src/components/2026/Festival_2026_ChildrenDay/image/gameWhackAMole/mole_getting_hit.png'
      : '/src/components/2026/Festival_2026_ChildrenDay/image/gameWhackAMole/mole_popping_out.png';

    // Top row (r=0) is smaller in perspective; middle row (r=1) is medium; bottom row (r=2) is large.
    let scaleClass = 'scale-[1.38] sm:scale-[1.44] md:scale-[1.5]';
    if (rowIndex === 0) {
      scaleClass = 'scale-[0.98] sm:scale-[1.03] md:scale-[1.08]';
    } else if (rowIndex === 1) {
      scaleClass = 'scale-[1.18] sm:scale-[1.22] md:scale-[1.28]';
    }

    return (
      <img
        src={srcPath}
        alt={whacked ? "Mole Hit" : "Mole Popping Out"}
        className={`w-full h-full select-none pointer-events-none transition-all duration-150 origin-bottom ${scaleClass} ${
          whacked ? 'brightness-95 rotate-2' : 'group-hover:scale-[1.45]'
        } ${typeGlowClass}`}
        onError={() => setImgError(true)}
        referrerPolicy="no-referrer"
      />
    );
  }

  // Fallback extremely adorable Hello Kitty style plush mole doll SVG!
  const bowColor = type === 'golden' ? '#F59E0B' : type === 'shiny' ? '#3B82F6' : '#EF4444';
  const cheeksColor = '#F43F5E';
  
  return (
    <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative select-none pointer-events-none flex items-center justify-center transition-all ${whacked ? 'brightness-75 scale-90' : ''}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
        {/* Soft claws */}
        <ellipse cx="50" cy="85" rx="28" ry="15" fill="#C29F84" stroke="#5A3E23" strokeWidth="2" />
        
        {/* Cute Kitty ears */}
        <ellipse cx="32" cy="35" rx="11" ry="12" fill="#DDBCA3" stroke="#5A3E23" strokeWidth="2.5" />
        <ellipse cx="32" cy="35" rx="6" ry="7" fill="#FCE7F3" />
        
        <ellipse cx="68" cy="35" rx="11" ry="12" fill="#DDBCA3" stroke="#5A3E23" strokeWidth="2.5" />
        <ellipse cx="68" cy="35" rx="6" ry="7" fill="#FCE7F3" />

        {/* Iconic Left Bow on its right ear */}
        <g transform="translate(68, 30) scale(0.9)">
          <path d="M -8 -8 C -14 -12, -14 0, -8 -4 C -6 -6, -2 -6, -2 -6" fill={bowColor} stroke="#5A3E23" strokeWidth="1.8" />
          <path d="M 8 -8 C 14 -12, 14 0, 8 -4 C 6 -6, 2 -6, 2 -6" fill={bowColor} stroke="#5A3E23" strokeWidth="1.8" />
          <circle cx="0" cy="-6" r="4.5" fill={type === 'golden' ? '#FEF08A' : '#EF4444'} stroke="#5A3E23" strokeWidth="1.8" />
        </g>

        {/* Hello Kitty head outline */}
        <ellipse cx="50" cy="58" rx="27" ry="22" fill="#FAF6F0" stroke="#5A3E23" strokeWidth="2.5" />

        {/* Tiny oval button eyes */}
        <ellipse cx="38" cy="56" rx="3.2" ry="4.2" fill="#1C1917" />
        <ellipse cx="62" cy="56" rx="3.2" ry="4.2" fill="#1C1917" />
        
        {/* Sparkly eye reflection */}
        <circle cx="39.5" cy="54.5" r="1.2" fill="#FFFFFF" />
        <circle cx="63.5" cy="54.5" r="1.2" fill="#FFFFFF" />

        {/* Bright golden-yellow nose */}
        <ellipse cx="50" cy="62" rx="3.5" ry="2.2" fill="#FACC15" stroke="#5A3E23" strokeWidth="1.5" />

        {/* Blush cheeks */}
        <circle cx="29" cy="63" r="4.5" fill={cheeksColor} opacity="0.65" />
        <circle cx="71" cy="63" r="4.5" fill={cheeksColor} opacity="0.65" />

        {/* Cheek kitty whiskers */}
        <line x1="22" y1="56" x2="13" y2="53" stroke="#5A3E23" strokeWidth="2" strokeLinecap="round" />
        <line x1="21" y1="60" x2="11" y2="60" stroke="#5A3E23" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="64" x2="13" y2="67" stroke="#5A3E23" strokeWidth="2" strokeLinecap="round" />

        <line x1="78" y1="56" x2="87" y2="53" stroke="#5A3E23" strokeWidth="2" strokeLinecap="round" />
        <line x1="79" y1="60" x2="89" y2="60" stroke="#5A3E23" strokeWidth="2" strokeLinecap="round" />
        <line x1="78" y1="64" x2="87" y2="67" stroke="#5A3E23" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// 3. Surprised/lunging Mole Doll when game is lost
function LosingMoleDollComponent() {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <img
        src="/src/components/2026/Festival_2026_ChildrenDay/image/gameWhackAMole/mole_doll_lunging.png"
        alt="Losing Mole Doll"
        className="w-56 h-56 md:w-64 md:h-64 object-contain select-none pointer-events-none filter drop-shadow-2xl"
        onError={() => setImgError(true)}
        referrerPolicy="no-referrer"
      />
    );
  }

  // Fallback glorious giant surprised Hello Kitty mole SVG
  return (
    <div className="w-56 h-56 md:w-64 md:h-64 relative select-none pointer-events-none flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
        {/* Soft claws lunging */}
        <ellipse cx="30" cy="80" rx="14" ry="10" fill="#C29F84" stroke="#5A3E23" strokeWidth="2.5" />
        <ellipse cx="70" cy="80" rx="14" ry="10" fill="#C29F84" stroke="#5A3E23" strokeWidth="2.5" />

        {/* Ears */}
        <ellipse cx="30" cy="25" rx="14" ry="15" fill="#DDBCA3" stroke="#5A3E23" strokeWidth="3" />
        <ellipse cx="30" cy="25" rx="8" ry="9" fill="#FCE7F3" />
        
        <ellipse cx="70" cy="25" rx="14" ry="15" fill="#DDBCA3" stroke="#5A3E23" strokeWidth="3" />
        <ellipse cx="70" cy="25" rx="8" ry="9" fill="#FCE7F3" />

        {/* Hello Kitty Bow */}
        <g transform="translate(70, 20) scale(1.1)">
          <path d="M -8 -8 C -14 -12, -14 0, -8 -4 C -6 -6, -2 -6, -2 -6" fill="#EF4444" stroke="#5A3E23" strokeWidth="2" />
          <path d="M 8 -8 C 14 -12, 14 0, 8 -4 C 6 -6, 2 -6, 2 -6" fill="#EF4444" stroke="#5A3E23" strokeWidth="2" />
          <circle cx="0" cy="-6" r="5" fill="#EF4444" stroke="#5A3E23" strokeWidth="2" />
        </g>

        {/* Large surprised round head */}
        <ellipse cx="50" cy="52" rx="34" ry="28" fill="#FAF6F0" stroke="#5A3E23" strokeWidth="3" />

        {/* Eyes wide */}
        <circle cx="36" cy="48" r="4.5" fill="#1C1917" />
        <circle cx="64" cy="48" r="4.5" fill="#1C1917" />
        <circle cx="34.5" cy="46" r="1.5" fill="#FFFFFF" />
        <circle cx="62.5" cy="46" r="1.5" fill="#FFFFFF" />

        {/* Surprised mouth */}
        <path d="M 44 60 C 44 68, 56 68, 56 60 Z" fill="#F43F5E" stroke="#5A3E23" strokeWidth="2.5" />

        {/* Cheek blushes */}
        <circle cx="24" cy="58" r="6" fill="#F43F5E" opacity="0.65" />
        <circle cx="76" cy="58" r="6" fill="#F43F5E" opacity="0.65" />

        {/* Whiskers */}
        <line x1="16" y1="48" x2="6" y2="45" stroke="#5A3E23" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="15" y1="53" x2="4" y2="53" stroke="#5A3E23" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="16" y1="58" x2="6" y2="61" stroke="#5A3E23" strokeWidth="2.5" strokeLinecap="round" />

        <line x1="84" y1="48" x2="94" y2="45" stroke="#5A3E23" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="85" y1="53" x2="96" y2="53" stroke="#5A3E23" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="84" y1="58" x2="94" y2="61" stroke="#5A3E23" strokeWidth="2.5" strokeLinecap="round" />

        {/* Sweat droplet */}
        <path d="M 22 28 Q 18 24 16 28 Q 19 32 22 28" fill="#3B82F6" opacity="0.8" />
        <path d="M 78 28 Q 82 24 84 28 Q 81 32 78 28" fill="#3B82F6" opacity="0.8" />
      </svg>
    </div>
  );
}

export default function GameWhackAMole({ onBack }: { onBack: () => void }) {
  const [score, setScore] = useState(0);
  const [missedCount, setMissedCount] = useState(0);
  const [gameLevel, setGameLevel] = useState(1); // 1 = Normal, 2 = Fast
  const [isPlaying, setIsPlaying] = useState(true);
  
  // Game states
  const [showSurrenderModal, setShowSurrenderModal] = useState(false);
  const [showJumpscare, setShowJumpscare] = useState(false);
  const [isWon, setIsWon] = useState(false);

  // Grid representing 3x3 layout holes (9 cells)
  const [moles, setMoles] = useState<Mole[]>(() => 
    Array.from({ length: 9 }).map((_, i) => ({ id: i, active: false, whacked: false, type: 'standard' }))
  );

  const gameTimerRef = useRef<any>(null);
  const activeTimersRef = useRef<Record<number, any>>({});

  // Trigger sound clicks
  const playClick = () => soundSynth.playClick();

  // Reset or start game
  const resetGame = (level = 1) => {
    soundSynth.playClick();
    
    // Clear all existing game loops/timers
    if (gameTimerRef.current) clearInterval(gameTimerRef.current);
    Object.values(activeTimersRef.current).forEach(t => clearTimeout(t as any));
    activeTimersRef.current = {};

    setScore(level === 1 ? 0 : 100); // Level 2 preserves or starts at level 100
    setMissedCount(0);
    setGameLevel(level);
    setIsPlaying(true);
    setShowSurrenderModal(false);
    setShowJumpscare(false);
    setIsWon(false);

    setMoles(Array.from({ length: 9 }).map((_, i) => ({ id: i, active: false, whacked: false, type: 'standard' })));
  };

  useEffect(() => {
    resetGame(1);
    return () => {
      if (gameTimerRef.current) clearInterval(gameTimerRef.current);
      Object.values(activeTimersRef.current).forEach(t => clearTimeout(t as any));
    };
  }, []);

  // Main game spawning interval loop
  useEffect(() => {
    if (!isPlaying || showSurrenderModal || showJumpscare || isWon) {
      if (gameTimerRef.current) {
        clearInterval(gameTimerRef.current);
        gameTimerRef.current = null;
      }
      return;
    }

    // Interval between mole pops (faster in Level 2!)
    const spawnInterval = gameLevel === 1 ? 950 : 550;

    gameTimerRef.current = setInterval(() => {
      // Pick random inactive hole
      setMoles((prevMoles) => {
        const inactiveIndices: number[] = [];
        prevMoles.forEach((m, idx) => {
          if (!m.active) inactiveIndices.push(idx);
        });

        if (inactiveIndices.length === 0) return prevMoles;

        const randomIdx = inactiveIndices[Math.floor(Math.random() * inactiveIndices.length)];
        const nextMoles = [...prevMoles];

        // Mole type probability
        const rng = Math.random();
        const moleType = rng > 0.85 ? 'golden' : rng > 0.65 ? 'shiny' : 'standard';

        nextMoles[randomIdx] = {
          id: randomIdx,
          active: true,
          whacked: false,
          type: moleType
        };

        // Automatic retreat timer (extended by 1000ms for child-friendly play)
        const activeDuration = gameLevel === 1 
          ? (moleType === 'golden' ? 1700 : 2200) 
          : (moleType === 'golden' ? 1500 : 1800);

        if (activeTimersRef.current[randomIdx]) {
          clearTimeout(activeTimersRef.current[randomIdx]);
        }

        activeTimersRef.current[randomIdx] = setTimeout(() => {
          handleMoleRetreat(randomIdx);
        }, activeDuration);

        return nextMoles;
      });
    }, spawnInterval);

    return () => {
      if (gameTimerRef.current) {
        clearInterval(gameTimerRef.current);
        gameTimerRef.current = null;
      }
    };
  }, [isPlaying, gameLevel, showSurrenderModal, showJumpscare, isWon]);

  const handleMoleRetreat = (index: number) => {
    setMoles((prevMoles) => {
      const target = prevMoles[index];
      if (target && target.active && !target.whacked) {
        // This counts as a fail/miss!
        setMissedCount((prevMissed) => {
          const nextMissed = prevMissed + 1;
          soundSynth.playFail();

          if (nextMissed >= 5) {
            // Trigger jumpscare cute face game over!
            setShowJumpscare(true);
            setIsPlaying(false);
          }
          return nextMissed;
        });
      }

      const nextMoles = [...prevMoles];
      nextMoles[index] = { ...nextMoles[index], active: false, whacked: false };
      return nextMoles;
    });
  };

  const handleWhackMole = (index: number, type: 'standard' | 'shiny' | 'golden') => {
    const target = moles[index];
    if (!target || !target.active || target.whacked) return;

    soundSynth.playPop();

    // Clear active retreat timer
    if (activeTimersRef.current[index]) {
      clearTimeout(activeTimersRef.current[index]);
      delete activeTimersRef.current[index];
    }

    setMoles((prevMoles) => {
      const nextMoles = [...prevMoles];
      nextMoles[index] = { ...nextMoles[index], whacked: true };
      return nextMoles;
    });

    // Score calculations: hit rewards +4 points
    setScore((prevScore) => {
      const newScore = prevScore + 4;
      soundSynth.playScore();

      if (gameLevel === 1 && newScore >= 100) {
        // Normal mode reaches limit -> Surrender choice!
        setIsPlaying(false);
        setShowSurrenderModal(true);
      } else if (gameLevel === 2 && newScore >= 200) {
        // Level 2 reaches 200 points -> Absolute victory!
        setIsWon(true);
        setIsPlaying(false);
        soundSynth.playVictory();
      }

      return newScore;
    });

    // Animate removal after brief lag for hit visual
    setTimeout(() => {
      setMoles((prevMoles) => {
        const nextMoles = [...prevMoles];
        if (nextMoles[index]) {
          nextMoles[index] = { ...nextMoles[index], active: false, whacked: false };
        }
        return nextMoles;
      });
    }, 200);
  };

  const handleContinueLevelTwo = () => {
    // Choose to continue: Speed up the game and set to level 2!
    resetGame(2);
  };

  const MOLE_EMOJIS = {
    standard: '🐹',
    shiny: '🐰',
    golden: '🦊'
  };

  return (
    <div 
      className="w-full flex flex-col items-center p-4 min-h-[90vh] select-none text-[#5A3E23] relative"
      id="game-whack-mole-root"
    >
      {/* JUMPSCARE CUTE MOLE FACE OVERLAY */}
      <AnimatePresence>
        {showJumpscare && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#FFF3DF]/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-6 text-center"
            id="mole-jumpscare-overlay"
          >
            {/* Giant adorable mole face container updated to use mole_doll_lunging.png */}
            <motion.div
              initial={{ scale: 0.1, rotate: -20 }}
              animate={{ scale: [1, 1.4, 1.25], rotate: [0, 15, 0] }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative flex flex-col items-center select-none"
            >
              <LosingMoleDollComponent />

              {/* Playful message cloud */}
              <div className="mt-8 bg-white border-2 border-[#8C6239]/20 px-6 py-3 rounded-full shadow-md text-sm font-serif font-black flex items-center gap-1.5 animate-bounce">
                <Smile className="w-4 h-4 text-amber-500" />
                <span>抓到平平小朋友啦！嘿嘿 🐹</span>
              </div>
            </motion.div>

            <div className="flex space-x-3.5 mt-8">
              <button
                onClick={() => resetGame(1)}
                className="px-6 py-2.5 rounded-full bg-[#8C6239] hover:bg-[#5A3E23] text-white font-serif font-black text-sm shadow-md active:scale-95 transition-all outline-none flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>不服气，重来一盘！🕹️</span>
              </button>
              <button
                onClick={onBack}
                className="px-6 py-2.5 rounded-full bg-white hover:bg-stone-50 text-stone-700 border border-stone-250 font-serif font-bold text-sm shadow-xs active:scale-95 transition-all"
              >
                返回温馨小屋
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Level 1: Moles surrender Modal */}
      <AnimatePresence>
        {showSurrenderModal && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-40" id="surrender-alert-panel">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-md bg-white rounded-3xl border-4 border-[#8C6239]/20 p-6 text-center shadow-2xl flex flex-col items-center"
            >
              {/* Surrender white flag visual banner */}
              <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center text-3xl mb-3 animate-pulse">
                🏳️ hamster
              </div>

              <h3 className="text-xl font-serif font-black text-[#5A3E23]">地鼠军团投降啦！🗺️</h3>

              <div className="my-4 p-4 bg-orange-50/70 border border-orange-200/50 rounded-2xl w-full text-xs font-serif leading-relaxed text-stone-600">
                “呼呼……平平小朋友的锤槌太快了，我们正式举白旗投降！🏳️ 
                <br />
                <b>如果点击【继续挑战】</b>，我们将全力开启暴走状态，速度会非常惊人哦，想要试试看吗？”
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <button
                  onClick={handleContinueLevelTwo}
                  className="flex-1 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 font-serif font-black text-[#FFFDFB] text-xs shadow-md active:scale-95 transition-all outline-none"
                >
                  继续挑战 (狂暴地鼠) ⚡
                </button>
                <button
                  onClick={onBack}
                  className="flex-1 py-2.5 rounded-full bg-stone-105 hover:bg-stone-200 text-[#8C6239] font-serif font-bold text-xs border border-stone-200 active:scale-95 transition-all outline-none"
                >
                  见好就收，返回小屋
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Level 2 Complete Supreme Victory Modal */}
      <AnimatePresence>
        {isWon && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-40" id="victory-supreme-panel">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-md bg-gradient-to-br from-[#FFFCEE] via-white to-[#FFFCEE] rounded-3xl border-4 border-amber-500 p-6 text-center shadow-2xl flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-4xl mb-3 animate-spin duration-1000">
                👑
              </div>

              <h3 className="text-2xl font-serif font-black text-amber-800 flex items-center gap-1.5 justify-center">
                <Sparkles className="w-5 h-5 text-amber-500" />
                儿童节保卫战完美大胜！
                <Sparkles className="w-5 h-5 text-amber-500" />
              </h3>

              <p className="font-serif text-stone-600 text-xs my-4 leading-relaxed max-w-sm">
                不可思议！平平成功通关了狂暴模式打满 200 分！地鼠军团已经彻底心服口服。
                <br />你永远是今天最威风、最快乐的小主宰！✨
              </p>

              <div className="flex gap-3 w-full">
                <button
                  onClick={() => resetGame(1)}
                  className="flex-1 py-2.5 rounded-full bg-[#8C6239] hover:bg-[#5A3E23] text-white text-xs font-serif font-black shadow-md transition-all active:scale-95"
                >
                  重温一遍 🎮
                </button>
                <button
                  onClick={onBack}
                  className="flex-1 py-2.5 rounded-full bg-amber-100 text-[#8C6239] hover:bg-amber-200 text-xs font-bold border border-amber-200 transition-all active:scale-95"
                >
                  荣誉而归，回主房
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Header Rows */}
      <div className="w-full max-w-xl flex items-center justify-between mb-4" id="game-mole-controls-row">
        <button
          onClick={onBack}
          className="flex items-center space-x-1 px-4 py-2 rounded-full bg-amber-500/10 hover:bg-amber-500/15 border border-amber-200 text-amber-800 text-xs font-bold transition-all active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>返回小屋</span>
        </button>

        <h2 className="text-lg font-serif font-black flex items-center gap-1">
          <span>🔨 保卫童画地鼠 </span>
          {gameLevel === 2 && (
            <span className="text-[10px] bg-red-500 text-white font-mono px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse flex items-center gap-0.5">
              <Zap className="w-2.5 h-2.5 fill-white" /> 狂暴模式
            </span>
          )}
        </h2>

        <button
          onClick={() => resetGame(1)}
          className="p-2 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-all active:scale-90"
          title="全部重来"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* SCORE STATS BOARD */}
      <div className="w-full max-w-xl grid grid-cols-3 gap-3 mb-5 bg-white/70 backdrop-blur-md p-3 rounded-2xl border border-stone-200 shadow-xs text-center" id="game-mole-stats-panel">
        <div>
          <span className="block text-[9px] uppercase font-mono tracking-wider font-bold text-stone-400">当前积累分数</span>
          <span className="text-lg font-serif font-black text-[#8C6239]">{score} 分</span>
          <span className="text-[8px] font-mono text-stone-400 block">+4分 / 打击</span>
        </div>
        
        <div>
          <span className="block text-[9px] uppercase font-mono tracking-wider font-bold text-stone-400">漏掉地鼠数</span>
          <div className="flex items-center justify-center space-x-0.5 mt-1">
            {Array.from({ length: 5 }).map((_, idx) => {
              const isFled = idx < missedCount;
              return (
                <span 
                  key={idx} 
                  className={`text-sm transition-all ${isFled ? 'opacity-30 scale-90 grayscale' : 'scale-105'}`}
                  title={isFled ? '已滑落' : '安全生命'}
                >
                  🍎
                </span>
              );
            })}
          </div>
          <span className="text-[7.5px] font-mono text-stone-400 block">漏 5 只即满屏扑脸</span>
        </div>

        <div>
          <span className="block text-[9px] uppercase font-mono tracking-wider font-bold text-stone-400">挑战目标</span>
          <span className="text-xs font-serif font-black text-amber-600 block mt-1.5">
            {gameLevel === 1 ? '🥇 100分 迫使投降' : '👑 200分 完美通关'}
          </span>
        </div>
      </div>

      {/* Interactive Mole Holes Field Box (3x3 grid) - Padding set to bare minimum to align grid cells exactly with background-baked holes */}
      <div 
        className="w-full max-w-xl aspect-square max-h-[460px] bg-gradient-to-b from-green-300 via-emerald-250 to-green-300 bg-cover bg-center rounded-3xl border-4 border-dashed border-[#8C6239]/20 relative shadow-inner p-1 sm:p-2 grid grid-cols-3 grid-rows-3 gap-0" 
        style={{
          backgroundImage: "url('/src/components/2026/Festival_2026_ChildrenDay/image/gameWhackAMole/mole_game_background.png')"
        }}
        id="mole-grid-playground"
      >
        {/* Soft grass textures fallback/decorations (semi-transparent) */}
        <div className="absolute top-2 left-6 text-xl select-none pointer-events-none opacity-30">🌸</div>
        <div className="absolute bottom-3 right-6 text-xl select-none pointer-events-none opacity-30">🌻</div>
        <div className="absolute top-[40%] right-10 text-xl select-none pointer-events-none opacity-20">🦋</div>

        {moles.map((mole) => {
          const r = Math.floor(mole.id / 3);
          
          // Different bottom masks to align the clipping bottom precisely with matching row perspective holes
          let maskClass = "absolute inset-x-2 top-[-20%] bottom-[30%] sm:bottom-[32%] md:bottom-[35%] z-10 flex flex-col justify-end items-center overflow-hidden pointer-events-none";
          if (r === 0) {
            // Top row: much lower bottom mask line to set the mole deeper and align with back holes
            maskClass = "absolute inset-x-2 top-[-10%] bottom-[12%] sm:bottom-[15%] md:bottom-[18%] z-10 flex flex-col justify-end items-center overflow-hidden pointer-events-none";
          } else if (r === 1) {
            // Middle row: moderately lower bottom mask line
            maskClass = "absolute inset-x-2 top-[-15%] bottom-[20%] sm:bottom-[23%] md:bottom-[25%] z-10 flex flex-col justify-end items-center overflow-hidden pointer-events-none";
          } else {
            // Bottom row: fits beautifully near the lower end of the grid cell
            maskClass = "absolute inset-x-2 top-[-20%] bottom-[26%] sm:bottom-[28%] md:bottom-[30%] z-10 flex flex-col justify-end items-center overflow-hidden pointer-events-none";
          }

          return (
            <div 
              key={mole.id} 
              className="w-full h-full relative group"
              id={`hole-container-${mole.id}`}
            >
              {/* Wooden or muddy Hole Rim - Disabled to show background holes clearly */}
              {/* <div className="absolute bottom-[-1px] inset-x-0 h-4 md:h-5 bg-amber-900/35 rounded-full border border-amber-900/15 shadow-inner select-none pointer-events-none z-0" /> */}
              {/* <div className="absolute bottom-[2px] inset-x-2 h-2 bg-stone-900/40 rounded-full blur-[1px] select-none pointer-events-none z-0" /> */}

              {/* Mole character inside the hole - Masked top and bottom to create popping effect inside the visual hole */}
              <div className={maskClass}>
                <AnimatePresence>
                  {mole.active && (
                    <motion.button
                      key={`mole-item-${mole.id}`}
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "110%" }}
                      transition={{ type: "spring", stiffness: 350, damping: 22 }}
                      onClick={() => handleWhackMole(mole.id, mole.type)}
                      className="w-full h-full relative focus:outline-none flex flex-col justify-end items-center cursor-pointer pointer-events-auto"
                    >
                      {/* Whack stars overlay if hit/whacked */}
                      {mole.whacked ? (
                        <div className="absolute top-0 text-2xl animate-ping select-none z-20">💥</div>
                      ) : null}

                      {/* Display beautiful custom Mole Doll or fallback Hello Kitty styles */}
                      <div className="w-[85%] h-[85%] flex items-end justify-center select-none pointer-events-none z-10">
                        <MoleDoll type={mole.type} whacked={mole.whacked} rowIndex={r} />
                      </div>

                      {/* Sparkly halo badge for golden/shiny moles */}
                      {!mole.whacked && mole.type !== 'standard' && (
                        <span className="absolute top-2 text-[8px] bg-amber-500 text-white font-mono px-1 rounded-full scale-90 z-20">
                          {mole.type === 'golden' ? 'GOLDEN' : 'SHINY'}
                        </span>
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              {/* Dirt mound pile - Disabled to show background holes clearly */}
              {/* <div className="absolute bottom-[-2px] inset-x-3 h-2.5 bg-yellow-950/20 rounded-b-xl select-none pointer-events-none z-15" /> */}
            </div>
          );
        })}
      </div>

      <div className="mt-4 text-center text-stone-400 text-[10px] italic leading-relaxed select-none">
        提示：普通模式打满 100 分即可强制让地鼠求饶，选择【继续挑战】即可解锁高倍速狂暴保卫战，目标为 200 分！
      </div>
    </div>
  );
}
