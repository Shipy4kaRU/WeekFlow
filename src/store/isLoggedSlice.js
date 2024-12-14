import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
};

const isLoggedSlice = createSlice({
  name: "isLogged",
  initialState,
  reducers: {
    setLogginValue(state, action) {
      state.isLogged = action.payload;
    },
  },
});

export default isLoggedSlice.reducer;
export const isLoggedAction = isLoggedSlice.actions;
