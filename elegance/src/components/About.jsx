import React from 'react';
import AboutImg from '../assets/hero-image.jpg';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="container about-grid">
        <div className="about-image">
          <img src={AboutImg} alt="Woman arranging flowers in a vase" />
        </div>
        <div className="about-content">
          <h2>Crafted with Purpose, Designed for Life</h2>
          <p>At Elegance,furniture should be more than functional, should tell a story. Each piece in our collection is thoughtfully selected or custom-designed to bring warmth, character, and sophistication to your space.</p>
          <p>From sustainable materials to timeless aesthetics, we're committed to creating interiors that feel authentically yours. Whether you're furnishing a single room or transforming your entire home, our team is here to guide you every step of the way.</p>
          <a href="/about" className="btn btn-secondary-outline">Learn More About Us &rarr;</a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
