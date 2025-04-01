<script lang="ts" setup>
import { onMounted, ref, watchEffect } from 'vue'

import LiftEffect from '../LiftEffect/index.vue'

const props = withDefaults(defineProps<{
  active?: boolean
}>(), {
  active: false,
})

const root = ref<HTMLElement>()
const baseShadow = ref(false)
const liftEnabled = ref(false)
const lifted = ref(false)

onMounted(() => {
  watchEffect(() => {
    if (props.active) {
      liftEnabled.value = true
      baseShadow.value = true
      lifted.value = true
      // 加类名
      root.value?.querySelectorAll('.v-menu-item-internal-icon').forEach((el) => {
        el.classList.add('v-menu-item--active')
      })
    }
  })
})

// 鼠标进入的时候
function handleMouseOver() {
  liftEnabled.value = true
  // 加类名
  root.value?.querySelectorAll('.v-menu-item-internal-icon').forEach((el) => {
    el.classList.add('v-menu-item--active')
  })
}
// 鼠标离开的时候
function handleMouseLeave() {
  // 如果标记为激活状态，则不改变
  if (props.active)
    return
  liftEnabled.value = false
  // 移除类名
  root.value?.querySelectorAll('.v-menu-item-internal-icon').forEach((el) => {
    el.classList.remove('v-menu-item--active')
  })
}
</script>

<template>
  <div class="w-full rounded-xl">
    <LiftEffect
      class="w-full rounded-xl"
      :enable="liftEnabled"
      :base-shadow="baseShadow"
      :lifted="lifted"
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
    >
      <div ref="root" class="v-menu-item flex flex-row items-center justify-start rounded-xl">
        <div class="v-menu-item-internal-icon flex items-center justify-center rounded-md align-middle leading-[0]">
          <span><slot name="icon" /></span>
        </div>
        <div class="v-menu-item-slot">
          <slot />
        </div>
      </div>
    </LiftEffect>
  </div>
</template>

<style>
.v-menu-item {
  padding: 10px;
  cursor: pointer;
}
.v-menu-item-internal-icon {
  padding: 20px;
  width: 20px;
  height: 20px;
  transition: all 0.2s ease-in-out;
}
.v-menu-item-slot {
  margin-left: 10px;
}
.v-menu-item .v-menu-item-internal-icon {
  --at-apply: shadow-md;
}
.v-menu-item--active {
  --at-apply: shadow-none bg-[#F85D7F] text-white font-semibold !important;
}
</style>
