import { PaintingsList } from '../entities/Paintings/ui/PaintingsList';
import Header from '../widgets/Header/Header';
import { Pagination } from '../widgets/Pagination';
import { Search } from '../widgets/Search';

import cls from './App.module.scss';

function App() {
  return (
    <div className={cls.app}>
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
