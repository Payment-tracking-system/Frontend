import react from '@vitejs/plugin-react'
import * as path from 'path';
import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  plugins: [react(), mkcert()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 3000,
    // @ts-ignore
    https: true
  },
  preview: {
    host: true,
    port: 3000,
  }
});
