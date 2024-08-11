import { useContext } from 'react';
import { PaintingsList } from '../entities/Paintings/PaintingsList';
import Header from '../widgets/Header/Header';
import { Pagination } from '../widgets/Pagination';
import { Search } from '../widgets/Search';
import cls from './App.module.scss';
import { ThemeContext } from './providers/theme';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${cls.app} ${theme}`}>
      <Header />
      <main className="main">
        <Search />
        <PaintingsList />
        <Pagination />
      </main>
    </div>
  );
}

export default App;
