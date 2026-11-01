/** One box specification for the cabinet projection, preparation and 3D world. */
export const BOX = { width: 7.2, depth: 5.76, bottom: -.50, rim: 2.164, lid: .216 };
/** The room and opaque opening shell share this final aperture. */
export const BIRTHDAY_ROOM={scale:90,width:18,depth:14.4,verticalScale:90,centerZ:-1.2,back:-8.4,front:6.0};
export const CLOSED_POSITION = [12, 11, 18] as const;
export const CLOSED_TARGET = [0, .55, 0] as const;

type Point = readonly [number, number, number];
const sub = (a: Point, b: Point) => a.map((v, i) => v - b[i]) as unknown as Point;
const dot = (a: Point, b: Point) => a.reduce((s, v, i) => s + v * b[i], 0);
const unit = (p: Point) => p.map(v => v / Math.hypot(...p)) as unknown as Point;
const cross = (a: Point, b: Point): Point => [a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0]];
const backward = unit(sub(CLOSED_POSITION, CLOSED_TARGET));
const right = unit(cross([0, 1, 0], backward));
const up = cross(backward, right);
export function boxProjection(p: Point) {
  const v = sub(p, CLOSED_POSITION), distance = -dot(v, backward);
  return [300 + dot(v, right) / distance * 820, 230 - dot(v, up) / distance * 820];
}
export function polygon(points: Point[]) { return points.map(p => boxProjection(p).join(',')).join(' '); }
const corners: Point[] = [];
for (const x of [-BOX.width / 2, BOX.width / 2]) for (const y of [BOX.bottom, BOX.rim + BOX.lid]) for (const z of [-BOX.depth / 2, BOX.depth / 2]) corners.push([x, y, z]);
export const BOX_VIEW_WIDTH = Math.ceil(Math.max(...corners.map(p => Math.abs(boxProjection(p)[0] - 300))) * 2 + 36);
export const BOX_VIEW_HEIGHT = Math.ceil(Math.max(...corners.map(p => Math.abs(boxProjection(p)[1] - 230))) * 2 + 36);
export const BOX_VIEW = `${300 - BOX_VIEW_WIDTH / 2} ${230 - BOX_VIEW_HEIGHT / 2} ${BOX_VIEW_WIDTH} ${BOX_VIEW_HEIGHT}`;
