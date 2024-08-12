import { v4 as uuidv4 } from 'uuid';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './pagination.module.scss';
import ArrowIconRight from '@/assets/ArrowIconRight.svg?react';
import ArrowIconLeft from '@/assets/ArrowIconLeft.svg?react';
import { setPage } from '@/entities/Paintings/PaintingsList/slice/PaintingListSlice';
import { RootState } from '@/app/providers/store/store';

export const Pagination = memo(() => {
  const totalPages = useSelector((state: RootState) => state.paintings.totalPages);
  const curPage = useSelector((state: RootState) => state.paintings.page);

  const dispatch = useDispatch();

  const handleClick = (newPage: number) => {
    dispatch(setPage(newPage));
  };

  const renderPagesButtons = () => {
    if (totalPages) {
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

    return '';
  };

  return (
    <div className={cls.Pagination}>
      <button className={`${cls.Pagination__btn} ${cls.Pagination__btn__arrow}`} type="button">
        <ArrowIconLeft />
      </button>
      {renderPagesButtons()}
      {/* <button className={cls.Pagination__btn} type="button">
        1
      </button> */}
      {/* <button className={cls.Pagination__btn} type="button" onClick={handleClick}>
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
      </button> */}
      <button className={`${cls.Pagination__btn} ${cls.Pagination__btn__arrow}`} type="button">
        <ArrowIconRight />
      </button>
    </div>
  );
});
