import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, useReducedMotion } from 'motion/react';
import { SCROLL_SCENES, SCENE_COUNT, getForwardMorph } from '../scroll-beats';
import type { ForwardTransition } from '../scroll-beats';
import type { ScrollTheme } from '../scroll-theme';
import { isSceneOnDark } from '../scroll-theme';
import { SceneStage } from './SceneStage';
import { ScrollHint } from './ScrollHint';
import { SceneProgress } from './SceneProgress';
import { TransitionCurtain, sceneMotionTransition, sceneMotionVariants } from './TransitionCurtain';
import { ALL_MORPH_MS } from './morph/morphConstants';
import { dragonBoatSound } from './audio/DragonBoatSound';

const WHEEL_THRESHOLD = 42;
const SWIPE_THRESHOLD = 52;
const COOLDOWN_MS = 820;
const MORPH_COOLDOWN_MS = Math.max(...ALL_MORPH_MS) + 80;

const MORPH_TYPES = new Set<ForwardTransition>([
  'morph-ink',
  'morph-jiang',
  'morph-boat',
  'morph-zongzi-seal',
]);

function isMorphTransition(t: ForwardTransition | null | undefined): t is ForwardTransition {
  return !!t && MORPH_TYPES.has(t);
}

export interface SceneEngineProps {
  isNight: boolean;
  theme: ScrollTheme;
  onFirstAdvance?: () => void;
  soundEnabled?: boolean;
}

