import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State to manage sidebar visibility
  const navItems = [
    {
      navRoute: '/organization1',
      navField: 'Organization 1'
    },
    {
      navRoute: '/organization2',
      navField: 'Organization 2'
    },
    {
      navRoute: '/organization3',
      navField: 'Organization 3'
    },
    {
      navRoute: '/organization4',
      navField: 'Organization 4'
    },
    {
      navRoute: '/organization5',
      navField: 'Organization 5'
    }
  ];

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
          {navItems.map((item)=>(<><li><Link to={item.navRoute}>{item.navField}</Link></li><hr/></>))}
  
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
