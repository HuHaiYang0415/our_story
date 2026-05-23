import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LETTERS_DATA } from '../data';
import { Letter } from '../types';
import { ArrowLeft, ChevronLeft, ChevronRight, Calendar, Sparkles, Heart, Grid, Minimize2 } from 'lucide-react';
import { LetterReader } from './LetterReader';

interface EnvelopeStackProps {
  onBackToCabinet: () => void;
}

export function EnvelopeStack({ onBackToCabinet }: EnvelopeStackProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [extractingLetterId, setExtractingLetterId] = useState<string | null>(null);
  const [readLetter, setReadLetter] = useState<Letter | null>(null);
  const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);

  // Custom Uploadable Stamps Map stored in localStorage
  const [customStamps, setCustomStamps] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('custom-stamps');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  const handleStampUpload = (letterId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setCustomStamps(prev => {
        const updated = { ...prev, [letterId]: dataUrl };
        localStorage.setItem('custom-stamps', JSON.stringify(updated));
        return updated;
      });
    };
    reader.readAsDataURL(file);
  };

  const handleClearStamp = (letterId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomStamps(prev => {
      const updated = { ...prev };
      delete updated[letterId];
      localStorage.setItem('custom-stamps', JSON.stringify(updated));
      return updated;
    });
  };

  // Quick helper to go to previous/next item in a circular, infinite-loop stack.
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + LETTERS_DATA.length) % LETTERS_DATA.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % LETTERS_DATA.length);
  };

  // Quick date selector action:
  // "点击日期，会有动画将对应的信封抽出并放置到第一个，再次点击可以打开信封"
  const handleSelectDate = (index: number) => {
    if (activeIndex === index) {
      // If clicked again on the already active envelope, open it!
      handleOpenLetter(LETTERS_DATA[index]);
    } else {
      setActiveIndex(index);
    }
  };

  const handleOpenLetter = (letter: Letter) => {
    if (extractingLetterId) return;

    setExtractingLetterId(letter.id);

    setTimeout(() => {
      if (letter.href) {
        const returnUrl = `${window.location.pathname}${window.location.search}#envelopes`;
        sessionStorage.setItem('companion520-return', returnUrl);
        window.location.href = new URL(letter.href, window.location.href).href;
        return;
      }

      if (letter.content) {
        setReadLetter(letter);
      }

      setExtractingLetterId(null);
    }, 850);
  };

  const loadedLetters = LETTERS_DATA;
  const activeLetter = loadedLetters[activeIndex];
  const openHint = activeLetter.href
    ? '点击进入 520 互动 • 再次点击打开'
    : '点击信封抽出 • 再次点击打开阅读';

  return (
    <div className="relative w-full min-h-screen bg-brand-bg flex flex-col justify-between py-4 px-3 md:px-6 overflow-x-hidden select-none" id="envelope-stack-page">
      {/* Soft warm sunbeam/glow effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-amber-100/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-orange-100/10 blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="w-full max-w-3xl mx-auto flex items-center justify-between z-10 py-1 border-b border-[#E5DACE]/40" id="envelope-page-header">
        <button
          onClick={onBackToCabinet}
          className="flex items-center space-x-1.5 text-brand-text/70 hover:text-brand-text font-serif text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full hover:bg-stone-100 transition-colors cursor-pointer border border-[#E5DACE] shadow-xs bg-white/60 backdrop-blur-sm"
          id="btn-back-cabinet"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>返回展柜</span>
        </button>

        <div className="flex flex-col items-center text-center">
          <span className="font-serif text-[#8C6239] text-sm md:text-base font-bold tracking-wide">时光信箱</span>
        </div>

        <div className="flex justify-end">
          <div className="flex items-center space-x-1 bg-amber-500/15 px-2.5 py-1 rounded-full text-[10px] font-bold text-[#8C6239]">
            <Sparkles className="w-3 h-3" />
            <span>{loadedLetters.length} 封</span>
          </div>
        </div>
      </div>

      {/* Main compact center column container */}
      <div className="w-full max-w-lg mx-auto flex-1 flex flex-col items-center justify-start gap-3.5 my-3 z-10" id="envelope-layout-area">
        
        {/* Simple compact description section */}
        <div className="text-center w-full space-y-1 px-1" id="envelope-narrative">
          <h1 className="text-xl md:text-2xl font-serif text-brand-text font-semibold tracking-tight leading-none">
            时光与你来信
          </h1>
          <p className="text-brand-text/50 text-[11px] md:text-xs font-serif italic max-w-xs md:max-w-md mx-auto leading-tight">
            我和你并肩坐在时光的台阶上，把回忆叠成信，投进同一个黄昏。
          </p>
        </div>

        {/* Quick Select Date Timeline (Scrollable, expandable to show more dates scale) */}
        <div className="w-full z-10 px-1" id="date-timeline-module">
          {!isTimelineExpanded ? (
            <div className="flex items-center space-x-1.5 bg-white/55 backdrop-blur-xs p-1 rounded-xl border border-[#E5DACE]/50 shadow-xs">
              {/* Scrollable list with subtle fade edges */}
              <div className="relative flex-1 min-w-0">
                <div 
                  className="flex items-center overflow-x-auto gap-1.5 py-1 select-none no-scrollbar scroll-smooth flex-row flex-nowrap justify-start md:justify-center px-1" 
                  id="date-horizontal-list"
                >
                  {loadedLetters.map((letter, index) => {
                    const isSelected = activeIndex === index;
                    return (
                      <button
                        key={letter.id}
                        onClick={() => handleSelectDate(index)}
                        className={`flex-shrink-0 px-3 py-1 rounded-full transition-all text-xs border cursor-pointer font-sans font-bold leading-none ${
                          isSelected
                            ? 'bg-[#8C6239] text-[#FFFDFB] border-[#8C6239] shadow-xs scale-105'
                            : 'bg-[#FFFDFB] hover:bg-stone-50 text-brand-text/75 border-[#E5DACE] hover:border-[#8C6239] text-[11px]'
                        }`}
                        id={`btn-date-select-${letter.id}`}
                      >
                        {letter.date}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Expand to grid trigger button */}
              <button
                onClick={() => setIsTimelineExpanded(true)}
                className="flex-shrink-0 flex items-center space-x-1 px-2.5 py-1.5 rounded-lg border border-[#E5DACE] bg-[#FFFDFB] hover:bg-[#8C6239] hover:text-white transition-all text-[10px] font-bold text-[#8C6239] cursor-pointer shadow-xs active:scale-95"
                title="展开全部日期"
              >
                <Grid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">全部</span>
              </button>
            </div>
          ) : (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="w-full bg-[#FFFDFB]/95 backdrop-blur-xs border border-[#E5DACE] rounded-xl p-3 shadow-md flex flex-col space-y-2"
              id="date-grid-expanded-box"
            >
              <div className="flex items-center justify-between border-b border-[#E5DACE]/40 pb-1.5">
                <span className="text-[10px] font-bold uppercase text-[#8C6239] flex items-center space-x-1 tracking-wider">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>全部纪念日 ({loadedLetters.length})</span>
                </span>
                <button
                  onClick={() => setIsTimelineExpanded(false)}
                  className="p-1 hover:bg-stone-100 rounded-full text-brand-text/50 hover:text-brand-text cursor-pointer transition-colors"
                  title="收起"
                >
                  <Minimize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Grid Layout demonstrating details of other letters */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-[120px] overflow-y-auto no-scrollbar py-0.5">
                {loadedLetters.map((letter, index) => {
                  const isSelected = activeIndex === index;
                  return (
                    <button
                      key={letter.id}
                      onClick={() => {
                        handleSelectDate(index);
                        setIsTimelineExpanded(false); // Collapses to refocus view on chosen envelope
                      }}
                      className={`text-left p-2 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#8C6239] text-white border-[#8C6239] shadow-xs'
                          : 'bg-[#FFFDFB] border-[#E5DACE]/60 hover:border-[#8C6239] hover:bg-stone-50'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className={`text-[11px] font-serif font-bold ${isSelected ? 'text-white' : 'text-brand-text'}`}>
                          {letter.date}
                        </span>
                        <Heart className={`w-2.5 h-2.5 ${isSelected ? 'text-white fill-white' : 'text-red-500 fill-red-500/10'}`} />
                      </div>
                      <span className={`text-[9px] truncate mt-0.5 max-w-full ${isSelected ? 'text-white/80' : 'text-brand-text/50'}`}>
                        {letter.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>

        {/* Envelope Deck Area - Compacted Height and Width */}
        <div 
          className="w-full flex flex-col items-center justify-center h-[180px] md:h-[210px] relative z-20" 
          id="envelope-stack-deck"
        >
          {/* Card alignment wrap */}
          <div className="relative w-[280px] md:w-[320px] h-[160px] md:h-[185px] flex items-center justify-start">
            
            <AnimatePresence mode="popLayout">
              {loadedLetters.map((letter, i) => {
                const total = loadedLetters.length;
                // Calculate circular relative offset in stack relative to activeIndex
                const stackOffset = (i - activeIndex + total) % total;
                const isTop = stackOffset === 0;

                // Unique layout values based on current position in view
                const xOffset = isTop ? 0 : stackOffset * 22; // peeking edge per letter
                const yOffset = stackOffset * 5;             // cascading down slightly
                const rotation = isTop ? -3 : (stackOffset * 2) - 1.0; // fan-out effect angular variation
                const isExtracting = extractingLetterId === letter.id;

                return (
                  <motion.div
                    key={letter.id}
                    layoutId={`env-${letter.id}`}
                    initial={{ 
                      opacity: 0, 
                      x: xOffset + 30, 
                      y: yOffset + 15, 
                      rotate: rotation,
                    }}
                    animate={{ 
                      opacity: 1 - (stackOffset * 0.18), // fade out background letters slightly
                      x: xOffset,
                      y: yOffset,
                      rotate: rotation,
                      zIndex: 30 - stackOffset,
                      scale: 1 - (stackOffset * 0.02),
                    }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 150, 
                      damping: 18,
                    }}
                    onClick={() => {
                      if (isTop) {
                        handleOpenLetter(letter);
                      } else {
                        // If user clicks a peeking letter, make it the active one!
                        setActiveIndex(i);
                      }
                    }}
                    className="absolute w-full h-full rounded-xl cursor-pointer select-none"
                    id={`env-card-${letter.id}`}
                    style={{
                      transformOrigin: 'bottom left',
                    }}
                  >
                    {/* The Envelope visual container using pure white/cream card styling */}
                    <motion.div
                      animate={isExtracting ? {
                        y: -110,
                        rotate: 0,
                        scale: 1.05,
                        boxShadow: '0 20px 40px -8px rgba(45, 36, 30, 0.25)',
                        transition: { duration: 0.8, ease: 'easeOut' }
                      } : {}}
                      className="w-full h-full p-3 relative rounded-xl border-t border-b overflow-hidden shadow-sm flex flex-col justify-between"
                      style={{
                        backgroundColor: '#FFFDFB', // premium white paper color from theme
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z' fill='%23FDFBF7' fill-opacity='0.65' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                        borderColor: '#E5DACE',
                      }}
                    >
                      {/* Red & Blue Airmail Borders */}
                      <div className="absolute inset-x-0 top-0 h-1 flex" id="airmail-pattern-top">
                        {Array.from({ length: 48 }).map((_, idx) => (
                          <div 
                            key={idx} 
                            className={`flex-1 h-full skew-x-12 ${
                              idx % 2 === 0 ? 'bg-[#8C6239]/65' : 'bg-red-700/65'
                            }`} 
                          />
                        ))}
                      </div>

                      <div className="absolute inset-x-0 bottom-0 h-1 flex" id="airmail-pattern-bottom">
                        {Array.from({ length: 48 }).map((_, idx) => (
                          <div 
                            key={idx} 
                            className={`flex-1 h-full skew-x-12 ${
                              idx % 2 === 0 ? 'bg-red-700/65' : 'bg-[#8C6239]/65'
                            }`} 
                          />
                        ))}
                      </div>

                      {/* Envelope FLAP (Visual lines of authentic envelope) */}
                      <div className="absolute top-0 inset-x-0 h-8 flex justify-center items-start pt-1.5 pointer-events-none select-none">
                        <svg className="w-11/12 h-6 text-[#E5DACE]/45 fill-none stroke-[#E5DACE]/35 stroke-1" viewBox="0 0 100 30">
                          <path d="M 0 0 L 50 18 L 100 0" />
                        </svg>
                      </div>

                      {/* 4:3 Aspect Ratio Stamp Area (Custom Uploadable Area, sized 64x48) */}
                      <div 
                        onClick={(e) => {
                          if (!isTop) return;
                          e.stopPropagation();
                          document.getElementById(`stamp-input-${letter.id}`)?.click();
                        }}
                        className={`absolute top-3 right-3 flex items-center justify-center w-[64px] h-[48px] border-2 border-dashed border-[#8C6239]/35 p-0.5 bg-white select-none transition-all group/stamp ${
                          isTop ? 'cursor-pointer hover:border-[#8C6239] hover:shadow-xs hover:scale-105 z-40' : 'pointer-events-none'
                        }`}
                        id={`stamp-container-${letter.id}`}
                      >
                        {customStamps[letter.id] ? (
                          <div className="relative w-full h-full select-none overflow-hidden">
                            <img 
                              src={customStamps[letter.id]} 
                              alt="Custom stamp" 
                              className="w-full h-full object-cover rounded-[1px]"
                              referrerPolicy="no-referrer"
                            />
                            {isTop && (
                              <button
                                onClick={(e) => handleClearStamp(letter.id, e)}
                                className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-600 text-white rounded-full flex items-center justify-center text-[8px] font-bold hover:bg-red-700 shadow-xs cursor-pointer z-50 transform hover:scale-110"
                                title="清除邮票"
                              >
                                ×
                              </button>
                            )}
                          </div>
                        ) : (
                          <div className="w-full h-full bg-[#FFFDFB] flex flex-col justify-between items-center py-0.5 text-[6px] text-[#2D241E]/55 font-serif leading-none">
                            <span className="text-[5px]">POSTAGE</span>
                            <Heart className="w-2 h-2 text-red-700/50 fill-red-700/5" />
                            <span className="text-[5.5px]">¥ 4.20</span>
                          </div>
                        )}

                        {isTop && (
                          <div className="absolute inset-0 bg-black/45 opacity-0 group-hover/stamp:opacity-100 transition-opacity flex items-center justify-center rounded-[1px] pointer-events-none">
                            <span className="text-[8px] text-white font-sans font-bold">
                              {customStamps[letter.id] ? '更换' : '上传'}
                            </span>
                          </div>
                        )}

                        {/* Hidden Input File Element */}
                        {isTop && (
                          <input
                            type="file"
                            id={`stamp-input-${letter.id}`}
                            accept="image/*"
                            onChange={(e) => handleStampUpload(letter.id, e)}
                            className="hidden"
                          />
                        )}

                        {/* Cancellation circular lines */}
                        <div className="absolute -left-3 top-4 w-7 h-7 rounded-full border border-[#8C6239]/15 border-dashed pointer-events-none" />
                      </div>

                      {/* Quick Content/Stamp Label */}
                      <div className="mt-1 flex items-center space-x-1 text-[8px] tracking-wider text-[#2D241E]/35 uppercase font-sans font-bold">
                        <Heart className="w-2 h-2 fill-red-700/10 text-red-800" />
                        <span>TIME CAPSULE</span>
                      </div>

                      {/* Writing details */}
                      <div className="my-auto pl-1" id="envelope-address">
                        <div className="font-serif italic text-brand-text/45 text-[9px] leading-none">邮戳日期：</div>
                        <div className="font-serif italic font-light text-lg md:text-xl text-brand-text tracking-tight mt-0.5 pl-0.5 leading-none">
                          {letter.date}
                        </div>
                        <div className="font-hand text-xs md:text-sm text-[#8C6239]/90 max-w-[150px] truncate mt-0.5 pl-0.5 font-bold leading-tight">
                          {letter.oneLiner}
                        </div>
                      </div>

                      {/* Interactive Tap Hint */}
                      <div className="flex items-center justify-between text-[9px] text-[#2D241E]/40 border-t border-[#E5DACE]/35 pt-1">
                        <span />
                        {isTop && (
                          <span className="animate-pulse font-bold text-[#8C6239] flex items-center space-x-0.5 font-sans mr-6">
                            <span>{letter.href ? '进入 520' : '点击抽出'}</span>
                            <Sparkles className="w-2 h-2" />
                          </span>
                        )}
                      </div>

                      {/* Stamp Sealing Sticker (Bottom Right Anchor) */}
                      {isTop && (
                        <div className="absolute bottom-3 right-3 w-6.5 h-6.5 rounded-full bg-[#8C6239] border border-[#6D4C2B] flex items-center justify-center shadow-xs rotate-12">
                          <Heart className="w-3.5 h-3.5 text-[#FFFDFB]/90 fill-white/10" />
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Current Envelope Meta & Message card placed directly underneath envelopes + Arrows navigation */}
        <div className="w-full max-w-sm flex flex-col items-center space-y-2.5 z-10 px-1" id="active-msg-container">
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full p-3 bg-[#FFFDFB]/90 backdrop-blur-xs rounded-xl border border-[#E5DACE] shadow-xs text-center"
            id="active-msg-card"
          >
            <div className="flex items-center justify-between text-[9px] text-brand-text/55 font-bold uppercase tracking-wider mb-1 px-1">
              <span>第 {activeIndex + 1} / {loadedLetters.length} 封</span>
              <span>发信人: {loadedLetters[activeIndex].sender}</span>
            </div>
            
            <h3 className="font-serif text-sm font-bold text-brand-text truncate px-2">
              {loadedLetters[activeIndex].title}
            </h3>
            
            <p className="font-hand text-base md:text-lg text-[#8C6239] leading-tight italic mt-0.5 font-bold">
              {loadedLetters[activeIndex].oneLiner}
            </p>
          </motion.div>

          {/* Symmetrical arrows navigation underneath */}
          <div className="flex items-center justify-center space-x-3" id="desktop-arrows">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-full border border-[#E5DACE] transition-all cursor-pointer text-[#8C6239] bg-[#FFFDFB] hover:bg-[#8C6239] hover:text-white hover:border-[#8C6239] hover:scale-105 active:scale-95 shadow-xs"
              title="上一封"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <span className="text-[9px] text-brand-text/50 uppercase tracking-widest font-sans font-bold">
              {openHint}
            </span>

            <button
              onClick={handleNext}
              className="p-1.5 rounded-full border border-[#E5DACE] transition-all cursor-pointer text-[#8C6239] bg-[#FFFDFB] hover:bg-[#8C6239] hover:text-white hover:border-[#8C6239] hover:scale-105 active:scale-95 shadow-xs"
              title="下一封"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* 无外链信件（如「未完待续」）才打开弹窗阅读 */}
      <AnimatePresence>
        {readLetter?.content && (
          <LetterReader
            letter={readLetter}
            onClose={() => setReadLetter(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
