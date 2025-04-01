<script setup lang="ts">
import Menu from '../../packages/components/Menu/index.vue'
import MenuItem from '../../packages/components/Menu/item.vue'
</script>

<template>
  <Menu>
    <MenuItem>
      <template #icon>
        <div i-carbon-accessibility-color />
      </template>
      仪表盘
    </MenuItem>
    <MenuItem>
      <template #icon>
        <div i-carbon-aperture />
      </template>
      数据流
    </MenuItem>
    <MenuItem>
      <template #icon>
        <div i-carbon-analytics />
      </template>
      统计图表
    </MenuItem>
  </Menu>
</template>
