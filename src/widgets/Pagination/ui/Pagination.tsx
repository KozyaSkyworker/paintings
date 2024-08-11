import { memo } from 'react';
import { useSelector } from 'react-redux';
import cls from './pagination.module.scss';
import ArrowIconRight from '../../../assets/ArrowIconRight.svg?react';
import ArrowIconLeft from '../../../assets/ArrowIconLeft.svg?react';
import { RootState } from '../../../app/providers/store/store';

export const Pagination = memo(() => {
  const pages = useSelector((state: RootState) => state.paintings.totalCount);
  console.log(pages);
  return (
    <div className={cls.Pagination}>
      <button className={`${cls.Pagination__btn} ${cls.Pagination__btn__arrow}`} type="button">
        <ArrowIconLeft />
      </button>
      <button className={cls.Pagination__btn} type="button">
        1
      </button>
      <button className={cls.Pagination__btn} type="button">
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
