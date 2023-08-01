import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  doctors: [],
};

const doctorsSlice = createSlice(
  {
    name: 'doctors',
    initialState,
    reducers: {
      setDoctors(state, action) {
        state.doctors = action.payload;
      },
    },
  },
);

export const { setDoctors } = doctorsSlice.actions;

const fetchDoctors = () => async (dispatch) => {
  const response = await fetch('https://book-flix.onrender.com/api/v1/services');
  const data = await response.json();
  dispatch(setDoctors(data));
};

const addDoctor = (doctor) => async (dispatch) => {
  await fetch('https://book-flix.onrender.com/api/v1/services', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(doctor),
  });
  dispatch(fetchDoctors());
};

const deleteDoctor = (id) => async (dispatch) => {
  await fetch(`https://book-flix.onrender.com/api/v1/services/${id}`, {
    method: 'DELETE',
  });
  dispatch(fetchDoctors());
};

export { fetchDoctors, addDoctor, deleteDoctor };
export default doctorsSlice.reducer;
