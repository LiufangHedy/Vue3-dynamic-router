const express = require('express')
const router = express.Router()
const { getUserList } = require( './getRouterInfo')

router.get('/getAllUsers',getUserList)

module.exports = router