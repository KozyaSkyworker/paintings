import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Location } from '@/app/types/common';

export interface AuthorsState {
  isLoading: boolean;
  locations?: Location[]
}

const initialState: AuthorsState = {
  isLoading: true,
  locations: [],
};

export const locaitonsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    setLocations: (state, action:PayloadAction<Location[]>) => {
      state.locations = action.payload;
    },
    setIsLoadingLocations: (state, action:PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLocations, setIsLoadingLocations } = locaitonsSlice.actions;

export default locaitonsSlice.reducer;
