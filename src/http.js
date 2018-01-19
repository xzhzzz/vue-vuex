/**
 * http配置
 */
// 引入axios以及element ui中的loading和message组件
import axios from 'axios'
import { Message } from 'element-ui'
// 超时时间
axios.defaults.timeout = 5000
// http请求拦截器

axios.interceptors.request.use(config => {
  console.log(config);
  return config
}, error => {

  Message.error({
    message: '加载超时'
  })
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading

  return data
  }, error => {
    Message.error({
      message: '加载失败'
    })
    return Promise.reject(error)
})

export default axios;
