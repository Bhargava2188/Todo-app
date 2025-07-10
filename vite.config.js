import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ Use this for Netlify and manual deploys
  plugins: [react()],
})
