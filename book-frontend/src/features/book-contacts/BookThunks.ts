import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../../axiosApi.ts';


export const fetchBooks = createAsyncThunk('messages/fetchAll',
  async () => {
    const {data: contacts} = await axiosApi.get('messages');
    return contacts;
  }
);