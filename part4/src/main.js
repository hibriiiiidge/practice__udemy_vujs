import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from "./store";

Vue.config.productionTip = false

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/udemy-vuejs-http-20c62/databases/(default)/documents"
// common だと get/post 等全てのリクエスト
// axios.defaults.headers.common['Authorization'] = "hoge"
// axios.defaults.headers.get["Accept"] = "application/json"

// サーバーに行く前/行った後
axios.interceptors.request.use(
  config => {
    console.log("interceptors request", config);
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  config => {
    console.log("interceptors response", config);
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
