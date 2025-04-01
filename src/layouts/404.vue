<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="text-black-700 px-4 py-10 text-center dark:text-gray-200">
    <div>
      <p class="text-4xl">
        <carbon-warning class="inline-block" />
      </p>
    </div>
    <RouterView />
  </main>
</template>
