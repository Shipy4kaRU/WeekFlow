import { configureStore } from "@reduxjs/toolkit";
import isLoggedSliceReducers from "./isLoggedSlice";
import accountReducers from "./accountSlice";
import weekReducers from "./weekSlice";
import loadingReducers from "./loadingSlice";

const store = configureStore({
  reducer: {
    isLogged: isLoggedSliceReducers,
    account: accountReducers,
    week: weekReducers,
    loading: loadingReducers,
  },
});

export default store;
