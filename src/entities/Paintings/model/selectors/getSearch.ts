import { RootState } from '@/app/providers/store/store';

export const getSearch = (state: RootState) => state.paintings.search || '';