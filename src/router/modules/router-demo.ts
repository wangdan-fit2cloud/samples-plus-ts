import Layout from '@/layout/index.vue'

export default {
  sort: 1,
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
      component: () => import('@/views/router-demo/RouterDocs.vue'),
      name: 'RouterDocs',
      meta: {
        title: '官方文档'
      }
    },
    {
      path: 'menu',
      component: () => import('@/views/router-demo/RouterMenu.vue'),
      name: 'RouterMenu',
      meta: {
        title: '路由与菜单'
      }
    },
    {
      path: 'detail',
      component: () => import('@/views/router-demo/RouterDetail.vue'),
      name: 'RouterDetail',
      meta: {
        activeMenu: '/router-demo/menu',
        hidden: true
      }
    },
    {
      path: 'keep-alive',
      component: () => import('@/views/router-demo/RouterKeepAlive.vue'),
      name: 'RouterKeepAlive',
      meta: {
        title: '组件缓存'
      }
    },
    {
      path: 'keep-alive-detail',
      component: () => import('@/views/router-demo/RouterKeepAliveDetail.vue'),
      name: 'RouterKeepAliveDetail', // cache: true时，必须保证name与component中的name一致
      meta: {
        cache: true,
        activeMenu: '/router-demo/menu',
        hidden: true
      }
    }
  ]
}
