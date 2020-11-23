import { API_URL } from '../variables'

export default {
  state: () => ({
    selectedTopic: null,
    topics: [],
    questions: [],
    actualQuestion: null,
    answers: [],
    selectedAnswer: null
  }),

  mutations: {
    setTopics(state, topics) {
      state.topics = topics
    },
    selectTopic(state, topic) {
      state.selectedTopic = topic
      state.actualQuestion = 0
    },
    setQuestions(state, questions) {
      state.questions = questions
    },
    answerQuestion(state) {
      state.answers.push(state.selectedAnswer)
      state.selectedAnswer = null
      state.actualQuestion += 1
    },
    selectAnswer(state, answer) {
      state.selectedAnswer = answer
    },
    clearData(state) {
      state.selectedTopic = null
      state.questions = []
      state.actualQuestion = null
      state.answers = []
      state.selectedAnswer = null
    }
  },

  getters: {
    selectedTopic: state => {
      return state.selectedTopic
    },
    selectedAnswer: state => {
      return state.selectedAnswer
    },
    actualQuestion: state => {
      return state.actualQuestion
    },
    allTopics: state => {
      return state.topics
    },
    questions: state => {
      return state.questions
    },
    answers: state => {
      return state.answers
    }
  },

  actions: {
    populateTopics({ commit }) {
      return new Promise((resolve, reject) => {
        console.log('GET: API_URL/questions')
        this.$axios.$get(API_URL + 'topics', { withCredentials: true }).then(r => {
          commit('setTopics', r)
          resolve(r)
        }).catch(e => {
          reject(e)
        })
      })
    },

    selectTopic({ commit }, topic) {
      return new Promise((resolve, reject) => {
        console.log('GET: API_URL/questions/' + topic.id)
        this.$axios.$get(API_URL + 'questions/' + topic.id, { withCredentials: true }).then(r => {
          commit('selectTopic', topic)
          commit('setQuestions', r)
          resolve(r)
        }).catch(e => {
          reject(e)
        })
      })
    },

    submitTopic({ commit, getters }) {
      return new Promise((resolve, reject) => {
        console.log('POST: API_URL/submissions')
        this.$axios.$post(API_URL + 'submissions/' + getters['selectedTopic'].id, { answers: getters['answers'] }, { withCredentials: true }).then(r => {
          resolve(r)
        }).catch(e => {
          reject(e)
        })
      })
    }
  },

}