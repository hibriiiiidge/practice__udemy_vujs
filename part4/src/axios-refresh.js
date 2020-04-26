import axios from 'axios'

// カスタムインスタンス
const instance = axios.create({
  baseURL: 'https://securetoken.googleapis.com/v1'
})

export default instance
