const path = require('path')

module.exports = {
    env: {
        MONGO_URI: 'mongodb+srv://admin:vincent@cluster0.scz0e.mongodb.net/<dbname>?retryWrites=true&w=majority'
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    }
}
