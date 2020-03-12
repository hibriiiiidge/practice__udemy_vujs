import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false

Vue.component('LikeNumber', LikeNumber)

Vue.directive("border", {
  // ディレクティブが初めて対象の要素に紐づいた時
  bind(el, binding, vnode, oldVnode){

  },
  // 親nodeに挿入された時
  inserted(el, binding, vnode) {

  },
  // コンポーネントが更新される度。子コンポーネントが更新される前。
  update(el, binding, vnode, oldVnode) {

  },
  // コンポーネントが更新される度。子コンポーネントが更新された後
  componentUpdate(el, binding, vnode) {

  },
  // ディレクティブが紐づいている要素から取り除かれた時
  upbind(el, binding, vnode) {

  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
