<template>
  <section
    class="flex flex-col p-3 lg:p-6 rounded-lg bg-white bg-opacity-75 mb-3 shadow-sm h-full"
  >
    <div
      class="box-content relative flex rounded-lg shadow-lg w-full h-64 overflow-hidden border-black"
    >
      <div class="relative w-full h-full">
        <img
          class="blur h-full w-full absolute object-cover"
          :src="article.fields.thumbnail.fields.file.url"
          alt=""
        />
      </div>
      <div class="absolute top-0 p-10 text-white">
        <div
          class="inline bg-purple-400 rounded-sm px-1 lg:px-2 py-px lg:py-1 text-xs lg:text-sm font-semibold"
        >
          {{ article.fields.category }}
        </div>
        <h2 class="mt-1 lg:mt-4 text-md md:text-xl lg:text-2xl font-medium">
          {{ article.fields.title }}
          tetd hoi hoih oho h hoh o
        </h2>
        <div class="mt-1 lg:mt-10 text-xs lg:text-base">
          <span>{{ article.sys.updatedAt.split('T')[0] }}</span>
        </div>
      </div>
    </div>
    <div class="mt-10 p-6">
      <div v-html="toHtmlString(article.fields.content)"></div>
    </div>
  </section>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
export default {
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
  methods: {
    toHtmlString(obj) {
      return documentToHtmlString(obj)
    },
  },
}
</script>

<style scoped>
.blur {
  filter: blur(5px) grayscale(40%);
}
</style>
