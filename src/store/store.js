import { configureStore } from "@reduxjs/toolkit";
import isLoggedSliceReducers from "./isLoggedSlice";
import accountReducers from "./accountSlice";

const store = configureStore({
  reducer: {
    isLogged: isLoggedSliceReducers,
    account: accountReducers,
  },
});

export default store;
