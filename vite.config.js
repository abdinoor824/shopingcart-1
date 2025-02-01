import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: 
  [
    tailwindcss(),
    react()

  ],
  server: {
    port: process.env.PORT || 10000, // Use the port from the environment variable or default to 3000
    host: '0.0.0.0', 
    allowedHosts: ['shopingcart-1-3.onrender.com'], 
}
})
