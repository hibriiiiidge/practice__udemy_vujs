<template>
  <div>
    <h3>ログイン</h3>
    <label for="name">Email</label>
    <input type="text" id="name" v-model="email">
    <br>
    <label for="comment">Password</label>
    <input type="text" id="password" v-model="password">
    <br>
    <button @click="login">ログイン</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () { }
  }
}
</script>

