import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/blueRed.png'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#team' onClick={closeMenu}>Team</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/#blog' onClick={closeMenu}>Blog</a>
                    </li>
					<li className='nav-item'>
                        <a href='/#shop' onClick={closeMenu}>Shop</a>
                    </li>
					<li className='nav-item'>
                        <a href='/#contact' onClick={closeMenu}>Contact</a>
                    </li>
                </ul>
                <div className='social'>
          			<i className='fab fa-facebook-f icon'></i>
          			<i className='fab fa-instagram icon'></i>
          			<i className='fab fa-twitter icon'></i>
          			<i className='fab fa-youtube icon'></i>
        		</div>
            </nav>
        </div>
    )
}

export default Navbar
