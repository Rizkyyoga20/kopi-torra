import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //preview: {port: 8000,}
 })
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/kopi-torra.github.io.git/" : "/",
};