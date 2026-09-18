import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Key } from 'lucide-react';
import { TimeTheme } from '@/shared/types';
import type { PageId } from '@/app/pageRegistry';
import { StageLayout, StageCabinet } from '@/shared/layout';
import { startCricketSounds, stopCricketSounds } from '@/shared/utils/cricketSounds';
import { FestiveHourglass } from './components/FestiveHourglass';
import { getCabinetFooterStyle } from './cabinetFooterStyles';
import { CabinetAtmosphere } from './CabinetAtmosphere';
import { CabinetEdgeDecor } from './CabinetEdgeDecor';
import { CabinetFloor } from './CabinetFloor';
import {
  VenusFlyTrap,
  HelloKittyDoll,
  GoldfishBowl,
  LemonTree,
} from './decor/CabinetFurnitureDecor';
import { FlowerBouquet } from './decor/FlowerBouquet';
import { StoryMuteButton } from '@/shared/ui/StoryControls';

interface CabinetProps {
  onOpenBox: (boxId: string) => void;
  onEnterFestivalArchive: () => void;
  onEnterFestivalPage: (pageId: PageId) => void;
  festivalPreviewTools?: React.ReactNode;
  theme: TimeTheme;
}

/** 每层腔体（仅 bg-black/25 透明灰区）；顶板/层板为棕色，不计入此高度 */
const SHELF_CAVITY_CLASS = `cabinet-shelf-cavity relative w-full grid grid-cols-3 items-end px-3 md:px-14 border-b-12`;

