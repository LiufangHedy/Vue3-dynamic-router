interface Info {
  id: number
  name: string
}
export interface User extends Info {
  roleId: number
  createTime: string
  updateTime: string
}

export interface Role extends Info {
  permissionIds: number[]
  permissionNames: string[]
  createTime: string
  updateTime: string
}

export interface Permission extends Info {
  type: number
  pid?: number
  path: string
}
