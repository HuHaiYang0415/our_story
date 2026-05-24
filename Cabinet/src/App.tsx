import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Sun, Moon, Calendar } from 'lucide-react';
import { Cabinet } from './components/Cabinet';
import { EnvelopeStack } from './components/EnvelopeStack';
import { PolaroidGallery } from './components/PolaroidGallery';
import { getTimeTheme, applyThemeCssVars } from './theme';
import { applyDocumentTitle, getPageTitle } from './siteConfig';
import type { TimeTheme } from './types';

type ViewState = 'cabinet' | 'box-envelopes' | 'box-photos';

const VIEW_HASH: Record<ViewState, string> = {
  cabinet: '',
  'box-envelopes': '#envelopes',
  'box-photos': '#photos',
};

function viewFromHash(): ViewState {
  const hash = window.location.hash;
  if (hash === '#envelopes') return 'box-envelopes';
  if (hash === '#photos') return 'box-photos';
  return 'cabinet';
}

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>(() => viewFromHash());
  const [theme, setTheme] = useState<TimeTheme>(() => getTimeTheme());

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
        className="fixed bottom-3 right-3 md:bottom-4 md:right-4 z-50 flex items-center space-x-1.5 p-1 bg-[#FFFDFB]/90 backdrop-blur-md rounded-full border border-[#E5DACE] shadow-sm select-none"
        id="theme-status-dial"
        title={`${theme.seasonLabel}季 · ${theme.solarTerm ?? ''} · ${theme.isNight ? '夜间' : '白天'}`}
      >
        <span className="flex items-center space-x-1 px-2 py-1 text-[10px] font-bold text-[#8C6239]">
          <Calendar className="w-3.5 h-3.5" />
          <span>{theme.seasonLabel}季</span>
        </span>
        <span className="text-[9px] text-stone-400 font-mono hidden sm:inline px-1">
          {theme.sunrise}~{theme.sunset}
        </span>
        <div className="w-px h-4 bg-[#E5DACE]" />
        <button
          type="button"
          onClick={handleToggleNight}
          className={`p-1.5 rounded-full transition-all cursor-pointer active:scale-90 ${
            theme.isNight ? 'bg-[#8C6239] text-[#FFFDFB]' : 'hover:bg-stone-100 text-[#8C6239]'
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
      </AnimatePresence>
    </div>
  );
}
