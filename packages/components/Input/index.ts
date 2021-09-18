import type { App } from 'vue'
import Input from './index.vue'

export default {
  install: (app: App) => {
    app.component(Input.tag, Input)
  },
}
