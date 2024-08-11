import { useContext } from 'react';
import cls from './ThemeSwitcher.module.scss';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../../../providers/theme/ThemeContext';
import DarkIcon from '../../../assets/DarkIcon.svg?react';
import LightIcon from '../../../assets/LightIcon.svg?react';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return (
    <div className={cls.ThemeSwitcher}>
      <button onClick={handleClick} className={cls.ThemeSwitcher__btn} type="button">
        {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
      </button>
    </div>
  );
};
