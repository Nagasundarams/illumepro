import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const Sidebar = () => {
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
          <li><Link to="/">Organizations</Link></li>
          <hr />
          <li><Link to="/about">Skillrooms</Link></li>
          <hr />
          <li><Link to="/services">Students</Link></li>
          <hr />
          <li><Link to="/contact">Instructors</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
