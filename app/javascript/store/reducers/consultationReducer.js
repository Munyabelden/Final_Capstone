import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3000/api/v1/consultations';

export const fetchConsultations = createAsyncThunk('consultation', async () => {
  const response = await axios.get(url);
  const { consultation } = response.data;
  return consultation;
});

export const consultationSlice = createSlice({
  name: 'consultation',
  initialState: {
    consultation: '',
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchConsultations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchConsultations.fulfilled, (state, action) => {
        state.loading = false;
        state.consultation = action.payload;
      })
      .addCase(fetchConsultations.rejected, (state, action) => {
        console.log('error: ', action.payload);
        state.error = true;
      });
  },
});
