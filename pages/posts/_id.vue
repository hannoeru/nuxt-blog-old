<template>
  <Article :article="post" />
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { createClient } from '@/plugins/contentful'
import Article from '@/components/Article'

const client = createClient()

export default {
  components: { Article },
  async asyncData({ params, payload }) {
    // payloadのデータがあれば、そちらから取得する
    if (payload) return { post: payload }
    const entry = await client.getEntry(params.id)
    return {
      post: entry,
    }
  },
  methods: {
    toHtmlString(obj) {
      return documentToHtmlString(obj)
    },
  },
}
</script>

<style></style>
