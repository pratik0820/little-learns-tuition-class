/**
 * Google Analytics 4 Integration
 * 
 * Setup Instructions:
 * 1. Go to https://analytics.google.com/
 * 2. Create a new GA4 property
 * 3. Get your Measurement ID (format: G-XXXXXXXXXX)
 * 4. Add it to the .env file as VITE_GA_MEASUREMENT_ID
 */

// Initialize Google Analytics
export const initGA = (measurementId) => {
  if (!measurementId) {
    console.warn('Google Analytics Measurement ID not provided');
    return;
  }

  // Load gtag.js script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', measurementId, {
    send_page_view: false, // We'll handle page views manually with React Router
  });
};

// Track page views
export const trackPageView = (path, title) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title,
    });
  }
};

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('form_submission', {
    form_name: formName,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName, buttonLocation) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
  });
};

// Track WhatsApp clicks
export const trackWhatsAppClick = (source) => {
  trackEvent('whatsapp_click', {
    source: source,
  });
};

// Track course interest
export const trackCourseInterest = (courseName) => {
  trackEvent('course_interest', {
    course_name: courseName,
  });
};
