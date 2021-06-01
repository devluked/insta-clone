const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Post = require("./models/post");
var cors = require('cors')


//connect to mongoose
mongoose.connect(
    "mongodb+srv://admin:dugman11@cluster0.ztijp.mongodb.net/posts?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true},
    (req, res) => {
        console.log("Connected to database")
    })

app.use(cors())
app.get('/api', (req, res) => {
    Post.find().lean()
    .then((result) => {
        res.json(result)
        console.log(result)
    })
    .catch((err)=> {
        console.log(err)
    })
})

const port = process.env.PORT || 3001
app.listen(port, function() {
    console.log("express server is running on port " + port)
})

