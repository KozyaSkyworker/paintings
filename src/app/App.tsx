import { ChangeEvent, useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination } from '../widgets/Pagination';
import { Search } from '../widgets/Search';
import Header from '../widgets/Header/Header';
import { ThemeContext } from './providers/theme';
import cls from './App.module.scss';
import { setAuthors, setIsLoadingAuthors } from './providers/store/slices/authorsSlice';
import { setIsLoadingLocations, setLocations } from './providers/store/slices/locationsSlice';
import { PaintingsList, useGetPaintingsByPageQuery } from '@/entities/Paintings';
import { setPage, setSearch } from '@/entities/Paintings/model/slice/paintingsSlice';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { getPage } from '@/entities/Paintings/model/selectors/getPage';
import { getLimit } from '@/entities/Paintings/model/selectors/getLimit';
import { getSearch } from '@/entities/Paintings/model/selectors/getSearch';
import { getTotalPages } from '@/entities/Paintings/model/selectors/getTotalPages';

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

  const totalPages = useAppSelector(getTotalPages);
  const curPage = useAppSelector(getPage);
  const limit = useAppSelector(getLimit);
  const search = useAppSelector(getSearch);

  const [localSearch, setLocalSearch] = useState(search);

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(setPage(1));
      dispatch(setSearch(localSearch));
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [localSearch, dispatch]);

  const onSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
  }, []);

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
        <Search value={localSearch} onChange={onSearchChange} onClear={onSearchClear} />
        <PaintingsList paintings={paintings} isLoading={isLoading} search={search} error={error} />
        {paintings
          ? paintings.length > 0 && <Pagination totalPages={totalPages} curPage={curPage} />
          : ''}
      </main>
    </div>
  );
}

export default App;
