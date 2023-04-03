import Layout from '@/layout/index.vue'

const ComponentsSetting = {
  sort: 2,
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
      component: () => import('@/views/components/LayoutContentDemo.vue'),
      name: 'LayoutContentDemo',
      meta: {
        title: '页面布局'
      }
    },
    {
      path: 'card-view',
      component: () => import('@/views/components/ViewCardDemo.vue'),
      name: 'ViewCardDemo',
      meta: {
        title: '查看Card'
      }
    }
  ]
}
export default ComponentsSetting
