import React, { useEffect } from 'react';
import Section from '../components/Section';
import ContactInfo from '../components/ContactInfo';
import GoogleMapsEmbed from '../components/GoogleMapsEmbed';
import RegistrationForm from '../components/RegistrationForm';
import SEO from '../components/SEO';
import { sendRegistrationEmail } from '../services/emailService';
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
  // Handle smooth scroll to enquiry section if hash is present
  useEffect(() => {
    if (window.location.hash === '#enquiry') {
      const enquirySection = document.getElementById('enquiry');
      if (enquirySection) {
        setTimeout(() => {
          enquirySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  const handleFormSubmit = async (formData) => {
    try {
      // Send registration email
      await sendRegistrationEmail(formData);
    } catch (error) {
      console.error('Error sending registration:', error);
      throw error;
    }
  };

  return (
    <div className="contact-page">
      <SEO 
        title="Contact Us"
        description="Register your child for tuition classes at Little Learns. Fill out our registration form with student and parent details. We respond within 24 hours. Find our location, operating hours, and contact information."
        keywords="student registration, enroll tuition classes, admission form, contact tuition, phone number, WhatsApp contact, location, operating hours"
      />
      
      <Section style="hero" title="Contact Us">
        <p className="contact-intro">
          Ready to enroll your child at Little Learns? Fill out our registration form below 
          or reach out using any of the contact methods. We'll get back to you within 24 hours.
        </p>
      </Section>

      <Section style="default" className="contact-content-section">
        {/* Get in Touch Section */}
        <div className="contact-info-section">
          <h2 className="contact-section-title">Get in Touch</h2>
          <ContactInfo
            phoneNumber="+91 9272488233"
            email="littlelearns.contacts@gmail.com"
            whatsappNumber="918390339784"
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

        {/* Registration Form Section */}
        <div className="contact-form-section" id="enquiry">
          <h2 className="contact-section-title">Student Registration</h2>
          <p className="contact-form-description">
            Fill out the registration form below to enroll your child in our tuition classes. 
            We'll review your application and contact you within 24 hours to confirm enrollment 
            and discuss batch timings.
          </p>
          <RegistrationForm onSubmit={handleFormSubmit} />
        </div>
      </Section>
    </div>
  );
};

export default Contact;
