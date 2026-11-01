/** Navigation only: gift actions, yearly ceremonies and the outer box keep their clocks. */
export const INTERACTION_MOTION={enter:460,return:320,group:350,snap:240,reduced:80} as const;
export const navigationEase=(t:number)=>1-Math.pow(1-t,3);
