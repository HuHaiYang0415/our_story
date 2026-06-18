/** 贰→叁「江」字离场 */
export const JIANG_MORPH_MS = 820;
export const JIANG_HANDOFF_MS = Math.round(JIANG_MORPH_MS * 0.68);
export const JIANG_FLOAT_EXIT_S = JIANG_MORPH_MS / 1000;
export const JIANG_FLOAT_EXIT_EASE = [0.38, 0.02, 0.18, 1] as const;

/** 叁→肆舟划走（略缩短，减少切幕空档） */
export const BOAT_MORPH_MS = 880;
/** 舟划出约七成时提前切肆幕，与暖色铺底重叠 */
export const BOAT_HANDOFF_MS = Math.round(BOAT_MORPH_MS * 0.72);

/** 壹→贰墨迹晕染 */
export const INK_MORPH_MS = 1050;

/** 肆→伍：节物退场、信笺渗入（原粽形化火漆已弃用） */
export const ZONGZI_SEAL_MS = 680;
export const FESTIVE_LETTER_HANDOFF_MS = Math.round(ZONGZI_SEAL_MS * 0.7);

export const ALL_MORPH_MS = [JIANG_MORPH_MS, BOAT_MORPH_MS, INK_MORPH_MS, ZONGZI_SEAL_MS];
