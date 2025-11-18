import React from 'react';
import { Link, NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-logo" href="/">ELEGANCE</a>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({isActive}) => isActive ? 'active' : ''}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={({isActive}) => isActive ? 'active' : ''}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
          </li>
        </ul>
        <Link to="/get-started" className="btn btn-primary">Get Started</Link>
      </div>
    </nav>
  );
}

export default Navbar;