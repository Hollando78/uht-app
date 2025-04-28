import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/uht-app/',  // 👈 Very important for GitHub Pages
});
