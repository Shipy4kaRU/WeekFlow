import { createSlice } from "@reduxjs/toolkit";

const initialState = [[], [], [], [], [], [], []];

const weekSLice = createSlice({
  name: "week",
  initialState,
  reducers: {
    setTask(state, action) {
      const { day, inputNumber, text, isPassed } = action.payload;
      if (!state[day][inputNumber])
        state[day][inputNumber] = { text: text, isPassed: isPassed };
      else {
        state[day][inputNumber].text = text;
        state[day][inputNumber].isPassed = isPassed;
      }
    },
    setPassed(state, action) {
      const { day, inputNumber, isPassed } = action.payload;
      state[day][inputNumber].isPassed = isPassed;
    },
  },
});

export default weekSLice.reducer;
export const weekActions = weekSLice.actions;
