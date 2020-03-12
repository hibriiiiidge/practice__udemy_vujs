<template>
  <div v-border:solid.round.shadow="{ width: '10px', color: 'blue' }">
    Home
  </div>
</template>


<script>
export default {
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
