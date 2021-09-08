<template>
  <v-lift-effect :classname="'rounded-xl'">
    <div class="px-[20px] py-[10px] rounded-xl">
      <slot></slot>
    </div>
  </v-lift-effect>
</template>

<script lang="ts">
export default defineComponent({
  tag: 'v-menu-item',
  name: 'MenuItem',
  setup(props, { slots }) {
  },
})
</script>
