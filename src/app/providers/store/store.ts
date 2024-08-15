import { configureStore } from '@reduxjs/toolkit';
import { paintingsApi } from '@/entities/Paintings/model/services/fetchPaintings';
import authorsReducer from './slices/authorsSlice';
import locationsReducer from './slices/locationsSlice';
import { paintingsReducer } from '@/entities/Paintings';

export const store = configureStore({
  reducer: {
    paintings: paintingsReducer,
    authors: authorsReducer,
    locations: locationsReducer,
    [paintingsApi.reducerPath]: paintingsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(paintingsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
