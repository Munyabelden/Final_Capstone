import { configureStore } from "@reduxjs/toolkit";
import { consultationSlice } from "./reducers/consultationReducer";

const store = configureStore({
  reducer: {
    consultation: consultationSlice,
  }
})

export default store;
