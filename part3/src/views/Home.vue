<template>
  <div>
    <router-view></router-view>
    <h2>
      Home
    </h2>
    <button @click="toUsers">
      ユーザーのページへ
    </button>
    <p>
      {{ doubleCount }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    doubleCount() {
      return this.$store.getters.doubleCount
    }
  },
  methods: {
    toUsers() {
      // this.$router.push('/users')
      this.$router.push({
        name: 'user-id-profile',
        params: { id: 1 }
      })
    }
  }
}
</script>
