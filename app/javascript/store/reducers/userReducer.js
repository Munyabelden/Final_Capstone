import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCurrentUser = createAsyncThunk('user/fetchCurrentUser', async () => {
  const response = await axios.get('/api/v1/current_user');
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default userSlice.reducer;
