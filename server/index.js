const express = require('express')
const app = express()
const { getUserList } = require('./router/getRouterInfo')
app.use(getUserList)
app.listen(3003, () => {
    console.log('Server is running on port 3003');
})