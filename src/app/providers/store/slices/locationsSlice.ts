import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Location } from '@/app/types/common';

export interface AuthorsState {
  locations?: Location[]
}

const initialState: AuthorsState = {
  locations: [],
};

export const locaitonsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    setLocations: (state, action:PayloadAction<Location[]>) => {
      state.locations = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLocations } = locaitonsSlice.actions;

export default locaitonsSlice.reducer;
