<template>
  <div class="flex flex-col items-start">
    <div class="mt-10 text-black">
      <span class="text-3xl">组件</span>
    </div>
    <div class="mt-10 text-black">
      <span class="text-lg">浮动效果</span>
    </div>
    <div class="flex mt-10 mb-10">
      <LiftEffect />
    </div>
    <div class="mt-10 text-black">
      <span class="text-lg">菜单</span>
    </div>
    <div class="flex mt-10 mb-10">
      <Menu />
    </div>
    <div class="mt-10 text-black">
      <span class="text-lg">浮动卡片</span>
    </div>
    <div class="flex mt-10 mb-10">
      <Blur />
    </div>
    <div class="mt-10 text-black">
      <span class="text-lg">按钮</span>
    </div>
    <div class="flex mt-10 mb-10">
      <Button />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: componentslist
</route>
