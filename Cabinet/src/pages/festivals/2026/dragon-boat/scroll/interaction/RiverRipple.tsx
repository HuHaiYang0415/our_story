import React, { useCallback, useRef, useState } from 'react';

export interface WaterTapPoint {
  x: number;
  y: number;
}

interface Ripple extends WaterTapPoint {
  id: number;
}

interface RiverRippleProps {
  className?: string;
  isNight?: boolean;
  /** 每次 intentional 触水时回调，坐标为容器内百分比 0–100 */
  onWaterTap?: (point: WaterTapPoint) => void;
  /** 为 false 时不再响应触水（彩蛋已出现等） */
  interactive?: boolean;
}

/** 轻点判定：移动超过此距离视为滑动，不计入彩蛋 */
const TAP_MOVE_MAX_PX = 14;
/** 拖动波纹最小帧间位移 */
const DRAG_RIPPLE_MOVE_MIN = 18;

interface PointerGesture {
  startX: number;
  startY: number;
  maxMove: number;
  lastRippleX: number;
  lastRippleY: number;
}

/** 贰幕：轻点水面出波纹；拖动仅视觉波纹，上滑切页不计入点击 */
export function RiverRipple({
  className,
  isNight = false,
  onWaterTap,
  interactive = true,
}: RiverRippleProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const idRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const gestureRef = useRef<PointerGesture | null>(null);

  const addRipple = useCallback((clientX: number, clientY: number, countTap: boolean) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    const id = ++idRef.current;
    setRipples((prev) => [...prev.slice(-9), { id, x, y }]);
    if (countTap) onWaterTap?.({ x, y });
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1400);
  }, [onWaterTap]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!interactive) return;
    gestureRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      maxMove: 0,
      lastRippleX: e.clientX,
      lastRippleY: e.clientY,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!interactive) return;
    const g = gestureRef.current;
    if (!g) return;
    if (e.buttons === 0 && e.pressure === 0) return;

    const dx = e.clientX - g.startX;
    const dy = e.clientY - g.startY;
    g.maxMove = Math.max(g.maxMove, Math.hypot(dx, dy));

    const rippleDx = e.clientX - g.lastRippleX;
    const rippleDy = e.clientY - g.lastRippleY;
    if (rippleDx * rippleDx + rippleDy * rippleDy < DRAG_RIPPLE_MOVE_MIN * DRAG_RIPPLE_MOVE_MIN) return;

    g.lastRippleX = e.clientX;
    g.lastRippleY = e.clientY;
    addRipple(e.clientX, e.clientY, false);
  };

  const finishPointer = (e: React.PointerEvent) => {
    if (!interactive) return;
    const g = gestureRef.current;
    gestureRef.current = null;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    if (!g) return;

    if (g.maxMove <= TAP_MOVE_MAX_PX) {
      addRipple(e.clientX, e.clientY, true);
    }
  };

  const onPointerUp = (e: React.PointerEvent) => finishPointer(e);
  const onPointerCancel = (e: React.PointerEvent) => finishPointer(e);

  return (
    <div
      ref={containerRef}
      className={[
        'db-river-ripple-surface',
        isNight ? 'db-river-ripple-surface--night' : 'db-river-ripple-surface--day',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      aria-hidden={interactive ? undefined : true}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          className="db-river-ripple"
          style={{ left: `${r.x}%`, top: `${r.y}%` }}
        />
      ))}
    </div>
  );
}
