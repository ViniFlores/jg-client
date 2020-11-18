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

  actions: {
    authenticate: ({ commit }, credentials) => {
      return new Promise((resolve, reject) => {
        feathersClient.authenticate({
          strategy: 'local',
          ...credentials
        }).then(r => {
          commit('setUserData', r)
          resolve(r)
        }).catch(e => reject(e))
      })
    },

  }
}