import { useEffect, useRef } from 'react';
import type { PointerEvent, MouseEvent, RefObject } from 'react';

interface InputOptions {
  continuous?: boolean;
  onInteractStart?: () => void;
  onMove: (amount: number) => void;
  onSettle?: () => void;
  enabled?: boolean;
}

/** Native non-passive wheel scoped to the stage; zoom and controls stay native. */
export function useGalleryInput(ref: RefObject<HTMLElement | null>, options: InputOptions) {
  const latest = useRef(options);
  latest.current = options;
  const gesture = useRef({ id: -1, x: 0, y: 0, lastX: 0, moved: false });
  const suppressUntil = useRef(0);
  const settleTimer = useRef<number>(0);
  const wheel = useRef({ sum: 0, last: 0, stepped: 0 });
  const settle = () => {
    window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(() => latest.current.onSettle?.(), 140);
  };

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onWheel = (event: WheelEvent) => {
      if (latest.current.enabled === false || event.ctrlKey || event.metaKey || (event.target as HTMLElement).closest('[data-gallery-control]')) return;
      const raw = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      if (!raw) return;
      event.preventDefault();
      latest.current.onInteractStart?.();
      const delta = raw * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? node.clientHeight : 1);
      if (latest.current.continuous) {
        latest.current.onMove(Math.max(-.7, Math.min(.7, delta / 180)));
        settle();
      } else {
        const now = performance.now();
        if (now - wheel.current.last > 180) wheel.current.sum = 0;
        wheel.current.last = now;
        if (now - wheel.current.stepped < 280) return;
        wheel.current.sum += Math.max(-80, Math.min(80, delta));
        if (Math.abs(wheel.current.sum) >= 55) {
          latest.current.onMove(Math.sign(wheel.current.sum));
          wheel.current.sum = 0;
          wheel.current.stepped = now;
        }
      }
    };
    const cancel = () => { gesture.current.id = -1; latest.current.onSettle?.(); };
    node.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('blur', cancel);
    return () => {
      node.removeEventListener('wheel', onWheel);
      window.removeEventListener('blur', cancel);
      window.clearTimeout(settleTimer.current);
    };
  }, [ref, options.enabled, options.continuous]);

  const onPointerDown = (event: PointerEvent<HTMLElement>) => {
    if (options.enabled === false || !event.isPrimary || event.button !== 0 || (event.target as HTMLElement).closest('[data-gallery-control]')) return;
    window.clearTimeout(settleTimer.current);
    gesture.current = { id: event.pointerId, x: event.clientX, y: event.clientY, lastX: event.clientX, moved: false };
  };
  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    const g = gesture.current;
    if (g.id !== event.pointerId) return;
    const dx = event.clientX - g.x;
    if (!g.moved && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(event.clientY - g.y)) {
      g.moved = true;
      // A press may be the independent second activation that opens a selected
      // album. Only interrupt that selection after the gesture is truly a drag.
      options.onInteractStart?.();
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    if (g.moved && options.continuous) options.onMove((g.lastX - event.clientX) / Math.max(110, event.currentTarget.clientWidth * .18));
    g.lastX = event.clientX;
  };
  const finish = (event: PointerEvent<HTMLElement>, cancelled = false) => {
    const g = gesture.current;
    if (g.id !== event.pointerId) return;
    g.id = -1;
    if (g.moved) {
      suppressUntil.current = performance.now() + 240;
      if (!cancelled && !options.continuous && Math.abs(g.lastX - g.x) > 32) options.onMove(g.lastX < g.x ? 1 : -1);
    }
    options.onSettle?.();
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  };
  return {
    onPointerDown, onPointerMove,
    onPointerUp: (event: PointerEvent<HTMLElement>) => finish(event),
    onPointerCancel: (event: PointerEvent<HTMLElement>) => finish(event, true),
    onClickCapture: (event: MouseEvent<HTMLElement>) => {
      if (performance.now() < suppressUntil.current) { event.preventDefault(); event.stopPropagation(); }
    },
  };
}
