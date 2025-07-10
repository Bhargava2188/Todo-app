import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Todo-app/', // 👈 MUST MATCH GitHub repo name exactly (case-sensitive)
  plugins: [react()],
});
