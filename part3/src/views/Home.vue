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
      :value="message"
      @input="updateMessage"
    >
    <p>
      {{ message }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(["doubleCount", "tripleCount"]),
    message() {
      return this.$store.getters.message
    }
  },
  methods: {
    updateMessage(e) {
      this.$store.dispatch("updateMessage", e.target.value)
    },
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
