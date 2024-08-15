import {Imessage} from '../../types.ts';
import {createSlice} from '@reduxjs/toolkit';
import {createMessage, fetchBooks} from './BookThunks.ts';

export interface BookState {
  items: Imessage[],
  message: Imessage | null,
  isLoading: boolean,
  isFetching: boolean,
}

const initialState: BookState = {
  items: [],
  message: null,
  isLoading: false,
  isFetching: false,
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
    builder
      .addCase(createMessage.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(createMessage.fulfilled, (state) => {
        state.isFetching = false;
      })
      .addCase(createMessage.rejected, (state) => {
        state.isFetching = false;
      });
  },
  selectors: {
    selectContacts: (state) => state.items,
    selectFetching: (state) => state.isFetching
  }
});

export const BookReducer = BookSlice.reducer;

export const {selectContacts, selectFetching} = BookSlice.selectors;