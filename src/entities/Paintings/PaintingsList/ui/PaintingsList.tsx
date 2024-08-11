import { useSelector } from 'react-redux';
import { memo } from 'react';
import cls from './PaintingsList.module.scss';
import { useGetPaintingsByPageQuery } from '../services/fetchPaintings';
import { PaintingsListItem } from '../../PaintingsListItem';
import { Skeleton } from '../../../../ui/Skeleton/Skeleton';
import { RootState } from '../../../../app/providers/store/store';

export const PaintingsList = memo(() => {
  const curPage = useSelector((state: RootState) => state.paintings.page);
  const limit = useSelector((state: RootState) => state.paintings.limit);
  const search = useSelector((state: RootState) => state.paintings.search);

  const { data, error, isLoading } = useGetPaintingsByPageQuery({
    page: curPage,
    limit,
    search,
  });
  if (!isLoading && !data?.length) {
    return <div className="error">No Paintings :(</div>;
  }

  if (error) {
    return <div className="error">error</div>;
  }

  return (
    <div className={cls.PaintingsList}>
      <div className="container">
        <div className={cls.PaintingsList__inner}>
          {data?.map((itm) => (
            <PaintingsListItem key={itm.id} {...itm} />
          ))}

          {/* думаю, здесь так проще всего */}
          {/* eslint-disable-next-line react/no-array-index-key */}
          {isLoading && new Array(6).fill(0).map((itm, index) => <Skeleton key={index} />)}
        </div>
      </div>
    </div>
  );
});
