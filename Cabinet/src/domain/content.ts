export type ContentVisibility = 'public' | 'private' | 'draft';

export type ContentDatePrecision = 'day' | 'month' | 'year' | 'unknown';

export type MediaAssetKind = 'image' | 'audio' | 'video' | 'document';

export type MediaLoadingRole = 'first-screen' | 'interaction' | 'background' | 'deferred';

/**
 * Shared metadata is optional while the local seed is being migrated. Any
 * remote adapter must provide the complete metadata set at its boundary.
 */
export interface ContentRecord {
  id: string;
  spaceId?: string;
  createdAt?: string;
  updatedAt?: string;
  sortOrder?: number;
  visibility?: ContentVisibility;
}

export interface LetterFields {
  id: string;
  date: string;
  oneLiner: string;
  title: string;
  sender: string;
  /** 展柜内嵌互动页（如 520） */
  interactive?: '520';
  /** 无 interactive 时在弹窗内阅读的正文 */
  content?: string;
  /** 邮票图（可选覆盖）；默认使用 assets/stamps 下对应 import */
  stampImage?: string;
}

export type Letter = ContentRecord & LetterFields;
export type LocalLetterSeed = LetterFields;

export interface Album extends ContentRecord {
  title: string;
  description?: string;
  /** The experience date, not the time the record was added. */
  startDate?: string;
  endDate?: string;
  datePrecision?: ContentDatePrecision;
  location?: string;
  tags?: readonly string[];
  coverMediaAssetId?: string;
  mapPoint?: AlbumMapPoint;
  mediaAssetIds: readonly string[];
  photos?: readonly AlbumPhoto[];
}

export interface AlbumMapPoint {
  /** Explicit city name; anchors come from licensed geography, never address geocoding. */
  city?: string;
  /** Optional public, display-grade regional anchor; never a private or photo GPS coordinate. */
  coordinate?: readonly [longitude: number, latitude: number];
  /** Normalized position in the gallery's illustrated map viewport. */
  x: number;
  y: number;
  label: string;
  precision: 'city' | 'area';
}

export interface AlbumPhoto {
  mediaAssetId: string;
  caption?: string;
  capturedAt?: string;
  location?: string;
  /** Wide photographs may occupy a full row without changing order. */
  fullRow?: boolean;
}

export interface Memory extends ContentRecord {
  title: string;
  body?: string;
  occurredAt?: string;
  mediaAssetIds: readonly string[];
}

export interface MediaAsset extends ContentRecord {
  kind: MediaAssetKind;
  url: string;
  alt?: string;
  mimeType?: string;
  width?: number;
  height?: number;
  durationMs?: number;
  loadingRole?: MediaLoadingRole;
  variants?: MediaAssetVariants;
}

export interface MediaAssetVariants {
  /** Original rendition. Gallery originals follow the explicit publication permission in SCOPE.md. */
  original?: string;
  thumb?: string;
  medium?: string;
  large?: string;
}

export type PageLifecycle = 'draft' | 'preview' | 'released' | 'archived';

export interface FestivalPage extends ContentRecord {
  pageId: string;
  route: string;
  title: string;
  lifecycle: PageLifecycle;
  opensAt: string | null;
  archive: {
    name: string;
    date: string;
    kind: string;
    kindTag: string;
    badge: string;
    accentToday: 'rose' | 'emerald' | 'qixi';
  };
}
