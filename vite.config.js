import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : "/Bharat_346/",
  plugins: [
    react(),
    // nodePolyfills()
  ],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      process: 'process/browser',
    },
  },
})
