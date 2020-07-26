<template>
  <header>
    <div class="container navbar flex items-center justify-between mx-auto p-2">
      <nuxt-link to="/">
        <h1 class="text-xl lg:text-4xl font-semibold">ハンのブログ</h1>
      </nuxt-link>
      <div class="flex flex-wrap">
        <nuxt-link to="/" class="px-3">關於我</nuxt-link>
        <nuxt-link to="/" class="px-3">作品集</nuxt-link>
        <nuxt-link to="/" class="px-3">Blog</nuxt-link>
        <nuxt-link to="/" class="px-3">Github</nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style>
.navbar {
  height: 80px;
}
</style>
