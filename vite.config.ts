import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'

import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unocss({
      presets: [presetAttributify(), presetUno()]
    }),

    Vue({
      include: [/\.vue$/, /\.md$/]
    }),

    Pages({
      extensions: ['vue', 'md'],
      exclude: ['**/components/*.vue']
    }),

    AutoImport({
      imports: ['vue', 'vue-router']
    }),

    Components({
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    }),

    Inspect()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
