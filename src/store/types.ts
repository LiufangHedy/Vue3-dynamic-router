import type { User, UserDetail } from '../types/user.types'
export type { UserDetail } from '../types/user.types'

export interface PUser {
  userList: User[]
  currentId: number
  userDetail?: UserDetail
}
