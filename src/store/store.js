import { configureStore } from "@reduxjs/toolkit";
import accountReducers from "./accountSlice";
import weekReducers from "./weekSlice";
import loadingReducers from "./loadingSlice";

const store = configureStore({
  reducer: {
    account: accountReducers,
    week: weekReducers,
    loading: loadingReducers,
  },
});

export default store;
