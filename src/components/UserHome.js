import React from 'react'
import { Link } from 'react-router-dom'

function UserHome() {
    return (
        <div className='userhome'>
            <Link to='/createpost'>Create a new Post</Link>
        </div>
    )
}

export default UserHome
