import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base : "/Bharat_346/",
  plugins: [
    react(),
    tailwindcss(),
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
