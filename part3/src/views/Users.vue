<template>
  <div>
    <h2>
      Users
    </h2>
    <router-link to="/users/1">ユーザー1</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <hr>
    <p>
      User No. {{ $route.params.id }}
    </p>
  </div>
</template>


<script>
export default {
  watch: {
    $route() {
      console.log("routeが変わった")
    }
  }
}
</script>
