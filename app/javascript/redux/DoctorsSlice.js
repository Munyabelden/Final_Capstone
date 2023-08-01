import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Doctors: [],
};

const DoctorsSlice = createSlice(
  {
    name: 'Doctors',
    initialState,
    reducers: {
      setDoctors(state, action) {
        state.Doctors = action.payload;
      },
    },
  },
);

export const { setDoctors } = DoctorsSlice.actions;

const fetchDoctors = () => async (dispatch) => {
  const response = await fetch('https://kelvin.com.com/api/v1/services');
  const data = await response.json();
  dispatch(setDoctors(data));
};

const addMovie = (movie) => async (dispatch) => {
  await fetch('https://kelvin.com/api/v1/services', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  });
  dispatch(fetchDoctors());
};

const deleteMovie = (id) => async (dispatch) => {
  await fetch(`https://kelvin.com/api/v1/services/${id}`, {
    method: 'DELETE',
  });
  dispatch(fetchDoctors());
};

export { fetchDoctors, addMovie, deleteMovie };
export default DoctorsSlice.reducer;
