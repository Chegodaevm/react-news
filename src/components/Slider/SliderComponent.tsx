import React from 'react';
import 'react-slideshow-image/dist/styles.css';

const SliderComponent: React.FC<any> = ({ itemsNewsSlider }) => {
  return (
    <div className="each-slide-effect">
      <div style={{ backgroundImage: `url(${itemsNewsSlider.urlToImage})` }}>
        <h2>{itemsNewsSlider.title}</h2>
        <span>{itemsNewsSlider.description}</span>
        <a href={itemsNewsSlider.url} target="_blank" rel="noreferrer">
          <span>Подробнее</span>
        </a>
      </div>
    </div>
  );
};

export default SliderComponent;
