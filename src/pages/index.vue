<script setup lang="ts">
import LiftEffect from '../components/LiftEffect.vue'
import Menu from '../components/Menu.vue'
</script>

<template>
  <div class="flex flex-col items-start gap-4 p-4">
    <div class="text-black">
      <span class="text-3xl">组件</span>
    </div>
    <div class="text-black">
      <span class="text-lg">浮动效果</span>
    </div>
    <div class="flex bg-transparent">
      <LiftEffect />
    </div>
    <div class="text-black">
      <span class="text-lg">菜单</span>
    </div>
    <div class="flex bg-transparent">
      <Menu />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: componentslist
</route>
