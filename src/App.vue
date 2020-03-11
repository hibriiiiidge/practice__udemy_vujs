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
      <input type="text" id="title" :value="eventData.title" @input="eventData.title = $event.target.value">
      <pre>{{ eventData.title }}</pre>

      <label for="maxNumber">数字</label>
      <input type="number" id="maxNumber" v-model.number="eventData.maxNumber">
      <p>{{ typeof eventData.maxNumber }}</p>

      <label for="host">host</label>
      <input type="text" id="host" v-model.trim="eventData.host">
      <pre>{{ eventData.host }}</pre>

      <label for="detail">detail</label>
      <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <pre>{{ eventData.detail }}</pre>

      <label for="isPrivate">非公開</label>
      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
      <pre>{{ eventData.isPrivate }}</pre>

      <label for="target">参加条件</label>
      <label for="10">10代</label>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <label for="20">20代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target">
      <label for="30">30代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target">
      <p>{{ eventData.target }}</p>


      <p>参加費</p>
      <label for="free">無料</label>
      <input type="radio" id="free" value="free" v-model="eventData.price">
      <label for="paid">有料</label>
      <input type="radio" id="paid" value="paid" v-model="eventData.price">

      <p>開催場所</p>
      <select v-model="eventData.location" multiple>
        <option v-for="location in locations" :key="location">
          {{ location }}
        </option>
      </select>
      <p>{{ eventData.location }}</p>
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
      locations: ["東京", "大阪", "名古屋"],
      eventData: {
        title: "",
        maxNumber: 0,
        host: "",
        detail: "",
        isPrivate: false,
        target: [],
        price: 'free',
        location: []
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
