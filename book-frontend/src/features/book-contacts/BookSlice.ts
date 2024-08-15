import {Imessage} from '../../types.ts';
import {createSlice} from '@reduxjs/toolkit';
import {fetchBooks} from './BookThunks.ts';

export interface BookState {
  items: Imessage[],
  message: Imessage | null,
  isLoading: boolean,
}

const initialState: BookState = {
  items: [],
  message: null,
  isLoading: false,
};

export const BookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, {payload: messages}) => {
        state.isLoading = false;
        state.items = messages;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
      });
  },
  selectors: {
    selectContacts: (state) => state.items,
  }
});

export const BookReducer = BookSlice.reducer;

export const {selectContacts} = BookSlice.selectors;