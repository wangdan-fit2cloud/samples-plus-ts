import { defineStore } from 'pinia'
import { login, isLogin, getCurrentUser, logout } from '@/api/user'
import { resetRouter } from '@/router'

/**
 * 登录表单类型声明
 */
export interface LoginFormData {
  username: string
  password: string
}

export interface UserState {
  token?: string | undefined
  login?: boolean
  name: string
  roles: string[]
}

const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    login: false,
    name: '',
    roles: []
  }),
  actions: {
    userLogin(userInfo: LoginFormData) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password })
          .then((response: any) => {
            this.login = true
            resolve(response)
          })
          .catch((error: any) => {
            reject(error)
          })
      })
    },

    getIsLogin() {
      return new Promise((resolve) => {
        if (this.login) {
          resolve(true)
          return
        }
        isLogin()
          .then(() => {
            this.login = true
            resolve(true)
          })
          .catch(() => {
            resolve(false)
          })
      })
    },
    getCurrentUser() {
      return new Promise((resolve, reject) => {
        getCurrentUser()
          .then(({ data }: any) => {
            const { name, roles } = data
            this.name = name
            this.roles = roles
            resolve(data)
          })
          .catch((error: any) => {
            reject(error)
          })
      })
    },

    userLogout() {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            this.login = false
            this.roles = []
            resetRouter()
            resolve(null)
          })
          .catch((error: any) => {
            reject(error)
          })
      })
    }
  }
})

export default useUserStore
