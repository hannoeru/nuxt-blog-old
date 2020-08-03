<template>
  <aside
    class="flex flex-col w-full rounded-lg bg-white shadow-lg overflow-hidden mt-4 px-6 py-4"
  >
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      検索
    </label>
    <input
      class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      placeholder="Search"
    />
  </aside>
</template>

<script>
export default {
  name: 'SideBar',
}
</script>

<style></style>
