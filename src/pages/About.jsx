import React from 'react';
import Section from '../components/Section';
import TeacherProfileCard from '../components/TeacherProfileCard';
import SEO from '../components/SEO';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <SEO 
        title="About Our Teacher"
        description="Meet our experienced educator dedicated to teaching Nursery to 6th students. Learn about our teaching philosophy, background, and why parents choose our tuition classes."
        keywords="experienced teacher, nursery to 6th tuition, primary education, teaching philosophy, qualified educator, B.Ed, concept-based learning"
      />
      
      <Section style="hero" title="About Our Teacher">
        <div className="teachers-grid">
          <TeacherProfileCard 
            name="Our Teacher"
            credentials="M.A., B.Ed."
            phone="+91 8390339784"
            experience="6+ years of experience teaching students from Nursery to 6th. Passionate about creating engaging learning experiences and helping students develop critical thinking skills."
            photoAlt="Dedicated school tuition teacher"
          />
        </div>
      </Section>

      <Section style="default" className="personal-intro-section">
        <h2 className="section__title">Personal Introduction</h2>
        <div className="content-block">
          <p>
            Hello! I am a dedicated teacher with a passion for helping young students build a strong foundation for their learning journey. With years of experience teaching students from Nursery to 6th, I understand that each child learns differently and needs a supportive environment where they can thrive.
          </p>
          <p>
            My teaching approach is simple: every child deserves personal attention and the chance to learn at their own pace. That's why I work with small batches to ensure each student gets the individual support they need to succeed. Learn more about my <a href="/classes">tuition programs for Nursery to 6th</a>.
          </p>
        </div>
      </Section>

      <Section style="alternate" className="teaching-philosophy-section">
        <h2 className="section__title">Teaching Philosophy</h2>
        <div className="content-block">
          <p>
            I believe learning should be enjoyable and enriching. My teaching approach is built on three core ideas:
          </p>
          <div className="philosophy-points">
            <div className="philosophy-point">
              <h3>Concept-Based Learning</h3>
              <p>
                Rather than memorizing facts, we focus on helping students understand the "why" behind what they're learning. When children grasp the concepts, they develop better thinking skills and remember things more easily.
              </p>
            </div>
            <div className="philosophy-point">
              <h3>Individual Attention</h3>
              <p>
                Every child learns differently and at their own pace. With small batch sizes, we can identify each student's strengths and areas for improvement, tailoring our approach to meet their specific needs and learning style.
              </p>
            </div>
            <div className="philosophy-point">
              <h3>Building Confidence</h3>
              <p>
                Success in school is about both confidence and knowledge. We create a supportive space where students feel comfortable asking questions, making mistakes, and learning from them. This builds not just better grades, but also self-confidence and a love for learning.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section style="default" className="background-section">
        <h2 className="section__title">Background and Experience</h2>
        <div className="content-block">
          <p>
            Over the years, I've had the privilege of teaching hundreds of students, helping them improve their grades, build confidence, and develop a genuine interest in learning. My experience covers the key subjects taught from Nursery to 6th, including English, Mathematics, Science, and Social Studies.
          </p>
          <p>
            I hold a degree in Education and have completed training in child psychology and modern teaching methods. This helps me understand not just what to teach, but how to teach it effectively to young learners.
          </p>
          <p>
            Beyond academics, I focus on developing important skills like time management, good study habits, and problem-solving. These skills help students not just now, but throughout their school years.
          </p>
        </div>
      </Section>

      <Section style="alternate" className="why-choose-section">
        <h2 className="section__title">Why Choose My Classes</h2>
        <div className="content-block">
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">👥</div>
              <h3>Small Batch Sizes</h3>
              <p>
                With only 6-10 students per batch, every child receives personalized attention and support. No student gets left behind or overlooked.
              </p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">📚</div>
              <h3>Comprehensive Support</h3>
              <p>
                From daily homework help to exam preparation, we provide complete academic support. Parents can rest assured their child is getting the guidance they need.
              </p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">🎯</div>
              <h3>Proven Results</h3>
              <p>
                Our students consistently show improvement in their grades and understanding. Read <a href="/testimonials">parent testimonials and success stories</a> to see the difference we make.
              </p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">💡</div>
              <h3>Interactive Learning</h3>
              <p>
                We use engaging teaching methods, activities, and real-world examples to make learning fun and memorable. Students don't just memorize—they understand.
              </p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">🏆</div>
              <h3>Regular Assessments</h3>
              <p>
                Periodic tests and assessments help track progress and identify areas needing extra attention. Parents receive regular updates on their child's performance.
              </p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">🤝</div>
              <h3>Parent Partnership</h3>
              <p>
                I believe in working closely with parents. Open communication ensures we're all working together toward the child's success. <a href="/contact">Contact me</a> to learn more.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default About;
