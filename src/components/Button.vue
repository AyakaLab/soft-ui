<template>
  <div class="button flex items-center justify-center space-y-5 flex-col">
    <div class="flex items-center justify-center flex-col  w-full">
      <s-card class="w-full h-full">
        <div class="mb-5">
          <h1 class="text-xl">
            纯文字按钮
          </h1>
        </div>
        <div class="width-fit-content flex space-x-2">
          <s-button
            :color="'#292929'"
            :icon-color="'#FFFFFF'"
            :highlight-color="'#FFFFFF'"
            :highlight-icon-color="'#292929'"
          >
            普通按钮
          </s-button>
          <s-button :type="'primary'">
            主要按钮
          </s-button>
          <s-button :type="'danger'">
            危险按钮
          </s-button>
          <s-button :type="'warning'">
            警告按钮
          </s-button>
          <s-button :type="'success'">
            成功按钮
          </s-button>
        </div>
      </s-card>
    </div>
    <div class="flex items-center justify-center flex-col w-full">
      <s-card lass="w-full h-full mb-5">
        <div class="mb-5">
          <h1 class="text-xl">
            图标
          </h1>
        </div>
        <div class="width-fit-content">
          <s-button
            :icon="'carbon:accessibility-color'"
            :color="'#F85D7F'"
            :icon-color="'#FFFFFF'"
            :highlight-color="'#FFFFFF'"
            :highlight-icon-color="'#F85D7F'"
          />
        </div>
      </s-card>
    </div>
    <div class="flex items-center justify-center flex-col  w-full">
      <s-card lass="w-full h-full mb-5">
        <div class="mb-5">
          <h1 class="text-xl">
            图标 + 按钮
          </h1>
        </div>
        <div class="width-fit-content">
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
      </s-card>
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

<style scoped>
.width-fit-content {
  width: fit-content;
}
</style>
