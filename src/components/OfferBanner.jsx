import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './OfferBanner.css';

/**
 * OfferBanner Component
 * 
 * Clean, professional offer banner for 3-month payment discount
 */
const OfferBanner = ({
  onPrimaryClick,
  onSecondaryClick
}) => {
  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else {
      const contactSection = document.querySelector('#contact-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      const classesSection = document.querySelector('#programs');
      if (classesSection) {
        classesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="offer-banner">
      <div className="container">
        <div className="offer-banner__card">
          <div className="offer-banner__content">
            <div className="offer-banner__badge">
              <span className="offer-banner__badge-text">Special Offer</span>
            </div>
            
            <h2 className="offer-banner__title">
              Attractive Offers on 3-Month Payment
            </h2>
            
            <p className="offer-banner__description">
              Pay for 3 months upfront and enjoy attractive discounts on total fees. 
              Secure your child's seat with this limited-time offer.
            </p>
            
            <div className="offer-banner__features">
              <div className="offer-banner__feature">
                <span className="offer-banner__icon">💰</span>
                <span>Save Money</span>
              </div>
              <div className="offer-banner__feature">
                <span className="offer-banner__icon">🎯</span>
                <span>Secure Seat</span>
              </div>
              <div className="offer-banner__feature">
                <span className="offer-banner__icon">⏰</span>
                <span>Limited Time</span>
              </div>
            </div>
            
            <div className="offer-banner__actions">
              <Button
                variant="primary"
                size="large"
                onClick={handlePrimaryClick}
                className="offer-banner__cta"
              >
                Get Offer Details
              </Button>
              <Button
                variant="outline"
                size="medium"
                onClick={handleSecondaryClick}
                className="offer-banner__learn-more"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="offer-banner__visual">
            <div className="offer-banner__discount-circle">
              <span className="offer-banner__discount-text">Special</span>
              <span className="offer-banner__discount-label">OFFER</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OfferBanner.propTypes = {
  onPrimaryClick: PropTypes.func,
  onSecondaryClick: PropTypes.func
};

export default OfferBanner;