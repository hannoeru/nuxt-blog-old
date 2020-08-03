export const state = {
  showNavBar: false,
}

export const mutations = {
  toggleNavBar(state) {
    state.showNavBar = !state.showNavBar
  },
}
