<template>
  <div>
    <h3>登録</h3>
    <label for="name">Email</label>
    <input type="text" id="name" v-model="email">
    <br>
    <label for="comment">Password</label>
    <input type="text" id="password" v-model="password">
    <br>
    <button @click="register">登録</button>
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
    register () { }
  }
}
</script>

