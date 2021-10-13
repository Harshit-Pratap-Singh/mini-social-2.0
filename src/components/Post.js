import React from 'react'
import { useHistory } from 'react-router';
import { useStateValue } from '../StateProvider';
import './Post.css'
function Post({post}) {
    const history=useHistory();
    console.log(post.title);
    const [,dispatch]=useStateValue();
    const handleDelete=()=>{
            dispatch({
                type:'DELETE_POST',
                id:post.id
            })
    }
    const handleEdit=()=>{
        history.push(`/editpost/${post.id}`);
    }

    return (
        <div className='post'>
            <h1 className='post__title'>{post.title}</h1>
            <p className='psot__description'>{post.description}</p>
            <div className="post__option">
                <button className='post__editButton' onClick={handleEdit}>Edit</button>
                <button className='post__deleteButton' onClick={handleDelete}>Delete</button>

            </div>
        </div>
    )
}

export default Post
