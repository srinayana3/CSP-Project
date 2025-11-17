import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-logo" href="/">ELEGANCE</a>
        <ul className="nav-links">
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <a href="/get-started" className="btn btn-primary">Get Started</a>
      </div>
    </nav>
  );
}

export default Navbar;