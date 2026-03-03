/**
 * Email Service
 * 
 * Handles sending registration form data via email using EmailJS.
 * 
 * Configuration is loaded from environment variables:
 * - VITE_EMAILJS_SERVICE_ID
 * - VITE_EMAILJS_TEMPLATE_ID
 * - VITE_EMAILJS_PUBLIC_KEY
 */

import emailjs from '@emailjs/browser';

/**
 * Send registration email using EmailJS
 * 
 * @param {Object} formData - Registration form data
 * @returns {Promise} - Promise that resolves when email is sent
 */
export const sendRegistrationEmail = async (formData) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.error('EmailJS configuration missing. Please check your .env file.');
    throw new Error('Email service not configured. Please contact the administrator.');
  }

  // Prepare template parameters matching your EmailJS template
  const templateParams = {
    student_name: `${formData.studentFirstName} ${formData.studentMiddleName} ${formData.studentSurname}`,
    student_first_name: formData.studentFirstName,
    student_middle_name: formData.studentMiddleName,
    student_surname: formData.studentSurname,
    student_standard: formData.studentStandard,
    student_age: formData.studentAge || 'Not provided',
    student_school: formData.studentSchool || 'Not provided',
    parent_name: formData.parentName,
    parent_email: formData.parentEmail,
    parent_contact: formData.parentContact,
    alternate_contact: formData.alternateContact || 'Not provided',
    address: formData.address,
    previous_tuition: formData.previousTuition === 'yes' ? 'Yes' : formData.previousTuition === 'no' ? 'No' : 'Not specified',
    specific_needs: formData.specificNeeds || 'None mentioned',
    submission_date: new Date().toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'long'
    })
  };

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );
    
    console.log('Registration email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Failed to send registration email:', error);
    throw new Error('Failed to send registration. Please try again or contact us directly.');
  }
};
