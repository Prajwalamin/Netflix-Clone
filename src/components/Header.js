import React from 'react'
import './header.css'

function Header() {
    return (
        <div className="header">
            <img 
            className="header__logo" 
            src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" 
            alt="" />
            <h2> Profile </h2>
        </div>
    )
}

export default Header
