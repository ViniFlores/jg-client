export default {
  state: () => ({
    navBottom: true
  }),

  mutations: {
    setNav(state, newState) {
      state.navBottom = newState
    }
  },

  getters: {
    navBottom: state => {
      return state.navBottom
    }
  },

}