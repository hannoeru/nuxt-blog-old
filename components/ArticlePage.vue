/* eslint-disable vue/no-v-html */
<template>
  <article
    class="flex flex-col p-3 lg:p-6 rounded-lg bg-white mb-3 shadow-lg h-full mt-4"
  >
    <div
      class="relative flex rounded-lg w-full h-56 lg:h-64 overflow-hidden border-black"
    >
      <div class="relative w-full h-full">
        <img class="h-full w-full absolute object-cover" :src="img" alt="" />
      </div>
      <div class="absolute blur w-full h-full top-0 py-12 px-10 text-white">
        <div
          class="inline bg-purple-400 rounded-sm px-1 lg:px-2 py-px lg:py-1 text-xs lg:text-sm font-semibold"
        >
          {{ decode(category) }}
        </div>
        <h1 class="mt-2 lg:mt-4 text-xl lg:text-2xl font-semibold">
          {{ decode(article.title.rendered) }}
        </h1>
        <div class="mt-3 lg:mt-10 text-sm lg:text-base">
          <span>{{ date }}</span>
        </div>
      </div>
    </div>
    <div id="content" class="p-1 lg:p-6">
      <div v-html="article.content.rendered"></div>
    </div>
  </article>
</template>

<script>
import he from 'he'
export default {
  props: {
    article: {
      type: Object,
      required: true,
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

<style scoped>
.blur {
  backdrop-filter: blur(5px) grayscale(40%);
}
</style>
