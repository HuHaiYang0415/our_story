import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { ViewportShell } from '@/shared/layout/ViewportShell';
import type { TimeTheme } from '@/shared/types';
import { applyDocumentTitle, getPageTitle } from '@/shared/config/siteConfig';
import { RiverLayer } from './decor/RiverLayer';
import { FeastTable } from './decor/FeastTable';
import { FestivalPanel, type PanelKind } from './components/FestivalPanel';
import { MugwortCard } from './components/MugwortCard';
import { InkLetterModal } from './components/InkLetterModal';
import type { ZongziSide } from './zongzi';
import { getDragonBoatTheme } from './theme';
import './dragon-boat.css';

export { canAccessDragonBoat2026 } from '../access';
export { isDragonBoat2026Released, getDragonBoat2026Status, DRAGON_BOAT_2026_RELEASE } from '../visibility';
export { FestivalPreviewTools } from '../components/FestivalPreviewTools';

export default function Festival_2026_DragonBoat({
  theme,
  onBackToArchive,
  onBackToCabinet,
}: {
  theme: TimeTheme;
  onBackToArchive?: () => void;
  onBackToCabinet?: () => void;
}) {
  const [panel, setPanel] = useState<PanelKind>(null);
  const [mugwortOpen, setMugwortOpen] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);

  const isNight = !!theme?.isNight;
  const dbTheme = getDragonBoatTheme(isNight);

  React.useEffect(() => {
    applyDocumentTitle(getPageTitle('festival-2026-DragonBoat'));
  }, []);

  const openZongzi = (side: ZongziSide) => {
    setPanel(side === 'left' ? 'zongzi-left' : 'zongzi-right');
  };

  return (
    <ViewportShell
      id="dragon-boat-2026-root"
      className={`relative flex min-h-0 flex-col justify-between overflow-hidden font-serif select-none ${dbTheme.shell}`}
      style={{ background: dbTheme.scene.shell }}
    >
      {/* 参考：端午晴照 */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-96"
        style={{ background: dbTheme.sunAuraStyle }}
        aria-hidden
      />
      <div className={`pointer-events-none absolute top-10 left-[18%] z-0 h-36 w-36 rounded-full blur-3xl ${dbTheme.sunBlob}`} aria-hidden />

      <RiverLayer theme={dbTheme} isNight={isNight} onBoatClick={() => setPanel('boats')} />

      {/* 岸台：压低浓度，避免下半过沉 */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[20%] shadow-[0_-8px_24px_rgba(0,0,0,0.28)] ${dbTheme.platformBorder}`}
        style={{ background: dbTheme.scene.platform }}
        aria-hidden
      />

      {/* 顶栏 — 参考 layout */}
      <div className="pointer-events-auto relative z-30 flex w-full items-center justify-between px-4 pt-2 md:mx-auto md:max-w-6xl md:pt-3">
        <div className="flex gap-2">
          {onBackToCabinet && (
            <button
              type="button"
              onClick={onBackToCabinet}
              className={`flex cursor-pointer items-center gap-1.5 rounded-full border px-3.5 py-1.5 font-serif text-xs font-bold shadow-lg transition-all duration-200 active:scale-95 ${dbTheme.headerBtn}`}
            >
              <ArrowLeft className="h-3.5 w-3.5 text-emerald-400" />
              <span>返回展柜</span>
            </button>
          )}
        </div>
        <h1 className="hidden font-serif text-sm font-black tracking-wide text-amber-100/90 drop-shadow sm:block md:text-base">
          端午节 · 蒲节记胜
        </h1>
        <div className="flex items-center gap-2">
          {onBackToArchive && (
            <button
              type="button"
              onClick={onBackToArchive}
              className="flex cursor-pointer items-center gap-1.5 rounded-full border border-emerald-700/40 bg-emerald-950/30 px-3 py-1.5 font-serif text-xs text-stone-300 transition-all duration-200 hover:bg-emerald-900/50 hover:text-emerald-300 active:scale-95"
            >
              <BookOpen className="h-3.5 w-3.5 text-emerald-400" />
              <span>节日风物志</span>
            </button>
          )}
        </div>
      </div>

      {/* 主场景：全宽一体，无中间方框 */}
      <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col select-none">
        <FeastTable
          theme={dbTheme}
          onOpenZongzi={openZongzi}
          onOpenMugwort={() => setMugwortOpen(true)}
          onOpenLetter={() => setLetterOpen(true)}
        />
      </div>

      {/* 参考：底部祝词 */}
      <div className="pointer-events-auto relative z-20 w-full px-4 pb-6 pt-2 text-center">
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-1.5"
        >
          <h2 className="group text-base font-serif font-black tracking-wider text-amber-100 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] sm:text-lg md:text-xl">
            第一个端午节，永远
            <span className="mx-1 inline-block text-red-400 transition-transform group-hover:scale-110">「粽」</span>
            意你。
          </h2>
          <p className="mt-1 font-serif text-[10px] text-stone-400 opacity-70 sm:text-xs">
            2026农历蒲节记胜：糯米成粽、艾菖辟邪，心心相扣岁时韶华
          </p>
        </motion.div>
      </div>

      <FestivalPanel
        kind={panel}
        theme={dbTheme}
        onClose={() => setPanel(null)}
        onSwitchZongzi={(side) => setPanel(side === 'left' ? 'zongzi-left' : 'zongzi-right')}
      />
      <MugwortCard open={mugwortOpen} theme={dbTheme} onClose={() => setMugwortOpen(false)} />

      <AnimatePresence>
        {letterOpen && (
          <InkLetterModal
            open={letterOpen}
            theme={dbTheme}
            isNight={isNight}
            onClose={() => setLetterOpen(false)}
          />
        )}
      </AnimatePresence>
    </ViewportShell>
  );
}
