import React from 'react';
import TeacherProfileCard from './TeacherProfileCard';

/**
 * Demo component showing TeacherProfileCard with phone number
 */
const TeacherProfileCardDemo = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Teacher Profile Card with Phone Number</h2>
      <TeacherProfileCard 
        name="Our Teacher"
        credentials="M.A., B.Ed."
        phone="+91 8390339784"
        experience="6+ years of experience teaching school students (Class 1-5). Passionate about creating engaging learning experiences and helping students develop critical thinking skills."
        photoAlt="Dedicated school tuition teacher"
      />
    </div>
  );
};

export default TeacherProfileCardDemo;