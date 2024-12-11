import { configureStore } from "@reduxjs/toolkit";
import isLoggedSliceReducers from "./isLoggedSlice";
import accountReducers from "./accountSlice";
import weekReducers from "./weekSlice";

const store = configureStore({
  reducer: {
    isLogged: isLoggedSliceReducers,
    account: accountReducers,
    week: weekReducers,
  },
});

export default store;
