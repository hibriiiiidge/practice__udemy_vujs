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
    async autoLogin({ commit, dispatch }) {
      const idToken = localStorage.getItem('idToken')
      if (!idToken) return
      const now = new Date()
      const expiryTimeMs = localStorage.getItem('expiryTimeMs')
      const isExpired = now.getTime() >= expiryTimeMs
      const refreshToken = localStorage.getItem('refreshToken')
      if (isExpired) {
        await dispatch('refreshIdToken', refreshToken)
      } else {
        // 有効期限が切れていない場合で、40分経過後に autoLogin が呼ばれたとする
        // setTimeout をしないとそこから1時間後に refreshIdToken されるが、
        // それだと遅く(token が切れる) 、20分後に refreshIdToken をする必要がある
        const expiresInMs = expiryTimeMs - now.getTime()
        setTimeout(() => {
          dispatch('refreshIdToken', refreshToken)
        }, expiresInMs)
        commit("updateIdToken", idToken)
      }
    },
    login({ dispatch }, authDate) {
      axios.post(
        '/accounts:signInWithPassword?key=AIzaSyC4c1SackQXBWDO3Y3zNK-Q-2tYrQxtwvc', {
          email: authDate.email,
          password: authDate.password,
          returnSecureToken: true
        }
      ).then(res => {
        dispatch('setAuthDate', {
          expiresIn: res.data.expiresIn,
          idToken: res.data.idToken,
          refreshToken: res.data.refreshToken
        })
        router.push('/')
      })
    },
    async refreshIdToken({ dispatch }, refreshToken) {
      await axiosRefresh.post(
        'token?key=AIzaSyC4c1SackQXBWDO3Y3zNK-Q-2tYrQxtwvc', {
          grant_type: 'refresh_token',
          refresh_token: refreshToken
        }
      ).then(res => {
        dispatch('setAuthDate', {
          expiresIn: res.data.expires_in,
          idToken: res.data.id_token,
          refreshToken: res.data.refresh_token
        })
      })
    },
    register({ dispatch }, authDate) {
      axios.post(
        '/accounts:signUp?key=AIzaSyC4c1SackQXBWDO3Y3zNK-Q-2tYrQxtwvc', {
          email: authDate.email,
          password: authDate.password,
          returnSecureToken: true
        }
      ).then(res => {
        dispatch('setAuthDate', {
          expiresIn: res.data.expiresIn,
          idToken: res.data.idToken,
          refreshToken: res.data.refreshToken
        })
        router.push('/')
      })
    },
    setAuthDate({ commit, dispatch }, authData) {
      const now = new Date()
      const expiryTimeMs = now.getTime() + authData.expiresIn * 1000
      commit('updateIdToken', authData.idToken)
      localStorage.setItem('idToken', authData.idToken)
      localStorage.setItem('expiryTimeMs', expiryTimeMs)
      localStorage.setItem('refreshToken', authData.refreshToken)
      // refresh token を1時間毎に更新する処理
      setTimeout(() => {
        dispatch('refreshIdToken', authData.refreshToken)
      }, authData.expiresIn * 1000)
    }
  }
})
