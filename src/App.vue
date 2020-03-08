<template>
  <div>
    <LikeHeader></LikeHeader>
    <p> {{ number }}</p>
    <LikeNumber :total-number="number"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
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
  }
}
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