export function Cabinet({ onOpenBox, onEnterFestivalArchive, onEnterFestivalPage, festivalPreviewTools, theme }: CabinetProps) {
  const [boxInFocus, setBoxInFocus] = useState<string | null>(null);
  const [cricketsEnabled, setCricketsEnabled] = useState(true);

  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const referenceHeight = 820; // 视口正常基准高度
  const scale = Math.max(0.62, Math.min(1, windowDimensions.height / referenceHeight));
  
  const baseCavityHeight = 
    windowDimensions.width >= 768 ? 112 : 
    windowDimensions.width >= 640 ? 117 : 96;
  const cavityH = Math.round(baseCavityHeight * scale);

  const isDesktop = windowDimensions.width >= 768;
  const flytrapH = (isDesktop ? 88 : 64) * scale;
  const envelopesH = (isDesktop ? 72 : 58) * scale;
  const kittyH = (isDesktop ? 96 : 80) * scale;
  const goldfishH = (isDesktop ? 72 : 56) * scale;
  const photosH = (isDesktop ? 72 : 58) * scale;
  const hourglassH = (isDesktop ? 72 : 56) * scale;
  const lemontreeH = (isDesktop ? 96 : 72) * scale;
  const futureH = (isDesktop ? 72 : 58) * scale;
  const bouquetH = (isDesktop ? 95 : 80) * scale;

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
    setTimeout(() => {
      onOpenBox(boxId);
    }, 750);
  };
  const footerStyle = getCabinetFooterStyle(theme);

  return (
    <StageLayout
      id="cabinet-root-page"
      className="h-full min-h-0 w-full"
      atmosphere={<CabinetAtmosphere theme={theme} />}
      edgeDecor={<CabinetEdgeDecor theme={theme} />}
      floor={<CabinetFloor theme={theme} />}
      footer={
        <div
          className={`${footerStyle.bgClass} flex items-center justify-center transition-all duration-300 shadow-md`}
        >
          <div
            className={`text-center text-[8.5px] md:text-[9.5px] uppercase font-mono ${footerStyle.textClass} whitespace-nowrap`}
          >
            CRAFTED WITH LOVE &bull; SEALED WITH US
          </div>
        </div>
      }
    >
      {/* Header Section: Reduced padding to bring the cabinet closer to the title */}
      <header className="stage-header w-full pt-2 pb-2 md:pt-4 md:pb-3 px-2 md:px-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-2.5 z-20 border-b border-[#E5DACE]/60" id="cabinet-title-section">
        <div className="space-y-1.5 w-full md:w-auto">
          <div className="flex flex-wrap items-center gap-2">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] tracking-wider uppercase font-sans font-bold border transition-all duration-300 ${
                theme.isNight
                  ? "bg-amber-950/40 text-amber-200 border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.35)]"
                  : "bg-amber-100/40 text-[#8C6239] border-[#E5DACE]/30"
              }`}
            >
              <Heart className={`w-3 h-3 transition-all duration-300 ${
                theme.isNight ? 'text-rose-500 fill-rose-500 drop-shadow-[0_0_4px_rgba(244,63,94,0.85)] animate-pulse' : 'text-red-600 fill-red-600'
              }`} />
              <span className={theme.isNight ? "drop-shadow-[0_0_4px_rgba(251,191,36,0.75)] text-amber-200 font-extrabold" : ""}>
                时光与秘密展柜 · Our Memories
              </span>
            </motion.div>

            <div className="flex items-center gap-1.5 flex-nowrap">
              {theme.season === 'spring' && (
                <div className="flex items-center space-x-1 bg-emerald-700/10 px-2.5 py-0.5 rounded-full text-[9px] text-emerald-800 font-bold border border-emerald-500/15 whitespace-nowrap">
                  <span>🌱 新芽复苏</span>
                </div>
              )}
              {theme.season === 'summer' && (
                <div className="flex items-center space-x-1 bg-amber-700/10 px-2.5 py-0.5 rounded-full text-[9px] text-amber-850 font-bold border border-amber-500/15 whitespace-nowrap">
                  <span>☀️ 仲夏蝉鸣</span>
                </div>
              )}
              {theme.season === 'autumn' && (
                <div className="flex items-center space-x-1 bg-amber-700/10 px-2.5 py-0.5 rounded-full text-[9px] text-amber-800 font-bold border border-amber-500/15 whitespace-nowrap">
                  <span>🍂 金秋落叶</span>
                </div>
              )}
              {theme.season === 'winter' && (
                <div className="flex items-center space-x-1 bg-stone-700/10 px-2.5 py-0.5 rounded-full text-[9px] text-stone-600 font-bold border border-stone-500/15 whitespace-nowrap">
                  <span>❄️ 凛冬风雪</span>
                </div>
              )}

              {theme.season === 'summer' && theme.isNight && (
                <StoryMuteButton
                  muted={!cricketsEnabled}
                  onToggle={() => setCricketsEnabled((value) => !value)}
                  label="夏夜虫鸣"
                  tone="amber"
                  className="shrink-0"
                />
              )}
            </div>
          </div>
          
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

        <div className="flex flex-col items-end justify-end gap-2.5 w-full md:w-auto mt-2 md:mt-0">
          <div className="flex space-x-6 text-[10px] uppercase tracking-[0.2em] font-sans text-[#8C6239]/50 pb-1 w-full md:w-auto justify-between md:justify-end">
            <span>By 小胡 &bull; 平平</span>
            <span>Since 2026.05</span>
          </div>
        </div>
      </header>

      {/* Wooden Cabinet Structure: Shrunk boxes, raised row container heights, closer to the header */}
      <StageCabinet>
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
        className="relative isolate z-10 w-full rounded-3xl border border-transparent bg-transparent p-2 transition-all duration-500 mt-1.5 md:mt-2 mb-0 md:p-3"
        id="wooden-cabinet-wrapper"
      >
        {/* 布局占位：与下方 absolute 木柜同高，避免 absolute 导致外层高度塌陷 */}
        <div
          className="pointer-events-none invisible m-1.5 flex flex-col gap-2 p-2 md:gap-2.5 md:p-3"
          aria-hidden
        >
          <div className="cabinet-wood-top wood-pattern" />
          <div style={{ height: `${cavityH}px` }} />
          <div style={{ height: `${cavityH}px` }} />
          <div style={{ height: `${cavityH}px` }} />
        </div>

        {/* 外框棕色；顶板+层板为木条；层间 gap 露出页面底色（图2）；腔体仅灰色区域 */}
        <div
          className="absolute inset-1.5 flex flex-col gap-2 rounded-2xl border-4 border-transparent bg-transparent p-2 transition-all duration-500 md:gap-2.5 md:p-3"
          id="shelf-contents-box"
        >
          <div className="cabinet-wood-top wood-pattern relative z-[1] shrink-0" />

          {/* LAYER 1 (Top Shelf) */}
          <div style={{ height: `${cavityH}px` }} className={`${SHELF_CAVITY_CLASS} relative z-[1] shrink-0 rounded-t-lg`} id="shelf-layer-1">
            <span className={`absolute top-2 left-3 text-[8px] md:text-[9px] uppercase tracking-widest font-mono transition-colors duration-300 ${
              theme.isNight ? 'text-amber-100/40' : 'text-[#5A3E23]/60'
            }`}>1st Tier · 信笺</span>
            
            <div className="flex justify-start items-end mb-0.5" style={{ transform: `scale(${scale})`, transformOrigin: 'bottom left', height: `${flytrapH}px` }}>
              <VenusFlyTrap />
            </div>

            <div className="flex justify-center items-end relative mb-0.5 group" style={{ transform: `scale(${scale})`, transformOrigin: 'bottom center', height: `${envelopesH}px` }}>
              <motion.button
                type="button"
                whileHover={boxInFocus ? {} : { y: -6, scale: 1.02 }}
                onClick={() => handleBoxClick('envelopes', true)}
                className={`w-28 md:w-36 h-[72px] rounded-xl shadow-xl cursor-pointer bg-gradient-to-b from-[#8C6239] to-[#5A3E23] border border-[#6D4C2B] relative flex flex-col justify-center items-center transition-all p-2 ${
                  boxInFocus === 'envelopes' ? 'ring-3 ring-amber-400 z-50' : 'hover:shadow-2xl hover:border-amber-400/50'
                }`}
                id="wooden-box-envelopes"
                aria-label="打开时光信箱"
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
              </motion.button>

              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 p-2 bg-brand-text text-brand-bg text-[10px] rounded shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40 text-center font-sans">
                点击打开“时光信箱”，重温心动蜜语。
              </div>
            </div>

            <div className="flex justify-end items-end mb-0.5" style={{ transform: `scale(${scale})`, transformOrigin: 'bottom right', height: `${kittyH}px` }}>
              <HelloKittyDoll />
            </div>
          </div>

          {/* LAYER 2 (Middle Shelf) */}
          <div style={{ height: `${cavityH}px` }} className={`${SHELF_CAVITY_CLASS} relative z-[1] shrink-0`} id="shelf-layer-2">
            <span className={`absolute top-2 left-3 text-[8px] md:text-[9px] uppercase tracking-widest font-mono transition-colors duration-300 ${
              theme.isNight ? 'text-amber-100/40' : 'text-[#5A3E23]/60'
            }`}>2nd Tier · 相册</span>
            
            <div className="flex justify-start items-end mb-0.5" style={{ transform: `scale(${scale})`, transformOrigin: 'bottom left', height: `${goldfishH}px` }}>
              <GoldfishBowl />
            </div>

            <div className="flex justify-center items-end relative mb-0.5 group" style={{ transform: `scale(${scale})`, transformOrigin: 'bottom center', height: `${photosH}px` }}>
              <motion.button
                type="button"
                whileHover={boxInFocus ? {} : { y: -6, scale: 1.02 }}
                onClick={() => handleBoxClick('photos', true)}
                className={`w-28 md:w-36 h-[72px] rounded-xl shadow-xl cursor-pointer bg-gradient-to-b from-[#7c5043] to-[#4e342e] border border-[#55362e] relative flex flex-col justify-center items-center transition-all p-2 ${
                  boxInFocus === 'photos' ? 'ring-3 ring-rose-400 z-50' : 'hover:shadow-2xl hover:border-rose-400/50'
                }`}
                id="wooden-box-photos"
                aria-label="打开流光相册盒"
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
              </motion.button>

              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 p-2 bg-brand-text text-brand-bg text-[10px] rounded shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40 text-center font-sans">
                点击进入小筑，查看美妙相册。
              </div>
            </div>

            <div className="relative flex justify-end items-end gap-1 mb-1 overflow-visible" style={{ transform: `scale(${scale})`, transformOrigin: 'bottom right', height: `${hourglassH}px` }}>
              <div className="absolute bottom-[calc(100%+0.25rem)] right-0">
                {festivalPreviewTools}
              </div>
              <FestiveHourglass
                onEnterFestivalArchive={onEnterFestivalArchive}
                onEnterFestivalPage={onEnterFestivalPage}
              />
            </div>
          </div>

          {/* LAYER 3 (Bottom Shelf) */}
          <div style={{ height: `${cavityH}px` }} className={`${SHELF_CAVITY_CLASS} relative z-[1] shrink-0 rounded-b-lg`} id="shelf-layer-3">
            <span className={`absolute top-2 left-3 text-[8px] md:text-[9px] uppercase tracking-widest font-mono transition-colors duration-300 ${
              theme.isNight ? 'text-amber-100/40' : 'text-[#5A3E23]/60'
            }`}>3rd Tier · 珍藏</span>
            
            <div className="flex justify-start items-end mb-0.5" style={{ transform: `scale(${scale})`, transformOrigin: 'bottom left', height: `${lemontreeH}px` }}>
              <LemonTree />
            </div>

            <div className="flex justify-center items-end relative mb-0.5 group" style={{ transform: `scale(${scale})`, transformOrigin: 'bottom center', height: `${futureH}px` }}>
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

            <div className="flex justify-end items-end mb-1" style={{ transform: `scale(${scale})`, transformOrigin: 'bottom right', height: `${bouquetH}px` }}>
              <FlowerBouquet onClick={() => onEnterFestivalPage('relationship-anniversary')} />
            </div>
          </div>

        </div>
      </motion.div>
      </StageCabinet>
    </StageLayout>
  );
}
