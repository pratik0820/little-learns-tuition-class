import { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import Button from './Button';
import { trackFormSubmission } from '../utils/analytics';
import './RegistrationForm.css';

/**
 * Validation Functions
 */

const validateName = (name, fieldLabel) => {
  const trimmed = name.trim();
  if (trimmed.length === 0) {
    return { valid: false, error: `${fieldLabel} is required` };
  }
  if (trimmed.length < 2) {
    return { valid: false, error: "Name must be at least 2 characters" };
  }
  if (trimmed.length > 30) {
    return { valid: false, error: "Name must not exceed 30 characters" };
  }
  if (!/^[a-zA-Z\s]+$/.test(trimmed)) {
    return { valid: false, error: "Name can only contain letters" };
  }
  return { valid: true, error: null };
};

const validateEmail = (email) => {
  const trimmed = email.trim();
  if (trimmed.length === 0) {
    return { valid: false, error: "Email is required" };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) {
    return { valid: false, error: "Please enter a valid email address" };
  }
  return { valid: true, error: null };
};

const validateContactNumber = (number) => {
  const cleaned = number.replace(/\D/g, '');
  if (cleaned.length === 0) {
    return { valid: false, error: "Contact number is required" };
  }
  if (cleaned.length !== 10) {
    return { valid: false, error: "Contact number must be 10 digits" };
  }
  if (!/^[6-9]\d{9}$/.test(cleaned)) {
    return { valid: false, error: "Please enter a valid Indian mobile number" };
  }
  return { valid: true, error: null };
};

const validateStandard = (standard) => {
  if (!standard || standard === "") {
    return { valid: false, error: "Please select student's standard" };
  }
  return { valid: true, error: null };
};

const validateAddress = (address) => {
  const trimmed = address.trim();
  if (trimmed.length === 0) {
    return { valid: false, error: "Address is required" };
  }
  if (trimmed.length < 10) {
    return { valid: false, error: "Please enter a complete address" };
  }
  return { valid: true, error: null };
};

/**
 * RegistrationForm Component
 * 
 * Comprehensive registration form for enrolling students in tuition classes.
 * Collects student details, parent information, and sends data via email.
 */
const RegistrationForm = ({ onSubmit, className = '' }) => {
  const [formData, setFormData] = useState({
    // Student Information
    studentFirstName: '',
    studentMiddleName: '',
    studentSurname: '',
    studentStandard: '',
    studentSchool: '',
    studentAge: '',
    
    // Parent Information
    parentName: '',
    parentEmail: '',
    parentContact: '',
    alternateContact: '',
    address: '',
    
    // Additional Information
    previousTuition: '',
    specificNeeds: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const standardOptions = [
    { value: '1', label: 'Standard 1' },
    { value: '2', label: 'Standard 2' },
    { value: '3', label: 'Standard 3' },
    { value: '4', label: 'Standard 4' },
    { value: '5', label: 'Standard 5' }
  ];

  const previousTuitionOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
  ];

  const validateField = (name, value) => {
    switch (name) {
      case 'studentFirstName':
        return validateName(value, 'Student first name');
      case 'studentMiddleName':
        return validateName(value, 'Student middle name');
      case 'studentSurname':
        return validateName(value, 'Student surname');
      case 'studentStandard':
        return validateStandard(value);
      case 'parentName':
        return validateName(value, 'Parent name');
      case 'parentEmail':
        return validateEmail(value);
      case 'parentContact':
        return validateContactNumber(value);
      case 'address':
        return validateAddress(value);
      default:
        return { valid: true, error: null };
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Restrict contact numbers to 10 digits
    if (name === 'parentContact' || name === 'alternateContact') {
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length > 10) return;
      setFormData(prev => ({ ...prev, [name]: cleaned }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const validation = validateField(name, value);
    
    if (!validation.valid) {
      setErrors(prev => ({ ...prev, [name]: validation.error }));
    }
  };

  const validateAllFields = () => {
    const newErrors = {};
    let isValid = true;

    const requiredFields = [
      'studentFirstName', 'studentMiddleName', 'studentSurname',
      'studentStandard', 'parentName', 'parentEmail',
      'parentContact', 'address'
    ];

    requiredFields.forEach(fieldName => {
      const validation = validateField(fieldName, formData[fieldName]);
      if (!validation.valid) {
        newErrors[fieldName] = validation.error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateAllFields()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Track form submission
      trackFormSubmission('registration_form');
      
      // Call parent onSubmit handler
      if (onSubmit) {
        await onSubmit(formData);
      }
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(error.message || 'There was an error submitting the form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    setFormData({
      studentFirstName: '',
      studentMiddleName: '',
      studentSurname: '',
      studentStandard: '',
      studentSchool: '',
      studentAge: '',
      parentName: '',
      parentEmail: '',
      parentContact: '',
      alternateContact: '',
      address: '',
      previousTuition: '',
      specificNeeds: ''
    });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="registration-form__success" role="alert" aria-live="polite">
        <div className="registration-form__success-icon">✓</div>
        <h3 className="registration-form__success-title">Registration Submitted!</h3>
        <p className="registration-form__success-message">
          Thank you for registering with Little Learns. We have received your registration details 
          and will contact you within 24 hours to confirm the enrollment and discuss batch timings.
        </p>
        <Button variant="outline" size="medium" onClick={resetForm}>
          Submit Another Registration
        </Button>
      </div>
    );
  }

  return (
    <form className={`registration-form ${className}`} onSubmit={handleSubmit}>
      {/* Error Message */}
      {submitError && (
        <div className="registration-form__error" role="alert">
          <p>{submitError}</p>
        </div>
      )}

      {/* Student Information Section */}
      <div className="registration-form__section">
        <h3 className="registration-form__section-title">Student Information</h3>
        
        <div className="registration-form__row">
          <FormInput
            type="text"
            label="First Name"
            name="studentFirstName"
            value={formData.studentFirstName}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            error={errors.studentFirstName}
            placeholder="Enter first name"
          />

          <FormInput
            type="text"
            label="Middle Name"
            name="studentMiddleName"
            value={formData.studentMiddleName}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            error={errors.studentMiddleName}
            placeholder="Enter middle name"
          />

          <FormInput
            type="text"
            label="Surname"
            name="studentSurname"
            value={formData.studentSurname}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            error={errors.studentSurname}
            placeholder="Enter surname"
          />
        </div>

        <div className="registration-form__row">
          <FormInput
            type="select"
            label="Current Standard"
            name="studentStandard"
            value={formData.studentStandard}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            error={errors.studentStandard}
            options={standardOptions}
            placeholder="Select standard"
          />

          <FormInput
            type="text"
            label="Age"
            name="studentAge"
            value={formData.studentAge}
            onChange={handleChange}
            placeholder="Enter age (optional)"
          />
        </div>

        <FormInput
          type="text"
          label="Current School Name"
          name="studentSchool"
          value={formData.studentSchool}
          onChange={handleChange}
          placeholder="Enter school name (optional)"
        />
      </div>

      {/* Parent Information Section */}
      <div className="registration-form__section">
        <h3 className="registration-form__section-title">Parent/Guardian Information</h3>
        
        <FormInput
          type="text"
          label="Parent/Guardian Name"
          name="parentName"
          value={formData.parentName}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          error={errors.parentName}
          placeholder="Enter parent/guardian name"
        />

        <div className="registration-form__row">
          <FormInput
            type="email"
            label="Email Address"
            name="parentEmail"
            value={formData.parentEmail}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            error={errors.parentEmail}
            placeholder="Enter email address"
          />

          <FormInput
            type="tel"
            label="Contact Number"
            name="parentContact"
            value={formData.parentContact}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            error={errors.parentContact}
            placeholder="Enter 10-digit mobile"
            maxLength={10}
          />
        </div>

        <FormInput
          type="tel"
          label="Alternate Contact Number"
          name="alternateContact"
          value={formData.alternateContact}
          onChange={handleChange}
          placeholder="Enter alternate number (optional)"
          maxLength={10}
        />

        <FormInput
          type="textarea"
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          error={errors.address}
          placeholder="Enter complete address"
          rows={3}
        />
      </div>

      {/* Additional Information Section */}
      <div className="registration-form__section">
        <h3 className="registration-form__section-title">Additional Information</h3>
        
        <FormInput
          type="select"
          label="Has the student attended tuition classes before?"
          name="previousTuition"
          value={formData.previousTuition}
          onChange={handleChange}
          options={previousTuitionOptions}
          placeholder="Select option (optional)"
        />

        <FormInput
          type="textarea"
          label="Specific Learning Needs or Requirements"
          name="specificNeeds"
          value={formData.specificNeeds}
          onChange={handleChange}
          placeholder="Please mention any specific areas where the student needs help or any special requirements (optional)"
          rows={4}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="large"
        className="registration-form__submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Registration'}
      </Button>
    </form>
  );
};

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func,
  className: PropTypes.string
};

export default RegistrationForm;
