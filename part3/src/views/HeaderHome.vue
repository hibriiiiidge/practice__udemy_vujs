<template>
  <div>
    <h2>Home</h2>
    <nav>
      <router-link to="/" class="link" active-class="link--active" exact>Home</router-link>
      <router-link :to="{ name: 'user-id-profile', params: { id: 1 }, query: { lang: 'ja', page: 2 }, hash: '#next-user' }" class="link" active-class="link--active" exact>Users</router-link>
    </nav>
    <button @click="increment(2)">+1</button>
    <button @click="decrement(2)">-1</button>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
  methods: {
    // ...mapMutations(["increment", "decrement"])
    // increment() {
    //   this.$store.commit("increment", 2)
    //   // this.$store.state.count++;
    // },
    // decrement(){
    //   this.$store.commit("decrement", 2)
    //   // this.$store.state.count--;
    // }
    // コンポーネントからは commit しないということもできる
    ...mapActions("count", ["increment", "decrement"])
    // increment() {
    //   this.$store.dispatch("increment", 2)
    // },
    // decrement() {
    //   this.$store.dispatch("decrement", 2)
    // }
  }
}
</script>

<style scoped>
.link {
  margin-right: 10px;
}

.link--active {
  font-size: 20px;
}
</style>
