<template>
  <div>
    <LikeHeader>
      <div>はじめまして</div>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <label for="title">タイトル</label>
      <input type="text" id="title" v-model.lazy="eventData.title">
      <pre>{{ eventData.title }}</pre>
      <label for="maxNumber">数字</label>
      <input type="number" id="maxNumber" v-model.number="eventData.maxNumber">
      <p>{{ typeof eventData.maxNumber }}</p>
      <label for="host">host</label>
      <input type="text" id="host" v-model.trim="eventData.host">
      <pre>{{ eventData.host }}</pre>
    </div>
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
      currentComponent: "Home",
      eventData: {
        title: "",
        maxNumber: 0,
        host: ""
      }
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
