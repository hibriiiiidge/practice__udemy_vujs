<template>
  <div class="main">
    <button @click="show = !show">切り替え</button>
    <transition name="fade">
      <p v-if="show">Hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },
}
</script>


<style>
.fade-enter {
  /* 現れる時の最初の状態 */

},
.fade-enter-active {
  /* 現れる時のトランザクションの状態 */

},
.fade-enter-to {
  /* 現れる時の最後の状態 */

},
.fade-leave {
  /* 消える時の最初の状態 */

},
.fade-leave {
  /* 消える時のトランザクションの状態 */

},
.fade-leave {
  /* 消える時の最後の状態 */

}

.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>
