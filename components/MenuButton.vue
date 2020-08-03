<template>
  <div class="menu-btn" :class="{ open: open }" @click="open = !open">
    <div class="menu-btn__burger" />
  </div>
</template>

<script>
export default {
  name: 'MenuButton',
  data() {
    return {
      open: false,
    }
  },
}
</script>

<style>
.menu-btn {
  @apply relative flex justify-center items-center w-8 h-8 cursor-pointer transition-all duration-500 ease-in-out;
}

.menu-btn__burger {
  @apply w-8 h-1 bg-white rounded-full transition duration-500 ease-in-out;
}
.menu-btn__burger::before,
.menu-btn__burger::after {
  content: '';
  @apply absolute w-8 h-1 bg-white rounded-full transition duration-500 ease-in-out;
}
.menu-btn__burger::before {
  @apply transform -translate-y-3;
}
.menu-btn__burger::after {
  @apply transform translate-y-3;
}

.menu-btn.open .menu-btn__burger {
  @apply bg-transparent transform -translate-x-6;
}
.menu-btn.open .menu-btn__burger::before {
  @apply transform rotate-45 translate-x-6;
}
.menu-btn.open .menu-btn__burger::after {
  @apply transform -rotate-45 translate-x-6;
}
</style>
