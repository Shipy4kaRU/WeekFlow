import { configureStore } from "@reduxjs/toolkit";
import isLoggedSliceReducers from "./isLoggedSlice";

const store = configureStore({
  reducer: {
    isLogged: isLoggedSliceReducers,
  },
});

export default store;
