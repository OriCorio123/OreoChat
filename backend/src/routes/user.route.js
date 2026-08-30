const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const isLoggedIn = require('../middlewares/auth.middleware')
const upload = require('../middlewares/upload.middleware')

router.post('/register',userController.register)
router.post('/login',userController.login)
router.get('/logout',userController.logout)
router.get('/profile/:username',userController.getProfile)
router.post('/profile/me',isLoggedIn,upload.single('pfp'),userController.editProfile)

module.exports = router;