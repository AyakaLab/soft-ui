<template>
  <s-blur class="header flex">
    <div class="header-inner flex items-center">
    </div>
  </s-blur>
</template>

<script lang="ts">
export interface HeaderTitles {
  title: string
  path: string
}

export default defineComponent({
  name: 'Header',
  props: {
    titles: {
      type: Array,
      required: true,
    },
  },
  setup() {
  },
})
</script>

<style lang="css" scoped>
.header {
  top: 0;
  position: fixed;
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
  height: 80px;
  width: 100%;
  max-width: 1280px;
  background-color: #FFFFFF63;
  border-radius: 12px;
  z-index: 999;
}

.header-inner {
  height: 100%;
}
</style>
