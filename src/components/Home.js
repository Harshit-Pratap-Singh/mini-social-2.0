import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
    return (
        <div className='home'>
            <div className="home__1">
                <div className="home__option">
                    <h1><Link className='home__nodec' to='/login'>LogIn</Link></h1>
                </div>
                <div className="home__option">

                    <h1><Link to='/signup' className='home__nodec'>Sign Up</Link></h1>

                </div>
            </div>
        </div>
    )
}

export default Home
