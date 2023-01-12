import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/home.vue'
const routes = [
  {
    path: '/',
    redirect: '/home',
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
  }
]
// Vue-router新版本中，需要使用createRouter来创建路由
const router = createRouter({
  // 指定路由的模式
  history: createWebHistory(),
  routes
})
export default router