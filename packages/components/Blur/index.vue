<template>
  <div class="s-blur shadow-md box-content">
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
}
</style>
