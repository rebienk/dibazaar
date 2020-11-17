import React from 'react'
import {NavLink} from 'react-router-dom'


const SignedOutLinks = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <ul className="right">
                    <li><NavLink to='/signup'>Sign up</NavLink></li>
                    <li><NavLink to='/signin'>Log In</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default SignedOutLinks;