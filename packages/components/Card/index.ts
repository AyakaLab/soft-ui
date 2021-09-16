import type { App } from 'vue'
import Card from './index.vue'

export default {
  install: (app: App) => {
    app.component(Card.tag, Card)
  },
}
