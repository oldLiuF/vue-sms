// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import elementUI from 'element-ui'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
// import Cookies from 'js-cookie'
import { getInfo } from './api/user'

Vue.config.productionTip = false

Vue.use(elementUI)

router.beforeEach(async (to, from, next) => {
  // let token = Cookies.get('token')
  // let token = localStorage.getItem('token')
  let token = sessionStorage.getItem('token')
  debugger
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
    let user = await getInfo()
    console.log(user.username)
  } else {
    if (to.path !== '/login') {
      next({ path: '/login' })
    }
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
