import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/dibazaarLogo.png'
import '../layout/Navbar.css'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">
                    <img className="logo" src={Logo} alt="Dibazaar-Logo"/>
                </Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
}

export default Navbar;