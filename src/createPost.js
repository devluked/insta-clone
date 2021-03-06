
import './App.css'
import { useState } from 'react'
import axios from 'axios'

function CreatePost() {
    const [postData, setPostData] = useState({
        _id: 10,
        pfp: '',
        username: '',
        location: '',
        imageLink: '',
        description: '',
        likes: 9,
        commentAuthors: [""],
        comments: [""],
        timestamp: 7
    })

    const handleFormChange = (e) => {
        const {name, value} = e.target
        setPostData(prev => ({...prev, [name]: value}))
        console.log(postData)

        console.log()
    }

    const handleFormSubmit = (e) => {
        const post = ({
            _id: Math.floor(Math.random()*100),
            profilePic: postData.pfp,
            authorName : postData.username,
            postImg : postData.imageLink,
            filler : postData.description,
            likes: 9,
            commentAuthors: [""],
            comments: [""],
            timestamp: 7
        })
        console.log(post)
        sendPostRequest(post)
        alert('submitted')


        

    }

    const sendPostRequest = (post) => { 

        axios({
            method: 'post',
            headers: { 'Content-Type': 'application/json'},
            url: 'http://localhost:3001/post',
            data: post,
          }).then(function (response) {
            console.log(response);
          });

    }




    return (
        <div>
            <form className="submissionContainer">
                <label>Profile picture link</label>
                <input onChange={handleFormChange} name="pfp" type="text"/>
                <label>Username</label>
                <input onChange={handleFormChange} name="username" type="text"/>
                <label>Location</label>
                <input onChange={handleFormChange} name="location" type="text"/>
                <label>Image link</label>
                <input onChange={handleFormChange} name="imageLink" type="text"/>
                <label>Description</label>
                <input onChange={handleFormChange} name="description" type="text"/>
                <br/>
                <button onClick={handleFormSubmit} type="submit"/>
            </form>
        </div>
    )
}

export default CreatePost