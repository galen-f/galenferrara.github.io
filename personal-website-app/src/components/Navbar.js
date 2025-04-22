import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';

function Navbar() {

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
            <img src="./GF-logo.png" alt="Logo" className="navbar-logo" />
            </Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar