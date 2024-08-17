import { ChangeEvent, useCallback, useContext, useEffect } from 'react';
import axios from 'axios';
import { Pagination } from '../widgets/Pagination';
import { Search } from '../widgets/Search';
import Header from '../widgets/Header/Header';
import { ThemeContext } from './providers/theme';
import cls from './App.module.scss';
import { RootState } from './providers/store/store';
import { setAuthors, setIsLoadingAuthors } from './providers/store/slices/authorsSlice';
import { setIsLoadingLocations, setLocations } from './providers/store/slices/locationsSlice';
import { PaintingsList, useGetPaintingsByPageQuery } from '@/entities/Paintings';
import { setPage, setSearch } from '@/entities/Paintings/model/slice/paintingsSlice';
import { useAppDispatch, useAppSelector } from './hooks/hooks';

function App() {
  const { theme } = useContext(ThemeContext);

  const dispatch = useAppDispatch();

  // Получение авторов и локаций
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
  }, [dispatch]); // в этом конкретном случае решил сделать загрузку авторов и локция единожды

  const totalPages = useAppSelector((state: RootState) => state.paintings.totalPages);
  const curPage = useAppSelector((state: RootState) => state.paintings.page || 1);
  const limit = useAppSelector((state: RootState) => state.paintings.limit || 6);
  const search = useAppSelector((state: RootState) => state.paintings.search || '');

  const onSearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setPage(1));
      dispatch(setSearch(e.target.value));
      // debounce поиск не получилось сделать
    },
    [dispatch],
  );
  const onSearchClear = useCallback(() => {
    dispatch(setSearch(''));
  }, [dispatch]);

  // Получение картин
  const {
    data: paintings,
    error,
    isLoading,
  } = useGetPaintingsByPageQuery(
    { page: curPage, limit, search },
    { refetchOnMountOrArgChange: true },
  );

  return (
    <div className={`${cls.app} ${theme}`}>
      <Header />
      <main className="main">
        <Search value={search} onChange={onSearchChange} onClear={onSearchClear} />
        <PaintingsList paintings={paintings} isLoading={isLoading} search={search} error={error} />
        {paintings
          ? paintings.length > 0 && <Pagination totalPages={totalPages} curPage={curPage} />
          : ''}
      </main>
    </div>
  );
}

export default App;
