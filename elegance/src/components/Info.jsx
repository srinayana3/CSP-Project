import React from 'react';

function ShowroomInfo() {
  return (
    <div className="contact-info-col">
      
      <div className="showroom-box">
        <h3>Visit Our Showroom</h3>
        <div className="info-item">
          <strong>Location</strong>
          <p>123 Design District Avenue<br />Bhilai, 440012</p>
        </div>
        <div className="info-item">
          <strong>Phone</strong>
          <p>(91+)99001-88001</p>
        </div>
        <div className="info-item">
          <strong>Email</strong>
          <p>elegance@gmail.com</p>
        </div>
        <div className="info-item">
          <strong>Hours</strong>
          <p>Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm<br />Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}

export default ShowroomInfo;