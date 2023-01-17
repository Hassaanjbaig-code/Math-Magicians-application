import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/Calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/Quote',
      text: 'Quotes',
    },
  ];
  return (
    <nav className="nav-bar">
      <h3>Math Magicians</h3>
      <ul className="nav-menu">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} className="nav-item">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
