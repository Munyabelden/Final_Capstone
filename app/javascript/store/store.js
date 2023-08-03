import { configureStore } from "@reduxjs/toolkit";
import { consultationSlice } from "./reducers/consultationReducer";
import authSlice from "./reducers/authSlice";
import userReducer from './reducers/userReducer';
import { doctorsSlice } from './reducers/doctorSlice';

const store = configureStore({
  reducer: {
    consultation: consultationSlice.reducer,
    auth: authSlice,
    user: userReducer,
    doctors: doctorsSlice.reducer,
  }
})

export default store;
