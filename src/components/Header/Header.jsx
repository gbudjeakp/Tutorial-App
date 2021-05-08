import React from 'react'
import {NavLink} from "react-router-dom";
  
function Header() {
    return (
        <div>
            <nav className="nav">
                <ul>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/register">Signup</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Header
