import type { App } from 'vue'
import InputGroup from './index.vue'

export default {
  install: (app: App) => {
    app.component(InputGroup.tag, InputGroup)
  },
}
