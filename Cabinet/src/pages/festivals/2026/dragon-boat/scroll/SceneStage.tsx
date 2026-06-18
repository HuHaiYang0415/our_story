import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import type { SceneBeat, SceneEgg, ForwardTransition } from '../scroll-beats';
import { getScrollSceneBackground, isSceneOnDark } from '../scroll-theme';
import type { ScrollTheme } from '../scroll-theme';
import { InkDisplay } from './typography/InkDisplay';
import { InkSubtitle, StaggerLines } from './typography/InkSubtitle';
import { SceneFrame } from './typography/SceneFrame';
import { RiverGlyphLayout } from './layouts/RiverGlyphLayout';
import { RaceDiagonalLayout } from './layouts/RaceDiagonalLayout';
import { FestiveSplitLayout } from './layouts/FestiveSplitLayout';
import { SceneLayoutShell } from './layouts/SceneLayoutShell';
import { SceneAmbient } from './SceneAmbient';
import { PrologueInkExit } from './morph/PrologueInkExit';
import { BOAT_MORPH_MS } from './morph/morphConstants';

const UNROLL_DURATION = 2.1;

const EGG_ANCHOR_CLASS: Record<SceneEgg['anchor'], string> = {
  'top-left': 'db-scroll-egg--top-left',
  'top-right': 'db-scroll-egg--top-right',
  'bottom-left': 'db-scroll-egg--bottom-left',
  'bottom-right': 'db-scroll-egg--bottom-right',
  'mid-left': 'db-scroll-egg--mid-left',
};

