import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: function (resolve) {
        require(['@/components/Views/Home'], resolve)
      }
    },
    {
      path: '/:userId',
      component: function (resolve) {
        require(['@/components/Views/Author'], resolve)
      }
    }
  ]
})
