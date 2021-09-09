<template>
  <div class="w-full rounded-xl">
    <v-lift-effect
      class="w-full rounded-xl"
      :enable="liftEnabled"
      :baseshadow="baseShadow"
      :lifted="lifted"
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
    >
      <div ref="root" class="v-menu-item rounded-xl flex flex-row items-center justify-start">
        <div class="v-menu-item-internal-icon flex items-center justify-center align-middle leading-[0] rounded-md">
          <span><slot name="icon"></slot></span>
        </div>
        <div class="v-menu-item-slot">
          <slot></slot>
        </div>
      </div>
    </v-lift-effect>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  tag: 'v-menu-item',
  name: 'MenuItem',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
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

    return {
      handleMouseOver,
      handleMouseLeave,
      lifted,
      liftEnabled,
      baseShadow,
      root,
    }
  },
})
</script>

<style>
.v-menu-item {
  padding: 10px;
}
.v-menu-item-internal-icon {
  padding: 20px;
  width: 20px;
  height: 20px;
}
.v-menu-item-slot {
  margin-left: 10px;
}
.v-menu-item .v-menu-item-internal-icon {
  @apply shadow-md;
}
.v-menu-item--active {
  @apply shadow-none bg-[#F85D7F] text-white font-semibold !important;
}
</style>
