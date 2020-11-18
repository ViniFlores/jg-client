import axios from '@nuxtjs/axios'
import { API_URL } from './../variables'

export default {
  state: () => ({
    jwt: null,

    id: null,
    firstname: null,
    lastname: null,
    email: null,
  }),

  mutations: {
    setState(state, newState) {
      state.jwt = newState.jwt
      state.id = newState.id
      state.firstname = newState.firstname
      state.lastname = newState.lastname
      state.email = newState.email
    }
  },

  getters: {
    state(state) {
      return state
    },
    jwt(state) {
      return state.jwt
    }
  },

  actions: {
    login({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        this.$axios.$post(API_URL + 'users/login', credentials, { withCredentials: true }).then(r => {
          commit('setState', r)
          console.log(r)
          resolve(r)
        }).catch(e => {
          reject(e)
        })
      })
    }
  }
}