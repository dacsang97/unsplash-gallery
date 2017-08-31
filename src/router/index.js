import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import(/* webpackChunkName: "home-route" */ '@/components/Views/Home')
const Author = () => import(/* webpackChunkName: "author-route" */ '@/components/Views/Author')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/:userId',
      component: Author
    }
  ]
})
