export const state = () => ({
  article: {},
  articles: [],
  categories: [],
})

export const mutations = {
  addArticles(state, list) {
    state.articles = list
  },
  addArticle(state, list) {
    state.article = list
  },
  addCategories(state, list) {
    state.categories = list
  },
}

export const actions = {
  async getArticles({ commit }) {
    const articles = await this.$wp.get('posts', {
      params: {
        _embed: 'wp:featuredmedia,wp:term',
      },
    })
    commit('addArticles', articles.data)
  },
  async getArticle({ commit }, slug) {
    const article = await this.$wp.get('posts', {
      params: {
        _embed: 'wp:featuredmedia,wp:term',
        slug,
      },
    })
    commit('addArticle', article.data[0])
  },
  async getCategories({ commit }) {
    const categories = await this.$wp.get('categories')
    commit('addCategories', categories.data)
  },
}
