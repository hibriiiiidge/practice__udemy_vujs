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
      {{ count }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
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
