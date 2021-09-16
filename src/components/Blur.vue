<template>
  <div class="flex items-center justify-center flex-col">
    <s-blur class="absolute rounded-xl">
      <div class="s-card p-3 rounded-xl flex justify-center items-center text-gray-500">
        Example
      </div>
    </s-blur>
    <div class="background-pattern rounded-xl bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 flex items-center justify-center select-none">
      <span>Background Text</span>
    </div>
  </div>
</template>

<style scoped>
.s-card {
  background-color: #ffffffa9;
}
.background-pattern {
  width: 200px;
  height: 100px;
}
</style>
