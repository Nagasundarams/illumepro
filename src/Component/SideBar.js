import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const Sidebar = ({navItems = [] }) => {
  const [isOpen, setIsOpen] = useState(true); // State to manage sidebar visibility
 

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? 'Hide' : 'Show'} Menu
      </button>
      <nav className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <ul>
          {navItems.map((item)=>(<><li><a >{item.navField}</a></li><hr/></>))}
  
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
