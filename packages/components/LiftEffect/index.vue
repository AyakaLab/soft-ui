<template>
  <div
    class="v-lift-effect"
    @mouseenter="handleMouseenter"
    @mousemove="handleMousemove"
    @mouseleave="handleMouseleave"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default defineComponent({
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
  },
  setup(props, { slots }) {
    let rect: any = null

    // 模拟 :hover 状态
    function handleMouseenter(event: MouseEvent) {
      const target = (event.currentTarget as HTMLElement)

      rect = target.getBoundingClientRect()
      target.style.setProperty('--scale', String(props.scale))
    }
    // 跟随鼠标移动
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

    // 模拟 :hover 状态（鼠标移出时恢复）
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
    transition: transform 0.1s ease;
}

.v-lift-effect:active {
  transform: translate(var(--translateX), var(--translateY)) scale(1);
}
</style>
