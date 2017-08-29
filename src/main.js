import Vue from 'vue'
import App from './App'
import router from './router'

// Add Vue Resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// Add Unsplash Plugin
import UnsplashPlugin from '@/utils/UnsplashPlugin'
Vue.use(UnsplashPlugin)

// Add bootstrap-vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
