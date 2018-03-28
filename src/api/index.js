import api from './util'

// 登录
export const login = (params) => api.post('user/login', params)
