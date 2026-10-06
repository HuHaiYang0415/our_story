// Avoid pulling the heavy map projection/queue into the cover's static dependency graph.
const disposal = new Set<() => void>();
export const onGalleryDispose = (callback: () => void) => { disposal.add(callback); };
export const disposeGallery = () => { disposal.forEach(callback => callback()); };
