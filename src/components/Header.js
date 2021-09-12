import React from 'react'
import { useHistory } from 'react-router';
import { useStateValue } from '../StateProvider'
import './Header.css'
function Header() {
    const [{auth},dispatch]=useStateValue();
    const history=useHistory();
    const handleClick=()=>{
        dispatch({
            type:"DEAUTH_USER"
        })
        history.push('/');
    }
    return (
        <div className='header'>
            <div className="header__name" style={!auth ?{margin:"auto",fontSize:"2rem"} :null}><h2>mini-Social</h2></div>
            <div className="header__signIn" style={!auth ? {position:'absolute', visibility:'hidden'}:null } onClick={handleClick}>Sign Out</div>
        </div>
    )
}

export default Header
