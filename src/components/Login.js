import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider';
import './Login.css'
import { useHistory } from 'react-router'


function Login() {
    const history=useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [{user},dispatch]=useStateValue();

    const signIn=(event)=>{
        event.preventDefault();
        console.log(typeof password);
        console.log(typeof(user.password));

            if(user.email === email)
            {
                if(user.password === password){
                dispatch({
                    type: 'AUTH_USER',
                })
                history.push('/userhome');
            }
            else{
                alert("Wrong E-mail and Password")
            } 
         }
            else{
                alert("Wrong E-mail and Password")
            }   
    }
    return (
        <div className='login'>
            <div className="title"><h1>mini-Social</h1></div>
            <div className='container'> 
            <form >
                <h2>E-mail</h2>
                <input type="email" name='email' onChange={e => setEmail(e.target.value)} value={email}/>
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
