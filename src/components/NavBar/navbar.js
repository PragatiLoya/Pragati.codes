import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'

function Navbar() {
    const scrollToSection = (id, e) => {
        e.preventDefault()
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        } else if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <nav className='navbar'>
            <img src={logo} alt="Logo" className='navbarlogo' />

            <div className='navbarmenu'>
                <a href="#home" className='navbarmenuitem' onClick={(e) => scrollToSection('home', e)}>Home</a>
                <a href="#intro" className='navbarmenuitem' onClick={(e) => scrollToSection('intro', e)}>About</a>
                <a href="#skills" className='navbarmenuitem' onClick={(e) => scrollToSection('skills', e)}>Expertise</a>
                <a href="#contact" className='navbarmenuitem' onClick={(e) => scrollToSection('contact', e)}>Contact</a>
            </div>

            <a href="#contact" className='navbarcontact' onClick={(e) => scrollToSection('contact', e)}>
                <img src={contact} alt="contact" className='navbarcontactimg' />
               <span>Contact Me</span> 
            </a>
        </nav>
    )
}

export default Navbar
