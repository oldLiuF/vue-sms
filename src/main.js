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

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  // let token = Cookies.get('token')
  // let token = localStorage.getItem('token')
  let token = sessionStorage.getItem('token')

  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      try {
        let user = await getInfo()
        console.log(user.username)
        next()
      } catch (e) {
        console.log(e)
      }
    }
  } else {
    // 免验证白名单
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
