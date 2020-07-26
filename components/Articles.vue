<template>
  <main class="flex flex-col">
    <ArticleRow v-for="post in posts" :key="post.sys.id" :article="post" />
  </main>
</template>

<script>
import ArticleRow from './ArticleRow'

export default {
  components: { ArticleRow },
  props: {
    posts: {
      type: Array,
      default: null,
    },
  },
  mounted() {
    console.log(this.posts)
  },
}
</script>

<style></style>
