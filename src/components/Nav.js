import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Nav() {
    return (
        <div className="nav-container">
            <div className="home-btn">
                <Link to='/' className="nav-text">Home</Link>
            </div> 
            <div className="profile-btn">
                <Link to='/profile' className="nav-text">Profile</Link>
            </div>
        </div>
    )
}

export default Nav
