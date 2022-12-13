import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface IParamsSlider {
  category: string;
}

export const fetchNews = createAsyncThunk('newsSlider/fetchNewsStatus', async () => {
  const res = await axios.get(
    `https://newsapi.org/v2/everything?q=apple&language=ru&pageSize=11&sortBy=popularity&apiKey=60b2878aea8c4be687c1dee577f01f53`,
  );

  return res.data.articles;
});

type TFetcNewsSlideSlice = {
  itemsNewsSlider: any;
};

const initialState: TFetcNewsSlideSlice = {
  itemsNewsSlider: [],
};

const fetchNewsSlice = createSlice({
  name: 'newsSlider',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.itemsNewsSlider = [];
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.itemsNewsSlider = action.payload;
    });
    builder.addCase(fetchNews.rejected, (state) => {
      state.itemsNewsSlider = [];
    });
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = fetchNewsSlice.actions;

export default fetchNewsSlice.reducer;
