<template>
  <div>
    <LikeHeader v-slot="slotProps">
      <h2>こんにちは</h2>
      <h2>{{ slotProps.user.firstName }}</h2>
      <div>はじめまして</div>
      <p>よろしくお願い申し上げます。</p>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'

export default {
  components: {
    LikeHeader
  },
  data() {
    return {
      number: 14
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
