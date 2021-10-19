import './js/'
import './assets/scss/main.scss'
import Vue from 'vue'
import store from './store/store'
import Main from './js/./Main.vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

new Vue({
  render: h => h(Main),
  store
}).$mount('#main')
