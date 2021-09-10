<template>
  <div class="s-blur">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  tag: 's-blur',
  name: 'FloatCard',
})
</script>

<style lang="css" scoped>
.s-blur {
  backdrop-filter: blur(4px);
  @apply shadow-md box-content;
}
</style>
