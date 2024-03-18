import { createSSRApp } from 'vue'
import App from '@/App.vue'
// import gloablComponents from './components/index'
import 'virtual:svg-icons-register'
export function createApp() {
  const app = createSSRApp(App)
  // app.use(gloablComponents)
  return {
    app
  }
}
