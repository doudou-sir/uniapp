import { createSSRApp } from 'vue'
import App from '@/App.vue'
// import gloablComponents from './components/index'
import pinia from '@/stores'
import uviewPlus from 'uview-plus'
import 'virtual:svg-icons-register'
import 'uno.css'
import '@/static/styles/index.scss'

uni.$u.config.unit = 'rpx'

export function createApp() {
  const app = createSSRApp(App)
  // app.use(gloablComponents)
  app.use(pinia)
  app.use(uviewPlus)
  return {
    app
  }
}
