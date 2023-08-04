import { configureStore } from '@reduxjs/toolkit';
import { consultationSlice } from './reducers/consultationReducer';
import authSlice from './reducers/authSlice';
import userReducer from './reducers/userReducer';
import { doctorSlice } from './reducers/doctorSlice';

const store = configureStore({
  reducer: {
    consultation: consultationSlice.reducer,
    auth: authSlice,
    user: userReducer,
    doctors: doctorSlice.reducer,
  },
});

export default store;
