import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { webcrypto } from 'crypto' // 👈 this imports the Node polyfill

// 👇 patch crypto globally before export
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
