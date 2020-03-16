<template>
  <div>
    <div v-border:solid.round.shadow="{ width: '10px', color: 'blue' }">Home</div>
    <div>{{ upperCaseTitle }}</div>
    <div>{{ subtitle | upperCase | lowerCase }}</div>
    <div>{{ body | lowerCase | upperCase }}</div>
    <p>{{ number }}</p>
    <button @click="number++">countUp</button>
    <CountNumber></CountNumber>
  </div>
</template>


<script>
import CountNumber from './CountNumber'
import { tokyoNumber } from '@/tokyoNumber'

export default {
  components: {
    CountNumber
  },
  mixins: [
    tokyoNumber
  ],
  data() {
    return {
      title: 'hello',
    }
  },
  computed: {
    upperCaseTitle() {
      return this.title.toUpperCase()
    }
  },
  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width
      el.style.color = binding.value.color
      el.style.borderStyle = binding.arg
      if(binding.modifiers.round) {
        el.style.borderRadius = "0.5rem"
      }
      if(binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)"
      }
    }
  }
}
</script>
