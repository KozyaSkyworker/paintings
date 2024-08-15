import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PaintingsState {
  hasMore: boolean;
  // как будто бы можно было бы вынести в отдельный стейт,
  // потому что тут как-то не смотрится
  search: string;
  // как будто бы можно было бы вынести в отдельный стейт,
  // потому что тут как-то не смотрится
  totalPages?: number;
  page: number;
  limit: number;
}

const initialState: PaintingsState = {
  page: 1,
  limit: 6,
  search: '',
  totalPages: undefined,
  hasMore: true,
};

export const paintingSlice = createSlice({
  name: 'paintings',
  initialState,
  reducers: {
    setPage: (state, action:PayloadAction<number>) => {
      state.page = action.payload;
    },
    setTotalPages: (state, action:PayloadAction<number | null | undefined>) => {
      if (action.payload) {
        state.totalPages = action.payload;
      }
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPage, setTotalPages, setSearch } = paintingSlice.actions;
export const { reducer: paintingsReducer } = paintingSlice;
