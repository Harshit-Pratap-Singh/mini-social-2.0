import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import Posts from './Posts'
import './UserHome.css'
import { useHistory } from 'react-router'
import Post_modal from './Post_modal'



function UserHome() {
    const[{auth},dispatch]=useStateValue();
    const history=useHistory();
    const [modal, setModal] = useState(false);
    // const [isFilled, setIsFilled] = useState(false);
    // const [title, setTitle] = useState("");
    // const [thoughts, setThoughts] = useState('');
    // if(!auth){
    //     alert('Please LogIn First');
    //     history.push('/errr');
    // }

    
 const toggle=() =>setModal(!modal);

    return (
        <div className='userhome'>
      
            <div className="userhome__createPosts">
                <div className="userhome__dp">
                    <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
                    alt='profile pic'
                    className="pic"
                    />
                </div>
                <div className="userhome__create" onClick={toggle}>
                    <span>What's on your mind?</span>
                   <Post_modal modal={modal} toggle={toggle}/>
                </div>
            </div>
            
            <Posts />
        </div>
    )
}



export default UserHome
