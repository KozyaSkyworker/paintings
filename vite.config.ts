import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'sass';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],

  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },

  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },

  envDir: './',
});
