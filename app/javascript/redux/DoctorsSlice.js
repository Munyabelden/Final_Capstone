import { createSlice } from '@reduxjs/toolkit';

const fetchDoctors = () => async (dispatch) => {
  try {
    const response = await fetch('http://127.0.0.1:3000/api/v1/doctors');
    const data = await response.json();
    dispatch(setDoctors(data));
  } catch (error) {
    // Handle error if the API request fails
    console.error('Error fetching doctors:', error);
  }
};

const createDoctor = (doctorData) => async (dispatch) => {
  try {
    const response = await fetch('http://127.0.0.1:3000/api/v1/doctors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(doctorData),
    });
    const data = await response.json();
    dispatch(addDoctor(data));
  } catch (error) {
    // Handle error if the API request fails
    console.error('Error creating doctor:', error);
  }
};

// const deleteDoctor = (doctorId) => async (dispatch) => {
//   try {
//     await fetch(`http://127.0.0.1:3000/api/v1/doctors/${doctorId}`, {
//       method: 'DELETE',
//     });
//     dispatch(deleteDoctor(doctorId));
//   } catch (error) {
//     // Handle error if the API request fails
//     console.error('Error deleting doctor:', error);
//   }
// };

const initialState = {
  doctors: [],
};

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    setDoctors(state, action) {
      state.doctors = action.payload;
    },
    addDoctor(state, action) {
      state.doctors.push(action.payload);
    },
    deleteDoctor(state, action) {
      const doctorId = action.payload;
      state.doctors = state.doctors.filter((doctor) => doctor.id !== doctorId);
    },
  },
});

export const { setDoctors, addDoctor } = doctorsSlice.actions;

export { fetchDoctors, createDoctor };
export default doctorsSlice.reducer;
