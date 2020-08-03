<template>
  <div class="bg-gray-100 h-screen">
    <NavBar />
    <div class="container px-4 flex flex-col lg:flex-row mx-auto pb-4">
      <div class="w-full lg:w-3/4">
        <nuxt />
      </div>
      <div class="w-full lg:w-1/4 lg:ml-4">
        <SideBar />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style></style>
