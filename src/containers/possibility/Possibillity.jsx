import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibillity.css';

const Possibility = () => (
  <div
    className="gpt3__possibility section__padding"
    id="possibility"
  >
    <div className="gpt3__possibility-image__block">
      <img
        className="gpt3__possibility-image__block-img"
        src={possibilityImage}
        alt="possibility"
      />
    </div>

    <div className="gpt3__possibility-content">
      <h4 className="gpt3__possibility-content__title">
        Request Early Access to Get Started
      </h4>

      <h2 className="gpt3__possibility-content__title--main gradient__text">
        The possibilities are <br /> beyond your imagination
      </h2>

      <p className="gpt3__possibility-content__paragraph">
        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
      </p>

      <h4 className="gpt3__possibility-content__title--last">
        Request Early Access to Get Started
      </h4>
    </div>
  </div>
);

export default Possibility;