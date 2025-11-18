import React from 'react';
import { Link } from 'react-router-dom';

function WhyChooseUs() {
  return (
    <section className="why-choose-section">
      <div className="container">
        <div className="why-choose-box">
          <h2>Why Choose Elegance?</h2>
          <div className="checklist-grid">
            <div className="check-item"><span>✔</span> Experienced design professionals</div>
            <div className="check-item"><span>✔</span> Personalized attention to detail</div>
            <div className="check-item"><span>✔</span> Curated furniture collections</div>
            <div className="check-item"><span>✔</span> Transparent pricing</div>
            <div className="check-item"><span>✔</span> Project management expertise</div>
            <div className="check-item"><span>✔</span> Quality craftsmanship guarantee</div>
          </div>
          <Link to="/contact" className="btn btn-primary">Start Your Project &rarr;</Link>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;