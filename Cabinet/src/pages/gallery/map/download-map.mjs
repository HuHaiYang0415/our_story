// Reproduce the vendored asset; no package or ECharts runtime is required.
import { createHash } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const revision = 'debcd7f324b77ad444f7ba31195535c749d08e53';
const base = `https://raw.githubusercontent.com/apache/echarts/${revision}`;
const directory = new URL('../../../../public/gallery/map/', import.meta.url);
const responses = await Promise.all([
  fetch(`${base}/map/json/china.json`),
  fetch(`${base}/LICENSE`),
  fetch(`${base}/map/json/province/shanghai.json`),
  fetch(`${base}/map/json/province/zhejiang.json`),
]);
if (responses.some(response => !response.ok)) throw new Error('Pinned map download failed');
const [map, license, shanghai, zhejiang] = await Promise.all(responses.map(response => response.text()));
const data = JSON.parse(map);
if (data.type !== 'FeatureCollection' || data.features.length < 34 || !data.UTF8Encoding) {
  throw new Error('Unexpected ECharts map format');
}
if (!license.includes('BSD 3-Clause License') || !license.includes('2017, Baidu Inc.')) {
  throw new Error('Unexpected pinned license');
}
await mkdir(directory, { recursive: true });
await writeFile(new URL('china-4.0.2.json', directory), map);
await writeFile(new URL('LICENSE.echarts-4.0.2.txt', directory), license);
if (JSON.parse(shanghai).features.length !== 16) throw new Error('Unexpected Shanghai map');
await writeFile(new URL('shanghai-4.0.2.json', directory), shanghai);
if (JSON.parse(zhejiang).features.length !== 11) throw new Error('Unexpected Zhejiang map');
await writeFile(new URL('zhejiang-4.0.2.json', directory), zhejiang);
console.log(JSON.stringify({
  revision,
  sha256: createHash('sha256').update(map).digest('hex'),
  bytes: Buffer.byteLength(map),
  features: data.features.map(feature => ({ name: feature.properties.name, cp: feature.properties.cp })),
  directory: fileURLToPath(directory),
}, null, 2));
