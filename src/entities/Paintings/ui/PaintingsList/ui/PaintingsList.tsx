import { PaintingsListItem } from '../../PaintingsListItem';
import cls from './PaintingsList.module.scss';

export const PaintingsList = () => (
  <div className={cls.PaintingsList}>
    <div className="container">
      <div className={cls.PaintingsList__inner}>
        {new Array(13).fill(1).map((item) => (
          <PaintingsListItem />
        ))}
      </div>
    </div>
  </div>
);
