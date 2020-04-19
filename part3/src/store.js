import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 2
  },
  // computed プロパティ的な役割
  getters: {
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3
  }
})
