import Vue from 'vue';
import Vuex from 'vuex';
import { count } from './modules/count';
import {
  getters
}
from './getters';
import {
  mutations
}
from './mutations';
import {
  actions
}
from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: ''
  },
  // computed プロパティ的な役割
  getters,
  // state は mutation でしか変更しない
  // data の変更を追跡しやすく、予測しやすくする
  mutations,
  actions,
  modules: {
    count
  }
})
