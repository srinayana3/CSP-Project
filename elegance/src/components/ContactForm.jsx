import React from 'react';

function ContactForm() {
  return (
    <div className="contact-form-col">
      <h3>Send Us a Message</h3>
      <p>Fill out the form below and our team will respond within 24 hours. For urgent inquiries, please call us directly.</p>
      
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" placeholder="Your full name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" placeholder="your.email@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" placeholder="(91+) 1234 567890" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea id="message" rows="6" placeholder="Tell us about your project, timeline, and what you're hoping to achieve..."></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;