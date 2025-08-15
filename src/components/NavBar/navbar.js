import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'



function Navbar() {
    return (

         <nav className='navbar'>
            <img src={logo} alt="Logo" className='navbarlogo' />

            <div className='navbarmenu'>
                <a href="#home" className='navbarmenuitem'>Home</a>
                <a href="#intro" className='navbarmenuitem'>About</a>
                <a href="#skills" className='navbarmenuitem'>Portfolio</a>
                <a href="#contact" className='navbarmenuitem'>Contact</a>
            </div>

            <a href="#contact" className='navbarcontact'>
                <img src={contact} alt="contact" className='navbarcontactimg' />
                Contact Me
            </a>
        </nav>
    )
}

export default Navbar