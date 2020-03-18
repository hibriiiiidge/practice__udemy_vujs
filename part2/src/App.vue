<template>
  <div class="main">
    <button @click="myAnimation = 'fade'">fade</button>
    <button @click="myAnimation = 'slide'">slide</button>
    <p>
      {{ myAnimation }}
    </p>

    <button @click="show = !show">切り替え</button>
    <transition name="fade" mode="out-in">
      <p v-if="show" key="hello">
        こんにちは
      </p>
      <p v-if="!show" key="bye">
        さようなら
      </p>
    </transition>

    <transition
      enter-active-class="animated bounce"
      leave-active-class="animated shake"
      appear
    >
      <p v-if="show">Hello</p>
    </transition>

    <transition :name="myAnimation" appear>
      <p v-if="show">Bye</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      myAnimation: 'slide'
    }
  },
}
</script>


<style>
.fade-enter {
  /* 現れる時の最初の状態 */
  opacity: 0;
}
.fade-enter-active {
  /* 現れる時のトランザクションの状態 */
  transition: opacity 0.5s;
}
.fade-enter-to {
  /* 現れる時の最後の状態 */
  opacity: 1;
}
.fade-leave {
  /* 消える時の最初の状態 */
  opacity: 1;
}
.fade-leave-active {
  /* 消える時のトランザクションの状態 */
  transition: opacity 0.5s;
}
.fade-leave-to {
  /* 消える時の最後の状態 */
  opacity: 0;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 0.5s;
}

.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 0.5s;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>
