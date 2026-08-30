import { canAccessDragonBoat2026 } from '@/pages/festivals/2026/dragon-boat/access';
import { canAccessQixi2026 } from '@/pages/festivals/2026/qixi/access';

export type ViewState =
  | 'cabinet'
  | 'box-envelopes'
  | 'letter-520'
  | 'box-photos'
  | 'relationship'
  | 'festival-archive'
  | 'festival-2026-ChildrenDay'
  | 'festival-2026-DragonBoat'
  | 'festival-2026-Qixi';

export const VIEW_HASH: Record<ViewState, string> = {
  cabinet: '',
  'box-envelopes': '#envelopes',
  'letter-520': '#envelopes/520',
  'box-photos': '#photos',
  relationship: '#relationship',
  'festival-archive': '#festivals',
  'festival-2026-ChildrenDay': '#festivals/children-day',
  'festival-2026-DragonBoat': '#festivals/dragon-boat-2026',
  'festival-2026-Qixi': '#festivals/qixi-2026',
};

export function viewFromHash(): ViewState {
  const hash = window.location.hash;
  if (hash === '#envelopes/520') return 'letter-520';
  if (hash === '#envelopes') return 'box-envelopes';
  if (hash === '#photos') return 'box-photos';
  if (hash === '#relationship') return 'relationship';
  if (hash === '#festivals') return 'festival-archive';
  if (hash === '#festivals/children-day') return 'festival-2026-ChildrenDay';
  if (hash === '#festivals/dragon-boat-2026') {
    return canAccessDragonBoat2026() ? 'festival-2026-DragonBoat' : 'festival-archive';
  }
  if (hash === '#festivals/qixi-2026') {
    return canAccessQixi2026() ? 'festival-2026-Qixi' : 'festival-archive';
  }
  return 'cabinet';
}
