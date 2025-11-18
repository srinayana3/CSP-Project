import React from 'react';
import ContactHeader from '../components/ContactHeader';
import ContactForm from '../components/ContactForm';
import Info from '../components/Info';
import Consultation from '../components/Consultation';

function ContactPage() {
  return (
    <>
      <ContactHeader />
      <section className="contact-main">
        <div className="container contact-grid">
          <ContactForm />
          <Info />
        </div>
      </section>

      <Consultation />
    </>
  );
}

export default ContactPage;