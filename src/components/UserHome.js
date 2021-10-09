import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import Posts from './Posts'
import './UserHome.css'
import { useHistory } from 'react-router'

function UserHome() {
    const[{auth}]=useStateValue();
    const history=useHistory()
    if(!auth){
        alert('Please LogIn First');
        history.push('/errr');
    }
    return (
        <div className='userhome'>
            <Posts />
            <button><Link className="userhome__create" to='/createpost'>Create a new Post</Link></button>
        </div>
    )
}

export default UserHome
