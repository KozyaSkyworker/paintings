import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { memo } from 'react';
import cls from './PaintingsList.module.scss';
import { useGetPaintingsByPageQuery } from '../services/fetchPaintings';
import { PaintingsListItem } from '../../PaintingsListItem';
import { Skeleton } from '@/ui/Skeleton/Skeleton';
import { RootState } from '@/app/providers/store/store';

export const PaintingsList = memo(() => {
  const curPage = useSelector((state: RootState) => state.paintings.page);
  const limit = useSelector((state: RootState) => state.paintings.limit);
  const search = useSelector((state: RootState) => state.paintings.search);

  const {
    data: paintings,
    error,
    isLoading,
  } = useGetPaintingsByPageQuery({
    page: curPage,
    limit,
    search,
  });

  if (!isLoading && !paintings?.length) {
    return (
      <div className="error" style={{ color: 'red' }}>
        No matches for Lorem Please try again with a different spelling or keywords.
      </div>
    );
  }

  if (error) {
    return <div className="error">error</div>;
  }

  return (
    <div className={cls.PaintingsList}>
      <div className="container">
        <div className={cls.PaintingsList__inner}>
          {paintings?.map((itm) => (
            <PaintingsListItem key={itm.id} {...itm} />
          ))}

          {isLoading && new Array(6).fill(0).map((itm, index) => <Skeleton key={uuidv4()} />)}
        </div>
      </div>
    </div>
  );
});
