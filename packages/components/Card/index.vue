<template>
  <div class="w-full h-full">
    <div class="shadow-md p-5 rounded-xl">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  tag: 's-card',
  name: 'Card',
  setup() {
  },
})
</script>
