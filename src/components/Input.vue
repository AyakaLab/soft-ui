<template>
  <div class="space-y-5 flex flex-row flex-wrap">
    <s-card class="w-full">
      <h1 class="text-xl mb-5">
        输入框
      </h1>
      <s-input class="s-demo-input" />
    </s-card>
    <s-card>
      <h1 class="text-xl mb-5">
        带前缀/后缀的输入框
      </h1>
      <div class="space-y-5">
        <s-input :prefix="'https://'" class="s-demo-input" />
        <s-input :suffix="'@ayaka.moe'" class="s-demo-input" />
        <s-input :prefix="'https://'" :suffix="'.com'" class="s-demo-input" />
      </div>
    </s-card>
  </div>
</template>

<style scoped>
.s-demo-input {
  width: fit-content;
}
</style>
