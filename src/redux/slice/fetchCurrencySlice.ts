import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCurrency = createAsyncThunk('currency/fetchCurrencyStatus', async () => {
  const res = await axios.get(`https://api.exchangerate.host/latest?base=USD`);

  return res.data.rates;
});

const initialState: any = {
  itemsCurrency: [],
};

const fetchCurrencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrency.pending, (state) => {
      state.itemsCurrency = [];
    });
    builder.addCase(fetchCurrency.fulfilled, (state, action) => {
      state.itemsCurrency = action.payload;
    });
    builder.addCase(fetchCurrency.rejected, (state) => {
      state.itemsCurrency = [];
    });
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = fetchCurrencySlice.actions;

export default fetchCurrencySlice.reducer;
