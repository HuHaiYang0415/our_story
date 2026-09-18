import fs from 'node:fs';
import { cpSync, existsSync, statSync } from 'node:fs';
import path from 'node:path';
import type { Connect } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const cabinetRoot = path.resolve(import.meta.dirname);
const letter520Src = path.resolve(
  cabinetRoot,
  'src/pages/letters/interactive/520',
);

const LETTER_520_MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.mp3': 'audio/mpeg',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
};

function copyLetter520ToDist(outDir: string) {
  const dest = path.join(outDir, 'pages/letters/520');
  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }
  cpSync(letter520Src, dest, { recursive: true });
}

/** dev 下提供 520 静态目录（不依赖 sirv，避免 import 失败静默 404） */
function createLetter520DevMiddleware(rootDir: string, prefix = '/pages/letters/520'): Connect.NextHandleFunction {

  return (req, res, next) => {
    const rawUrl = req.url?.split('?')[0] ?? '';
    if (!rawUrl.startsWith(prefix)) return next();

    let rel = decodeURIComponent(rawUrl.slice(prefix.length));
    if (rel.startsWith('/')) rel = rel.slice(1);
    if (!rel || rel.endsWith('/')) rel = `${rel}index.html`;

    const root = path.resolve(rootDir);
    const filePath = path.resolve(rootDir, rel);
    if (
      (!filePath.startsWith(`${root}${path.sep}`) && filePath !== root) ||
      !existsSync(filePath) ||
      statSync(filePath).isDirectory()
    ) {
      return next();
    }

    const ext = path.extname(filePath).toLowerCase();
    res.setHeader('Content-Type', LETTER_520_MIME[ext] ?? 'application/octet-stream');
    fs.createReadStream(filePath).pipe(res);
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'copy-letter-520-static',
        closeBundle() {
          copyLetter520ToDist(path.resolve(cabinetRoot, 'dist'));
          const originals = path.resolve(cabinetRoot, '../gallery/originals');
          if (existsSync(originals)) cpSync(originals, path.resolve(cabinetRoot, 'dist/gallery/originals'), { recursive: true });
        },
        configureServer(server) {
          server.middlewares.use(createLetter520DevMiddleware(letter520Src));
          const originals = path.resolve(cabinetRoot, '../gallery/originals');
          if (existsSync(originals)) server.middlewares.use(createLetter520DevMiddleware(originals, '/gallery/originals'));
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(cabinetRoot, 'src'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      // The repository keeps explicit budgets in performance-budget.json; this
      // threshold prevents Vite's generic warning from masking those budgets.
      chunkSizeWarningLimit: 1800,
    },
  };
});
