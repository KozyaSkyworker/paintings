import { configureStore } from '@reduxjs/toolkit';
import { paintingsApi } from '@/entities/Paintings/PaintingsList/services/fetchPaintings';
import PaintingsReducer from '@/entities/Paintings/PaintingsList/slice/PaintingListSlice';
import authorsReducer from './slices/authorsSlice';
import locationsReducer from './slices/locationsSlice';

export const store = configureStore({
  reducer: {
    paintings: PaintingsReducer,
    authors: authorsReducer,
    locations: locationsReducer,
    [paintingsApi.reducerPath]: paintingsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(paintingsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
