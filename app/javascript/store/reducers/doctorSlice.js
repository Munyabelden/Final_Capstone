import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const BASE_URL = 'http://localhost:3000/api/v1';
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

export const fetchDoctors = createAsyncThunk(
  'doctors/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/doctors`);
      return response.data;
    } catch (err) {
      return rejectWithValue(await err.response.data);
    }
  },
);

export const initializeDoctors = createAsyncThunk(
  'doctors/initializeDoctors',
  async (_, { dispatch }) => {
    try {
      const response = await axios.get(`${BASE_URL}/doctors`);
      const { data } = response;
      dispatch(fetchDoctors.fulfilled(data));
    } catch (err) {
      throw new Error(err.message);
    }
  },
);

export const addDoctor = createAsyncThunk(
  'doctors/addDoctor',
  async (doctorData, { rejectWithValue }) => {
    try {
      axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;
      const response = await axios.post('http://127.0.0.1:3000/api/v1//doctors', doctorData);
      return response.data;
    } catch (err) {
      return rejectWithValue(await err.response.data);
    }
  },
);

const initialState = {
  isLoading: false,
  doctors: [],
  doctor: {},
};

export const doctorSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDoctors.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchDoctors.fulfilled]: (state, action) => {
      state.doctors = action.payload;
      state.isLoading = true;
      state.doctor = state.doctors.reduce(
        (acc, doctor) => ({
          ...acc,
          [doctor.id]: {
            doctorId: doctor.id,
            name: doctor.name,
            skill: doctor.specialization,
            bio: doctor.bio,
            image: doctor.image,
            experience: doctor.experience,
            rate: doctor.rate,
          },
        }),
        {},
      );
    },
    [fetchDoctors.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [addDoctor.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [addDoctor.fulfilled]: (state, action) => {
      state.doctors.push(action.payload);
      state.isLoading = false;
    },
    [addDoctor.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const { selectDoctor } = doctorSlice.actions;
export default doctorSlice.reducer;