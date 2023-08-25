import React from 'react';
import './cta.css';

const CTA = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p className="gpt3__cta-content__paragraph">
        Request Early Access to Get Started
      </p>

      <h3 className="gpt3__cta-content__title">
        Register Today & start exploring the endless possibilities.
      </h3>
    </div>

    <div className="gpt3__cta-btn__block">
      <button
        className="gpt3__cta-btn__block-button"
        type="button"
      >
        Get Started
      </button>
    </div>
  </div>
);

export default CTA;