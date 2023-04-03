import type { App } from 'vue'
/* Components */
import LayoutContent from './layout-content/index.vue'
import BackButton from './back-button/index.vue'
import ViewCard from './view-card/index.vue'

export default {
  install(app: App) {
    app.component(LayoutContent.name, LayoutContent)
    app.component(BackButton.name, BackButton)
    app.component(ViewCard.name, ViewCard)
  }
}
