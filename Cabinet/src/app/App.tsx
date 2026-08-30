import React, { lazy, Suspense, useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Sun, Moon, Calendar } from 'lucide-react';
import { Cabinet } from '@/pages/cabinet/Cabinet';
const EnvelopeStack = lazy(() =>
  import('@/pages/letters/EnvelopeStack').then((module) => ({ default: module.EnvelopeStack })),
);
const Letter520PageLoader = lazy(() =>
  import('@/pages/letters/Letter520PageLoader').then((module) => ({ default: module.Letter520PageLoader })),
);
import { OUR_STORY_NAV_MESSAGE } from '@/shared/config/siteConfig';
const PolaroidGallery = lazy(() =>
  import('@/pages/gallery/PolaroidGallery').then((module) => ({ default: module.PolaroidGallery })),
);
const FestivalArchive = lazy(() => import('@/pages/festivals/archive/FestivalArchive'));
const ChildrenDayPageLoader = lazy(() =>
  import('@/pages/festivals/2026/children-day/ChildrenDayPageLoader').then((module) => ({
    default: module.ChildrenDayPageLoader,
  })),
);
const DragonBoatPageLoader = lazy(() =>
  import('@/pages/festivals/2026/dragon-boat/DragonBoatPageLoader').then((module) => ({
    default: module.DragonBoatPageLoader,
  })),
);
const RelationshipPageLoader = lazy(() =>
  import('@/pages/relationship/RelationshipPageLoader').then((module) => ({
    default: module.RelationshipPageLoader,
  })),
);
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
import { resolveFestivalView } from './festivalNav';
import { VIEW_HASH, viewFromHash, type ViewState } from './routes';
import { isLazyLoadView } from '@/shared/load/lazyLoadViews';


type LocalFestivalPreviewModule = {
  FestivalPreviewTools: React.ComponentType<{
    onOpenFestival: (festival: { view: ViewState | null }) => void;
  }>;
};

/**
 * 本地节日测试入口不属于正式页面代码。
 * 文件位于被 gitignore 的 src/dev-only/，通过可为空的 glob 读取；提交时删除该目录也不影响正式构建。
 */
const LOCAL_FESTIVAL_PREVIEW_MODULES = import.meta.glob(
  '/src/dev-only/festivalPreview/FestivalPreviewTools.tsx',
  { eager: true },
) as Record<string, LocalFestivalPreviewModule>;
const LocalFestivalPreviewTools = import.meta.env.DEV
  ? Object.values(LOCAL_FESTIVAL_PREVIEW_MODULES)[0]?.FestivalPreviewTools
  : undefined;

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>(() => viewFromHash());
  const [theme, setTheme] = useState<TimeTheme>(() => getTimeTheme());
  /** 仅 dev：预览季节；不改变昼夜切换逻辑 */
  const [debugSeason, setDebugSeason] = useState<Season | null>(null);
  const [themeDialRevealed, setThemeDialRevealed] = useState(false);
  const themeDialRef = useRef<HTMLDivElement>(null);
  /** 每次进入懒加载页递增，强制 remount 以重新拉取资源 */
  const [lazyLoaderEpoch, setLazyLoaderEpoch] = useState<Partial<Record<ViewState, number>>>({});

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
    if (isLazyLoadView(view)) {
      setLazyLoaderEpoch((prev) => ({
        ...prev,
        [view]: (prev[view] ?? 0) + 1,
      }));
    }
    const hash = VIEW_HASH[view];
    const url = `${window.location.pathname}${window.location.search}${hash}`;
    window.history.replaceState(null, '', url);
  }, []);

  const navigateToFestivalPage = useCallback(
    (pageId: string) => {
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

      <Suspense
        fallback={
          <div className="view-layer flex h-full w-full min-h-0 items-center justify-center bg-brand-bg text-sm text-brand-text">
            正在打开…
          </div>
        }
      >
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
              onEnterFestivalPage={navigateToFestivalPage}
              festivalPreviewTools={
                LocalFestivalPreviewTools ? (
                  <LocalFestivalPreviewTools onOpenFestival={(festival) => {
                    if (festival.view) navigateTo(festival.view);
                  }} />
                ) : undefined
              }
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
            <Letter520PageLoader
              key={`letter-520-${lazyLoaderEpoch['letter-520'] ?? 0}`}
              isNight={themeView.isNight}
              onBack={() => navigateTo('box-envelopes')}
            />
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

        {currentView === 'relationship' && (
          <motion.div
            key="relationship-view"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="view-layer h-full w-full min-h-0 overflow-hidden"
          >
            <RelationshipPageLoader
              key={`relationship-${lazyLoaderEpoch.relationship ?? 0}`}
              theme={themeView}
              onBackToCabinet={() => navigateTo('cabinet')}
            />
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
              onEnterFestivalPage={navigateToFestivalPage}
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
            <ChildrenDayPageLoader
              key={`children-day-${lazyLoaderEpoch['festival-2026-ChildrenDay'] ?? 0}`}
              theme={themeView}
              onBackToArchive={() => navigateTo('festival-archive')}
              onBackToCabinet={() => navigateTo('cabinet')}
            />
          </motion.div>
        )}

        {currentView === 'festival-2026-DragonBoat' && (
          <motion.div
            key="festival-dragon-boat-view"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="view-layer h-full w-full min-h-0 overflow-hidden"
          >
            <DragonBoatPageLoader
              key={`dragon-boat-${lazyLoaderEpoch['festival-2026-DragonBoat'] ?? 0}`}
              theme={themeView}
              onBackToArchive={() => navigateTo('festival-archive')}
              onBackToCabinet={() => navigateTo('cabinet')}
            />
          </motion.div>
        )}

        </AnimatePresence>
      </Suspense>

    </div>
  );
}
