// noinspection JSUnusedGlobalSymbols

import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import {viteStaticCopy} from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      viteStaticCopy({
        targets: [{
            src: "CNAME",
            dest: "."
        }]
      })
  ],
  server: {
    host: '0.0.0.0',
    port: 3001
  },
  build: {
    outDir: 'dist',
  },
})
