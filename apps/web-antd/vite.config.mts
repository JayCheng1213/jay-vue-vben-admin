import { defineConfig } from '@vben/vite-config';
import path from 'path';
export default defineConfig(async () => {
  return {
    application: {},
    vite: {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'), // ← 這邊必須對應正確的 src
        },
      },
      server: {
        proxy: {
          '/api': {
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
            target: 'http://localhost:5320/api',
            ws: true,
          },
        },
      },
    },
  };
});
