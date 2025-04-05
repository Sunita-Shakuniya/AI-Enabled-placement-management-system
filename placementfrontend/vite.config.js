import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // This is correct
  server: {
    historyApiFallback: true, // ADD THIS LINE
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})