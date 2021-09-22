<template>
  <div ref="root" class="s-input flex flex-row items-center rounded-xl">
    <div v-if="hasPrefix" class="s-input--prefix py-3 px-3 bg-[#f5f8fa] rounded-l-xl">
      {{ prefix }}
    </div>
    <input type="text" :placeholder="placeholder" class="s-input--inner w-full py-3 px-5 outline-transparent" />
    <div v-if="hasSuffix" class="s-input--suffix py-3 px-3 bg-[#f5f8fa] rounded-r-xl">
      {{ suffix }}
    </div>
  </div>
</template>

<script lang="ts">
import { excludeOtherAndSetClasses } from '../../utils/classlist'

export default defineComponent({
  tag: 's-input',
  name: 'Input',
  props: {
    prefix: {
      type: String,
      default: '',
    },
    suffix: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const root = ref<HTMLElement>()
    const hasPrefix = computed(() => props.prefix.length > 0)
    const hasSuffix = computed(() => props.suffix.length > 0)

    const availbaleRoundedStyles = ['s-input--inner-rounded', 's-input--inner-prefix-rounded', 's-input--inner-suffix-rounded']
    onMounted(() => {
      root.value?.querySelectorAll('.s-input--inner').forEach((el) => {
        if (!(hasPrefix.value && hasSuffix.value))
          excludeOtherAndSetClasses(el as HTMLElement, availbaleRoundedStyles, 's-input--inner-rounded')

        if (hasPrefix.value && !hasSuffix.value)
          excludeOtherAndSetClasses(el as HTMLElement, availbaleRoundedStyles, 's-input--inner-prefix-rounded')

        if (hasSuffix.value && !hasPrefix.value)
          excludeOtherAndSetClasses(el as HTMLElement, availbaleRoundedStyles, 's-input--inner-suffix-rounded')

        if (hasSuffix.value && hasPrefix.value)
          excludeOtherAndSetClasses(el as HTMLElement, availbaleRoundedStyles, 's-input--inner-prefix-suffix-rounded')
      })
    })

    return {
      root,
      hasPrefix,
      hasSuffix,
    }
  },
})
</script>

<style scoped>
.s-input--inner {
  box-shadow: inset 0px 10px 6px 3px #f1f1f1,
            inset -0px -10px 6px 3px #ffffff;
}

.s-input--inner-rounded {
  @apply rounded-xl;
}

.s-input--inner-prefix-rounded {
  @apply rounded-r-xl border-l-[1px] border-[#f5f8fa];
}

.s-input--inner-suffix-rounded {
  @apply rounded-l-xl border-r-[1px] border-[#f5f8fa];
}

.s-input--inner-prefix-suffix-rounded {
  @apply border-r-[1px] border-[#f5f8fa];
}
</style>
