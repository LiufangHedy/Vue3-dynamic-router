const express = require('express')
const router = express.Router()
const { getUserList } = require( './getRouterInfo')

router.get('/allUsers',getUserList)

module.exports = router