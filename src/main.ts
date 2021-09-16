// register vue composition api globally
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

import '@iconify/iconify'
import '@purge-icons/generated'

import Menu from '../packages/components/Menu'
import Button from '../packages/components/Button'
import Card from '../packages/components/Card'
import LiftEffect from '../packages/components/LiftEffect'
import Blur from '../packages/components/Blur'
import App from './App.vue'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// your custom styles here
import './styles/main.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    ctx.app.use(LiftEffect)
    ctx.app.use(Menu)
    ctx.app.use(Blur)
    ctx.app.use(Button)
    ctx.app.use(Card)

    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },
)
