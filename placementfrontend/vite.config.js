import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
 /*
  server:{
    proxy:{
      '/api':'http://127.0.0.1:4000/',//proxy work at development mode not for producation
    },

  },*/
  plugins: [react()],
  base: '/', // Required for Vercel (use './' if deploying to subpath)
  build: {
    outDir: 'dist', // Make sure this matches Vercel's output dir
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': '/src', // Recommended for cleaner imports
    }
  }
})
