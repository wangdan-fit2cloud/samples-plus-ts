import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      // gzip静态资源压缩配置
      verbose: true,     // 是否在控制台输出压缩结果
      disable: false,    // 是否禁用压缩
      threshold: 10240,  // 启用压缩的文件大小限制
      algorithm: 'gzip', // 采用的压缩算法
      ext: '.gz', // 生成的压缩包后缀
    }),
    DefineOptions(),
    svgLoader(),
    visualizer()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    minify: 'terser',
    emptyOutDir: true, //打包前先清空原有打包文件
    //生产环境时移除console
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        // 用于命名代码拆分时创建的共享块的输出命名
        chunkFileNames: (chunkInfo) => {
          const { name, isDynamicEntry } = chunkInfo
          if (isDynamicEntry) {
            return `js/views/${name}-[hash].js`
          }
          return `js/vendor/${name}-[hash].js`
        },
        // 用于从入口点创建的块的打包输出格式
        entryFileNames: `js/[name]-[hash].js`,
        // 用于输出静态资源的命名，打包后的目录中可能会出现png、jpg、svg、ttf、gif等目录。
        // assetFileNames: `assets/[ext]/[name]-[hash].[ext]`,
        manualChunks(id: string) {
          // 根据不同模块
          if (id.includes('/src/views/')) {
            return id.toString().split('/src/views/')[1].split('/')[0]
          }
          if (id.includes('node_modules')) {
            if (id.includes('vue')) {
              return 'vue'
            } else if (id.includes('element-plus')) {
              return 'element-plus'
            } else if (id.includes('fit2cloud-ui-plus')) {
              return 'fit2cloud-ui-plus'
            } else if (id.includes('axios')) {
              return 'axios'
            }
            return 'vendor'
          }
        }
      }
    }
  },
  server: {
  }
})
