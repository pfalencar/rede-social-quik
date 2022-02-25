const bodyParser = require('body-parser')
const users = require('./usersRoute')
const posts = require('./postsRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(users)
    app.use(posts)
}