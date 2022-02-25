const { Router } = require('express')
const UserController = require('../controllers/UserController')

const router = Router()

router.get('/users', UserController.getAllUsers)
router.get('/users/:id', UserController.getOneUser)
router.post('/users', UserController.createUser)
router.put('/users/:id', UserController.updateUser)
router.delete('/users/:id', UserController.deleteUser)

router.get('/users/:userId/comments/:commentId', UserController.getOneComment)
router.post('/users/:userId/comments', UserController.createComment)
router.put('/users/:userId/comments/:commentId', UserController.updateComment)
router.delete('/users/:userId/comments/:commentId', UserController.deleteComment)

module.exports = router