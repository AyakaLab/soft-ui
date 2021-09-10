<template>
  <div class="button flex items-center justify-center">
    <div class="button-item flex items-center justify-center">
      <s-button
        :color="'#F85D7F'"
        :icon-color="'#FFFFFF'"
        :highlight-color="'#FFFFFF'"
        :highlight-icon-color="'#F85D7F'"
      >
        按钮
      </s-button>
    </div>
    <div class="button-item flex items-center justify-center">
      <s-button
        :icon="'carbon:accessibility-color'"
        :color="'#F85D7F'"
        :icon-color="'#FFFFFF'"
        :highlight-color="'#FFFFFF'"
        :highlight-icon-color="'#F85D7F'"
      >
        按钮
      </s-button>
    </div>
    <div class="button-item flex items-center justify-center">
      <s-button
        :icon="'carbon:accessibility-color'"
        :color="'#F85D7F'"
        :icon-color="'#FFFFFF'"
        :highlight-color="'#FFFFFF'"
        :highlight-icon-color="'#F85D7F'"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Menu',
  setup() {
  },
})
</script>

<style lang="css" scoped>
.button-item {
  height: 100%;
}
</style>
