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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(["doubleCount", "tripleCount"])
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
