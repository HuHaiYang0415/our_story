import { getFestivalPageDefinitions } from '@/app/pageRegistry';
import { getLetterStampSrc, LETTERS_DATA } from '@/pages/letters/data/letters';
import {
  GALLERY_LOCAL_ALBUMS,
  GALLERY_MEDIA_ASSETS,
  GALLERY_PUBLIC_ALBUMS,
} from '@/pages/gallery/data/galleryContent';
import type { Album, FestivalPage, Letter, MediaAsset, Memory } from '@/domain/content';
import type { ReadonlyContentRepository } from '@/domain/contentRepository';

const LOCAL_SPACE_ID = 'local-our-story';

const letters: readonly Letter[] = Object.freeze(
  LETTERS_DATA.map((seed, index) =>
    Object.freeze({
      ...seed,
      spaceId: LOCAL_SPACE_ID,
      sortOrder: index,
      visibility: 'public' as const,
    }),
  ),
);

const mediaAssets: readonly MediaAsset[] = Object.freeze(
  [
    ...letters.map((letter) =>
      Object.freeze({
        id: `${letter.id}-stamp`,
        spaceId: LOCAL_SPACE_ID,
        sortOrder: letter.sortOrder,
        visibility: letter.visibility,
        kind: 'image' as const,
        url: getLetterStampSrc(letter),
        alt: `${letter.title}邮票`,
        loadingRole: 'first-screen' as const,
      }),
    ),
    ...GALLERY_MEDIA_ASSETS,
  ],
);

/** Five collections and displayed addresses explicitly approved for publication on 2026-09-18. */
const albums: readonly Album[] = import.meta.env.DEV ? GALLERY_LOCAL_ALBUMS : GALLERY_PUBLIC_ALBUMS;
const memories: readonly Memory[] = Object.freeze([]);

function listFestivalPages(): readonly FestivalPage[] {
  return Object.freeze(
    getFestivalPageDefinitions().map((page) =>
      Object.freeze({
        id: page.pageId,
        pageId: page.pageId,
        route: page.hash,
        title: page.titleSuffix ?? page.archive.name,
        lifecycle: page.lifecycle,
        opensAt: page.opensAt,
        archive: page.archive,
        spaceId: LOCAL_SPACE_ID,
        sortOrder: 0,
        visibility: page.lifecycle === 'draft' ? ('draft' as const) : ('public' as const),
      }),
    ),
  );
}

export const localContentRepository: ReadonlyContentRepository = Object.freeze({
  listLetters: () => letters,
  getLetter: (id) => letters.find((letter) => letter.id === id),
  listAlbums: () => albums,
  listMemories: () => memories,
  listFestivalPages,
  listMediaAssets: () => mediaAssets,
  getMediaAsset: (id) => mediaAssets.find((asset) => asset.id === id),
});

export function getContentRepository(): ReadonlyContentRepository {
  return localContentRepository;
}
