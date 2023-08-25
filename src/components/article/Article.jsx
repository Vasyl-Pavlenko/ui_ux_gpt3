import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text }) => (
  <article className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-block">
      <img
        className="gpt3__blog-container_article-block_image"
        src={imgUrl}
        alt="blog_image"
      />
    </div>

    <div className="gpt3__blog-container_article-content">
      <div>
        <p className="gpt3__blog-container_article-content_paragraph">
          {date}
        </p>

        <a
          href='/' className="gpt3__blog-container_article-content_link"
        >
          {text}
        </a>
      </div>

      <a href='/' className="gpt3__blog-container_article-content_link--last">
        Read Full Article
      </a>
    </div>
  </article>
);

export default Article;