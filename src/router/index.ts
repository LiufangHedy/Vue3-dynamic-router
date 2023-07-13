import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import mainPage from '../views/dynamicrouter/index.vue'
// 配置路由信息
const routes: RouteRecordRaw[] = [{
  path: '/',
  redirect: '/main'
}, {
  name: 'main',
  path: '/main',
  component: mainPage,
  // redirect: '/main/dashboard/workplace',
  children: []

}]
const router = createRouter({
  routes,
  history: createWebHistory()
})
export default router
