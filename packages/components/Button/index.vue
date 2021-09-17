<template>
  <s-lift-effect
    class="s-button"
    :style="buttonStyle"
    :enable="liftEnabled"
    :baseshadow="baseShadow"
    :lifted="lifted"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
  >
    <div ref="root" :class="innerClass">
      <div v-if="icon !== ''" :class="innerIconClass">
        <span class="iconify" :data-icon="icon" data-inline="false" :style="style"></span>
      </div>
      <div v-if="hasSlot" :class="innerSlotClass">
        <span class="select-none"><slot></slot></span>
      </div>
    </div>
  </s-lift-effect>
</template>

<script lang="ts">
import { defaultColors } from './constants'

export default defineComponent({
  tag: 's-button',
  name: 'Button',
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
    type: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'md',
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
    const buttonStyle = reactive({})
    const innerClass = computed(() => {
      const innerClasses = hasSlot.value
        ? 'p-3 s-button-inner'
        : 'p-0 s-button-inner'
      return innerClasses
    })
    const innerIconClass = computed(() => {
      return 'p-2 s-button-inner-icon'
    })
    const innerSlotClass = computed(() => {
      return (props.icon !== '' && hasSlot.value) ? 's-button-slot s-button-slot-all' : 's-button-slot s-button-slot-text'
    })

    const iconColor = ref('')
    const highlightIconColor = ref('')
    const color = ref('')
    const highlightColor = ref('')
    const buttonType = ref('')
    const buttonSize = ref('')

    const isTextOnlyButton = computed(() => {
      return hasSlot.value && props.icon === ''
    })
    const isIconOnlyButton = computed(() => {
      return !hasSlot.value && props.icon !== ''
    })
    const isCombinedButton = computed(() => {
      return hasSlot.value && props.icon !== ''
    })

    function setTextOnlyDefaultColor() {
      if (buttonType.value === '')
        return
      if (!isTextOnlyButton.value)
        return

      const btnStyle: any = buttonStyle
      const selectedColor = (defaultColors as any)[buttonType.value]

      iconColor.value = selectedColor
      highlightIconColor.value = selectedColor
      color.value = '#FFFFFF'
      highlightColor.value = '#FFFFFF'
      btnStyle.backgroundColor = selectedColor
    }

    function setIconOnlyDefaultColor() {
      if (buttonType.value === '')
        return
      if (!isIconOnlyButton.value)
        return

      const selectedColor = (defaultColors as any)[buttonType.value]

      iconColor.value = selectedColor
      highlightIconColor.value = '#FFFFFF'
      color.value = '#FFFFFF'
      highlightColor.value = selectedColor
    }

    function setCombinedDefaultColor() {
      if (buttonType.value === '')
        return
      if (!isCombinedButton.value)
        return

      const selectedColor = (defaultColors as any)[buttonType.value]

      iconColor.value = '#FFFFFF'
      highlightIconColor.value = selectedColor
      color.value = selectedColor
      highlightColor.value = '#FFFFFF'
    }

    watchEffect(() => {
      buttonType.value = props.type
      iconColor.value = props.iconColor
      highlightIconColor.value = props.highlightIconColor
      color.value = props.color
      highlightColor.value = props.highlightColor

      buttonSize.value = props.size
      setTextOnlyDefaultColor()
      setIconOnlyDefaultColor()
      setCombinedDefaultColor()
      setDefaultSize()
    })

    onMounted(() => {
      watchEffect(() => {
        if (isTextOnlyButton.value)
          baseShadow.value = true
        if (props.active) {
          liftEnabled.value = true
          baseShadow.value = true
          lifted.value = true
          // 加类名
          root.value?.querySelectorAll('.s-button-inner-icon').forEach((el) => {
            const elem = el as HTMLElement
            elem.classList.add('s-button-inner--active')
            elem.style.setProperty('--color', highlightColor.value)
            elem.style.setProperty('--iconcolor', highlightIconColor.value)
            currentIconColor.value = highlightIconColor.value
          })
        }

        root.value?.querySelectorAll('.s-button-inner-icon').forEach((el) => {
          const elem = el as HTMLElement
          elem.style.setProperty('--color', color.value)
          elem.style.setProperty('--iconcolor', iconColor.value)
        })
        root.value?.querySelectorAll('.s-button-slot').forEach((el) => {
          const elem = el as HTMLElement
          elem.style.setProperty('--color', color.value)
          elem.style.setProperty('--iconcolor', iconColor.value)
        })
      })
    })

    function setDefaultSize() {
      if (!hasSlot.value)
        return

      const allAvailableSizes = ['xs', 'sm', 'md', 'lg', 'xl']
      root.value?.querySelectorAll('.s-button-slot').forEach((el) => {
        const elem = el as HTMLElement
        const pendingRemoval = allAvailableSizes.filter(item => item !== buttonSize.value)
        pendingRemoval.forEach(item => elem.classList.remove(item))
        elem.classList.add(`text-${buttonSize.value}`)
      })
    }

    // 鼠标进入的时候
    function handleMouseOver() {
      _hanldeForNormalCase()
    }

    function _hanldeForNormalCase() {
      liftEnabled.value = true
      // 加类名
      root.value?.querySelectorAll('.s-button-inner-icon').forEach((el) => {
        const elem = el as HTMLElement
        elem.classList.add('s-button-inner--active')
        elem.style.setProperty('--color', highlightColor.value)
        elem.style.setProperty('--iconcolor', highlightIconColor.value)
        currentIconColor.value = highlightIconColor.value
      })
    }

    // 鼠标离开的时候
    function handleMouseLeave() {
      _handleForNormalCase()
    }

    function _handleForNormalCase() {
      // 如果标记为激活状态，则不改变
      if (props.active)
        return
      liftEnabled.value = false
      // 移除类名
      root.value?.querySelectorAll('.s-button-inner-icon').forEach((el) => {
        const elem = el as HTMLElement
        elem.classList.remove('s-button-inner--active')
        elem.style.setProperty('--color', color.value)
        elem.style.setProperty('--iconcolor', iconColor.value)
        currentIconColor.value = iconColor.value
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
      buttonStyle,
      hasSlot,
      innerClass,
      innerIconClass,
      innerSlotClass,
    }
  },
})
</script>

<style>
.s-button {
  @apply w-full rounded-xl;
  height: fit-content;
  background-color: var(--iconcolor);
}
.s-button-inner {
  @apply rounded-xl flex flex-row items-center justify-start;
}
.s-button-inner-icon {
  width: fit-content;
  height: fit-content;
  line-height: 0;
  font-size: 16px;
  color: var(--color);
  background-color: var(--iconcolor);
  border-radius: 12px;
  @apply flex items-center justify-center align-middle;
}
.s-button-slot-all {
  margin-left: 10px;
  @apply overflow-hidden whitespace-nowrap;
  color: var(--color);
}
.s-button-slot-text {
  @apply overflow-hidden whitespace-nowrap;
  color: var(--color);
}
.s-button-inner .s-button-inner-icon {
  @apply shadow-md !important;
}
.s-button-inner--active {
  box-shadow: none !important;
  @apply font-semibold !important;
}
</style>
