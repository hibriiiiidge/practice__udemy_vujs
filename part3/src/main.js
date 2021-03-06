import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 認証していない場合とかに使う（ログインしていないとき）
// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log(from)
//   console.log(next)

//   if (to.path === '/users/1') {
//     next('/')
//   }
//   next()
// })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
