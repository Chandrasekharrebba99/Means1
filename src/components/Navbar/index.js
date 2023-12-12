
import React, { useState } from 'react';

import './index.css'; // Import the CSS file

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        
        <button className="toggle-button" onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
    </button>
    <ul>
      <li>Home</li>
      <li>Profile</li>
      <li>Jobs/Interns</li>
      <li>Friends</li>
      <li>Networks</li>
      <li>My Referels</li>
      <li>Blogs</li>
    </ul>
  </div>
  );
}

export default Navbar;