export function SceneEngine({ isNight, theme, onFirstAdvance, soundEnabled = true }: SceneEngineProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [hintVisible, setHintVisible] = useState(true);
  const [curtainPulse, setCurtainPulse] = useState(0);
  const [introComplete, setIntroComplete] = useState(false);
  const [activeMorph, setActiveMorph] = useState<ForwardTransition | null>(null);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);
  const [enterFromMorph, setEnterFromMorph] = useState<ForwardTransition | null>(null);
  const [visited, setVisited] = useState<Set<number>>(() => new Set([0]));
  const cooldownUntil = useRef(0);
  const pendingIndexRef = useRef<number | null>(null);
  const activeMorphRef = useRef<ForwardTransition | null>(null);
  const wheelAccum = useRef(0);
  const touchStartY = useRef<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const hasAdvanced = useRef(false);
  const prevIndexRef = useRef(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    dragonBoatSound.setMuted(!soundEnabled);
  }, [soundEnabled]);

  useEffect(() => {
    if (reduceMotion) setIntroComplete(true);
  }, [reduceMotion]);

  useEffect(() => {
    pendingIndexRef.current = pendingIndex;
    activeMorphRef.current = activeMorph;
  }, [pendingIndex, activeMorph]);

  useEffect(() => {
    setVisited((prev) => {
      const next = new Set(prev);
      for (let i = 0; i <= index; i++) next.add(i);
      return next;
    });

    const prev = prevIndexRef.current;
    if (index !== prev) {
      if (index === 4 && index > prev) {
        dragonBoatSound.playLetterOpen();
      }
    }
    prevIndexRef.current = index;
  }, [index]);

  useEffect(() => {
    if (!introComplete) return;
    dragonBoatSound.ensureReady();
    const unlock = () => dragonBoatSound.ensureReady();
    window.addEventListener('pointerdown', unlock, { once: true });
    return () => window.removeEventListener('pointerdown', unlock);
  }, [introComplete]);

  const playMorphSound = useCallback((morph: ForwardTransition) => {
    switch (morph) {
      case 'morph-ink':
        dragonBoatSound.playMorphInk();
        break;
      case 'morph-jiang':
        dragonBoatSound.playMorphWater();
        break;
      case 'morph-boat':
        dragonBoatSound.playMorphDrum();
        break;
      case 'morph-zongzi-seal':
        dragonBoatSound.playMorphSeal();
        break;
      default:
        break;
    }
  }, []);

  const goTo = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(SCENE_COUNT - 1, next));
      if (clamped === index) return;
      if (!introComplete) return;
      if (activeMorph) return;
      if (Date.now() < cooldownUntil.current) return;

      const dir = clamped > index ? 1 : -1;
      setDirection(dir);

      if (dir > 0) {
        const morph = getForwardMorph(index, clamped);
        if (morph) {
          setActiveMorph(morph);
          setPendingIndex(clamped);
          playMorphSound(morph);
          cooldownUntil.current = Date.now() + MORPH_COOLDOWN_MS;
          wheelAccum.current = 0;
          return;
        }
      }

      setEnterFromMorph(null);
      const useLightCurtain =
        dir > 0 && SCROLL_SCENES[index]?.forwardTransition === 'light-curtain';
      if (useLightCurtain || dir < 0) {
        setCurtainPulse((p) => p + 1);
      }

      setIndex(clamped);
      cooldownUntil.current = Date.now() + COOLDOWN_MS;
      wheelAccum.current = 0;

      if (!hasAdvanced.current && clamped > 0) {
        hasAdvanced.current = true;
        setHintVisible(false);
        onFirstAdvance?.();
      }
    },
    [index, introComplete, activeMorph, onFirstAdvance, playMorphSound],
  );

  const onMorphComplete = useCallback(() => {
    const next = pendingIndexRef.current;
    if (next == null) {
      setActiveMorph(null);
      return;
    }
    const morphKind = activeMorphRef.current;
    setEnterFromMorph(morphKind);
    setIndex(next);
    setPendingIndex(null);
    setActiveMorph(null);
    cooldownUntil.current = Date.now() + COOLDOWN_MS;

    if (!hasAdvanced.current && next > 0) {
      hasAdvanced.current = true;
      setHintVisible(false);
      onFirstAdvance?.();
    }

    requestAnimationFrame(() => setEnterFromMorph(null));
  }, [onFirstAdvance]);

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  const handleUnrollComplete = useCallback(() => {
    setIntroComplete(true);
    dragonBoatSound.playUnroll();
  }, []);

  const handleEggTap = useCallback(() => {
    dragonBoatSound.playEggTap();
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!introComplete || activeMorph) return;
      if (Date.now() < cooldownUntil.current) return;

      wheelAccum.current += e.deltaY;
      if (Math.abs(wheelAccum.current) < WHEEL_THRESHOLD) return;

      if (wheelAccum.current > 0) goNext();
      else goPrev();
      wheelAccum.current = 0;
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [goNext, goPrev, introComplete, activeMorph]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0]?.clientY ?? null;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const start = touchStartY.current;
      touchStartY.current = null;
      if (start == null || !introComplete || activeMorph) return;
      const end = e.changedTouches[0]?.clientY;
      if (end == null) return;

      const dy = end - start;
      if (Math.abs(dy) < SWIPE_THRESHOLD) return;
      if (dy < 0) goNext();
      else goPrev();
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [goNext, goPrev, introComplete, activeMorph]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!introComplete || activeMorph) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev, introComplete, activeMorph]);

  useEffect(() => {
    return () => dragonBoatSound.stopAmbient();
  }, []);

  const beat = SCROLL_SCENES[index];
  const onDark = isSceneOnDark(beat.material, isNight);
  const isMorphing = isMorphTransition(activeMorph);
  const handoffFromMorph =
    enterFromMorph === 'morph-jiang' ||
    enterFromMorph === 'morph-boat' ||
    enterFromMorph === 'morph-ink' ||
    enterFromMorph === 'morph-zongzi-seal';

  const motionProps = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.18 },
      }
    : isMorphing || handoffFromMorph
      ? {
          initial: false,
          animate: { opacity: 1 },
          exit: { opacity: 1 },
          transition: { duration: 0 },
        }
      : {
          custom: direction,
          variants: sceneMotionVariants,
          initial: 'enter',
          animate: 'center',
          exit: 'exit',
          transition: sceneMotionTransition,
        };

  return (
    <div
      ref={rootRef}
      className="relative h-full w-full overflow-hidden"
      tabIndex={0}
      aria-live="polite"
    >
      {!isMorphing && (
        <TransitionCurtain pulse={curtainPulse} direction={direction} isNight={isNight} />
      )}

      <AnimatePresence mode="wait" custom={direction}>
        <SceneStage
          key={beat.id}
          beat={beat}
          direction={direction}
          isNight={isNight}
          theme={theme}
          introComplete={introComplete}
          onUnrollComplete={handleUnrollComplete}
          morphPhase={activeMorph}
          onMorphComplete={onMorphComplete}
          enterFromMorph={enterFromMorph}
          onEggTap={handleEggTap}
          {...motionProps}
        />
      </AnimatePresence>

      <ScrollHint visible={hintVisible && index === 0 && introComplete} onDark={onDark} />
      <SceneProgress index={index} visited={visited} onSelect={goTo} />
    </div>
  );
}
