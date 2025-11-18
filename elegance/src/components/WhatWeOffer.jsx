import React from 'react';

function WhatWeOffer() {
  return (
    <section className="offer-section">
      <div className="container">
        <h2>What We Offer</h2>
        <p className="subtitle">Comprehensive design services to transform every aspect of your home</p>

        <div className="offer-grid">
          {/* Card 1 */}
          <div className="offer-card">
            <div className="offer-icon">Icon</div>
            <div className="offer-text">
              <h3>Interior Design</h3>
              <p>Complete interior design services tailored to your style, needs, and budget. From concept to completion, we create cohesive spaces that reflect your personality.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="offer-card">
            <div className="offer-icon">Icon</div>
            <div className="offer-text">
              <h3>Space Planning</h3>
              <p>Maximize functionality and flow with expert space planning. We optimize layouts to ensure every square foot serves a purpose while maintaining aesthetic appeal.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="offer-card">
            <div className="offer-icon">Icon</div>
            <div className="offer-text">
              <h3>Custom Furniture</h3>
              <p>Bespoke furniture pieces designed and crafted to your exact specifications. Perfect for unique spaces or when you can't find exactly what you're looking for.</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="offer-card">
            <div className="offer-icon">Icon</div>
            <div className="offer-text">
              <h3>Design Consultation</h3>
              <p>One-on-one guidance from our design experts. Get professional advice on color palettes, furniture selection, styling, and room transformations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;