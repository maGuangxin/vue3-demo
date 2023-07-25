//axiosInstance.js
//导入axios
import axios from 'axios'
import { useLoadingStore } from '@/stores/loading'

//导出我们建立的axios实例模块，ES6 export用法
export default {
  install: (app) => {
    const loading = useLoadingStore()
    //使用axios下面的create([config])方法创建axios实例，其中config参数为axios最基本的配置信息。
    const api = axios.create({
      baseURL: 'http://localhost:8080', //请求后端数据的基本地址，自定义
      timeout: 2000 //请求超时设置，单位ms
    })
    api.interceptors.request.use(
      (requestConfig) => {
        loading.toggle()
        return requestConfig
      },
      (error) => {
        loading.close()
        return Promise.reject(error)
      }
    )
    api.interceptors.response.use(
      (response) => {
        loading.toggle()
        return response.data
      },
      (error) => {
        loading.close()
        console.log('response', error)
        return Promise.reject(error)
      }
    )
    app.config.globalProperties.$http = api
  }
}
