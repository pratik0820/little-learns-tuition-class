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
        name="Mrs. Shivani Chinchvale"
        credentials="B.Ed., M.A. in Education"
        phone="+91 8390339784"
        experience="5+ years of experience teaching school students (Class 1-5). Specialized in building strong foundations in English, Mathematics, Science, and Social Studies through personalized attention and concept-based learning."
        photoAlt="Ms. Shivani - Experienced school tuition teacher"
      />
    </div>
  );
};

export default TeacherProfileCardDemo;