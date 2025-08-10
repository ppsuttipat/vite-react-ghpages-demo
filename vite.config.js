import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ถ้าเป็น "User/Org Pages" ที่ URL = https://<username>.github.io/ ให้ตั้ง base: '/' แทน
export default defineConfig({
  plugins: [react()],
  base: '/vite-react-ghpages-demo/', // สำคัญสำหรับ Project Pages
})
