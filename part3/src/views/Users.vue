<template>
  <div>
    <h2>
      Users
    </h2>
    <router-link to="/users/1">ユーザー1</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <hr>
    <p>
      User No. {{ id }}
    </p>
  </div>
</template>


<script>
export default {
  props: ["id"],
  watch: {
    $route(to, from) {
      console.log(to)
      console.log(from)
    }
  }
}
</script>
