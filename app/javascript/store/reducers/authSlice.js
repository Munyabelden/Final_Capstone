import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import setAuthToken from './axios-client';

const rootUrl = 'http://localhost:3000/api/v1';

export const login = createAsyncThunk('login', async (userData, thunkAPI) => {
  try {
    const response = await axios.post(`${rootUrl}/users/login`, userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const user = response.data.data;
    const token = response.headers.get('Authorization');
    localStorage.setItem("auth_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setAuthToken(token);
    
    return {
      user,
      token,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
});

export const signup = createAsyncThunk('signup', async (userData, thunkAPI) => {
  try {
    const response = await axios.post(`${rootUrl}/users/signup`, userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const user = response.data.data;
    const token = response.headers.get('Authorization');
    localStorage.setItem("auth_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setAuthToken(token);

    return {
      user: user,
      token: token,
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
});

export const logout = createAsyncThunk('logout', async (_,thunkAPI) => {
  try {
    await axios.delete(`${rootUrl}/users/logout`);
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    setAuthToken('');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
});

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: null,
    isAuthenticated: false,
    token: null,
    loading: true,
    error: null,
  },
  reducers: {
    setAuthentication: (state) => {
      const token = localStorage.getItem("auth_token");
      const user = JSON.parse(localStorage.getItem("user"));
      if(token && user){
        setAuthToken(token);
        return {
          ...state,
          isAuthenticated: true,
          currentUser: user,
          token: token,
          loading: false,
        }
      } else {
        setAuthToken('');
        return {
          ...state,
          currentUser: null,
          token: null,
          isAuthenticated: false,
          loading: false,
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(login.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        currentUser: payload.user,
        token: payload.token,
        isAuthenticated: true,
      }))
      .addCase(login.rejected, (state, {payload}) => ({
        ...state,
        loading: false,
        error: payload
      }))
      .addCase(signup.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(signup.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        currentUser: payload.user,
        token: payload.token,
        isAuthenticated: true,
      }))
      .addCase(signup.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload
      }))
      .addCase(logout.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(logout.fulfilled, (state) => ({
        ...state,
        loading: false,
        currentUser: null,
        token: null,
        isAuthenticated: false,
      }))
      .addCase(logout.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload
      }))
  },
});

export const { setAuthentication } = AuthSlice.actions;
export default AuthSlice.reducer;