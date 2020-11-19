import axios from '@nuxtjs/axios'
import { API_URL } from './../variables'

export default {
  state: () => ({
    jwt: null,

    id: null,
    firstname: '',
    lastname: null,
    email: null,
    experience: 0
  }),

  mutations: {
    setState(state, newState) {
      state.jwt = newState.jwt
      state.id = newState.id
      state.firstname = newState.firstname
      state.lastname = newState.lastname
      state.email = newState.email
    },
    exp(state, exp) {
      state.experience = exp
    }
  },

  getters: {
    state(state) {
      return state
    },
    jwt(state) {
      return state.jwt
    },
    firstname(state) {
      return state.firstname
    },
    exp(state) {
      return state.experience
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
    },

    fetchExp({ commit }) {
      return new Promise((resolve, reject) => {
        this.$axios.$get(API_URL + 'users/exp', { withCredentials: true }).then(r => {
          if (r)
            commit('exp', r[0]['exp'])
          else
            commit('exp', 0)
          resolve(r)
        }).catch(e => {
          reject(e)
        })
      })
    }
  }
}