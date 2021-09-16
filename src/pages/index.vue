<template>
  <div class="nav">
    <div>
      <router-link to="/components">
        {{ t('home.components') }}
      </router-link>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
defineExpose({ t })
</script>

<style scoped lang="css">
.nav {
  top: 40px;
}
</style>
