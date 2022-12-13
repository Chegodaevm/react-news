import React from 'react';
import Category from '../components/Category';
import News from '../components/News';
import Slider from '../components/Slider/Slider';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchAllNews, setCategoryId } from '../redux/slice/fetchAllNewsSLice';

type Props = {};

const Home: React.FC = (props: Props) => {
  const dispatch = useAppDispatch();
  const { categoryId, itemsNews } = useAppSelector((state) => state.news);

  const getNews = () => {
    let category = '';
    switch (categoryId) {
      case 0:
        category = 'today';
        break;
      case 1:
        category = 'politics';
        break;
      case 2:
        category = 'games';
        break;
      case 3:
        category = 'sport';
        break;
      case 4:
        category = 'cyberSport';
        break;
      case 5:
        category = 'health';
        break;
      case 6:
        category = 'travel';
        break;
    }

    dispatch(fetchAllNews({ category }));
  };

  React.useEffect(() => {
    getNews();
  }, [categoryId]);

  const onChangeCategory = React.useCallback(
    (id: number) => {
      dispatch(setCategoryId(id));
    },
    [dispatch],
  );

  return (
    <div>
      <div>
        <Slider />
        <div className="content">
          <div className="categories-block">
            <div className="container">
              <Category value={categoryId} onClickCategory={onChangeCategory} />
            </div>
          </div>
          <div className="news_block">
            {itemsNews.map((obj: any, index: number) => {
              return <News key={index} items={obj} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
