import cls from './search.module.scss';
import SearchIcon from './../../../assets/SearchIcon.svg?react';

export const Search = () => {
  return (
    <div className={cls.search}>
      <SearchIcon className={cls.search__icon} />
      <input type="text" placeholder="Painting title" />
    </div>
  );
};
