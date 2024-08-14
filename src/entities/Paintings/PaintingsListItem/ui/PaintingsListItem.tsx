import { memo } from 'react';
import { useSelector } from 'react-redux';
import cls from './PaintingsListItem.module.scss';
import { Author, Location, Painting } from '@/app/types/common';
import { RootState } from '@/app/providers/store/store';

export const PaintingsListItem = memo((props: Painting) => {
  const { name, created, imageUrl, authorId, locationId } = props;

  const authors = useSelector((state: RootState) => state.authors.authors);
  const locations = useSelector((state: RootState) => state.locations.locations);

  const curAuthor = authors?.find((itm: Author) => itm.id === authorId);
  const curLocation = locations?.find((itm: Location) => itm.id === locationId);

  return (
    <div className={cls.PaintingsListItem}>
      <img
        className={cls.PaintingsListItem__img}
        src={`https://test-front.framework.team/${imageUrl}`}
        alt={name}
      />
      <div className={cls.PaintingsListItem__caption}>
        <div className={cls.PaintingsListItem__caption__inner}>
          <div className={cls.PaintingsListItem__box}>
            <h1 className={cls.PaintingsListItem__name}>{name}</h1>
            <span className={`${cls.PaintingsListItem__year} caption_big`}>{created}</span>
          </div>
          <div className={cls.PaintingsListItem__box_left}>
            <h1>{curAuthor?.name}</h1>
            <span className="caption_big">{curLocation?.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
});
