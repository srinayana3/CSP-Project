import React from 'react';
import HeroImage from '../assets/hero-image.jpg'; 
import Kitchen1 from '../assets/Kitchen1.jpg';
import Bedroom1 from '../assets/Bedroom1.jpg';
import Living1 from '../assets/Living1.jpg';
import Bathroom1 from '../assets/Bathroom1.jpg';
import Office1 from '../assets/Office1.jpg'

const placeholderImg1 = HeroImage;
const placeholderImg2 = Kitchen1;
const placeholderImg3 = Bedroom1;
const placeholderImg4 = Bathroom1;
const placeholderImg5 = Living1;
const placeholderImg6 = Office1;

function PortfolioGallery() {
  return (
    <section className="portfolio-gallery">
      <div className="container">
        {/* --- Filter Buttons --- */}
        <div className="portfolio-filters">
          <button className="filter-btn">All</button>
          <button className="filter-btn">Living</button>
          <button className="filter-btn">Bedroom</button>
          <button className="filter-btn">Kitchen</button>
          <button className="filter-btn">Bathroom</button>
          <button className="filter-btn">Office</button>
          <button className="filter-btn">Outdoor</button>
        </div>

        {/* --- Image Grid --- */}
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <img src={placeholderImg1} alt="Portfolio Project 1" />
            <div className="portfolio-overlay">
              <h4>Bedroom</h4>
            </div>
          </div>
          <div className="portfolio-item">
            <img src={placeholderImg2} alt="Portfolio Project 2" />
            <div className="portfolio-overlay">
              <h4>Contemporary Kitchen</h4>
            </div>
          </div>
          <div className="portfolio-item">
            <img src={placeholderImg3} alt="Portfolio Project 3" />
            <div className="portfolio-overlay">
              <h4>Bedroom</h4>
            </div>
          </div>
          <div className="portfolio-item">
            <img src={placeholderImg4} alt="Portfolio Project 4" />
            <div className="portfolio-overlay">
              <h4>Bathroom</h4>
            </div>
          </div>
          <div className="portfolio-item">
            <img src={placeholderImg5} alt="Portfolio Project 5" />
            <div className="portfolio-overlay">
              <h4>Living Room</h4>
            </div>
          </div>
          <div className="portfolio-item">
            <img src={placeholderImg6} alt="Portfolio Project 6" />
            <div className="portfolio-overlay">
              <h4>Office</h4>
            </div>
          </div>
          </div>
      </div>
    </section>
  );
}

export default PortfolioGallery;