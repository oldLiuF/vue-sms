import api from './util'

// 登录
export const login = (params) => api.post('user/login', params)

// 注册
export const register = (params) => api.post('user/register', params)
