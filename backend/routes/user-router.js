const express = require('express')

const UserController = require('../controllers/user-controller')

const router = express.Router()

router.post('/register', UserController.createUser)
router.delete('/user/:id', UserController.deleteUser)
router.post('/login', UserController.login)
router.get('/users', UserController.getUsers)

module.exports = router