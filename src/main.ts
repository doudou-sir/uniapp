import { createSSRApp } from 'vue'
import App from '@/App.vue'
// import gloablComponents from './components/index'
import pinia from '@/stores'
import 'virtual:svg-icons-register'
export function createApp() {
  const app = createSSRApp(App)
  // app.use(gloablComponents)
  app.use(pinia)
  return {
    app
  }
}
