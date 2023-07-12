import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
// 配置路由信息
const routes: RouteRecordRaw[] = [{
  path: '/',
  redirect: '/main'
}, {
  name: 'main',
  path: '/main',
  // redirect: '/main/dashboard/workplace',
  component: async () => await import('../views/dynamicrouter/index.vue')

}]
const router = createRouter({
  routes,
  history: createWebHistory()
})
export default router
