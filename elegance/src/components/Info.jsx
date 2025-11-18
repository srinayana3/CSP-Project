import React from 'react';

function ShowroomInfo() {
  return (
    <div className="contact-info-col">
      
      <div className="showroom-box">
        <h3>Visit Our Showroom</h3>
        <div className="info-item">
          <strong>Location</strong>
          <p>123 Design District Avenue<br />San Francisco, CA 94103</p>
        </div>
        <div className="info-item">
          <strong>Phone</strong>
          <p>(415) 555-0123</p>
        </div>
        <div className="info-item">
          <strong>Email</strong>
          <p>hello@artisanhome.com</p>
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