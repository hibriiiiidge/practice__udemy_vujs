import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null
  },
  getters: {
    idToken: state => state.idToken
  },
  mutations: {
    updateIdToken(state, idToken) {
      state.idToken = idToken
    }
  },
  actions: {
    login({ commit }, authDate) {
      axios.post(
        '/accounts:signInWithPassword?key=AIzaSyC4c1SackQXBWDO3Y3zNK-Q-2tYrQxtwvc', {
          email: authDate.email,
          password: authDate.password,
          returnSecureToken: true
        }
      ).then(res => {
        commit('updateIdToken', res.data.idToken)
        router.push('/')
      })
    },
    register({ commit }, authDate) {
      axios.post(
        '/accounts:signUp?key=AIzaSyC4c1SackQXBWDO3Y3zNK-Q-2tYrQxtwvc', {
          email: authDate.email,
          password: authDate.password,
          returnSecureToken: true
        }
      ).then(res => {
        commit('updateIdToken', res.data.idToken)
        router.push('/')
      })
    }
  }
})
