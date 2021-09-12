import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    const signIn=(event)=>{
        
    }
    return (
        <div className='login'>
            <div className="title"><h1>mini-Social</h1></div>
            <div className='container'> 
            <form >
                <h2>E-mail</h2>
                <input type="email" name='email'/>
                <h2>Password</h2>
                <input type="password" name='password'/>
                <button type="submit" onClick={signIn}>Sign In</button>
            </form>
            <p>New user?</p>
                <p> <Link to='/signup'>Create a new account </Link></p>
            </div>
        </div>
    )
}

export default Login
