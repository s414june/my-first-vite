import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../view/home.vue'
const routes = [
  {
    path: '/',
    redirect: '/start',
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../view/about.vue')
  },
  {
    path: '/start',
    name: 'start',
    component: () => import('../view/start.vue')
  }
  ,
  {
    path: '/page/:id',
    name: 'page',
    component: () => import('../view/page.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/end',
    name: 'end',
    component: () => import('../view/end.vue')
  }
]
// Vue-router新版本中，需要使用createRouter来创建路由
const router = createRouter({
  // 指定路由的模式
  history: createWebHashHistory(),
  routes
})
export default router