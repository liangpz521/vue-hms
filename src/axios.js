import axios from 'axios'

// 配置地址 https://www.kancloud.cn/yunye/axios/234845
const instance = axios.create({
  baseURL: '/',
  timeout: 3000,
  headers: {
    // `headers` 是即将被发送的自定义请求头
    'X-Requested-With': 'XMLHttpRequest'
    // 'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default instance
