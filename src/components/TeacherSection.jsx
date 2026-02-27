import React from 'react';
import { Link } from 'react-router-dom';
import GoogleMapsEmbed from './GoogleMapsEmbed';
import './TeacherSection.css';

/**
 * Teacher Section Component
 * 
 * Displays two teacher profiles with a common location map
 */
const TeacherSection = () => {
  return (
    <section className="teacher-section">
      <div className="container">
        <h2 className="teacher-section__title">Meet Your Teachers</h2>
        <div className="teacher-section__content">
          <div className="teacher-section__info">
            <h3 className="teacher-section__name">Ms. Shivani Chinchvale</h3>
            <p className="teacher-section__subtitle">Experienced & Caring Educator</p>
            <div className="teacher-section__details">
              <p className="teacher-section__detail">
                <span className="teacher-section__icon">✓</span>
                5+ Years of Teaching Experience
              </p>
              <p className="teacher-section__detail">
                <span className="teacher-section__icon">📞</span>
                <a href="tel:+918390339784" className="teacher-section__phone">+91 8390339784</a>
              </p>
              <p className="teacher-section__quote">
                "I believe in making learning fun and engaging for every child."
              </p>
            </div>
            <Link to="/about" className="teacher-section__link">
              Learn More About Me →
            </Link>
          </div>
          <div className="teacher-section__info">
            <h3 className="teacher-section__name">Ms. Nikita Bhandwalkar</h3>
            <p className="teacher-section__subtitle">Dedicated Learning Specialist</p>
            <div className="teacher-section__details">
              <p className="teacher-section__detail">
                <span className="teacher-section__icon">✓</span>
                6+ Years of Teaching Experience
              </p>
              <p className="teacher-section__detail">
                <span className="teacher-section__icon">📞</span>
                <a href="tel:+919876543211" className="teacher-section__phone">+91 7744873174</a>
              </p>
              <p className="teacher-section__quote">
                "Every child has unique potential waiting to be discovered."
              </p>
            </div>
            <Link to="/about" className="teacher-section__link">
              Learn More About Me →
            </Link>
          </div>
        </div>
        <div className="teacher-section__map">
          <h3 className="teacher-section__map-titlOur Locatione">Our Location</h3>
          <GoogleMapsEmbed
            embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2455560306453!2d73.88345127371906!3d18.472533170642738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea88f8769645%3A0xa5707b518bff35ef!2sLittle%20Pearl&#39;s%20Preschool-Pune!5e0!3m2!1sen!2sin!4v1772018904748!5m2!1sen!2sin"
            title="Little Learns Location - Dattanagar, Pune"
          />
        </div>
      </div>
    </section>
  );
};

export default TeacherSection;
