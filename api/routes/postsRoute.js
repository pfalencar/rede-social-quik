const { Router } = require('express')
const PostController = require('../controllers/PostController')

const router = Router()

router.get('/posts', PostController.getAllPosts)
router.get('/posts/:id', PostController.getOnePost)
router.post('/posts', PostController.createPost)
router.put('/posts/:id', PostController.updateUser)
router.delete('/posts/:id', PostController.deletePost)

module.exports = router