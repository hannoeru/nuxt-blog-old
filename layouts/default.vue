<template>
  <div class="bg-gray-300 flex flex-col h-screen overflow-auto">
    <NavBar />
    <div class="container mx-auto lg:mt-6 p-2">
      <div class="flex flex-col lg:flex-row">
        <Nuxt class="w-full lg:w-3/4" />
        <SideBar class="w-full lg:w-1/4 ml-3" />
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
export default {
  components: { SideBar, NavBar },
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
