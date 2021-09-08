import type { App } from 'vue'
import Menu from './index.vue'
import MenuItem from './item.vue'

export default {
  install: (app: App) => {
    app.component(Menu.tag, Menu)
    app.component(MenuItem.tag, MenuItem)
  },
}
