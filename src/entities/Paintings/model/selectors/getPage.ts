import { RootState } from '@/app/providers/store/store';

export const getPage = (state: RootState) => state.paintings.page || 1;