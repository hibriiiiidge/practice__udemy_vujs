<template>
  <div id="app">
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム</label>
    <input type="text" id="name" v-model="name">
    <br>
    <label for="comment">コメント</label>
    <textarea id="comment" cols="30" rows="10" v-model="comment"></textarea>
    <br>
    <button @click="createCommnet">サーバーに送る</button>
    <h2>掲示板</h2>
    <div v-for="post in posts" :key="post.name">
      <div>名前: {{ post.fields.name.stringValue }}</div>
      <div>コメント: {{ post.fields.comment.stringValue }}</div>
      <br>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      comment: '',
      posts: []
    }
  },
  created() {
    axios.get(
      "https://firestore.googleapis.com/v1/projects/udemy-vuejs-http-20c62/databases/(default)/documents/comments"
    ).then(response => {
      this.posts = response.data.documents
      console.log(response.data.documents)
    })
  },
  methods: {
    createCommnet() {
      axios.post("https://firestore.googleapis.com/v1/projects/udemy-vuejs-http-20c62/databases/(default)/documents/comments",
        {
          // firestore の仕様
          fields: {
            name: {
              stringValue: this.name,
            },
            comment: {
              stringValue: this.comment
            }
          }
        }
      ).then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
