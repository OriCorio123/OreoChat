const express = require('express')
const router = express.Router()
const postController = require('../controllers/post.controller')
const isLoggedIn = require('../middlewares/auth.middleware')
const upload = require('../middlewares/upload.middleware')

router.post('/upload',isLoggedIn,upload.single('image'),postController.uploadPost)
router.get('/delete/:post',isLoggedIn,postController.deletePost)
router.post('/update/:post',isLoggedIn,postController.updatePost)


module.exports = router;