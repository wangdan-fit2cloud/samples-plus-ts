import { defineStore } from 'pinia'

/**
 * 系统类型声明
 */
interface AppState {
  device: string;
  sidebar: {
    opened: boolean;
  };
}


const get = () => {
  return localStorage.getItem('sidebarStatus') as any
}
const set = (value: any) => {
  localStorage.setItem('sidebarStatus', value)
}

const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    device: 'desktop',
    sidebar: {
      opened: get() ? !!+get() : true
    }
  }),
  actions: {
    toggleSidebar() {
      this.sidebar.opened = !this.sidebar.opened
      if (this.sidebar.opened) {
        set(1)
      } else {
        set(0)
      }
    },
    openSideBar() {
      set(1)
      this.sidebar.opened = true
    },
    closeSideBar() {
      set(0)
      this.sidebar.opened = false
    }
  }
})

export default useAppStore
