import { useEffect, useRef } from 'react';
import type { KeyboardEvent, MouseEvent, PointerEvent, RefObject } from 'react';
import { maxMapZoom, normalizeState } from './geography';
import type { MapState } from './geography';

interface Options { state: MapState; fit: number; onStateChange: (state: MapState) => void; onNational: () => void; onEscape: () => void; }

export function useMapInput(ref: RefObject<HTMLDivElement | null>, options: Options) {
  const latest = useRef(options); latest.current = options;
  const gesture = useRef({ id: -1, x: 0, y: 0, moved: false, lastX: 0, lastY: 0 });
  const contacts = useRef(new Map<number, { x: number; y: number }>());
  const pinch = useRef<{ distance: number; x: number; y: number } | null>(null);
  const suppressUntil = useRef(0);
  const change = (state: MapState) => {
    const next = normalizeState(state); latest.current = { ...latest.current, state: next }; latest.current.onStateChange(next);
  };
  const zoomAt = (factor: number, clientX?: number, clientY?: number) => {
    const { state, fit } = latest.current;
    const value = Math.max(1, Math.min(maxMapZoom(state), state.zoom * factor));
    if (value === state.zoom) return;
    const node = ref.current;
    if (!node || clientX === undefined || clientY === undefined) {
      change({ ...state, zoom: value, panX: state.panX * value / state.zoom, panY: state.panY * value / state.zoom });
      return;
    }
    const bounds = node.getBoundingClientRect();
    const x = (clientX - bounds.left - bounds.width / 2) / fit;
    const y = (clientY - bounds.top - Math.max(1, bounds.height - 68) / 2) / fit;
    const worldX = (x - state.panX) / state.zoom;
    const worldY = (y - state.panY) / state.zoom;
    change({ ...state, zoom: value, panX: x - worldX * value, panY: y - worldY * value });
  };
  const zoom = (direction: number) => {
    zoomAt(direction > 0 ? 1.25 : .8);
  };
  useEffect(() => {
    const node = ref.current; if (!node) return;
    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey || (event.target instanceof Element && event.target.closest('[data-gallery-map-control]'))) return;
      const raw = event.deltaY || event.deltaX;
      if (!raw) return;
      event.preventDefault(); event.stopPropagation();
      const delta = raw * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? node.clientWidth : 1);
      zoomAt(Math.exp(-Math.max(-240, Math.min(240, delta)) * .0025), event.clientX, event.clientY);
    };
    const cancel = () => {
      gesture.current.id = -1; contacts.current.clear(); pinch.current = null;
      node.classList.remove('gallery-map-dragging');
    };
    node.addEventListener('wheel', onWheel, { passive: false }); window.addEventListener('blur', cancel);
    return () => { node.removeEventListener('wheel', onWheel); window.removeEventListener('blur', cancel); };
  }, [ref]);
  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if ((event.pointerType === 'mouse' && event.button !== 0) || (event.target instanceof Element && event.target.closest('[data-gallery-map-control]'))) return;
    contacts.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    event.currentTarget.setPointerCapture(event.pointerId);
    if (contacts.current.size === 1) {
      gesture.current = { id: event.pointerId, x: event.clientX, y: event.clientY, moved: false, lastX: event.clientX, lastY: event.clientY };
      return;
    }
    const [first, second] = Array.from(contacts.current.values());
    pinch.current = { distance: Math.hypot(second.x - first.x, second.y - first.y), x: (first.x + second.x) / 2, y: (first.y + second.y) / 2 };
    gesture.current.id = -1;
  };
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (contacts.current.has(event.pointerId)) contacts.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (contacts.current.size >= 2) {
      const [first, second] = Array.from(contacts.current.values());
      const next = { distance: Math.hypot(second.x - first.x, second.y - first.y), x: (first.x + second.x) / 2, y: (first.y + second.y) / 2 };
      const previous = pinch.current;
      if (previous && previous.distance > 0 && next.distance > 0) {
        const { state, fit } = latest.current;
        const node = event.currentTarget, bounds = node.getBoundingClientRect();
        const oldX = (previous.x - bounds.left - bounds.width / 2) / fit;
        const oldY = (previous.y - bounds.top - Math.max(1, bounds.height - 68) / 2) / fit;
        const nextX = (next.x - bounds.left - bounds.width / 2) / fit;
        const nextY = (next.y - bounds.top - Math.max(1, bounds.height - 68) / 2) / fit;
        const value = Math.max(1, Math.min(maxMapZoom(state), state.zoom * next.distance / previous.distance));
        const worldX = (oldX - state.panX) / state.zoom;
        const worldY = (oldY - state.panY) / state.zoom;
        change({ ...state, zoom: value, panX: nextX - worldX * value, panY: nextY - worldY * value });
        suppressUntil.current = performance.now() + 250;
        node.classList.add('gallery-map-dragging');
      }
      pinch.current = next;
      event.preventDefault();
      return;
    }
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
    const g = gesture.current;
    contacts.current.delete(event.pointerId); pinch.current = null;
    if (g.id === event.pointerId) {
      g.id = -1;
      if (g.moved) suppressUntil.current = performance.now() + 250;
    }
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    const remaining = Array.from(contacts.current.entries())[0];
    if (remaining) {
      const [id, point] = remaining;
      gesture.current = { id, x: point.x, y: point.y, moved: false, lastX: point.x, lastY: point.y };
    } else event.currentTarget.classList.remove('gallery-map-dragging');
  };
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    if (event.key === 'Escape') {
      event.preventDefault(); event.stopPropagation(); latest.current.onEscape(); return;
    }
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
