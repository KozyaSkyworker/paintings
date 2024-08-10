import cls from './pagination.module.scss';

export const Pagination = () => {
  return (
    <div className={cls.Pagination}>
      <button className={cls.Pagination__btn}>{'<'}</button>
      <button className={cls.Pagination__btn}>1</button>
      <button className={cls.Pagination__btn}>2</button>
      <button className={cls.Pagination__btn}>3</button>
      <button className={cls.Pagination__btn}>...</button>
      <button className={cls.Pagination__btn}>5</button>
      <button className={cls.Pagination__btn}>{'>'}</button>
    </div>
  );
};
