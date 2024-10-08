import { v4 as uuidv4 } from 'uuid';
import { memo } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import cls from './PaintingsList.module.scss';
import { Skeleton } from '@/ui/Skeleton/Skeleton';
import { Painting } from '@/app/types/common';
import Error from '@/ui/Error/Error';
import { PaintingsListItem } from '../PaintingsListItem/PaintingsListItem';

export type PaintingsListProps = {
  paintings: Painting[] | undefined;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  search: string;
};

export const PaintingsList = memo(({ paintings, isLoading, error, search }: PaintingsListProps) => {
  if (!isLoading && !paintings?.length) {
    return (
      <div className="container">
        <div className={cls.PaintingsList__inner}>
          <Error msg={search} externalClass={cls.PaintingsList__error} />
        </div>
      </div>
    );
  }

  if (error) {
    return <Error msg="Something went wrong during fetch data :(" />;
  }

  return (
    <section className={cls.PaintingsList}>
      <div className="container">
        <div className={cls.PaintingsList__inner}>
          {paintings?.map((itm) => (
            <PaintingsListItem key={itm.id} {...itm} />
          ))}

          {isLoading && new Array(6).fill(0).map(() => <Skeleton key={uuidv4()} />)}
        </div>
      </div>
    </section>
  );
});
