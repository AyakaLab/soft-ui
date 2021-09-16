<template>
  <s-lift-effect
    class="s-menu-item-base"
    :enable="liftEnabled"
    :baseshadow="baseShadow"
    :lifted="lifted"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
  >
    <div ref="root" class="s-menu-item rounded-xl flex flex-row items-center justify-start">
      <div v-if="icon !== ''" class="s-menu-item-internal-icon flex items-center justify-center align-middle">
        <span class="iconify" :data-icon="icon" data-inline="false" :style="style"></span>
      </div>
      <div v-if="hasSlot" class="s-menu-item-slot">
        <slot></slot>
      </div>
    </div>
  </s-lift-effect>
</template>

<script lang="ts">
export default defineComponent({
  tag: 's-menu-item',
  name: 'MenuItem',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#000000',
    },
    highlightColor: {
      type: String,
      default: '#FFFFFF',
    },
    iconColor: {
      type: String,
      default: '#FFFFFF',
    },
    highlightIconColor: {
      type: String,
      default: '#000000',
    },
  },
  setup(props, { slots }) {
    const root = ref<HTMLElement>()
    const baseShadow = ref(false)
    const liftEnabled = ref(false)
    const lifted = ref(false)
    const currentIconColor = ref('')
    const hasSlot = computed(() => {
      return !!slots.default
    })
    const style = computed(() => {
      return { color: currentIconColor.value }
    })

    onMounted(() => {
      watchEffect(() => {
        if (props.active) {
          liftEnabled.value = true
          baseShadow.value = true
          lifted.value = true
          // 加类名
          root.value?.querySelectorAll('.s-menu-item-internal-icon').forEach((el) => {
            const elem = el as HTMLElement
            elem.classList.add('s-menu-item--active')
            elem.style.setProperty('--color', props.highlightColor)
            elem.style.setProperty('--iconcolor', props.highlightIconColor)
            currentIconColor.value = props.highlightIconColor
          })
        }

        root.value?.querySelectorAll('.s-menu-item-internal-icon').forEach((el) => {
          const elem = el as HTMLElement
          elem.style.setProperty('--color', props.color)
          elem.style.setProperty('--iconcolor', props.iconColor)
        })
      })
    })

    // 鼠标进入的时候
    function handleMouseOver() {
      liftEnabled.value = true
      // 加类名
      root.value?.querySelectorAll('.s-menu-item-internal-icon').forEach((el) => {
        const elem = el as HTMLElement
        elem.classList.add('s-menu-item--active')
        elem.style.setProperty('--color', props.highlightColor)
        elem.style.setProperty('--iconcolor', props.highlightIconColor)
        currentIconColor.value = props.highlightIconColor
      })
    }
    // 鼠标离开的时候
    function handleMouseLeave() {
      // 如果标记为激活状态，则不改变
      if (props.active)
        return
      liftEnabled.value = false
      // 移除类名
      root.value?.querySelectorAll('.s-menu-item-internal-icon').forEach((el) => {
        const elem = el as HTMLElement
        elem.classList.remove('s-menu-item--active')
        elem.style.setProperty('--color', props.color)
        elem.style.setProperty('--iconcolor', props.iconColor)
        currentIconColor.value = props.iconColor
      })
    }

    return {
      handleMouseOver,
      handleMouseLeave,
      lifted,
      liftEnabled,
      baseShadow,
      root,
      style,
      hasSlot,
    }
  },
})
</script>

<style>
.s-menu-item-base {
  width: 100%;
  border-radius: 12px;
}
.s-menu-item {
  padding: 10px;
}
.s-menu-item-internal-icon {
  width: fit-content;
  height: fit-content;
  padding: 10px;
  line-height: 0;
  font-size: 16px;
  color: var(--color);
  background-color: var(--iconcolor);
  border-radius: 12px;
}
.s-menu-item-slot {
  margin-left: 10px;
}
.s-menu-item .s-menu-item-internal-icon {
  @apply shadow-md;
}
.s-menu-item--active {
  @apply shadow-none font-semibold !important;
}
</style>
