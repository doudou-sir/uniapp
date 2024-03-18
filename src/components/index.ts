import DouIcon from './dou-icon.vue'
import type { App, Component } from 'vue'
const components: { [name: string]: Component } = { DouIcon }
export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  }
}
