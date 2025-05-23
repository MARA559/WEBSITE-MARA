import React from 'react';

const Navbar = ({ activeSection }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900">
      <div className="text-lg font-bold">My Portfolio</div>
      <ul className="flex space-x-4">
        <li className={activeSection === 'home' ? 'text-yellow-500' : ''}>
          <a href="#home">Home</a>
        </li>
        <li className={activeSection === 'portfolio' ? 'text-yellow-500' : ''}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className={activeSection === 'about' ? 'text-yellow-500' : ''}>
          <a href="#about">About</a>
        </li>
        <li className={activeSection === 'contact' ? 'text-yellow-500' : ''}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;