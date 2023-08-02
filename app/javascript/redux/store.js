import { configureStore } from '@reduxjs/toolkit';
import doctorsSlice from './DoctorsSlice';
import userReducer from './UsersSlice';

const store = configureStore({
  reducer: {
    doctors: doctorsSlice,
    users: userReducer,
  },
});

export default store;
