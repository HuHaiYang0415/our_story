import { useEffect, useRef } from 'react';
import type { KeyboardEvent, MouseEvent, PointerEvent, RefObject } from 'react';
import { maxMapZoom, normalizeState } from './geography';
import type { MapState } from './geography';

interface Options { state: MapState; fit: number; onStateChange: (state: MapState) => void; onNational: () => void; }

export function useMapInput(ref: RefObject<HTMLDivElement | null>, options: Options) {
  const latest = useRef(options); latest.current = options;
  const gesture = useRef({ id: -1, x: 0, y: 0, moved: false, lastX: 0, lastY: 0 });
  const suppressUntil = useRef(0);
  const change = (state: MapState) => {
    const next = normalizeState(state); latest.current = { ...latest.current, state: next }; latest.current.onStateChange(next);
  };
  const zoom = (direction: number) => {
    const { state } = latest.current;
    const value = Math.max(1, Math.min(maxMapZoom(state), state.zoom * (direction > 0 ? 1.25 : .8)));
    change({ ...state, zoom: value, panX: state.panX * value / state.zoom, panY: state.panY * value / state.zoom });
  };
  useEffect(() => {
    const node = ref.current; if (!node) return;
    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey || (event.target instanceof Element && event.target.closest('[data-gallery-map-control]'))) return;
      const raw = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      if (!raw) return;
      event.preventDefault(); event.stopPropagation();
      const delta = raw * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? node.clientWidth : 1);
      const { state, fit } = latest.current;
      change({ ...state, panX: state.panX - Math.max(-160, Math.min(160, delta)) / fit });
    };
    const cancel = () => { gesture.current.id = -1; node.classList.remove('gallery-map-dragging'); };
    node.addEventListener('wheel', onWheel, { passive: false }); window.addEventListener('blur', cancel);
    return () => { node.removeEventListener('wheel', onWheel); window.removeEventListener('blur', cancel); };
  }, [ref]);
  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary) { gesture.current.id = -1; event.currentTarget.classList.remove('gallery-map-dragging'); return; }
    if (event.button !== 0 || (event.target instanceof Element && event.target.closest('[data-gallery-map-control]'))) return;
    gesture.current = { id: event.pointerId, x: event.clientX, y: event.clientY, moved: false, lastX: event.clientX, lastY: event.clientY };
  };
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const g = gesture.current; if (g.id !== event.pointerId) return;
    if (!g.moved && Math.hypot(event.clientX - g.x, event.clientY - g.y) > 8) {
      g.moved = true; event.currentTarget.setPointerCapture(event.pointerId); event.currentTarget.classList.add('gallery-map-dragging');
    }
    if (g.moved) {
      const { state, fit } = latest.current;
      change({ ...state, panX: state.panX + (event.clientX - g.lastX) / fit, panY: state.panY + (event.clientY - g.lastY) / fit });
    }
    g.lastX = event.clientX; g.lastY = event.clientY;
  };
  const finish = (event: PointerEvent<HTMLDivElement>) => {
    const g = gesture.current; if (g.id !== event.pointerId) return;
    g.id = -1; event.currentTarget.classList.remove('gallery-map-dragging');
    if (g.moved) suppressUntil.current = performance.now() + 250;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  };
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.ctrlKey || event.metaKey || event.altKey || event.key === 'Escape') return;
    if (event.key !== 'Home' && event.target instanceof Element && event.target.closest('[data-gallery-map-control]')) return;
    const { state, fit } = latest.current, amount = (event.shiftKey ? 100 : 40) / fit;
    switch (event.key) {
      case '+': case '=': zoom(1); break;
      case '-': case '_': zoom(-1); break;
      case 'Home': latest.current.onNational(); break;
      case 'ArrowLeft': case 'ArrowRight': change({ ...state, panX: state.panX + (event.key === 'ArrowRight' ? -amount : amount) }); break;
      case 'ArrowUp': case 'ArrowDown': change({ ...state, panY: state.panY + (event.key === 'ArrowDown' ? -amount : amount) }); break;
      case 'PageDown': case 'PageUp': case 'End': break;
      case ' ': if (event.target !== event.currentTarget) return; break;
      default: return;
    }
    event.preventDefault(); event.stopPropagation();
  };
  return { zoom, handlers: { onPointerDown, onPointerMove, onPointerUp: finish, onPointerCancel: finish, onLostPointerCapture: finish,
    onClickCapture: (event: MouseEvent<HTMLDivElement>) => { if (performance.now() < suppressUntil.current) { event.preventDefault(); event.stopPropagation(); } }, onKeyDown } };
}
