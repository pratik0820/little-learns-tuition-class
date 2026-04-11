import React from 'react';
import Section from '../components/Section';
import CourseCard from '../components/CourseCard';
import SEO from '../components/SEO';
import { getContextualWhatsAppURL } from '../utils/whatsapp';
import './Classes.css';

function Classes() {
  return (
    <div className="classes-page">
      <SEO 
        title="Our Classes"
        description="Specialized tuition programs for Nursery to 6th students. Small batch sizes (6-10 students), comprehensive curriculum, homework support, and regular assessments."
        keywords="nursery tuition, class 1-2 tuition, class 3-6 tuition, nursery to 6th classes, small batch tuition, homework support, exam preparation, practice tests"
      />
      
      <Section style="hero" title="Our Classes">
        <p className="classes-intro">
          We offer specialized tuition programs from Nursery to 6th, designed to build strong foundations and help children excel with confidence. Our small batch sizes ensure every child gets the individual attention they deserve.
        </p>
      </Section>

      <Section style="default" className="courses-section">
        <h2 className="section__title">Available Programs</h2>
        <p className="courses-note">All our classes maintain small batch sizes to ensure personalized attention for every student.</p>
        <div className="courses-grid">
          <CourseCard
            title="Nursery"
            ageRange="3-5 years"
            subjects={['Pre-reading, numbers, rhymes, coloring, and activity-based learning']}
            curriculum={[
              'Letter and number recognition',
              'Rhymes, storytelling, and speaking practice',
              'School readiness through fun activities'
            ]}
            duration="1 hour"
            method="Play-based learning with gentle guidance"
          />

          <CourseCard
            title="Class 1-2"
            ageRange="6-8 years"
            subjects={['All subjects covered as per school curriculum']}
            curriculum={[
              'Reading & writing foundation',
              'Basic maths concepts',
              'Homework guidance'
            ]}
            duration="1.5 hours"
            method="Interactive learning with activities"
          />

          <CourseCard
            title="Class 3-6"
            ageRange="8-12 years"
            subjects={['All subjects covered as per school curriculum']}
            curriculum={[
              'Concept clarity',
              'Exam preparation',
              'Practice tests'
            ]}
            duration="2 hours"
            method="Concept-based learning with regular assessments"
          />
        </div>
      </Section>

      <Section style="alternate" className="class-features-section">
        <h2 className="section__title">What Makes Our Classes Special</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">✍️</div>
            <h3>Daily Homework Support</h3>
            <p>
              We help students complete their school homework with proper understanding, ensuring they don't just finish assignments but truly learn from them.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <h3>Weekly Practice Tests</h3>
            <p>
              Weekly tests help identify learning gaps and track progress. Students get comfortable with exam formats and learn to manage their time better.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">👨‍🏫</div>
            <h3>Personalized Attention</h3>
            <p>
              Small batch sizes allow us to understand each child's learning style and pace, providing customized support where needed.
            </p>
          </div>
        </div>
      </Section>

      <Section style="default" className="enrollment-cta-section">
        <h2 className="section__title">Ready to Enroll?</h2>
        <p className="enrollment-text">
          Limited seats available for the current batch. <a href="/contact">Contact us today</a> to secure your child's spot and give them the academic support they deserve. Read <a href="/testimonials">what other parents say</a> about our classes.
        </p>
        <div className="cta-buttons">
          <a href="/contact#enquiry" className="btn btn--primary btn--large">
            Contact Us
          </a>
          <a 
            href={getContextualWhatsAppURL('classes')}
            className="btn btn--whatsapp btn--large"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Enquiry
          </a>
        </div>
      </Section>
    </div>
  );
}

export default Classes;
