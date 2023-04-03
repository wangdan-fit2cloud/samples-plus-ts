import { ElMessageBox, ElMessage } from 'element-plus'

export const $alert = (message: string, options: any) => {
  const title: string = '警告'
  return ElMessageBox.alert(message, title, options)
}

export const $confirm = (message: string, options = {}) => {
  const defaultOptions: any = {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    ...options
  }
  const title = '确认'
  return ElMessageBox.confirm(message, title, defaultOptions)
}

export const $success = (message: string, duration?: number) => {
  ElMessage.success({
    message: message,
    type: 'success',
    showClose: true,
    duration: duration || 1500
  })
}

export const $info = (message: string, duration?: number) => {
  ElMessage.info({
    message: message,
    type: 'info',
    showClose: true,
    duration: duration || 3000
  })
}

export const $warning = (message: string, duration?: number) => {
  ElMessage.warning({
    message: message,
    type: 'warning',
    showClose: true,
    duration: duration || 5000
  })
}

export const $error = (message: string, duration?: number) => {
  ElMessage.error({
    message: message,
    type: 'error',
    showClose: true,
    duration: duration || 10000
  })
}
