import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Game_Resume/',
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    port: 3000,
    open: true
  }
});
