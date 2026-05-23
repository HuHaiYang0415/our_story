import fs from 'node:fs';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  const companionDir = path.resolve(__dirname, '../companion-520');
  const cabinetImageDir = path.resolve(__dirname, 'image');

  return {
    base: './',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'serve-static-extras',
        configureServer(server) {
          import('sirv').then(({ default: sirv }) => {
            server.middlewares.use(
              '/companion-520',
              sirv(companionDir, { dev: true, single: false }),
            );
            if (fs.existsSync(cabinetImageDir)) {
              server.middlewares.use(
                '/image',
                sirv(cabinetImageDir, { dev: true, single: false }),
              );
            }
          }).catch(() => {
            // sirv 仅在本地 dev 需要；缺失时不影响构建与预览
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
