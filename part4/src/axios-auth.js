import axios from 'axios'

// カスタムインスタンス
const instance = axios.create({
  baseURL: 'https://firestore.googleapis.com/v1/projects/udemy-vuejs-http-20c62/databases/(default)/documents'
})

export default instance
