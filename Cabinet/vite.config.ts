import fs from 'node:fs';
import { cpSync } from 'node:fs';
import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const cabinetRoot = path.resolve(import.meta.dirname);
const letter520Src = path.resolve(
  cabinetRoot,
  'src/pages/letters/interactive/520',
);

function copyLetter520ToDist(outDir: string) {
  const dest = path.join(outDir, 'pages/letters/520');
  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }
  cpSync(letter520Src, dest, { recursive: true });
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
        },
        configureServer(server) {
          import('sirv').then(({ default: sirv }) => {
            server.middlewares.use(
              '/pages/letters/520',
              sirv(letter520Src, { dev: true, single: false }),
            );
          }).catch(() => {
            // sirv 仅在本地 dev 需要
          });
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
  };
});
