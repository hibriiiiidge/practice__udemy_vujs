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
    <p>
      {{ tripleCount }}
    </p>
    <input
      type="text"
      v-model="message"
    >
    <p>
      {{ message }}
    </p>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  computed: {
    // ...mapGetters("count",["doubleCount", "tripleCount"]),
    doubleCount() {
      return this.$store.getters["count/doubleCount"]
    },
    tripleCount() {
      return this.$store.getters["count/tripleCount"]
    },
    // message() {
    //   return this.$store.getters.message
    // }
    message: {
      get() {
        return this.$store.getters.message
      },
      set(value) {
        this.$store.dispatch("updateMessage", value)
      }
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
