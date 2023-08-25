import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const ART_API = [
  {
    id: 1,
    imgUrl: blog01,
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us explore how it is?"
  },
  {
    id: 2,
    imgUrl: blog02,
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us explore how it is?"
  },
  {
    id: 3,
    imgUrl: blog03,
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us explore how it is?"
  },
  {
    id: 4,
    imgUrl: blog04,
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us explore how it is?"
  },
]

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h2 className="gpt3__blog-heading__title gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h2>
    </div>

    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us explore how it is?"
        />
      </div>

      <div className="gpt3__blog-container_groupB">
        {ART_API.map(({ id, imgUrl, date, text }) => (
          <Article
            key={id}
            imgUrl={imgUrl}
            date={date}
            text={text}
          />
        ))}        
      </div>
    </div>
  </div>
);

export default Blog;