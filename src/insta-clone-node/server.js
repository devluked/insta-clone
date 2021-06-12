const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const logger = require('morgan');
const mongoose = require("mongoose")
const Post = require("./models/post");
var cors = require('cors')

app.use(cors({

}))
app.use(express.json())
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//connect to mongoose
mongoose.connect(
    "mongodb+srv://admin:dugman11@cluster0.ztijp.mongodb.net/posts?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true},
    (req, res) => {
        console.log("Connected to database")
    })



app.get('/api', (req, res) => {
    var time = new Date()
    Post.find().lean()
    .then((result) => {
        res.json(result)
        // console.log(result)
        // console.log("Time of get request: " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds())
    })
    .catch((err)=> {
        console.log(err)
    })
})

app.post('/post', function(req, res) {
    const newPost = {
        _id: req.body._id,
        profilePic: req.body.pfp,
        authorName : req.body.username,
        postImg : req.body.imageLink,
        filler : req.body.description,
        likes: req.body.likes,
        commentAuthors: req.body.commentAuthors,
        comments: req.body.comments,
        timestamp: req.body.timestamp
    }
    res.send(newPost)
    console.log(newPost)
    res.end()
})

const port = process.env.PORT || 3001
app.listen(port, function() {
    console.log("express server is running on port " + port)
})

