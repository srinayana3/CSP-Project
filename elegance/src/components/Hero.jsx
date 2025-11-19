import React from 'react';
import { Link } from "react-router-dom"; 
import HeroImage from '../assets/hero-image1.jpg'; 

function Hero() {
  return (
    <header className="hero" style={{ backgroundImage: `url(${HeroImage})` }}>
      <div className="hero-content">
        <h1>Curated Furniture for Modern Living</h1>
        <p>Transform your space with timeless pieces crafted for beauty, comfort, and lasting quality</p>
        <div className="hero-buttons">
          <a href="/portfolio" className="btn btn-primary">Explore Collections &rarr;</a>
          <a href="/contact" className="btn btn-secondary">Schedule Consultation</a>
        </div>
      </div>
    </header>
  );
}

export default Hero;