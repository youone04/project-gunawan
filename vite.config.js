
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@ComponentPositivus': path.resolve(__dirname, './src/ComponentPositivus'),
      '@ComponentNotFound': path.resolve(__dirname, './src/ComponentNotFound'),
    },
  },
  plugins: [react()],
});
