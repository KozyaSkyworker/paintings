import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, memo, useState } from 'react';
import cls from './search.module.scss';
import SearchIcon from '../../../assets/SearchIcon.svg?react';
import ClearIcon from '../../../assets/ClearIcon.svg?react';
import {
  setPage,
  setSearch,
} from '../../../entities/Paintings/PaintingsList/slice/PaintingListSlice';
import { RootState } from '../../../app/providers/store/store';

export const Search = memo(() => {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.paintings.search);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPage(1));
    dispatch(setSearch(e.target.value));
  };

  const handleClick = () => {
    dispatch(setSearch(''));
  };

  return (
    <div className={cls.search}>
      <div className="container">
        <div className={cls.search__inner}>
          <div className="hidden" />
          <div className={`${cls.search__box} ${isInputFocused && `${cls.search__box_active}`}`}>
            <SearchIcon className={cls.search__icon} />
            <input
              className={`${cls.search__input} paragraph_base `}
              type="text"
              value={search}
              onChange={handleChange}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              placeholder="Painting title"
            />
            {search && (
              <button className={cls.search__btn} type="button" onClick={handleClick}>
                <ClearIcon className={cls.search__clear} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
