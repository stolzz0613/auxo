import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@atoms", replacement: path.resolve(__dirname, "src/components/atoms") },
      { find: "@molecules", replacement: path.resolve(__dirname, "src/components/molecules") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/components/pages") },
      { find: "@templates", replacement: path.resolve(__dirname, "src/components/templates") },
      { find: "@slices", replacement: path.resolve(__dirname, "src/redux/slices") },
      { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
    ],
  },
})
