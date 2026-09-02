const express = require('express')
const router = express.Router()
const commentController = require('../controllers/comment.controller')
const isLoggedIn = require('../middlewares/auth.middleware')

router.post('/addcomment/:post',isLoggedIn,commentController.addComment)
router.get('/deletecomment/:comment',isLoggedIn,commentController.deleteComment)
router.post('/editcomment/:comment',isLoggedIn,commentController.editComment)

module.exports = router