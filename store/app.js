export default {
  state: () => ({
    id: null,
    username: '',
    email: '',
    type: null
  }),

  mutations: {
    setUserData(state, data) {
      state.id = data.user.id
      state.username = data.user.username
      state.email = data.user.email
      state.type = data.user.type
    }
  },

  getters: {
    get_user: state => {
      return {
        id: state.id,
        username: state.username,
        email: state.email,
        type: state.type
      }
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