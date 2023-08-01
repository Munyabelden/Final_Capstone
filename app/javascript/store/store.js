import { configureStore } from "@reduxjs/toolkit";
import { consultationSlice } from "./reducers/consultationReducer";
import authSlice from "./reducers/authSlice";

const store = configureStore({
  reducer: {
    consultation: consultationSlice,
    auth: authSlice,
  }
})

export default store;
