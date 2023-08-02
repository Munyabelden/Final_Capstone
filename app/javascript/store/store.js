import { configureStore } from "@reduxjs/toolkit";
import { consultationSlice } from "./reducers/consultationReducer";
import authSlice from "./reducers/authSlice";
import userReducer from './reducers/userReducer'

const store = configureStore({
  reducer: {
    consultation: consultationSlice,
    auth: authSlice,
    user: userReducer,
  }
})

export default store;
