import React from 'react';
import type { SceneBeat } from '../scroll-beats';

interface SceneAmbientProps {
  beat: SceneBeat;
  isNight: boolean;
}

/** 各幕极轻环境动效层（纯 CSS） */
export function SceneAmbient({ beat, isNight }: SceneAmbientProps) {
  const layerClass = `db-ambient db-ambient--${beat.id}${isNight ? ' db-ambient--night' : ''}`;

  return (
    <div className={layerClass} aria-hidden>
      {beat.id === 'prologue' && (
        <>
          <div className="db-ambient-spot db-ambient-spot--a" />
          <div className="db-ambient-spot db-ambient-spot--b" />
          <div className="db-ambient-spot db-ambient-spot--c" />
        </>
      )}

      {beat.id === 'river' && (
        <>
          <div className="db-ambient-mountains" aria-hidden>
            <div className="db-ambient-mountain db-ambient-mountain--back" />
            <div className="db-ambient-mountain db-ambient-mountain--mid" />
            <div className="db-ambient-mountain db-ambient-mountain--front" />
          </div>
          <div className="db-ambient-mist" />
          <div className="db-ambient-ripple-band" />
          <div className="db-ambient-waterline" />
        </>
      )}

      {beat.id === 'festive' && (
        <>
          <div className="db-ambient-smoke db-ambient-smoke--1" />
          <div className="db-ambient-smoke db-ambient-smoke--2" />
          <div className="db-ambient-leaf db-ambient-leaf--1" />
          <div className="db-ambient-leaf db-ambient-leaf--2" />
        </>
      )}

      {beat.id === 'letter' && (
        <>
          <div className="db-ambient-paper-shimmer" />
          <div className="db-ambient-ink-wet" />
        </>
      )}

      {beat.id === 'finale' && (
        <div className="db-ambient-gold-dust">
          {Array.from({ length: 12 }, (_, i) => (
            <span key={i} className="db-ambient-gold-particle" style={{ '--p-i': i } as React.CSSProperties} />
          ))}
        </div>
      )}
    </div>
  );
}
