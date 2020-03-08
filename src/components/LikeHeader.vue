<template>
  <div>
    <slot></slot>
    <p>{{ headerText }}</p>
  </div>
</template>

<script>
export default {
  props: ["headerText"]
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
