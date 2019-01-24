import Vue from 'vue'
import VueRouter from 'vue-router'
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

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'hash'
})

router.beforeEach((to, from, next) => {
  const isLogin = window.localStorage.getItem('isLogin')
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    if (isLogin) { // 判断当前的token是否存在
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
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
