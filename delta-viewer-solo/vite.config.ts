import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
/* import { reactRouter } from "@react-router/dev/vite"; */

// https://vite.dev/config/
export default defineConfig({
  base: "https://storage.yandexcloud.net/apps.cloudbim.ru/show_bcf/",
  plugins: [react(), tailwindcss()/* , reactRouter() */],
})
