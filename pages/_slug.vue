<template>
  <ArticlePage :article="article" />
</template>

<script>
import ArticlePage from '@/components/ArticlePage'

export default {
  components: { ArticlePage },
  async asyncData({ params, store }) {
    await store.dispatch('wp/getArticle', params.slug)
  },
  computed: {
    article() {
      return this.$store.state.wp.article
    },
  },
}
</script>

<style></style>
