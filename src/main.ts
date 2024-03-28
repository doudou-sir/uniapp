import { createSSRApp } from 'vue'
import App from '@/App.vue'
import pinia from '@/stores'
import '@/static/styles/index.scss'
// import { pxToRpx, rpxToPx } from '@/utils/helper'

// import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  // 全局挂载单位转换函数
  // app.config.globalProperties.$pxToRpx = pxToRpx
  // app.config.globalProperties.$rpxToPx = rpxToPx
  return {
    app
  }
}
