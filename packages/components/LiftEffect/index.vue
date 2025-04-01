<script setup lang="ts">
import type { CSSProperties } from 'vue'

import { reactive, ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  scale?: number
  radius?: number
  enable?: boolean
  baseShadow?: boolean
  lifted?: boolean
}>(), {
  scale: 1.05,
  radius: 0,
  enable: true,
  baseShadow: true,
  lifted: false,
})

let rect = reactive(new DOMRect())
const styles = reactive<CSSProperties>({})
const root = ref<HTMLDivElement | undefined>()

watch([() => props.baseShadow, root], ([value]) => {
  if (value)
    root.value.classList.add('v-lift-effect--default-shadow')
  else
    root.value.classList.remove('v-lift-effect--default-shadow')
})

watch(() => props.radius, (value) => {
  if (value && value > 0)
    styles.borderRadius = `${String(value)}px`
  else
    styles.borderRadius = '0px'
})

watch([() => props.lifted, root], ([value]) => {
  if (value && root.value) {
    root.value.classList.add('v-lift-effect--active')
    root.value.style.setProperty('--scale', String(props.scale))
  }
})

/**
 * handleMouseenter 处理鼠标进入元素的事件
 * 此处是为了模拟 :hover 状态
 */
function handleMouseenter(event: MouseEvent) {
  if (!props.enable)
    return

  const target = event.currentTarget as HTMLElement

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

  const target = currentTarget as HTMLElement
  target.style.setProperty('--translateX', `${leftOffset * 6}px`)
  target.style.setProperty('--translateY', `${topOffset * 4}px`)
}

/**
 * handleMouseleave 处理鼠标离开元素的事件
 * 此处是为了模拟 :hover 状态被重设
 */
function handleMouseleave(event: MouseEvent) {
  const { currentTarget } = event
  const target = currentTarget as HTMLElement

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
</script>

<template>
  <div
    ref="root"
    class="v-lift-effect"
    :style="styles"
    @mouseenter="handleMouseenter"
    @mousemove="handleMousemove"
    @mouseleave="handleMouseleave"
  >
    <slot />
  </div>
</template>

<style>
.v-lift-effect {
  transform: translate(var(--translateX), var(--translateY)) scale(var(--scale));
  --scale: 1;
  --translateX: 0;
  --translateY: 0;
  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;
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
