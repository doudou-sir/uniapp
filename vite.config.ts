import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import eslintPlugin from 'vite-plugin-eslint'
import viteRestart from 'vite-plugin-restart'
import autoImport from 'unplugin-auto-import/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import svgLoader from 'vite-svg-loader'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // 配置vite在运行的时候自动检测eslint规范
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.js', 'src/**/*.vue', 'src/*.ts', 'src/*.js', 'src/*.vue']
    }),
    viteRestart({
      restart: ['vite.config.ts']
    }),
    autoImport({
      imports: ['vue'],
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      eslintrc: {
        enabled: false, // 默认false, true启用。生成一次就可以，避免每次工程启动都生成
        filepath: './.eslintrc-auto-import.json', // 生成json文件
        globalsPropValue: true
      },
      dts: 'src/auto-import.d.ts'
    }),
    createSvgIconsPlugin({
      // 指定 SVG图标 保存的文件夹路径
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      // 指定 使用svg图标的格式
      symbolId: 'icon-[dir]-[name]'
    }),
    svgLoader()
  ],
  // 解析模块路径
  resolve: {
    // 别名
    alias: {
      // 将@解析为当前工作目录下的src文件夹
      '@': path.join(__dirname, './src/*')
    }
  },
  // 服务器配置
  server: {
    // 主机地址
    host: '0.0.0.0',
    // 开启hmr
    hmr: true,
    // 端口号
    port: 7001,
    // 自定义代理规则
    proxy: {
      // 选项写法
      '/api': {
        // 目标地址
        target: 'http://localhost:6666',
        // 是否改变源
        changeOrigin: true,
        // 重写路径
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 全局 scss 变量
        additionalData: `@import "@/uni.scss";`
      }
    }
  }
})
