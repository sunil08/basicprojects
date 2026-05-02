import React, { useState } from 'react'
import './Navbar.css'
import {BrowserRouter as Router, NavLink, Route, Routes } from 'react-router'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Home from './Home'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    }

  return (
    <Router>
        <nav className='navbar'>
          <div className='navbarLogo'>Website</div>
          <div className='menu' onClick={toggleMenu}>
            <div className='menu-icon'></div>
            <div className='menu-icon'></div>
            <div className='menu-icon'></div>
          </div>
          <ul className={isMenuOpen ? 'navbar-links active' : 'navbar-links'}>
            <li><NavLink to='/' onClick={toggleMenu}>Home</NavLink></li>
            <li><NavLink to='/service' onClick={toggleMenu}>Services</NavLink></li>
            <li><NavLink to='/about' onClick={toggleMenu}>About</NavLink></li>
            <li><NavLink to='/contact' onClick={toggleMenu}>Contact</NavLink></li>
          </ul>
        </nav>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/service' element={<Services/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </Router>
  )
}

export default Navbar
