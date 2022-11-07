import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
} from 'redux/auth/auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
  isRefreshing: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.loading = true;
      state.error = null;
    },
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.loading = false;
      state.isLogin = true;
    },
    [register.rejected](state, { payload }) {
      state.loading = false;
      state.error = payload;
    },
    [logIn.pending](state) {
      state.loading = true;
      state.error = null;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
      state.loading = false;
    },
    [logIn.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
    [logOut.pending](state) {
      state.loading = true;
      state.error = null;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogin = false;
      state.loading = false;
    },
    [logOut.rejected](state, { payload }) {
      state.loading = false;
      state.error = payload;
    },
    [refreshUser.pending](state) {
      state.loading = true;
      state.isRefreshing = true;
      state.error = null;
    },
    [refreshUser.fulfilled](state, { payload }) {
      state.isRefreshing = false;
      state.user = payload;
      state.isLogin = true;
      state.loading = false;
    },
    [refreshUser.rejected](state, { payload }) {
      state.isRefreshing = false;
      state.error = payload;
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
