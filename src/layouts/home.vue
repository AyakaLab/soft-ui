<template>
  <main class="main text-gray-700 dark:text-gray-200">
    <Header />
    <div class="section">
      <router-view />
    </div>
    <Footer />
  </main>
</template>

<style scoped>
.main {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
.section {
  margin-top: 100px;
}
</style>
