import Post from './Post.js';
import { useEffect, useState } from 'react';
import Axios from 'axios'

function FetchPosts() {
    const [ posts, setPosts ] = useState('')
  
    useEffect(() => {
      getPosts();
    }, [])
  
    const getPosts = () => {
        Axios.get('http://localhost:3001/api')
        .then((response) => {
          const allPosts = response.data
          setPosts(allPosts)
      })
        .catch(error => console.error('Error: ' + error))  
    }
  
    if (posts.length > 0) {
    return (
      posts.map((post, index) => {
        console.log(post)
        return (
            <Post post={post}/>
        )
      })
    )} else {
      return (
         <h1>Feed is empty. Follow some friends!</h1>
      )
    }
  }

export default FetchPosts