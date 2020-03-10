<template>
  <div>
    <slot></slot>
    <slot user="user"></slot>
    <hr>
    <p>いいねの数</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: 'jack',
        lastName: 'donald'
      }
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
