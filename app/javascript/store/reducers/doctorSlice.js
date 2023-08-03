import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3000/api/v1/doctors';
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

export const fetchDoctors = createAsyncThunk('doctors/fetch', async () => {
  const response = await axios.get(url);
  const { doctors } = response.data;
  return doctors;
});

export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: {
    doctors: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.doctors = action.payload;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        console.log('Error: ', action.payload);
      });
  },
});
