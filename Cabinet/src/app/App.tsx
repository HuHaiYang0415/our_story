import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Sun, Moon, Calendar } from 'lucide-react';
import { Cabinet } from '@/pages/cabinet/Cabinet';
import { EnvelopeStack } from '@/pages/letters/EnvelopeStack';
import { Letter520Embed } from '@/pages/letters/Letter520Embed';
import { OUR_STORY_NAV_MESSAGE } from '@/shared/config/siteConfig';
import { PolaroidGallery } from '@/pages/gallery/PolaroidGallery';
import FestivalArchive from '@/pages/festivals/archive/FestivalArchive';
import Festival_2026_ChildrenDay from '@/pages/festivals/2026/children-day/index';
import {
  getTimeTheme,
  applyThemeCssVars,
  applySeasonToTheme,
  nextSeason,
  type Season,
} from '@/shared/theme/theme';
import { applyDocumentTitle, getPageTitle } from '@/shared/config/siteConfig';
import { ALLOW_SEASON_DEBUG } from '@/shared/config/featureFlags';
import type { TimeTheme } from '@/shared/types';
import { VIEW_HASH, viewFromHash, type ViewState } from './routes';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>(() => viewFromHash());
  const [theme, setTheme] = useState<TimeTheme>(() => getTimeTheme());
  /** 仅 dev：预览季节；不改变昼夜切换逻辑 */
  const [debugSeason, setDebugSeason] = useState<Season | null>(null);
  const [themeDialRevealed, setThemeDialRevealed] = useState(false);
  const themeDialRef = useRef<HTMLDivElement>(null);

  const themeView = useMemo(() => {
    if (ALLOW_SEASON_DEBUG && debugSeason != null) {
      return applySeasonToTheme(theme, debugSeason);
    }
    return theme;
  }, [theme, debugSeason]);

  useEffect(() => {
    applyThemeCssVars(themeView.isNight);
    document.documentElement.setAttribute('data-season', themeView.season);
  }, [themeView.isNight, themeView.season]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setTheme((prev) => {
        const next = getTimeTheme();
        if (
          prev.isNight === next.isNight &&
          prev.season === next.season &&
          prev.dateKey === next.dateKey &&
          prev.timeString === next.timeString
        ) {
          return prev;
        }
        return next;
      });
    }, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const navigateTo = useCallback((view: ViewState) => {
    setCurrentView(view);
    const hash = VIEW_HASH[view];
    const url = `${window.location.pathname}${window.location.search}${hash}`;
    window.history.replaceState(null, '', url);
  }, []);

  useEffect(() => {
    const onHashChange = () => setCurrentView(viewFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.data?.type !== OUR_STORY_NAV_MESSAGE) return;
      if (event.data.view === 'box-envelopes') {
        navigateTo('box-envelopes');
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [navigateTo]);

  useEffect(() => {
    applyDocumentTitle(getPageTitle(currentView));
  }, [currentView]);

  useEffect(() => {
    if (!themeDialRevealed) return;
    const onPointerDown = (event: PointerEvent) => {
      const el = themeDialRef.current;
      if (el && !el.contains(event.target as Node)) {
        setThemeDialRevealed(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [themeDialRevealed]);

  const handleToggleNight = () => {
    setTheme((prev) => ({ ...prev, isNight: !prev.isNight }));
  };

  const handleCycleSeason = () => {
    if (!ALLOW_SEASON_DEBUG) return;
    setDebugSeason((prev) => nextSeason(prev ?? theme.season));
  };

  const seasonLabel = (
    <>
      <Calendar
        className={`w-3.5 h-3.5 ${themeView.isNight ? 'text-[#ECE5DF]/90' : 'text-[#8C6239]'}`}
      />
      <span>{themeView.seasonLabel}季</span>
    </>
  );

  return (
    <div
      className="flex flex-col overflow-hidden bg-brand-bg font-sans text-brand-text transition-colors duration-700"
      id="app-root"
    >
      <div
        ref={themeDialRef}
        className={[
          'theme-status-dial fixed bottom-3 right-3 z-50 flex items-center space-x-1.5 rounded-full p-1 select-none transition-all duration-300 md:bottom-4 md:right-4',
          themeDialRevealed ? 'theme-status-dial--revealed' : '',
          themeView.isNight
            ? 'border border-[#ECE5DF]/10 bg-[#1E1A16]/25 backdrop-blur-[1px] hover:border-[#ECE5DF]/20 hover:bg-[#1E1A16]/95 hover:shadow-md'
            : 'border border-[#E5DACE]/40 bg-[#FFFDFB]/25 backdrop-blur-[1px] hover:border-[#E5DACE] hover:bg-[#FFFDFB]/95 hover:shadow-md',
        ].join(' ')}
        id="theme-status-dial"
        title={`${themeView.seasonLabel}季 · ${themeView.solarTerm ?? ''} · ${themeView.isNight ? '夜间' : '白天'}`}
        onPointerDown={() => setThemeDialRevealed(true)}
      >
        {ALLOW_SEASON_DEBUG ? (
          <button
            type="button"
            onClick={handleCycleSeason}
            className={`flex items-center space-x-1 rounded-full px-3 py-1 text-[10px] font-bold cursor-pointer ${
              themeView.isNight ? 'text-[#ECE5DF]/85' : 'text-[#8C6239]'
            }`}
            title="开发模式：点击切换季节"
          >
            {seasonLabel}
          </button>
        ) : (
          <span
            className={`flex items-center space-x-1 rounded-full px-3 py-1 text-[10px] font-bold ${
              themeView.isNight ? 'text-[#ECE5DF]/85' : 'text-[#8C6239]'
            }`}
          >
            {seasonLabel}
          </span>
        )}

        <div className={`w-[1px] h-4 ${themeView.isNight ? 'bg-[#ECE5DF]/25' : 'bg-[#E5DACE]'}`} />

        <span className="text-[9px] text-stone-400 font-mono hidden sm:inline px-1">
          {themeView.sunrise}~{themeView.sunset}
        </span>

        <button
          type="button"
          onClick={handleToggleNight}
          className={`p-1.5 rounded-full transition-all cursor-pointer active:scale-90 ${
            themeView.isNight ? 'bg-[#ECE5DF]/15 text-[#ECE5DF]' : 'hover:bg-stone-100 text-[#8C6239]'
          }`}
          title={themeView.isNight ? '切换为白天' : '切换为夜间'}
        >
          {themeView.isNight ? (
            <Moon className="w-3.5 h-3.5 fill-[#FFFDFB]/20" />
          ) : (
            <Sun className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {currentView === 'cabinet' && (
          <motion.div
            key="cabinet-view"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.45 }}
            className="view-layer h-full w-full min-h-0 overflow-hidden"
          >
            <Cabinet
              theme={themeView}
              onOpenBox={(boxId) => {
                if (boxId === 'envelopes') navigateTo('box-envelopes');
                else if (boxId === 'photos') navigateTo('box-photos');
              }}
              onEnterFestivalArchive={() => navigateTo('festival-archive')}
              onEnterFestivalPage={(pageId) => {
                if (pageId === '2026_ChildrenDay') {
                  navigateTo('festival-2026-ChildrenDay');
                } else {
                  navigateTo('festival-archive');
                }
              }}
            />
          </motion.div>
        )}

        {currentView === 'box-envelopes' && (
          <motion.div
            key="envelopes-view"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="view-layer h-full w-full min-h-0 overflow-hidden"
          >
            <EnvelopeStack
              theme={themeView}
              onBackToCabinet={() => navigateTo('cabinet')}
              onOpenLetter520={() => navigateTo('letter-520')}
            />
          </motion.div>
        )}

        {currentView === 'letter-520' && (
          <motion.div
            key="letter-520-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="view-layer h-full w-full min-h-0 overflow-hidden"
          >
            <Letter520Embed />
          </motion.div>
        )}

        {currentView === 'box-photos' && (
          <motion.div
            key="photos-view"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="view-layer h-full w-full min-h-0 overflow-hidden"
          >
            <PolaroidGallery theme={themeView} onBackToCabinet={() => navigateTo('cabinet')} />
          </motion.div>
        )}

        {currentView === 'festival-archive' && (
          <motion.div
            key="festival-archive-view"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.45 }}
            className="view-layer h-full w-full min-h-0 overflow-hidden"
          >
            <FestivalArchive
              theme={themeView}
              onBackToCabinet={() => navigateTo('cabinet')}
              onEnterFestivalPage={(pageId) => {
                if (pageId === '2026_ChildrenDay') {
                  navigateTo('festival-2026-ChildrenDay');
                } else {
                  navigateTo('festival-archive');
                }
              }}
            />
          </motion.div>
        )}

        {currentView === 'festival-2026-ChildrenDay' && (
          <motion.div
            key="festival-children-day-view"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="view-layer h-full w-full min-h-0 overflow-hidden"
          >
            <Festival_2026_ChildrenDay
              theme={themeView}
              onBackToArchive={() => navigateTo('festival-archive')}
              onBackToCabinet={() => navigateTo('cabinet')}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
