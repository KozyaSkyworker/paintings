import cls from './pagination.module.scss';
import ArrowIconRight from '../../../assets/ArrowIconRight.svg?react';
import ArrowIconLeft from '../../../assets/ArrowIconLeft.svg?react';

export const Pagination = () => (
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
