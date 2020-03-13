import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false

Vue.component('LikeNumber', LikeNumber)

// Vue.directive("border", function(el, binding) {
//   el.style.borderWidth = binding.value.width
//   el.style.color = binding.value.color
//   el.style.borderStyle = binding.arg
//   if(binding.modifiers.round) {
//     el.style.borderRadius = "0.5rem"
//   }
//   if(binding.modifiers.shadow) {
//     el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)"
//   }
// })

// Vue.directive("border", {
//   // ディレクティブが初めて対象の要素に紐づいた時
//   bind(el, binding, vnode, oldVnode){
//   },
//   // 親nodeに挿入された時
//   inserted(el, binding, vnode) {
//   },
//   // コンポーネントが更新される度。子コンポーネントが更新される前。
//   update(el, binding, vnode, oldVnode) {
//   },
//   // コンポーネントが更新される度。子コンポーネントが更新された後
//   componentUpdate(el, binding, vnode) {
//   },
//   // ディレクティブが紐づいている要素から取り除かれた時
//   upbind(el, binding, vnode) {
//   }
// })

Vue.filter("upperCase", function(value){
  return value.toUpperCase()
})

new Vue({
  render: h => h(App),
}).$mount('#app')
