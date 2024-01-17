import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "src/styles/variables.scss" as *;
          @use "src/styles/mixins.scss" as *;
        `,
      },
    },
  },
  plugins: [react()],
})
