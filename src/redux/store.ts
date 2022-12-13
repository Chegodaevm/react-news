import { configureStore } from '@reduxjs/toolkit';
import newsSlider from './slice/fetchNewsSlice';
import currency from './slice/fetchCurrencySlice';
import news from './slice/fetchAllNewsSLice';

export const store = configureStore({
  reducer: {
    newsSlider,
    currency,
    news,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
