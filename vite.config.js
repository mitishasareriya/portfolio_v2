import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'Sunny Dahima Portfolio',
        short_name: 'Sunny',
        description: 'Sunny Dahima - Executive Vice President Portfolio',
        theme_color: '#f8fafc',
        background_color: '#f8fafc',
        display: 'standalone',
        icons: [
          {
            src: 'favicon/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'favicon/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  base: '/portfolio_v2/',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
})