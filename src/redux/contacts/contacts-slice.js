import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, { payload }) {
      return {
        ...state,
        items: [...state.items, payload],
        isLoading: false,
        error: null,
      };
    },
    [addContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, { payload }) {
      return {
        ...state,
        items: [...state.items.filter(({ id }) => id !== payload.id)],
        isLoading: false,
        error: null,
      };
    },
    [deleteContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default contactsSlice.reducer;
