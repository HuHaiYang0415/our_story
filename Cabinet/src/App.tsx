import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Sun, Moon, Calendar } from 'lucide-react';
import { Cabinet } from './components/Cabinet';
import { EnvelopeStack } from './components/EnvelopeStack';
import { PolaroidGallery } from './components/PolaroidGallery';
import FestivalArchive from './components/FestivalArchive';
import Festival_2026_ChildrenDay from './components/2026/Festival_2026_ChildrenDay/index';
import { getTimeTheme, applyThemeCssVars } from './theme';
import { applyDocumentTitle, getPageTitle } from './siteConfig';
import type { TimeTheme } from './types';

type ViewState =
  | 'cabinet'
  | 'box-envelopes'
  | 'box-photos'
  | 'festival-archive'
  | 'festival-2026-ChildrenDay';

const VIEW_HASH: Record<ViewState, string> = {
  cabinet: '',
  'box-envelopes': '#envelopes',
  'box-photos': '#photos',
  'festival-archive': '#festivals',
  'festival-2026-ChildrenDay': '#festivals/children-day',
};

function viewFromHash(): ViewState {
  const hash = window.location.hash;
  if (hash === '#envelopes') return 'box-envelopes';
  if (hash === '#photos') return 'box-photos';
  if (hash === '#festivals') return 'festival-archive';
  if (hash === '#festivals/children-day') return 'festival-2026-ChildrenDay';
  return 'cabinet';
}

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>(() => viewFromHash());
  const [theme, setTheme] = useState<TimeTheme>(() => getTimeTheme());

  const isFestivalAccessible =
    new Date().getTime() >= new Date('2026-06-01T00:00:00').getTime();

  useEffect(() => {
    applyThemeCssVars(theme.isNight);
    document.documentElement.setAttribute('data-season', theme.season);
  }, [theme.isNight, theme.season]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setTheme((prev) => {
        const next = getTimeTheme();
        if (
          prev.isNight === next.isNight &&
          prev.season === next.season &&
          prev.dateKey === next.dateKey
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
    applyDocumentTitle(getPageTitle(currentView));
  }, [currentView]);

  const handleToggleNight = () => {
    setTheme((prev) => ({ ...prev, isNight: !prev.isNight }));
  };

  return (
    <div
      className="min-h-screen bg-brand-bg text-brand-text font-sans transition-colors duration-700 relative overflow-hidden"
      id="app-root"
    >
      <div
        className={`fixed bottom-3 right-3 md:bottom-4 md:right-4 z-50 flex items-center space-x-1.5 p-1 rounded-full select-none transition-all duration-300 opacity-20 hover:opacity-100 focus-within:opacity-100 ${
          theme.isNight
            ? 'bg-[#1E1A16]/25 backdrop-blur-[1px] border border-[#ECE5DF]/10 hover:bg-[#1E1A16]/95 hover:border-[#ECE5DF]/20 hover:shadow-md'
            : 'bg-[#FFFDFB]/25 backdrop-blur-[1px] border border-[#E5DACE]/40 hover:bg-[#FFFDFB]/95 hover:border-[#E5DACE] hover:shadow-md'
        }`}
        id="theme-status-dial"
        title={`${theme.seasonLabel}季 · ${theme.solarTerm ?? ''} · ${theme.isNight ? '夜间' : '白天'}`}
      >
        <span
          className={`flex items-center space-x-1 px-3 py-1 rounded-full text-[10px] font-bold ${
            theme.isNight ? 'text-[#ECE5DF]/85' : 'text-[#8C6239]'
          }`}
        >
          <Calendar className={`w-3.5 h-3.5 ${theme.isNight ? 'text-[#ECE5DF]/90' : 'text-[#8C6239]'}`} />
          <span>{theme.seasonLabel}季</span>
        </span>

        <div className={`w-[1px] h-4 ${theme.isNight ? 'bg-[#ECE5DF]/25' : 'bg-[#E5DACE]'}`} />

        <span className="text-[9px] text-stone-400 font-mono hidden sm:inline px-1">
          {theme.sunrise}~{theme.sunset}
        </span>

        <button
          type="button"
          onClick={handleToggleNight}
          className={`p-1.5 rounded-full transition-all cursor-pointer active:scale-90 ${
            theme.isNight ? 'bg-[#ECE5DF]/15 text-[#ECE5DF]' : 'hover:bg-stone-100 text-[#8C6239]'
          }`}
          title={theme.isNight ? '切换为白天' : '切换为夜间'}
        >
          {theme.isNight ? (
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
            className="w-full min-h-screen"
          >
            <Cabinet
              theme={theme}
              onOpenBox={(boxId) => {
                if (boxId === 'envelopes') navigateTo('box-envelopes');
                else if (boxId === 'photos') navigateTo('box-photos');
              }}
              onEnterFestivalArchive={() => {
                if (isFestivalAccessible) navigateTo('festival-archive');
              }}
              onEnterFestivalPage={(pageId) => {
                if (!isFestivalAccessible) return;
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
            className="w-full min-h-screen"
          >
            <EnvelopeStack theme={theme} onBackToCabinet={() => navigateTo('cabinet')} />
          </motion.div>
        )}

        {currentView === 'box-photos' && (
          <motion.div
            key="photos-view"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full min-h-screen"
          >
            <PolaroidGallery theme={theme} onBackToCabinet={() => navigateTo('cabinet')} />
          </motion.div>
        )}

        {currentView === 'festival-archive' && isFestivalAccessible && (
          <motion.div
            key="festival-archive-view"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.45 }}
            className="w-full min-h-screen"
          >
            <FestivalArchive
              theme={theme}
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

        {currentView === 'festival-2026-ChildrenDay' && isFestivalAccessible && (
          <motion.div
            key="festival-children-day-view"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full min-h-screen"
          >
            <Festival_2026_ChildrenDay
              theme={theme}
              onBackToArchive={() => navigateTo('festival-archive')}
              onBackToCabinet={() => navigateTo('cabinet')}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
