import { useContext } from 'react';
import { PaintingsList } from '../entities/Paintings/ui/PaintingsList';
import Header from '../widgets/Header/Header';
import { Pagination } from '../widgets/Pagination';
import { Search } from '../widgets/Search';
import cls from './App.module.scss';
import { ThemeContext } from '../providers/theme/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);
  const d: any = 1;
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
