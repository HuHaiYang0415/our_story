import React, { useEffect, useState } from 'react';
import { ArrowLeft, BookOpen, Volume2, VolumeX } from 'lucide-react';
import { ViewportShell } from '@/shared/layout/ViewportShell';
import type { TimeTheme } from '@/shared/types';
import { applyDocumentTitle, getPageTitle } from '@/shared/config/siteConfig';
import { getScrollTheme } from '../scroll-theme';
import { SceneEngine } from './SceneEngine';
import { registerDragonBoatAmbient } from './audio/registerAmbient';
import { dragonBoatSound } from './audio/DragonBoatSound';
import '../scroll.css';

export interface DragonBoatScrollProps {
  theme: TimeTheme;
  onBackToArchive?: () => void;
  onBackToCabinet?: () => void;
}

export function DragonBoatScroll({ theme, onBackToArchive, onBackToCabinet }: DragonBoatScrollProps) {
  const isNight = !!theme?.isNight;
  const scrollTheme = getScrollTheme(isNight);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    applyDocumentTitle(getPageTitle('festival-2026-DragonBoat'));
    registerDragonBoatAmbient();
    return () => {
      dragonBoatSound.dispose();
    };
  }, []);

  return (
    <ViewportShell
      id="dragon-boat-scroll-root"
      className="relative h-full min-h-0 overflow-hidden font-serif select-none [&_.viewport-main]:overflow-hidden [&_.viewport-main-inner]:h-full [&_.viewport-main-inner]:min-h-0"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: isNight ? '#0a2018' : '#FCFBEB' }}
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-48 opacity-80" style={{ background: scrollTheme.sunAura }} aria-hidden />

      <header className="pointer-events-auto absolute inset-x-0 top-0 z-30 flex items-center justify-between px-3 pb-1 pt-[max(0.5rem,env(safe-area-inset-top))] md:px-4">
        <div className="flex items-center gap-2">
          {onBackToCabinet && (
            <button
              type="button"
              onClick={onBackToCabinet}
              className={`flex cursor-pointer items-center gap-1.5 rounded-full border px-3 py-1.5 font-serif text-xs font-bold transition-all active:scale-95 ${scrollTheme.headerBtn}`}
            >
              <ArrowLeft className="h-3.5 w-3.5 text-emerald-400" />
              <span>返回展柜</span>
            </button>
          )}
        </div>
        <div className="flex items-center">
        {onBackToArchive && (
          <button
            type="button"
            onClick={onBackToArchive}
            className="flex cursor-pointer items-center gap-1.5 rounded-full border border-emerald-700/40 bg-emerald-950/30 px-3 py-1.5 font-serif text-xs text-stone-300 transition-all hover:bg-emerald-900/50 hover:text-emerald-300 active:scale-95"
          >
            <BookOpen className="h-3.5 w-3.5 text-emerald-400" />
            <span>节日风物志</span>
          </button>
        )}
        <button
          type="button"
          onClick={() => setSoundOn((v) => !v)}
          className={`ml-2 flex cursor-pointer items-center justify-center rounded-full border p-2 transition-all active:scale-95 ${scrollTheme.headerBtn}`}
          aria-label={soundOn ? '关闭端午页音效' : '开启端午页音效'}
          title={soundOn ? '关闭音效' : '开启音效'}
        >
          {soundOn ? (
            <Volume2 className="h-3.5 w-3.5 text-emerald-400" />
          ) : (
            <VolumeX className="h-3.5 w-3.5 text-stone-400" />
          )}
        </button>
        </div>
      </header>

      <main className="relative z-10 h-full min-h-0 w-full flex-1">
        <SceneEngine isNight={isNight} theme={scrollTheme} soundEnabled={soundOn} />
      </main>
    </ViewportShell>
  );
}
