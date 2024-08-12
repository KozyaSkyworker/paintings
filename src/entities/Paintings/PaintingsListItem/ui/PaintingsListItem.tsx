import axios from 'axios';
import { memo, useEffect } from 'react';
import { Painting } from '../../types/paintings';
import cls from './PaintingsListItem.module.scss';

export const PaintingsListItem = memo((props: Painting) => {
  const { name, created, imageUrl, authorId, locationId } = props;

  // useEffect(() => {
  //   async function fetchSomeData() {
  //     const dbData = await axios.get(`https://test-front.framework.team/authors?id=${authorId}`);
  //   }

  //   fetchSomeData();
  // }, [authorId]);

  return (
    <div className={cls.PaintingsListItem}>
      <img
        className={cls.PaintingsListItem__img}
        src={`https://test-front.framework.team/${imageUrl}`}
        alt={name}
      />
      <div className={cls.PaintingsListItem__caption}>
        <div className={cls.PaintingsListItem__box}>
          <h1 className={cls.PaintingsListItem__name}>{name}</h1>
          <span className={`${cls.PaintingsListItem__year} caption_big`}>{created}</span>
        </div>
        <div className={cls.PaintingsListItem__box_left}>
          <h1>{authorId}</h1>
          <span className="caption_big">{locationId}</span>
        </div>
      </div>
    </div>
  );
});
