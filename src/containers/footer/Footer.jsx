import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h2 className="gradient__text gpt3__footer-heading__title">
        Do you want to step in to the future before others
      </h2>
    </div>

    <div className="gpt3__footer-btn">
      <p className="gpt3__footer-btn__paragraph">
        Request Early Access
      </p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img
          className="gpt3__footer-links_logo-image"
          src={gpt3Logo}
          alt="gpt3_logo"
        />

        <a href='https://www.google.com/maps/'
          className="gpt3__footer-links_block__paragraph"
          target='_blank'
          rel='noreferrer'
        >
          Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
        </a>
      </div>

      <div className="gpt3__footer-links_block">
        <h4 className="gpt3__footer-links_block__title">
          Links
        </h4>
        
        <p className="gpt3__footer-links_block__paragraph">
          Overons
        </p>

        <p className="gpt3__footer-links_block__paragraph">
          Social Media
        </p>

        <p className="gpt3__footer-links_block__paragraph">
          Counters
        </p>

        <p className="gpt3__footer-links_block__paragraph">
          Contact
        </p>
      </div>

      <div className="gpt3__footer-links_block">
        <h4 className="gpt3__footer-links_block__title">
          Company
        </h4>

        <p className="gpt3__footer-links_block__paragraph">
          Terms & Conditions
        </p>

        <p className="gpt3__footer-links_block__paragraph">
          Privacy Policy
        </p>

        <p className="gpt3__footer-links_block__paragraph">
          Contact
        </p>
      </div>

      <div className="gpt3__footer-links_block">
        <h4 className="gpt3__footer-links_block__title">
          Get in touch
        </h4>

        <a href='https://www.google.com/maps/'
          className="gpt3__footer-links_block__paragraph"
          target='_blank'
          rel='noreferrer'
        >
          Crechterwoord K12 182 DK Alknjkcb
        </a>

        <a
          href='tel:+085-132567'
          className="gpt3__footer-links_block__paragraph"
        >
          085-132567
        </a>

        <a
          href="mailto:info@payme.net" className="gpt3__footer-links_block__paragraph"
        >
          info@payme.net
        </a>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p className="gpt3__footer-copyright__paragraph">
        @2021 GPT-3. All rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;