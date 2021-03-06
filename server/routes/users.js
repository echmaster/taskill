const express = require('express')
const router = express.Router()
const requiredAuth = require('../middleware/auth')
const userController = require('../controllers/user')

router.post('/signup', userController.signUp)
router.post('/signin', userController.signIn)
router.post('/logout', userController.logout)
router.post('/reset', userController.resetPassword)
router.patch('/reset', userController.passwordUpdate)
router.get('/reset/:token', userController.resetPasswordVerifyToken)
router.get('/', requiredAuth, userController.getUsers)
router.get('/:id', requiredAuth, userController.getUserById)

module.exports = router
