<template>
  <div class="flex items-center justify-center flex-col">
    <s-blur class="absolute">
      <div class="s-card flex justify-center items-center text-white">
        Example
      </div>
    </s-blur>
    <div class="background-pattern rounded-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center select-none">
      <span>Background Text</span>
    </div>
  </div>
</template>

<style scoped>
.s-card {
  padding: 10px;
  border-radius: 8px;
  background-color: #FFFFFF63;
}
.background-pattern {
  width: 200px;
  height: 100px;
}
</style>
