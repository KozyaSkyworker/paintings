import { RootState } from '@/app/providers/store/store';

export const getLimit = (state: RootState) => state.paintings.limit || 6;