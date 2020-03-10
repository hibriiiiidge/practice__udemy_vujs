<template>
  <div>
    <LikeHeader>
      <div>はじめまして</div>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <About v-if="currentComponent==='About'"></About>
    <Home v-if="currentComponent==='Home'"></Home>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'
import About from './components/About.vue'
import Home from './components/Home.vue'

export default {
  components: {
    LikeHeader,
    About,
    Home
  },
  data() {
    return {
      number: 14,
      currentComponent: "Home"
    }
  },
  methods: {
    incrementNumber(value) {
      this.number = value
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid blue;
}
/* h1 {
  color: green;
} */
</style>
