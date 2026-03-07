import React from 'react';
import OfferBanner from './OfferBanner';

/**
 * Demo component showing OfferBanner with different configurations
 */
const OfferBannerDemo = () => {
  const handlePrimaryClick = () => {
    alert('Primary action clicked - would navigate to contact form');
  };

  const handleSecondaryClick = () => {
    alert('Secondary action clicked - would show more details');
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f9fafb' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Offer Banner Demo</h2>
      
      <div style={{ marginBottom: '3rem' }}>
        <h3>Default Configuration</h3>
        <OfferBanner />
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h3>Custom Discount Percentage</h3>
        <OfferBanner 
          discountPercentage="30%"
          primaryAction="Get 30% Off Now"
          secondaryAction="View Details"
        />
      </div>

      <div>
        <h3>With Custom Click Handlers</h3>
        <OfferBanner 
          discountPercentage="20%"
          primaryAction="Enroll Now"
          secondaryAction="Call Us"
          onPrimaryClick={handlePrimaryClick}
          onSecondaryClick={handleSecondaryClick}
        />
      </div>
    </div>
  );
};

export default OfferBannerDemo;