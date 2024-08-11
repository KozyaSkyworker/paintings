import { configureStore } from '@reduxjs/toolkit';
import { paintingsApi } from '../../../entities/Paintings/PaintingsList/services/fetchPaintings';
import PaintingsReducer from '../../../entities/Paintings/PaintingsList/slice/PaintingListSlice';

export const store = configureStore({
  reducer: {
    paintings: PaintingsReducer,
    [paintingsApi.reducerPath]: paintingsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(paintingsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
