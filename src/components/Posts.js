import React from 'react'
import { useStateValue } from '../StateProvider'

function Posts() {
    const [{posts}]=useStateValue();    
    return (
        <div className='posts'>
            
        </div>
    )
}

export default Posts 
