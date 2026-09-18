import type { Album, FestivalPage, Letter, MediaAsset, Memory } from './content';

/**
 * Read-only content boundary used by page features. Implementations may be
 * local seeds today or an HTTP snapshot later; UI components do not import
 * transport DTOs or storage schemas.
 */
export interface ReadonlyContentRepository {
  listLetters(): readonly Letter[];
  getLetter(id: string): Letter | undefined;
  listAlbums(): readonly Album[];
  listMemories(): readonly Memory[];
  listFestivalPages(): readonly FestivalPage[];
  listMediaAssets(): readonly MediaAsset[];
  getMediaAsset(id: string): MediaAsset | undefined;
}
