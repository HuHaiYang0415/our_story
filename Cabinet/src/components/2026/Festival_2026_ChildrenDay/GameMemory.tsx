import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, RotateCcw, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { soundSynth } from './SoundSynth';

interface Card {
  id: number;
  pairId: number;
  emoji: string;
  name: string;
  color: string;
  isFlipped: boolean;
  isMatched: boolean;
  imagePath?: string;
}

// Custom curated childrens theme icons/items
const CARD_THEMES = [
  { emoji: '🎒', name: '蜡笔小新', color: 'from-amber-200 to-amber-100 border-amber-300 text-amber-600', file: 'labixiaoxin.png' },
  { emoji: '💼', name: '野原广志', color: 'from-orange-200 to-orange-100 border-orange-300 text-orange-700', file: 'guangzhi.png' },
  { emoji: '🛍️', name: '野原美伢', color: 'from-rose-200 to-rose-100 border-rose-300 text-rose-600', file: 'meiya.png' },
  { emoji: '👶', name: '野原向日葵', color: 'from-emerald-200 to-emerald-100 border-emerald-300 text-emerald-700', file: 'yeyuanxiangrikui.png' },
  { emoji: '🐶', name: '野原小白', color: 'from-sky-200 to-sky-100 border-sky-300 text-sky-600', file: 'yeyuanxiaobai.png' },
  { emoji: '🌸', name: '大原娜娜子', color: 'from-purple-200 to-purple-100 border-purple-300 text-purple-600', file: 'taiyuannanazi.png' },
  { emoji: '👩‍🏫', name: '吉永绿', color: 'from-pink-200 to-pink-100 border-pink-300 text-pink-500', file: 'jiyonglv.png' },
  { emoji: '🕶️', name: '高仓文太', color: 'from-teal-200 to-teal-100 border-teal-300 text-teal-600', file: 'gaocangwentai.png' }
];

// Reusable card face component trying to load custom image assets under ./image/gameMemory/ with emoji fallback
function MemoryCardImage({ filename, fallbackEmoji }: { filename: string; fallbackEmoji: string }) {
  const [hasError, setHasError] = React.useState(false);
  const fullPath = `/src/components/2026/Festival_2026_ChildrenDay/image/gameMemory/${filename}`;

  if (hasError) {
    return (
      <span className="text-2.5xl md:text-3.5xl drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)] select-none">
        {fallbackEmoji}
      </span>
    );
  }

  return (
    <img
      src={fullPath}
      alt={fallbackEmoji}
      className="w-12 h-12 md:w-16 md:h-16 object-contain select-none pointer-events-none transition-transform"
      onError={() => setHasError(true)}
      referrerPolicy="no-referrer"
    />
  );
}

