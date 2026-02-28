import React, { useState } from 'react';
import Section from '../components/Section';
import ContactInfo from '../components/ContactInfo';
import GoogleMapsEmbed from '../components/GoogleMapsEmbed';
import EnquiryForm from '../components/EnquiryForm';
import SEO from '../components/SEO';
// import { sendEnquiryEmail } from '../services/emailService';
import './Contact.css';

/**
 * Contact Page Component
 * 
 * Assembles the contact page with:
 * - Contact information (phone, WhatsApp, address, hours)
 * - Google Maps embed
 * - Enquiry form
 * 
 * Layout:
 * - Two-column layout on desktop (info/map on left, form on right)
 * - Stacked layout on mobile
 * 
 * Requirements: 7.1, 7.2, 7.3, 7.4, 7.5
 */
const Contact = () => {
  const handleFormSubmit = (formData) => {
    // Format the enquiry data for WhatsApp message
    const message = `*New Enquiry from Website*

*Student Name:* ${formData.firstName} ${formData.middleName} ${formData.surname}
*Standard:* ${formData.studentStandard}
*Contact Number:* ${formData.contactNumber}
${formData.message ? `*Message:* ${formData.message}` : ''}

_This enquiry was submitted through the website._`;

    // Generate WhatsApp URL with the enquiry details
    const whatsappURL = generateWhatsAppURL(message);
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="contact-page">
      <SEO 
        title="Contact Us"
        description="Get in touch with us for tuition class enquiries. Call, WhatsApp, or fill out our enquiry form. We respond within 24 hours. Find our location, operating hours, and contact information."
        keywords="contact tuition classes, enquiry form, phone number, WhatsApp contact, location, operating hours, admission enquiry"
      />
      
      <Section style="hero" title="Contact Us">
        <p className="contact-intro">
          Have questions about Little Learns? We'd love to hear from you. 
          Reach out using any of the methods below, and we'll get back to you soon.
        </p>
      </Section>

      <Section style="default" className="contact-content-section">
        {/* Get in Touch Section */}
        <div className="contact-info-section">
          <h2 className="contact-section-title">Get in Touch</h2>
          <ContactInfo
            phoneNumber="+91 8390339784"
            email="littlelearns.contact@gmail.com"
            whatsappNumber="91 8390339784"
            whatsappMessage="Hi! I'm contacting you via your website. I'd like to know more about Little Learns."
            address={{
              street: 'Dattanagar behind Siddhivinayak Mandir',
              city: 'At Little Pearls Nursery School, Pune',
              state: 'Maharashtra',
              pincode: '411046'
            }}
            operatingHours={{
              weekdays: 'Monday - Saturday',
              timing: '6:00 PM - 8:00 PM',
              closed: 'Sunday'
            }}
          />

          <div className="contact-map-container">
            <h3 className="contact-subsection-title">Find Us</h3>
            <GoogleMapsEmbed
              embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.738999456405!2d73.8493161!3d18.4501559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebbddc17462b%3A0x405afc8a962580fb!2sDhamale%20Developers!5e0!3m2!1sen!2sin!4v1772296747793!5m2!1sen!2sin"
              title="Little Learns Location"
            />
          </div>
        </div>

        {/* Send Us an Enquiry Section */}
        <div className="contact-form-section">
          <h2 className="contact-section-title">Send Us an Enquiry</h2>
          <p className="contact-form-description">
            Fill out the form below and we'll contact you within 24 hours to discuss 
            your child's needs.
          </p>
          <EnquiryForm onSubmit={handleFormSubmit} />
        </div>
      </Section>
    </div>
  );
};

export default Contact;
