import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  calendar: true,
  profile: true,
  settings: true,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading(state) {
      state.calendar = true;
      state.profile = true;
      state.settings = true;
    },
    stopLoading(state) {
      state.calendar = false;
      state.profile = false;
      state.settings = false;
    },
  },
});

export default loadingSlice.reducer;
export const loadingActions = loadingSlice.actions;
