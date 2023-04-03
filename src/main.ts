import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import Fit2CloudPlus from 'fit2cloud-ui-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // element plus的icon需要另安装

import Components from '@/components'
import '@/styles/index.scss'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(Fit2CloudPlus, {})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(Components)

app.mount('#app')
