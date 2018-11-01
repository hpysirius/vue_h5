import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import routes from './router/index'
import store from './store'
import './config/rem'
import App from './App'

// import FastClick from 'fastclick'

// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', function () {
//     FastClick.attach(document.body)
//   }, false)
// }

Vue.use(VueRouter, VueAwesomeSwiper)
const router = new VueRouter({
  routes,
  mode: 'hash'
})

// console.log(router);

new Vue({
  store,
  router,
  el: '#root',
  components: {
    App
  },
  template: '<App/>'
})
// const root = document.getElementById('root');
// console.log(root);
