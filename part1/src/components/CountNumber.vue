<template>
  <div>
    <div>{{ subtitle | upperCase | lowerCase }}</div>
    <div>{{ body | lowerCase | upperCase }}</div>
    <p>{{ number }}</p>
    <button @click="number++">countUp</button>
  </div>
</template>


<script>
import { tokyoNumber } from '@/tokyoNumber'

export default {
  mixins: [ tokyoNumber ],
  created() {
    console.log('created in component')
  },
}
</script>
