const owners = new Set<symbol>();
const listeners = new Set<() => void>();
export const originalBusy = () => owners.size > 0;
export const observeOriginal = (listener: () => void) => { listeners.add(listener); return () => { listeners.delete(listener); }; };
/** A stale photo completion cannot release the reservation of its successor. */
export function reserveOriginal() {
  const token = Symbol(); owners.add(token); listeners.forEach(fn => fn());
  return () => { if (owners.delete(token)) listeners.forEach(fn => fn()); };
}
