import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-block__title">
      <div className="gpt3__features-container__feature-divider"/>
      <h2 className="gpt3__features-container__feature-block__title-title">
        {title}
      </h2>
    </div>

    <div className="gpt3__features-container_feature-block__text">
      <p className="gpt3__features-container_feature-block__text-paragraph">
        {text}
      </p>
    </div>
  </div>
);

export default Feature;