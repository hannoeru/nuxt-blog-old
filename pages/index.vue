<template>
  <Articles :posts="posts" />
</template>

<script>
import { createClient } from '../plugins/contentful'
const client = createClient()

export default {
  async asyncData({ params }) {
    // 記事一覧を取得
    const entries = await client.getEntries({
      content_type: process.env.CTFL_CONTENT_TYPE_POST,
      order: '-sys.createdAt',
    })
    return {
      posts: entries.items,
    }
  },
  data() {
    return {
      posts: [],
    }
  },
}
</script>

<style></style>