export default function GameMemory({ onBack }: { onBack: () => void }) {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matchesCount, setMatchesCount] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  // Initialize game
  const initGame = () => {
    soundSynth.playClick();
    const duplicated = [...CARD_THEMES, ...CARD_THEMES].map((theme, index) => ({
      id: index,
      pairId: CARD_THEMES.indexOf(theme),
      emoji: theme.emoji,
      name: theme.name,
      color: theme.color,
      isFlipped: false,
      isMatched: false,
      imagePath: theme.file
    }));

    // Shuffle cards
    const shuffled = duplicated.sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setSelectedIndices([]);
    setMoves(0);
    setMatchesCount(0);
    setIsWon(false);
    setIsChecking(false);
  };

  useEffect(() => {
    initGame();
  }, []);

  const handleCardClick = (index: number) => {
    if (isChecking || cards[index].isFlipped || cards[index].isMatched) return;

    soundSynth.playPop();

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newSelected = [...selectedIndices, index];
    setSelectedIndices(newSelected);

    if (newSelected.length === 2) {
      setMoves((prev) => prev + 1);
      setIsChecking(true);

      const [firstIdx, secondIdx] = newSelected;
      if (cards[firstIdx].pairId === cards[secondIdx].pairId) {
        // MATCHED!
        setTimeout(() => {
          newCards[firstIdx].isMatched = true;
          newCards[secondIdx].isMatched = true;
          setCards(newCards);
          setSelectedIndices([]);
          setMatchesCount((prev) => {
            const next = prev + 1;
            if (next === CARD_THEMES.length) {
              setIsWon(true);
              soundSynth.playVictory();
            } else {
              soundSynth.playScore();
            }
            return next;
          });
          setIsChecking(false);
        }, 500);
      } else {
        // NO MATCH! Flip back
        setTimeout(() => {
          newCards[firstIdx].isFlipped = false;
          newCards[secondIdx].isFlipped = false;
          setCards(newCards);
          setSelectedIndices([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  };

  return (
    <div 
      className="w-full flex flex-col items-center p-4 min-h-[90vh] select-none"
      id="game-memory-root"
    >
      {/* Top Banner Row */}
      <div className="w-full max-w-xl flex items-center justify-between mb-6" id="game-memory-header">
        <button
          onClick={onBack}
          className="flex items-center space-x-1 px-4 py-2 rounded-full bg-amber-500/10 hover:bg-amber-500/15 border border-amber-200 text-amber-800 text-xs font-bold transition-all active:scale-95"
          id="btn-back-to-room"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>返回小屋</span>
        </button>

        <h2 className="text-lg font-serif font-black text-[#5A3E23]">🎈 翻牌记忆配对 🧸</h2>

        <button
          onClick={initGame}
          className="p-2 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-all active:scale-90"
          title="重新开始"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Main Stats panel */}
      <div className="w-full max-w-xl grid grid-cols-2 gap-4 mb-6" id="game-memory-stats">
        <div className="bg-white/80 backdrop-blur-md p-3.5 rounded-2xl border border-amber-200/50 shadow-xs flex items-center justify-center space-x-3 transition-all hover:shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-orange-100/80 flex items-center justify-center text-xl select-none">
            👣
          </div>
          <div className="text-left">
            <span className="block text-[10px] tracking-wider font-bold text-stone-400">进行步数</span>
            <span className="text-lg font-serif font-black text-[#8C6239]">{moves} <span className="text-[11px] font-normal text-stone-400 font-sans ml-0.5">步</span></span>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-md p-3.5 rounded-2xl border border-amber-200/50 shadow-xs flex items-center justify-center space-x-3 transition-all hover:shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-rose-100/80 flex items-center justify-center text-xl select-none">
            ✨
          </div>
          <div className="text-left">
            <span className="block text-[10px] tracking-wider font-bold text-stone-400">目前配对</span>
            <span className="text-lg font-serif font-black text-rose-600">{matchesCount} <span className="text-stone-300 font-normal font-sans text-xs">/</span> {CARD_THEMES.length}</span>
          </div>
        </div>
      </div>

      {/* Grid Canvas area */}
      <div className="w-full max-w-xl aspect-square max-h-[500px] mb-6 p-4 bg-[#FCFAF2] rounded-3xl border-4 border-dashed border-[#8C6239]/20 flex flex-col items-center justify-center relative shadow-inner">
        
        {isWon ? (
          // Victory overlays
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 bg-white/95 rounded-3xl z-10 p-6 flex flex-col justify-center items-center text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-4xl animate-bounce">
              🏆
            </div>
            <h3 className="text-2xl font-serif font-black text-[#5A3E23] flex items-center gap-1.5 justify-center">
              <Sparkles className="w-5 h-5 text-amber-500" />
              全部配对成功！
              <Sparkles className="w-5 h-5 text-amber-500" />
            </h3>
            <p className="font-serif text-stone-600 text-sm max-w-xs leading-relaxed">
              平平好棒的记忆力呀！{moves} 步就通关了所有回忆！✨
            </p>
            <div className="flex items-center space-x-3 pt-3">
              <button
                onClick={initGame}
                className="px-6 py-2.5 rounded-full bg-[#8C6239] hover:bg-[#5A3E23] text-white font-serif font-black text-sm shadow-md active:scale-95 transition-all outline-none"
              >
                再玩一盘 🎉
              </button>
              <button
                onClick={onBack}
                className="px-6 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-[#5A3E23] border border-stone-200 font-serif font-bold text-sm active:scale-95 transition-all outline-none"
              >
                返回小屋
              </button>
            </div>
          </motion.div>
        ) : null}

        <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-2.5 md:gap-3.5">
          {cards.map((c, idx) => {
            const flipped = c.isFlipped || c.isMatched;
            return (
              <button
                key={c.id}
                onClick={() => handleCardClick(idx)}
                className={`w-full h-full relative focus:outline-hidden perspective-500 cursor-pointer rounded-2xl md:rounded-3xl border transition-all duration-300 ${
                  flipped 
                    ? 'border-amber-300 shadow-md transform rotate-y-180' 
                    : 'border-yellow-200/60 bg-gradient-to-br from-amber-300 via-yellow-200 to-amber-100 text-amber-800 shadow-xs hover:scale-[1.03] active:scale-95'
                }`}
              >
                {flipped ? (
                  // Front side
                  <div className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br ${c.color} flex flex-col items-center justify-center p-1 border-2`}>
                    {/* Tiny watermark on card top */}
                    <span className="text-[7px] text-stone-400 font-mono tracking-wide mb-1 opacity-75 hidden sm:block">MEMORIES</span>
                    
                    {/* Card face image with graceful fallback to cute emoji illustration */}
                    <MemoryCardImage filename={c.imagePath || ''} fallbackEmoji={c.emoji} />
                    
                    <span className="text-[8px] md:text-[9.5px] font-bold font-serif text-[#5A3E23] mt-1 text-center select-none truncate max-w-full">
                      {c.name}
                    </span>

                    {c.isMatched && (
                      <span className="absolute bottom-1 right-1 text-emerald-600 block bg-white/90 p-0.5 rounded-full shadow-xs">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      </span>
                    )}
                  </div>
                ) : (
                  // Card Back
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl md:rounded-3xl bg-amber-500">
                    <div className="w-8 h-8 md:w-11 md:h-11 rounded-full border-2 border-dashed border-white/40 flex items-center justify-center text-white text-lg md:text-xl font-bold font-serif opacity-80 shadow-inner">
                      ?
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
