import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3000/api/v1/consultations';
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

export const fetchConsultations = createAsyncThunk(
  'consultation/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      return rejectWithValue(await err.response.data);
    }
  },
);

export const createConsultation = createAsyncThunk('consultation/create', async (consultationData) => {
  axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;
  const response = await axios.post(url, {consultation: consultationData});
  const { consultation } = response.data;
  return consultation;
});

const initialState = {
  isLoading: false,
  consultations: [],
  consultation: {},
};

export const consultationSlice = createSlice({
  name: 'consultation',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchConsultations.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchConsultations.fulfilled]: (state, action) => {
      state.consultations = action.payload;
      state.isLoading = true;
      state.consultation = state.consultations.reduce(
        (acc, consultation) => ({
          ...acc,
          [consultation.id]: {
            consultationId: consultation.id,
            user: consultation.user_id,
            doctor: consultation.doctor_id,
            duration: consultation.duration,
            date: consultation.date,
            city: consultation.city,
            type: consultation.consultation_type,
          },
        }),
        {},
      );
    },
    [fetchConsultations.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});
