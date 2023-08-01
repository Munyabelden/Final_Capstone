import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import setAuthToken from './axios-client';

const rootUrl = 'http://localhost:3000/api/v1';

export const login = createAsyncThunk('login', async (email, password) => {
  const response = await axios.post(`${rootUrl}/users/login`, { user: { email, password } }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if(response.status.code === 200) {
    const user = response.data;
    const token = response.headers.get('Authorization');
    localStorage.setItem("auth_token", token);
    setAuthToken(token);
    return {
      user,
      token
    };
  } else {
    return 'fail'
  } 
});

export const signup = createAsyncThunk('signup', async (userData) => {
  const response = await axios.post(`${rootUrl}/users/signup`, userData, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.status.code === 200) {
    const user = response.data;
    const token = response.headers.get('Authorization');
    localStorage.setItem("auth_token", token);
    setAuthToken(token);
    return {
      user,
      token
    };
  } else {
    return 'fail'
  }
});

export const logout = createAsyncThunk('logout', async (user) => {
  await axios.delete(`${rootUrl}/users/logout`);
  localStorage.removeItem('auth_token');
  setAuthToken('');
});

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: null,
    isAuthenticated: false,
    token: null,
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.currentUser = payload.user;
        state.token = payload.token;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.currentUser = payload.user;
        state.token = payload.token;
        state.isAuthenticated = true;
      })
      .addCase(signup.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.currentUser = null;
        state.token = null;
        state.isAuthenticated = false;
      })
      .addCase(logout.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
  },
});

export default AuthSlice.reducer;