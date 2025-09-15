import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig({
  
 /*  base: 'https://storage.yandexcloud.net/apps.nova-engineering.pro/viewer_selector/', */
  plugins: [react(), tailwindcss(), viteSingleFile({ removeViteModuleLoader: true })],
   assetsInclude: [
    '**/*.xkt',
    '**/*.png',
    '**/*.jpg',
    '**/*.svg',
  ],
   build: {
    target: 'esnext',
    assetsInlineLimit: 10000000000 * 1000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
   /*  brotliSize: false, */
   rollupOptions: {
      output: {
        /* inlineDynamicImports: true, // Forces single bundle
        format: "iife", // Wraps code in IIFE for browser use
        manualChunks: () => "all", // All modules in one chunk */
      },
    },
  },
   

})