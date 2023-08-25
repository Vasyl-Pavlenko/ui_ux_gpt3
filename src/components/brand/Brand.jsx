import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const SML = [
  {
    id: 1,
    src: google,
    alt: 'google',
    href: 'https://www.google.com'
  },
  {
    id: 2,
    src: slack,
    alt: 'slack',
    href: 'https://www.slack.com'
  },
  {
    id: 3,
    src: atlassian,
    alt: 'atlassian',
    href: 'https://www.atlassian.com'
  },
  {
    id: 4,
    src: dropbox,
    alt: 'dropbox',
    href: 'https://www.dropbox.com'
  },
  {
    id: 5,
    src: shopify,
    alt: 'shopify',
    href: 'https://www.shopify.com'
  },
]

const Brand = () => (
  <div className="gpt3__brand section__padding">
    {SML.map(({ id, src, alt, href }) => (
      <div className="gpt3__brand-block">
        <a
          className='gpt3__brand-link'
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <img
            key={id}
            src={src}
            alt={alt}
          />
        </a>
      </div>
    ))}
  </div>
);

export default Brand;