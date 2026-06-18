import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface RaceDrumHitProps {
  hitTargetRef: React.RefObject<HTMLElement | null>;
  onTap: () => void;
  disabled?: boolean;
  isNight?: boolean;
}

interface DrumWave {
  id: number;
  x: number;
  y: number;
}

interface HitRect {
  left: number;
  top: number;
  width: number;
  height: number;
}

function measureHitRect(target: HTMLElement): HitRect | null {
  const svg = target.querySelector('svg');
  const el = svg ?? target;
  const r = el.getBoundingClientRect();
  if (r.width < 4 || r.height < 4) return null;
  return {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height,
  };
}

/** 叁幕近舟点击热区 — 对齐红舟 SVG，Portal 压在彩蛋层之上 */
export function RaceDrumHit({
  hitTargetRef,
  onTap,
  disabled = false,
  isNight = false,
}: RaceDrumHitProps) {
  const [hitRect, setHitRect] = useState<HitRect | null>(null);
  const [waves, setWaves] = useState<DrumWave[]>([]);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  const lastFireRef = useRef(0);
  const waveIdRef = useRef(0);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalRoot(document.getElementById('dragon-boat-scroll-root'));
  }, []);

  const updateRect = () => {
    const target = hitTargetRef.current;
    if (!target || disabled) {
      setHitRect(null);
      return;
    }
    setHitRect(measureHitRect(target));
  };

  useLayoutEffect(() => {
    updateRect();
    if (disabled) return;

    const target = hitTargetRef.current;
    const ro = target ? new ResizeObserver(updateRect) : null;
    ro?.observe(target);

    let raf = 0;
    const tick = () => {
      updateRect();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener('resize', updateRect);

    return () => {
      ro?.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', updateRect);
    };
  }, [hitTargetRef, disabled]);

  const spawnWave = (x: number, y: number) => {
    const id = ++waveIdRef.current;
    setWaves((prev) => [...prev.slice(-5), { id, x, y }]);
    window.setTimeout(() => {
      setWaves((prev) => prev.filter((w) => w.id !== id));
    }, 950);
  };

  const fireTap = (x: number, y: number) => {
    const now = Date.now();
    if (now - lastFireRef.current < 100) return;
    lastFireRef.current = now;
    spawnWave(x, y);
    onTap();
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    pointerRef.current = { x: e.clientX, y: e.clientY };
    e.stopPropagation();
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const start = pointerRef.current;
    pointerRef.current = null;
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.hypot(dx, dy) > 18) return;
    fireTap(e.clientX, e.clientY);
  };

  if (disabled || !portalRoot || !hitRect) return null;

  const waveTone = isNight ? 'db-race-drum-wave--night' : 'db-race-drum-wave--day';

  return createPortal(
    <>
      {waves.map((w) => (
        <span
          key={w.id}
          className={['db-race-drum-wave', waveTone].join(' ')}
          style={{ left: w.x, top: w.y }}
          aria-hidden
        >
          <span className="db-race-drum-wave__ring" />
          <span className="db-race-drum-wave__ring db-race-drum-wave__ring--delay-1" />
          <span className="db-race-drum-wave__ring db-race-drum-wave__ring--delay-2" />
        </span>
      ))}
      <button
        type="button"
        className="db-race-drum-hit db-race-drum-hit--portal"
        style={{
          position: 'fixed',
          left: hitRect.left,
          top: hitRect.top,
          width: hitRect.width,
          height: hitRect.height,
        }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        aria-label="敲鼓"
      />
    </>,
    portalRoot,
  );
}
