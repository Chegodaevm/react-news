import React from 'react';
import photo from '../assets/img/blog-img/1.jpg';

type Props = {};

const News = ({ items }: any) => {
  return (
    <div className="news-item">
      <div className="title">
        <h2>{items.title}</h2>
        <p>{items.author}</p>
      </div>
      <div className="news-img">
        <img src={items.urlToImage} alt="" />
      </div>
      <div className="description">
        <p>{items.description}</p>
      </div>
      <div className="button-continue">
        <a href={items.url} target="_blank" rel="noreferrer">
          CONTINUE READING ⇢
        </a>
      </div>
    </div>
  );
};

export default News;
