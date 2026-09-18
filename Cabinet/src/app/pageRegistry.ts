import { canAccessDragonBoat2026 } from '@/pages/festivals/2026/dragon-boat/access';

export type AppView =
  | 'cabinet'
  | 'box-envelopes'
  | 'letter-520'
  | 'box-photos'
  | 'relationship'
  | 'festival-archive'
  | 'festival-2026-ChildrenDay'
  | 'festival-2026-DragonBoat';

export type PageId =
  | 'relationship-anniversary'
  | '2026_ChildrenDay'
  | '2026_DragonBoatFestival';

export type FestivalPageId = Exclude<PageId, 'relationship-anniversary'>;
export type PageLifecycle = 'draft' | 'preview' | 'released' | 'archived';
export type PageLoaderKey =
  | 'letter-520'
  | 'relationship'
  | 'festival-2026-ChildrenDay'
  | 'festival-2026-DragonBoat';

export type FestivalAccent = 'rose' | 'emerald' | 'qixi';

export type FestivalArchiveMetadata = {
  name: string;
  date: string;
  kind: string;
  kindTag: string;
  badge: string;
  accentToday: FestivalAccent;
};

export type HolidayName =
  | '元旦'
  | '劳动节'
  | '儿童节'
  | '国庆节'
  | '情人节'
  | '圣诞节'
  | '春节'
  | '元宵节'
  | '端午节'
  | '七夕'
  | '中秋节'
  | '重阳节'
  | '除夕'
  | '清明';

export type HourglassMetadata = {
  holidayName: HolidayName;
  englishName: string;
  iconKey: HolidayName;
  colorName: string;
  glowColor: string;
  sandColor: string;
};

export const HOLIDAY_REGISTRY = {
  元旦: { holidayName: '元旦', englishName: 'NewYear', iconKey: '元旦', colorName: '淡金色', glowColor: '#FDE047', sandColor: '#FDE047' },
  劳动节: { holidayName: '劳动节', englishName: 'LaborDay', iconKey: '劳动节', colorName: '橙红', glowColor: '#EA580C', sandColor: '#EA580C' },
  儿童节: { holidayName: '儿童节', englishName: 'ChildrenDay', iconKey: '儿童节', colorName: '草莓粉', glowColor: '#FECDD3', sandColor: '#FB7185' },
  国庆节: { holidayName: '国庆节', englishName: 'NationalDay', iconKey: '国庆节', colorName: '正红', glowColor: '#DC2626', sandColor: '#DC2626' },
  情人节: { holidayName: '情人节', englishName: 'Valentine', iconKey: '情人节', colorName: '玫瑰红', glowColor: '#E11D48', sandColor: '#E11D48' },
  圣诞节: { holidayName: '圣诞节', englishName: 'Christmas', iconKey: '圣诞节', colorName: '红+绿渐变', glowColor: 'red-green', sandColor: '#10B981' },
  春节: { holidayName: '春节', englishName: 'SpringFestival', iconKey: '春节', colorName: '朱红', glowColor: '#F97316', sandColor: '#F97316' },
  元宵节: { holidayName: '元宵节', englishName: 'LanternFestival', iconKey: '元宵节', colorName: '暖橙', glowColor: '#F59E0B', sandColor: '#F59E0B' },
  端午节: { holidayName: '端午节', englishName: 'DragonBoatFestival', iconKey: '端午节', colorName: '翠绿', glowColor: '#10B981', sandColor: '#10B981' },
  七夕: { holidayName: '七夕', englishName: 'Qixi', iconKey: '七夕', colorName: '淡紫', glowColor: '#C084FC', sandColor: '#C084FC' },
  中秋节: { holidayName: '中秋节', englishName: 'MidAutumn', iconKey: '中秋节', colorName: '月白', glowColor: '#E2E8F0', sandColor: '#E2E8F0' },
  重阳节: { holidayName: '重阳节', englishName: 'Chongyang', iconKey: '重阳节', colorName: '金菊黄', glowColor: '#D97706', sandColor: '#D97706' },
  除夕: { holidayName: '除夕', englishName: 'Chuxi', iconKey: '除夕', colorName: '暗红', glowColor: '#991B1B', sandColor: '#991B1B' },
  清明: { holidayName: '清明', englishName: 'Qingming', iconKey: '清明', colorName: '青灰', glowColor: '#64748B', sandColor: '#64748B' },
} as const satisfies Record<HolidayName, HourglassMetadata>;

