import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  ["я человек", "а я не человек"],
  ["а я?"],
  ["а я?"],
  ["и я?"],
  ["а я?"],
  ["а я?", "а я?", "а я?"],
  ["а я?", "и я?", "и я?", "и я?", "и я?", "и я?"],
];

const weekSLice = createSlice({
  name: "week",
  initialState,
  reducers: {
    setTask(state, action) {},
  },
});

export default weekSLice.reducer;
export const weekActions = weekSLice.actions;
