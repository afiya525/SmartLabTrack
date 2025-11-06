import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If your backend runs on http://localhost:5000, this proxy lets you call `/api/...`
// directly from the frontend during development.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
})
