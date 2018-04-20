import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import Login from '@/page/login/login'
import Register from '@/page/login/register'
import Dashboard from '@/page/dashboard/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: 'dashboard',
      children: [
        {
          path: 'dashboard',
          component: Dashboard
        }
      ]
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
