import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json(); 

      if (response.ok && result.success) {
        setStatus('Message sent and saved successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' }); 
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error connecting to database.');
    }
  };

  return (
    <div className="contact-form-col">
      <h3>Send Us a Message</h3>
      <p>Fill out the form below and our team will respond within 24 hours. For urgent inquiries, please call us directly.</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" placeholder="Your full name" required value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" placeholder="your.email@example.com" required value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" placeholder="(91+) 1234 567890" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea id="message" rows="6" placeholder="Tell us about your project, timeline, and what you're hoping to achieve..." required value={formData.message} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
        {status && <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{status}</p>}
      </form>
    </div>
  );
}

export default ContactForm;