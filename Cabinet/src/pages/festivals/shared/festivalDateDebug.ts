/** Released pages always use real time; local date simulation is excluded. */
export function getFestivalNow(): Date { return new Date(); }
/** Compatibility boundary for existing consumers; no test listeners are installed. */
export function subscribeFestivalDateOverride(_onChange: () => void): () => void {
  return () => {};
}
