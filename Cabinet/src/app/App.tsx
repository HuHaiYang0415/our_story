import React, { Suspense, useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { AnimatePresence, MotionConfig } from 'motion/react';
import { Sun, Moon, Calendar } from 'lucide-react';
import { getTimeTheme, applyThemeCssVars } from '@/shared/theme/theme';
import { OUR_STORY_NAV_MESSAGE, applyDocumentTitle, getPageTitle } from '@/shared/config/siteConfig';
import type { TimeTheme } from '@/shared/types';
import { resolveFestivalView } from './festivalNav';
import { viewFromHash } from './routes';
import { PAGE_REGISTRY, type AppView, type PageId } from './pageRegistry';
import { PageSlot } from './PageSlot';
import { isLazyLoadView } from '@/shared/load/lazyLoadViews';
import { PageErrorBoundary } from '@/shared/ui/PageErrorBoundary';


export default function App() {
  const [currentView, setCurrentView] = useState<AppView>(() => viewFromHash());
  const [theme, setTheme] = useState<TimeTheme>(() => getTimeTheme());
  const [themeDialRevealed, setThemeDialRevealed] = useState(false);
  const themeDialRef = useRef<HTMLDivElement>(null);
  /** 每次进入懒加载页递增，强制 remount 以重新拉取资源 */
  const [lazyLoaderEpoch, setLazyLoaderEpoch] = useState<Partial<Record<AppView, number>>>({});

  const themeView = theme;

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

  const navigateTo = useCallback((view: AppView) => {
    setCurrentView(view);
    if (isLazyLoadView(view)) {
      setLazyLoaderEpoch((prev) => ({
        ...prev,
        [view]: (prev[view] ?? 0) + 1,
      }));
    }
    const hash = PAGE_REGISTRY[view].hash;
    const url = `${window.location.pathname}${window.location.search}${hash}`;
    window.history.replaceState(null, '', url);
  }, []);

  const navigateToFestivalPage = useCallback(
    (pageId: PageId) => {
      const view = resolveFestivalView(pageId);
      navigateTo(view ?? 'festival-archive');
    },
    [navigateTo],
  );

  useEffect(() => {
    const onHashChange = () => {
      const view = viewFromHash();
      if (isLazyLoadView(view)) {
        setLazyLoaderEpoch((prev) => ({
          ...prev,
          [view]: (prev[view] ?? 0) + 1,
        }));
      }
      setCurrentView(view);
    };
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

  const seasonLabel = (
    <>
      <Calendar
        className={`w-3.5 h-3.5 ${themeView.isNight ? 'text-[#ECE5DF]/90' : 'text-[#8C6239]'}`}
      />
      <span>{themeView.seasonLabel}季</span>
    </>
  );

  return (
    <MotionConfig reducedMotion="user">
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
        {(
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
            className={`min-touch-target p-1.5 rounded-full transition-all cursor-pointer active:scale-90 ${
            themeView.isNight ? 'bg-[#ECE5DF]/15 text-[#ECE5DF]' : 'hover:bg-stone-100 text-[#8C6239]'
          }`}
          title={themeView.isNight ? '切换为白天' : '切换为夜间'}
          aria-label={themeView.isNight ? '切换为白天' : '切换为夜间'}
        >
          {themeView.isNight ? (
            <Moon className="w-3.5 h-3.5 fill-[#FFFDFB]/20" />
          ) : (
            <Sun className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      <Suspense
        fallback={
          <div className="view-layer flex h-full w-full min-h-0 items-center justify-center bg-brand-bg text-sm text-brand-text">
            正在打开…
          </div>
        }
      >
        <AnimatePresence mode="wait">
          <PageErrorBoundary
            isNight={themeView.isNight}
            resetKey={currentView}
            onBack={() => navigateTo('cabinet')}
            onRetry={() => window.location.reload()}
          >
            <PageSlot
              view={currentView}
              theme={themeView}
              lazyLoaderEpoch={lazyLoaderEpoch}
              onNavigate={navigateTo}
              onEnterFestivalPage={navigateToFestivalPage}
            />
          </PageErrorBoundary>
        </AnimatePresence>
      </Suspense>

      </div>
    </MotionConfig>
  );
}
