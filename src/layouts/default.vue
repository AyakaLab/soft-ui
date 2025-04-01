<script setup lang="ts">
import { RouterView } from 'vue-router'

import Footer from '../components/Footer.vue'
</script>

<template>
  <main class="m-auto max-w-screen-xl p-[10px] text-gray-700 dark:text-gray-200">
    <RouterView />
    <Footer />
  </main>
</template>
