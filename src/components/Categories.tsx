import React from 'react';

type CategoryProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};

const categories = [
  'Всі',
  'М`ясні',
  'Гострі',
  'Гриль',
  'Вегетарианскі',
  'Кальцоне',
];

const Categories: React.FC<CategoryProps> = React.memo(
  ({ value, onChangeCategory }) => {
    const onClickCategory = (index: number) => {
      onChangeCategory(index);
    };

    return (
      <div className="categories">
        <ul>
          {
            categories.map((categoriesName, index) => {
              return (
                <li
                  key={index}
                  onClick={() => onClickCategory(index)}
                  className={value === index ? 'active' : ''}
                >
                  {categoriesName}
                </li>
              );
            })

            /* 
            Пример как не нужно делать в реакт, но оно будет работать: 
            <li
            onClick={() => onClickCategory(0)}
            className={activeIndex === 0 ? 'active' : ''}
          >
            Всі
          </li>
          <li
            onClick={() => onClickCategory(1)}
            className={activeIndex === 1 ? 'active' : ''}
          >
            М'ясні
          </li>
          <li
            onClick={() => onClickCategory(2)}
            className={activeIndex === 2 ? 'active' : ''}
          >
            Вегетарианскі
          </li>
          <li
            onClick={() => onClickCategory(3)}
            className={activeIndex === 3 ? 'active' : ''}
          >
            Гриль
          </li>
          <li
            onClick={() => onClickCategory(4)}
            className={activeIndex === 4 ? 'active' : ''}
          >
            Гострі
          </li>
          <li
            onClick={() => onClickCategory(5)}
            className={activeIndex === 5 ? 'active' : ''}
          >
            Кальцоне
          </li> */
          }
        </ul>
      </div>
    );
  }
);

export default Categories;
