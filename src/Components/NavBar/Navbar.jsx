import React, { useState } from 'react'
import './Navbar.css'
import {BrowserRouter as Router, NavLink, Route, Routes, Link, BrowserRouter } from 'react-router'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Home from './Home'
import Cart from '../ReduxToolkitCART/Cart'
import ShoppingHomePage from '../ReduxToolkitCART/ShoppingHomePage';
import './Navbar.css';
import { useSelector } from 'react-redux'

const Navbar = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen); 
    // }

    const cartProducts = useSelector(state => state.cart);

  return (
    // We cannot define more than one BrowserRouter in our app anywhere in any Component.
    <div className='navbar_shopping_layout'>    
    <Router>
        <nav className='navbar'>
            <div className='navbarLogo'>
              <Link to="/">DigiShop</Link>
            </div>
          <ul className='navbar-links'>
            <li><NavLink to='/'></NavLink></li>
            <li><NavLink to='/cart'>Cart {cartProducts.length}</NavLink></li>
          </ul>
        </nav>
        <Routes>
            <Route path='/' element={<ShoppingHomePage/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </Router>
    </div>

    // <Router>
    //     <nav className='navbar'>
    //       <div className='navbarLogo'>Website</div>
    //       <div className='menu' onClick={toggleMenu}>
    //         {/* This is creating hamburger icon when in mobile view */}
    //         <div className='menu-icon'></div>
    //         <div className='menu-icon'></div>
    //         <div className='menu-icon'></div>
    //       </div>
    //       <ul className={isMenuOpen ? 'navbar-links active' : 'navbar-links'}>
    //         <li><NavLink to='/' onClick={toggleMenu}>Home</NavLink></li>
    //         <li><NavLink to='/service' onClick={toggleMenu}>Services</NavLink></li>
    //         <li><NavLink to='/about' onClick={toggleMenu}>About</NavLink></li>
    //         <li><NavLink to='/contact' onClick={toggleMenu}>Contact</NavLink></li>
    //       </ul>
    //     </nav>
    //     <Routes>
    //         <Route path='/' element={<Home/>}/>
    //         <Route path='/about' element={<About/>}/>
    //         <Route path='/service' element={<Services/>}/>
    //         <Route path='/contact' element={<Contact/>}/>
    //     </Routes>
    // </Router>
  )
}

export default Navbar
