<template>
  <div class="flex items-start justify-start flex-col flex-grow">
    <slot>
    </slot>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  tag: 's-menu',
  name: 'Menu',
  props: {
  },
})
</script>
