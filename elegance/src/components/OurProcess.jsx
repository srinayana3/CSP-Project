import React from 'react';

function OurProcess() {
  return (
    <section className="process-section">
      <div className="container">
        <h2>Our Process</h2>
        <p className="subtitle">A seamless journey from inspiration to installation</p>
        
        <div className="process-steps">
          <div className="process-step">
            <div className="process-number">01</div>
            <div className="process-text">
              <h3>Initial Consultation</h3>
              <p>We begin with a detailed discussion about your vision, lifestyle, and project goals. This helps us understand your needs and set the foundation for success.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="process-number">02</div>
            <div className="process-text">
              <h3>Concept Development</h3>
              <p>Our designers create mood boards, floor plans, and 3D renderings to visualize your space. You'll see exactly how everything will come together.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="process-number">03</div>
            <div className="process-text">
              <h3>Material Selection</h3>
              <p>Together, we curate furniture, fabrics, finishes, and accessories. We source from trusted suppliers and artisans to ensure exceptional quality.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="process-number">04</div>
            <div className="process-text">
              <h3>Implementation</h3>
              <p>We manage every detail of the installation, from delivery coordination to final styling. Your space is transformed with minimal disruption to your daily life.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProcess;