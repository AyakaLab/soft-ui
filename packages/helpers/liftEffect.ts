import type { App } from 'vue'

export interface LiftEffectOptions {
  scale: number
}

export default {
  install: (app: App, options?: LiftEffectOptions) => {
    let scale = options?.scale
    if (scale == null || typeof scale !== 'number' || scale <= 0)
      scale = 1.05

    app.mixin({
      mounted() {
        const allMarkedElements = document.querySelectorAll('[data-ayaka-lift]')
        allMarkedElements.forEach((element) => {
          element.classList.add('ayaka-lift')
          let rect: any = null

          // 模拟 :active 状态
          element.addEventListener('mousedown', (event) => {
            const { currentTarget } = event as MouseEvent
            (currentTarget as HTMLElement).style.setProperty('--scale', '1')
          })
          // 模拟 :active 状态（鼠标抬起时恢复）
          element.addEventListener('mouseup', (event) => {
            const { currentTarget } = event as MouseEvent
            (currentTarget as HTMLElement).style.setProperty('--scale', String(scale))
          })

          // 模拟 :hover 状态
          element.addEventListener('mouseenter', (event) => {
            const { currentTarget } = event as MouseEvent
            const target = (currentTarget as HTMLElement)

            rect = target.getBoundingClientRect()
            target.style.setProperty('--scale', String(scale))
          }, { passive: true })
          // 跟随鼠标移动
          element.addEventListener('mousemove', (event) => {
            const { currentTarget, clientX, clientY } = event as MouseEvent
            const halfHeight = rect.height / 2
            const topOffset = (clientY - rect.top - halfHeight) / halfHeight
            const halfWidth = rect.width / 2
            const leftOffset = (clientX - rect.left - halfWidth) / halfWidth

            const target = (currentTarget as HTMLElement)
            target.style.setProperty('--translateX', `${leftOffset * 6}px`)
            target.style.setProperty('--translateY', `${topOffset * 4}px`)
          }, { passive: true })
          // 模拟 :hover 状态（鼠标移出时恢复）
          element.addEventListener('mouseleave', (event) => {
            const { currentTarget } = event as MouseEvent
            const target = (currentTarget as HTMLElement)

            target.style.setProperty('--translateX', '0')
            target.style.setProperty('--translateY', '0')
            target.style.setProperty('--scale', '1')
          }, { passive: true })
        })
      },
    })
  },
}
