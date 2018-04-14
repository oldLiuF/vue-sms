import axios from 'axios'
import qs from 'qs'
import { Message, MessageBox } from 'element-ui'
import Cookies from 'js-cookie'

const apiRootPath = 'api/'

// 拦截器
axios.interceptors.request.use(config => {
  let token = Cookies.get('token') || localStorage.getItem('token')
  // 给请求头带上token
  if (token) {
    config.headers.Authorization = token
  }
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response.data
}, error => {
  console.log('error:')
  console.log(error)
  debugger
  let response = error.response
  // 验证错误
  if (response.data.code === 50001) {
    MessageBox.alert('登录已过期, 请重新登录', '系统提示', {
      callback: action => {
        sessionStorage.removeItem('token')
        localStorage.removeItem('token')
        window.location.reload()
      }
    })
  } else {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
  }

  return Promise.reject(error.response)
})

/* // 处理来自网络或者服务器的错误
function checkStatus (response) {
  let res = {
    code: response.status,
    message: response.statusText,
    data: response.data
  }

  // 返回状态正确
  if (response.status === 200 || response.status === 304) {
    console.log(res)
  }

  return res
}

// 处理程序端的错误
function checkCode (res) {
  let result = {
    success: true,
    data: res.data,
    message: res.message
  }
  // 正常
  if (res.code === 200 || res.code === 304) return result.data

  result.success = false

  Message.error(result.message)

  // 错误类型返回不同信息
  // 如何处理
  return result
} */

export default {
  get (url, params) {
    /* let result = axios.get(url, params)
      .then(checkStatus)
      .then(checkCode)
    return result */
    return axios.get(apiRootPath + url, params).catch(err => {
      return new Error(err)
    })
    // .then(checkStatus)
    // .then(checkCode)
  },

  post (url, data) {
    return axios({
      method: 'post',
      url: apiRootPath + url,
      data: qs.stringify(data),
      // data,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).catch(err => {
      return new Error(err)
    })
    // .then(checkStatus)
    // .then(checkCode)
  }
}

/* export function get (url, params) {
  let result = axios.get(url, params)
    .then(checkStatus)
    .then(checkCode)
  return result
} */
