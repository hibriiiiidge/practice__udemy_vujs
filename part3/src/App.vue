<template>
  <div>
    <nav>
      <router-link to="/" class="link" active-class="link--active" exact>Home</router-link>
      <router-link to="/users" class="link" active-class="link--active" exact>Users</router-link>
    </nav>
    <Home></Home>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './views/Home'

export default {
  components: {
    Home
  }
}
</script>

<style scoped>
.link {
  margin-right: 10px;
}

.link--active {
  font-size: 20px;
}
</style>
