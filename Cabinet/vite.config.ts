import fs from 'node:fs';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  const interactiveDir = path.resolve(
    __dirname,
    'src/pages/letters/interactive/520',
  );
  const stampImageDir = path.resolve(
    __dirname,
    'src/pages/letters/assets/stamps',
  );

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
              '/20260520',
              sirv(interactiveDir, { dev: true, single: false }),
            );
            if (fs.existsSync(stampImageDir)) {
              server.middlewares.use(
                '/image',
                sirv(stampImageDir, { dev: true, single: false }),
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
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
