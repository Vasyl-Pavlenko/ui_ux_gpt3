import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <header
    className="gpt3__header section__padding"
    id="home"
  >
    <div className="gpt3__header-content">
      <h1 className="gpt3__header-content__title gradient__text">
        Let&apos;s Build Something amazing with GPT-3 OpenAI
      </h1>

      <p className="gpt3__header-content__paragraph">
        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
      </p>

      <div className="gpt3__header-content__block">
        <input
          className="gpt3__header-content__block-input"
          type="email"
          placeholder="Your Email Address"
        />

        <button
          className="gpt3__header-content__block-button"
          type="button"
        >
          Get Started
        </button>
      </div>

      <div className="gpt3__header-content__people">
        <img
          className="gpt3__header-content__people-image"
          src={people}
          alt='people'
        />

        <p className="gpt3__header-content__people-paragraph">
          1,600 people requested access a visit in last 24 hours
        </p>
      </div>
    </div>

    <div className="gpt3__header-image__block">
      <img
        className="gpt3__header-image__block-image"
        src={ai}
        alt='ai'
      />
    </div>
  </header>
);

export default Header;