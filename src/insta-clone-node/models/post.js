const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema ({
    _id: Number, 
    profilePic: String,
    locationData: String,
    authorName : String,
    postImg : String,
    filler : String,
    likes: Number,
    commentAuthors: [{type: String}],
    comments: [{type: String}],
    timestamp: Number
}, {collection: 'postscollection'})

const Post = mongoose.model('Post', postSchema)
module.exports = Post

