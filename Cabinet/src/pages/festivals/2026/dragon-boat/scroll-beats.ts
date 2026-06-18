import { DRAGON_BOAT_LETTER } from './letter';
import type { SceneMaterial } from './scroll-theme';
import type { InkDisplayMode } from './scroll/typography/InkDisplay';

export type SceneId = 'prologue' | 'river' | 'race' | 'festive' | 'letter' | 'finale';

export type SceneLayout = 'center' | 'river-glyph' | 'race-diagonal' | 'festive-split';

/** 前进切幕时的转场类型 */
export type ForwardTransition =
  | 'default'
  | 'light-curtain'
  | 'morph-ink'
  | 'morph-jiang'
  | 'morph-boat'
  | 'morph-zongzi-seal';

export interface SceneEgg {
  id: string;
  text: string;
  anchor: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'mid-left';
  reveal?: string;
  /** 引导隐藏玩法的提示类夹注 */
  hint?: boolean;
}

export interface SceneBeat {
  id: SceneId;
  material: SceneMaterial;
  chapter: string;
  sceneLabel: string;
  layout: SceneLayout;
  displayMode: InkDisplayMode;
  display: string;
  subtitle?: string;
  body?: string[];
  bodyVariant?: 'center' | 'letter' | 'asymmetric';
  /** 前进离开本幕时的转场 */
  forwardTransition?: ForwardTransition;
  eggs: SceneEgg[];
}

const letterParagraphs = DRAGON_BOAT_LETTER.content
  .split(/\n\n+/)
  .map((p) => p.trim())
  .filter(Boolean);

export const SCROLL_SCENES: SceneBeat[] = [
  {
    id: 'prologue',
    material: 'dawn',
    chapter: '壹',
    sceneLabel: '引 · 展卷',
    layout: 'center',
    displayMode: 'vertical-pair',
    display: '蒲节记胜',
    subtitle: '2026 · 五月初五 · 竞渡长卷',
    body: ['岁序走到重五，江风先热起来了'],
    forwardTransition: 'morph-ink',
    eggs: [
      {
        id: 'egg-prologue-hint',
        anchor: 'top-right',
        text: '岁时记',
        reveal: '想和你一起过端午',
      },
    ],
  },
  {
    id: 'river',
    material: 'river',
    chapter: '贰',
    sceneLabel: '江 · 远眺',
    layout: 'river-glyph',
    displayMode: 'horizontal',
    display: '江',
    subtitle: '天',
    body: ['风从江面来，带着菖蒲与糯米的香气', '南风知我意，流水寄相思'],
    bodyVariant: 'asymmetric',
    forwardTransition: 'morph-jiang',
    eggs: [
      {
        id: 'egg-river-mist',
        anchor: 'mid-left',
        text: '夹注 · 瓯江',
        hint: true,
        reveal: '五叩粼粼江浪，自来一纸瓶笺',
      },
    ],
  },
  {
    id: 'race',
    material: 'race',
    chapter: '叁',
    sceneLabel: '渡 · 鼓震',
    layout: 'race-diagonal',
    displayMode: 'horizontal',
    display: '渡',
    subtitle: '鼓声逐浪，心意同频',
    body: ['三舟并渡，各怀节奏'],
    bodyVariant: 'asymmetric',
    forwardTransition: 'morph-boat',
    eggs: [
      {
        id: 'egg-race-drum',
        anchor: 'bottom-right',
        text: '鼓点三下',
        hint: true,
        reveal: '三声鼓鸣，致我满心歉意',
      },
    ],
  },
  {
    id: 'festive',
    material: 'festive',
    chapter: '肆',
    sceneLabel: '物 · 案上',
    layout: 'festive-split',
    displayMode: 'horizontal',
    display: '节物',
    subtitle: '案上岁时，掌上温良',
    body: [
      '糯米裹成三角，咸甜各安其味',
      '门悬艾蒲，兰汤祓禊，皆为长夏祈福',
      '江上的热闹归于案头，想把满心温柔尽数写进书卷',
    ],
    bodyVariant: 'asymmetric',
    forwardTransition: 'morph-zongzi-seal',
    eggs: [
      {
        id: 'egg-festive-ai',
        anchor: 'top-left',
        text: '艾',
        reveal: '艾香一缕，祝君温良无疾',
      },
      {
        id: 'egg-festive-zong',
        anchor: 'bottom-left',
        text: '粽',
        reveal: '一口糯香...算了不好消化，我们吃冰淇淋吧',
      },
    ],
  },
  {
    id: 'letter',
    material: 'paper',
    chapter: '伍',
    sceneLabel: '寄情 · 展信',
    layout: 'center',
    displayMode: 'horizontal',
    display: DRAGON_BOAT_LETTER.title,
    // subtitle: DRAGON_BOAT_LETTER.date,
    body: letterParagraphs.length > 0 ? letterParagraphs : [DRAGON_BOAT_LETTER.content],
    bodyVariant: 'letter',
    eggs: [
      {
        id: 'egg-letter-seal',
        anchor: 'top-right',
        text: '印',
        reveal: '平生不会相思，才会相思，便害相思',
      },
    ],
  },
  {
    id: 'finale',
    material: 'finale',
    chapter: '陆',
    sceneLabel: '收 · 记胜',
    layout: 'center',
    displayMode: 'finale',
    display: '永远「粽」意你',
    subtitle: '第一个端午节',
    body: ['糯米成粽 艾菖辟邪 心心相扣 不负岁时韶华'],
    eggs: [
      {
        id: 'egg-finale-story',
        anchor: 'bottom-right',
        text: 'Our Story',
        reveal: '日日念你 · 岁岁有你',
      },
    ],
  },
];

export const SCENE_COUNT = SCROLL_SCENES.length;

/** 前进切幕时，若需 morph，返回 morph 类型 */
export function getForwardMorph(fromIndex: number, toIndex: number): ForwardTransition | null {
  if (toIndex !== fromIndex + 1) return null;
  const t = SCROLL_SCENES[fromIndex]?.forwardTransition;
  if (
    t === 'morph-ink' ||
    t === 'morph-jiang' ||
    t === 'morph-boat' ||
    t === 'morph-zongzi-seal'
  ) {
    return t;
  }
  return null;
}
