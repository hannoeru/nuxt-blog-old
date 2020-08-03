<template>
  <div class="flex flex-col">
    <ArticleRow
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script>
import ArticleRow from './ArticleRow.vue'

export default {
  components: { ArticleRow },
  props: {
    articles: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style></style>
