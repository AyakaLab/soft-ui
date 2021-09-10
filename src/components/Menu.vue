<template>
  <s-menu>
    <s-menu-item
      v-for="(item, index) in menuItems"
      :key="index"
      :icon="item.icon"
      :color="item.color"
      :highlight-color="item.highlightColor"
      :icon-color="item.iconColor"
      :highlight-icon-color="item.highlightIconColor"
    >
      {{ item.label }}
    </s-menu-item>
  </s-menu>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Menu',
  setup() {
    const menuItems = reactive([
      {
        icon: 'carbon:accessibility-color',
        label: '仪表盘',
        color: '#F85D7F',
        iconColor: '#FFFFFF',
        highlightColor: '#FFFFFF',
        highlightIconColor: '#F85D7F',
      },
      {
        icon: 'carbon:aperture',
        label: '数据流',
        color: '#007AFF',
        iconColor: '#FFFFFF',
        highlightColor: '#FFFFFF',
        highlightIconColor: '#007AFF',
      },
      {
        icon: 'carbon:analytics',
        label: '统计图表',
      },
    ])

    return {
      menuItems,
    }
  },
})
</script>
