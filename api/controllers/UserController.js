const database = require('../../models')

class UserController {
    static async getAllUsers(req, res) {
        try {
            const allUsers = await database.Users.findAll()
            return res.status(200).json(allUsers)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getOneUser(req, res) {
        const { id } = req.params
        try {
            const oneUser = await database.Users.findOne( { where: { id: Number(id) } } );
            return res.status(200).json(oneUser)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createUser(req, res) {
        const newUser = req.body
        try{
            const newUserCreated = await database.Users.create(newUser)
            return res.status(200).json(newUserCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateUser(req, res) {
        const { id } = req.params
        const newInfo = req.body
        try {
            await database.Users.update( newInfo, { where: {id: Number(id)} } )
            const userUpdated = await database.Users.findOne({ where: {id: Number(id)} })
            return res.status(200).json(userUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteUser(req, res) {
        const { id } = req.params
        try {
            await database.Users.destroy({ where: {id: Number(id)} })
            return res.status(200).json({ mensagem: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }



    //http://localhost:3000/users/1/comments/2
    //http://localhost:3000/users/:userId/comments/:commentId
    static async getOneComment(req, res) {
        const { userId, commentId } = req.params
        try {
            const oneComment = await database.Comments.findOne( { 
                where: {
                    user_id: Number(userId),
                    id: Number(commentId) 
                } 
            } );
            return res.status(200).json(oneComment)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //http://localhost:3000/users/:userId/comments
    static async createComment(req, res) {
        const { userId } = req.params
        const newComment = { ...req.body, user_id: Number(userId) }
        try{
            const newCommentCreated = await database.Comments.create(newComment)
            return res.status(200).json(newCommentCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //http://localhost:3000/users/1/comments/2
    static async updateComment(req, res) {
        const { userId, commentId } = req.params
        const newInfo = req.body
        try {
            await database.Comments.update( newInfo, {
                 where: {
                    user_id: Number(userId),
                    id: Number(commentId)  
                 }
            } )
            const commentUpdated = await database.Comments.findOne({
                where: { id: Number(commentId)} })
            return res.status(200).json(commentUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //http://localhost:3000/users/1/comments/2
    static async deleteComment(req, res) {
        const { userId, commentId } = req.params
        try {
            await database.Comments.destroy({  
                where: {
                    user_id: Number(userId),
                    id: Number(commentId)  
                }
            })
            return res.status(200).json({ mensagem: `id ${commentId} deleted` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


}

module.exports = UserController