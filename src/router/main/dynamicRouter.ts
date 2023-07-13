// import type { RouteRecordRaw } from 'vue-router'

const routes: any[] = [{
  name: 'WorkPlace',
  path: '/main/dashboard/workplace',
  component: async () => await import('../../views/dynamicrouter/dashboard/Workplace.vue')
}, {
  name: 'Visualization',
  path: '/main/visualization/echarts',
  component: async () => await import('../../views/dynamicrouter/visualization/Echarts.vue')
}, {
  name: 'UserManagement',
  path: '/main/system/user',
  component: async () => await import('../../views/dynamicrouter/system/UserManagement.vue')
}, {
  name: 'RoleManagement',
  path: '/main/system/role',
  component: async () => await import('../../views/dynamicrouter/system/RoleManagement.vue')
}, {
  name: 'PermissionManagement',
  path: '/main/system/permission',
  component: async () => await import('../../views/dynamicrouter/system/PermissionManagement.vue')
}]
export default routes
