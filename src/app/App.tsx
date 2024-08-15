import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, useCallback, useContext, useEffect } from 'react';
import axios from 'axios';
import { Pagination } from '../widgets/Pagination';
import { Search } from '../widgets/Search';
import { PaintingsList } from '../entities/Paintings/PaintingsList';
import Header from '../widgets/Header/Header';
import { ThemeContext } from './providers/theme';
import cls from './App.module.scss';
import { RootState } from './providers/store/store';
import { setAuthors, setIsLoadingAuthors } from './providers/store/slices/authorsSlice';
import { useGetPaintingsByPageQuery } from '@/entities/Paintings/PaintingsList/services/fetchPaintings';
import { setIsLoadingLocations, setLocations } from './providers/store/slices/locationsSlice';
import { setPage, setSearch } from '@/entities/Paintings/PaintingsList/slice/PaintingListSlice';

function App() {
  const { theme } = useContext(ThemeContext);

  const dispatch = useDispatch();

  // selectors
  const totalPages = useSelector((state: RootState) => state.paintings.totalPages);
  const curPage = useSelector((state: RootState) => state.paintings.page);
  const limit = useSelector((state: RootState) => state.paintings.limit);
  const search = useSelector((state: RootState) => state.paintings.search);

  // search funcs
  const onSearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setPage(1));
      dispatch(setSearch(e.target.value));
    },
    [dispatch],
  );
  const onSearchClear = useCallback(() => {
    dispatch(setSearch(''));
  }, [dispatch]);

  // get paintings
  const {
    data: paintings,
    error,
    isLoading,
  } = useGetPaintingsByPageQuery(
    { page: curPage, limit, search },
    { refetchOnMountOrArgChange: true },
  );

  // get authors and locations
  useEffect(() => {
    async function fetchAllAuthors() {
      const dataAuthors = await axios.get(`${import.meta.env.VITE_API_URL}/authors`);
      dispatch(setAuthors(dataAuthors.data));
      dispatch(setIsLoadingAuthors(false));
    }
    async function fetchAllLocations() {
      const dataLocations = await axios.get(`${import.meta.env.VITE_API_URL}/locations`);
      dispatch(setLocations(dataLocations.data));
      dispatch(setIsLoadingLocations(false));
    }

    // думал сделать, что если авторы или локации не подгрузились, то не показывать картины,
    // но решил логичние показывать заглушики "author" и "location" соответсвенно

    fetchAllAuthors();
    fetchAllLocations();
  }, [dispatch]);

  return (
    <div className={`${cls.app} ${theme}`}>
      <Header />
      <main className="main">
        <Search value={search} onChange={onSearchChange} onClear={onSearchClear} />
        <PaintingsList paintings={paintings} isLoading={isLoading} search={search} error={error} />
        {paintings?.length && <Pagination totalPages={totalPages} curPage={curPage} />}
      </main>
    </div>
  );
}

export default App;
