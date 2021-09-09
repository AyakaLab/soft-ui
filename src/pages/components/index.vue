<template>
  <div class="flex flex-col items-start">
    <div class="mt-10 text-black">
      <span class="text-3xl">组件</span>
    </div>
    <div class="mt-10 text-black">
      <span class="text-lg">浮动效果</span>
    </div>
    <div class="flex mt-10 mb-10 bg-transparent">
      <LiftEffect />
    </div>
    <div class="mt-10 text-black">
      <span class="text-lg">菜单</span>
    </div>
    <div class="flex mt-10 mb-10 bg-transparent">
      <Menu />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: componentslist
</route>
