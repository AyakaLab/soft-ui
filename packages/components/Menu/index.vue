<template>
  <div class="space-y-5">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  tag: 'v-menu',
  name: 'Menu',
  setup(props, { slots }) {
  },
})
</script>
