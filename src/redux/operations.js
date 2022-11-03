import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/api-phonebook';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.fetchContacts();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      console.log(id);
      const result = await api.deleteContact(id);

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
