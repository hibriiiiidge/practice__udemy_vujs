import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import Users from './views/Users.vue'
// import UsersPosts from './views/UsersPosts.vue'
// import UsersProfile from './views/UsersProfile.vue'
// import HeaderHome from './views/HeaderHome.vue'
// import HeaderUser from './views/HeaderUser.vue'
const Home = () => import( /* webpackChunkName: "Home" */ './views/Home.vue');
const Users = () => import( /* webpackChunkName: "Users" */ './views/Users.vue');
const UsersPosts = () => import( /* webpackChunkName: "UsersPosts" */ './views/UsersPosts.vue');
const UsersProfile = () => import( /* webpackChunkName: "UsersProfile" */ './views/UsersProfile.vue');
const HeaderHome = () => import( /* webpackChunkName: "HeaderHome" */ './views/HeaderHome.vue');
const HeaderUser = () => import( /* webpackChunkName: "HeaderUser" */ './views/HeaderUser.vue');

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        header: HeaderHome
      }
    },
    {
      path: '/users/:id',
      components: {
        default: Users,
        header: HeaderUser
      },
      props: {
        default: true,
        header: false
      },
      children: [
        {
          path: "posts",
          component: UsersPosts
        },
        {
          path: "profile",
          component: UsersProfile,
          name: "user-id-profile"
        }
      ]
    },
    {
      // path: "/hello",
      path: "*",
      redirect: "/"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      this.app.$root.$once("triggerScroll", () => {
        let postion = { x: 0, y: 0 }
        if (savedPosition) {
          postion = savedPosition
        }
        if (to.hash) {
          postion = {
            selector: to.hash
          }
        }
        resolve(postion)
      })
    })
  }
})
