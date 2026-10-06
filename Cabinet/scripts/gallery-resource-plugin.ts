import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import type { Plugin } from 'vite';
/** JSON/thumbs use content URLs. Unchanged approved originals keep their canonical URL. */
export function galleryResourcePlugin(root: string): Plugin {
  let output = path.join(root, 'dist');
  const files: { source: string; name: string; url: string; hash: string; bytes: number }[] = [];
  const walk = (directory: string, prefix: string) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const source = path.join(directory, entry.name), name = `${prefix}/${entry.name}`;
      if (entry.isDirectory()) walk(source, name);
      else if (/\.jpe?g$/i.test(entry.name)) add(source, name);
    }
  };
  const add = (source: string, name: string) => {
    const body = fs.readFileSync(source), hash = createHash('sha256').update(body).digest('hex');
    files.push({ source, name, hash, bytes: body.length, url: name.startsWith('gallery/originals/') ? name : `gallery/versioned/${hash}/${path.basename(name)}` });
  };
  walk(path.join(root, 'public/gallery/collections'), 'gallery/collections');
  walk(path.join(root, '../gallery/originals'), 'gallery/originals');
  for (const name of ['china-4.0.2.json', 'zhejiang-4.0.2.json', 'natural-earth-110m.json']) add(path.join(root, 'public/gallery/map', name), `gallery/map/${name}`);
  const urls = Object.fromEntries(files.map(file => [file.name, file.url]));
  return {
    name: 'gallery-content-addressed-resources',
    configResolved(config) { output = path.resolve(config.root, config.build.outDir); },
    resolveId(id) { if (id === 'virtual:gallery-resource-urls') return '\0gallery-resource-urls'; },
    load(id) { if (id === '\0gallery-resource-urls') return `export default ${JSON.stringify(urls)};`; },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        let url: string;
        try { url = decodeURIComponent(req.url?.split('?')[0] ?? '').replace(/^\//, ''); } catch { return next(); }
        const file = files.find(item => item.url === url); if (!file) return next();
        res.setHeader('Content-Type', file.name.endsWith('.json') ? 'application/json' : 'image/jpeg');
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable'); res.setHeader('ETag', `"${file.hash}"`);
        if (req.headers['if-none-match'] === `"${file.hash}"`) { res.statusCode = 304; res.end(); } else fs.createReadStream(file.source).pipe(res);
      });
    },
    closeBundle() {
      for (const file of files) {
        const dest = path.join(output, file.url); fs.mkdirSync(path.dirname(dest), { recursive: true }); fs.copyFileSync(file.source, dest);
      }
      fs.writeFileSync(path.join(output, 'gallery-resource-manifest.json'), JSON.stringify({ schema: 1, files: files.map(({ source: _source, ...file }) => file) }, null, 2));
    },
  };
}
