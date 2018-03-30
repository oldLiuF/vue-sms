import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import Login from '@/page/login/login'
import Register from '@/page/login/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
