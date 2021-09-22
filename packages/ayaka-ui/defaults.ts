import type { App, Plugin } from 'vue'

import Components from './component'

const installer = (components: Plugin[] = []) => {
  const apps: App[] = []
  const install = (app: App) => {
    if (apps.includes(app)) return
    apps.push(app)

    components.forEach((c) => {
      app.use(c)
    })
  }

  return {
    install,
  }
}

export default installer([...Components])
