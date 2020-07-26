<template>
  <div class="flex flex-col">
    <SideBarItem v-for="n in 10" :key="n" />
  </div>
</template>

<script>
import SideBarItem from './SideBarItem'
export default {
  components: { SideBarItem },
}
</script>

<style></style>
