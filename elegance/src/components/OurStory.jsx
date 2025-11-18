import React from 'react';

function OurStory() {
  return (
    <section className="story-section">
      <div className="container story-grid">
        
        {/* Left Column: Text */}
        <div className="story-content">
          <h3>Our Story</h3>
          <p>Elegance was born from a simple belief: that the spaces we inhabit should inspire us. Founded in 2010, we set out to make exceptional interior design accessible—combining the expertise of seasoned designers with a personalized, collaborative approach.</p>
          <p>What started as a small studio has grown into a full-service design firm with a carefully curated showroom. Yet our core mission remains unchanged: to create homes that tell authentic stories through thoughtful design and quality craftsmanship.</p>
          <p>Today, we're proud to have transformed hundreds of spaces across the region, each one a unique reflection of the people who live there. From intimate consultations to complete home renovations, we approach every project with the same passion and attention to detail.</p>
        </div>

        {/* Right Column: Timeline */}
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2010</div>
            <p>Elegance founded with a vision for accessible luxury design</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2014</div>
            <p>Expanded to full-service interior design and custom furniture</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2018</div>
            <p>Opened showroom to showcase curated collections</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2023</div>
            <p>Completed 500+ residential projects across the region</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;