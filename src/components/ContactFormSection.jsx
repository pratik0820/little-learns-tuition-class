import React from 'react';
import EnquiryForm from './EnquiryForm';
import Button from './Button';
import { generateWhatsAppURL, getContextualWhatsAppURL } from '../utils/whatsapp';
import './ContactFormSection.css';

/**
 * Contact Form Section Component
 * 
 * Displays contact form with phone and WhatsApp buttons
 */
const ContactFormSection = () => {
  const handleFormSubmit = (formData) => {
    // Create WhatsApp message with form data
    const message = `Hi! I would like to enquire about tuition classes.

Student Name: ${formData.firstName} ${formData.middleName} ${formData.surname}
Standard: ${formData.studentStandard}
Contact Number: ${formData.contactNumber}${formData.message ? `\nMessage: ${formData.message}` : ''}`;

    // Generate WhatsApp URL with the form data
    const whatsappURL = generateWhatsAppURL(message, null, 'contact_form');
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="contact-form" className="contact-form-section">
      <div className="container">
        <h2 className="contact-form-section__title">Get In Touch</h2>
        <div className="contact-form-section__content">
          <div className="contact-form-section__form">
            <EnquiryForm onSubmit={handleFormSubmit} />
          </div>
          <div className="contact-form-section__buttons">
            <Button
              variant="primary"
              size="large"
              href="tel:+918390339784"
              className="contact-form-section__button"
            >
              📞 +91 8390339784
            </Button>
            <Button
              variant="whatsapp"
              size="large"
              href={getContextualWhatsAppURL('home')}
              className="contact-form-section__button"
            >
              💬 Message Us on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
