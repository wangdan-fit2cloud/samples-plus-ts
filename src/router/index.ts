import { defineAsyncComponent } from 'vue'
import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

export const Layout = defineAsyncComponent(() => import('@/layout/index.vue'))
const _import = (path: String) => defineAsyncComponent(() => import(`/src/views/${path}.vue`))
const modules: any = import.meta.glob('./modules/*.ts')

/** 常驻路由 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: '首页',
          icon: 'HomeFilled',
          affix: true
        }
      }
    ]
  },

  {
    path: '/403',
    component: _import('error-page/403'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/404',
    component: _import('error-page/404'),
    meta: {
      hidden: true
    },
    alias: '/:pathMatch(.*)*'
  },
  {
    path: '/router-demo',
    component: Layout,
    name: 'RouterDemo',
    meta: {
      title: '路由示例',
      icon: 'Share'
    },
    children: [
      {
        path: 'docs',
        component: _import('router-demo/RouterDocs'),
        name: 'RouterDocs',
        meta: {
          title: '官方文档'
        }
      },
      {
        path: 'menu',
        component: _import('router-demo/RouterMenu'),
        name: 'RouterMenu',
        meta: {
          title: '路由与菜单'
        }
      },
      {
        path: 'detail',
        component: _import('router-demo/RouterDetail'),
        name: 'RouterDetail',
        meta: {
          activeMenu: '/router-demo/menu',
          hidden: true
        }
      },
      {
        path: 'keep-alive',
        component: _import('router-demo/RouterKeepAlive'),
        name: 'RouterKeepAlive',
        meta: {
          title: '组件缓存'
        }
      },
      {
        path: 'keep-alive-detail',
        component: _import('router-demo/RouterKeepAliveDetail'),
        name: 'RouterKeepAliveDetail', // cache: true时，必须保证name与component中的name一致
        meta: {
          cache: true,
          activeMenu: '/router-demo/menu',
          hidden: true
        }
      }
    ]
  },

  {
    path: '/components',
    component: Layout,
    name: 'Components',
    meta: {
      title: '组件',
      icon: 'Grid'
    },
    children: [
      {
        path: 'layout-content',
        component: _import('components/LayoutContentDemo'),
        name: 'LayoutContentDemo',
        meta: {
          title: '页面布局'
        }
      },
      {
        path: 'card-view',
        component: _import('components/ViewCardDemo'),
        name: 'ViewCardDemo',
        meta: {
          title: '查看Card'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes as RouteRecordRaw[],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 })
})

// 重置路由
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && router.hasRoute(name)) {
      router.removeRoute(name)
    }
  })
}

export default router
