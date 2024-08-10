import cls from './pagination.module.scss';
import ArrowIconRight from './../../../assets/ArrowIconRight.svg?react';
import ArrowIconLeft from './../../../assets/ArrowIconLeft.svg?react';

export const Pagination = () => {
  return (
    <div className={cls.Pagination}>
      <button className={`${cls.Pagination__btn} ${cls.Pagination__btn__arrow}`}>
        <ArrowIconLeft />
      </button>
      <button className={cls.Pagination__btn}>1</button>
      <button className={cls.Pagination__btn}>2</button>
      <button className={cls.Pagination__btn}>3</button>
      <button className={cls.Pagination__btn}>...</button>
      <button className={cls.Pagination__btn}>5</button>
      <button className={`${cls.Pagination__btn} ${cls.Pagination__btn__arrow}`}>
        <ArrowIconRight />
      </button>
    </div>
  );
};
