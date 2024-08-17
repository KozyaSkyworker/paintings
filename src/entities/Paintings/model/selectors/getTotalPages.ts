import { RootState } from '@/app/providers/store/store';

export const getTotalPages = (state: RootState) => state.paintings.totalPages || 0;