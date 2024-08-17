import { memo } from 'react';
import cls from './header.module.scss';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import Logo from '@/assets/Logo.svg?react';

const Header = memo(() => (
  <header className={cls.header}>
    <div className="container">
      <div className={cls.header__inner}>
        <a href="https://framework.team/">
          <Logo className={cls.header__logo} />
        </a>
        <ThemeSwitcher />
      </div>
    </div>
  </header>
));

export default Header;
