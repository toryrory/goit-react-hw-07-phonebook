import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63f68bda59c944921f7604d6.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, ThunkAPI) => {
    try {
      const response = await axios.get('/Contacts');
      return response.data;
    } catch (e) {
      return ThunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, ThunkAPI) => {
    try {
        const response = await axios.post('/Contacts', contact);
      return response.data;
    } catch (e) {
      return ThunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, ThunkAPI) => {
    try {
      const response = await axios.delete(`/Contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return ThunkAPI.rejectWithValue(e.message);
    }
  }
);
