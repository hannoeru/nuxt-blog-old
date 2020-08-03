<template>
  <main class="w-full">
    <ArticleList :articles="articles" />
  </main>
</template>

<script>
export default {
  async asyncData({ app, params, store }) {
    if (!store.state.wp.articles.length) {
      await store.dispatch('wp/getArticles')
    }
  },
  data() {
    return {}
  },
  computed: {
    articles() {
      return this.$store.state.wp.articles
    },
  },
}
</script>

<style></style>
