import { memo } from 'react';
import { useDispatch } from 'react-redux';
import cls from './pagination.module.scss';
import ArrowIconRight from '../../../assets/ArrowIconRight.svg?react';
import ArrowIconLeft from '../../../assets/ArrowIconLeft.svg?react';
import { setPage } from '../../../entities/Paintings/PaintingsList/slice/PaintingListSlice';

export const Pagination = memo(() => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setPage(2));
  };

  return (
    <div className={cls.Pagination}>
      <button className={`${cls.Pagination__btn} ${cls.Pagination__btn__arrow}`} type="button">
        <ArrowIconLeft />
      </button>
      <button className={cls.Pagination__btn} type="button">
        1
      </button>
      <button className={cls.Pagination__btn} type="button" onClick={handleClick}>
        2
      </button>
      <button className={cls.Pagination__btn} type="button">
        3
      </button>
      <button className={cls.Pagination__btn} type="button">
        ...
      </button>
      <button className={cls.Pagination__btn} type="button">
        5
      </button>
      <button className={`${cls.Pagination__btn} ${cls.Pagination__btn__arrow}`} type="button">
        <ArrowIconRight />
      </button>
    </div>
  );
});
