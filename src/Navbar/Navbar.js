import React from 'react'
import './navbar.scss';

export const Navbar = () => {
    return (
        <div className="menu-start">

            <label>
                <input type="checkbox">
                  
                </input>
                <span className="menu">
                        <span className="hamburger"></span>
                    </span>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
            </label>
        </div>
    )
}
