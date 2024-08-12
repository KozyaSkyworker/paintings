import { configureStore } from '@reduxjs/toolkit';
import { paintingsApi } from '@/entities/Paintings/PaintingsList/services/fetchPaintings';
import PaintingsReducer from '@/entities/Paintings/PaintingsList/slice/PaintingListSlice';

export const store = configureStore({
  reducer: {
    paintings: PaintingsReducer,
    [paintingsApi.reducerPath]: paintingsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(paintingsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
