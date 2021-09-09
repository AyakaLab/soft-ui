<template>
  <div
    ref="root"
    class="v-lift-effect"
    :style="styles"
    @mouseenter="handleMouseenter"
    @mousemove="handleMousemove"
    @mouseleave="handleMouseleave"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'

export default defineComponent({
  tag: 'v-lift-effect',
  name: 'LiftEffect',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    scale: {
      type: Number,
      default: 1.05,
    },
    radius: {
      type: [String, Number],
      default: 0,
    },
    /**
     * 是否开启浮动效果
     */
    enable: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否开启非浮动状态下的阴影效果
     */
    baseshadow: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否是浮动状态
     */
    lifted: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    let rect = reactive(new DOMRect())
    const styles = reactive({})
    const root = ref(null)

    onMounted(() => {
      const rootElement = ((root as any).value as HTMLElement)
      watchEffect(() => {
        if (props.baseshadow)
          rootElement.classList.add('v-lift-effect--default-shadow')

        if (props.radius > 0)
          (styles as any).borderRadius = `${String(props.radius)}px`

        if (props.lifted) {
          rootElement.classList.add('v-lift-effect--active')
          rootElement.style.setProperty('--scale', String(props.scale))
        }
      })
    })

    /**
     * handleMouseenter 处理鼠标进入元素的事件
     * 此处是为了模拟 :hover 状态
     */
    function handleMouseenter(event: MouseEvent) {
      if (!props.enable)
        return

      const target = (event.currentTarget as HTMLElement)

      rect = target.getBoundingClientRect()
      target.style.setProperty('--scale', String(props.scale))
      target.classList.add('v-lift-effect--active')
    }
    /**
     * handleMousemove 处理鼠标移动元素的事件
     * 实现跟随鼠标移动的效果
     */
    function handleMousemove(event: MouseEvent) {
      if (!props.enable)
        return

      const { currentTarget, clientX, clientY } = event
      const halfHeight = rect.height / 2
      const topOffset = (clientY - rect.top - halfHeight) / halfHeight
      const halfWidth = rect.width / 2
      const leftOffset = (clientX - rect.left - halfWidth) / halfWidth

      const target = (currentTarget as HTMLElement)
      target.style.setProperty('--translateX', `${leftOffset * 6}px`)
      target.style.setProperty('--translateY', `${topOffset * 4}px`)
    }

    /**
     * handleMouseleave 处理鼠标离开元素的事件
     * 此处是为了模拟 :hover 状态被重设
     */
    function handleMouseleave(event: MouseEvent) {
      const { currentTarget } = event
      const target = (currentTarget as HTMLElement)

      if (!props.enable)
        return
      if (props.lifted) {
        setTimeout(() => {
          target.style.setProperty('--translateX', '0')
          target.style.setProperty('--translateY', '0')
        }, 2000)
        return
      }

      target.style.setProperty('--translateX', '0')
      target.style.setProperty('--translateY', '0')
      target.style.setProperty('--scale', '1')
      target.classList.remove('v-lift-effect--active')
    }

    return {
      handleMouseenter,
      handleMousemove,
      handleMouseleave,
      styles,
      root,
    }
  },
})
</script>

<style scoped lang="css">
.v-lift-effect {
    transform: translate(var(--translateX), var(--translateY)) scale(var(--scale));
    --scale: 1;
    --translateX: 0;
    --translateY: 0;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.v-lift-effect--active {
  box-shadow: 0px 12px 22px #dedede !important;
}

.v-lift-effect--default-shadow {
  box-shadow: 0px 6px 17px #dedede;
}

.v-lift-effect:active {
  transform: translate(var(--translateX), var(--translateY)) scale(1);
}
</style>
