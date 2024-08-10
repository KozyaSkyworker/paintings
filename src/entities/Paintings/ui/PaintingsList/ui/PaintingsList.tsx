import { PaintingsListItem } from '../../PaintingsListItem';
import cls from './PaintingsList.module.scss';

export const PaintingsList = () => {
  return (
    <div className={cls.PaintingsList}>
      <div className="container">
        <div className={cls.PaintingsList__inner}>
          {new Array(13).fill(1).map((item, indx) => {
            return <PaintingsListItem key={indx} />;
          })}
        </div>
      </div>
    </div>
  );
};
