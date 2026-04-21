import React, { useState } from 'react';
import './sidebar.css';
import { sidebarData } from './SidebarData';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'close'}`}>
      <div className='sidebar-header'>
            <button className='toggle-btn' onClick={toggleSidebar}>
                <div className={`arrow ${isOpen ? 'left' : 'right'}`}>

                </div>
            </button>
            <div className='logo'>
                <h2>{isOpen ? "My-App" : ""}</h2>
            </div>
      </div>
      <nav className='sidebar-nav-menu'>
            <ul>
                {
                    sidebarData?.map((item, index) => {
                        return(
                        <li key={index}>
                            <a href={item.path}>
                                {item.icon} 
                                {isOpen ? item.title : ""}
                            </a>
                        </li>
                        )
                    })
                }
            </ul>
      </nav>
    </div>
  )
}

export default SideBar
