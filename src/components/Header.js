import React, { useEffect, useState } from 'react'
import './header.css'

function Header() {

    const [scroll, setScroll] = useState('')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100)
            setScroll(true)
            else
            setScroll(false)
        })

        return () => {
            window.removeEventListener("scroll")
        }
    },[])


    return (
        <div className={`header ${scroll && "header__dark"}`}>
            <img 
            className="header__logo" 
            src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" 
            alt="" />
            <h2 className="header__avatar"> Profile </h2>
        </div>
    )
}

export default Header
