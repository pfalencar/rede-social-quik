const database = require('../../models')

class PostController {
    static async getAllPosts(req, res) {
        try {
            const allPosts = await database.Posts.findAll()
            return res.status(200).json(allPosts)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getOnePost(req, res) {
        const { id } = req.params
        try {
            const onePost = await database.Posts.findOne( { where: { id: Number(id) } } );
            return res.status(200).json(onePost)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createPost(req, res) {
        const newPost = req.body
        try{
            const newPostCreated = await database.Posts.create(newPost)
            return res.status(200).json(newPostCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateUser(req, res) {
        const { id } = req.params
        const newInfo = req.body
        try {
            await database.Posts.update( newInfo, { where: {id: Number(id)} } )
            const postUpdated = await database.Posts.findOne({ where: {id: Number(id)} })
            return res.status(200).json(postUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletePost(req, res) {
        const { id } = req.params
        try {
            await database.Posts.destroy({ where: {id: Number(id)} })
            return res.status(200).json({ mensagem: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PostController