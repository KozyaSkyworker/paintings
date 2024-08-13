import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Author } from '@/app/types/common';

export interface AuthorsState {
  authors?: Author[]
}

const initialState: AuthorsState = {
  authors: [],
};

export const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {
    setAuthors: (state, action:PayloadAction<Author[]>) => {
      state.authors = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthors } = authorsSlice.actions;

export default authorsSlice.reducer;
