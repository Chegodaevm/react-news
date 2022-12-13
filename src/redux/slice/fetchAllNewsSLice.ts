import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface IParamsSlider {
  category: string;
}

interface Params {
  category: string;
}

export const fetchAllNews = createAsyncThunk(
  'allNewsSlider/fetchAllNewsSlider',
  async (params: Params) => {
    const { category } = params;
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=${category}&language=ru&pageSize=5&page=1&sortBy=popularity&apiKey=60b2878aea8c4be687c1dee577f01f53`,
    );

    return res.data.articles;
  },
);

type TFetcNewsSlideSlice = {
  itemsNews: any;
  categoryId: number;
  currentPage: number;
};

const initialState: TFetcNewsSlideSlice = {
  itemsNews: [],
  categoryId: 0,
  currentPage: 1,
};

const fetchAllNewsSlice = createSlice({
  name: 'allNewsSlider',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllNews.pending, (state) => {
      state.itemsNews = [];
    });
    builder.addCase(fetchAllNews.fulfilled, (state, action) => {
      state.itemsNews = action.payload;
    });
    builder.addCase(fetchAllNews.rejected, (state) => {
      state.itemsNews = [];
    });
  },
});

// eslint-disable-next-line no-empty-pattern
export const { setCategoryId } = fetchAllNewsSlice.actions;

export default fetchAllNewsSlice.reducer;
