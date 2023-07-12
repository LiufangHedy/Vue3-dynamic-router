import { defineStore } from 'pinia'

// 获取路由实例
import router from '../../router/index'
import { getUserList } from '../../api/index'
import type { PUser } from '../types'
export const useUserStore = defineStore({
  id: 'user',
  state: (): PUser => {
    return {
      currentId: 0,
      userList: []
    }
  },
  actions: {
    async getData () {
      this.userList = await getUserList()
    }
  }
})
