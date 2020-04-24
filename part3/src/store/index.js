import Vue from 'vue';
import Vuex from 'vuex';
import { count } from './modules/count';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: ''
  },
  // computed プロパティ的な役割
  getters: {
    message: state => state.message
  },
  // state は mutation でしか変更しない
  // data の変更を追跡しやすく、予測しやすくする
  mutations: {
    updateMessage(state, newMessage) {
      state.message = newMessage
    }
  },
  actions: {
    updateMessage({
      commit
    }, newMessage) {
      commit("updateMessage", newMessage)
    }
  },
  modules: {
    count
  }
})
