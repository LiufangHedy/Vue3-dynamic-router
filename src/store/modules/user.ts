import { defineStore } from 'pinia'

// 获取路由实例
import router from '../../router/index'
import { getUserList, getUserDetails } from '../../api/index'
import { menuToRoute } from '../../router/utils'
import type { PUser } from '../types'
import type { Permission } from '../../types/user.types'
import { type RouteRecordRaw } from 'vue-router'
import { log } from 'console'
export const useUserStore = defineStore({
  id: 'user',
  state: (): PUser => {
    return {
      currentId: 0,
      userList: [],
      userDetail: undefined
    }
  },
  getters: {
    menuList: (state): Permission[] | undefined => state.userDetail?.permissionList
  },
  actions: {
    async getData () {
      const userList = await getUserList()
      this.userList = userList.data
      console.log('get userlisttt', this.userList)
      const userDetails = await getUserDetails(this.currentId)
      this.userDetail = userDetails.data
      console.log('call getData', this.userDetail)

      // 添加动态路由
      if (this.menuList != null) {
        console.log('hi menuList')
        const finalRoutes: RouteRecordRaw[] = await menuToRoute(this.menuList)
        console.log('menulist after')
        // const currentRoutes = router.getRoutes()
        // const mainRoute = currentRoutes.find(route => route.name === 'main')
        // if ((mainRoute != null) && mainRoute.children) {
        //   mainRoute.children = [...finalRoutes]
        // }
        finalRoutes.forEach((route) => {
          router.addRoute(route)
        })
        console.log('all routes: ', router.getRoutes())
      }
    },
    changeCurrentId (id: number) {
      this.currentId = id
      void this.getData()
    }
  }
})
