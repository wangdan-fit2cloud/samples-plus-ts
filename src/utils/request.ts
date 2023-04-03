import axios from 'axios'
import { $alert, $error } from './message'
// import { TokenKey, getToken } from '@/utils/token'

import useStore from '@/store'

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // url = base url + request url
  withCredentials: true,
  timeout: 60000 // request timeout, default 1 min
})

// 每次请求加上Token。如果没用使用Token，删除这个拦截器
instance.interceptors.request.use(
  (config) => {
    // const { userToken } = useStore()
    // if (userToken.token) {
    //   if (config && config.headers) {
    //     // config.headers[TokenKey] = getToken() as string
    //   }
    // }
    return config
  },
  (error: any) => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

const checkAuth = (response: any) => {
  // 请根据实际需求修改
  if (response.headers['authentication-status'] === 'invalid' || response.status === 401) {
    const message = '认证信息已过期，请重新登录'
    $alert(message, () => {
      const { user } = useStore()
      user.userLogout().then(() => {
        location.reload()
      })
    })
  }
}

const checkPermission = (response: any) => {
  // 请根据实际需求修改
  if (response.status === 403) {
    location.href = '/403'
  }
}

// 请根据实际需求修改
instance.interceptors.response.use(
  (response) => {
    checkAuth(response)
    return response
  },
  (error: any) => {
    let msg
    if (error.response) {
      checkAuth(error.response)
      checkPermission(error.response)
      msg = error.response.data.message || error.response.data
    } else {
      console.log('error: ' + error) // for debug
      msg = error.message
    }
    $error(msg)
    return Promise.reject(error)
  }
)

export const request = instance

/* 简化请求方法，统一处理返回结果，并增加loading处理，这里以{success,data,message}格式的返回值为例，具体项目根据实际需求修改 */
const promise = (request: any, loading = {} as any) => {
  return new Promise((resolve, reject) => {
    loading.status = true
    request
      .then((response: any) => {
        if (response.data.success) {
          resolve(response.data)
        } else {
          reject(response.data)
        }
        loading.status = false
      })
      .catch((error: any) => {
        reject(error)
        loading.status = false
      })
  })
}

export const get = (url: string, data?: any, loading?: boolean) => {
  return promise(request({ url: url, method: 'get', params: data }), loading)
}

export const post = (url: string, data?: any, loading?: boolean) => {
  return promise(request({ url: url, method: 'post', data }), loading)
}

export const put = (url: string, data?: any, loading?: boolean) => {
  return promise(request({ url: url, method: 'put', data }), loading)
}

export const del = (url: string, loading?: boolean) => {
  return promise(request({ url: url, method: 'delete' }), loading)
}
