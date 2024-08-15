import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Author } from '@/app/types/common';

export interface AuthorsState {
  isLoading: boolean;
  authors?: Author[]
}

const initialState: AuthorsState = {
  isLoading: true,
  authors: [],
};

export const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {
    setAuthors: (state, action:PayloadAction<Author[]>) => {
      state.authors = action.payload;
    },
    setIsLoadingAuthors: (state, action:PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthors, setIsLoadingAuthors } = authorsSlice.actions;

export default authorsSlice.reducer;
