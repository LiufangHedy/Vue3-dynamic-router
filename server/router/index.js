const express = require('express')
const router = express.Router()
const { getUserList,getUserDetail } = require( './getRouterInfo')

router.get('/getAllUsers', getUserList)
router.get(`/getUserDetails`, getUserDetail)

module.exports = router