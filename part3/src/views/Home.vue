<template>
  <div>
    <router-view></router-view>
    <h2>
      Home
    </h2>
    <button @click="toUsers">
      ユーザーのページへ
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      this.$router.push('/users')
    }
  }
}
</script>
