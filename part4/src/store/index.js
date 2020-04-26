import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth'
import router from '../router'
import axiosRefresh from '../axios-refresh'


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
    login({ commit, dispatch }, authDate) {
      axios.post(
        '/accounts:signInWithPassword?key=AIzaSyC4c1SackQXBWDO3Y3zNK-Q-2tYrQxtwvc', {
          email: authDate.email,
          password: authDate.password,
          returnSecureToken: true
        }
      ).then(res => {
        commit('updateIdToken', res.data.idToken)
        setTimeout(() => {
          dispatch('refreshIdToken', res.data.refreshToken)
        }, res.data.expiresIn * 1000)
        router.push('/')
      })
    },
    refreshIdToken({ commit, dispatch }, refreshToken) {
      axiosRefresh.post(
        'token?key=AIzaSyC4c1SackQXBWDO3Y3zNK-Q-2tYrQxtwvc', {
          grant_type: 'refresh_token',
          refresh_token: refreshToken
        }
      ).then(res => {
        commit('updateIdToken', res.data.id_token)
        setTimeout(() => {
          dispatch('refreshIdToken', res.data.refresh_token)
        }, res.data.expires_in * 1000)
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
