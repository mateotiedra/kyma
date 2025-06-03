import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'process.env': {},
  },
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        404: '404.html', // Relative to project root
      },
    },
  },
});
