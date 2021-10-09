import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider';
import './Login.css'
import { useHistory } from 'react-router'
import validator from 'validator';
import axios from 'axios';
import { baseUrl } from './baseUrl';


function Login() {
    const history=useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [,dispatch]=useStateValue();

    const signIn=(event)=>{
        event.preventDefault();
       if(validator.isEmail(email) && password ){
           axios.post(baseUrl+'login',{email,password})
           .then(res => {
               dispatch({
                   type:"AUTH_USER",
                   payload: email
               })
               alert(res.data.message);
            })
           .then(() => history.push('/userhome'))
           .catch(err => alert(err.message))
       }
       else{
           alert('Invalid Input');
       }
    }
    return (
        <div className='login'>
            <div className="title"><h1>mini-Social</h1></div>
            <div className='containe'> 
            <form >
                <h2>E-mail</h2>
                <input type="email" className='email' onChange={e => setEmail(e.target.value)} value={email}/>
                <h2>Password</h2>
                <input type="password" name='password' onChange={e => setPassword(e.target.value)} value={password}/>
                <button type="submit" onClick={signIn}>Sign In</button>
            </form>
            <p>New user?</p>
                <p> <Link to='/signup'>Create a new account </Link></p>
            </div>
        </div>
    )
}

export default Login
