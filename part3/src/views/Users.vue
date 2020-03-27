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
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile'">次のユーザー</router-link>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  props: ["id"]
}
</script>
