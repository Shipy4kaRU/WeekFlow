import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  gender: "",
};

const accountSlice = createSlice({
  name: "gender",
  initialState,
  reducers: {
    setAccountData(state, action) {
      const { username, password, gender } = action.payload;
      state.username = username;
      state.password = password;
      state.gender = gender;
    },
    setUsername(state, action) {
      state.username = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
  },
});

export default accountSlice.reducer;
export const accountActions = accountSlice.actions;
