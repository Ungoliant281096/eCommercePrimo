import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/BLogin': 'http://localhost:1717/', // Reemplazar con la URL del backend si es diferente
      '/BRegistro': 'http://localhost:1717/', // Reemplazar con la URL del backend si es diferente
    },
  },
})