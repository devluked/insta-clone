const { response } = require("express")
const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const Post = require("./models/post")

const db ="mongodb+srv://admin:dugman11@cluster0.ztijp.mongodb.net/posts?retryWrites=true&w=majority"
mongoose.Promise = global.Promise
mongoose.connect(db, function(err) {
    if(err) {
        console.log("Error! " + err)
    }
})

router.get('/posts', function(req,res){
    console.log('Get request for all posts')
    Post.find({})
    .exec(function(err, posts){
        if (err){
            console.log("Error retrieving posts")
        } else {
            res.json(posts)
        }
    })
    })


module.exports = router