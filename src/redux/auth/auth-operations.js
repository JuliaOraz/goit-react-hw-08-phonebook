import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/api-auth';
import { toastError } from 'services/toast';

export const register = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.register(data);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      toastError();
      return rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.logIn(data);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      toastError();
      return rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logOut();
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      toastError();
      return rejectWithValue(error);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      const result = await api.refreshUser(persistedToken);

      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return thunkAPI.rejectWithValue(error);
    }
  }
);
