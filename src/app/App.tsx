import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { Pagination } from '../widgets/Pagination';
import { Search } from '../widgets/Search';
import { PaintingsList } from '../entities/Paintings/PaintingsList';
import Header from '../widgets/Header/Header';
import { ThemeContext } from './providers/theme';
import cls from './App.module.scss';
import { RootState } from './providers/store/store';
import { setAuthors } from './providers/store/slices/authorsSlice';
import { useGetPaintingsByPageQuery } from '@/entities/Paintings/PaintingsList/services/fetchPaintings';
import { setLocations } from './providers/store/slices/locationsSlice';

function App() {
  const { theme } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const totalPages = useSelector((state: RootState) => state.paintings.totalPages);
  const curPage = useSelector((state: RootState) => state.paintings.page);
  const limit = useSelector((state: RootState) => state.paintings.limit);
  const search = useSelector((state: RootState) => state.paintings.search);

  const {
    data: paintings,
    error,
    isLoading,
  } = useGetPaintingsByPageQuery(
    { page: curPage, limit, search },
    { refetchOnMountOrArgChange: true },
  );

  useEffect(() => {
    async function fetchAllAuthors() {
      const dataAuthors = await axios.get(`${import.meta.env.VITE_API_URL}/authors`);
      dispatch(setAuthors(dataAuthors.data));
    }
    async function fetchAllLocations() {
      const dataLocations = await axios.get(`${import.meta.env.VITE_API_URL}/locations`);
      dispatch(setLocations(dataLocations.data));
    }

    fetchAllAuthors();
    fetchAllLocations();
  }, [dispatch]);

  return (
    <div className={`${cls.app} ${theme}`}>
      <Header />
      <main className="main">
        <Search />
        <PaintingsList paintings={paintings} isLoading={isLoading} search={search} error={error} />
        {paintings?.length && <Pagination totalPages={totalPages} curPage={curPage} />}
      </main>
    </div>
  );
}

export default App;
