<template>
  <div
    class="v-lift-effect"
    :class="classes"
    :style="styles"
    @mouseenter="handleMouseenter"
    @mousemove="handleMousemove"
    @mouseleave="handleMouseleave"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
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
    classname: {
      type: String,
      default: '',
    },
    enable: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const classNames = []
    if (props.enable)
      classNames.push('v-lift-effect--enable')

    let rect: any = null
    const styles = {}
    classNames.push((props.classname))

    if (props.radius > 0)
      (styles as any).borderRadius = `${String(props.radius)}px`

    const classes = classNames.join(' ')

    /**
     * handleMouseenter 处理鼠标进入元素的事件
     * 此处是为了模拟 :hover 状态
     */
    function handleMouseenter(event: MouseEvent) {
      const target = (event.currentTarget as HTMLElement)

      rect = target.getBoundingClientRect()
      target.style.setProperty('--scale', String(props.scale))
    }
    /**
     * handleMousemove 处理鼠标移动元素的事件
     * 实现跟随鼠标移动的效果
     */
    function handleMousemove(event: MouseEvent) {
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

      target.style.setProperty('--translateX', '0')
      target.style.setProperty('--translateY', '0')
      target.style.setProperty('--scale', '1')
    }

    return {
      handleMouseenter,
      handleMousemove,
      handleMouseleave,
      classes,
      styles,
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

.v-lift-effect--enable {
  box-shadow: 0px 6px 17px #dedede;
}

.v-lift-effect:hover {
  box-shadow: 0px 12px 22px #dedede;
}

.v-lift-effect:active {
  transform: translate(var(--translateX), var(--translateY)) scale(1);
}
</style>
