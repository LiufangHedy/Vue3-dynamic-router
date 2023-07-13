const { userList, roleList, permissionList } = require('../model/index')
const {getUserPermissionList, permissionListToTree} = require('./utils')
// 返回所有user列表
const getUserList = (req, res) => {
    console.log('1');
    // console.log('request: ', req)
    res.json(userList)
}
const getUserDetail = (req, res) => {
    console.log('222');
    const { id } = req.query
    console.log('query: ', req.query);
    if (id === undefined) {
        // 未传ID，抛出错误
        res.status(400).json({ desc: 'id必传!' })
    }
    const user = userList.find((user) => user.id == id)// 注意req.query是字符串类型
    console.log('user: ', user);
    const userDetails = {...user, permissionList: permissionListToTree(getUserPermissionList(id))}
    res.json(userDetails)
}

module.exports = {
    getUserList,
    getUserDetail
}