import api from './util'

const apiRootPath = 'api/'

export async function login (params) {
  console.log(params)
  let userInfo = await api.post(apiRootPath + 'user/login', params)
  return userInfo
}
