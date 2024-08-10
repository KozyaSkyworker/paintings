import cls from './header.module.scss';
import { ThemeSwitcher } from '../ThemeSwitcher';
import Logo from './../../assets/Logo.svg?react';

const Header = () => {
  return (
    <header className={cls.header}>
      <div className="container">
        <div className={cls.header__inner}>
          <a href="/">
            <Logo className={cls.header__logo} />
          </a>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
