import cls from './search.module.scss';
import SearchIcon from '../../../assets/SearchIcon.svg?react';

export const Search = () => (
  <div className={cls.search}>
    <div className="container">
      <div className={cls.search__inner}>
        <div className="hidden" />
        <div className={cls.search__box}>
          <SearchIcon className={cls.search__icon} />
          <input
            className={`${cls.search__input} paragraph_base`}
            type="text"
            placeholder="Painting title"
          />
        </div>
      </div>
    </div>
  </div>
);
