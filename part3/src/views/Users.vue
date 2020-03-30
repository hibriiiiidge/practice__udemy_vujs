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
    <!-- <router-link :to="'/users/' + (Number(id) + 1) + '/profile'">次のユーザー</router-link> -->
    <router-link :to="{ name: 'user-id-profile', params: { id: (Number(id) + 1) }, query: { lang: 'ja', hoge: 2 }, hash: '#next-user' }">次のユーザー</router-link>
    <router-view></router-view>
    <div style="height: 700px;"></div>
    <router-link id="next-user" :to="{ name: 'user-id-profile', params: { id: (Number(id) + 1) }, query: { lang: 'ja', hoge: 2 }, hash: '#next-user' }">次のユーザー</router-link>
    <div style="height: 1400px;"></div>
  </div>
</template>


<script>
export default {
  props: ["id"],
  // Users.vue のインスタンスが作成される前に実行される、ので this は使えない
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter');

    // 非同期的な処理
    // コンポーネントが表示される時に実行される
    next( vm => {
      console.log(vm.id)
    })
  },
  // url は変わったけれど Vue インスタンスが変わらない場合（watch と同じ）
  // インスタンスが create /destroy されない時
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate');

    next()
  },
  // 別のコンポーネントに行く時に発火
  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave');
    const isLeave = window.confirm("本当に離れますか？")
    next(isLeave)
  }
}
</script>
