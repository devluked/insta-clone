import './App.css';
import FetchPosts from './fetchPosts'
import CreatePost from './createPost'
import { useState } from 'react';


function App() {
  return (
    <div className="App">
      <Feed/>
    </div>
  );
}

function Feed() {
  const [ isPosting, toggleMode] = useState(false)
  const addPostHandler = () => {
    toggleMode(!isPosting)
    console.log(isPosting)
  }

  if (isPosting === false)
    return (
      <div>
        <AddPostBtn postHandler={addPostHandler}/>
        <FetchPosts/>
      </div>
    )
  else return (
      <div>
        <AddPostBtn postHandler={addPostHandler}/>
        <CreatePost/>
      </div>
  )
}

function AddPostBtn(props) {
  return (
    <button onClick={props.postHandler}>Create Post</button>

  )
}





export default App;
