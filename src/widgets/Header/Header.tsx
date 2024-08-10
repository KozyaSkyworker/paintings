import cls from './header.module.scss';
import Logo from './../../assets/Logo.svg?react';
import DarkIcon from './../../assets/DarkIcon.svg?react';
// import LightIcon from './../../assets/DarkIcon.svg?react';

const Header = () => {
  return (
    <header className={cls.header}>
      <div className="container">
        <div className={cls.header__inner}>
          <a href="/">
            <Logo className={cls.header__logo} />
          </a>
          <button>
            <DarkIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