function SceneEggButton({
  egg,
  theme,
  onDark,
  isNight,
  index,
  hidden,
  onTap,
}: {
  egg: SceneEgg;
  theme: ScrollTheme;
  onDark: boolean;
  isNight: boolean;
  index: number;
  hidden?: boolean;
  onTap?: () => void;
}) {
  const [revealed, setRevealed] = useState(false);
  const reduceMotion = useReducedMotion();

  if (hidden) return null;

  const isRight = egg.anchor.includes('right');
  const eggRevealTone = isNight || onDark ? 'text-amber-100/90' : 'text-emerald-900';

  return (
    <motion.div
      className={['db-scroll-egg-slot', EGG_ANCHOR_CLASS[egg.anchor]].join(' ')}
      initial={reduceMotion ? {} : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.85 + index * 0.08, duration: 0.4 }}
    >
      <motion.button
        type="button"
        className={[
          'db-scroll-egg',
          egg.hint && 'db-scroll-egg--hint',
          theme.egg,
          theme.eggHover,
          'border-0 bg-transparent font-serif',
        ].join(' ')}
        onClick={(e) => {
          e.stopPropagation();
          if (egg.reveal) {
            setRevealed((v) => !v);
            onTap?.();
          }
        }}
        aria-expanded={revealed}
        aria-label={egg.reveal ? `彩蛋：${egg.text}` : egg.text}
      >
        {egg.text}
      </motion.button>
      <AnimatePresence>
        {revealed && egg.reveal && (
          <motion.p
            initial={{ opacity: 0, x: isRight ? 8 : -8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: isRight ? 6 : -6 }}
            transition={{ duration: 0.35 }}
            className={[
              'db-scroll-egg-reveal',
              egg.hint && 'db-scroll-egg-reveal--hint',
              eggRevealTone,
            ].join(' ')}
          >
            {egg.reveal}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export interface SceneStageProps {
  beat: SceneBeat;
  direction: 1 | -1;
  isNight: boolean;
  theme: ScrollTheme;
  introComplete?: boolean;
  onUnrollComplete?: () => void;
  morphPhase?: ForwardTransition | null;
  onMorphComplete?: () => void;
  enterFromMorph?: ForwardTransition | null;
  onEggTap?: () => void;
}

function SceneContent({
  beat,
  isNight,
  onDark,
  morphPhase,
  onMorphComplete,
  enterFromMorph,
  letterEnterFromMorph,
}: {
  beat: SceneBeat;
  isNight: boolean;
  onDark: boolean;
  morphPhase?: ForwardTransition | null;
  onMorphComplete?: () => void;
  enterFromMorph?: ForwardTransition | null;
  letterEnterFromMorph?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const isExitingJiang = morphPhase === 'morph-jiang' && beat.id === 'river';
  const isExitingBoat = morphPhase === 'morph-boat' && beat.id === 'race';
  const isExitingZongziSeal = morphPhase === 'morph-zongzi-seal' && beat.id === 'festive';

  if (beat.layout === 'river-glyph') {
    return (
      <RiverGlyphLayout
        beat={beat}
        onDark={onDark}
        isNight={isNight}
        isExitingMorph={isExitingJiang}
        onMorphComplete={onMorphComplete}
      />
    );
  }

  if (beat.layout === 'race-diagonal') {
    return (
      <RaceDiagonalLayout
        beat={beat}
        onDark={onDark}
        isNight={isNight}
        enterFromMorph={enterFromMorph === 'morph-jiang'}
        isExitingMorph={isExitingBoat}
        onMorphComplete={onMorphComplete}
      />
    );
  }

  if (beat.layout === 'festive-split') {
    return (
      <FestiveSplitLayout
        beat={beat}
        onDark={onDark}
        enterFromMorph={enterFromMorph === 'morph-boat'}
        isExitingMorph={isExitingZongziSeal}
        onMorphComplete={onMorphComplete}
      />
    );
  }

  const centerShell = (
    <SceneLayoutShell
      className={[
        'db-scene-layout--center',
        beat.bodyVariant === 'letter' ? 'db-scroll-content--letter' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      variant="stack"
    >
      <InkDisplay text={beat.display} mode={beat.displayMode} onDark={onDark} />
      {beat.subtitle && <InkSubtitle text={beat.subtitle} onDark={onDark} />}
      {beat.body && beat.body.length > 0 && (
        <StaggerLines
          lines={beat.body}
          onDark={onDark}
          variant={beat.bodyVariant ?? 'center'}
        />
      )}
    </SceneLayoutShell>
  );

  if (beat.id === 'letter' && letterEnterFromMorph) {
    return (
      <motion.div
        className="db-scene-layout-letter-enter"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.48, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      >
        {centerShell}
      </motion.div>
    );
  }

  return centerShell;
}

function SceneStageInner({
  beat,
  isNight,
  theme,
  introComplete = true,
  onUnrollComplete,
  morphPhase,
  onMorphComplete,
  enterFromMorph,
  onEggTap,
}: SceneStageProps) {
  const reduceMotion = useReducedMotion();
  const onDark = isSceneOnDark(beat.material, isNight);
  const isDawnDay = beat.material === 'dawn' && !isNight;
  const bg = getScrollSceneBackground(beat.material, isNight);
  const isCustomLayout = beat.layout !== 'center';
  const isPrologueUnroll = beat.id === 'prologue' && !introComplete && !reduceMotion;
  const isMorphing =
    morphPhase === 'morph-jiang' ||
    morphPhase === 'morph-boat' ||
    morphPhase === 'morph-ink' ||
    morphPhase === 'morph-zongzi-seal';
  const isExitingInk = morphPhase === 'morph-ink' && beat.id === 'prologue';
  const fromFestiveMorphRef = useRef(enterFromMorph === 'morph-zongzi-seal' && !reduceMotion);
  const letterEnterFromMorph = fromFestiveMorphRef.current;
  const morphTargetBg =
    morphPhase === 'morph-jiang' && beat.id === 'river'
      ? getScrollSceneBackground('race', isNight)
      : morphPhase === 'morph-boat' && beat.id === 'race'
        ? getScrollSceneBackground('festive', isNight)
        : morphPhase === 'morph-zongzi-seal' && beat.id === 'festive'
          ? getScrollSceneBackground('paper', isNight)
          : null;

  useEffect(() => {
    if (!isPrologueUnroll || !onUnrollComplete) return;
    const t = window.setTimeout(onUnrollComplete, UNROLL_DURATION * 1000);
    return () => window.clearTimeout(t);
  }, [isPrologueUnroll, onUnrollComplete]);

  return (
    <div
      className={[
        'db-scroll-scene',
        beat.material === 'paper' ? 'db-scroll-scene--paper' : '',
        isCustomLayout ? 'db-scroll-scene--layout' : '',
        isPrologueUnroll ? 'db-scroll-scene--unrolling' : '',
        isMorphing ? 'db-scroll-scene--morphing' : '',
        isDawnDay ? 'db-scroll-scene--dawn-day' : '',
        beat.id === 'race' ? 'db-scroll-scene--race' : '',
        beat.id === 'festive' ? 'db-scroll-scene--festive' : '',
      ].join(' ')}
      style={{ background: bg }}
      role="group"
      aria-roledescription="slide"
      aria-label={`${beat.display}${beat.subtitle ? `，${beat.subtitle}` : ''}`}
    >
      {isPrologueUnroll && <div className="db-scroll-unroll-edge" aria-hidden />}

      <SceneAmbient beat={beat} isNight={isNight} />

      <PrologueInkExit
        isNight={isNight}
        isExiting={isExitingInk}
        onComplete={onMorphComplete}
      />

      {morphTargetBg && (
        <div
          className={[
            'db-morph-bg-crossfade pointer-events-none absolute inset-0 z-[1]',
            morphPhase === 'morph-boat' ? 'db-morph-bg-crossfade--boat' : '',
            morphPhase === 'morph-jiang' ? 'db-morph-bg-crossfade--jiang' : '',
            morphPhase === 'morph-zongzi-seal' ? 'db-morph-bg-crossfade--letter' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          style={{
            background: morphTargetBg,
            animationDuration:
              morphPhase === 'morph-boat' ||
              morphPhase === 'morph-jiang' ||
              morphPhase === 'morph-zongzi-seal'
                ? undefined
                : `${BOAT_MORPH_MS}ms`,
          }}
          aria-hidden
        />
      )}

      <SceneFrame chapter={beat.chapter} sceneLabel={beat.sceneLabel} onDark={onDark} />

      {isNight && beat.material === 'dawn' && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 opacity-60"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(252,211,77,0.12) 0%, transparent 65%)',
          }}
          aria-hidden
        />
      )}

      {!isNight && beat.material === 'dawn' && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-2/3"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(252,211,77,0.22) 0%, transparent 70%)',
          }}
          aria-hidden
        />
      )}

      {beat.material === 'river' && beat.layout === 'center' && (
        <motion.svg
          className="pointer-events-none absolute inset-x-0 top-[16%] h-28 w-full opacity-25"
          viewBox="0 0 400 40"
          preserveAspectRatio="none"
          aria-hidden
          initial={reduceMotion ? {} : { x: '-4%' }}
          animate={{ x: '4%' }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        >
          <path d="M0 25 Q100 8, 200 22 T400 18 L400 40 L0 40 Z" fill={isNight ? '#065f46' : '#98B5A8'} />
        </motion.svg>
      )}

      {beat.material === 'paper' && (
        <>
          <div className="db-scroll-paper-texture pointer-events-none absolute inset-[8%] rounded-sm opacity-90" aria-hidden />
          <div className="db-scroll-paper-margin pointer-events-none absolute inset-y-[10%] left-[10%] w-px bg-stone-400/25" aria-hidden />
        </>
      )}

      <SceneContent
        beat={beat}
        isNight={isNight}
        onDark={onDark}
        morphPhase={morphPhase}
        onMorphComplete={onMorphComplete}
        enterFromMorph={enterFromMorph}
        letterEnterFromMorph={letterEnterFromMorph}
      />

      {beat.eggs.map((egg, i) => (
        <SceneEggButton
          key={egg.id}
          egg={egg}
          theme={theme}
          onDark={onDark}
          isNight={isNight}
          index={i}
          hidden={isMorphing}
          onTap={onEggTap}
        />
      ))}
    </div>
  );
}

export const SceneStage = motion.create(SceneStageInner);
