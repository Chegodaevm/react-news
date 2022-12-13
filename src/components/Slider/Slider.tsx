import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchNews, IParamsSlider } from '../../redux/slice/fetchNewsSlice';
import { RootState } from '../../redux/store';
import SliderComponent from './SliderComponent';

const Slider: React.FC<any> = () => {
  const dispatch = useAppDispatch();
  const { itemsNewsSlider } = useAppSelector((state: RootState) => state.newsSlider);
  const { itemsCurrency } = useAppSelector((state) => state.currency);

  const getNews = () => {
    dispatch(fetchNews());
  };

  React.useEffect(() => {
    getNews();
  }, []);

  if (!itemsNewsSlider && !itemsCurrency) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <Slide slidesToScroll={2} slidesToShow={2} indicators={true}>
        {itemsNewsSlider.map((items: any, index: any) => {
          return <SliderComponent itemsNewsSlider={items} key={index} />;
        })}
      </Slide>
    </div>
  );
};

export default Slider;
