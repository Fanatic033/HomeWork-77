import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../../axiosApi.ts';
import {Imessage, MessageMutation} from '../../types.ts';


export const fetchBooks = createAsyncThunk<Imessage[]>('messages/fetchAll',
  async () => {
    const {data: contacts} = await axiosApi.get('/messages');
    return contacts;
  }
);

export const createMessage = createAsyncThunk<void, MessageMutation>('messages/create',
  async (messageMutation) => {
    const formData = new FormData();
    formData.append('author', messageMutation.author);
    formData.append('message', messageMutation.message);
    if (messageMutation.image) {
      formData.append('image', messageMutation.image);
    }
    await axiosApi.post('/messages', formData);
  }
);