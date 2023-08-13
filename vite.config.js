import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'



// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/Rizkyyoga20/kopi-torra.github.io.git',
  plugins: [vue()],
  //preview: {port: 8000,}
 })
