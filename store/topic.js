import { API_URL } from './../variables'

export default {
  state: () => ({
    selected: null,
    topics: []
  }),

  mutations: {
    navBottom(state, newState) {
      state.selected = newState
    },
    setTopics(state, topics) {
      state.topics = topics
    }
  },

  getters: {
    selected: state => {
      return state.selected
    },
    all: state => {
      return state.topics
    }
  },

  actions: {
    populate({ commit }, state) {
      return new Promise((resolve, reject) => {
        this.$axios.$get(API_URL + 'topics', { withCredentials: true }).then(r => {
          console.log()
          commit('setTopics', r)
          resolve(r)
        }).catch(e => {
          reject(e)
        })
      })
    }
  },

}