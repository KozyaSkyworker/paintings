import { ChangeEvent, memo, useState } from 'react';
import cls from './search.module.scss';
import SearchIcon from '@/assets/SearchIcon.svg?react';
import ClearIcon from '@/assets/ClearIcon.svg?react';

export type SearchProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
};

export const Search = memo(({ value, onChange, onClear }: SearchProps) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

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
              value={value}
              onChange={onChange}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              placeholder="Painting title"
            />
            {value && (
              <button className={cls.search__btn} type="button" onClick={onClear}>
                <ClearIcon className={cls.search__clear} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
