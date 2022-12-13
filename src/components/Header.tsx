import React from 'react';
import logo from '../assets/img/core-img/logo.png';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchCurrency } from '../redux/slice/fetchCurrencySlice';

type Props = {};

const Header: React.FC = (props: Props) => {
  const dispatch = useAppDispatch();
  const { itemsCurrency } = useAppSelector((state) => state.currency);

  const getCurrency = () => {
    dispatch(fetchCurrency());
  };

  React.useEffect(() => {
    getCurrency();
  }, []);

  return (
    <div>
      <div className="currency">
        <div className="container">
          <div>{`EUR/USD ${(1 / itemsCurrency.EUR).toFixed(2)}`}</div>
          <div>{`USD/RUB ${(1 * itemsCurrency.RUB).toFixed(2)}`}</div>
          <div>{`USD/UAH ${(1 * itemsCurrency.UAH).toFixed(2)}`}</div>
          <div>{`BTC/USD ${(1 / itemsCurrency.BTC).toFixed(2)}`}</div>
        </div>
      </div>
      <header className="header-area">
        <div className="top-header">
          <div className="container">
            <div>
              <div className="logo">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
