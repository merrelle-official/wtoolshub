import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist', // Папка для сборки
    sourcemap: false, // Генерация карт кода
  },
  resolve: {
    alias: {
      '@': '/src', // alias '@' указывает на папку src
    }
  }
});