export type PageDefinition = {
  view: AppView;
  pageId: PageId | null;
  hash: string;
  titleSuffix: string | null;
  lifecycle: PageLifecycle;
  opensAt: string | null;
  loader: PageLoaderKey | null;
  access: () => boolean;
  archive?: FestivalArchiveMetadata;
  hourglass?: HourglassMetadata;
};

export type FestivalPageDefinition = PageDefinition & {
  pageId: FestivalPageId;
  archive: FestivalArchiveMetadata;
  hourglass: HourglassMetadata;
};

export const PAGE_REGISTRY: Record<AppView, PageDefinition> = {
  cabinet: {
    view: 'cabinet',
    pageId: null,
    hash: '',
    titleSuffix: null,
    lifecycle: 'released',
    opensAt: null,
    loader: null,
    access: () => true,
  },
  'box-envelopes': {
    view: 'box-envelopes',
    pageId: null,
    hash: '#envelopes',
    titleSuffix: '时光信箱',
    lifecycle: 'released',
    opensAt: null,
    loader: null,
    access: () => true,
  },
  'letter-520': {
    view: 'letter-520',
    pageId: null,
    hash: '#envelopes/520',
    titleSuffix: '2026.05.20',
    lifecycle: 'released',
    opensAt: null,
    loader: 'letter-520',
    access: () => true,
  },
  'box-photos': {
    view: 'box-photos',
    pageId: null,
    hash: '#photos',
    titleSuffix: '流光相册盒',
    lifecycle: 'released',
    opensAt: null,
    loader: null,
    access: () => true,
  },
  relationship: {
    view: 'relationship',
    pageId: 'relationship-anniversary',
    hash: '#relationship',
    titleSuffix: '相恋时光',
    lifecycle: 'released',
    opensAt: null,
    loader: 'relationship',
    access: () => true,
  },
  'festival-archive': {
    view: 'festival-archive',
    pageId: null,
    hash: '#festivals',
    titleSuffix: '节日风物志',
    lifecycle: 'released',
    opensAt: null,
    loader: null,
    access: () => true,
  },
  'festival-2026-ChildrenDay': {
    view: 'festival-2026-ChildrenDay',
    pageId: '2026_ChildrenDay',
    hash: '#festivals/children-day',
    titleSuffix: '2026 儿童节',
    lifecycle: 'released',
    opensAt: '2026-06-01',
    loader: 'festival-2026-ChildrenDay',
    access: () => true,
    archive: {
      name: '儿童节',
      date: '2026-06-01',
      kind: '公历',
      kindTag: '阳历',
      badge: '交互页',
      accentToday: 'rose',
    },
    hourglass: HOLIDAY_REGISTRY['儿童节'],
  },
  'festival-2026-DragonBoat': {
    view: 'festival-2026-DragonBoat',
    pageId: '2026_DragonBoatFestival',
    hash: '#festivals/dragon-boat-2026',
    titleSuffix: '2026 端午节',
    lifecycle: 'released',
    opensAt: '2026-06-19',
    loader: 'festival-2026-DragonBoat',
    access: canAccessDragonBoat2026,
    archive: {
      name: '端午节',
      date: '2026-06-19',
      kind: '农历 · 五月初五',
      kindTag: '农历',
      badge: '记胜页',
      accentToday: 'emerald',
    },
    hourglass: HOLIDAY_REGISTRY['端午节'],
  },
};

export function getPageDefinition(view: AppView): PageDefinition {
  return PAGE_REGISTRY[view];
}

export function getPageDefinitionByHash(hash: string): PageDefinition | undefined {
  return Object.values(PAGE_REGISTRY).find((page) => page.hash === hash);
}

export function getPageDefinitionById(pageId: string): PageDefinition | undefined {
  return Object.values(PAGE_REGISTRY).find((page) => page.pageId === pageId);
}

export function getFestivalPageDefinitions(): FestivalPageDefinition[] {
  return Object.values(PAGE_REGISTRY).filter(
    (page): page is FestivalPageDefinition =>
      page.archive !== undefined && page.hourglass !== undefined && page.pageId !== null,
  );
}

export function getFestivalPageForHoliday(
  holidayName: string,
  year: number,
): FestivalPageDefinition | undefined {
  return getFestivalPageDefinitions().find(
    (page) =>
      page.hourglass.holidayName === holidayName &&
      page.opensAt?.startsWith(`${year}-`),
  );
}

export function getHolidayDefinition(name: string): HourglassMetadata | undefined {
  return Object.prototype.hasOwnProperty.call(HOLIDAY_REGISTRY, name)
    ? HOLIDAY_REGISTRY[name as HolidayName]
    : undefined;
}
