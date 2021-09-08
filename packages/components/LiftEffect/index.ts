import type { App } from 'vue'
import LiftEffect from './index.vue'

export default {
  install: (app: App) => {
    app.component(LiftEffect.name, LiftEffect)
  },
}
