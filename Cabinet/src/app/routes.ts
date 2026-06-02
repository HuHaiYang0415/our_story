export type ViewState =
  | 'cabinet'
  | 'box-envelopes'
  | 'box-photos'
  | 'festival-archive'
  | 'festival-2026-ChildrenDay';

export const VIEW_HASH: Record<ViewState, string> = {
  cabinet: '',
  'box-envelopes': '#envelopes',
  'box-photos': '#photos',
  'festival-archive': '#festivals',
  'festival-2026-ChildrenDay': '#festivals/children-day',
};

export function viewFromHash(): ViewState {
  const hash = window.location.hash;
  if (hash === '#envelopes') return 'box-envelopes';
  if (hash === '#photos') return 'box-photos';
  if (hash === '#festivals') return 'festival-archive';
  if (hash === '#festivals/children-day') return 'festival-2026-ChildrenDay';
  return 'cabinet';
}
