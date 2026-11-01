import * as T from 'three';


export const material = (color: string, roughness = .84) => new T.MeshStandardMaterial({ color, roughness, metalness: 0 });
export function mesh(geometry: T.BufferGeometry, surface: T.Material, parent: T.Object3D, position: number[] = [0, 0, 0]) {
  const object = new T.Mesh(geometry, surface);
  object.position.set(position[0], position[1], position[2]); object.castShadow = true; object.receiveShadow = false;
  parent.add(object); return object;
}
export function starShape(radius: number, inner: number) {
  const shape = new T.Shape();
  for (let i = 0; i < 10; i++) {
    const a = Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? inner : radius;
    const x = Math.cos(a) * r, y = Math.sin(a) * r;
    if (i === 0) shape.moveTo(x, y); else shape.lineTo(x, y);
  }
  shape.closePath(); return shape;
}
