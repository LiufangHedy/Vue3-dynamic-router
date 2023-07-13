const { log } = require('console');
const { userList, roleList, permissionList }  = require('../model/index')

function getUserPermissionList(userid) {
    console.log('userId: ', userid, typeof userid);
    // 获取user对应的role
    const userRoleId = userList.find((user) => user.id == userid).roleId
    // 获取role对应的permissionList
    const userPermissionIds = roleList.find((role) => role.id === userRoleId).permissionIds
    console.log('userPermissions: ', userPermissionIds);
    const userPermissionList = permissionList.filter((permission)=> userPermissionIds.includes(permission.id))
    return userPermissionList
}
function permissionListToTree(list) {
    const tree = [], permissionMap = new Map()
    list.forEach(element => {
        permissionMap.set(element.id, { ...element, children: [] }) // 不能直接将element给push进去，不然会修改element对象，添加children属性，对象引用会出错
    });
    console.log('list: ', list);
    list.forEach((element) => {
        if (!element.pid) {
            tree.push(permissionMap.get(element.id))
        } else {
            console.log('element: ', element);
            const parent = permissionMap.get(element.pid)
            parent.children.push(element)
        }
    })
    console.log('tree:',tree);
    return tree

}
module.exports = {getUserPermissionList,permissionListToTree}
