import { createSlice } from "@reduxjs/toolkit";

const initialState = [["s"], [], [], [], [], [], []];

const weekSLice = createSlice({
  name: "week",
  initialState,
  reducers: {
    setTask(state, action) {
      state[action.payload.day][action.payload.inputNumber] =
        action.payload.text;
    },
  },
});

export default weekSLice.reducer;
export const weekActions = weekSLice.actions;
