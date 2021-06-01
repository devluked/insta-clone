import './App.css';
import Post from './Post.js';
import { posts } from './data.js'
import { useState } from 'react';
import Axios from 'axios'


function App() {
  return (
    <div className="App">
      <ShowFetch/>
     <Feed/>
    </div>
  );
}

function Feed() {
  return (
  <Post post={posts[0]}/>
  )
}

function ShowFetch() {
  const [ posts, setPosts ] = useState([null])

  Axios.get('http://localhost:3001/api').then((response) => {
      setPosts(response.data)
    })

    console.log((posts[0].profilePic))

  return (
    <div>
    </div> 
  )
}




export default App;
