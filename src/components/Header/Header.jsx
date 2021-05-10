import React from 'react'
import {NavLink} from "react-router-dom";
import "./Header.css"
  
function Header() {
    return (
        <div className="header">
            <nav>
                <ul className="menuContainer">
                    <li><NavLink className="menu" to="/dashboard">Dashboard</NavLink></li>
                    <li><NavLink className="menu" to="/register">Signup</NavLink></li>
                    <li><NavLink className="menu" to="/login">Login</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
