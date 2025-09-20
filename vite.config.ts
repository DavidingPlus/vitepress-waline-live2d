import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dts from 'vite-plugin-dts'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [vue(), dts({ outDir: 'dist/types' }), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'WalineLive2d',
      fileName: format => `waline-live2d.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue', 'vitepress'],
      output: { globals: { vue: 'Vue', vitepress: 'VitePress' } }
    },
    outDir: 'dist',
    emptyOutDir: true
  }
})
