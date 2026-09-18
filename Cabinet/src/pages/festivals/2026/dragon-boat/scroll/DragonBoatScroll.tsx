import React, { useEffect, useState } from 'react';
import { BookOpen } from 'lucide-react';
import { ViewportShell } from '@/shared/layout/ViewportShell';
import type { TimeTheme } from '@/shared/types';
import { applyDocumentTitle, getPageTitle } from '@/shared/config/siteConfig';
import { getScrollTheme } from '../scroll-theme';
import { SceneEngine } from './SceneEngine';
import { registerDragonBoatAmbient } from './audio/registerAmbient';
import { dragonBoatSound } from './audio/DragonBoatSound';
import { StoryBackButton, StoryMuteButton } from '@/shared/ui/StoryControls';
import '../scroll.css';

export interface DragonBoatScrollProps {
  theme: TimeTheme;
  onBackToArchive?: () => void;
  onBackToCabinet?: () => void;
}

export function DragonBoatScroll({ theme, onBackToArchive, onBackToCabinet }: DragonBoatScrollProps) {
  const isNight = !!theme?.isNight;
  const scrollTheme = getScrollTheme(isNight);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    applyDocumentTitle(getPageTitle('festival-2026-DragonBoat'));
    return () => {
      dragonBoatSound.dispose();
    };
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    if (next) registerDragonBoatAmbient();
    setSoundOn(next);
  };

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
            <StoryBackButton
              onClick={onBackToCabinet}
              label="返回展柜"
              tone="emerald"
            />
          )}
        </div>
        <div className="flex items-center">
        {onBackToArchive && (
          <button
            type="button"
            onClick={onBackToArchive}
            className="min-touch-target flex cursor-pointer items-center gap-1.5 rounded-full border border-emerald-700/40 bg-emerald-950/30 px-3 py-1.5 font-serif text-xs text-emerald-100/85 transition-all hover:bg-emerald-900/50 hover:text-emerald-200 active:scale-95"
          >
            <BookOpen className="h-3.5 w-3.5 text-emerald-400" />
            <span>节日风物志</span>
          </button>
        )}
        <StoryMuteButton
          muted={!soundOn}
          onToggle={toggleSound}
          label="端午页音效"
          tone="emerald"
          className="ml-2"
        />
        </div>
      </header>

      <main className="relative z-10 h-full min-h-0 w-full flex-1">
        <SceneEngine isNight={isNight} theme={scrollTheme} soundEnabled={soundOn} />
      </main>
    </ViewportShell>
  );
}
