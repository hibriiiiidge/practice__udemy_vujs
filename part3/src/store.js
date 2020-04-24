import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 2,
    message: ''
  },
  // computed プロパティ的な役割
  getters: {
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3,
    message: state => state.message
    // tripleCount(state) {
    //   return state.count * 3
    // }
  },
  // state は mutation でしか変更しない
  // data の変更を追跡しやすく、予測しやすくする
  mutations: {
    increment(state, number) {
      state.count += number
    },
    decrement(state, number) {
      state.count -= number
    },
    updateMessage(state, newMessage) {
      state.message = newMessage
    }
  },
  actions: {
    // increment(context, number) {
    //   context.commit("increment", number)
    // },
    increment({ commit }, number) {
      commit("increment", number)
    },
    decrement({ commit }, number) {
      commit("decrement", number)
    },
    updateMessage({
        commit
      }, newMessage) {
      commit("updateMessage", newMessage)
    }
  }
})
