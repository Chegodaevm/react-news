import React from 'react';

const items: string[] = ['Today', 'Politics', 'Games', 'Sport', 'CyberSport', 'Health', 'Travel'];

type Props = {
  value: number;
  onClickCategory: (index: number) => void;
};

const Category = ({ onClickCategory, value }: Props) => {
  return (
    <ul className="navbar">
      <span>LOGO</span>
      {items.map((categoryName, index) => {
        return (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={value === index ? 'active' : ''}>
            {categoryName}
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
