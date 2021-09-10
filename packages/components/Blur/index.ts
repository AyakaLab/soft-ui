import type { App } from 'vue'
import Blur from './index.vue'

export default {
  install: (app: App) => {
    app.component(Blur.tag, Blur)
  },
}
