const express = require('express')
const usersController = require('./users-controller')

const router = express.Router()

router.get('/', usersController.getUsersController)
router.delete('/', usersController.deleteUserController)

module.exports = router