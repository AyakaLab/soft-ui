import type { App } from 'vue'
import Button from './index.vue'

export default {
  install: (app: App) => {
    app.component(Button.tag, Button)
  },
}
