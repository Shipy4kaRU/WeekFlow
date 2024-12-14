import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "LoliHunter",
  password: "admin123",
  gender: "мужской",
};

const accountSlice = createSlice({
  name: "gender",
  initialState,
  reducers: {
    setAccountData(state, action) {
      const { username, password, gender } = action.payload;
      state = {
        username,
        password,
        gender,
      };
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
