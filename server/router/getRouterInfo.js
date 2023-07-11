const { userList, roleList, permissionList }  = require('../model/index')
// 返回所有user列表
 const getUserList = (req, res) => {
    res.json(userList)
}
module.exports = {
    getUserList
}