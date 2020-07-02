import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
            <Link  to='/'>
                    <li>Home</li>
                </Link>
                <Link  to='/users'>
                    <li>Current Users</li>
                </Link>
                <Link  to='/form'>
                    <li>Add User</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
