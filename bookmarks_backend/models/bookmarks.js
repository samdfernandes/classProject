const mongoose = require('mongoose')

const bookmarkSchema = mongoose.Schema({
    name: {type: String, required: true},
    link: {type: String, required: true},
    description: {type: String},
    selected: {type: Boolean, default: false}
})

module.exports = mongoose.model('Bookmark', bookmarkSchema)