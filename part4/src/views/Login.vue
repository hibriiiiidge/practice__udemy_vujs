<template>
  <div>
    <h3>ログイン</h3>
    <label for="name">Email</label>
    <input type="text" id="name" v-model="email">
    <br>
    <label for="password">Password</label>
    <input type="password" id="password" v-model="password">
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
    login () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
      this.email = ''
      this.password = ''
    }
  }
}
</script>
