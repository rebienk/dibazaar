import React from 'react'
import {NavLink} from 'react-router-dom'


const SignedInLinks = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <ul className="right">
                    <li><NavLink to='/create'>New Projects</NavLink></li>
                    <li><NavLink to='/'>Log Out</NavLink></li>
                    <li><NavLink to='/' className="btn btn-floating red
                     lighten-1">RK</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default SignedInLinks;