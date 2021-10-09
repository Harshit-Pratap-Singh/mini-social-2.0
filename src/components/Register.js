import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import { useHistory } from 'react-router'
import axios from 'axios';
import {baseUrl} from './baseUrl';
import validator from 'validator';
import {  useStateValue } from '../StateProvider';

function Login() {
    const history=useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name ,setName]=useState("");
    const [rePassword, setRePassword] = useState("");
    const [,dispatch]=useStateValue();


    const signUp=(event)=>{
        event.preventDefault();
        if(name && password && rePassword && validator.isEmail(email) ){
        if(password===rePassword){
            axios.post(baseUrl+'register',{
                name,
                email,
                password
            }).then(res => alert(res.data.message))
            .then(()=> dispatch({
                type: 'AUTH_USER',
                payload: {
                    name,
                    email
                }
            }))
            .then(() => history.push('/userhome'))
            .catch(err => alert(err.message))

        }
        else alert("Password didn't match");
    }
    else alert('Invalid Input');
       
    }
    return (
        <div className='register'>
            <div className="title"><h1>mini-Social</h1></div>
            <div className='containe'> 
            <form >
                <h2>Name</h2>
                <input  type='text' className='name' onChange={e => setName(e.target.value)} value={name}/>
                <h2>E-mail</h2>
                <input type="email" className='email' onChange={e => setEmail(e.target.value)} value={email}/>
                <h2>Password</h2>
                <input type="password" name='password' onChange={e => setPassword(e.target.value)} value={password}/>
                <h2>Re-Enter Password</h2>
                <input type="password" name='rePassword' onChange={e => setRePassword(e.target.value)} value={rePassword}/>
                <button type="submit" onClick={signUp}>Sign Up</button>
            </form>
            <p>Existing User?</p>
                <p> <Link to='/login'>Log-In to your account </Link></p>
            </div>
        </div>
    )
}

export default Login
