// 用户信息列表
 const userList = [{
    id: 0,
    name: 'hedy',
    roleId: 0,
    createTime: '2023-07-11',
    updateTime: '2023-07-11'
},{
    id: 1,
    name: '夷光',
    roleId: 1,
    createTime: '2023-07-11',
    updateTime: '2023-07-11'
},{
    id: 2,
    name: '小染',
    roleId: 2,
    createTime: '2023-07-11',
    updateTime: '2023-07-11'
 }]

// 角色权限信息列表
const roleList = [{
    id: 0,
    name: 'superAdmin',
    // 权限列表
    permissionIds: [0, 1, 2, 4, 5, 6, 7],
    permissionNames: [],
    createTime: '2023-07-11',
    updateTime: '2023-07-11'
},{
    id: 1,
    name: 'admin',
    // 权限列表
    permissionIds: [0, 1, 2, 4, 5],
    permissionNames: [],
    createTime: '2023-07-11',
    updateTime: '2023-07-11'
},{
    id: 2,
    name: 'user',
    // 权限列表
    permissionIds: [0, 1, 4],
    permissionNames: [],
    createTime: '2023-07-11',
    updateTime: '2023-07-11'
}]

// 权限路由信息列表
const permissionList = [{
    id: 0,
    name: '工作台',
    type: 0, //type表示路由层级，值越小层级越大
    pid: null,
    path: '/dashboard/workplace'
},{
    id: 1,
    name: '数据可视化',
    type: 0,
    pid: null,
    path: '/visualization'
},{
    id: 2,
    name: '系统管理',
    type: 0,
    pid: null,
    path: '/system'
},  {
    id: 4,
    name: 'ECharts图表',
    type: 1,
    pid: 1,
    path: '/visualization/echarts',
  },
  {
    id: 5,
    name: '用户管理',
    type: 1,
    pid: 2,
    path: '/system/user',
  },
  {
    id: 6,
    name: '角色管理',
    type: 1,
    pid: 2,
    path: '/system/role',
  },
  {
    id: 7,
    name: '权限管理',
    type: 1,
    pid: 2,
    path: '/system/permission',
    }]
module.exports = {
    userList,
    roleList,
    permissionList
  }