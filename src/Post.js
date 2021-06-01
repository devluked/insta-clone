import { useState } from 'react'

function Post({ post }) {
    const { profilePic, authorName, locationData, postImg, filler, likes, timestamp, comments, commentAuthors } = post;
    const [ isLiked, toggleLike ] = useState(false);
    const [ isBooked, toggleBook ] = useState(false);

    const [ addLike, toggleLikeAdd ] = useState(likes);


    const handleLikeClick = () => {
        toggleLike(!isLiked)
        isLiked === false ? toggleLikeAdd(likes+1) : toggleLikeAdd(likes)
    }

    const handleBookClick = () => {
        toggleBook(!isBooked)
    }

    return (
        <div className='userpost'>
            <div className='topbar'>
                <a><img alt='' className='profilepic' src={profilePic}/></a>
                <div className='toptext'>
                    <a className='authorName'>{authorName}</a>
                    <a className='locationtext'>{locationData}</a>
                </div>
            </div>
            <img src={postImg} className='postImg' alt=''/>
                <div className='likecommentbook'>
                    <button onClick={handleLikeClick} className='likebtn'><i className={!isLiked ? 'heart outline icon' : 'heart icon'}></i></button>
                    <button onClick={()=>console.log('comment')} className='likebtn'><i className='comment outline icon'></i></button>
                    <div className='bookmark'>
                        <button 
                            onClick={handleBookClick} 
                            className='likebtn'
                        >
                            <i className={isBooked === false ? 'bookmark outline icon': 'bookmark icon'}/>
                        </button>
                    </div>
                </div>
                <div className='liketracker'>
                    <p>Liked by <a>NAME</a> and <a>{addLike} others</a></p>

                </div>
                <div className='descriptionbox'>                    
                    <p><a>{ authorName }</a> {filler}</p>
                </div>
                <div className='commentbox'>
                    { comments.map((comment, index)=>
                    <p className='commenttext'><a key={index}>{ commentAuthors[index] }</a> { comment } </p>
                    )}
                    <p className='timestamp'>{timestamp} HOURS AGO</p>
                </div>
                <div className='leavecomment'>
                    <button><i className='smile outline icon'></i></button>
                    <textarea placeholder='Add a comment...'></textarea>
                    <button><p>Post</p></button>
                </div>

        </div>
    )
}

export default Post