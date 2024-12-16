import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  calendar: false,
  profile: false,
  settings: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading(state, action) {
      const loadingStatus = action.payload;
      state.calendar = loadingStatus;
      state.profile = loadingStatus;
      state.settings = loadingStatus;
    },
  },
});

export default loadingSlice.reducer;
export const loadingActions = loadingSlice.actions;
