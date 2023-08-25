import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const FR_API = [
  {
    id: 1,
    title: "Chatbots",
    text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought."
  },
  {
    id: 2,
    title: "Knowledgebase",
    text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
  },
  {
    id: 3,
    title: "Education",
    text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
  },
]

const WhatGPT3 = () => (
  <div
    className="gpt3__whatgpt3 section__margin"
    id="wgpt3"
  >
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-3"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
      />
    </div>

    <div className="gpt3__whatgpt3-heading">
      <h2 className="gpt3__whatgpt3-heading__title gradient__text">
        The possibilities are beyond your imagination
      </h2>

      <p className="gpt3__whatgpt3-heading__paragraph">
        Explore the Library
      </p>
    </div>

    <div className="gpt3__whatgpt3-container">
      {FR_API.map(({ id, title, text }) => (
        <Feature
          key={id}
          title={title}
          text={text}
        />
      ))}
    </div>
  </div>
);

export default WhatGPT3;