<template>
  <nuxt-link :to="'/' + article.slug">
    <article
      class="flex flex-col lg:flex-row rounded-lg bg-white shadow-lg overflow-hidden text-left mt-4"
    >
      <div
        class="relative lg:h-56 h-40 w-full lg:w-1/3 lg:m-4 lg:rounded-lg lg:shadow-lg overflow-hidden"
      >
        <img class="obsolute h-full w-full object-cover" :src="img" alt="" />
      </div>
      <div class="px-6 py-4 lg:w-2/3 lg:my-auto">
        <div
          class="inline bg-purple-400 rounded-sm px-1 lg:px-2 py-px lg:py-1 text-white text-xs font-base"
        >
          {{ category }}
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mt-2">
          {{ decode(article.title.rendered) }}
        </h3>
        <div class="text-gray-600 mt-1 overflow-hidden txt">
          {{ decode(excerpt) }}
        </div>
        <div class="mt-3">
          <span href="#" class="text-indigo-500 font-semibold text-sm">{{
            date
          }}</span>
        </div>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
import he from 'he'
export default {
  name: 'ArticleRow',
  props: {
    article: {
      type: Object,
      required: true,
      default: () => {
        return {
          img: 'xxx',
          category: {
            name: 'Test Category',
          },
          title: {
            randered: 'Title',
          },
          excerpt: {
            randered: '2020-02-01',
          },
        }
      },
    },
  },
  computed: {
    date() {
      return this.article.date_gmt.split('T')[0]
    },
    img() {
      return this.article._embedded['wp:featuredmedia'][0].media_details.sizes
        .full.source_url
    },
    excerpt() {
      return this.article.excerpt.rendered.substring(
        3,
        this.article.excerpt.rendered.length - 5
      )
    },
    category() {
      return this.article._embedded['wp:term'][0][0].name
    },
  },
  methods: {
    decode(str) {
      return he.decode(str)
    },
  },
}
</script>

<style>
.txt {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
