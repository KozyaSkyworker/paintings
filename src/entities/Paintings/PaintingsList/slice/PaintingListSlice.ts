import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PaintingsListState {
  page: number;
  limit: number;
  search: string;
  totalCount?: number;
  hasMore: boolean;
}

const initialState: PaintingsListState = {
  page: 1,
  limit: 6,
  search: '',
  totalCount: undefined,
  hasMore: true,
};

export const paintingListSlice = createSlice({
  name: 'paintings',
  initialState,
  reducers: {
    setPage: (state, action:PayloadAction<number>) => {
      state.page = action.payload;
    },
    setTotalCount: (state, action:PayloadAction<number>) => {
      state.totalCount = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPage, setTotalCount, setSearch } = paintingListSlice.actions;

export default paintingListSlice.reducer;
