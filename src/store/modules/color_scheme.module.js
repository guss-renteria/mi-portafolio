const color_schemes = [
  'dark',
  'light',
]

let id = 0

export default {
  state: () => ({
    current: color_schemes[id],
  }),

  mutations: {
    nextColorScheme(state) {
      id = ( id + 1 ) % color_schemes.length
      state.code = color_schemes[id]
    }
  },

  actions: {
    nextColorScheme({ commit }) {
      commit('nextColorScheme')
    }
  },

  getters: {
    getColorSchemes() {
      return color_schemes
    }
  }
}
