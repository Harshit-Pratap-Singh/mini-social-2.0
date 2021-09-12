import React from 'react'
import { useStateValue } from '../StateProvider'
import Post from './Post';
import './Posts.css'
function Posts() {
    const [{posts},dispatch]=useStateValue();
    console.log();    
    return (
        <div className='posts'>
            {posts.map((post)=> <Post key={post.id} post={post}/>)}
        </div>
    )
}

export default Posts 
