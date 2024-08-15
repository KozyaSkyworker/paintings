import { v4 as uuidv4 } from 'uuid';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import cls from './pagination.module.scss';
import ArrowIconRight from '@/assets/ArrowIconRight.svg?react';
import ArrowIconLeft from '@/assets/ArrowIconLeft.svg?react';
import { setPage } from '@/entities/Paintings/model/slice/paintingsSlice';

export type PaginationProps = {
  totalPages: number | undefined;
  curPage: number;
};

export const Pagination = memo(({ totalPages, curPage }: PaginationProps) => {
  const dispatch = useDispatch();

  // чтобы компонет пагинации был независимый это тоже стоило бы вынести
  const handleClick = (newPage: number) => {
    dispatch(setPage(newPage));
  };

  const renderPagesButtons = () => {
    if (totalPages) {
      if (totalPages <= 5) {
        return Array.from({ length: totalPages }).map((_, index) => (
          <button
            className={`${cls.Pagination__btn} ${
              curPage === index + 1 ? `${cls.Pagination__btn_active}` : ''
            }`}
            type="button"
            key={uuidv4()}
            onClick={() => handleClick(index + 1)}
          >
            {index + 1}
          </button>
        ));
      }

      let btnArray: Array<number | string> = [];
      const curPageSiblings = [curPage - 1, curPage, curPage + 1];

      if (curPage < 3) {
        btnArray = [1, 2, 3, '...', totalPages];
      } else if (curPage === 3) {
        btnArray = [1, ...curPageSiblings, '...', totalPages];
      } else if (curPage < totalPages - 2) {
        btnArray = [1, '...', ...curPageSiblings, '...', totalPages];
      } else if (curPage === totalPages - 2) {
        btnArray = [1, '...', ...curPageSiblings, totalPages];
      } else if (curPage > totalPages - 2) {
        btnArray = [1, '...', totalPages - 2, totalPages - 1, totalPages];
      }

      return btnArray.map((itm) => (
        <button
          className={`${cls.Pagination__btn} ${
            curPage === itm ? `${cls.Pagination__btn_active}` : ''
          }
          ${typeof itm === 'number' ? `${cls.Pagination__btn__number}` : ''}`}
          type="button"
          key={uuidv4()}
          onClick={() => {
            if (typeof itm === 'number') {
              handleClick(itm);
            }
          }}
        >
          {itm}
        </button>
      ));
    }

    return '';
  };

  const handleClickPageDecrement = () => dispatch(setPage(curPage - 1));
  const handleClickPageIncrement = () => dispatch(setPage(curPage + 1));

  return (
    <div className={cls.Pagination}>
      <button
        className={`${cls.Pagination__btn} ${cls.Pagination__btn__arrow}`}
        type="button"
        disabled={curPage === 1}
        onClick={handleClickPageDecrement}
      >
        <ArrowIconLeft />
      </button>
      {renderPagesButtons()}
      <button
        className={`${cls.Pagination__btn} ${cls.Pagination__btn__arrow}`}
        type="button"
        disabled={curPage === totalPages}
        onClick={handleClickPageIncrement}
      >
        <ArrowIconRight />
      </button>
    </div>
  );
});
