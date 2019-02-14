import axios from 'axios'
import { throwErr } from './throwerr'
import store from '@/store'
import { Message, Loading } from 'element-ui'

/**
 *封装请求
 *添加loadding动画
 */
// 请求拦截器
axios.interceptors.request.use(config => {
  config.timeout = 10 * 1000 // 请求响应时间
  return config
}, error => {
  return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code === 0) { // 服务端定义的响应code码为0时请求成功
      return Promise.resolve(response.data) // 使用Promise.resolve 正常响应
    } else if (response.data.code === 1401) { // 服务端定义的响应code码为1401时为未登录
      store.dispatch('setUserInfo', {})
      Message({
        message: '未登录'
      })
      // router.push('/login')
      return Promise.reject(response.data) // 使用Promise.reject 抛出错误和异常
    } else {
      return Promise.reject(response.data)
    }
  },
  error => {
    if (error && error.response) {
      let res = {}
      res.code = error.response.status
      res.msg = throwErr(error.response.status, error.response) // throwErr 捕捉服务端的http状态码 定义在utils工具类的方法
      return Promise.reject(res)
    }
    return Promise.reject(error)
  }
)
export default function request (method, url, data) { // 暴露 request 给我们好API 管理
  method = method.toLocaleLowerCase() // 封装RESTful API的各种请求方式 以 post get delete为例
  if (method === 'post') {
    return axios.post(url, data) // axios的post 默认转化为json格式
  } else if (method === 'get') {
    return axios.get(url, {
      params: data
    })
  } else if (method === 'delete') {
    return axios.delete(url, {
      params: data
    })
  }
}
