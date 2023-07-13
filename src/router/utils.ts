import { type RouteRecordRaw } from 'vue-router'
import { type Permission } from '../types/user.types'
import routes from './main/dynamicRouter'

export async function menuToRoute (userMenu: Permission[]): Promise<RouteRecordRaw[]> {
  return await new Promise(resolve => {
    const allRoutes: RouteRecordRaw[] = routes
    const finalRoutes: RouteRecordRaw[] = []
    recurseToGetRoute(userMenu, allRoutes, finalRoutes)
    console.log('menuToRoute')
    resolve(finalRoutes)
  })
}

// 将部分用户可以访问的route添加到finalRoute中，并返回finalRoute
function recurseToGetRoute (userMenu: Permission[], allRoutes: RouteRecordRaw[], finalRoutes: RouteRecordRaw[]): void {
  console.log('userMenu is: ', userMenu)
  for (const menu of userMenu) {
    console.log('userMenu: ', menu)
    if (menu.children == null || menu.children.length === 0) {
      const route = allRoutes.find(route => route.path === '/main' + menu.path)
            ;(route != null) && finalRoutes.push(route)
    } else {
      recurseToGetRoute(menu.children, allRoutes, finalRoutes)
    }
  }
}
