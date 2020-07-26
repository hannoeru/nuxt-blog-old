<template>
  <nuxt-link :to="`/posts/${article.sys.id}`">
    <section
      class="flex p-3 lg:p-6 rounded-lg bg-white bg-opacity-75 mb-3 shadow-sm"
    >
      <div class="relative img overflow-hidden rounded-lg shadow-xl w-1/3">
        <img
          class="h-full w-full absolute object-cover"
          :src="article.fields.thumbnail.fields.file.url"
          alt=""
        />
      </div>
      <div class="inner ml-4 lg:ml-10 my-auto w-2/3">
        <div
          class="inline bg-purple-400 rounded-sm px-1 lg:px-2 py-px lg:py-1 text-white text-xs lg:text-sm font-semibold"
        >
          {{ article.fields.category }}
        </div>
        <h2 class="mt-1 lg:mt-4 text-md md:text-xl lg:text-2xl font-medium">
          {{ article.fields.title }}
          tetd hoi hoih oho h hoh o
        </h2>
        <p class="mt-2 lg:mt-4 text-gray-500 w-2/3 md:block hidden">
          {{ article.fields.description }} so i and have so many fun haha that
          you know what i am talking about so is that too long?
        </p>
        <div class="mt-1 lg:mt-4 text-gray-600 text-xs lg:text-base">
          <span>{{ article.sys.updatedAt.split('T')[0] }}</span>
        </div>
      </div>
    </section>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ArticleRow',
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style scoped>
.img {
  width: 25vw;
  height: 25vw;
  max-width: 220px;
  max-height: 220px;
  min-width: 100px;
  min-height: 100px;
}
</style>
