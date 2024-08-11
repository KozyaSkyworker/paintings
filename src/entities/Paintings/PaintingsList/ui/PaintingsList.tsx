import { memo } from 'react';
import cls from './PaintingsList.module.scss';
import { useGetPaintingsByPageQuery } from '../services/fetchPaintings';
import { PaintingsListItem } from '../../PaintingsListItem';
import { Skeleton } from '../../../../ui/Skeleton/Skeleton';

export const PaintingsList = memo(() => {
  const { data, error, isLoading } = useGetPaintingsByPageQuery(1);

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
